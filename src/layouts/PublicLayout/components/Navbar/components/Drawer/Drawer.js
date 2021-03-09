import React from "react";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import EmojiPeople from "@material-ui/icons/EmojiPeople";
import PhoneInTalk from "@material-ui/icons/PhoneInTalk";
import AttachMoney from "@material-ui/icons/AttachMoney";
import BrightnessLow from "@material-ui/icons/BrightnessLow";
import DoubleArrow from "@material-ui/icons/DoubleArrow";
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

class DrawerComponent extends React.Component {
  state = {
    left: false
  };

  goTo(route) {
    this.props.history.push(route);
  }

  render() {
    const { classes } = this.props;

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={this.props.toggleDrawerHandler}
        onKeyDown={this.props.toggleDrawerHandler}
      >
        <List>
          <ListItem button onClick={() => { this.goTo('/') }}>
            <img src="/img/cake.png" className="object-contain object-center  w-12 h-12 mr-2" />
            <ListItemText> <p className="text-xl"><span style={{ fontFamily: 'Luckiest Guy' }} className="text-pink-400">Cakes</span><span style={{ fontFamily: 'Luckiest Guy' }}>And</span><span style={{ fontFamily: 'Luckiest Guy' }} className="text-yellow-400">Cards</span></p></ListItemText>
          </ListItem>
          <ListItem button onClick={() => { this.goTo('/') }}>
            <ListItemIcon>
              <MailIcon className="text-yellow-400" />
            </ListItemIcon>
            <ListItemText><span style={{ fontFamily: 'Luckiest Guy' }} className="text-lg text-pink-400">Home</span></ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => { this.goTo('/about') }}>
            <ListItemIcon>
              <EmojiPeople className="text-yellow-400" />
            </ListItemIcon>
            <ListItemText><span style={{ fontFamily: 'Luckiest Guy' }} className="text-lg text-pink-400">About Us</span></ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => { this.goTo('/contact') }}>
            <ListItemIcon>
              <PhoneInTalk className="text-yellow-400" />
            </ListItemIcon>
            <ListItemText><span style={{ fontFamily: 'Luckiest Guy' }} className="text-lg text-pink-400">Contact</span></ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => { this.goTo('/pricing') }}>
            <ListItemIcon>
              <AttachMoney className="text-yellow-400" />
            </ListItemIcon>
            <ListItemText><span style={{ fontFamily: 'Luckiest Guy' }} className="text-lg text-pink-400">Pricing</span></ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <BrightnessLow className="text-yellow-400" />
            </ListItemIcon>
            <ListItemText><span style={{ fontFamily: 'Luckiest Guy' }} className="text-lg text-pink-400">Services</span></ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <DoubleArrow className="text-yellow-400" />
            </ListItemIcon>
            <ListItemText><span style={{ fontFamily: 'Luckiest Guy' }} className="text-lg text-pink-400">Our Work</span></ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText><button style={{ fontFamily: 'Luckiest Guy' }} className="tracking-wider rounded-md bg-yellow-400 py-2 w-40 md:w-72 text-white text-sm">
              Download Now
              </button></ListItemText>
          </ListItem>
        </List>
      </div>
    );

    return (
      <Drawer open={this.props.left} onClose={this.props.toggleDrawerHandler}>
        {sideList("left")}
      </Drawer>
    );
  }
}

export default withRouter(withStyles(styles)(DrawerComponent));
