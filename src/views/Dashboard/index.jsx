import { Box, Grid } from "@mui/material";
import React from "react";
import { Mitre } from "../../components";

const Dashboard = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <Mitre />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    xs=12 lg=4
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    xs=12 lg=4
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    xs=12 lg=8
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                    xs=12 lg=8
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
