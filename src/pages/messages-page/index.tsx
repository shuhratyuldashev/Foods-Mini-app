import BottomBar from "../../widgets/bottombar";
import ChatCard from "../../entities/chat-card";
import { chats_list } from "./constants/chats-list";

const MessagesPage = () => {
  return (
    <main className="p-4 bg-gradient-to-br from-white via-orange-50 to-white">
      <section className="flex flex-col items-center min-h-screen">
        <header className="font-semibold text-center text-lg mt-5">
          Chat List
        </header>
        <div className="w-full flex flex-col gap-4 mt-5">
          {chats_list.map((ch) => (
            <ChatCard key={ch.id} {...ch} />
          ))}
        </div>
      </section>
      <BottomBar currentPage="Messages" />
    </main>
  );
};

export default MessagesPage;
