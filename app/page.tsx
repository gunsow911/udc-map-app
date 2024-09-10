"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Home() {
  const LeafletMap = useMemo(() => 
    dynamic(() => import("./LeafletMap"), { ssr: false })
  , []);

  return (
    <div><LeafletMap /></div>
  );
}
