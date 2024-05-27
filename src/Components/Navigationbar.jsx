import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link as MuiLink,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const drawerWidth = 280;

const SidebarDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    paddingTop: theme.spacing(2), // Add padding at the top
  },
}));

const Navbar = ({ username }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <AppBar
        position='static'
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
          fontFamily: theme.typography.fontFamily, // Use Material UI font
        }}
      >
        <Toolbar>
          {isSmallScreen && (
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              {openDrawer ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, fontSize: "1.5rem" }}
          >
            {username}
          </Typography>
          {!isSmallScreen && (
            <>
              <MuiLink
                component={Link}
                to='/search-users'
                color='inherit'
                sx={{
                  mr: 2,
                  fontSize: "1.2rem",
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.secondary.main },
                }}
              >
                Search Users
              </MuiLink>
              <MuiLink
                component={Link}
                to='/manage-groups'
                color='inherit'
                sx={{
                  mr: 2,
                  fontSize: "1.2rem",
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.secondary.main },
                }}
              >
                Manage Groups
              </MuiLink>
              <MuiLink
                component={Link}
                to='/your-groups'
                color='inherit'
                sx={{
                  fontSize: "1.2rem",
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.secondary.main },
                }}
              >
                Your Groups
              </MuiLink>
            </>
          )}
        </Toolbar>
      </AppBar>
      {isSmallScreen && (
        <SidebarDrawer
          variant='temporary'
          anchor='left'
          open={openDrawer}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color='inherit'
            aria-label='close drawer'
            onClick={handleDrawerToggle}
            sx={{ position: "absolute", right: 0, top: 0 }}
          >
            <CloseIcon />
          </IconButton>
          <List sx={{ marginTop: theme.spacing(8) }}>
            {["Search Users", "Manage Groups", "Your Groups"].map(
              (text, index) => (
                <ListItem
                  button
                  key={text}
                  component={Link}
                  to={`/${text.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <ListItemText
                    primary={
                      <MuiLink
                        component={Link}
                        to={`/${text.toLowerCase().replace(/\s/g, "-")}`}
                        color='inherit'
                        sx={{
                          fontSize: "1.2rem",
                          textDecoration: "none",
                          "&:hover": { color: theme.palette.secondary.main },
                        }}
                      >
                        {text}
                      </MuiLink>
                    }
                  />
                </ListItem>
              )
            )}
          </List>
        </SidebarDrawer>
      )}
    </>
  );
};

export default Navbar;
