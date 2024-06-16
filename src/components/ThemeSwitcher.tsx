import { useState } from "react"

export function ThemeSwitcher() {
    const [theme, setTheme] = useState<String>(localStorage.getItem('theme') || 'light');

    const switchTheme = () => {
        const html = document.querySelector('html');
        if (theme === 'light') {
            html?.classList.remove('light');
            html?.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            html?.classList.remove('dark');
            html?.classList.add('light');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    }

    return (
        <>
        <button onClick={switchTheme} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
            Switch Theme
        </button>
        </>
    )
}