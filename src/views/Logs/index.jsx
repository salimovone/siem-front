import React, { useEffect, useState } from "react";
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Collapse,
} from "@mui/material";
import { logService } from "../../service/logService";

const Logs = () => {
    const [logData, setLogData] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null); // Kengaytirilgan kartani aniqlash

    useEffect(() => {
        logService()
            .then(response => {
                setLogData(response);
                console.log("Fetched log data: \n", response);
            })
            .catch(error => {
                console.error("Error fetching logs:", error);
            });
    }, []);

    // Kengaytirish yoki yopish funksiyasi
    const handleExpand = index => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Box sx={{ maxWidth: "800px", margin: "auto", mt: 4 }}>
            <Typography variant="h5" mb={3} textAlign="center">
                Logs
            </Typography>
            <ol style={{ listStyle: "none", padding: 0 }}>
                {logData.map((log, index) => {
                    const entries = Object.entries(log);
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
                        </li>
                    );
                })}
            </ol>
        </Box>
    );
};

export default Logs;
