import React from 'react';
import { motion } from 'framer-motion';
import Popular1 from '../../assets/image (1).png'
import Popular2 from '../../assets/image (2).png'
import Popular3 from '../../assets/image (3).png'
const PopularFoods = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            y: 60,
            opacity: 0,
            scale: 0.8
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    const highlightedItemVariants = {
        hidden: { 
            y: 80,
            opacity: 0,
            scale: 0.7,
            rotateY: -15
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 1,
                delay: 0.3
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 1.2, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                delay: 0.4,
                duration: 0.5
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    // Mock food data since we can't import actual images
    const foodItems = [
        {
            id: 1,
            name: "Grilled Steak",
            description: "A delightful combination of flavors and textures, crafted to satisfy every craving.",
            image:Popular1,
            isHighlighted: false
        },
        {
            id: 2,
            name: "Seafood Special",
            description: "A delightful combination of flavors and textures, crafted to satisfy every craving.",
            image: Popular2,
            isHighlighted: true
        },
        {
            id: 3,
            name: "Filet Mignon",
            description: "A delightful combination of flavors and textures, crafted to satisfy every craving.",
            image: Popular3,
            isHighlighted: false
        }
    ];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Animated Title */}
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-center mb-12"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        type: "spring",
                        bounce: 0.4,
                        duration: 0.8
                    }}
                >
                    Popular Foods
                </motion.h2>

                {/* Animated Food Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {foodItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`food-item ${item.isHighlighted ? 'relative' : ''}`}
                            variants={item.isHighlighted ? highlightedItemVariants : itemVariants}
                            whileHover={{ 
                                y: -10,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            {item.isHighlighted && (
                                <motion.div 
                                    className="absolute inset-0 border-4 border-red-600 -z-10"
                                    initial={{ scale: 0, rotate: 45 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                />
                            )}
                            
                            <div className={item.isHighlighted ? "p-4 bg-red-600" : ""}>
                                <motion.div
                                    className="overflow-hidden mb-4"
                                    variants={imageVariants}
                                >
                                    <motion.img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-64 object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                                
                                <motion.h3 
                                    className={`text-2xl font-medium mb-2 ${item.isHighlighted ? 'text-white' : 'text-black'}`}
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    {item.name}
                                </motion.h3>
                                
                                <motion.p 
                                    className={`mb-4 ${item.isHighlighted ? 'text-white' : 'text-gray-700'}`}
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    {item.description}
                                </motion.p>
                                
                                <motion.button 
                                    className={`border-2 font-medium py-2 px-8 transition duration-300 ${
                                        item.isHighlighted 
                                            ? 'border-white hover:bg-white hover:text-red-600 text-white' 
                                            : 'border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800'
                                    }`}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    Order Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PopularFoods;