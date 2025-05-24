import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import { AnimatePresence, motion } from 'framer-motion';
import travisName from '../../assets/hori.png'
const Header = () => {
  const [isBouncing, setIsBouncing] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 1000);
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      y: 20
    },
    open: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0
    },
    open: {
      rotate: 180
    }
  };

  const line1Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 }
  };

  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };

  const line3Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 }
  };

  //after 5 seconds the logo will stop bouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBouncing(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <header className="flex justify-between items-center p-4 w-full  px-28">
      <div className=" ">
        <img  src={travisName} alt="Chef Travis Pena Logo" className={isBouncing ? 'w-[80%] object-fit ' : 'w-[80%] md:w-[70%]  object-fit  '} />
      </div>



      {/* <div className="hidden border md:flex justify-around items-center gap-6 text-black text-xl font-sans font-semibold py-2 px-2 w-1/3">
  <a
    href="#home"
    className="relative transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-blackafter:transition-all after:duration-300"
  >
    Home
  </a>
  <a
    href="#about"
    className="relative transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-blackafter:transition-all after:duration-300"
  >
    About
  </a>
  <a
    href="#contact"
    className="relative transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-blackafter:transition-all after:duration-300"
  >
    Contact
  </a>
</div> */}

      <div className='hidden w-2/3 lg:w-1/3 md:flex  justify-end'>
        <a href="#request" className="bg-[#351814] text-white px-4 py-3 md:mt-4 lg:mt-22 cursor-pointer">Request Service</a>
      </div>
     <div className="md:hidden flex items-center justify-end w-1/3">
          <motion.button
            onClick={toggleMenu}
            className="relative z-50 w-8 h-8 flex flex-col justify-center items-center space-y-1.5"
            variants={hamburgerVariants}
            animate={isMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-white block"
              variants={line1Variants}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              variants={line2Variants}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              variants={line3Variants}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        
      
    </header>


      <div className="hidden border bg-black md:flex justify-start  items-center gap-6 text-white text-xl font-sans font-semibold py-2 px-2 w-full container pl-30 border-none">
  <a
    href="#home"
    className="relative transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
  >
    Home
  </a>
  <a
    href="#about"
   className="relative transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
  >
    About
  </a>
  <a
    href="#contact"
    className="relative transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
  >
    Contact
  </a>
</div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              onClick={toggleMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-[#C51212] to-[#a00f0f] shadow-2xl z-40 md:hidden"
            >
              {/* Menu Content */}
              <div className="flex flex-col h-full pt-20 px-8">
                {/* Navigation Links */}
                <nav className="flex flex-col space-y-8 flex-1">
                  <motion.a
                    href="#home"
                    variants={itemVariants}
                    className="text-white text-2xl font-semibold hover:text-[#351814] transition-colors duration-300 relative group"
                    onClick={toggleMenu}
                  >
                    <span className="relative z-10">Home</span>
                    <motion.div
                      className="absolute inset-0 bg-white rounded-lg -z-10"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </motion.a>

                  <motion.a
                    href="#about"
                    variants={itemVariants}
                    className="text-white text-2xl font-semibold hover:text-[#351814] transition-colors duration-300 relative group"
                    onClick={toggleMenu}
                  >
                    <span className="relative z-10">About</span>
                    <motion.div
                      className="absolute inset-0 bg-white rounded-lg -z-10"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </motion.a>

                  <motion.a
                    href="#contact"
                    variants={itemVariants}
                    className="text-white text-2xl font-semibold hover:text-[#351814] transition-colors duration-300 relative group"
                    onClick={toggleMenu}
                  >
                    <span className="relative z-10">Contact</span>
                    <motion.div
                      className="absolute inset-0 bg-white rounded-lg -z-10"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </motion.a>
                </nav>

                {/* CTA Button */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8"
                >
                  <motion.button
                    className="w-full bg-[#351814] text-white px-6 py-4 text-lg font-semibold rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={toggleMenu}
                  >
                    Request Service
                  </motion.button>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  variants={itemVariants}
                  className="absolute top-1/2 left-4 w-1 h-16 bg-white opacity-30 rounded-full"
                />
                <motion.div
                  variants={itemVariants}
                  className="absolute bottom-20 right-8 w-2 h-2 bg-white opacity-50 rounded-full"
                />
                <motion.div
                  variants={itemVariants}
                  className="absolute top-32 right-12 w-1.5 h-1.5 bg-white opacity-40 rounded-full"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
    </>
  );
};

export default Header;