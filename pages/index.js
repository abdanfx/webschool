import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@component/styles/Home.module.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import theme from "./theme";
import LoginIcon from "@mui/icons-material/Login";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FilledInput from "@mui/material/FilledInput";

import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

// import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Image from "next/image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });
const pages = ["Profile", "Course", "Gallery", "Blog"];
const settings = ["Login"];

const useStyles = makeStyles((theme) => ({
  grid: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  gridItem: {
    width: "100%",
  },
  textBackground: {
    color: "#f5f10a",
    // background: "linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%)",
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    textShadow: "5px 5px 8px #000",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: "20px 0",
    marginTop: "auto",
    width: "100%",
    height: "80px",
  },
}));

// Carousel Style
const carouselStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    position: "relative",
    margin: "auto",
  },
  prevNext: {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    width: "auto",
    padding: 16,
    marginTop: -22,
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    zIndex: 1,
    "&.prev": {
      left: 0,
      borderRadius: "3px 0 0 3px",
    },
    "&.next": {
      right: 0,
      borderRadius: "3px 0 0 3px",
    },
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  },
  text: {
    color: "#FEBE10",
    fontSize: 15,
    marginBottom: "10px",
    padding: "20px 12px 20px 12px",
    position: "absolute",
    bottom: 8,
    width: "100%",
    textAlign: "center",
  },
  numberText: {
    color: "#f2f2f2",
    fontSize: 12,
    padding: "8px 12px",
    position: "absolute",
    top: 0,
  },
  dot: {
    cursor: "pointer",
    height: 15,
    width: 15,
    margin: "0px 2px 10px 2px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
    transition: "background-color 0.6s ease",
    "&.active, &:hover": {
      backgroundColor: "#717171",
    },
  },

  slideImage: {
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
}));

// Footer
  function Footer() {
    const classes = useStyles();

    return (
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Typography variant="body1" color="textSecondary" align="center">
            &copy; All right reserved
          </Typography>
          <Typography variant="body1" color="textSecondary" align="center">
            Made by Abdan Syakuran
          </Typography>
        </Container>
      </footer>
    );
  };

// Carousel Slideshow Function
function CarouselSlideshow() {
  const classes = carouselStyles();
  const [slideIndex, setSlideIndex] = React.useState(1);

  const handlePlusSlides = (n) => {
    setSlideIndex((prev) => prev + n);
  };

  const handleCurrentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
      return;
    }
    if (n < 1) {
      setSlideIndex(slides.length);
      return;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].className += " active";
    }
  };

  React.useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <div className={classes.root}>
      <div className="slideshow-container">
        <div className="mySlides fade active-slide">
          <div className={classes.numberText}>1 / 3</div>
          <img src="/Math.svg" className={classes.slideImage} />
          <div className={classes.text}>Mathematics</div>
        </div>

        <div className="mySlides fade">
          <div className={classes.numberText}>2 / 3</div>
          <img src="/Programmer.svg" className={classes.slideImage} />
          <div className={classes.text}>Programming</div>
        </div>

        <div className="mySlides fade">
          <div className={classes.numberText}>3 / 3</div>
          <img src="/Astronomy.svg" className={classes.slideImage} />
          <div className={classes.text}>Astronomy</div>
        </div>

        <a
          className={`${classes.prevNext} prev`}
          onClick={() => handlePlusSlides(-1)}
        >
          &#10094;
        </a>
        <a
          className={`${classes.prevNext} next`}
          onClick={() => handlePlusSlides(1)}
        >
          &#10095;
        </a>
      </div>

      <div style={{ textAlign: "center" }}>
        <span
          className={classes.dot}
          onClick={() => handleCurrentSlide(1)}
        ></span>
        <span
          className={classes.dot}
          onClick={() => handleCurrentSlide(2)}
        ></span>
        <span
          className={classes.dot}
          onClick={() => handleCurrentSlide(3)}
        ></span>
      </div>
    </div>
  );
}

// Circle background
function CircleBackground() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <svg
        className="svgCircle"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: "50%", height: "100%" }}
      >
        <defs>
          <linearGradient id="gradientOne" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#84fab0" />
            <stop offset="100%" stop-color="#8fd3f4" />
            <stop offset="100%" stop-color="#fad0c4" />
          </linearGradient>

          <linearGradient id="gradientTwo" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0af5c2" />
            <stop offset="100%" stop-color="#8fd3f4" />
            <stop offset="100%" stop-color="#fad0c4" />
          </linearGradient>

          <linearGradient id="gradientThree" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#28C76F" />
            <stop offset="100%" stop-color="#8fd3f4" />
            <stop offset="100%" stop-color="#fad0c4" />
          </linearGradient>
        </defs>
        <circle cx="17" cy="60" r="18" fill="url(#gradientOne)" />

        <circle cx="42" cy="35" r="20" fill="url(#gradientTwo)" />

        <circle cx="64" cy="68" r="22" fill="url(#gradientThree)" />
      </svg>
    </div>
  );
}

export default function Home() {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Web School</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                FUN School
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                FUN School
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                {isMobile ? (
                  <Tooltip title="Open settings">
                    <LoginIcon onClick={handleOpenUserMenu} sx={{ p: 0 }} />
                  </Tooltip>
                ) : (
                  <Button color="inherit">Login</Button>
                )}
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Box
          sx={{
            flexGrow: 1,
            zIndex: 1,
            position: "relative",
            backgroundImage:
              "linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%)",
          }}
        >
          <Grid
            container
            className={classes.grid}
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 8, md: 9 }}
          >
            <Grid item xs={8} sm={4} md={4.5}>
              <CircleBackground></CircleBackground>
              <Typography
                className={classes.textBackground}
                variant="h3"
                sx={{ paddingLeft: "20px" }}
                style={{ fontFamily: "Montserrat Alternates" }}
                gutterBottom
              >
                Hi, Welcome to our School!
              </Typography>
              <Typography
                className={classes.textBackground}
                variant="h3"
                sx={{ paddingLeft: "20px" }}
                style={{ fontFamily: "Montserrat Alternates" }}
              >
                Learn with FUN!
              </Typography>
            </Grid>

            <Grid item xs={5} sm={5} md={4}>
              <Image
                src="/Software-Developer.svg"
                alt="My Image"
                width={500}
                height={500}
                layout="responsive"
              />
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "30px",
            gap: 5,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0CAFFF",
            textShadow: "5px 5px 8px #000",
          }}
        >
          <Paper elevation={0}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                display: "flex",
                padding: "20px",
                lineHeight: "70px",
                alignItems: "center",
                color: "white",
                backgroundColor: "#0CAFFF",
                borderRight: "4px solid white",
                "@media (max-width: 600px)": {
                  borderRight: "none",
                  borderBottom: "4px solid white",
                },
              }}
            >
              +150K Tutors
            </Typography>
          </Paper>
          <Paper elevation={0}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                display: "flex",
                padding: "20px",
                lineHeight: "70px",
                alignItems: "center",
                color: "white",
                backgroundColor: "#0CAFFF",
                borderRight: "4px solid white",
                textShadow: "5px 5px 8px #000",
                "@media (max-width: 600px)": {
                  borderRight: "none",
                  borderBottom: "4px solid white",
                },
              }}
            >
              100 Instructors
            </Typography>
          </Paper>
          <Paper elevation={0}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                display: "flex",
                padding: "20px",
                lineHeight: "70px",
                alignItems: "center",
                color: "white",
                backgroundColor: "#0CAFFF",
                textShadow: "5px 5px 8px #000",
                "@media (max-width: 600px)": {
                  borderRight: "none",
                  borderBottom: "4px solid white",
                },
              }}
            >
              150K Student
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ flexGrow: 1, justifyContent: "center", paddingTop: "20px" }}>
          <Grid container>
            <Grid>
              <Typography
                variant="h3"
                sx={{ textShadow: "2px 2px 8px #000", color: "#0039a6" }}
                gutterBottom
              >
                Browse Our Course
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid>
              <Card sx={{ maxWidth: 345 }} elevation="5">
                <CardMedia
                  sx={{
                    layout: "responsive",
                    height: 200,
                    width: 300,
                    justifyContent: "center",
                  }}
                  image="/StartupBusiness.png"
                  title="Startup Digital Business"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component="div"
                  >
                    Digital Startup
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid>
              <Card sx={{ maxWidth: 345 }} elevation="5">
                <CardMedia
                  sx={{
                    layout: "responsive",
                    height: 200,
                    width: 300,
                    justifyContent: "center",
                  }}
                  image="/Hacker.png"
                  title="Hacker"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component="div"
                  >
                    Database Security
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid>
              <Card sx={{ maxWidth: 345 }} elevation="5">
                <CardMedia
                  sx={{
                    layout: "responsive",
                    height: 200,
                    width: 300,
                    justifyContent: "center",
                  }}
                  image="/WebDeveloper.png"
                  title="Web Programming"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component="div"
                  >
                    Web Programming
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid>
              <Card sx={{ maxWidth: 345 }} elevation="5">
                <CardMedia
                  sx={{
                    layout: "responsive",
                    height: 200,
                    width: 300,
                    justifyContent: "center",
                  }}
                  image="/MobileProgramming.png"
                  title="Mobile Programming"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component="div"
                  >
                    Mobile Programming
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1, justifyContent: "center", paddingTop: "30px" }}>
          <Grid container>
            <Grid>
              <Typography
                variant="h3"
                sx={{ textShadow: "2px 2px 8px #000", color: "#0039a6" }}
                gutterBottom
              >
                Popular Subjects
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <CarouselSlideshow></CarouselSlideshow>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Typography
              variant="h3"
              sx={{
                paddingTop: "20px",
                textShadow: "2px 2px 8px #000",
                color: "#0039a6",
              }}
              gutterBottom
            >
              Contact Form
            </Typography>
          </Grid>
        </Box>

        <Box
          component="form"
          sx={{
            flexGrow: 1,
            width: "60%",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
            padding: "40px",
          }}
          noValidate
          autoComplete="off"
        >
          <Paper elevation={3} sx={{ padding: "40px" }}>
            <FormControl fullWidth variant="standard">
              <TextField sx={{ marginBottom: "30px" }} fullWidth label="Email" id="Email" />
              
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                defaultValue="Your Message ..."
              />
              <Stack sx={{ paddingTop: "20px" }} direction="row" spacing={2}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Stack>
            </FormControl>
          </Paper>
        </Box>
        <Footer></Footer>
      </main>
    </ThemeProvider>
  );
}
