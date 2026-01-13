import { useTheme } from '../../hooks/useTheme';
import { themes, type ThemeKey } from '../../data/themes';
import { Sun, Moon } from 'lucide-react';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themeIcons: Record<ThemeKey, React.ReactNode> = {
    light: <Sun size={18} />,
    dark: <Moon size={18} />,
  };

  const themeOptions = Object.keys(themes) as ThemeKey[];

  return (
    <div className="flex gap-2 p-2 bg-secondary border border-border rounded-[var(--radius)]">
      {themeOptions.map((themeKey) => (
        <button
          key={themeKey}
          onClick={() => setTheme(themeKey)}
          className={`
            flex items-center gap-2 px-4 py-2 
            transition-all duration-300 ease-in-out
            font-medium text-sm rounded-[var(--radius)]
            ${theme === themeKey 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground'
            }
          `}
          title={`Switch to ${themes[themeKey].name} theme`}
          aria-label={`Switch to ${themes[themeKey].name} theme`}
        >
          <span className="flex items-center justify-center">
            {themeIcons[themeKey]}
          </span>
          <span className="hidden sm:inline">
            {themes[themeKey].name}
          </span>
        </button>
      ))}
    </div>
  );
};
