import user_icon from "../../../shared/assets/icons/user-icon.png";
import settings_icon from "../../../shared/assets/icons/settings-icon.png";
import card_icon from "../../../shared/assets/icons/card_icon.png";
import info_icon from "../../../shared/assets/icons/info_icon.png";
import delete_icon from "../../../shared/assets/icons/delete_icon.png";
import add_account_icon from "../../../shared/assets/icons/add-account-icon.png";

export const option_list = [
  {
    id: 11,
    title: "Profile",
    list: [
      {
        id: 1,
        title: "Personal Data",
        link: "/profile/personal-date",
        icon: user_icon,
      },
      {
        id: 2,
        title: "Settings",
        link: "/profile/settings",
        icon: settings_icon,
      },
      {
        id: 3,
        title: "Extra Card",
        link: "/profile/extra-card",
        icon: card_icon,
      },
    ],
  },
  {
    id: 12,
    title: "Support",
    list: [
      {
        id: 4,
        title: "Help center",
        link: "/profile/help-center",
        icon: info_icon,
      },
      {
        id: 5,
        title: "Request Account Deletion",
        link: "function_to_delete",
        icon: delete_icon,
      },
      {
        id: 6,
        title: "Add another account",
        link: "function_to_add",
        icon: add_account_icon,
      },
    ],
  },
];
