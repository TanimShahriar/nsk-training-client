import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./TopHeader.css"


const TopHeader = () => {
  return (

    <div className="Top py-[9px] bg-[#013982] pl-0 lg:pl-3 pr-0 lg:pr-8">
      <div className="flex justify-between items-center px-2 lg:px-16">
        <div className="flex gap-0 lg:gap-14 text-white ">
          <div>
            <h2 className="flex items-center gap-2"> <BsFillTelephoneFill />  01777308777 </h2>
          </div>
          <div>
            <h2 className="flex items-center gap-2"> <IoMdMail className="" />nsktraininginstitute@gmail.com</h2>
          </div>

        </div>
        <div className="flex items-center">
          <button className=" mr-10 px-3 bg-slate-100 font-bold h-10 text-red-500 hover:text-blue-500">CV BANK</button>
          <div className="bg-slate-300 p-1 rounded-md">
            <button className="px-2 rounded-md bg-slate-300 font-semibold hover:text-red-500">EN</button>
            <button className="px-2 rounded-md bg-[#1b467d] text-slate-400 font-semibold hover:bg-green-500 hover:text-white">BN</button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default TopHeader;