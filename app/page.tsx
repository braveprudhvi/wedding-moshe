"use client";
import { Suspense, lazy, useEffect, useState } from "react";
import Image from "next/image";
import { use100vh } from "react-div-100vh";
import { Inter } from "@next/font/google";
import { JsxAttribute } from "typescript";
import PageOne from "components/PageOne";
// import PageThree from 'components/PageThree'
import { useMemo } from "react";
const PageTwo = lazy(() => import("components/PageTwo"));
const PageThree = lazy(() => import("components/PageThree"));
// import from='"./page.ubsets: ['latin'] })

export default function Home() {
  let a = 1;
  const [refs, setRef] = useState({ re1: true, re2: true })
  const [ratio,setRatio]=useState(1.65)
  const height = use100vh();
  useEffect(() => {
    setRatio(() => {
      let rat = height /
        (window.outerWidth > window.innerWidth
          ? window.innerWidth
          : window.outerWidth);
      if (rat !== 0)
        return rat;
      else
        return 1.65
    }
    );
  },[height]);
  console.log(ratio);
  const h = height ? `${height}px` : "100vh";
  return height ? (
    ratio > 1.64 ? (
      <div
        style={{ height: h }}
        className=" relative w-full  overflow-auto snaps"
      >
        <PageOne refs={refs} setRef={setRef}></PageOne>
        <Suspense fallback={<div>Loading...</div>}>
          <PageTwo refs={refs} setRef={setRef}></PageTwo>
          <PageThree refs={refs} setRef={setRef}></PageThree>
        </Suspense>
      </div>
    ) : (
      <div
        style={{ height: h }}
        className=" text-[#ffd3a2] text-[4vmin] flex flex-col align-middle justify-center"
      >
        <div className="rotate w-[40vmin] h-[20vmin] mt-[20vh] self-center"></div>
        <h1 className="text-[#fa9725] flex flex-col h-[30vh] text-center pl-[5vmin] pr-[5vmin] mt-[10vh]">
          This website is only built for Potrait,
          <span className="mt-[2vh] text-[#ffd3a2]">
            Kindly Rotate the screen to potrait{" "}
          </span>
          or
          <span className="text-[#ffd3a2]">Open it in a mobile</span>
          or
          <span className="text-[#ffd3a2]">reduce the width.</span>
        </h1>
      </div>
    )
  ) : (
    <></>
  );
}
