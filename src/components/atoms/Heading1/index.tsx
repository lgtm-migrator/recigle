import "./style.module.scss";

import React, { FC } from "react";

const Heading1: FC = () => (
  <h1 styleName="heading1">
    <span styleName="red">レ</span>
    <span styleName="yellow">シ</span>
    <span styleName="green">グ</span>
    <span styleName="red">ル</span>
  </h1>
);

export default Heading1;
