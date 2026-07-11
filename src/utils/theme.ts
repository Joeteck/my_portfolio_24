export const themes = ['default', 'purple', 'yellow', 'blue', 'red', 'cyan', 'green', 'orange'];

export function setTheme(theme: string) {
    if (typeof window === 'undefined' || !themes.includes(theme)) return;
    document.documentElement.classList.remove(...themes.map(t => `theme-${t}`));
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
}

export function getTheme() {
    if (typeof window === 'undefined') return 'default';
    return localStorage.getItem('theme') || 'default';
}

export function setMode(mode: 'light' | 'dark') {
    if (typeof window === 'undefined') return;
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('mode', mode);
}

export function getMode(): 'light' | 'dark' {
    if (typeof window === 'undefined') return 'light';
    
    const storedMode = localStorage.getItem('mode') as 'light' | 'dark' | null;
    if (storedMode) return storedMode;
    
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
}

// Safely Apply Theme and Mode on Load only in the browser
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTheme(getTheme());
            setMode(getMode());
        });
    } else {
        setTheme(getTheme());
        setMode(getMode());
    }
}