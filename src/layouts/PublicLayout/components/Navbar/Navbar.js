import { useEffect, useState, useRef } from "react";
import React from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Drawer, Toolbar } from "./components";
const Navbar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [leftDrawer, setLeftDrawer] = useState(false);

  const toggleDrawer = () => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    setLeftDrawer(false);
  };

  const openDrawer = () => {
    setLeftDrawer(true);
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  return (
    <header>
      <div className="app-navbar">
        <Toolbar openDrawerHandler={() => openDrawer()} />
        <Drawer
          left={leftDrawer}
          toggleDrawerHandler={() => toggleDrawer()}
        />
      </div>
    </header>
  )
};

export default Navbar;
