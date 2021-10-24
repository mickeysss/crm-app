import { useEffect, useState } from "react";

import styles from "./App.module.scss";

import { Switch, Route } from "react-router-dom";
import { routes } from "./components/routes/routes";

import SideBar from "./components/Sidebar/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {  
const [isReg,setIsReg] = useState(false)
const [isLogin,setIsLogin] = useState(false)


useEffect(() => JSON.stringify(localStorage.setItem("isReg", [isReg])))
useEffect(() => JSON.stringify(localStorage.setItem("isLogin", [isLogin]))) 

  return (
    <div className={styles.App}>
        <SideBar handleLogout={handleLogout}  />
        <Switch>
        {routes.map((route, index) =>
          route.withAuth ? ( 
            <ProtectedRoute
              path={route.path}
              key={index}
              component={route.component}
              exact
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              isReg={isReg}
              setIsReg={setIsReg}
            />
          ) : (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              routes={route.exact}
              render={() => (
              <route.component
                isReg={isReg}
                setIsReg={setIsReg}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
              />
              )}
            />
          )
        )}
      </Switch>
    </div>
  );
}

export default App;
