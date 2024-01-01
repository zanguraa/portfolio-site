"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import styled from "styled-components";

interface RunningTextProps {
  children: string;
  baseVelocity?: number;
  $dark?: boolean;
}

function RunningText({ children, baseVelocity = 1, $dark }: RunningTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 10000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <Parralex>
      <Scroller $dark={$dark} style={{ x }}>
        {Array(100)
          .fill(children)
          .map((child, i) => {
            return <span key={i}>{child}</span>;
          })}
      </Scroller>
    </Parralex>
  );
}

const Parralex = styled.div`
  overflow: hidden;
  letter-spacing: 2px;
  line-height: 0.8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;

const Scroller = styled(motion.div)<{ $dark?: boolean }>`
  font-weight: 600;
  color: #1E1E1E;
  font-size: 14px;
  line-height: normal;
  display: flex;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  gap: 50px;
  user-select: none;

  @media (min-width: 768px) {
    gap: 20px;
    font-size: normal;
  }
`;

// @ts-check
export default RunningText;
