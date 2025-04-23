import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { defaultGetService } from "../../service/defaultGetService";
import {
	Box,
	List,
	ListItem,
	Typography,
	TextField,
} from "@mui/material";

const AppLogs = () => {
	const { state } = useLocation();
    const { device_id, app_id } = state;
	const [appLogs, setAppLogs] = useState([]);
	const [searchTerm, setSearchTerm] = useState(""); // Qidiruv uchun holat

	const fetchData = () => {
		defaultGetService(`/agent/devices/${device_id}/applications/${app_id}/logs/`)
			.then(res => {
				setAppLogs(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

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
				{appLogs.map((log, index) => (
					<ListItem>{"log"}</ListItem>
				))}
			</List>
		</Box>
	);
};

export default AppLogs;
