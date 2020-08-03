import React, { FC } from "react";

export type CheckboxProps = Pick<
  JSX.IntrinsicElements["input"],
  "id" | "name"
> & {
  checkboxRef: JSX.IntrinsicElements["input"]["ref"];
};

const Checkbox: FC<CheckboxProps> = ({ checkboxRef, id, name }) => (
  <input id={id} name={name} ref={checkboxRef} type="checkbox" />
);

export default Checkbox;
