import { Box, CssBaseline, FormControl, FormLabel, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Login = () => {
    return (
        <Box sx={{ height: "100vh", width: "100vw", pt: "8%" }}>
            <Grid container>
                <CssBaseline />
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{
                        paddingInline: "20px",
                        // width: "100%",
                        margin: "auto",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "800px",
                            minWidth: "500px",
                            padding: 3,
                        }}
                    >
                        <FormControl fullWidth>
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                Sign in
                            </Typography>
                            <TextField label="Email" required type="email" sx={{maxWidth: "400px", minWidth: "250px", width: "100%"}}/>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;
