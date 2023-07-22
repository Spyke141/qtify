import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../Assets/Search_Icon.svg";

const Search = () => {
  const placeholder = "Search an Album of your choice";

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <>
      <form className={styles.wrapper} onSubmit={onSubmitHandler}>
        <input
          type="text"
          className={styles.searchbar}
          placeholder={placeholder}
        />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default Search;
