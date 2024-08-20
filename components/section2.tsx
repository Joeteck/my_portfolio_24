import React, { useEffect, useRef } from 'react';
import SocialDropdown from './SocialDropdown';
import Laptop from './3DModels/Laptop';
import Col3 from './Col3';

const Section2 = () => {
    const laptopRef = useRef(null);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const laptop = laptopRef.current;
            const section = document.getElementById('section2');
            
            if (!laptop || !section) return;  // Check if elements exist

            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const currentScrollTop = window.pageYOffset;
            const viewportHeight = window.innerHeight;

            if (sectionTop <= 0 && sectionBottom > 0) {
                if (currentScrollTop > lastScrollTop) {
                    // Scrolling down - move laptop to the left edge and keep it fixed
                    laptop.style.transform = 'translateX(-50%)';  // Moves it to the left edge
                    laptop.style.position = 'fixed';
                    laptop.style.left = '0';
                    laptop.style.top = '50px'; // Adjust as needed
                } else if (sectionTop >= -0.5 * viewportHeight) {
                    // Scrolling up - revert to original position when within 50vh from the top of section2
                    laptop.style.transform = 'translateX(0)';
                    laptop.style.position = 'absolute';
                    laptop.style.left = 'initial';
                    laptop.style.top = 'initial';
                }
            } else if (sectionBottom <= 0) {
                // Ensure the laptop stays fixed if we scroll beyond section2
                laptop.style.transform = 'translateX(-50%)';
                laptop.style.position = 'fixed';
                laptop.style.left = '0';
                laptop.style.top = '50px'; // Adjust as needed
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="section2" className="flex gap-3 flex-col md:flex-row relative w-full h-[104vh] pt-2 bg-primary-green">
            {/* Col 1 */}
            <div className="md:relative w-full h-full text-white text-3xl">
                <SocialDropdown />
                <div
                    ref={laptopRef}
                    className="absolute w-[500px] h-[400px] m-0 p-0 transition-transform duration-1000 ease-in-out"
                    style={{ transform: 'translateX(0)' }} // Initial position
                >
                    <Laptop />
                </div>
            </div>

            {/* Col 2 */}
            <div className="w-full h-full text-white text-3xl max-sm:mt-96">
                <h1 className='md:text-lg text-sm md:w-full w-60 text-white'>Software Developer, Tech Expert & Freelancer</h1>
                <h2 className='md:text-sm text-xs text-grey-200'>Data Analyst, IT Consultant</h2>
            </div>

            {/* Col 3 */}
            <div className="w-full h-full text-white text-3xl">
                <Col3/>

                {/* Skills Section */}
                <div className="flex gap-3 flex-row relative w-full md:mt-28" style={{ fontSize: "14px", lineHeight:"23px"}}>
                    <h2 className="flex flex-col w-1/6 text-grey-100 text-right">Skills</h2>
                    <h3 className="text-white">
                        Unity, C#, AI, Blender, Lens Studio, JavaScript, p5.js, SparkAR, Lightship ARDK, Oculus SDK, Python, AR, VR, Growth, Design Systems
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Section2;