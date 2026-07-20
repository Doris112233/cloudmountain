import type { ElementType, ReactNode } from "react";
import { Children } from "react";
import Reveal, { type RevealProps } from "./Reveal";
import { motionTokens } from "./motionTokens";

export interface StaggerGroupProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: number;
  direction?: RevealProps["direction"];
}

const StaggerGroup = ({
  children,
  as: Component = "div",
  className = "",
  stagger = motionTokens.stagger,
  direction = "up",
}: StaggerGroupProps) => (
  <Component className={className}>
    {Children.map(children, (child, index) => (
      <Reveal direction={direction} delay={index * stagger}>
        {child}
      </Reveal>
    ))}
  </Component>
);

export default StaggerGroup;
