import React from "react";
import "./Classified.css";

export default function Classified() {
  return (
    <div className='bg-[#F8F8F8] py-14'>
      <div className='mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4'>
        <div className='flex justify-between'>
          <div className='flex flex-col items-center w-1/6 p-4'>
            <h1 className='text-3xl text-center font-medium mb-3 leading-normal'>
              Classified Products on the week
            </h1>
            <div className='flex justify-between mb-3 gap-5'>
              <button className='w-12 h-12 rounded-full mt-2 mb-2 bg-white drop-shadow p-4'>
                <svg
                  width='13'
                  height='20'
                  viewBox='0 0 13 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.0897 2.17945L3.17946 10.0897L11.0897 18'
                    stroke='black'
                    stroke-width='4'
                  />
                </svg>
              </button>
              <button className='w-12 h-12 rounded-full mt-2 mb-2 bg-white drop-shadow p-4'>
                <svg
                  width='13'
                  height='20'
                  viewBox='0 0 13 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.91027 17.8205L9.82054 9.91028L1.91027 2.00001'
                    stroke='black'
                    stroke-width='4'
                  />
                </svg>
              </button>
            </div>
            <button className=' w-44 bg-greenish '>Explore </button>
          </div>
          <div className='flex justify-between w-1/6 py-4 mx-2'>
            <div className='flex flex-col  bg-white rounded-xl  '>
              <img
                className=' rounded-xl  w-100 h-48 mb-3 object-cover	 '
                src='https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw='
                alt=''
              />

              <h1 className='text-sm m-3'>
                Holy Stone HS470 Foldable GPS RC Drone
              </h1>
              <div className='flex justify-between mx-2  mt-1 mb-3 items-center'>
                <p className=' text-[#00C6D7] font-semibold'>$300.98</p>
                <div className='flex items-center justify-end m-2 gap-1'>
                  <span className=''>
                    <svg
                      width='11'
                      height='15'
                      viewBox='0 0 11 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4.93476 14.6974C0.772578 8.5263 0 7.89296 0 5.625C0 2.51839 2.46242 0 5.5 0C8.53758 0 11 2.51839 11 5.625C11 7.89296 10.2274 8.5263 6.06524 14.6974C5.7921 15.1009 5.20787 15.1009 4.93476 14.6974ZM5.5 7.96875C6.76566 7.96875 7.79167 6.91942 7.79167 5.625C7.79167 4.33058 6.76566 3.28125 5.5 3.28125C4.23434 3.28125 3.20833 4.33058 3.20833 5.625C3.20833 6.91942 4.23434 7.96875 5.5 7.96875Z'
                        fill='#8D8D8D'
                      />
                    </svg>
                  </span>
                  <p className=' text-xs'> Cape Hadstone</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between w-1/6 py-4'>
            <div className='flex flex-col  bg-white rounded-xl  '>
              <img
                className=' rounded-xl  w-100 h-48 mb-3 object-cover	 '
                src='https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw='
                alt=''
              />

              <h1 className='text-sm m-3'>
                Holy Stone HS470 Foldable GPS RC Drone
              </h1>
              <div className='flex justify-between mx-2  mt-1 mb-3 items-center'>
                <p className=' text-[#00C6D7] font-semibold'>$300.98</p>
                <div className='flex items-center justify-end m-2 gap-1'>
                  <span className=''>
                    <svg
                      width='11'
                      height='15'
                      viewBox='0 0 11 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4.93476 14.6974C0.772578 8.5263 0 7.89296 0 5.625C0 2.51839 2.46242 0 5.5 0C8.53758 0 11 2.51839 11 5.625C11 7.89296 10.2274 8.5263 6.06524 14.6974C5.7921 15.1009 5.20787 15.1009 4.93476 14.6974ZM5.5 7.96875C6.76566 7.96875 7.79167 6.91942 7.79167 5.625C7.79167 4.33058 6.76566 3.28125 5.5 3.28125C4.23434 3.28125 3.20833 4.33058 3.20833 5.625C3.20833 6.91942 4.23434 7.96875 5.5 7.96875Z'
                        fill='#8D8D8D'
                      />
                    </svg>
                  </span>
                  <p className=' text-xs'> Cape Hadstone</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between w-1/6 py-4'>
            <div className='flex flex-col  bg-white rounded-xl  '>
              <img
                className=' rounded-xl  w-100 h-48 mb-3 object-cover	 '
                src='https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw='
                alt=''
              />

              <h1 className='text-sm m-3'>
                Holy Stone HS470 Foldable GPS RC Drone
              </h1>
              <div className='flex justify-between mx-2  mt-1 mb-3 items-center'>
                <p className=' text-[#00C6D7] font-semibold'>$300.98</p>
                <div className='flex items-center justify-end m-2 gap-1'>
                  <span className=''>
                    <svg
                      width='11'
                      height='15'
                      viewBox='0 0 11 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4.93476 14.6974C0.772578 8.5263 0 7.89296 0 5.625C0 2.51839 2.46242 0 5.5 0C8.53758 0 11 2.51839 11 5.625C11 7.89296 10.2274 8.5263 6.06524 14.6974C5.7921 15.1009 5.20787 15.1009 4.93476 14.6974ZM5.5 7.96875C6.76566 7.96875 7.79167 6.91942 7.79167 5.625C7.79167 4.33058 6.76566 3.28125 5.5 3.28125C4.23434 3.28125 3.20833 4.33058 3.20833 5.625C3.20833 6.91942 4.23434 7.96875 5.5 7.96875Z'
                        fill='#8D8D8D'
                      />
                    </svg>
                  </span>
                  <p className=' text-xs'> Cape Hadstone</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between w-1/6 py-4'>
            <div className='flex flex-col  bg-white rounded-xl  '>
              <img
                className=' rounded-xl  w-100 h-48 mb-3 object-cover	 '
                src='https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw='
                alt=''
              />

              <h1 className='text-sm m-3'>
                Holy Stone HS470 Foldable GPS RC Drone
              </h1>
              <div className='flex justify-between mx-2  mt-1 mb-3 items-center'>
                <p className=' text-[#00C6D7] font-semibold'>$300.98</p>
                <div className='flex items-center justify-end m-2 gap-1'>
                  <span className=''>
                    <svg
                      width='11'
                      height='15'
                      viewBox='0 0 11 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4.93476 14.6974C0.772578 8.5263 0 7.89296 0 5.625C0 2.51839 2.46242 0 5.5 0C8.53758 0 11 2.51839 11 5.625C11 7.89296 10.2274 8.5263 6.06524 14.6974C5.7921 15.1009 5.20787 15.1009 4.93476 14.6974ZM5.5 7.96875C6.76566 7.96875 7.79167 6.91942 7.79167 5.625C7.79167 4.33058 6.76566 3.28125 5.5 3.28125C4.23434 3.28125 3.20833 4.33058 3.20833 5.625C3.20833 6.91942 4.23434 7.96875 5.5 7.96875Z'
                        fill='#8D8D8D'
                      />
                    </svg>
                  </span>
                  <p className=' text-xs'> Cape Hadstone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
