import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { use, useState } from "react";
import { loginService } from "../../service/loginService";
import { useNavigate } from "react-router";
import api from "../../service/api";

const SignIn = () => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({ username: "", password: "" });

	const handleSubmit = () => {
		loginService(userData)
			.then(res => {
				console.log("User logged in successfully:", res);
				localStorage.setItem("token", res.access_token)
				localStorage.setItem("refresh", res.refresh_token)
				api.defaults.headers.common.Authorization = `Bearer ${res.access_token}`
			})
			.catch(error => {
				console.error("Error logging in user:", error);
				// Xatolik yuz berganda bajariladigan ishlar
			}).finally(() => {
				setUserData({ username: "", password: "" });
				window.location.reload()
			}	)
	};

	return (
		<Stack direction={"row"} mt={20} justifyContent={"center"}>
			<Box
				sx={{
					width: "100%",
					maxWidth: "350px",
					boxShadow: 3,
					borderRadius: 2,
					p: 4,
					pt: 5,
				}}
			>
				<Typography variant="h5" fontWeight={600} textAlign={"center"}>
					Sign In
				</Typography>
				<Typography variant="body2" textAlign={"center"} mt={1} color="#0009">
					Welcome user, please sign in to continue
				</Typography>
				<Box>
					<FormControl fullWidth>
						<TextField
							label="username"
							variant="outlined"
							fullWidth
							sx={{ mt: 2, width: "100%" }}
							type="test"
							size="small"
							onChange={e =>
								setUserData({ ...userData, username: e.target.value })
							}
							value={userData.username}
						/>
						<TextField
							label="Password"
							variant="outlined"
							fullWidth
							sx={{ mt: 2 }}
							type="password"
							size="small"
							onChange={e =>
								setUserData({ ...userData, password: e.target.value })
							}
							value={userData.password}
						/>

						<Stack
							sx={{
								display: "flex",
								justifyContent: "space-between",
								flexDirection: "row",
								alignItems: "center",
								mt: 2,
							}}
						>
							<FormControlLabel
								control={<Checkbox size="small" />}
								label="Remember me"
								sx={{ paddingLeft: "2px", color: "#0009" }}
							/>
							<Typography
								variant="body2"
								textAlign={"right"}
								color="#0009"
								sx={{ cursor: "pointer" }}
							>
								Forgot Password?
							</Typography>
						</Stack>

						<Button variant="contained" sx={{ my: 3 }} type="submit" onClick={handleSubmit}>
							Sign In
						</Button>
					</FormControl>
				</Box>
			</Box>
		</Stack>
	);
};

export default SignIn;
