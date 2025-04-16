import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    Link,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Paper,
    IconButton,
    ThemeProvider,
    createTheme,
    Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Kunduzgi (light) mavzudagi global theme
const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
});

// Karta komponenti: tanlangan qator tafsilotlarini ko'rsatadi
const DetailCard = ({ row, onClose }) => {
    return (
        <Card sx={{ margin: "20px auto", padding: "20px", width: "100%" }}>
            <CardHeader title={row.title || "No Title"} subheader="Rule Info" />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">
                            <strong>Rule ID:</strong> {row.ruleId || "-"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">
                            <strong>Modified:</strong> {row.modified || "-"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Description:</strong> {row.description || "-"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Author:</strong> {row.author || "-"}
                        </Typography>
                    </Grid>
                    {row.references && row.references.length > 0 && (
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom>
                                <strong>References:</strong>
                            </Typography>
                            <ul style={{ marginTop: 0, paddingLeft: "20px" }}>
                                {row.references.map((ref, idx) => (
                                    <li key={idx}>
                                        <Link href={ref.href} target="_blank" rel="noopener">
                                            {ref.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    )}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">
                            <strong>Rule Level:</strong> {row.level || "-"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">
                            <strong>False Positives:</strong> {row.falsePositives || "-"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Link:</strong>{" "}
                            <Link href={row.link} target="_blank" rel="noopener">
                                GitHub Sigma Rule
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Path:</strong> {row.path || "-"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Sigtype:</strong> {row.sigtype || "-"}
                        </Typography>
                    </Grid>
                </Grid>
                <IconButton onClick={onClose} sx={{ marginTop: 2 }}>
                    <ExpandLessIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

// Ro'yxat komponenti: qatorlar va ularning ochilishi/mutatish funksiyasi bilan.
const RuleList = () => {
    const [expandedRow, setExpandedRow] = useState(null);

    // Namuna qatorlari (rows) - kerakli maydonlar bilan
    const rows = [
        {
            ruleId: "a9d4d3fa-8fc0-41bc-80b1-30b9fda79d6f",
            level: "notice",
            time: "2025-04-14 16:43:42",
            message: "Sigma match found",
            title: "Remote Thread Created In Shell Application",
            description:
                'Detects remote thread creation in command shell applications, such as "Cmd.EXE" and "PowerShell.EXE". It is a common technique used by malware, such as IcedID, to inject malicious code and execute it within legitimate processes.',
            match: "\\cmd.exe in TargetImage",
            image: "-",
            author: "Splunk Research Team",
            modified: "2024-07-29",
            references: [
                {
                    label: "Splunk Research Link",
                    href: "https://research.splunk.com/endpoint/10399c1e-f51e-11eb-b920-acde48001122/",
                },
                {
                    label: "Binary Defense Analysis",
                    href: "https://www.binarydefense.com/resources/blog/icedid-gziploader-analysis/",
                },
            ],
            falsePositives: "Unknown",
            link: "https://github.com/SigmaHQ/sigma/blob/2025-02-03-31-gc72928b43/rules/windows/create_remote_thread/create_remote_thread_win_susp_target_shell_application.yml",
            path: "public/windows/create_remote_thread/create_remote_thread_win_susp_target_shell_application.yml",
            sigtype: "public",
        },
        {
            ruleId: "a9d4a-8fc0-41bc-80b1-30b9fda79d6f",
            level: "notice",
            time: "2025-04-14 16:43:42",
            message: "Sigma match found",
            title: "Remote Thread Created In Shell Application",
            description:
                'Detects remote thread creation in command shell applications, such as "Cmd.EXE" and "PowerShell.EXE". It is a common technique used by malware, such as IcedID, to inject malicious code and execute it within legitimate processes.',
            match: "\\cmd.exe in TargetImage",
            image: "-",
            author: "Splunk Research Team",
            modified: "2024-07-29",
            references: [
                {
                    label: "Splunk Research Link",
                    href: "https://research.splunk.com/endpoint/10399c1e-f51e-11eb-b920-acde48001122/",
                },
                {
                    label: "Binary Defense Analysis",
                    href: "https://www.binarydefense.com/resources/blog/icedid-gziploader-analysis/",
                },
            ],
            falsePositives: "Unknown",
            link: "https://github.com/SigmaHQ/sigma/blob/2025-02-03-31-gc72928b43/rules/windows/create_remote_thread/create_remote_thread_win_susp_target_shell_application.yml",
            path: "public/windows/create_remote_thread/create_remote_thread_win_susp_target_shell_application.yml",
            sigtype: "public",
        },
        {
            ruleId: "a9d4d3fa-8fc0-41bc-80b1d6f",
            level: "notice",
            time: "2025-04-14 16:43:42",
            message: "Sigma match found",
            title: "Remote Thread Created In Shell Application",
            description:
                'Detects remote thread creation in command shell applications, such as "Cmd.EXE" and "PowerShell.EXE". It is a common technique used by malware, such as IcedID, to inject malicious code and execute it within legitimate processes.',
            match: "\\cmd.exe in TargetImage",
            image: "-",
            author: "Splunk Research Team",
            modified: "2024-07-29",
            references: [
                {
                    label: "Splunk Research Link",
                    href: "https://research.splunk.com/endpoint/10399c1e-f51e-11eb-b920-acde48001122/",
                },
                {
                    label: "Binary Defense Analysis",
                    href: "https://www.binarydefense.com/resources/blog/icedid-gziploader-analysis/",
                },
            ],
            falsePositives: "Unknown",
            link: "https://github.com/SigmaHQ/sigma/blob/2025-02-03-31-gc72928b43/rules/windows/create_remote_thread/create_remote_thread_win_susp_target_shell_application.yml",
            path: "public/windows/create_remote_thread/create_remote_thread_win_susp_target_shell_application.yml",
            sigtype: "public",
        },
        {
            ruleId: "-",
            level: "error",
            time: "2025-04-14 16:41:33",
            message: "Could not read rule file",
            title: "-",
            description: "-",
            match: "-",
            image: "-",
            author: "-",
            modified: "-",
            references: [],
            falsePositives: "-",
            link: "#",
            path: "-",
            sigtype: "-",
        },
    ];

    // Qatorning ochilish/mutatish funksiyasi
    const handleToggle = row => {
        if (expandedRow && expandedRow.ruleId === row.ruleId) {
            setExpandedRow(null);
        } else {
            setExpandedRow(row);
        }
    };

    return (
        <ThemeProvider theme={lightTheme}>
            <Paper sx={{ marginTop: 2, padding: 2 }}>
                <List>
                    {rows.map((row, index) => (
                        <React.Fragment key={index}>
                            <ListItem
                                disablePadding
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                }}
                            >
                                <ListItemButton onClick={() => handleToggle(row)}>
                                    <ListItemIcon>
                                        {expandedRow && expandedRow.ruleId === row.ruleId ? (
                                            <ExpandLessIcon />
                                        ) : (
                                            <ExpandMoreIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={row.title || "No Title"}
                                        secondary={row.time}
                                    />
                                </ListItemButton>
                                {expandedRow && expandedRow.ruleId === row.ruleId && (
                                    <DetailCard
                                        row={expandedRow}
                                        onClose={() => setExpandedRow(null)}
                                    />
                                )}
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </ThemeProvider>
    );
};

export default RuleList;
