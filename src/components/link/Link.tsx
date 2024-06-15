import { forwardRef } from "react";
import NextLink, { LinkProps } from "next/link";

export default forwardRef<HTMLAnchorElement, LinkProps>(({ ...others }, ref) => (
  <NextLink ref={ref} {...others} />
));
