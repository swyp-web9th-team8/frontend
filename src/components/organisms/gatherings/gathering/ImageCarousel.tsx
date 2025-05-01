import GatheringImage from "@/components/atoms/GatheringImage/GatheringImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slick.css";

export default function ImageCarousel() {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
  };

  return (
    <Slider {...settings}>
      <GatheringImage />
      <GatheringImage />
      <GatheringImage />
    </Slider>
  );
}
