import { Navbar } from "@/components/globals/layout/Navbar";
import { Header } from "@/components/features/portfolio/Header";

// Dynamic import for ThemeSwitch to prevent SSR issues

const PortfolioPage = () => {

    return (
        <div className=" flex flex-col justify-between px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar type="portfolio" />
            <div className="min-h-screen">
                <Header/>
            </div>
        </div>
    );
};

export default PortfolioPage;
