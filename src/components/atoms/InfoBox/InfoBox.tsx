export default function InfoBox({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="flex flex-col gap-1.5 rounded-xl border px-3 py-3.5">
      <p className="text-body4-medium text-grey-950 font-gsans-medium">
        {label}
      </p>
      <div className="flex items-center gap-1.5">
        <p className="text-grey-950 text-heading1-medium font-gsans-bold">
          {value}
        </p>
        <p className="text-grey-950 font-gsans-medium text-body4-medium">회</p>
      </div>
    </div>
  );
}
