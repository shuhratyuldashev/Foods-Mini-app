import {
  ProductsPage,
  NotificationsPage,
  SearchPage,
  ProductPage,
  CartPage,
  PaymentPage,
  OrderPage,
  ChoosePlacePage,
  OrderedPage,
  ProfilePage,
  ResetPasswordPage,
  PersonalDatePage,
  SettingsPage,
  HelpCenterPage,
  ExtraCardPage,
  AddNewCardPage,
  SignInPage,
  SignUpPage,
  ForgotPasswordPage,
  MyOrdersPage,
  MyOrderPage,
  MyOrdersSortedPage,
  StaffProfilePage,
  DashboardPage,
  IncomesPage,
  OrdersPage,
  FoodsListPage,
  CustomersListPage,
  UserPage,
  EmployersListPage,
  EmployerPage,
  FoodPage,
} from "@/pages";

export const routes = {
  // public - userlar uchun
  public: [
    { path: "/", element: <ProductsPage /> },
    // Bosh sahifasi
    { path: "/notifications", element: <NotificationsPage /> },
    // Notifican sahifasi
    { path: "/search", element: <SearchPage /> },
    // Qidiruv sahifasi
    { path: "/products/:id", element: <ProductPage /> },
    // Ovqat sahifasi
    { path: "/cart", element: <CartPage /> },
    // Cart sahifasi
    { path: "/payment", element: <PaymentPage /> },
    // Payment sahifasi
    { path: "/order/:id", element: <OrderPage /> },
    // Buyurtma sahifasi
    { path: "/choose-place", element: <ChoosePlacePage /> },
    // Joy tanlash 
    { path: "/ordered", element: <OrderedPage /> },
    // Buyurtmalar  sahifasi
    { path: "/profile", element: <ProfilePage /> },
    // Profil sahifasi
    { path: "/reset-password", element: <ResetPasswordPage /> },
    // Password Almashtirish sahifasi
    { path: "/profile/personal-date", element: <PersonalDatePage /> },
    // User Data sahifasi
    { path: "/profile/settings", element: <SettingsPage /> },
    // Settings sahifasi
    { path: "/profile/help-center", element: <HelpCenterPage /> },
    // Yordam center sahifasi
    { path: "/profile/extra-card", element: <ExtraCardPage /> },
    // Kartalar sahifasi
    { path: "/profile/extra-card/new", element: <AddNewCardPage /> },
    // Karta qo'shish sahifasi
  ],
  auth: [
    { path: "/sign-in", element: <SignInPage /> },
    // Kirish
    { path: "/sign-up", element: <SignUpPage /> },
    // Registratsiya
    { path: "/sign-in/forgot-password", element: <ForgotPasswordPage /> },
    // Forgot password sahifasi
  ],
  // Kuryer sahifasi
  staff: [
    { path: "/staff/my-orders", element: <MyOrdersPage /> },
    // Kuryer buyurtmalari sahifasi
    { path: "/staff/my-order/:id", element: <MyOrderPage /> },
    // Kuryer buyurtmasi sahifasi
    { path: "/staff/my-orders/:type", element: <MyOrdersSortedPage /> },
    // Kuryer sahifasi sorted sahifasi
    { path: "/staff/profile", element: <StaffProfilePage /> },
    // Kuryer profile sahifasi
  ],
  admin: [
    { path: "/admin/dashboard", element: <DashboardPage /> },
    // Admin bosh sahifa
    { path: "/admin/income", element: <IncomesPage /> },
    // Admin foydalar sahifasi
    { path: "/admin/orders", element: <OrdersPage /> },
    // Admin buyurtmalar sahifasi
    { path: "/admin/foods", element: <FoodsListPage /> },
    // Admin foods sahifasi
    { path: "/admin/customers", element: <CustomersListPage /> },
    // Admin Users sahifasi
    { path: "/admin/employes", element: <EmployersListPage /> },
    // Admin ishchilar sahifasi
    { path: "/user/:id", element: <UserPage /> },
    // User sahifasi 
    { path: "/employer/:id", element: <EmployerPage /> },
    // Ishchi sahifasi
    { path: "/foods/:id", element: <FoodPage /> },
    // Food sahifasi
  ],
};
