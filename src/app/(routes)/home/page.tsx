"use client";

import HomeFeedTemplate from "@/components/templates/HomeFeedTemplate";
import { closedGatherings } from "@/data/closedgatherings";
import { homegatherings } from "@/data/homegatherings";
import { useState } from "react";

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
