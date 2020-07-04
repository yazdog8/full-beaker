import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import GlobalAppTemplate from "common/components/templates/app/GlobalAppTemplate/GlobalAppTemplate";
import { returnSearchData } from "routes/Search/data/searchThunks";
import styles from "./Search.module.scss";

const Search = (props) => {
  const dispatch = useDispatch();
  const data = useEffect(() => {
    dispatch(returnSearchData());
  }, []);

  return <GlobalAppTemplate>Search</GlobalAppTemplate>;
};

Search.propTypes = {};
Search.defaultProps = {};

export default Search;
