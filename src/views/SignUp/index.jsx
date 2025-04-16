import React, { useState } from "react";
import { Box, Button, Checkbox, FormControl, FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = () => {
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleRecaptchaChange = value => {
        setRecaptchaValue(value); // reCAPTCHA qiymatini saqlash
    };

    const handleSubmit = () => {
        if (!recaptchaValue) {
            alert("Please complete the reCAPTCHA verification.");
            return;
        }
        // Formni yuborish jarayoni
        alert("Form submitted successfully!");
    };

    console.log(recaptchaValue);
    

    return (
        <Stack
            direction={"row"}
            mt={20}
            justifyContent={"center"}
        >
            <Box sx={{ width: "100%", maxWidth: "350px", boxShadow: 3, borderRadius: 2, p: 4, pt: 5 }}>
                <Typography variant="h5" fontWeight={600} textAlign={"center"}>
                    Sign Up
                </Typography>
                <Typography variant="body2" textAlign={"center"} mt={1} color="#0009">
                    Welcome user, please sign in to continue
                </Typography>
                <Box>
                    <FormControl fullWidth>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 2, width: "100%" }}
                            type="email"
                            size="small"
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 2 }}
                            type="password"
                            size="small"
                        />
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 2 }}
                            type="password"
                            size="small"
                        />

                        <Stack>
                            <FormControlLabel
                                control={<Checkbox size="small" />}
                                label="Remember me"
                                sx={{ mt: 2, paddingLeft: "2px", color: "#0009" }}
                            />
                        </Stack>

                        {/* reCAPTCHA */}
                        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                            <ReCAPTCHA
                                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                onChange={handleRecaptchaChange}
                            />
                            
                        </Box>

                        <Button
                            variant="contained"
                            sx={{ my: 3 }}
                            onClick={handleSubmit}
                        >
                            Sign In
                        </Button>
                    </FormControl>
                </Box>
            </Box>
        </Stack>
    );
};

export default SignUp;
