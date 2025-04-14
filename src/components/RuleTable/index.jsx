import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Link,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  ThemeProvider,
  createTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Kunduzgi (light) mavzudagi global theme
const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
});

// Karta komponenti: tanlangan qator tafsilotlarini ko'rsatadi
const DetailCard = ({ row, onClose }) => {
  return (
    <Card sx={{ maxWidth: 800, margin: '20px auto', padding: '20px' }}>
      <CardHeader title={row.title || 'No Title'} subheader="Rule Info" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Rule ID:</strong> {row.ruleId || '-'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Modified:</strong> {row.modified || '-'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Description:</strong> {row.description || '-'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Author:</strong> {row.author || '-'}
            </Typography>
          </Grid>
          {row.references && row.references.length > 0 && (
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>References:</strong>
              </Typography>
              <ul style={{ marginTop: 0, paddingLeft: '20px' }}>
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
              <strong>Rule Level:</strong> {row.level || '-'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>False Positives:</strong> {row.falsePositives || '-'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Link:</strong>{' '}
              <Link href={row.link} target="_blank" rel="noopener">
                GitHub Sigma Rule
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Path:</strong> {row.path || '-'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Sigtype:</strong> {row.sigtype || '-'}
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

// Jadval komponenti: qatorlar va ularning ochilishi/mutatish funksiya bilan.
const RuleTable = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  // Namuna qatorlari (rows) - kerakli maydonlar bilan (tasvirda keltirilgan tafsilotlar asosida)
  const rows = [
    {
      ruleId: 'a9d4d3fa-8fc0-41bc-80b1-30b9fda79d6f',
      level: 'notice',
      time: '2025-04-14 16:43:42',
      message: 'Sigma match found',
      title: 'Remote Thread Created In Shell Application',
      description:
        'Detects remote thread creation in command shell applications, such as "Cmd.EXE" and "PowerShell.EXE". It is a common technique used by malware, such as IcedID, to inject malicious code and execute it within legitimate processes.',
      match: '\\cmd.exe in TargetImage',
      image: '-',
      author: 'Splunk Research Team',
      modified: '2024-07-29',
      references: [
        {
          label: 'Splunk Research Link',
          href: 'https://research.splunk.com/endpoint/10399c1e-f51e-11eb-b920-acde48001122/'
        },
        {
          label: 'Binary Defense Analysis',
          href: 'https://www.binarydefense.com/resources/blog/icedid-gziploader-analysis/'
        }
      ],
      falsePositives: 'Unknown',
      link:
        'https://github.com/SigmaHQ/sigma/blob/2025-02-03-31-gc72928b43/rules/windows/create_remote_thread/create_remote_thread_win_susp_target_shell_application.yml',
      path:
        'public/windows/create_remote_thread/create_remote_thread_win_susp_target_shell_application.yml',
      sigtype: 'public'
    },
    {
      ruleId: 'a9d4d3fa-8fc0-41bc-80b1-30b9fda79d6f',
      level: 'notice',
      time: '2025-04-14 16:43:37',
      message: 'Sigma match found',
      title: 'Remote Thread Created In Shell Application',
      description:
        'Detects remote thread creation in command shell applications, such as "Cmd.EXE" and "PowerShell.EXE". It is a common technique used by malware, such as IcedID, to inject malicious code and execute it within legitimate processes.',
      match: '\\cmd.exe in TargetImage',
      image: '-',
      author: 'Splunk Research Team',
      modified: '2024-07-29',
      references: [
        {
          label: 'Splunk Research Link',
          href: 'https://research.splunk.com/endpoint/10399c1e-f51e-11eb-b920-acde48001122/'
        },
        {
          label: 'Binary Defense Analysis',
          href: 'https://www.binarydefense.com/resources/blog/icedid-gziploader-analysis/'
        }
      ],
      falsePositives: 'Unknown',
      link:
        'https://github.com/SigmaHQ/sigma/blob/2025-02-03-31-gc72928b43/rules/windows/create_remote_thread/create_remote_thread_win_susp_target_shell_application.yml',
      path:
        'public/windows/create_remote_thread/create_remote_thread_win_susp_target_shell_application.yml',
      sigtype: 'public'
    },
    {
      ruleId: '-',
      level: 'error',
      time: '2025-04-14 16:41:33',
      message: 'Could not read rule file',
      title: '-',
      description: '-',
      match: '-',
      image: '-',
      author: '-',
      modified: '-',
      references: [],
      falsePositives: '-',
      link: '#',
      path: '-',
      sigtype: '-'
    }
  ];

  // Qatorning ochilish/mutatish funksiyasi
  const handleToggle = (row) => {
    // Agar hozirda tanlangan qator ustida bo'lsa, uni yopamiz
    if (expandedRow && expandedRow.ruleId === row.ruleId && expandedRow.time === row.time) {
      setExpandedRow(null);
    } else {
      setExpandedRow(row);
    }
  };

  return (
    <ThemeProvider theme={lightTheme}>
      {/* Agar qator tanlangan bo'lsa, tepadagi kartani (detail card) ko'rsatamiz */}
      {expandedRow && (
        <DetailCard row={expandedRow} onClose={() => setExpandedRow(null)} />
      )}
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Level</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Match</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Author</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <IconButton onClick={() => handleToggle(row)}>
                    {expandedRow &&
                    expandedRow.ruleId === row.ruleId &&
                    expandedRow.time === row.time ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell>{row.level}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.message}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.match}</TableCell>
                <TableCell>{row.image}</TableCell>
                <TableCell>{row.author}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default RuleTable;