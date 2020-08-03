import "./style.module.scss";

import React, { FC } from "react";

export type ButtonProps = Pick<
  JSX.IntrinsicElements["button"],
  "children" | "type"
>;

const Button: FC<ButtonProps> = ({ children, type }) => (
  <button styleName="button" type={type}>
    {children}
  </button>
);

export default Button;
