import "./styles/GlobalStylesIndex.css";
import { Switch, Route } from "react-router";
import { routes } from "./route/route.js";

import NavBar from "./components/navbar/navbar.style"


function BlockFlix() {
  return (
    <>
      <Switch>        
        {
          routes.map((route) => {
            const Component = route.component;
            return (
              <Route key={route.path} path={route.path}>
                {route.path === "/" ? "" : <NavBar /> }
                <Component />
              </Route>
            )
          })
        }
      </Switch>
    </>
  );
}

export default BlockFlix;
