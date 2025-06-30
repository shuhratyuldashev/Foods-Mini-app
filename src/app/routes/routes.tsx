import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "../../pages/products-page";
import SignInPage from "../../pages/sign-in-page";
import SignUpPage from "../../pages/sign-up-page";
import HeroPage from "../../pages/hero-page";
import CartPage from "../../pages/cart-page";
import MessagesPage from "../../pages/messages-page";
import ProfilePage from "../../pages/profile-page";
import ForgotPasswordPage from "../../pages/forgot-password-page";
import NotificationsPage from "../../pages/notifications-page";
import SearchPage from "../../pages/search-page";
import ChatPage from "../../pages/chat-page";
import ProductPage from "../../pages/product-page";
import EmailVerificationPage from "../../pages/email-verification-page";
import PersonalDatePage from "../../pages/personal-date";
import SettingsPage from "../../pages/settings-page";
import HelpCenterPage from "../../pages/help-center-page";
import ExtraCardPage from "../../pages/extra-card-page";
import AddNewCardPage from "../../pages/add-new-card-page";
import ResetPasswordPage from "../../pages/reset-password-page";
import PaymentPage from "../../pages/payment-page";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/messages/:id" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile/personal-date" element={<PersonalDatePage />} />
        <Route path="/profile/settings" element={<SettingsPage />} />
        <Route path="/profile/help-center" element={<HelpCenterPage />} />
        <Route path="/profile/extra-card" element={<ExtraCardPage />} />
        <Route path="/profile/extra-card/new" element={<AddNewCardPage />} />
        <Route
          path="/sign-in/forgot-password"
          element={<ForgotPasswordPage />}
        />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
