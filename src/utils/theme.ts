export const themes = ['default', 'purple', 'yellow', 'blue', 'red', 'cyan', 'green', 'orange'];

export function setTheme(theme: string) {
    if (!themes.includes(theme)) return;
    document.documentElement.classList.remove(...themes.map(t => `theme-${t}`));
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
}

export function getTheme() {
    return localStorage.getItem('theme') || 'default';
}

export function setMode(mode: 'light' | 'dark') {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('mode', mode);
}

export function getMode(): 'light' | 'dark' {
    return (localStorage.getItem('mode') as 'light' | 'dark') || 
            (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');
}

// Apply Theme and Mode on Load
document.addEventListener('DOMContentLoaded', () => {
    setTheme(getTheme());
    setMode(getMode());
});
