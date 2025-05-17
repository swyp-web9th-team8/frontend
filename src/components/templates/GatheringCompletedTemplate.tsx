import GatheringCreateButton from "@/components/atoms/Button/GatheringCreateButton";
import GatheringList from "@/components/organisms/gatherings/GatheringList";

function GatheringCompletedTemplate() {
  return (
    <div>
      <GatheringList />
      <GatheringCreateButton />
    </div>
  );
}

export default GatheringCompletedTemplate;
