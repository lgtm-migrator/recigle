import "./style.module.scss";

import LabeledCheckbox, {
  LabeledCheckboxProps,
} from "components/molecules/LabeledCheckbox";
import React, { FC, useMemo } from "react";

export type LabeledCheckboxListProps = {
  items: LabeledCheckboxProps[];
};

const LabeledCheckboxList: FC<LabeledCheckboxListProps> = ({ items }) => {
  const children = useMemo(
    () =>
      items.map(({ checkboxRef, children, id, name }) => (
        <li key={id}>
          <LabeledCheckbox checkboxRef={checkboxRef} id={id} name={name}>
            {children}
          </LabeledCheckbox>
        </li>
      )),
    [items]
  );

  return <ul styleName="labeled-checkbox-list">{children}</ul>;
};

export default LabeledCheckboxList;
