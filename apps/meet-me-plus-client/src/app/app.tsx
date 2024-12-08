import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { themeChange } from 'theme-change';
import LoginPage from './pages/loginPage/loginPage';
import ChangeThemeSwitch from '../components/changeThemeSwitch/changeThemeSwitch';
import HomePage from './pages/homePage/homePage';
import MainPage from './pages/mainPage/mainPage';

export function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="flex flex-col h-full items-start">
      <ChangeThemeSwitch />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
