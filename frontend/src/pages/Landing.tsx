import { Navbar } from '../components/Navbar';

export function Landing() {
  return (
    <div>
      <Navbar text="MindStash"></Navbar>
      <div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-75">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-bold text-white text-shadow text-">
            Welcome TO MINDSTASH
          </div>
          <div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-light text-white">
              Your personal knowledge management system
            </div>
          </div>
        </div>
        <img
          src="../../public/landing2.png"
          className="w-full h-screen object-cover"
          loading="lazy"
          decoding="async"
          fetchPriority="high"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          alt=""
        />
      </div>
    </div>
  );
}
