import UserMessage from "../../entities/user-message";
import HeaderChat from "./ui/header-chat";
import TypingArea from "./ui/typing-area";

const ChatPage = () => {
  return (
    <main className="p-4 bg-gradient-to-br from-white via-orange-50 to-white min-h-screen">
      <HeaderChat />

      <section className="mt-10">
        <UserMessage
          name="Stevano Clirover"
          message="Hello How are you doing"
          time="09.00"
        />
        <div className="flex flex-col gap-2 pl-2">
          <div className="ml-auto">
            <div className="bg-primary text-white max-w-[200px] shadow-xs rounded-md p-2 text-sm font-medium">
              I'm good, What about you?
            </div>
            <p className="text-sm text-gray-500 text-end">09.02</p>
          </div>
        </div>
      </section>
      <TypingArea />
    </main>
  );
};

export default ChatPage;
