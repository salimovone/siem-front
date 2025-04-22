import { Agents, Apps, Dashboard, Devices, Logs } from "../views";
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
        name: "Devices",
        id: 3,
        path: "/devices",
        element: Devices,
        icon: DevicesIcon
    },
    {
        name: "Agents",
        id: 4,
        path: "/agents",
        element: Agents,
        icon: DevicesIcon
    },
    {
        name: "Apps",
        id: 5,
        path: "/apps",
        element: Apps,
    }
];