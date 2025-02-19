const ThemeSwitch = ({ setTheme, theme }: { setTheme: (theme: string) => void; theme: string }) => {
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        };
    
        return (
        <button
            className={`btn ${
            theme === 'light' ? 'btn-outline' : 'btn-primary'
            }`}
            onClick={toggleTheme}
        >
            Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
        );
    };
    
    export default ThemeSwitch;