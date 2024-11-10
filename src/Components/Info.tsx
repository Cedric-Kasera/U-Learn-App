function Info() {
  return (
    <section className="flex flex-col bg-[#ECF6FFff] py-6 md:py-16">
      <div className="flex items-center justify-center text-2xl font-bold">
        <h1 className="underline underline-offset-[8px] decoration-red-600 decoration-4">
          We are There for You <span>🚀</span>
        </h1>
      </div>
      <div className="px-4 py-4 md:py lg:py-4 lg:flex lg:flex-col lg:px-20">
        <div className="mx-auto max-w-screen-xl px-4 py-4 lg:py-12 lg:flex lg:items-center lg:px-14 gap-8 md:gap-[87px] rounded-md">
          <div className="lg:max-w-[50%] text-left ltr:sm:text-left rtl:sm:text-right py-5">
            <p className="text-base uppercase font-semibold text-[#718096] md:pb-4">
              Get Certified
            </p>
            <h1 className="text-2xl font-bold text-[#171923] md:pb-4">
              Showcase what you've learned.
            </h1>
            <p className="text-base font-normal text-[#171923] md:pb-4">
              Schoolhouse Certifications let you prove your mastery of Khan
              Academy math units–and allow you to become a tutor, yourself.
              We'll provide you one portfolio that showcases it all–it looks
              great for colleges, too!
            </p>
            <button className="block lg:w-fit md:w-fit w-full rounded bg-[#3F4571ff] px-6 py-3 text-sm font-semibold text-white text shadow-md sm:w-auto">
              Certifications <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
          <div>
            <img src="./Info/Certifications.svg" alt="" />
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl px-4 py-4 lg:py-4 lg:flex lg:flex-row-reverse lg:items-center lg:px-14 gap-8 md:gap-[87px] rounded-md">
          <div className="lg:max-w-[50%] text-left ltr:sm:text-left rtl:sm:text-right py-5">
            <p className="text-base uppercase font-semibold text-[#718096] md:pb-4">
              Volunteering
            </p>
            <h1 className="text-2xl font-bold text-[#171923] md:pb-4">
              Volunteer as a Tutor Today.
            </h1>
            <p className="text-base font-normal text-[#171923] md:pb-4">
              As a Schoolhouse tutor, you can give back to other learners who
              need it the most, while gaining leadership experience and
              volunteer hours. We welcome students to become tutors–no prior
              experience is required!
            </p>
            <button className="block lg:w-fit md:w-fit w-full rounded bg-[#ecf6FFff] px-6 py-3 text-sm font-semibold text-[#3F4571ff] text shadow-md sm:w-auto outline outline-2 hover:bg-[#e2e9f0] hover:outline-none">
              Become a Tutor <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <div className="justify-start">
            <img src="./Info/MyTutoring.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
