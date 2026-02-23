// skillswap-pakistan-frontend/src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Import modular CSS files
import './styles/global.css';
import './styles/navbar.css';
import './styles/homepage.css';
import './styles/forms.css';
import './styles/footer.css';
import './styles/popup.css';
import './styles/dashboard.css';
import './styles/profile.css';
import './styles/offer-skill.css';
import './styles/my-skills.css';
import './styles/marketplace.css';
import './styles/WomenOnlyZonePage.css';
import './styles/LoadingSpinner.css';
import './styles/chatbot-modal.css'; 
import './styles/requests.css';
import './styles/reviews.css';
import './styles/admin.css';

// 2. Import all your components
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import ProfilePage from './components/ProfilePage';
import OfferSkillPage from './components/OfferSkillPage';
import MySkillPage from './components/MySkillPage';
import MarketplacePage from './components/MarketplacePage';
import WomenOnlyZonePage from './components/WomenOnlyZonePage';
import ReceivedRequestsPage from './components/ReceivedRequestsPage';
import MessagesPage from './components/MessagesPage';
import ReviewsPage from './components/ReviewsPage';

// Content Pages
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import FAQPage from './components/FAQPage';
import DisputeResolutionPage from './components/DisputeResolutionPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';

// Admin Components
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import ManageUsers from './components/admin/ManageUsers';
import ManageSkills from './components/admin/ManageSkills';
import ManageReports from './components/admin/ManageReports';
import AdminRoute from './components/AdminRoute';

// Chatbot & i18n
import ChatbotModal from './components/ChatbotModal';
import './i18n';

function App() {
  // Global States
  const [showChatbot, setShowChatbot] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle handlers
  const toggleChatbot = () => setShowChatbot(prev => !prev);
  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

  // Effect to set initial theme based on localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  }, []);

  // Effect to apply/remove dark mode class and save preference
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route exact path="/" element={<HomePage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/signup" element={<SignupPage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/login" element={<LoginPage onChatbotToggle={toggleChatbot} />} />
          
          {/* Content Pages */}
          <Route exact path="/about-us" element={<AboutUsPage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/about" element={<AboutUsPage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/contact-us" element={<ContactUsPage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/contact" element={<ContactUsPage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/faq-page" element={<FAQPage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/dispute-resolution-page" element={<DisputeResolutionPage onChatbotToggle={toggleChatbot} />} />
          
          {/* Legal Pages */}
          <Route exact path="/privacy-policy" element={<PrivacyPolicyPage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/terms-of-service" element={<TermsOfServicePage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/forgot-password" element={<LoginPage onChatbotToggle={toggleChatbot} />} />

          {/* Protected Dashboard Routes */}
          <Route exact path="/dashboard" element={<DashboardPage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/dashboard/profile" element={<ProfilePage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/dashboard/my-skills" element={<MySkillPage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/offer-skill" element={<OfferSkillPage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/marketplace" element={<MarketplacePage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/women-zone" element={<WomenOnlyZonePage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/dashboard/received-requests" element={<ReceivedRequestsPage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/dashboard/messages" element={<MessagesPage onChatbotToggle={toggleChatbot} />} />
          <Route exact path="/dashboard/reviews" element={<ReviewsPage onChatbotToggle={toggleChatbot} />} />

          {/* Admin routes */}
          <Route exact path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route exact path="users" element={<ManageUsers />} />
            <Route exact path="skills" element={<ManageSkills />} />
            <Route exact path="reports" element={<ManageReports />} />
          </Route>
        </Routes>

        {/* Global Chatbot overlay */}
        {showChatbot && <ChatbotModal onClose={toggleChatbot} />}
      </BrowserRouter>
    </div>
  );
}

export default App;