import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Typography,
    Stack,
    Modal,
    TextField,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getRules, deleteRule, createRule, updateRule } from "../../service/sigmaRulesService";

const Rules = () => {
    const [ruleList, setRuleList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [currentRule, setCurrentRule] = useState({ name: "", is_active: false, file: null });
    const [isEditing, setIsEditing] = useState(false); // Tahrirlash rejimini aniqlash

    // Ma'lumotlarni olish
    const fetchData = () => {
        getRules()
            .then(response => {
                setRuleList(response);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Delete funksiyasi
    const handleDelete = id => {
        deleteRule(id)
            .then(() => {
                setRuleList(ruleList.filter(rule => rule.id !== id));
            })
            .catch(error => {
                console.error("Error deleting rule:", error);
            });
    };

    // Create funksiyasi
    const handleCreate = () => {
        setCurrentRule({ name: "", is_active: false, file: null });
        setIsEditing(false); // Yaratish rejimi
        setOpenModal(true);
    };

    // Update funksiyasi
    const handleUpdate = rule => {
        setCurrentRule(rule);
        setIsEditing(true); // Tahrirlash rejimi
        setOpenModal(true);
    };

    // Modalni saqlash funksiyasi
    const handleSave = () => {
        if (isEditing) {
            // Tahrirlash rejimi
            updateRule(currentRule.id, currentRule)
                .then(updatedRule => {
                    setRuleList(ruleList.map(rule => (rule.id === updatedRule.id ? updatedRule : rule)));
                    setOpenModal(false);
                })
                .catch(error => {
                    console.error("Error updating rule:", error);
                });
        } else {
            // Yaratish rejimi
            createRule(currentRule)
                .then(newRule => {
                    setRuleList([...ruleList, newRule]);
                    setOpenModal(false);
                })
                .catch(error => {
                    console.error("Error creating rule:", error);
                });
        }
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
                {ruleList.map(rule => (
                    <ListItem
                        key={rule.id}
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: 1,
                            mb: 1,
                            boxShadow: 1,
                        }}
                    >
                        {/* Rule Name */}
                        <ListItemText
                            primary={
                                <Typography variant="h6" fontWeight="bold">
                                    {rule.name}
                                </Typography>
                            }
                            secondary={`Active: ${rule.is_active ? "Yes" : "No"}`}
                        />

                        {/* Action Buttons */}
                        <Stack direction="row" spacing={1}>
                            <IconButton color="primary" onClick={() => handleUpdate(rule)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton color="error" onClick={() => handleDelete(rule.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Stack>
                    </ListItem>
                ))}
            </List>

            {/* Modal */}
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h6" mb={2}>
                        {isEditing ? "Update Rule" : "Create Rule"}
                    </Typography>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={currentRule.name}
                        onChange={e => setCurrentRule({ ...currentRule, name: e.target.value })}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={currentRule.is_active}
                                onChange={e => setCurrentRule({ ...currentRule, is_active: e.target.checked })}
                            />
                        }
                        label="Is Active"
                    />
                    <Button
                        variant="outlined"
                        component="label"
                        sx={{ mt: 2 }}
                    >
                        Upload File
                        <input
                            type="file"
                            hidden
                            onChange={e => setCurrentRule({ ...currentRule, file: e.target.files[0] })}
                        />
                    </Button>
                    {currentRule.file && (
                        <Typography variant="body2" mt={1}>
                            Selected File: {currentRule.file.name}
                        </Typography>
                    )}
                    <Stack direction="row" spacing={2} justifyContent="flex-end" mt={2}>
                        <Button variant="outlined" onClick={() => setOpenModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={handleSave}>
                            {isEditing ? "Update" : "Send"}
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </Box>
    );
};

export default Rules;
