"use client";
import { useEffect } from "react";
import { fbTrack } from "./FacebookPixel";

export default function FbPurchaseTracker() {
  useEffect(() => {
    fbTrack("Purchase", { value: 800, currency: "MAD" });
  }, []);
  return null;
}
