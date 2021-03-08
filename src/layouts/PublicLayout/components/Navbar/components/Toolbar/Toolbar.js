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
        display: "none",
        color: "#fff",
        marginLeft: 100,
        [theme.breakpoints.up("sm")]: {
            display: "block"
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
        MobileMoreAnchorEl: false
    };

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
                <AppBar color="transparent" position="fixed">
                    <div className="hidden sm:block md:block lg:block 2xl:block ">
                        <div class="rounded-full bg-yellow-400 shadow-xl border-yellow-400 border-1 absolute -top-5 -left-5 h-32 w-32 flex items-center justify-center">
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
                        <Typography className={classes.title} variant="h6">
                            CakesAndCards
                        </Typography>
                        <div className={classes.navItems}>
                            <Grid container spacing={8}>
                                <Grid item>
                                    <Typography className="text-white" item variant="button" display="block" gutterBottom>
                                        Home
                                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className="text-white" variant="button" display="block" gutterBottom>
                                        Services
                                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className="text-white" variant="button" display="block" gutterBottom>
                                        Why We
                                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className="text-white" variant="button" display="block" gutterBottom>
                                        About Us
                                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className="text-white" variant="button" display="block" gutterBottom>
                                        Pricing
                                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className="text-white" variant="button" display="block" gutterBottom>
                                        Contact
                                </Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.grow} />
                        <Button variant="contained" className="w-40 md:w-60 text-sm" color="secondary">
                            Download Now
                        </Button>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </div>
        );
    }
}

export default withStyles(styles)(ToolbarComponent);
