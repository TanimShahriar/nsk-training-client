
const CvBank = () => {
  return (
    <div className="lg:flex gap-16 items-center px-2 lg:px-20 pb-1 lg:pb-5 border-t-2 lg:border-t-0 mt-5 lg:mt-12">
      <div className="mt-5 w-full lg:w-[60%]">
        <img className="rounded-[30px]" src="https://i.ibb.co/xmqG09n/Bannerr.png" alt="" />
      </div>


      <div className="w-full lg:w-[40%]">
        <div className="gap-2 mb-5 lg:mb-10 pt-5">
          <h5 className="text-center lg:text-left text-2xl lg:text-3xl font-bold text-[#013982]">CV Bank</h5>
        </div>

        <p className=" lg:text-left text-sm lg:text-base w-full px-1 lg:px-0 lg:w-[400px] mb-5 lg:mb-10 text-center ">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
        <div className="flex gap-5 w-[75%] lg:w-full mx-auto mt-4 lg:mt-14">
          <a className="hover:bg-red-500 cursor-pointer duration-300 flex items-center gap-1 ml-16 lg:ml-0 px-2 lg:px-6 py-1 lg:py-2 bg-[#013982] text-white font-light text-base lg:text-lg rounded-md" href="/Resume.pdf" download>Click for your CV</a>

          {/* <a className="flex items-center text-slate-400 gap-2 bg-slate-800 hover:bg-slate-600  px-6 py-3 rounded-lg " href="/Resume.pdf" download>  Download Resume </a> */}

        </div>

      </div>



    </div>
  );
};

export default CvBank;