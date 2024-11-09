function TopicsTaught() {
  return (
    <section className="flex flex-col p-4 bg-[#f7fafc]">
      <div className="flex items-center justify-center text-2xl font-bold">
        <h1 className="underline underline-offset-[8px] decoration-[#3F4571ff] decoration-4">
          Check out Our Courses <span>📖</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-5 lg:gap-3 lg:py-12">
        <a href="#" className="h-14 rounded-lg bg-gray-400 flex flex-row px-5 py-3 items-center justify-start gap-3">
          <img src="./courses/Course-SAT-1.png" alt="" className="rounded-md"/>
          <p className="text-base font-sans font-bold text-[#171923]">SAT Prep</p>
        </a>
        <a href="#">
          <div className="h-14 rounded-lg bg-gray-400"></div>
        </a>
        <a href="#">
          <div className="h-14 rounded-lg bg-gray-400"></div>
        </a>
        <a href="#">
          <div className="h-14 rounded-lg bg-gray-400"></div>
        </a>
        <a href="#">
          <div className="h-14 rounded-lg bg-gray-400"></div>
        </a>
        <a href="#">
          <div className="h-14 rounded-lg bg-gray-400"></div>
        </a>
        <a href="#">
          <div className="h-14 rounded-lg bg-gray-400"></div>
        </a>
        <a href="#">
          <div className="h-14 rounded-lg bg-gray-400"></div>
        </a>
        <a href="#">
          <div className="h-14 rounded-lg bg-gray-400"></div>
        </a>
      </div>
    </section>
  );
}

export default TopicsTaught;
