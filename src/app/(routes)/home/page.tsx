import HomeFeedTemplate from "@/components/templates/HomeFeedTemplate";
import { homegatherings } from "@/data/homegatherings";

export default function HomePage() {
  return <HomeFeedTemplate gatherings={homegatherings} />;
}
