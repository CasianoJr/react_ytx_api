import React from "react";
import { Spin } from "antd";
import { useSearch } from "./SearchProvider";

export default function Spinner(props) {
  const { searchLoading } = useSearch();
  return (
    <Spin spinning={searchLoading} delay={100}>
      {props.children}
    </Spin>
  );
}
