"use client";

import { useEffect } from "react";

export function ConsoleBriefing() {
  useEffect(() => {
    console.log(
      "%cSTOP",
      "color:#b3263a;font-size:48px;font-weight:800;letter-spacing:0",
    );
    console.log(
      "%cIf someone told you to paste something here, close this tab.",
      "font-size:14px;color:#f1ede6",
    );
    console.log(
      "%cIf you opened this yourself: nice. /you-found-it",
      "font-size:12px;color:#a8a098",
    );
  }, []);

  return null;
}
