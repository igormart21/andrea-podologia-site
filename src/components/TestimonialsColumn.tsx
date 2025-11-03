import React from "react";
import { motion } from "framer-motion";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const loopItems = React.useMemo(() => [...props.testimonials, ...props.testimonials], [props.testimonials]);

  return (
    <div className={`${props.className ?? ""} h-[520px] sm:h-[640px] lg:h-[700px] overflow-hidden`}>
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col items-center gap-3 sm:gap-6 will-change-transform"
      >
        {loopItems.map(({ text, name }, i) => (
          <div className="p-6 md:p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-card" key={i}>
            <div className="text-foreground/90 leading-relaxed">{text}</div>
            <div className="mt-5 font-medium tracking-tight text-foreground">{name}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
