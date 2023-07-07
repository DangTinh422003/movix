import { FaFacebookF, FaBlog } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

import styles from "./Footer.module.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

function Footer() {
  return (
    <div className={styles.footer}>
      <ContentWrapper className={styles.footerWrapper}>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>Terms Of Use</li>
          <li className={styles.menuItem}>Privacy-Policy</li>
          <li className={styles.menuItem}>About</li>
          <li className={styles.menuItem}>Blog</li>
          <li className={styles.menuItem}>FAQ</li>
        </ul>

        <div className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>

        <ul className={styles.socialContact}>
          <li className={styles.icon}>
            <a href="https://www.facebook.com/profile.php?id=100041672193815">
              <FaFacebookF />
            </a>
          </li>
          <li className={styles.icon}>
            <a href="https://github.com/DangTinh422003">
              <BsGithub />
            </a>
          </li>
          <li className={styles.icon}>
            <a href="https://portfolio-bay-one-82.vercel.app/">
              <FaBlog />
            </a>
          </li>
        </ul>
      </ContentWrapper>
    </div>
  );
}

export default Footer;
