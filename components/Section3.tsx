import React, { useEffect, useRef } from 'react';
import SocialDropdown from './SocialDropdown';
import Laptop from './3DModels/Laptop';
import Col3 from './Col3';

const Section3 = () => {
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
                <h1 className='md:text-lg text-sm md:w-full w-60 text-white'>About</h1>
                <div>
                    <ImageCard/>
                </div>
            </div>

            {/* Col 2 */}
            <div className="w-full h-full text-white text-3xl max-sm:mt-96">
                <h1 className='md:text-lg text-sm md:w-full w-60 text-white'>Work</h1>
            </div>

            {/* Col 3 */}
            <div className="w-full h-full text-white text-3xl">
                <h1 className='md:text-lg text-sm md:w-full w-60 text-white'>Project</h1>

            </div>
        </div>
    );
};

export default Section3;