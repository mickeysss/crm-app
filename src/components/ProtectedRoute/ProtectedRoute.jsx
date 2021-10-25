import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  isReg,
  setIsReg,
  isLogin,
  setIsLogin,
  component:Component,
  ...rest
}) => {
  const userInfo = isReg || isLogin
  return (
    <Route
      {...rest}
      render={() =>
        userInfo ? (
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
