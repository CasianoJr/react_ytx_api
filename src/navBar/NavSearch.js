import React from "react";
import { Input } from "antd";
import { ExpandOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useSearch } from "../shared/SearchProvider";
const { Search } = Input;

export default function NavSearch() {
  const { searchLoading, setSearchLoading, setEndPoints } = useSearch();
  let history = useHistory();

  const onSearch = (query) => {
    setEndPoints((rest) => {
      return {
        ...rest,
        query_term: query,
        page: 1,
        quality: "",
        minimum_rating: "",
        genre: "",
        with_rt_ratings: "",
        sort_by: "",
        order_by: "",
      };
    });
    setSearchLoading(true);
    history.push("/");
  };
  return (
    <>
      <Search
        placeholder="Search Movies"
        allowClear
        onSearch={onSearch}
        className="mr-auto"
        style={{ width: 300, margin: "0 10px" }}
        loading={searchLoading}
      />
      <div
        className="btn mb-1"
        type="button"
        data-toggle="collapse"
        data-target="#detailedSearch"
        aria-controls="detailedSearch"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <ExpandOutlined className="text-white" />
      </div>
    </>
  );
}
