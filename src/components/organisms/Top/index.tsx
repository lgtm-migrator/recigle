import "./style.module.scss";

import React, { FC } from "react";

import Heading1 from "components/atoms/Heading1";

const Top: FC = ({ children }) => (
  <div styleName="top">
    <Heading1 />
    <div>{children}</div>
  </div>
);

export default Top;
