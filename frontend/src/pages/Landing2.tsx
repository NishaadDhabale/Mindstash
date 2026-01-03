import React from 'react';
import { Brain } from 'lucide-react';
import { useScroll,motion, useTransform } from 'motion/react';


export default function Landing2() {
  const horizontalRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress: horizontalScroll } = useScroll({
    target: horizontalRef,
   
  });
  const xTransfrom = useTransform(horizontalScroll, [0, 1], ['0vw', '-200vw']);

  return ( 
    <div className="h-auto max-w-screen bg-gray-100 font-sans">



      <div className=" min-h-screen overflow-hidden flex items-center justify-center p-4 md:p-10 font-sans">
        {/* Main Container */}
        <div className="max-w-8xl w-full bg-white  rounded-[40px] shadow-2xl overflow-hidden relative">
          {/* Navigation */}



          <nav className="flex items-center  justify-between px-8 py-6">
            <div className="flex items-center gap-2">
              <Brain className="text-emerald-700" size={28} />
              <span className="font-bold text-gray-800 tracking-tight text-lg">
                NISHAAD DHABALE
              </span>
            </div>

            <div className="hidden md:flex items-center p-2 px-5 rounded-2xl gap-8 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-emerald-700  transition">
                About
              </a>
              <a href="#" className="hover:text-emerald-700 transition">
                Disputes
              </a>
              <a href="#" className="hover:text-emerald-700 transition">
                International
              </a>
              <a href="#" className="hover:text-emerald-700 transition">
                Rates & Fees
              </a>
              <a href="#" className="hover:text-emerald-700 transition">
                Contact
              </a>
            </div>

            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
              Log In
            </button>
          </nav>


          {/* Hero Section */}
          <div className="flex md:justify-between flex-col md:flex-row px-8 md:px-16 py-12 items-center">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Mind Stash
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Clear Your <br />
                Mind <span className="text-emerald-500">Stash</span> <br />
                Your Thoughts
              </h1>
              <p className="text-gray-500 max-w-md mb-10 leading-relaxed">
                We transform scattered content into organized insights,
                resolving information overload and ensuring a home for your
                thoughts and lectures.
              </p>

              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 mb-12">
                Start Organizing
              </button>

              {/* Tags/Chips */}
              <div className="flex flex-wrap gap-3 max-w-md">
                {[
                  'International Taxation',
                  'Tax Disputes',
                  'Tax Planning',
                  'Tax Compliance',
                  'Consultations',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2 border border-gray-300 rounded-full text-xs text-gray-500 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Image Composition */}
            <div className="w-full md:w-1/2 ml-48 mt-12 md:mt-0 flex items-center justify-end">
              <div>
                {/* Dark Green Background Shape */}
                <div className="relative bg-[#03403f] w-[300px] h-[400px] md:w-[450px] md:h-[515px] rounded-t-full rounded-bl-[150px] rounded-br-[50px] flex justify-end overflow-hidden ">
                  {' '}
                  <div className="  absolute  border-[#17564e] border-double border-t-[40px] min-h-[400px] min-w-[420px]  mt-20 mr-32 ">
                    {/* Light Green Overlay Shape */}
                  </div>
                  <span className=" absolute  border-[#17564e] border-double border-[40px] min-h-80 border-b-0 min-w-[420px] rounded-2xl mt-[150px] mr-20 " />
                  <span className="absolute h-60 bg-[#17564e] 0 w-6 mr-[410px] mt-56 " />
                  <span className=" absolute h-60 bg-[#17564e] w-6 mr-[360px] mt-56 " />
                  <span className="absolute h-60 bg-[#17564e] w-6 mr-72 mt-56 " />
                </div>
                {/* Main Statue Image (Placeholder logic) */}
                <div className="absolute bottom-5 right-0  z-10">
                  {/* Replace src with your hosted image of Lady Justice */}
                  <img
                    src="./StudyIllustration.png"
                    alt="study"
                    className="w-[400px] md:w-[550px] scale-125 drop-shadow-2xl mix-blend-multiply"
                  />
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>

      <div ref={horizontalRef} className="flex flex-col  items-center max-w-screen h-[300vh] text-gray-400  bg-white  rounded">

          <div className="  flex max-w-screen overflow-hidden h-48 text-black bg-opacity-45 bg-gray-100 italic rounded-full p-6 mt-20 items-center text-2xl">
            <p>"Fragments of thought are but wandering stars</p>
            <p>-only when gathered do they reveal the map of your mind."</p>
          </div>
<div  mt-36 className="sticky top-36 overflow-hidden">
          <div className="mt-20 overflow-hidden ">Features</div>

          <div  className="overflow-hidden w-screen">
            <div
            
              className="bg-red-100 w-full h-[460px] rounded-3xl mt-2 overflow-hidden  "
            >
              <motion.div style={{x:xTransfrom}} className="flex overflow-hidden">
                <div className="flex bg-green-100 h-[460px] w-screen">hi</div>
                <div className="bg-blue-100 h-[460px] w-screen">hi</div>
                <div className="bg-purple-100 h-[460px] w-screen">hi </div>
              </motion.div>
            </div>
          </div>
          </div>
       
      </div>







    </div>
  );
}
