import { Switch } from "../../shared/ui/switch";
import ChooseLanguageDrawer from "./ui/choose-language-drawer";
import HeaderSettingsPage from "./ui/header-settings-page";
import { useState } from "react";

const SettingsPage = () => {
    const [currentLanguage, setCurrentLanguage] = useState('Indonesia')
  return (
    <main className="p-4">
      <HeaderSettingsPage />

      <section className="mt-5 flex flex-col gap-3">
        <p className="font-semibold text-gray-400 text-sm">PROFILE</p>

        <div className="flex justify-between">
            <p className="font-semibold text-base">Push Notifications</p>
            <Switch className="scale-110"/>
        </div>
        <div className="flex justify-between">
            <p className="font-semibold text-base">Location</p>
            <Switch defaultChecked className="scale-110"/>
        </div>
       <ChooseLanguageDrawer currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage}/>


        <p className="font-semibold text-gray-400 text-sm mt-4">OTHER</p>
        <div className="flex justify-between items-center">
            <p className="font-semibold text-base">About Ticketis </p>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>

        <div className="flex justify-between items-center">
            <p className="font-semibold text-base">Privacy Policy</p>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>

        <div className="flex justify-between items-center">
            <p className="font-semibold text-base">Terms and Conditions</p>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>

      </section>
    </main>
  );
};

export default SettingsPage;
