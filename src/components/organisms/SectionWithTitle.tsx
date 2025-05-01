export default function SectionWithTitle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <h2 className="font-gsans-medium text-body2-medium text-grey-950">
        {title}
      </h2>
      <section className="rounded-xl bg-white p-5 shadow-sm">
        {children}
      </section>
    </div>
  );
}
