"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import "leaflet/dist/leaflet.css";

export default function Home() {
  const LeafletMap = useMemo(
    () =>
      dynamic(() => import("../components/LeafletMap"), {
        loading: () => <p>地図をロード中です…</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div>
      <LeafletMap />
    </div>
  );
}
