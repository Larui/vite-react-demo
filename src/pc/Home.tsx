import React, { useState, useEffect } from "react";
import Services from "../services";
import LogoImg from "../assets/img/logo.png";
import "./Home.less";

function openWindow() {
  const otherWindow = window.open("/");
  //   setInterval(() => {
  otherWindow?.postMessage({ name: "value" }, "http://localhost:30086/#/home");
  //   }, 1000);
}

function Home() {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(event);
    });
    // Services.test();
  }, []);

  return (
    <div>
      <img src={LogoImg} alt="" />
      <div> PC1221</div>

      <div onClick={openWindow}>点击打开新的弹窗</div>
    </div>
  );
}

function run(gen) {
  var g = gen();
  function next(data) {
    var result = g.next(data);
    console.log(result);

    if (result.done) return result.value;
    result.value.then(function (data) {
      next(data);
    });
  }
  next();
}

function* gen() {
  yield Promise.resolve(11).then((res) => {
    console.log(res);
  });
  yield Promise.resolve(222).then((res) => {
    console.log(res);
  });
}

run(gen);

function run(gen) {
  const g = gen();
  function next(data) {
    const result = g.next(data);
    if (result.done) return result.value;
    result.value.then((data) => {
      next(data);
    });
  }
  next();
}

class Promise {
  constructor() {
    executor()
  }

}
export default Home;
