import { Typography, CssBaseline, Container, Box, Link } from '@mui/material';
import { Combobox } from "./Combobox";
import { AppToolbar, Toolbar } from "./AppToolbar";
import { ThemeProvider } from "./ThemeProvider";
import CollapsibleTable from './CollapsibleTable';

/**
 * The top-level (root) React component.
 *
 * @see https://reactjs.org/
 * @see https://mui.com/core/
 */
export function MaterialUIPage(): JSX.Element {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Container sx={{ my: 4, ml: 4 }}>
        <Box>
            <AppToolbar/>
            <Toolbar />
        </Box>
        <Box sx={{ 
            my: 2
        }}>

          <Typography variant="body2" sx={{ display: 'inline' }}>
            For more info, go to{' '}
          </Typography>
          <Link
            href="https://mui.com/material-ui/getting-started/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'underline' }}
          >
            MaterialUI Documentation
          </Link>
       </Box>
        <Typography sx={{ mb: 2, my: 2 }} variant="body2">
          Material UI Autocomplete Combobox
        </Typography>

        <Combobox />
        <Box sx={{ 
          marginTop: '1rem'
        }}>
          <CollapsibleTable />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
