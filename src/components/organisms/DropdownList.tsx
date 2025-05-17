interface Props {
  children: React.ReactNode;
}

function DropdownList({ children }: Props) {
  return (
    <div className="flex flex-col gap-4.5 rounded-xl border-[0.8px] border-[#B0B0B0] bg-white px-3.5 py-5 whitespace-nowrap">
      {children}
    </div>
  );
}

export default DropdownList;
