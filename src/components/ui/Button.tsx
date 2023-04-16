import clsx from "clsx";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface Props {
  variant?: ButtonVariant;
  children?: ReactNode;
}

export const Button = ({ variant = "primary", children }: Props) => {
  return <button className={clsx("btn", styles[variant])}>{children}</button>;
};

const styles: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};
