import { FC } from "react";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = (props) => {
  return (
    <input
      className="w-full border-0 bg-white text-label outline-none placeholder:text-label"
      {...props}
    />
  );
};

export default FormInput;
