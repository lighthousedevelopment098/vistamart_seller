import React from 'react'

const Shop_Editbtn = () => {
    return (
        <div className="w-full h-full bg-[#F9F9FB]">
          <div className="flex items-center">
            <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/shop-info.png"
              className="h-7 w-7 mt-10 ml-10"
              alt="Shop Icon"
            />
            <p className="ml-3 mt-10 text-[#334257] text-xl font-semibold">
              Shop Info
            </p>
          </div>
          <div className="bg-white w-[75vw] h-[145vh] border-r border-t border-b border-l border-slate-200 rounded-lg mt-10 ml-12">
            <div className="flex items-center">
              <p className="text-slate-700 mt-3 ml-7 text-sm font-semibold">
                Edit Shop Info
              </p>
              <button className="rounded-full ml-auto mr-3 mt-3 w-20 bg-indigo-500 h-12 ">
                Back
              </button>
            </div>
            <div className="border-b-4 border-slate-200 w-[75vw] mt-3 "></div>
            <div className='flex gap-2 items-center'>
            <div className='mt-4'>
                    <p className='ml-5'>Shop Name*</p>
                    <input
                        type="text"
                        name="shop name"
                        value="Mart Morning"
                        className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 hover:border-sky-800"
        
                      />
                  </div>
    
                  <div className='mt-4'>
                    <p className='ml-5'>Upload Photo*</p>
                    <input
                        type="text"
                        name="upload photo"
                        value="Choose File"
                        className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 hover:border-sky-800"
                        
        
                      />
                  </div>
    
    
            </div>
            <div className='flex gap-2 items-center'>
            <div className=''>
                    <p className='ml-5'>Contact*</p>
                    <input
                        type="text"
                        name="phone number"
                        value="0000000"
                        className="ml-5 mt-3 pl-3 border w-[35vw] h-11 rounded border-gray-500 hover:border-sky-800"
        
                      />
    
                      
                  </div>
                  <div className='mt-4 border-b border-l ml-16 border-r border-t border-gray-500'>
                    <img src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f6e190f4c.png"className='w-[12vw] h-[25vh]'/>
                  </div>
                  </div>
                  <div className='mt-2'>
                  <p className='ml-5'>Address*</p>
                  
                  
                    <input
                        type="text"
                        name="Adress"
                        value="house no 49 street no 10 "
                        className="ml-5 mt-3  border w-[35vw]   h-28 rounded border-gray-500 hover:border-sky-800"
        
                      />
                      </div>
                      <div className='flex mt-5 '>
    
                      <p className='text-black ml-5'>Uplod Banner</p>
                      <p className='text-sky-300 ml-2'>
                      Ratio 4:1 (2000 x 500 px)</p>
    
    
                      </div>
                      <div className='border ml-3 w-[35vw] rounded-lg h-11 mt-2 border-gray-500 flex '>
                      <input
                        type="text"
                        name="uplod file"
                        value="Choose File"
                        className='mt-2 ml-2'
                        
        
                      />
                      <button className='border-l ml-auto mr-5 px-3 text-gray-300 border-gray-300 '>Browse</button>
    
    
                      </div>
                      <div className="border mt-5 border-gray-600 h-[30vh] w-[40vw] ml-5 rounded overflow-hidden">
            <img 
              src="https://6valley.6amtech.com/storage/app/public/shop/banner/2023-06-14-6488758b807b1.png" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className='flex items-end '>
        
        <button className='border border-[#ED4C78] w-20 h-10 rounded mr-2  mt-3 ml-[80%] hover:bg-rose-500 bg-[#ED4C78]'>Cancel</button>
        <button className='border border-blue-500 w-20 h-10 rounded hover:bg-[#0177CD] bg-indigo-500'>Update</button>
        
        </div>
                  </div>
            
          </div>
        
      );
    };
export default Shop_Editbtn
