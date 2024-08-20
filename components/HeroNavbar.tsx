import SocialDropdown from './SocialDropdown';

const HeroNavbar = () => {

    return (
        <div className="flex flex-1 relative md:py-1 py-3 top-0 justify-between text-gray-700">
            {/* Dropdown Menu */}
        <SocialDropdown/>

            <div>
                <h1 className='md:text-lg text-sm md:w-full w-60  text-white'>Software Developer, Tech Expert & Freelancer</h1>
                <h2 className='md:text-sm text-xs  text-grey-200'>Data Analyst,   IT Consultant</h2>
            </div>
        </div>
    );
};

export default HeroNavbar;
