import "./Stat.css"

const Stat = () => {
  return (
    <div className='grid lg:grid-cols-6 justify-center gap-3 lg:gap-8 px-5'>
      <div className='border-slate-500 p-6 lg:p-16  flex items-center gap-20 mx-auto'>
        <div className="">
          <h3 className='text-2xl text-[#FF0000] font-bold text-center'>05+</h3>
          <h5 className='text-center font-semibold'>Total</h5>
          <h5 className='text-center font-semibold'>Courses</h5>
        </div>
        <img className="hr_image h-24" src="https://i.ibb.co/SwfQQRG/Screenshot-2.png" alt="" />
      </div>
      <div className=' border-slate-300 p-6 lg:p-16 flex items-center gap-[70px] mx-auto'>
        <div>
          <h3 className='text-2xl text-[#FF0000] font-bold text-center'>250+</h3>
          <h5 className='text-center font-semibold'>Total</h5>
          <h5 className='text-center font-semibold'>Students</h5>
        </div>
        <img className="hr_image h-24" src="https://i.ibb.co/SwfQQRG/Screenshot-2.png" alt="" />
      </div>
      <div className=' border-slate-300 p-6 lg:p-16 flex items-center gap-[76px] mx-auto '>
        <div>
          <h3 className='text-2xl text-[#FF0000] font-bold text-center'>150+</h3>
          <h5 className='text-center font-semibold'>Getting</h5>
          <h5 className='text-center font-semibold'>Job</h5>
        </div>
        <img className="hr_image h-24" src="https://i.ibb.co/SwfQQRG/Screenshot-2.png" alt="" />
      </div>
      <div className=' border-slate-300 p-6 lg:p-16 flex items-center gap-16 mx-auto'>
        <div>
          <h3 className='text-2xl text-[#FF0000] font-bold text-center'>150+</h3>
          <h5 className='text-center font-semibold'>Job</h5>
          <h5 className='text-center font-semibold'>Opportunity</h5>
        </div>
        <img className="hr_image h-24" src="https://i.ibb.co/SwfQQRG/Screenshot-2.png" alt="" />
      </div>
      <div className=' border-slate-300 p-6 lg:p-16 flex items-center gap-16 mx-auto'>
        <div>
          <h3 className='text-2xl text-[#FF0000] font-bold text-center'>150+</h3>
          <h5 className='text-center font-semibold'>Available</h5>
          <h5 className='text-center font-semibold'>CV</h5>
        </div>
        <img className="hr_image h-24" src="https://i.ibb.co/SwfQQRG/Screenshot-2.png" alt="" />
      </div>
      <div className=' border-slate-300 p-6 lg:p-16'>
        <h3 className='text-2xl text-[#FF0000] font-bold text-center'>100+</h3>
        <h5 className='text-center font-semibold'>Total</h5>
        <h5 className='text-center font-semibold'>Partners</h5>
      </div>
    </div>
  );
};

export default Stat;