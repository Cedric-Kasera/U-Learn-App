import { HiChevronRight } from "react-icons/hi";

function TopicsTaught() {
  return (
    <section className="flex flex-col py-6 gap-6 px-3 md:py-16 md:px-40 bg-[#f7fafc]">
      <div className="flex items-center justify-center text-2xl font-bold">
        <h1 className="underline underline-offset-[8px] decoration-[#3F4571ff] decoration-4">
          Check out Our Courses <span>📖</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-5 lg:gap-3 lg:py-12 items-center justify-center">
        <a
          href="#"
          className="h-14 rounded-lg bg-[#e2e9f0] hover:bg-slate-300 transition ease-in-out flex flex-row px-5 py-3 items-center justify-start gap-3"
        >
          <img
            src="./courses/Course-SAT.png"
            alt=""
            className="rounded-md hidden md:flex lg:flex"
          />
          <p className="text-base text-center font-sans font-semibold text-[#171923]">
            SAT Prep
          </p>
        </a>

        <a
          href="#"
          className="h-14 rounded-lg bg-[#e2e9f0] hover:bg-slate-300 transition ease-in-out flex flex-row px-5 py-3 items-center justify-start gap-3"
        >
          <img
            src="./courses/Course-Prealgebra.png"
            alt=""
            className="rounded-md hidden md:flex lg:flex"
          />
          <p className="text-base font-sans font-semibold text-[#171923]">
            Pre-Algebra
          </p>
        </a>
        <a
          href="#"
          className="h-14 rounded-lg bg-[#e2e9f0] hover:bg-slate-300 transition ease-in-out flex flex-row px-5 py-3 items-center justify-start gap-3"
        >
          <img
            src="./courses/Course-Algebra1.png"
            alt=""
            className="rounded-md hidden md:flex lg:flex"
          />
          <p className="text-base font-sans font-semibold text-[#171923]">
            Algebra 1
          </p>
        </a>
        <a
          href="#"
          className="h-14 rounded-lg bg-[#e2e9f0] hover:bg-slate-300 transition ease-in-out flex flex-row px-5 py-3 items-center justify-start gap-3"
        >
          <img
            src="./courses/Course-Algebra2.png"
            alt=""
            className="rounded-md hidden md:flex lg:flex"
          />
          <p className="text-base font-sans font-semibold text-[#171923]">
            Algebra 2
          </p>
        </a>
        <a
          href="#"
          className="h-14 rounded-lg bg-[#e2e9f0] hover:bg-slate-300 transition ease-in-out flex flex-row px-5 py-3 items-center justify-start gap-3"
        >
          <img
            src="./courses/Course-Geometry.png"
            alt=""
            className="rounded-md hidden md:flex lg:flex"
          />
          <p className="text-base font-sans font-semibold text-[#171923]">
            Geometry
          </p>
        </a>
        <a
          href="#"
          className="h-14 rounded-lg bg-[#e2e9f0] hover:bg-slate-300 transition ease-in-out flex flex-row px-5 py-3 items-center justify-start gap-3"
        >
          <img
            src="./courses/Course-Trigonometry.png"
            alt=""
            className="rounded-md hidden md:flex lg:flex"
          />
          <p className="text-base font-sans font-semibold text-[#171923]">
            Trigonometry
          </p>
        </a>
        <a
          href="#"
          className="h-14 rounded-lg bg-[#e2e9f0] hover:bg-slate-300 transition ease-in-out flex flex-row px-5 py-3 items-center justify-start gap-3"
        >
          <img
            src="./courses/Course-Precalculus.png"
            alt=""
            className="rounded-md hidden md:flex lg:flex"
          />
          <p className="text-base font-sans font-semibold text-[#171923]">
            Pre-Calculus
          </p>
        </a>
        <a
          href="#"
          className="h-14 rounded-lg bg-[#e2e9f0] hover:bg-slate-300 transition ease-in-out flex flex-row px-5 py-3 items-center justify-start gap-3"
        >
          <img
            src="./courses/Course-Calculus.png"
            alt=""
            className="rounded-md hidden md:flex lg:flex"
          />
          <p className="text-base font-sans font-semibold text-[#171923]">
            Calculus
          </p>
        </a>
        <a
          href="#"
          className="h-14 rounded-lg bg-[#e2e9f0] hover:bg-slate-300 transition ease-in-out flex flex-row px-5 py-3 items-center justify-start gap-3"
        >
          <img
            src="./courses/Course-Statistics.png"
            alt=""
            className="rounded-md hidden md:flex lg:flex"
          />
          <p className="text-base font-sans font-semibold text-[#171923]">
            Statistics
          </p>
        </a>
        <a href="#" className="flex flex-row items-center justify-center gap-2 text-blue-600 hover:text-blue-700 text-base font-sans font-semibold">
            <p>See All Subjects</p>
            <HiChevronRight />
        </a>
      </div>
    </section>
  );
}

export default TopicsTaught;
