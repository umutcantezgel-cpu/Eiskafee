"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import Matter from "matter-js";
import { FoodIcon } from "@/components/ui/FoodIcon"; // Changed from Ic to FoodIcon based on the project structure

const DESSERT_ITEMS = [
  { icon: "Cookie", color: "#b34832", size: 40, type: "circle" },
  { icon: "Cookie", color: "#E4C0A8", size: 38, type: "circle" },
  { icon: "Sparkles", color: "#eedfcc", size: 32, type: "circle" },
  { icon: "Coffee", color: "#5c3d35", size: 44, type: "circle" },
  { icon: "Cake", color: "#b34832", size: 46, type: "square" },
  { icon: "Heart", color: "#b34832", size: 34, type: "circle" },
  { icon: "Star", color: "#E4C0A8", size: 30, type: "circle" },
  { icon: "Package", color: "#f5efe8", size: 36, type: "circle" }, // Droplets changed to Package as it is available
];

import * as Icons from "lucide-react";

export default function PhysicsPlayground({ size = 360 }: { size?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRefs = useRef<any[]>([]);
  const domRefs = useRef<(HTMLDivElement | null)[]>([]);

  const reduced = useReducedMotion();
  const matterAvailable = typeof window !== "undefined";

  const items = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 14; i++)
      arr.push({ ...DESSERT_ITEMS[i % DESSERT_ITEMS.length], id: i });
    return arr;
  }, []);

  useEffect(() => {
    if (reduced || !matterAvailable) return;
    const Mt = Matter;
    const container = containerRef.current;
    if (!container) return;

    const engine = Mt.Engine.create({
      gravity: { x: 0, y: 0.85, scale: 0.001 },
    });
    const runner = Mt.Runner.create();
    const world = engine.world;

    const rect = container.getBoundingClientRect();
    let w = rect.width,
      h = rect.height;

    // Fix Initial-Größe 0 issue
    if (w === 0 || h === 0) return;

    const wallOpts = { isStatic: true, restitution: 0.5 };
    const ground = Mt.Bodies.rectangle(w / 2, h + 50, w * 2, 100, wallOpts);
    const left = Mt.Bodies.rectangle(-50, h / 2, 100, h * 2, wallOpts);
    const right = Mt.Bodies.rectangle(w + 50, h / 2, 100, h * 2, wallOpts);
    Mt.World.add(world, [ground, left, right]);

    items.forEach((item, i) => {
      const x = 60 + Math.random() * (w - 120);
      const y = -120 - i * 40;
      const body =
        item.type === "square"
          ? Mt.Bodies.rectangle(x, y, item.size, item.size, {
              chamfer: { radius: item.size * 0.3 },
              restitution: 0.7,
              friction: 0.05,
              density: 0.0015,
            })
          : Mt.Bodies.circle(x, y, item.size / 2, {
              restitution: 0.78,
              friction: 0.05,
              density: 0.0015,
            });
      Mt.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.2);
      Mt.World.add(world, body);
      bodyRefs.current[i] = body;
    });

    const mouse = Mt.Mouse.create(container);
    // CRITICAL FIX: Since the physics world uses CSS pixels (w, h from getBoundingClientRect),
    // the mouse pixelRatio MUST be 1, otherwise clicks will be offset on retina screens!
    mouse.pixelRatio = 1;
    const mc = Mt.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, damping: 0.12, render: { visible: false } },
    });
    Mt.World.add(world, mc);

    Mt.Runner.run(runner, engine);

    // Respawn logic for balls that fall out of bounds
    Mt.Events.on(engine, "afterUpdate", () => {
      const currentRect = containerRef.current?.getBoundingClientRect();
      if (!currentRect) return;
      const cw = currentRect.width;
      const ch = currentRect.height;

      bodyRefs.current.forEach((body) => {
        if (!body) return;
        // Check if body is way out of bounds (top, bottom, left, right)
        if (
          body.position.y > ch + 300 ||
          body.position.y < -600 ||
          body.position.x < -300 ||
          body.position.x > cw + 300
        ) {
          // Respawn at the top
          Mt.Body.setPosition(body, {
            x: 60 + Math.random() * (cw - 120),
            y: -60 - Math.random() * 50,
          });
          Mt.Body.setVelocity(body, { x: 0, y: 0 });
          Mt.Body.setAngularVelocity(body, 0);
        }
      });
    });

    let raf: number;
    const sync = () => {
      for (let i = 0; i < items.length; i++) {
        const body = bodyRefs.current[i];
        const dom = domRefs.current[i];
        if (!body || !dom) continue;

        // Skip sync if body is currently exploding, allowing CSS animation to run
        if ((body as any).isExploding) continue;

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
      if (w === 0 || h === 0) return;
      Mt.Body.setPosition(ground, { x: r.width / 2, y: r.height + 50 });
      Mt.Body.setPosition(left, { x: -50, y: r.height / 2 });
      Mt.Body.setPosition(right, { x: r.width + 50, y: r.height / 2 });
    });
    ro.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      Mt.Runner.stop(runner);
      // Clean up events
      Mt.Events.off(engine, "afterUpdate");
      Mt.World.clear(world, false);
      Mt.Engine.clear(engine);
      bodyRefs.current = [];
    };
  }, [reduced, matterAvailable, items]);

  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || reduced || !matterAvailable) {
    return <div className="w-full h-full bg-[#E4C0A8] rounded-[24px]"></div>;
  }

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Find clicked body
    const clickedBodyIndex = bodyRefs.current.findIndex((body) => {
      if (!body) return false;
      // Simple distance check (approximate radius of 20)
      const dx = body.position.x - clickX;
      const dy = body.position.y - clickY;
      return Math.sqrt(dx * dx + dy * dy) < 25;
    });

    if (clickedBodyIndex !== -1) {
      const body = bodyRefs.current[clickedBodyIndex];
      const dom = domRefs.current[clickedBodyIndex];

      if (!body || !dom || (body as any).isExploding) return;

      // Mark as exploding to pause sync loop for this element
      (body as any).isExploding = true;

      // Explode animation on the element itself
      dom.style.transition =
        "all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      dom.style.transform = `${dom.style.transform} scale(1.8)`;
      dom.style.opacity = "0";

      // Move physics body out of the way immediately so it doesn't collide
      Matter.Body.setPosition(body, { x: -1000, y: -1000 });
      Matter.Body.setVelocity(body, { x: 0, y: 0 });

      // Create subtle confetti
      const confettiColors = [
        "#b34832",
        "#E4C0A8",
        "#eedfcc",
        "#5c3d35",
        "#f5efe8",
      ];
      const confettiEl = document.createElement("div");
      confettiEl.style.position = "absolute";
      confettiEl.style.left = `${clickX}px`;
      confettiEl.style.top = `${clickY}px`;
      confettiEl.style.pointerEvents = "none";
      containerRef.current?.appendChild(confettiEl);

      for (let i = 0; i < 8; i++) {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = "8px";
        particle.style.height = "8px";
        particle.style.backgroundColor =
          confettiColors[Math.floor(Math.random() * confettiColors.length)];
        particle.style.borderRadius = "50%";
        particle.style.transition = "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
        particle.style.transform = "translate(-50%, -50%)";
        confettiEl.appendChild(particle);

        // Trigger animation
        requestAnimationFrame(() => {
          const angle = Math.random() * Math.PI * 2;
          const dist = 40 + Math.random() * 60;
          particle.style.transform = `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px)) scale(0)`;
          particle.style.opacity = "0";
        });
      }
      setTimeout(() => confettiEl.remove(), 600);

      // Respawn the ball after the explosion animation finishes
      setTimeout(() => {
        const currentRect = containerRef.current?.getBoundingClientRect();
        if (!currentRect) return;
        const cw = currentRect.width;

        // Reset DOM styles so it can be managed by sync loop again
        if (dom) {
          dom.style.transition = "none";
          dom.style.opacity = "1";
        }

        // Unmark exploding and respawn physics body
        Matter.Body.setPosition(body, {
          x: 60 + Math.random() * (cw - 120),
          y: -80 - Math.random() * 50,
        });
        Matter.Body.setVelocity(body, { x: 0, y: 0 });
        Matter.Body.setAngularVelocity(body, 0);
        (body as any).isExploding = false;
      }, 350);
    }
  };

  return (
    <div
      ref={containerRef}
      onDoubleClick={handleDoubleClick}
      className="physics-container group"
      style={{
        position: "relative",
        width: "100%",
        height: size,
        borderRadius: "54% 46% 56% 44%/50% 54% 46% 50%",
        background: "rgba(245,239,232,0.3)",
        overflow: "hidden",
        touchAction: "none",
        boxShadow:
          "inset 0 0 40px rgba(204,98,76,0.10), 0 20px 60px rgba(45,31,25,.18)",
        cursor: "grab",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-nunito), sans-serif",
          fontWeight: 800,
          fontSize: "0.85rem",
          color: "rgb(204, 98, 76)",
          opacity: 0.6,
          pointerEvents: "none",
          animation: "8s ease 0s 1 normal forwards running fadeOut",
        }}
      >
        Spiel mit uns!
      </div>
      <style>{`
        @keyframes fadeOut {
          0%, 80% { opacity: 0.6; }
          100% { opacity: 0; }
        }
        .physics-container:hover {
          box-shadow: inset 0 0 50px rgba(204,98,76,0.15), 0 24px 68px rgba(45,31,25,.22) !important;
        }
      `}</style>
      {items.map((item, i) => {
        const IconComponent = (Icons as any)[item.icon] || Icons.Sparkles;
        return (
          <div
            key={item.id}
            ref={(el) => {
              domRefs.current[i] = el;
            }}
            style={{
              position: "absolute",
              top: -item.size / 2,
              left: -item.size / 2,
              width: item.size,
              height: item.size,
              background: item.color,
              borderRadius: item.type === "circle" ? "50%" : 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(45,31,25,0.18)",
              pointerEvents: "none",
              willChange: "transform",
            }}
          >
            <IconComponent
              size={item.size * 0.45}
              color="#fff"
              strokeWidth={2}
            />
          </div>
        );
      })}
    </div>
  );
}
