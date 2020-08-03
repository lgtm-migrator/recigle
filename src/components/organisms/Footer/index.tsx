import "./style.module.scss";

import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import React, { FC } from "react";

const Footer: FC = () => (
  <footer styleName="footer">
    <ul styleName="list">
      <li>
        <FacebookShareButton url="https://recigle.kk-web.link/">
          <FacebookIcon round={true} size={21} />
        </FacebookShareButton>
      </li>
      <li>
        <LineShareButton url="https://recigle.kk-web.link/">
          <LineIcon round={true} size={21} />
        </LineShareButton>
      </li>
      <li>
        <TwitterShareButton url="https://recigle.kk-web.link/">
          <TwitterIcon round={true} size={21} />
        </TwitterShareButton>
      </li>
    </ul>
    <div>
      <a
        href="https://kk-web.link/contact"
        rel="noopener noreferrer"
        target="_blank"
      >
        フィードバックを送信
      </a>
    </div>
  </footer>
);

export default Footer;
