import React from "react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
function Stairs(props) {
  const stairParentRef = useRef(null);

  const currentPath = useLocation().pathname;
  const PageRef = useRef(null);
  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(stairParentRef.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(stairParentRef.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0%",
      });
      gsap.from(PageRef.current, {
        opacity: 0,
        delay: 1.3,
        scale: 1.2,
      });
    },
    [currentPath]
  );
  console.log(props.children)
  return (
    <div>

    <div ref={stairParentRef} className="w-full h-screen fixed top-0 z-10">
      <div className="w-full h-full flex ">
        <div className="stair bg-black h-full w-1/5"></div>
        <div className="stair bg-black h-full w-1/5"></div>
        <div className="stair bg-black h-full w-1/5"></div>
        <div className="stair bg-black h-full w-1/5"></div>
        <div className="stair bg-black h-full w-1/5"></div>
      </div>
    </div>
    <div ref={PageRef}>
        {props.children}
    </div>
    </div>

  );
}

export default Stairs;
