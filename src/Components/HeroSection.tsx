function HeroSection() {
  return (
    <section className="flex flex-row items-center  justify-center bg-[#ECF6FFff]">
      <div className="mx-auto max-w-screen-xl px-4 py-4 md:py-4 lg:py-4 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-[#929AB4ff]">
            Unlock Your Potential with Expert-Led
            <strong className="block font-extrabold text-[#3F4571ff]">
              Online Learning.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-[#0B1215]">
            Get access to an array of courses, resources and skilled Tutors, All
            tailored to your learning needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center items-center">
            <button className="rounded px-6 py-2 font-medium bg-[#3F4571ff] text-white lg:w-fit md:w-fit w-full transition-all shadow-[3px_3px_0px_#212121] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Start Learning
            </button>

            <button className="block lg:w-fit md:w-fit w-full rounded bg-[#ecf6FFff] px-6 py-3 text-sm font-medium text-[#3F4571ff] shadow-md sm:w-auto">
              Learn More <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>

        <div className="">
          <img src="./Hero-v3.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
