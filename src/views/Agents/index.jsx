import React, { use, useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	Grid,
	IconButton,
	Collapse,
	Box,
	Chip,
	Divider,
	Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ComputerIcon from "@mui/icons-material/Computer";
import AppleIcon from "@mui/icons-material/Apple";
import { devicesList } from "../../service/devicesListService";
import { useNavigate } from "react-router";

const getOSIcon = os => {
	if (os.toLowerCase().includes("linux")) return <ComputerIcon />;
	else if (os.toLowerCase().includes("windows")) return <ComputerIcon />;
	else if (os.toLowerCase().includes("mac")) return <AppleIcon />;
	else return <ComputerIcon />;
};

const StatusChip = ({ active }) => (
	<Chip
		label={active ? "Active" : "Inactive"}
		size="small"
		sx={{
			backgroundColor: active ? "lime" : "lightgray",
			color: "white",
		}}
	/>
);

export default function Agents() {
	const navigate = useNavigate();
	const [openIndex, setOpenIndex] = useState(null);
	const [data, setData] = useState([]);

	const toggleOpen = index => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const fetchData = () => {
		devicesList()
			.then(res => {
				console.log(res);
				setData(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	useState(() => {
		fetchData();
	}, []);

	return (
		<Grid container spacing={2} direction="column">
			{data.map((agent, index) => (
				<Grid key={agent.name}>
					<Card sx={{ width: "100%" }}>
						<CardContent>
							<Grid
								container
								alignItems="center"
								spacing={2}
								sx={{ width: "100%" }}
							>
								<Grid>
									<IconButton onClick={() => toggleOpen(index)}>
										{openIndex === index ? (
											<ExpandLessIcon />
										) : (
											<ExpandMoreIcon />
										)}
									</IconButton>
								</Grid>

								<Grid>{getOSIcon(agent.os_name)}</Grid>

								<Grid>
									<Typography variant="h6">{agent.name}</Typography>
								</Grid>

								<Grid>
									<StatusChip active={agent.is_active} />
								</Grid>

								<Grid>
									<Button variant="outlined" size="small" onClick={() => navigate("/apps", { state: { agent } })}>
										<Typography variant="body2">App List</Typography>
									</Button>
								</Grid>
							</Grid>

							<Collapse in={openIndex === index} timeout="auto" unmountOnExit>
								<Divider sx={{ my: 2 }} />
								<Box pl={6}>
									<Typography variant="body2">
										<strong>IP Address:</strong> {agent.ip_address}
									</Typography>
									<Typography variant="body2">
										<strong>Hostname:</strong> {agent.os_name}
									</Typography>
									<Typography variant="body2">
										<strong>Last Seen:</strong> {agent.last_active}
									</Typography>
								</Box>
							</Collapse>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}
