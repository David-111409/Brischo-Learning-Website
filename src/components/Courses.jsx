import React, { useState } from "react";
import Button from "./Button";
import { courses } from "../constant/data";
import { RiStarFill } from "@remixicon/react";

function Courses() {
  const [active, setActive] = useState("All");
  const handleClick = (tab) => setActive(tab);
  const filtered =
    active === "All"
      ? courses
      : courses.filter((course) => course.category === active);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        {/* title  */}
        <div className="space-y-2.5 text-center">
          <h2 className="section-title">Explore courses</h2>
          <p className="text max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
            quibusdam maxime perspiciatis?
          </p>
        </div>

        {/* wrapper  */}
        <div className="mt-7">
          {/* Tabs  */}
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Popular", "Recent", "Design", "Marketing", "Coding"].map(
              (text) => (
                <button
                  className={`shadow-util px-6 py-2.5 rounded-full
                    font-medium transition-colors
                      ${
                        active === text
                          ? "bg-lime-200 hover:bg-lime-300 focus:bg-lime-300"
                          : "hover:bg-neutral-100 focus:bg-neutral-100"
                      }`}
                  onClick={() => handleClick(text)}
                  key={text}
                >
                  {text}
                </button>
              )
            )}
          </div>

          {/* cards Wrapper  */}
          <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              // card
              <div
                key={course.id}
                className="bg-white rounded-xl border border-neutral-200
                 overflow-hidden hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                 hover:border-black focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]  focus:border-black transition"
              >
                {/* img  */}
                <div className="h-48 w-full overflow-hidden flex items-center justify-center relative">
                  <img
                    src={course.img}
                    alt={course.title}
                    width={course.width}
                    height={course.height}
                    className="w-full h-full object-cover"
                  />
                  {course.isNew && (
                    <div className="absolute top-4 right-4 bg-yellow-300 p-1.5 transform rotate-3 shadow-sm text-sm font-bold">
                      New
                    </div>
                  )}
                </div>

                {/* content  */}
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-lg">{course.title}</h3>
                  <p className="text">By {course.author}</p>

                  <div className="flex justify-between items-center">
                    {/* rate  */}
                    <div className="flex items-center gap-1">
                      <span className="shrink-0 bg-yellow-100 p-1 text-yellow-600 inline-flex">
                        <RiStarFill size={12} />
                      </span>
                      <p className="text-sm font-bold">{course.rating}</p>
                      <p className="text-xs text-neutral-500">
                        ({course.reviews})
                      </p>
                    </div>
                    <p className="font-bold text-lg">${course.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            label={"Explore all courses"}
            primary
            classes="mt-12 mx-auto block"
          />
        </div>
      </div>
    </section>
  );
}

export default Courses;
