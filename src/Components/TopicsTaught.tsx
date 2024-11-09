function TopicsTaught() {
  return (
    <section className="flex flex-col p-4 bg-[#f7fafc]">
      <div className="flex items-center justify-center text-2xl font-bold">
        <h1 className="underline underline-offset-[8px] decoration-[#3F4571ff] decoration-4">Check out Our Courses <span>📖</span></h1>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-5 lg:py-12">
          <a href="#">
            <div className="h-16 rounded-lg bg-gray-400">
                <img src="./courses/Course-SAT.png" alt="" />
            </div>
          </a>
          <a href="#">
            <div className="h-16 rounded-lg bg-gray-400"></div>
          </a>
          <a href="#">
            <div className="h-16 rounded-lg bg-gray-400"></div>
          </a>
          <a href="#">
            <div className="h-16 rounded-lg bg-gray-400"></div>
          </a>
          <a href="#">
            <div className="h-16 rounded-lg bg-gray-400"></div>
          </a>
          <a href="#">
            <div className="h-16 rounded-lg bg-gray-400"></div>
          </a>
          <a href="#">
            <div className="h-16 rounded-lg bg-gray-400"></div>
          </a>
          <a href="#">
            <div className="h-16 rounded-lg bg-gray-400"></div>
          </a>
          <a href="#">
            <div className="h-16 rounded-lg bg-gray-400"></div>
          </a>
        </div>
    </section>
  );
}

export default TopicsTaught;
