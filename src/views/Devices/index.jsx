import { useState } from "react";
import {
	Box,
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	Collapse,
} from "@mui/material";
import useWebSocket from "../../libs/useWebSocket";

const Devices = () => {
	const { messages, sendMessage, isConnected } = useWebSocket(
		"ws://192.168.0.132:8000/ws/event-log/"
	);
	const [value, setValue] = useState("");
	const [expandedIndex, setExpandedIndex] = useState(null); // Kengaytirilgan kartani aniqlash

	const handleSendMessage = () => {
		sendMessage(value);
		setValue("");
	};

	const handleExpand = index => {
		setExpandedIndex(expandedIndex === index ? null : index); // Kengaytirish yoki yopish
	};

	return (
		<Box sx={{ maxWidth: "800px", margin: "auto", mt: 4 }}>
			<Typography variant="h6" mb={2}>
				Is Active: {isConnected ? "Yes" : "No"}
			</Typography>
			<Box sx={{ display: "flex", gap: 2, mb: 3 }}>
				<input
					type="text"
					onChange={e => setValue(e.target.value)}
					value={value}
					style={{
						flex: 1,
						padding: "8px",
						border: "1px solid #ccc",
						borderRadius: "4px",
					}}
				/>
				<Button variant="contained" onClick={handleSendMessage}>
					Send
				</Button>
			</Box>
			{/* Messages */}
			<ol style={{ listStyle: "none", padding: 0 }}>
				{messages.map((log, index) => {
					const parsedLog = JSON.parse(log);
					const entries = Object.entries(parsedLog);
					const [firstKey, firstValue] = entries[0] || []; // Birinchi ma'lumot
					const [secondKey, secondValue] = entries[1] || []; // Ikkinchi ma'lumot

					return (
						<li key={index} style={{ marginBottom: "16px" }}>
							<Card>
								<CardContent>
									{/* Birinchi va ikkinchi ma'lumot */}
									<Typography variant="h6" fontWeight="bold">
										{firstKey}: {firstValue}
									</Typography>
									{secondKey && (
										<Typography variant="body2" color="text.secondary">
											{secondKey}: {secondValue}
										</Typography>
									)}
								</CardContent>
								<CardActions>
									<Button size="small" onClick={() => handleExpand(index)}>
										{expandedIndex === index ? "Collapse" : "Expand"}
									</Button>
								</CardActions>
								{/* Qo'shimcha ma'lumotlar */}
								<Collapse
									in={expandedIndex === index}
									timeout="auto"
									unmountOnExit
								>
									<CardContent>
										{entries.slice(2).map(([key, value]) => {
											if (value === null) return null; // Null qiymatlarni o'tkazib yuborish
											return (
												<Box key={key} sx={{ mb: 1 }}>
													<Typography variant="body2">
														<strong>{key}:</strong> {value}
													</Typography>
												</Box>
											);
										})}
									</CardContent>
								</Collapse>
							</Card>
						</li>
					);
				})}
			</ol>
		</Box>
	);
};

export default Devices;
