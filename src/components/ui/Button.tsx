import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface Props {
  variant?: ButtonVariant;
}

function Button({
  variant = "primary",
  children,
  className,
  ...props
}: Props &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) {
  return (
    <button className={clsx("btn", styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

const styles: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-primary btn-outline",
};

export default Button;
