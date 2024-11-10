function Textimonials() {
  return (
    <section className="flex flex-col py-6 gap-6 px-3 md:py-16 md:px-40 bg-[#f7fafc]">
      <div className="flex items-center justify-center text-2xl font-bold pb-3">
        <h1 className="underline underline-offset-[8px] decoration-yellow-400 decoration-4">
          Community Voices <span>📣</span>
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="">
          <p className="text-xl font-bold text-[#171923]">
            During the pandemic, everything went out of order. Later on, I
            stumbled upon Schoolhouse.world. It was amazing since I didn't have
            to pay, reveal my personal details, and I did not have a hard time
            using it since it is very accessible. The global community amazed
            me. It was amazing that a shared love for learning integrated
            different people from different parts of the world.
          </p>
          <h1 className="text-xl font-bold text-[#4a5568]">Christine A</h1>
          <p className="text-base font-semibold text-[#4a5568]">Learner from the Phillippines 🇵🇭</p>
        </div>
        <div>
          <img src="./Testimonials/ChristineA.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Textimonials;
