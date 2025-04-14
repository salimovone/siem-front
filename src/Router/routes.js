import { Agents, Dashboard, Logs } from "../views";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DevicesIcon from '@mui/icons-material/Devices';

export const routes = [

    {
        name: 'Dashboard',
        id: 1,
        path: '/',
        element: Dashboard,
        icon: DashboardIcon
    },
    {
        name: 'Logs',
        id: 2,
        path: '/logs',
        element: Logs,
        icon: ListAltIcon
    },
    {
        name: "Agents",
        id: 3,
        path: "/agents",
        element: Agents,
        icon: DevicesIcon
    }
];