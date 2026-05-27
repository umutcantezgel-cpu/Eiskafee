'use client';

import React, { useEffect } from 'react';

export function A11yProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
      import('@axe-core/react').then(axe => {
        const ReactDOM = require('react-dom');
        axe.default(React, ReactDOM, 1000);
      });
    }
  }, []);

  return <>{children}</>;
}
