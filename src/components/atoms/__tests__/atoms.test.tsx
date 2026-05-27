import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Logo } from '../Logo';
import { ScallopBadge } from '../ScallopBadge';
import { PrimaryCTA } from '../buttons/PrimaryCTA';
import { useAchievements } from '@/store/useAchievements';

// Mock framer-motion to avoid animation issues in jsdom
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    useReducedMotion: () => false,
  };
});

// Mock SVGs to avoid parsing issues in jsdom
vi.mock('@/assets/svg', () => ({
  LogoOrange: (props: any) => <svg data-testid="svg-mock" {...props} />,
  LogoBeige: (props: any) => <svg data-testid="svg-mock" {...props} />,
  LogoHellbeige: (props: any) => <svg data-testid="svg-mock" {...props} />,
  LogoRundBeige: (props: any) => <svg data-testid="svg-mock" {...props} />,
  LogoWortmarkeBeige: (props: any) => <svg data-testid="svg-mock" {...props} />,
  FormBeige: (props: any) => <svg data-testid="svg-mock" {...props} />,
}));

describe('Atoms', () => {
  describe('Logo', () => {
    it('should set default aspect-ratio', () => {
      render(<Logo data-testid="logo" />);
      const logo = screen.getByTestId('logo');
      expect(logo).toHaveStyle({ aspectRatio: '429.455 / 444.526' });
    });

    it('should change aspect-ratio based on variant', () => {
      const { unmount } = render(<Logo variant="rund" data-testid="logo-rund" />);
      expect(screen.getByTestId('logo-rund')).toHaveStyle({ aspectRatio: '1 / 1' });
      unmount();

      render(<Logo variant="wortmarke" data-testid="logo-wortmarke" />);
      expect(screen.getByTestId('logo-wortmarke')).toHaveStyle({ aspectRatio: '627.846 / 159.151' });
    });

    it('should cover all other variants', () => {
      const { unmount: u1 } = render(<Logo variant="beige" data-testid="v1" />);
      expect(screen.getByTestId('v1')).toBeInTheDocument();
      u1();
      
      const { unmount: u2 } = render(<Logo variant="hellbeige" data-testid="v2" />);
      expect(screen.getByTestId('v2')).toBeInTheDocument();
      u2();

      const { unmount: u3 } = render(<Logo variant="form" data-testid="v3" />);
      expect(screen.getByTestId('v3')).toHaveStyle({ aspectRatio: '1 / 1' });
      u3();
    });

    it('should unlock sweet-tooth achievement on triple tap', () => {
      vi.useFakeTimers();
      
      const unlockSpy = vi.spyOn(useAchievements.getState(), 'unlock');
      render(<Logo data-testid="logo-click" />);
      const logo = screen.getByTestId('logo-click');
      
      fireEvent.click(logo);
      vi.advanceTimersByTime(100);
      fireEvent.click(logo);
      vi.advanceTimersByTime(100);
      fireEvent.click(logo);

      expect(unlockSpy).toHaveBeenCalledWith('sweet-tooth');
      
      vi.useRealTimers();
    });
  });

  describe('ScallopBadge', () => {
    it('should apply rotate style', () => {
      render(
        <div data-testid="scallop-wrapper">
          <ScallopBadge rotate={45} />
        </div>
      );
      const container = screen.getByTestId('scallop-wrapper').firstElementChild as HTMLElement;
      expect(container).toHaveStyle({ transform: 'rotate(45deg)' });
    });

    it('should render children', () => {
      render(<ScallopBadge>Test Badge</ScallopBadge>);
      expect(screen.getByText('Test Badge')).toBeInTheDocument();
    });
  });

  describe('PrimaryCTA', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should render children and arrow if showArrow is true', () => {
      render(<PrimaryCTA showArrow>Click Me</PrimaryCTA>);
      expect(screen.getByText('Click Me')).toBeInTheDocument();
      // Arrow is rendered as a chevron icon (svg)
      expect(document.querySelector('svg')).toBeInTheDocument();
    });

    it('should trigger particle burst and call onClick', () => {
      const onClickMock = vi.fn();
      render(<PrimaryCTA onClick={onClickMock}>Click Me</PrimaryCTA>);
      
      const button = screen.getByRole('button', { name: 'Click Me' });
      
      act(() => {
        fireEvent.click(button);
      });
      
      expect(onClickMock).toHaveBeenCalled();
      
      act(() => {
        vi.advanceTimersByTime(800);
      });
    });
  });
});
