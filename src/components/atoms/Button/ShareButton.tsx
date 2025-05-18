import IconShare from "@/assets/icons/IconShare.svg";

export interface IShareButton {
  size?: number;
  title: string;
  text: string;
  href: string;
}

function ShareButton({ size = 28, title, text, href }: IShareButton) {
  const handleShare = async () => {
    const sharedData = {
      title: title,
      text: text,
      url: href ?? "https://ploggo.co.kr",
    };

    try {
      await navigator.share(sharedData);
    } catch {}
  };

  return (
    <button type="button" onClick={handleShare}>
      <IconShare
        className="text-gray-950"
        style={{ width: size, height: size }}
      />
    </button>
  );
}

export default ShareButton;
