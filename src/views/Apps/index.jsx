import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { defaultGetService } from "../../service/defaultGetService";
import {
	Box,
	Button,
	List,
	ListItem,
	ListItemText,
	Typography,
	TextField,
} from "@mui/material";

const Apps = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const [appList, setAppList] = useState({ applications: [] });
	const [searchTerm, setSearchTerm] = useState(""); // Qidiruv uchun holat

	const fetchData = () => {
		defaultGetService(`/agent/device/${state.id}/`)
			.then(res => {
				setAppList(res);
				console.log("App List: ", res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	useEffect(() => {
		console.log("location state: \n", state.id);
		fetchData();
	}, []);

	// Qidiruv natijalarini filtrlash
	const filteredApps = appList.applications.filter(app =>
		app.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Box sx={{ maxWidth: "1000px", margin: "auto", mt: 8 }}>
			<Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
				Applications List
			</Typography>

			{/* Qidiruv maydoni */}
			<TextField
				label="Search Applications"
				variant="outlined"
				fullWidth
				sx={{ mb: 3 }}
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)} // Qidiruv maydonini yangilash
			/>

			<List>
				{filteredApps.map((app, index) => (
					<ListItem
						key={index}
						sx={{
							backgroundColor: "#fff",
							borderRadius: 1,
							mb: 2,
							boxShadow: 1,
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						{/* Application Title */}
						<ListItemText
							primary={
								<Typography variant="h6" fontWeight="bold">
									{app.title}
								</Typography>
							}
							secondary={app.description || "No description available"}
						/>

						{/* Link Button */}
						<Button
							variant="outlined"
							color="primary"
							onClick={() =>
								navigate("/app-logs", {
									state: { device_id: state.id, app_id: app.id },
								})
							}
						>
							View Details
						</Button>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default Apps;
