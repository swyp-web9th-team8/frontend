"use client";

import { useState } from "react";
import HomeFeedTemplate from "@/components/templates/HomeFeedTemplate";
import { homegatherings } from "@/data/homegatherings";
import { closedGatherings } from "@/data/closedgatherings";

export default function HomePage() {
  const [isClosedView, setIsClosedView] = useState(false);

  return (
    <HomeFeedTemplate
      gatherings={isClosedView ? closedGatherings : homegatherings}
      isClosedView={isClosedView}
      onChangeTab={(closed) => setIsClosedView(closed)}
    />
  );
}
