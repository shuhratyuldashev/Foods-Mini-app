import user_icon from "@/shared/assets/icons/user-icon.png";
import settings_icon from "@/shared/assets/icons/settings-icon.png";
import card_icon from "@/shared/assets/icons/card_icon.png";
import info_icon from "@/shared/assets/icons/info_icon.png";
import delete_icon from "@/shared/assets/icons/delete_icon.png";
import add_account_icon from "@/shared/assets/icons/add-account-icon.png";

export const option_list = [
  {
    id: 11,
    title: "Profil",
    list: [
      {
        id: 1,
        title: "Shaxsiy ma'lumotlar",
        link: "/profile/personal-date",
        icon: user_icon,
      },
      {
        id: 2,
        title: "Sozlamalar",
        link: "/profile/settings",
        icon: settings_icon,
      },
      // {
      //   id: 3,
      //   title: "Qo‘shimcha karta",
      //   link: "/profile/extra-card",
      //   icon: card_icon,
      // },
    ],
  },
  {
    id: 12,
    title: "Yordam",
    list: [
      {
        id: 4,
        title: "Yordam markazi",
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
      //   link: "/sign-up",
      //   icon: add_account_icon,
      // },
    ],
  },
];
