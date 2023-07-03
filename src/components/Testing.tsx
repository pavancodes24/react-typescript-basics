import { ReactNode } from "react";

type TestingProps = {
  children: ReactNode;
  name: string;
};

const Testing = ({ children, name = "defaultname" }: TestingProps) => {
  return (
    <div>
      <div>{name}</div>
      <div>{children}</div>
    </div>
  );
};

export default Testing;
