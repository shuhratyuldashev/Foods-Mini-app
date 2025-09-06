import user_icon from "@/shared/assets/icons/user-icon.png";
import settings_icon from "@/shared/assets/icons/settings-icon.png";
import card_icon from "@/shared/assets/icons/card_icon.png";
import info_icon from "@/shared/assets/icons/info_icon.png";
import delete_icon from "@/shared/assets/icons/delete_icon.png";
import add_account_icon from "@/shared/assets/icons/add-account-icon.png";

export const option_list = [
  {
    id: 11,
    title: "Profil", // "Profile"
    list: [
      {
        id: 1,
        title: "Shaxsiy ma'lumotlar", // "Personal Data"
        link: "/profile/personal-date",
        icon: user_icon,
      },
      {
        id: 2,
        title: "Sozlamalar", // "Settings"
        link: "/profile/settings",
        icon: settings_icon,
      },
      // {
      //   id: 3,
      //   title: "Qo‘shimcha karta", // "Extra Card"
      //   link: "/profile/extra-card",
      //   icon: card_icon,
      // },
    ],
  },
  {
    id: 12,
    title: "Yordam", // "Support"
    list: [
      {
        id: 4,
        title: "Yordam markazi", // "Help center"
        link: "tel:+998901234567",
        icon: info_icon,
      },
      // {
      //   id: 5,
      //   title: "Profilni o‘chirish",
      //   link: "function_to_delete",
      //   icon: delete_icon,
      // },
      // {
      //   id: 6,
      //   title: "Yangi hisob qo‘shish",
      //   link: "function_to_add",
      //   icon: add_account_icon,
      // },
    ],
  },
];
