import React, { useState, useEffect } from "react";
import travis from "../../assets/Travis Pena 1.png";
import bg from "../../assets/Group 1000011749.png";

const Hero = () => {
  const [hovered, setHovered] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const items = [
    { label: 'American ↗', id: 'american' },
    { label: 'French', id: 'french' },
    { label: 'Italian', id: 'italian' },
  ];

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const getClassName = (id) => {
    const isHovered = hovered === id;
    
    return isHovered
      ? 'border border-black px-4 py-1 text-sm bg-black text-white transition text-left'
      : 'px-4 py-1 text-sm transition text-left';
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 1s ease-out forwards;
        }

        .animate-delay-200 {
          animation-delay: 0.2s;
        }

        .animate-delay-400 {
          animation-delay: 0.4s;
        }

        .animate-delay-600 {
          animation-delay: 0.6s;
        }

        .animate-delay-800 {
          animation-delay: 0.8s;
        }

        .animate-delay-1000 {
          animation-delay: 1s;
        }

        .initial-hidden {
          opacity: 0;
        }
      `}</style>

      <section className="bg-[#C51212] w-full text-white h-[calc(100vh-190px)] flex items-center justify-center relative px-6 pt-12">
        {/* Top Left Text */}
        <div className={`absolute top-10 left-10 text-black max-w-[180px] initial-hidden ${
          isLoaded ? 'animate-fade-in-left' : ''
        }`}>
          <p className="text-md leading-snug">
            Making people<br />
            happy by way of<br />
            food
          </p>
        </div>

        {/* Top Right Navigation */}
        <div className={`absolute top-10 right-10 text-black text-right initial-hidden ${
          isLoaded ? 'animate-fade-in-right animate-delay-200' : ''
        }`}>
          <div className="flex flex-col gap-2">
            {items.map((item, index) => (
              <button
                key={item.id}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className={`${getClassName(item.id)} initial-hidden ${
                  isLoaded ? 'animate-fade-in-down' : ''
                }`}
                style={{
                  animationDelay: isLoaded ? `${0.4 + index * 0.1}s` : '0s'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Images Section */}
        <div className="flex flex-col md:flex-row items-center gap-x-20 py-20 absolute -bottom-20 md:-bottom-23.5">
          {/* Background Image */}
          <div className={`text-black initial-hidden ${
            isLoaded ? 'animate-scale-in animate-delay-600' : ''
          }`}>
            <img className="w-36 md:w-full" src={bg} alt="" />
          </div>

          {/* Chef Image */}
          <div className={`relative initial-hidden ${
            isLoaded ? 'animate-fade-in-up animate-delay-800' : ''
          }`}>
            <img
              src={travis}
              alt="Chef Travis Pena"
              className="max-w-[200px] md:max-w-[400px] xl:max-w-[500px] object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;