import {
  Typography,
  Toolbar,
  AppBar,
  AppBarProps,
  IconButton,
  useTheme,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useToggleTheme } from "./Theme";

type AppToolbarProps = Omit<AppBarProps, "children">;

/**
 * Application toolbar.
 *
 * @see https://mui.com/components/app-bar/
 */
export function AppToolbar(props: AppToolbarProps): JSX.Element {
  const toggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <AppBar {...props}
      style={{
        margin: '5rem 0 0 20rem',
        width: '545px',
        left: '10rem',
        position: 'absolute'
      }}
    >
      <Toolbar
      >
        <Typography sx={{ fontSize: "1.5rem", flexGrow: 1 }} variant="h3">
          Change to Dark Mode
        </Typography>

        <IconButton color="inherit" onClick={toggleTheme}>
          {theme.palette.mode === "light" ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export { Toolbar };
