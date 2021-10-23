import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  user,
  setUser,
  isReg,
  setIsReg,
  isLogin,
  setIsLogin,
  component:Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() =>
        user ? (
          <Component 
            isReg={isReg} 
            setIsReg={setIsReg} 
            isLogin={isLogin}
            setIsLogin={setIsLogin} />
        ) : (
          <Redirect to="/signup" />
        )
      }
    />
  );
};

export default ProtectedRoute;
