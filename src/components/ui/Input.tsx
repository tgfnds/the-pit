import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  label: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  error?: FieldError;
}

function Input({ label, inputProps, error }: Props) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...inputProps}
        type="text"
        className={`input-bordered input w-full${
          error && " input-bordered input-error"
        }`}
      />
      {error?.message ? (
        <label className="label">
          <span className="label-text-alt text-error">{error?.message}</span>
        </label>
      ) : null}
    </div>
  );
}

export default Input;
