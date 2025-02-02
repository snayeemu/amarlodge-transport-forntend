import Form from "next/form";

const Banner = () => {
  return (
    <div className="relative">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="h-[550px] w-full object-cover md:h-[500px] lg:h-[500px] xl:h-[520px]   2xl:h-[420px]"
      >
        <source
          className="object-cover"
          src="https://amarlodge.com/hero.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Contents */}
      <div className="absolute left-2/4 top-[200px] flex h-[400px] w-full max-w-[920px] -translate-x-2/4 -translate-y-2/4 flex-col items-center md:top-2/4 ">
        <h1 className="mt-6 text-center text-xl font-bold text-white md:text-3xl">
          WELCOME TO TRASPORT
        </h1>
        <div className="focus-visible:ring-ring mt-2 w-[calc(100%-10px)] rounded bg-white/10 px-6 py-4 ring-offset-background backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2">
          <Form action="">
            {/* input fields started */}
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2  ">
              <div className="w-full">
                <label htmlFor="" className="font-bold leading-8 text-white">
                  From
                </label>
                <div className="relative bg-transparent">
                  <div className="z-[9999] placeholder:text-sm placeholder:font-medium placeholder:text-zinc-800 hover:placeholder:text-transparent ">
                    <input
                      type="text"
                      placeholder="Enter Your Destination"
                      className="input input-bordered w-full "
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="" className="font-bold leading-8 text-white">
                  Select Date
                </label>
                <div className="relative bg-transparent">
                  <div className="z-[9999] placeholder:text-sm placeholder:font-medium placeholder:text-zinc-800 hover:placeholder:text-transparent ">
                    {/* date picker start */}
                    <input
                      id="date"
                      type="date"
                      placeholder="dd/mm/yyyy"
                      className="input input-bordered w-full"
                    />
                    {/* date picker end */}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="" className="font-bold leading-8 text-white">
                  Destination
                </label>
                <div className="relative bg-transparent">
                  <div className="z-[9999] placeholder:text-sm placeholder:font-medium placeholder:text-zinc-800 hover:placeholder:text-transparent ">
                    <input
                      type="text"
                      placeholder="Enter Your Destination"
                      className="input input-bordered w-full "
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="" className="font-bold leading-8 text-white">
                  Number Of Seats
                </label>
                <div className="relative bg-transparent">
                  <div className="z-[9999] placeholder:text-sm placeholder:font-medium placeholder:text-zinc-800 hover:placeholder:text-transparent ">
                    <input
                      type="number"
                      placeholder="How many seats?"
                      className="input input-bordered w-full "
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* input field ended */}
            <div className="mt-2 flex justify-center md:justify-end">
              <button className="mt-4 inline-flex h-11 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-bold text-white  shadow shadow-zinc-400 hover:bg-slate-800 duration-1000">
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
