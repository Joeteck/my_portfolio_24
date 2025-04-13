import { Navbar } from "@/components/globals/layout/Navbar";
import { Header } from "@/components/features/portfolio/Header";
import { Creative } from "@/components/features/portfolio/Creative";
import FeaturedProjects from "@/components/features/portfolio/Featured_Projects";
import { Footer } from "@/components/globals/layout/Footer";
// import { FeaturedProjects } from "@/components/features/portfolio/FeaturedProjects";

const PortfolioPage = () => {
    return (
        <div className="flex flex-col bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden">
            <Navbar type="portfolio" />

            <div className="relative min-h-screen flex items-center px-6 md:px-16 bg-transparent">
                
                {/* Header Content */}
                <div className="z-10 w-full bg-transparent">
                    <Header />
                </div>
                
                {/* Background with Low Opacity (for parent div) */}
                <div className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
                        style={{
                            backgroundImage: `url('/images/pattern/topography.svg')`
                        }}
                >
                </div>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.02] dark:opacity-[0.1]"
                    style={{
                        backgroundImage: `url('/images/pattern/topography-light.svg')`,
                    }}
                >
                </div>

                {/* Painted Triangle Backgrounds with Noise */}
                <div className="absolute inset-0 z-10 bg-transparent ">
                    {/* Top Triangle with Fade-in Animation */}
                    <div
                        className="absolute top-0 right-0 w-1/2 h-1/3 bg-[#EBAA4C] opacity-90 clip-triangle-top animate-fadeIn"
                        style={{
                            backgroundImage: "url('/images/pattern/topography.svg')",
                            zIndex: 5,
                        }}
                    />
                    {/* Bottom Triangle with Fade-in Animation */}
                    <div
                        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#716EA4] opacity-90 clip-triangle-bottom animate-fadeIn"
                        style={{
                            backgroundImage: "url('/images/pattern/topography.svg')",
                            zIndex: 5,
                        }}
                    />
                </div>
            </div>
            <Creative type="creative"/>
            <FeaturedProjects/>
            <Creative type="performance"/>
            <Footer type="portfolio"  />
        </div>
    );
};

export default PortfolioPage;
