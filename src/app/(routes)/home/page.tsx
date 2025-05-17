"use client";

import HomeFeedTemplate from "@/components/templates/HomeFeedTemplate";
import { useState } from "react";

export default function HomePage() {
  const [isClosedView, setIsClosedView] = useState(false);

  return (
    <HomeFeedTemplate
      isClosedView={isClosedView}
      onChangeTab={(closed) => setIsClosedView(closed)}
    />
  );
}
