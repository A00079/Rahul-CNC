import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

const styles = theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        display: "none",
        color: "white",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
        [theme.breakpoints.down("md")]: {
            display: "block"
        }
    },
    title: {
        display: "block",
        color: "#fff",
        marginLeft: 100,
        cursor: 'pointer',
        fontFamily: 'Luckiest Guy',
        letterSpacing: 2,
        [theme.breakpoints.up("sm")]: {
            display: "block"
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        }
    },
    navItems: {
        display: "block",
        position: "relative",
        flexGrow: 1,
        marginTop: 7,
        marginRight: theme.spacing(1),
        marginLeft: 100,
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing(7),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 200
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
});

class ToolbarComponent extends React.Component {
    state = {
        achorEl: false,
        MobileMoreAnchorEl: false,
        routeLocation: '',
        theposition: 0
    };

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = document.getElementsByTagName("html")[0].scrollTop;
        console.log('scrolled', scrolled);
        this.setState({
            theposition: scrolled,
        })
    }
    componentWillMount() {
        this.setState({ routeLocation: this.props.location.pathname });
    }

    componentWillReceiveProps(props) {
        console.log('this.props.location.pathname', props.location.pathname);
        this.setState({ routeLocation: props.location.pathname });
    }

    handleProfileMenuOpen = event => {
        this.setState({
            achorEl: event.currentTarget
        });
    };

    handleMobileMenuClose = () => {
        this.setState({
            mobileMoreAnchorEl: null
        });
    };

    handleMenuClose = () => {
        this.setState({
            achorEl: null,
            mobileMoreAnchorEl: null
        });
    };

    handleMobileMenuOpen = event => {
        this.setState({
            mobileMoreAnchorEl: event.currentTarget
        });
    };
    goTo(route) {
        this.setState({ routeLocation: route });
        this.props.history.push(route);
    }

    render() {
        const { classes } = this.props;
        const isMenuOpen = Boolean(this.state.anchorEl);
        const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);

        const menuId = "primary-search-account-menu";
        const renderMenu = (
            <Menu
                anchorEl={this.state.anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const mobileMenuId = "primary-search-account-menu-mobile";
        const renderMobileMenu = (
            <Menu
                anchorEl={this.state.mobileMoreAnchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.grow}>
                <AppBar color={this.state.routeLocation !== '/' || this.state.theposition > 500 ? 'secondary' : 'transparent'} position="fixed">
                    <div className="hidden sm:block md:block lg:block 2xl:block ">
                        <div className="rounded-full bg-yellow-400 shadow-xl border-yellow-400 border-1 absolute -top-5 -left-5 h-28 w-28 flex items-center justify-center">
                            <img src="/img/cake.png" className="object-contain object-center  w-16 h-16" />
                        </div>
                    </div>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            aria-label="open drawer"
                            onClick={this.props.openDrawerHandler}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography onClick={() => { this.goTo('/') }} style={{ fontFamily: 'Luckiest Guy' }} className={classes.title}>
                            <div className="text-2xl"><span className="text-pink-400">Cakes</span>And<span className="text-yellow-400">Cards</span></div>
                        </Typography>
                        <div className={classes.navItems}>
                            <Grid container spacing={3}>
                                <Grid item onClick={() => { this.goTo('/') }}>
                                    <Typography style={{ fontFamily: 'Luckiest Guy' }} className={this.state.routeLocation !== '/' ? 'hover:bg-yellow-300 hover:text-pink-400 items-center rounded-md py-1 px-3 bg-transparent transition duration-500 ease-in-out cursor-pointer tracking-widest text-white" item variant="subtitle1' : 'items-center rounded-md py-1 px-3 bg-yellow-300 transition duration-500 ease-in-out cursor-pointer tracking-widest text-pink-400'} variant="subtitle1" display="block" gutterBottom>
                                        Home
                                </Typography>
                                </Grid>
                                <Grid item onClick={() => { this.goTo('/about') }}>
                                    <Typography style={{ fontFamily: 'Luckiest Guy' }} className={this.state.routeLocation == '/about' ? 'rounded-md py-1 px-3 bg-yellow-300 transition duration-500 ease-in-out cursor-pointer tracking-widest text-pink-400" item variant="subtitle1' : 'hover:bg-yellow-300 hover:text-pink-400 rounded-md py-1 px-3 bg-transparent transition duration-500 ease-in-out cursor-pointer tracking-widest text-white'} variant="subtitle1" display="block" gutterBottom>
                                        About Us
                                </Typography>
                                </Grid>
                                <Grid item onClick={() => { this.goTo('/contact') }}>
                                    <Typography style={{ fontFamily: 'Luckiest Guy' }} className={this.state.routeLocation == '/contact' ? 'rounded-md py-1 px-3 bg-yellow-300 transition duration-500 ease-in-out cursor-pointer tracking-widest text-pink-400" item variant="subtitle1' : 'hover:bg-yellow-300 hover:text-pink-400 rounded-md py-1 px-3 bg-transparent transition duration-500 ease-in-out cursor-pointer tracking-widest text-white'} variant="subtitle1" display="block" gutterBottom>
                                        Contact
                                </Typography>
                                </Grid>
                                <Grid item onClick={() => { this.goTo('/pricing') }}>
                                    <Typography style={{ fontFamily: 'Luckiest Guy' }} className={this.state.routeLocation == '/pricing' ? 'rounded-md py-1 px-3 bg-yellow-300 transition duration-500 ease-in-out cursor-pointer tracking-widest text-pink-400" item variant="subtitle1' : 'hover:bg-yellow-300 hover:text-pink-400 rounded-md py-1 px-3 bg-transparent transition duration-500 ease-in-out cursor-pointer tracking-widest text-white'} variant="subtitle1" display="block" gutterBottom>
                                        Pricing
                                </Typography>
                                </Grid>

                                <Grid item onClick={() => { this.goTo('/') }}>
                                    <Link
                                        to="service"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>
                                        <Typography style={{ fontFamily: 'Luckiest Guy' }} className="hover:bg-yellow-300 hover:text-pink-400 rounded-md py-1 px-3 bg-transparent transition duration-500 ease-in-out cursor-pointer tracking-widest text-white" variant="subtitle1" variant="subtitle1" display="block" gutterBottom>
                                            Services
                                </Typography>
                                    </Link>
                                </Grid>


                                <Grid item>
                                    <Link
                                        to="ourwork"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={1200}>
                                        <Typography style={{ fontFamily: 'Luckiest Guy' }} className="hover:bg-yellow-300 hover:text-pink-400 rounded-md py-1 px-3 bg-transparent transition duration-500 ease-in-out cursor-pointer tracking-widest text-white" variant="subtitle1" variant="subtitle1" display="block" gutterBottom>
                                            Our Work
                                </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.grow} />
                        <button style={{ fontFamily: 'Luckiest Guy' }} className="hidden sm:block tracking-wider rounded-md sm:bg-pink-400 py-2 w-40 md:w-72 text-white text-sm">
                            Download Now
                        </button>
                    </Toolbar>
                </AppBar >
                { renderMobileMenu}
                { renderMenu}
            </div >
        );
    }
}

export default withRouter(withStyles(styles)(ToolbarComponent));
