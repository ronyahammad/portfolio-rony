import React,{useEffect,useState} from 'react'
import {
  Menu,
  IconButton,
  MenuItem,
  makeStyles,
  Button,
  AppBar,
  Typography,
  useScrollTrigger,
  withStyles,
  Fab,
  Zoom,
  Toolbar,
  Slide,
  Collapse,
} from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CarouselHome from "../pageComponent/CarouselHome";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from "react-scroll";
import { green  } from '@material-ui/core/colors';


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[300],
    "&:hover": {
      backgroundColor: green[800],
    },
    opacity: "0.7",
  },
}))(Button);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "80%",
  },
  appbar: {
    background: "transparent",
    boxShadow: "none",
    transition: ".5s",
  },
  appbarTitle: {
    flexGrow: "1",
    color: "#760B43",
    fontWeight: "fontWeightBold",
    fontSize: "h4.fontSize",
  },
  colorFont: {
    color: "#3E471C",
    opacity: "100%",
  },
  toolbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  goDown: {
    color: "#880e4f",
    align: "center",
    fontSize: "3rem",
  },
  menuButton: {
    margin: theme.spacing(1),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  scrollingTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function ScrollTop({ children, window }) {
  const classes = useStyles();

  const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.scrollingTop}
      >
        {children}
      </div>
    </Zoom>
  );
}
function HideOnScroll({ children, window }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


export default function Header({trigger}) {
   const classes=useStyles()
   const [checked, setChecked] = useState(false);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

   const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
  const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
   useEffect(() => {
     setChecked(true);
   }, []);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem style={{ backgroundColor: "#fce4ec" }}>
        <Button
          variant="contained"
          color="inherit"
          className={classes.menuButton}
        >
          Home
        </Button>
      </MenuItem>
      <MenuItem style={{ backgroundColor: "#fce4ec" }}>
        <Scroll to="about-page" smooth={true}>
          <Button
            variant="contained"
            color="inherit"
            className={classes.menuButton}
          >
            About Me
          </Button>
        </Scroll>
      </MenuItem>
      <MenuItem style={{ backgroundColor: "#fce4ec" }}>
        <Scroll to="projects-page" smooth={true}>
          <Button
            variant="contained"
            color="inherit"
            className={classes.menuButton}
          >
            Projects
          </Button>
        </Scroll>
      </MenuItem>
      <MenuItem style={{ backgroundColor: "#fce4ec" }}>
        <Scroll to="contact-page" smooth={true}>
          <Button
            variant="contained"
            color="inherit"
            className={classes.menuButton}
          >
            Contact Me
          </Button>
        </Scroll>
      </MenuItem>
    </Menu>
  );
    

return (
  <div className={classes.root} id="header">
    <HideOnScroll>
      <AppBar
        id="header"
        elevation={trigger ? 24 : 0}
        style={{
          backgroundColor: trigger ? "#fff" : "transparent",
          boxShadow: trigger
            ? "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important"
            : undefined,
        }}
      >
        <Toolbar className={classes.toolbarWrapper}>
          <Typography className={classes.appbarTitle}>
            <h1 style={{ fontFamily: "Pacifico" }}>
              Ali <span className={classes.colorFont}>Ahammad...</span>{" "}
            </h1>
          </Typography>
          <div style={{ flexGrow: "1" }} />
          <div className={classes.sectionDesktop}>
            <ColorButton
              variant="contained"
              color="inherit"
              className={classes.menuButton}
            >
              Home
              
            </ColorButton>
            <Scroll to="about-page" smooth={true}>
              <ColorButton
                variant="contained"
                color="inherit"
                className={classes.menuButton}
              >
                About Me
              </ColorButton>
            </Scroll>
            <Scroll to="projects-page" smooth={true}>
              <ColorButton
                variant="contained"
                color="inherit"
                className={classes.menuButton}
              >
                Projects
              </ColorButton>
            </Scroll>
            <Scroll to="contact-page" smooth={true}>
              <ColorButton
                variant="contained"
                color="inherit"
                className={classes.menuButton}
              >
                Contact Me
              </ColorButton>
            </Scroll>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="#4a148c"
            >
              <SortIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
    {renderMobileMenu}

    <Toolbar id="back-to-top-anchor" />
    <Collapse
      in={checked}
      {...(checked ? { timeout: 1000 } : {})}
      collapsedHeight={50}
    >
    <CarouselHome style={{width:'100%',justifyContent:'left',align:'center'}}/>
        <ScrollTop>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <div style={{ marginLeft: "50%" }}>
          <Scroll to="about-page" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      
    </Collapse>
  </div>
);
}
