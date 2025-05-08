import { useRouter } from "next/navigation";
import BackArrow from "@/assets/icons/back-arrow.svg";

interface SearchHeaderProps {
  title: string;
}

export default function SearchHeader({ title }: SearchHeaderProps) {
  const router = useRouter();

  return (
    <header className="relative mb-[1.875rem] flex items-center justify-center">
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="뒤로가기"
        className="absolute left-0 mr-3 cursor-pointer"
      >
        <BackArrow />
      </button>
      <h1 className="text-grey-950 text-heading1-medium font-gsans-medium text-center">
        {title}
      </h1>
    </header>
  );
}
