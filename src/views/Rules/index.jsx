import React, { useState } from "react";
import {
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Typography,
    Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Rules = () => {
    // Mock ma'lumotlar
    const [rules, setRules] = useState([
        { id: 1, name: "Rule 1", description: "This is rule 1" },
        { id: 2, name: "Rule 2", description: "This is rule 2" },
        { id: 3, name: "Rule 3", description: "This is rule 3" },
    ]);

    // Delete funksiyasi
    const handleDelete = id => {
        setRules(rules.filter(rule => rule.id !== id));
    };

    // Update funksiyasi (hozircha faqat console.log)
    const handleUpdate = id => {
        console.log(`Update rule with id: ${id}`);
    };

    // Create funksiyasi (hozircha faqat console.log)
    const handleCreate = () => {
        console.log("Create new rule");
    };

    return (
        <Box sx={{ maxWidth: "600px", margin: "auto", mt: 4 }}>
            {/* Create Button */}
            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mb: 2 }}
                onClick={handleCreate}
            >
                Create Rule
            </Button>

            {/* List */}
            <List>
                {rules.map(rule => (
                    <ListItem
                        key={rule.id}
                        sx={{
                            backgroundColor: "#f5f5f5",
                            borderRadius: 1,
                            mb: 1,
                            boxShadow: 1,
                        }}
                    >
                        {/* Rule Name and Description */}
                        <ListItemText
                            primary={
                                <Typography variant="h6" fontWeight="bold">
                                    {rule.name}
                                </Typography>
                            }
                            secondary={rule.description}
                        />

                        {/* Action Buttons */}
                        <ListItemSecondaryAction>
                            <Stack direction="row" spacing={1}>
                                <IconButton
                                    color="primary"
                                    onClick={() => handleUpdate(rule.id)}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    color="error"
                                    onClick={() => handleDelete(rule.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Rules;
