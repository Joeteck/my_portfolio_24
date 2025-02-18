const ThemeSwitch = ({ setTheme, theme }: { setTheme: (theme: string) => void; theme: string }) => {
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        };
    
        return (
        <button
            className={` dark:btn-outline ${theme === 'dark' ? 'btn-outline' : 'btn-primary'} btn`}
            onClick={toggleTheme}
        >
            Toggle theme
        </button>
        );
    };
    
    export default ThemeSwitch;