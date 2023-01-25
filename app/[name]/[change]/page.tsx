"use client";
import { Suspense, lazy } from "react";
import Image from "next/image";
import { use100vh } from "react-div-100vh";
import { Inter } from "@next/font/google";
import { JsxAttribute } from "typescript";
import PageOne from "components/PageOne";
// import PageThree from "components/PageThree";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
const PageTwo = lazy(() => import("components/PageTwo"));
const PageThree = lazy(() => import("components/PageThree"));
// import from='"./page.ubsets: ['latin'] })

export default function Home() {
  let a = 1;
  const pathName = usePathname()?.slice(1).toUpperCase().split('/');
  let propsPath: String;
  let arch = false;
  // let pathArr = pathName?.slice(1).toUpperCase().split("-");
  if (pathName[0] === "A") {
    arch = true;
    propsPath = pathName[1].split("-").join(" ");
  } else {
    arch = false;
   propsPath = pathName[1].split("-").join(" ");
  }
  const height = use100vh();
  const h = height ? `${height}px` : "100vh";
  return (
    <div
      style={{ height: h }}
      className=" relative w-full  overflow-auto snaps"
    >
      <PageOne></PageOne>
      <Suspense fallback={<div>Loading...</div>}>
        <PageTwo name={propsPath}></PageTwo>
        <PageThree arch={arch}></PageThree>
      </Suspense>
    </div>
  );
}
