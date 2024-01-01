"use client";
import React, { useState, useRef, useEffect } from 'react';
import { TransitionGroup } from 'react-transition-group';

interface Props {
  children: React.ReactNode;
  opacityDuration?: number;
  transformDuration?: number;
  translateY?: number;
  threshold?: number;
}

const FadeIn: React.FC<Props> = ({ children, opacityDuration = 1000, transformDuration = 650, translateY = 300, threshold = 0.5 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, { threshold });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      // @ts-ignore
      if (currentPosition > ref.current?.offsetTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <TransitionGroup>
        <div ref={ref}>
          <div
            style={{
              transition: `opacity ${opacityDuration}ms ease-in-out, ${transformDuration}ms ease-in-out`,
              opacity: scrollDirection !== 'down' ? (isVisible ? 1 : 0) : 1,
              transform: scrollDirection !== 'down' ? (isVisible ? 'translateY(0)' : `translateY(${translateY}px)`) : 'translateY(0)',
            }}
          >
            {children}
          </div>
        </div>
      </TransitionGroup>
    </>
  );
};

export default FadeIn;
