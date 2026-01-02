import React from 'react';
import { Scale, Menu } from 'lucide-react';

export default function Landing2(){
  return(

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-10 font-sans">
      {/* Main Container */}
      <div className="max-w-6xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden relative">

        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-2">
            <Scale className="text-emerald-700" size={28} />
            <span className="font-bold text-gray-800 tracking-tight text-lg">THOMAS NORTHMAN</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-emerald-700 transition">About</a>
            <a href="#" className="hover:text-emerald-700 transition">Disputes</a>
            <a href="#" className="hover:text-emerald-700 transition">International</a>
            <a href="#" className="hover:text-emerald-700 transition">Rates & Fees</a>
            <a href="#" className="hover:text-emerald-700 transition">Contact</a>
          </div>

          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
            Consultation
          </button>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row px-8 md:px-16 py-12 items-center">

          {/* Left Content */}
          <div className="w-full md:w-1/2 z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Tax Lawyer</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Guiding You <br />
              Through <span className="text-emerald-500">Tax</span> <br />
              Complexity
            </h1>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              We simplify tax complexities with tailored strategies, resolving disputes and ensuring compliance for local and international needs.
            </p>

            <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 mb-12">
              Start Consultation
            </button>

            {/* Tags/Chips */}
            <div className="flex flex-wrap gap-3 max-w-md">
              {["International Taxation", "Tax Disputes", "Tax Planning", "Tax Compliance", "Consultations"].map((tag) => (
                <span key={tag} className="px-4 py-2 border border-gray-300 rounded-full text-xs text-gray-500 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
            {/* Dark Green Background Shape */}
            <div className="bg-emerald-900 w-[300px] h-[400px] md:w-[450px] md:h-[550px] rounded-t-full rounded-bl-[150px] rounded-br-[50px] absolute bottom-0 right-0 transform translate-x-10 translate-y-10"></div>

            {/* Main Statue Image (Placeholder logic) */}
            <div className="relative z-10">
               {/* Replace src with your hosted image of Lady Justice */}
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
                alt="Lady Justice"
                className="w-[350px] md:w-[500px] drop-shadow-2xl mix-blend-multiply"
              />

              {/* Decorative Leaves (Can use absolute positioned PNGs or SVGs here) */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-400 rounded-full blur-[80px] opacity-30"></div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}