import { RiStarFill } from "@remixicon/react";
import Button from "./Button";

function Hero() {
  return (
    <section className="pt-12 lg:pt-18 pb-20">
      <div className="container grid gap-14 lg:grid-cols-[1fr_.9fr] lg:items-center">
        {/* content  */}
        <div className="space-y-2.5 sm:text-center lg:text-left">
          {/* badge  */}
          <div className="bg-yellow-400 px-3 inline-flex items-center gap-1 py-1 -rotate-2 transform">
            {/* stars  */}
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <RiStarFill key={i} size={12} />
              ))}
            </div>
            <p className="uppercase text-xs font-bold tracking-wider">
              "a joy to use"
            </p>
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">
            Professional and Lifelong learning comes here
          </h1>
          <p className="max-w-lg text-neutral-600 sm:mx-auto lg:mx-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium eaque maxime delectus quae.
          </p>
          {/* btns */}
          <div className="mt-7 grid gap-4 sm:justify-center sm:flex lg:justify-start">
            <Button label={"Get Started"} primary />
            <Button label={"Explore Courses"} />
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto p-5">
          <div className="max-w-[370px] w-full bg-lime-600 shadow-img mx-auto rounded-t-full flex items-center justify-center overflow-hidden">
            <img
              src="/images/hero-img.png"
              alt="hero image"
              width={440}
              height={592}
            />
          </div>
          {/* images decoration */}
          <img
            src="/images/book-icon.png"
            alt="book icon"
            width={64}
            height={64}
            className="absolute top-20 left-0 -rotate-12"
          />

          <img
            src="/images/star-icon.png"
            alt="star icon"
            width={64}
            height={64}
            className="absolute top-20 right-0"
          />
          <div className="bg-white shadow-util absolute space-y-2 left-0 sm:-left-10  bottom-20 px-8 py-6 rounded-lg">
            <div className="bg-lime-100 flex justify-center rounded-lg">
              <img
                src="/images/hero-card-icon.png"
                alt="hero card icon"
                width={64}
                height={64}
              />
            </div>
            <p className="text-center">
              <span className="font-bold">100k+ </span>
              students
              <br />
              learn daily
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
