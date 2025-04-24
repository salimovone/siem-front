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
} from "@mui/material";

const DeviceLogs = () => {
    const { state } = useLocation();
    const [logList, setLogList] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null); // Kengaytirilgan kartani aniqlash

    const fetchData = () => {
        defaultGetService(`/agent/devices/${state.id}/logs/`)
            .then(res => {
                setLogList(res);
                console.log("Log List: ", res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        console.log("location state: \n", state.id);
        fetchData();
    }, []);

    // Kengaytirish yoki yopish funksiyasi
    const handleExpand = index => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Box sx={{ maxWidth: "1000px", margin: "auto", mt: 8 }}>
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
                Device Logs
            </Typography>
            <Box>
                {logList.map((log, index) => {
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

export default DeviceLogs;
