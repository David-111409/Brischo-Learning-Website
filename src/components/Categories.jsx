import { categoriesItems } from "../constant/data";

function Categories() {
  console.log(categoriesItems);
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="section-title text-center">
          Explore 4000+ Free <br /> Online courses{" "}
        </h2>

        {/* wrapper  */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-11">
          {categoriesItems.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white cursor-pointer border-neutral-200 border rounded-xl focus:border-black hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition"
            >
              {/* icon */}
              <item.icon className="inline-flex text-neutral-700 mb-3" />

              {/* title */}
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>

              {/* description */}
              <p className="text">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
