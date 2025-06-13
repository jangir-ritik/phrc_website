import React from "react";
import styles from "@/styles/Button.module.css";
import clsx from "clsx";

function Button({ children, variant = "primary", ...props }) {
  const variants = {
    primary: styles.primary,
    secondary: styles.secondary,
  };
  return (
    <button
      className={clsx(variants[variant], props.className, styles.button)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
