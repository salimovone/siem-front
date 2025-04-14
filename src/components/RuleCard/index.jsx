import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Link,
  Grid,
  ThemeProvider,
  createTheme
} from '@mui/material';

// Light theme (kunduzgi mavzu) ni taʼminlaydigan theme yaratiladi
const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
});

const RuleCard = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Card sx={{ maxWidth: 800, margin: '20px auto', padding: '20px' }}>
        <CardHeader
          title="Remote Thread Created In Shell Application"
          subheader="Rule Info"
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Rule ID:</strong> a9d4d3fa-8fc0-41bc-80b1-30b9fda79d6f
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Description:</strong> Detects remote thread creation in command shell
                applications, such as "Cmd.EXE" and "PowerShell.EXE". It is a common technique
                used by malware, such as IcedID, to inject malicious code and execute it within
                legitimate processes.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Author:</strong> Splunk Research Team
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Modified:</strong> 2024-07-29
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>References:</strong>
              </Typography>
              <ul style={{ marginTop: 0, paddingLeft: '20px' }}>
                <li>
                  <Link
                    href="https://research.splunk.com/endpoint/10399c1e-f51e-11eb-b920-acde48001122/"
                    target="_blank"
                    rel="noopener"
                  >
                    Splunk Research Link
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.binarydefense.com/resources/blog/icedid-gziploader-analysis/"
                    target="_blank"
                    rel="noopener"
                  >
                    Binary Defense Analysis
                  </Link>
                </li>
              </ul>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Rule Level:</strong> medium
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>False Positives:</strong> Unknown
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Link:</strong>{' '}
                <Link
                  href="https://github.com/SigmaHQ/sigma/blob/2025-02-03-31-gc72928b43/rules/windows/create_remote_thread/create_remote_thread_win_susp_target_shell_application.yml"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub Sigma Rule
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Path:</strong>{' '}
                <span>
                  public/windows/create_remote_thread/create_remote_thread_win_susp_target_shell_application.yml
                </span>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Sigtype:</strong> public
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default RuleCard;