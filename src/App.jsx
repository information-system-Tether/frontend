import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import FoodDiaryPage from './pages/FoodDiaryPage';
import AddProductPage from './pages/AddProductPage';
import WorkoutsPage from './pages/WorkoutsPage';
import AddActivityPage from './pages/AddActivityPage';
import WaterBalancePage from './pages/WaterBalancePage';
import WeightDynamicsPage from './pages/WeightDynamicsPage';
import ProfilePage from './pages/ProfilePage';
import OnboardingPage from './pages/OnboardingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Main app */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/food-diary" element={<FoodDiaryPage />} />
        <Route path="/food-diary/add" element={<AddProductPage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/workouts/add" element={<AddActivityPage />} />
        <Route path="/water" element={<WaterBalancePage />} />
        <Route path="/weight" element={<WeightDynamicsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* 404 */}
        <Route path="*" element={<div className="p-8 text-center">404 — Страница не найдена</div>} />
      </Routes>
    </BrowserRouter>
  );
}