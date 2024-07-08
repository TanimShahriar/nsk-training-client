import "./Banner.css"


const Banner = () => {
  return (
    <div className="phone_center lg:flex items-center px-2 lg:px-20 pb-1 lg:pb-5">
      <div className="w-full lg:w-[50%]">
        <div className="gap-2 mb-5 pt-5">

          <h5 className="text-center lg:text-left text-2xl lg:text-4xl -mb-6 lg:-mb-4 font-bold text-[#E30A13]">Be asset</h5>
        </div>
        <h2 className="text-base lg:text-2xl font-bold lg:font-semibold text-center lg:text-left -mb-3 ">By taking</h2>
        <h1 className="text-2xl lg:text-4xl  font-bold text-[]#013982 mt-1 lg:mt-3 mb-6 lg:mb-5 text-center lg:text-left">professional training</h1>
        <p className=" lg:text-left text-sm lg:text-base w-full px-1 lg:px-0 lg:w-[400px] mb-5 lg:mb-10 text-center ">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
        <div className="flex gap-5 w-[75%] lg:w-full mx-auto">
          <button className="hover:bg-red-500 duration-300 flex items-center gap-1 px-2 lg:px-6 py-1 lg:py-2 bg-[#013982] text-white font-light text-base lg:text-xl rounded-md">Browse Course</button>
          <button className="hover:bg-red-500 duration-300 hidden_btn flex items-center gap-1 px-2 lg:px-6 py-1 lg:py-2 bg-[#013982] text-white font-light text-base lg:text-xl rounded-md"> Join Free Seminar</button>
        </div>

      </div>


      <div className="mt-5 w-full lg:w-[50%]">
        <img className="rounded-[30px]" src="https://i.ibb.co/xmqG09n/Bannerr.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;