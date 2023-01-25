"use client";
import { Suspense, lazy } from "react";
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

  const height = use100vh();
  const h = height ? `${height}px` : "100vh";
  return (
    <div
      style={{ height: h }}
      className=" relative w-full  overflow-auto snaps"
    >
      <PageOne></PageOne>
      <Suspense fallback={<div>Loading...</div>}>
      <PageTwo></PageTwo>
      <PageThree></PageThree>
      </Suspense>
    </div>
  );
}
