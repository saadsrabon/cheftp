import React, { useEffect, useRef, useState } from 'react';
import ChefCooking from '../../assets/image000001.png';

const WhoIsChef = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const AnimatedText = ({ children, delay = 0, className = "" }) => (
        <div
            className={`transform transition-all duration-1000 ease-out ${
                isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );

    const AnimatedImage = () => (
        <div
            className={`transform transition-all duration-1200 ease-out ${
                isVisible 
                    ? 'translate-x-0 opacity-100 scale-100' 
                    : 'translate-x-12 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '600ms' }}
        >
            <div className="bg-white p-2 shadow-lg hover:shadow-xl transition-shadow duration-500 group">
                <div className="overflow-hidden">
                    <img
                        src={ChefCooking}
                        alt="Chef Travis Pena cooking"
                        className="w-full md:h-[450px] object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </div>
    );

    return (
        <section id="about" ref={sectionRef} className="bg-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                <AnimatedText delay={0}>
                    <h1 className="text-4xl md:text-5xl font-marcellus text-brown-900 mb-10 relative">
                        Who is Chef Pena?
                        <div 
                            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-600 to-orange-500 transition-all duration-1000 ease-out ${
                                isVisible ? 'w-32' : 'w-0'
                            }`}
                            style={{ transitionDelay: '300ms' }}
                        />
                    </h1>
                </AnimatedText>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-2 text-start space-y-6">
                        <AnimatedText delay={200}>
                            <h2 className="text-2xl md:text-3xl text-brown-800 mb-4 font-marcellus">
                                Traveling Chef, Travis Pena
                            </h2>
                        </AnimatedText>

                        <AnimatedText delay={400}>
                            <p className="text-gray-700 leading-relaxed">
                                Chef Travis Pena, also known as the Traveling Chef, is gaining recognition for his culinary
                                expertise and personalized dining experiences in Las Vegas.
                            </p>
                        </AnimatedText>

                        <AnimatedText delay={600}>
                            <p className="text-gray-700 leading-relaxed">
                                Chef Travis has over 11 years of experience in the culinary industry, having worked as
                                both a corporate chef and a personal chef. He studied at The Culinary Academy of Las
                                Vegas and previously served as the Executive Chef at Hewlett Packard Global
                                Headquarters in Palo Alto, California.
                            </p>
                        </AnimatedText>

                        <AnimatedText delay={800}>
                            <p className="text-gray-700 leading-relaxed">
                                He views cooking as a passion and a form of artistic expression. Chef Travis emphasizes
                                the importance of elevating simple ingredients to create elegant dishes, showcasing his
                                creativity and skill in the kitchen.
                            </p>
                        </AnimatedText>

                        <AnimatedText delay={1000}>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Chef Travis Pena's combination of professional experience, culinary passion, and
                                personalized service makes him a notable figure in the Las Vegas dining landscape.
                            </p>
                        </AnimatedText>

                        <AnimatedText delay={1200}>
                            <button className="bg-[#351814] hover:bg-[#794841] hover:cursor-pointer text-white font-medium py-3 px-6 rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group">
                                <span className="relative z-10">Request a Service</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </AnimatedText>
                    </div>

                    <div className="md:order-1">
                        <AnimatedImage />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoIsChef;