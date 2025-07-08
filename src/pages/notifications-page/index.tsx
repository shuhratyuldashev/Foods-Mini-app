import NotificationCard from "./ui/notification-card";
import HeaderNotificationPage from "./ui/header-notification-page";

const NotificationsPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col bg-gray-200">
      <section className="bg-white w-full p-4">
        <HeaderNotificationPage />
        <div>
          <p className="font-semibold text-gray-500 text-sm mt-5">Bugun</p>
        </div>
        <div className="flex flex-col mt-5 gap-4">
          {Array.from({ length: 3 }).map((__, i) => (
            <NotificationCard key={i} />
          ))}
        </div>
      </section>
      <section className="bg-white mt-2 w-full p-4">
        <div>
          <p className="font-semibold text-gray-500 text-sm mt-5">Kecha</p>
        </div>
        <div className="flex flex-col mt-5 gap-4">
          {Array.from({ length: 3 }).map((__, i) => (
            <NotificationCard key={i} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default NotificationsPage;
