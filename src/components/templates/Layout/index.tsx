import "./style.module.scss";

import React, { FC, useMemo } from "react";

import Footer from "components/organisms/Footer";
import useWindowSize from "hooks/useWindowSize";

const Layout: FC = ({ children }) => {
  const { windowHeight } = useWindowSize();
  const style = useMemo(
    () => ({
      height: windowHeight,
    }),
    [windowHeight]
  );

  return (
    <div style={style} styleName="layout">
      <div styleName="children-wrapper">{children}</div>
      <div styleName="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
