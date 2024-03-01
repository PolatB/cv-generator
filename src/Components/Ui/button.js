import React from "react";
import { Slot } from "@radix-ui/react-slot";

// import { cn } from "../../lib/utils";

const Button = React.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={className} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };