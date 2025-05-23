import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const images = [
  { id: "1", src: "/food1.jpg", alt: "Gourmet Dish", category: "food" },
  { id: "2", src: "/event1.jpg", alt: "Corporate Event", category: "events" },
  { id: "3", src: "/chef1.jpg", alt: "Chef Preparing Food", category: "chef" },
  { id: "4", src: "/food2.jpg", alt: "Plated Dessert", category: "food" },
  { id: "5", src: "/event2.jpg", alt: "Cocktail Party", category: "events" },
  { id: "6", src: "/chef2.jpg", alt: "Cooking Demonstration", category: "chef" },
  { id: "7", src: "/food3.jpg", alt: "Steak Dish", category: "food" },
  { id: "8", src: "/event3.jpg", alt: "Wedding Catering", category: "events" },
  { id: "9", src: "/event3.jpg", alt: "Wedding Catering", category: "events" },
  { id: "10", src: "/event3.jpg", alt: "Wedding Catering", category: "events" },
];

export default function PhotoGallery() {
  const [selectedId, setSelectedId] = useState(null);
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-20%" });

  // Masonry layout configuration
  const getImageHeight = (index) => {
    const heights = [300, 400, 350, 450, 380, 320, 420, 370];
    return heights[index % heights.length];
  };

  return (
    <section ref={galleryRef} className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Culinary Gallery
        </motion.h2>

        {/* Bento/Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              layoutId={image.id}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
              style={{ height: getImageHeight(index) }}
              onClick={() => setSelectedId(image.id)}
              initial={{ opacity: 0, filter: "grayscale(100%)" }}
              animate={{ 
                opacity: isInView ? 1 : 0,
                filter: isInView ? "grayscale(0%)" : "grayscale(100%)",
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                filter: { duration: 1.2 }
              }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div 
                className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"
                whileHover={{ backdropFilter: "blur(2px)" }}
              />
              <motion.div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-semibold drop-shadow-lg">{image.alt}</h3>
                <span className="text-sm bg-amber-500 px-2 py-1 rounded-full">
                  {image.category}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal View */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              {images.map((image) =>
                image.id === selectedId && (
                  <motion.div
                    layoutId={selectedId}
                    className="relative max-w-6xl w-full"
                    key={image.id}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full max-h-[90vh] object-contain rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                    <motion.button
                      className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-lg p-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setSelectedId(null)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-3xl font-bold text-white">{image.alt}</h3>
                      <p className="text-amber-400 mt-2">Category: {image.category}</p>
                    </motion.div>
                  </motion.div>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}