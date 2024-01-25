import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export const WelcomePage = () => (
  <>
    <Typography variant="h3" component="h1" gutterBottom color="primary">
      Greetings Devs!
    </Typography>

    <Typography variant="h4" component="h2">
      This is a frontend demo for react top libraries.
      <br />
      Enjoy!
    </Typography>
    <br />
    <Box
      width={800} 
      height={400}  
      display="flex" 
      alignItems="center"
      justifyContent="center"
    >
        <img 
          src="/pgd_logo.png"
          alt="PGD Logo" 
          width={350}
          height={350}
        />
      </Box>
  </>
);
