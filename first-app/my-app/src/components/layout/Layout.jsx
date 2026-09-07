import { NavLink } from "react-router-dom";
import classes from "./Layout.module.css";

function Layout(props) {
  const pathname = window.location.pathname;
  return (
    <>
      <div className={classes.app}>
        <nav className={classes.nav}>
          <div className={classes.brand}>
            <h3>Brand Name</h3>
          </div>

          {/* NavLink */}
          <div className={classes.menu}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={
                    pathname === "/" ? classes.navLinkActive : classes.navItem
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={
                    pathname === "/about"
                      ? classes.navLinkActive
                      : classes.navItem
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/help"
                  className={
                    pathname === "/help"
                      ? classes.navLinkActive
                      : classes.navItem
                  }
                >
                  Help
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/clock"
                  className={
                    pathname === "/clock"
                      ? classes.navLinkActive
                      : classes.navItem
                  }
                >
                  Clock
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/task"
                  className={
                    pathname === "/task"
                      ? classes.navLinkActive
                      : classes.navItem
                  }
                >
                  Task
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <main className={classes.main}>{props.children}</main>
        <footer className={classes.footer}>
          <h3>Footer</h3>
          <ul>
            <li>Footer Link One</li>
            <li>Footer Link Two</li>
            <li>Footer Link Three</li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Layout;
