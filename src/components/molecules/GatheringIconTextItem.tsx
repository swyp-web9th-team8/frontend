"use client";

import { useRouter } from "next/navigation";

interface Props {
  Icon: (props: { className?: string }) => React.ReactNode;
  text: string;
  href?: string | null;
}

export default function GatheringIconTextItem({ Icon, text, href }: Props) {
  const router = useRouter();
  const css = href ? "cursor-pointer text-blue underline" : "text-grey-950";

  return (
    <div className="inline-flex items-center justify-start gap-3 self-stretch">
      <Icon className="text-grey-950 h-6 w-6" />
      <div
        className={`text-base leading-tight font-medium ${css}`}
        onClick={() => href && router.push(href)}
      >
        {text}
      </div>
    </div>
  );
}
