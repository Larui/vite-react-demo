import React, { useState, useEffect, useRef } from "react";
import VideoPlayer from "../../common/components/VideoPlayer";
import "./Carousel.less";

let timer = null;
function Carousel(props) {
  const dataList = (props.dataList || []).slice(0, 4);
  const [isRoll, setIsRoll] = useState(true);
  const [pausedMap, setPausedMap] = useState({});
  const diplayContainer = useRef();
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    if (dataList) {
      setWidth();
    }
  }, [dataList]);

  function setWidth() {
    const unitWidth = diplayContainer.current?.offsetWidth;
    const videoEles = document.querySelectorAll(".display-video");
    const videoTrack = document.querySelector(".display-track");

    if (videoEles) {
      Array.from(videoEles).map((v, index) => {
        v.style.width = unitWidth + "px";
      });
      videoTrack.style.width = unitWidth * videoEles.length + "px";
    }
  }

  useEffect(() => {
    rotation();
  });

  function rotation() {
    if (!isRoll) return;
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      if (!isRoll) return;
      let newFocusIndex = focusIndex;
      newFocusIndex++;
      if (newFocusIndex > dataList.length - 1) {
        newFocusIndex = 0;
      }
      setFocusIndex(newFocusIndex);
    }, 3000);
  }

  function stopRotation(params) {
    if (timer) clearInterval(timer);
  }

  return (
    <div className="video-carousel">
      <div
        className="display-container"
        // onMouseOver={stopRotation}
        // onMouseOut={rotation}
        ref={diplayContainer}
      >
        <div className="display-track">
          {(dataList || []).map((item, index) => {
            return (
              <div
                className={
                  focusIndex === index
                    ? "display-video selected"
                    : "display-video"
                }
              >
                <VideoPlayer
                  style={{ width: 944, height: 531 }}
                  logined={props.logined}
                  onLogin={props.onLogin}
                  appID={GlobalVariable?.tencentAppId}
                  customerInfo={props.customerInfo}
                  fileUuid={item.uuid}
                  onPlay={() => {
                    clearInterval(timer);
                    setIsRoll(false);
                  }}
                  videoInfo={item}
                  paused={pausedMap[item.uuid]}
                />
                <div className="video-des">
                  <div
                    className="video-title f-toe"
                    title={item.title}
                    onClick={() => window.open(item.pageUrl)}
                  >
                    {item.title}
                  </div>
                  <div className="video-data">{item.pv || 0} 人看过该视频</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="carousel-list">
        {(dataList || []).map((item, index) => {
          return (
            <div
              className={
                focusIndex === index
                  ? "carousel-item selected"
                  : "carousel-item"
              }
              onClick={() => {
                const pausedMap = { [dataList[focusIndex]?.uuid]: true };
                setPausedMap(pausedMap);
                setIsRoll(true);
                setFocusIndex(index);
              }}
              style={{ borderColor: props.themeColor }}
            >
              <img src={item.coverImg} alt="" className="carousel-item-img" />
              <div
                className="selected-arrow"
                style={{ borderRightColor: props.themeColor }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
