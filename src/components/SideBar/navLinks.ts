import DashboardIcon from "../../assets/dashboard.svg";
import HistoryIcon from '../../assets/history.svg'
import UserIcon from '../../assets/user.svg'

export const navLinks = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    url: '/dashboard'
  },
  {
    title: "User Management",
    icon: UserIcon,
    url: '/user-management'
  },
  {
    title: "Clock-in History",
    icon: HistoryIcon,
    url: '/history'
  },
];
