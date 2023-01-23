import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useDarkMode(): [boolean, (value: boolean | ((prevState: boolean) => boolean)) => void] {
    const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('isDarkMode', true);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark:bg-slate-900');
        } else {
            document.body.classList.remove('dark:bg-slate-900');
        }
    }, [isDarkMode]);

    return [isDarkMode, setIsDarkMode];
}
