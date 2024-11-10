function AboutSection() {
  return (
    <section className="flex flex-row items-center justify-center bg-[#ECF6FFff] pb-10">
      <div className="mx-auto max-w-screen-xl px-4 py-4 md:py lg:py-[72px] lg:flex lg:items-center lg:px-14 gap-8 bg-[#e2e9f0] rounded-md">
        <div className="lg:max-w-[50%] text-left ltr:sm:text-left rtl:sm:text-right py-5">
          <h1 className="text-[14px] font-bold font-sans text-[#718096] flex flex-row gap-2">
            <span>FROM THE FOUNDER OF</span>{" "}
            <a href="#" className="flex flex-row text">
              <img src="./Icon-Link.png" alt="" />
            </a>
          </h1>

          <p className="text-[32px] font-bold font-sans flex-wrap text-[#4a5568]">
            "We are a non-profit with the mission of connecting the world with
            free, peer-to-peer tutoring."
          </p>

          <button className="mt-8 rounded px-6 py-2 font-medium bg-[#3F4571ff] text-white w-fit transition-all shadow-[3px_3px_0px_#212121] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
            More About Us
          </button>
        </div>

        {/* <span className="static hidden md:hidden lg:inline-block h-[300px] min-h-[1.5em] w-[2.5px] self-stretch bg-transparent bg-gradient-to-r from-transparent via-[#3F4571ff] to-transparent opacity-25"></span> */}

        <div className="flex flex-col items-start lg:h-[100%] gap-6 lg:gap-8 pt-5">
          <div className="flex flex-row gap-5 items-center justify-center bg-gray-400 p-2 rounded-lg">
            <img src="./Kasera.jpeg" alt="" className="rounded-md size-28" />
            <div>
              <h1 className="text-xl font-extrabold text-[#3F4571ff]">Founded by Omar Kasera</h1>
              <p className="text-base font-bold text-[#3F4571ff]">CEO of U-Learn Academy.</p>
            </div>
          </div>
          <div className="text-xl font-extrabold text-[#3f3f49]">
            <p>Learn From Anywhere,Anytime from the Comfort of your Home.</p>
          </div>
          <div className="flex flex-row gap-5 w-[100%] items-start">
            <div className="flex flex-col">
              <p className="text-3xl font-extrabold text-[#3F4571ff]">100+</p>
              <p className="text-[#3F4571ff] text-sm font-bold font-sans">Learners</p>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-extrabold text-[#3F4571ff]">50+</p>
              <p className="text-[#3F4571ff] text-sm font-bold font-sans">Tutors</p>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-extrabold text-[#3F4571ff]">2500+</p>
              <p className="text-[#3F4571ff] text-sm font-bold font-sans">Sessions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
