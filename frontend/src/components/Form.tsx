import { FC } from "react";

interface FormProps {
  className?: string;
}

export const Form: FC<FormProps> = ({ className }) => {
  return <div className={className}></div>;
};
