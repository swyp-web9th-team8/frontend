import { IFetchGatheringDetailResponse } from "@/types/gatherings";

type Props = Pick<IFetchGatheringDetailResponse, "data">;

function Description({ data: { content } }: Props) {
  return (
    <div className="inline-flex flex-col items-start justify-start gap-1.5 self-stretch">
      <div className="text-body1-bold justify-start self-stretch text-gray-950">
        모임장의 한 말씀
      </div>
      <div className="text-greyscale-gray-950 text-body1-medium justify-start self-stretch">
        {content}
      </div>
    </div>
  );
}

export default Description;
