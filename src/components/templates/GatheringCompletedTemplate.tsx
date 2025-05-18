import GatheringCreateButton from "@/components/atoms/Button/GatheringCreateButton";
import GatheringList from "@/components/organisms/gatherings/GatheringList";

function GatheringCompletedTemplate() {
  return (
    <div className="flex flex-1 flex-col">
      <GatheringList />
      <GatheringCreateButton />
    </div>
  );
}

export default GatheringCompletedTemplate;
