import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "@/pages/for-users-pages/products-page";
import SignInPage from "@/pages/sign-in-page";
import SignUpPage from "@/pages/sign-up-page";
import CartPage from "@/pages/for-users-pages/cart-page";
import OrderedPage from "@/pages/ordered-page";
import ProfilePage from "@/pages/for-users-pages/profile-page";
import ForgotPasswordPage from "@/pages/for-users-pages/forgot-password-page";
import NotificationsPage from "@/pages/notifications-page";
import SearchPage from "@/pages/for-users-pages/search-page";
import ProductPage from "@/pages/for-users-pages/product-page";
import PersonalDatePage from "@/pages/for-users-pages/personal-date";
import SettingsPage from "@/pages/settings-page";
import HelpCenterPage from "@/pages/for-users-pages/help-center-page";
import ExtraCardPage from "@/pages/for-users-pages/extra-card-page";
import AddNewCardPage from "@/pages/for-users-pages/add-new-card-page";
import ResetPasswordPage from "@/pages/for-users-pages/reset-password-page";
import PaymentPage from "@/pages/for-users-pages/payment-page";
import OrderPage from "@/pages/for-users-pages/order-page";
import MyOrdersPage from "@/pages/for-staff-pages/my-orders-page";
import StaffProfilePage from "@/pages/for-staff-pages/profile-page";
import MyOrderPage from "@/pages/for-staff-pages/my-order-page";
import MyOrdersSortedPage from "@/pages/for-staff-pages/my-orders-sorted-page";
import OrderPickUpPage from "@/pages/for-users-pages/order--pick-up-page ";
import ChoosePlacePage from "@/pages/for-users-pages/choose-place-page";
import DashboardPage from "@/pages/for-admins-page/dashboard-page";
import IncomesPage from "@/pages/for-admins-page/incomes-page";
import OrdersPage from "@/pages/for-admins-page/orders-page";
import FoodsListPage from "@/pages/for-admins-page/foods-list-page";
import CustomersListPage from "@/pages/for-admins-page/customers-list-page";
import UserPage from "@/pages/for-admins-page/user-page";
import FoodPage from "@/pages/for-admins-page/food-page";
import EmployersListPage from "@/pages/for-admins-page/employes-list-page";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order/pick-up" element={<OrderPickUpPage />} />
        <Route path="/choose-place" element={<ChoosePlacePage />} />
        <Route path="/ordered" element={<OrderedPage />} />
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

        <Route path="/staff/my-orders" element={<MyOrdersPage />} />
        <Route path="/staff/my-order/:id" element={<MyOrderPage />} />
        <Route path="/staff/my-orders/:type" element={<MyOrdersSortedPage />} />
        <Route path="/staff/profile" element={<StaffProfilePage />} />

        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/income" element={<IncomesPage />} />
        <Route path="/admin/orders" element={<OrdersPage />} />
        <Route path="/admin/foods" element={<FoodsListPage />} />
        <Route path="/admin/customers" element={<CustomersListPage />} />
        <Route path="/admin/employes" element={<EmployersListPage />} />
        <Route path="user/:id" element={<UserPage />} />
        <Route path="foods/:id" element={<FoodPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
