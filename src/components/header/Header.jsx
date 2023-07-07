import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

import styles from "./Header.module.scss";
import logo from "~/assets/movix-logo.svg";
import ContentWrapper from "~/components/contentWrapper/ContentWrapper";
import clsx from "clsx";

function Header() {
  const [query, setQuery] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setShowMobileMenu(false);
      setShowSearchInput(false);
    }
  };

  const handleOpenShowSearchInput = () => {
    setShowMobileMenu(false);
    setShowSearchInput(true);
  };

  const handleOpenMobileMenu = () => {
    setShowSearchInput(false);
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <div
      className={clsx(styles.header, showMobileMenu ? styles.mobileView : "")}
    >
      <ContentWrapper>
        <Link to={"/"}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
        </Link>

        {/* desktop menu */}
        <ul className={styles.menuItems}>
          <li
            className={styles.menuItem}
            onClick={(e) => navigate("/explore/movie")}
          >
            Movies
          </li>
          <li
            className={styles.menuItem}
            onClick={(e) => navigate("/explore/tv")}
          >
            TV Shows
          </li>
          <li
            className={styles.menuItem}
            onClick={(e) => setShowSearchInput(true)}
          >
            <BiSearch />
          </li>
        </ul>

        {/* mobile menu */}
        <ul className={styles.mobileMenuItems}>
          <li
            className={styles.mobileMenuItem}
            onClick={handleOpenShowSearchInput}
          >
            <BiSearch />
          </li>
          <li className={styles.mobileMenuItem} onClick={handleOpenMobileMenu}>
            {!showMobileMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
          </li>
        </ul>
      </ContentWrapper>

      {/* Seach Input */}
      {showSearchInput && (
        <div className={styles.searchInput}>
          <ContentWrapper className={styles.wrapSearchInput}>
            <input
              type="text"
              value={query}
              placeholder="Seach for a movie or tv show....."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <div
              className={styles.searchInputControl}
              onClick={(e) => setShowSearchInput(false)}
            >
              <GrClose />
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
}

export default Header;
