import { Box, Grid } from "@mui/material";
import React from "react";
import {  EventsCountEvolutionChart, FIMRecentEventsCard, Mitre, SCALastestScansCard } from "../../components";
import Compilance from "../../components/Compilance";

const Dashboard = () => {
    return (
        <Box >
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
                    <Mitre />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
                    <Compilance />
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                    <FIMRecentEventsCard />
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                    <EventsCountEvolutionChart />
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                    <SCALastestScansCard />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
