import { Agents, AppLogs, Apps, Dashboard, DeviceLogs, Devices, Logs, Rules } from "../views";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DevicesIcon from '@mui/icons-material/Devices';
import GavelIcon from '@mui/icons-material/Gavel';
import SyncIcon from '@mui/icons-material/Sync';

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
        name: "WebSocket",
        id: 3,
        path: "/devices",
        element: Devices,
        icon: SyncIcon
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
    },
    {
        name: "Device Logs",
        id: 5,
        path: "/device-logs",
        element: DeviceLogs,
    },
    {
        name: "App Logs",
        id: 5,
        path: "/app-logs",
        element: AppLogs,
    },
    {
        name: "Rules",
        id: 5,
        path: "/rules",
        element: Rules,
        icon: GavelIcon
    }
];