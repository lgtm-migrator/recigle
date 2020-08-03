import "./style.module.scss";

import Checkbox, { CheckboxProps } from "components/atoms/Checkbox";
import React, { FC } from "react";

export type LabeledCheckboxProps = Omit<CheckboxProps, "id"> &
  Pick<JSX.IntrinsicElements["label"], "children"> & {
    id: CheckboxProps["id"] & JSX.IntrinsicElements["label"]["htmlFor"];
  };

const LabeledCheckbox: FC<LabeledCheckboxProps> = ({
  checkboxRef,
  children,
  id,
  name,
}) => (
  <div styleName="labeled-checkbox">
    <Checkbox checkboxRef={checkboxRef} id={id} name={name} />
    <label htmlFor={id} styleName="label">
      {children}
    </label>
  </div>
);

export default LabeledCheckbox;
