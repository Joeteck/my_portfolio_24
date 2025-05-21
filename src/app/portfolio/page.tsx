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
                    className="absolute inset-0 bg-cover bg-center opacity-[0.02] dark:opacity-[0.05]"
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
<<<<<<< Updated upstream
            <Creative type="creative"/>
            <FeaturedProjects/>
            <Creative type="performance"/>
            <Footer type="portfolio"  />
=======
            
            <section className="relative min-h-screen w-full flex flex-col items-center py-20 md:py-30 px-4 bg-neutral-100 dark:bg-neutral-950">
                    
                {/* Noise Background */}
                <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="w-full h-full bg-noise-dark opacity-30 dark:opacity-40 mix-blend-multiply z-20"></div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-100/60 to-neutral-50 dark:via-neutral-800/60 dark:to-neutral-950 pointer-events-none z-20"></div>

                {/* Components */}
                <div id='example' className='relative z-30 w-full flex flex-col items-center justify-center'>
                    <ExampleComponent/>
                </div>
                <div id='projects' className='w-full flex flex-col items-center justify-center'>
                    <ProjectsSection/>
                </div>
            </section>

            <div id='footer'>
                <Footer/>
                {/* <Footer type="portfolio"/> */}
            </div>
>>>>>>> Stashed changes
        </div>
    );
};

export default PortfolioPage;
