import { RiDoubleQuotesR } from "@remixicon/react";
import { testimonials } from "../constant/data";

function Testimonials() {
  return (
    <section className="py-20">
      <div className="container">
        {/* title  */}
        <div className="space-y-1.5">
          <h2 className="section-title">What learners are saying</h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            deleniti maiores repudiandae est.
          </p>
        </div>
        {/* card Wrapper */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((test, ind) => (
            // card
            <div
              className={`bg-white border border-neutral-200 shadow-sm p-8 rounded-xl space-y-3.5 ${
                ind === 1 ? "lg:rotate-2" : ""
              } `}
              key={test.id}
            >
              {/* icon  */}
              <span className="size-8 bg-yellow-400 inline-flex items-center justify-center rounded-xl">
                <RiDoubleQuotesR />
              </span>
              <p className="text">{test.text}</p>
              {/* author  */}
              <div className="flex items-center gap-3">
                <div className="size-10">
                  <img
                    src={test.image}
                    alt={test.author}
                    height={150}
                    width={150}
                    className="rounded-full h-full w-full object-cover"
                  />
                </div>
                <div className="">
                  <p className="text-bold">{test.author}</p>
                  <p className="text truncate text-sm">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
