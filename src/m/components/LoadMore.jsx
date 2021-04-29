import React, { Component } from "react";
import { Spin } from "@convertlab/c-design";
import "./LoadMore.less";

function LoadMore(props) {
  const moreText = !props.moreText ? "点击查看更多" : props.moreText;
  const noMoreText = !props.noMoreText
    ? "- 已经加载全部啦 -"
    : props.noMoreText;

  return (
    <div onClick={props.onClick} className="load-more-container">
      {!props.loading && (props.hasMore ? moreText : noMoreText)}
      {props.loading && <Spin></Spin>}
    </div>
  );
}
export default LoadMore;
