import GatheringCompletedTemplate from "@/components/templates/GatheringCompletedTemplate";

export default function GatheringCompletedPage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="justify-start text-xl leading-normal font-bold text-[#1A1A1A]">
        동네에 이런 모임이 있었어요 🔥
      </h1>
      <GatheringCompletedTemplate />
    </div>
  );
}
