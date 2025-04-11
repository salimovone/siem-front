import { Home, Dashboard, Logs } from "../views";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';

export const routes = [
    {
        name: 'Home',
        id: 0,
        path: '/',
        element: Home,
        icon: HomeIcon
    },
    {
        name: 'Dashboard',
        id: 1,
        path: '/dashboard',
        element: Dashboard,
        icon: DashboardIcon
    },
    {
        name: 'Logs',
        id: 2,
        path: '/logs',
        element: Logs,
        icon: ListAltIcon
    }
];