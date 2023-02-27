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
import Iframe from 'react-iframe';

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
  const h = height ? `${height}px` : "100vh";
  console.log(ratio,Math.round(height/1.66),h);
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
      <div className=" flex justify-center items-center">

     <Iframe
     url="https://www.prasanth-archana.in/"
     width={Math.round(height/1.66)}
     height={h}
     className="iframe"/>
     </div>
    )
  ) : (
    <></>
  );
}
