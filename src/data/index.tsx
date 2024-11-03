import { IoIosArrowDown } from "react-icons/io";
import todoImage from "@/assets/images/icon-todo.svg";
import calendarImage from "@/assets/images/icon-calendar.svg";
import remindersImage from "@/assets/images/icon-reminders.svg";
import planningImage from "@/assets/images/icon-planning.svg";

export const NavItem = [
    {
        label: "Features",
        link: "#",
        children: [
          {
            label: "Todo List",
            link: "#",
            iconImage: todoImage,
          },
          {
            label: "Calendar",
            link: "#",
            iconImage: calendarImage,
          },
          {
            label: "Reminders",
            link: "#",
            iconImage: remindersImage,
          },
          {
            label: "Planning",
            link: "#",
            iconImage: planningImage,
          },
        ],
      },
      {
        label: "Compnay",
        link: "#",
        children: [
          {
            label: "History",
            link: "#",
          },
          {
            label: "Our Team",
            link: "#",
          },
          {
            label: "Blog",
            link: "#",
          },
        ],
      },
      {
        label: "Careers",
        link: "#",
      },
      {
        label: "About",
        link: "#",
      }
]