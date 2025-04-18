import React, { useState } from "react";
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
import ReCAPTCHA from "react-google-recaptcha";
import { registerUser } from "../../service/registerService";
import { useNavigate } from "react-router";

const SignUp = () => {
	const [recaptchaValue, setRecaptchaValue] = useState(null);
	const [user, setUser] = useState({
		username: "",
		password: "",
		password2: "",
	});
	const navigate = useNavigate();

	const handleRecaptchaChange = value => {
		setRecaptchaValue(value); // reCAPTCHA qiymatini saqlash
	};

	const handleSubmit = () => {
		if (!recaptchaValue) {
			alert("Please complete the reCAPTCHA verification.");
			return;
		}
		// Formni yuborish jarayoni
		registerUser({
			username: user.username,
			password: user.password,
			password2: user.password2,
			recaptcha_token: recaptchaValue, // reCAPTCHA qiymatini yuborish
		})
			.then(response => {
				navigate("/login"); // Ro'yxatdan o'tgandan so'ng login sahifasiga o'tish
			})
			.catch(error => {
				console.error("Error registering user:", error);
				// Xatolik yuz berganda bajariladigan ishlar
			})
			.finally(() => {
				setUser({ username: "", password: "", password2: "" }); // Formni tozalash
				setRecaptchaValue(null); // reCAPTCHA qiymatini tozalash
			});
	};

	console.log(recaptchaValue);

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
					Sign Up
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
							type="text"
							size="small"
							onChange={e => setUser({ ...user, username: e.target.value })}
							value={user.username}
						/>
						<TextField
							label="Password"
							variant="outlined"
							fullWidth
							sx={{ mt: 2 }}
							type="password"
							size="small"
							onChange={e => setUser({ ...user, password: e.target.value })}
							value={user.password}
						/>
						<TextField
							label="Confirm Password"
							variant="outlined"
							fullWidth
							sx={{ mt: 2 }}
							type="password"
							size="small"
							onChange={e => setUser({ ...user, password2: e.target.value })}
							value={user.password2}
						/>

						{/* reCAPTCHA */}
						<Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
							<ReCAPTCHA
								sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
								onChange={handleRecaptchaChange}
							/>
						</Box>

						<Button variant="contained" sx={{ my: 3 }} onClick={handleSubmit}>
							Sign In
						</Button>
					</FormControl>
				</Box>
			</Box>
		</Stack>
	);
};

export default SignUp;
