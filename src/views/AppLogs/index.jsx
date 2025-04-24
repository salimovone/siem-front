import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { defaultGetService } from "../../service/defaultGetService";
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Collapse,
    TextField,
} from "@mui/material";

const AppLogs = () => {
    const { state } = useLocation();
    const { device_id, app_id } = state;
    const [appLogs, setAppLogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // Qidiruv uchun holat
    const [expandedIndex, setExpandedIndex] = useState(null); // Kengaytirilgan kartani aniqlash

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

    // Kengaytirish yoki yopish funksiyasi
    const handleExpand = index => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

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

            {/* Loglar ro'yxati */}
            <Box>
                {appLogs
                    .filter(log =>
                        JSON.stringify(log)
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    )
                    .map((log, index) => {
                        const entries = Object.entries(log);
                        const [firstKey, firstValue] = entries[0] || []; // Birinchi ma'lumot
                        const [secondKey, secondValue] = entries[1] || []; // Ikkinchi ma'lumot

                        return (
                            <Card key={index} sx={{ mb: 2 }}>
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
                                    <Button
                                        size="small"
                                        onClick={() => handleExpand(index)}
                                    >
                                        {expandedIndex === index ? "Collapse" : "Expand"}
                                    </Button>
                                </CardActions>
                                {/* Qo'shimcha ma'lumotlar */}
                                <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        {entries.slice(2).map(([key, value]) => (
                                            <Box key={key} sx={{ mb: 1 }}>
                                                <Typography variant="body2">
                                                    <strong>{key}:</strong> {value}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </CardContent>
                                </Collapse>
                            </Card>
                        );
                    })}
            </Box>
        </Box>
    );
};

export default AppLogs;
