import ThemeBtn from '../Components/ThemeBtn';
import './App.css';
import { ThemeProvider } from './Contexts/theme';
import { useEffect, useState } from 'react';
import Card from '../Components/Card';

function App() {
  const [theme, setTheme] = useState('light');

  const darkTheme = () => {
    setTheme('dark');
  };

  const lightTheme = () => {
    setTheme('light');
  };

  useEffect(() => {
    // ✅ Correct selector + correct variable
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
