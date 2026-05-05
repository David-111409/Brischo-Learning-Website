import { brandBannerImgs } from "../constant/data";
import MarqueeLib from "react-fast-marquee";
const Marquee = MarqueeLib.default;

function Banner() {
  return (
    <section className="bg-neutral-900 py-4 -skew-y-3">
      <Marquee autoFill pauseOnHover>
        {brandBannerImgs.map((image, index) => (
          <div key={index} className="h-11 ml-3">
            <img
              src={image}
              alt="brand logo"
              className="h-full w-full object-cover"
              width={484}
              height={132}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default Banner;
