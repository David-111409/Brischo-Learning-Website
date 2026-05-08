import { RiCheckboxCircleLine } from "@remixicon/react";
import { benefits } from "../constant/data";

function WhyLearn() {
  return (
    <section className="py-20">
      <div className="container grid gap-16 lg:grid-cols-[0.7fr_1fr] lg:items-center">
        {/* image  */}
        <div className="relative mx-auto p-5 order-1 lg:order-first">
          <div className="max-w-[360px] pt-9 px-2.5 w-full bg-lime-600 shadow-img mx-auto rounded-t-full flex items-center justify-center overflow-hidden">
            <img
              src="/images/section-img.png"
              alt="why learn image"
              width={440}
              height={592}
            />
          </div>
          {/* images decoration */}
          <img
            src="/images/star-icon.png"
            alt="star icon"
            width={64}
            height={64}
            className="absolute top-20 right-0"
          />
        </div>

        {/* content  */}
        <div className="">
          <h2 className="section-title mb-2">Why Learn live with Brischo?</h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            similique!
          </p>

          {/* list  */}
          <ul className="mt-8 space-y-4 ">
            {benefits.map((benefit) => (
              <li className="flex items-start gap-3" key={benefit}>
                <span className="text-lime-600 shrink-0">
                  <RiCheckboxCircleLine />
                </span>
                <p className="font-medium text">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyLearn;
