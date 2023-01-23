"use client";
import { Suspense, lazy } from "react";
import Image from "next/image";
import { use100vh } from "react-div-100vh";
import { Inter } from "@next/font/google";
import { JsxAttribute } from "typescript";
import PageOne from "components/PageOne";

import { useMemo } from "react";
const PageTwo = lazy(() => import("components/PageTwo"));
// import from='"./page.ubsets: ['latin'] })

export default function Home() {

  let a = 1;

  const height = use100vh();
  const h = height ? `${height}px` : "100vh";
  let c = (
    <div
      style={{ height: h }}
      className="bg-[#042a55]  relative w-[100vw] overflow-hidden flex align-middle justify-center scrolls"
    >
      <h1 className="w-full h-1/4 text-[14vmin] text-white text-center text justify-self-center self-center">
        screen + {height} 
      </h1>
    </div>
  );
  let d = (
    <div
      style={{ height: h }}
      className="bg-[#550404]  relative w-[100vw] overflow-hidden flex align-middle justify-center scrolls"
    >
      <h1 className="w-full h-1/4 text-[14vmin] text-white text-center text justify-self-center self-center">
        screen + {height} 
      </h1>
    </div>
  );

  return (
    <div
      style={{ height: h }}
      className=" relative w-full  overflow-auto snaps"
    >
      <PageOne ></PageOne>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <PageTwo></PageTwo>
      {/* </Suspense> */}
      {d}
    </div>
  );
}
