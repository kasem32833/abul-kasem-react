import heroImage from '../../public/images/kasem-removebg-preview.png'

const Hero = () => {
  return (
    <>

      <div className="flex justify-center mt-6">
        <div className="text-center border rounded-full px-6 py-2 font-bold inline-block">
          Hello
        </div>
      </div>
      <div className="text-center mt-6">
        <h1 className="text-7xl font-bold">Im <span className="text-orange-500">Kasem,</span><br />Web Designer</h1>
      </div>
      <div className="flex justify-between mt-6">
        <div>
            <p>This is kaserm a web application developer <br />ensure your website success.</p>
        </div>
        <div>
            <h2 className="text-2xl font-bold">10 Years</h2>
            <p className="mb-4">Experiance</p>
            
            <a className="bg-orange-500 rounded-full px-4 py-2 text-white font-bold" href="/files/joynal abedin.pdf" target="_blank" rel="noopener noreferrer">
            Download Portfolio
            </a>

        </div>

      </div>
      <div className='flex justify-center -mt-16 mb-16'>
            <div className='relative w-[550px] h-[300px] bg-orange-500 rounded-t-full'>
                <div className='absolute left-0 bottom-0 -top-18  '>
                    <img className='w-full h-full' src={heroImage} alt="" />
                </div>
            </div>
      </div>

    </>
  );
};

export default Hero;
