// src/App.jsx
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="portfolio-wrapper min-h-screen transition-colors duration-300">

        <main className="container mx-auto px-4 py-8">
        </main>
        
      </div>
    </ThemeProvider>
  );
}

export default App;