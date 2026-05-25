"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

type TransitionContextType = {
  navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({ navigate: () => {} });

export const useTransition = () => useContext(TransitionContext);

const PATHS = {
  flatBottom: 'M 0 100 Q 50 100 100 100 L 100 100 Q 50 100 0 100 Z',
  waveEnter:  'M 0 40  Q 50 -20 100 40  L 100 100 Q 50 100 0 100 Z',
  covered:    'M 0 0   Q 50 0  100 0   L 100 100 Q 50 100 0 100 Z',
  waveExit:   'M 0 0   Q 50 0  100 0   L 100 60  Q 50 120 0 60  Z',
  flatTop:    'M 0 0   Q 50 0  100 0   L 100 0   Q 50 0   0 0   Z',
};

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const controls = useAnimation();
  const busy = useRef(false);
  const requestedHrefRef = useRef<string | null>(null);
  const [reduced, setReduced] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    setMounted(true);
  }, []);

  const navigate = (href: string) => {
    if (href === pathname || pendingHref || busy.current) return;
    setPendingHref(href);
  };

  useEffect(() => {
    if (!pendingHref || busy.current) return;
    busy.current = true;
    requestedHrefRef.current = pendingHref;
    const ease = [0.76, 0, 0.24, 1] as any;

    (async () => {
      if (reduced) {
        await controls.start({ opacity: 1, transition: { duration: 0.3 } });
        if (requestedHrefRef.current !== pendingHref) return;
        router.push(pendingHref);
      } else {
        await controls.start({ d: PATHS.waveEnter, transition: { duration: 0.42, ease } });
        await controls.start({ d: PATHS.covered,   transition: { duration: 0.28, ease } });
        if (requestedHrefRef.current !== pendingHref) return;
        router.push(pendingHref);
      }
    })();
  }, [pendingHref, controls, router, reduced]);

  useEffect(() => {
    if (busy.current && pendingHref && pathname === pendingHref) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      const ease = [0.76, 0, 0.24, 1] as any;
      
      (async () => {
        await new Promise(r => setTimeout(r, 60));
        if (reduced) {
          await controls.start({ opacity: 0, transition: { duration: 0.3 } });
        } else {
          await controls.start({ d: PATHS.waveExit,   transition: { duration: 0.40, ease } });
          await controls.start({ d: PATHS.flatTop,    transition: { duration: 0.28, ease } });
          controls.set({ d: PATHS.flatBottom });
        }
        setPendingHref(null);
        busy.current = false;
      })();
    }
  }, [pathname, pendingHref, controls, reduced]);

  if (!mounted) return <>{children}</>;

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <div aria-hidden="true" style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        pointerEvents: pendingHref ? 'auto' : 'none',
        display: pendingHref || busy.current ? 'block' : 'none'
      }}>
        {reduced ? (
           <motion.div
             initial={{ opacity: 0 }}
             animate={controls}
             style={{ position: 'absolute', inset: 0, background: '#eedfcc' }}
           />
        ) : (
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              width: '100vw', height: '100vh', display: 'block',
              filter: 'drop-shadow(0 10px 24px rgba(204,98,76,0.20))',
            }}
          >
            <motion.path
              d={PATHS.flatBottom}
              fill="#eedfcc"
              animate={controls}
            />
          </svg>
        )}
      </div>
    </TransitionContext.Provider>
  );
};
