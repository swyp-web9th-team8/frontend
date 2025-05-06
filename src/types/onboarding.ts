import type { ComponentType, SVGProps } from "react";

export interface Slide {
  image: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description?: string;
}
