import React, { useState, useEffect } from "react";
import {
  Tabs,
  Input,
  Skeleton,
  Empty,
  Carousel,
  Avatar,
  message,
  Spin,
  Row,
  Col,
} from "antd";

import "./Home.less";

const { TabPane } = Tabs;

function Home() {
  const [roomInfo, setRoomInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  if (loading) {
    return (
      <Skeleton
        active
        title={false}
        paragraph={{
          rows: 6,
          width: ["100%", "100%", "100%", "100%", "100%", "100%"],
        }}
      />
    );
  }

  return (
    <div className="room-m m-page">
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="top-bar-logo">
            <img
              src="../assets/img/logo.png"
              alt=""
            />
          </div>
          <div className="top-bar-company">测试</div>
        </div>
        <div className="top-bar-right">
          <div className="top-bar-btn">登录</div>
          <div className="top-bar-btn">注册</div>
        </div>
      </div>
      <div className="page-content">
        <div>
          <Carousel className="m-videoroom-carousel" autoplay>
            <div>111</div>
            <div>222</div>
            <div>333</div>
          </Carousel>
        </div>
        <Spin spinning={false}>
          <Tabs className={"m-video-room-tab"} animated={false}>
            <TabPane tab="全部视频" key="all"></TabPane>
          </Tabs>
        </Spin>
      </div>
    </div>
  );
}

export default Home;
