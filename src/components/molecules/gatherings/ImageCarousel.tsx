import GatheringImage from "@/components/atoms/GatheringImage/GatheringImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Keep this import last for css override purposes
import "@/styles/slick-overrides.css";

interface Props {
  imageUrls: string[];
}

export default function ImageCarousel({ imageUrls }: Props) {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    arrows: false,
    centerMode: true,
    centerPadding: "10px",
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {imageUrls.map((imageUrl) => (
          <GatheringImage key={imageUrl} src={imageUrl} />
        ))}
      </Slider>
    </div>
  );
}
