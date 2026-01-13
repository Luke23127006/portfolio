import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeSwitcher } from './components/ui/ThemeSwitcher';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <ThemeProvider>
      <div className="portfolio-wrapper min-h-screen">
        <header className="py-8 flex justify-end">
          <ThemeSwitcher />
        </header>

        <main className="px-4 md:px-8 pb-4 md:pb-8">
          <PortfolioPage />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;