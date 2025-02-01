import Form from "next/form";

const Banner = () => {
  return (
    <div className="">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="w-full h-[550px] md:h-[500px] lg:h-[500px] xl:h-[520px] 2xl:h-[420px]   object-cover"
      >
        <source
          className="object-cover"
          src="https://amarlodge.com/hero.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-[200px] md:top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full max-w-[920px] h-[400px]">
        <h1 className="font-bold text-xl md:text-3xl text-center text-white mt-6">
          WELCOME TO Our Transport Management
        </h1>
        <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-white/10 backdrop-blur-sm w-[calc(100%-10px)] rounded py-4 px-6">
          <Form action="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
              <div className="w-full">
                <label htmlFor="" className="text-white font-bold leading-8">
                  Destinations
                </label>
                <div className="relative bg-transparent">
                  <div className="placeholder:text-zinc-800 placeholder:text-sm placeholder:font-medium hover:placeholder:text-transparent z-[9999] ">
                    <input
                      type="text"
                      placeholder="Enter Your Destination"
                      className="input input-bordered w-full max-w-xs "
                    />
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
