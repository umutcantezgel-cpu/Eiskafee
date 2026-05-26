"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import * as Icons from "lucide-react";
import Matter from "matter-js";
import { FoodIcon } from "./FoodIcon";

const DESSERT_ITEMS = [
  { icon: 'Cookie',   color: '#CC624C', size: 40, type: 'circle' },
  { icon: 'Cookie',   color: '#E4C0A8', size: 38, type: 'circle' },
  { icon: 'Sparkles', color: '#eedfcc', size: 32, type: 'circle' },
  { icon: 'Coffee',   color: '#5c3d35', size: 44, type: 'circle' },
  { icon: 'Cake',     color: '#CC624C', size: 46, type: 'square' },
  { icon: 'Heart',    color: '#CC624C', size: 34, type: 'circle' },
  { icon: 'Star',     color: '#E4C0A8', size: 30, type: 'circle' },
  { icon: 'Droplets', color: '#f5efe8', size: 36, type: 'circle' },
];

export const PhysicsPlayground = ({ size = 360 }: { size?: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRefs = useRef<Matter.Body[]>([]);
  const domRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const items = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 14; i++) {
      arr.push({ ...DESSERT_ITEMS[i % DESSERT_ITEMS.length], id: i });
    }
    return arr;
  }, []);

  useEffect(() => {
    if (reduced) return;
    const container = containerRef.current;
    if (!container) return;

    // Matter.js setup
    const engine = Matter.Engine.create({ gravity: { x: 0, y: 0.85, scale: 0.001 } });
    const runner = Matter.Runner.create();
    const world = engine.world;

    const rect = container.getBoundingClientRect();
    let w = rect.width;
    let h = rect.height;

    // Default walls, will be updated via ResizeObserver immediately
    const wallOpts = { isStatic: true, restitution: 0.5 };
    const ground = Matter.Bodies.rectangle(w / 2, h + 50, w * 2, 100, wallOpts);
    const left   = Matter.Bodies.rectangle(-50, h / 2, 100, h * 2, wallOpts);
    const right  = Matter.Bodies.rectangle(w + 50, h / 2, 100, h * 2, wallOpts);
    Matter.World.add(world, [ground, left, right]);

    items.forEach((item, i) => {
      // initial x in the middle to prevent escaping before container resize
      const x = w ? 60 + Math.random() * (w - 120) : 100 + Math.random() * 50;
      const y = -120 - i * 40;
      const body = item.type === 'square'
        ? Matter.Bodies.rectangle(x, y, item.size, item.size, {
            chamfer: { radius: item.size * 0.3 }, restitution: 0.7, friction: 0.05, density: 0.0015,
          })
        : Matter.Bodies.circle(x, y, item.size / 2, { restitution: 0.78, friction: 0.05, density: 0.0015 });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.2);
      Matter.World.add(world, body);
      bodyRefs.current[i] = body;
    });

    const mouse = Matter.Mouse.create(container);
    // Explicitly set pixelRatio to 1 because we are rendering in CSS pixels (DOM), not a scaled Canvas
    mouse.pixelRatio = 1;
    const mc = Matter.MouseConstraint.create(engine, {
      mouse, constraint: { stiffness: 0.2, damping: 0.12, render: { visible: false } },
    });
    Matter.World.add(world, mc);

    // --- Touch event forwarding for mobile ---
    // Matter.Mouse.create on a non-canvas div doesn't natively bind touch events.
    // We manually map touch coordinates into the mouse object so MouseConstraint works.
    const getOffset = () => container.getBoundingClientRect();

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      const offset = getOffset();
      const px = touch.clientX - offset.left;
      const py = touch.clientY - offset.top;
      (mouse as any).position.x = px;
      (mouse as any).position.y = py;
      (mouse as any).mousedownPosition.x = px;
      (mouse as any).mousedownPosition.y = py;
      mouse.button = 0;
      container.style.cursor = 'grabbing';
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      const offset = getOffset();
      (mouse as any).position.x = touch.clientX - offset.left;
      (mouse as any).position.y = touch.clientY - offset.top;
    };

    const onTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      (mouse as any).mouseupPosition.x = (mouse as any).position.x;
      (mouse as any).mouseupPosition.y = (mouse as any).position.y;
      mouse.button = -1;
      container.style.cursor = 'grab';
    };

    container.addEventListener('touchstart', onTouchStart, { passive: false });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd, { passive: false });

    Matter.Runner.run(runner, engine);

    let raf: number;
    const sync = () => {
      for (let i = 0; i < items.length; i++) {
        const body = bodyRefs.current[i];
        const dom = domRefs.current[i];
        if (!body || !dom) continue;
        const { x, y } = body.position;
        dom.style.transform = `translate(${x}px, ${y}px) rotate(${body.angle}rad)`;
      }
      raf = requestAnimationFrame(sync);
    };
    sync();

    const ro = new ResizeObserver(([entry]) => {
      const r = entry.contentRect;
      w = r.width;
      h = r.height;
      if (w > 0 && h > 0) {
        Matter.Body.setPosition(ground, { x: r.width / 2, y: r.height + 50 });
        Matter.Body.setPosition(left,   { x: -50, y: r.height / 2 });
        Matter.Body.setPosition(right,  { x: r.width + 50, y: r.height / 2 });
      }
    });
    ro.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      Matter.Runner.stop(runner);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      bodyRefs.current = [];
    };
  }, [reduced, items]);

  if (reduced) {
    return <FoodIcon icon="Package" label={"Hero Foto\nPancake Box"} size="lg" className="w-full h-full" />;
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative', width: '100%', height: size,
        borderRadius: '54% 46% 56% 44%/50% 54% 46% 50%',
        background: 'rgba(245,239,232,0.3)',
        overflow: 'hidden',
        touchAction: 'none',
        boxShadow: 'inset 0 0 40px rgba(204,98,76,0.10), 0 20px 60px rgba(45,31,25,.18)',
        cursor: 'grab',
      }}
      onMouseDown={(e) => { e.currentTarget.style.cursor = 'grabbing'; }}
      onMouseUp={(e) => { e.currentTarget.style.cursor = 'grab'; }}
      onMouseLeave={(e) => { e.currentTarget.style.cursor = 'grab'; }}
    >
      <div 
        style={{
          position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)',
          fontFamily: 'var(--font-nunito), sans-serif', fontWeight: 800, fontSize: '0.85rem',
          color: '#CC624C', opacity: 0.6, pointerEvents: 'none',
          animation: 'fadeOut 8s forwards'
        }}
      >
        Spiel mit uns!
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeOut {
          0%, 80% { opacity: 0.6; }
          100% { opacity: 0; }
        }
      `}} />
      
      {items.map((item, i) => {
        const LIcon = (Icons as any)[item.icon] || Icons.Sparkles;
        return (
          <div
            key={item.id}
            ref={el => { domRefs.current[i] = el; }}
            style={{
              position: 'absolute', top: -item.size / 2, left: -item.size / 2,
              width: item.size, height: item.size,
              background: item.color, borderRadius: item.type === 'circle' ? '50%' : 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(45,31,25,0.18)',
              pointerEvents: 'none', willChange: 'transform',
            }}
          >
            <LIcon size={item.size * 0.45} color="#fff" strokeWidth={2} />
          </div>
        );
      })}
    </div>
  );
};
