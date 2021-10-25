import React from "react";

import styles from "./SignIn.module.scss";

import { Redirect } from "react-router-dom";

import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
const SignIn = ({isLogin,setIsLogin}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
    const users = JSON.parse(localStorage.getItem("CURRENT USER"));
    const checkUser = users.email === values.email && users.password === values.password;
      if(checkUser){
        setIsLogin(true)
      }
    },
  });

  if(isLogin) {
    return <Redirect to='/main-page'/>
  }
  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.modalBox}>
          <h1>Sign in</h1>
            <form className={styles.modalForm}>
              <label htmlFor="email" className={styles.formItem}>Email</label>
              <input
                id="email"
                name="email"
                className={styles.formInput}
                placeholder="Email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />       
                {formik.errors.email && formik.touched.email && formik.errors.email}
                <label htmlFor="password" className={styles.formItem}>Password</label>
                <input
                id="password"
                name="password"
                className={styles.formInput}
                placeholder="Enter password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && formik.errors.password}
                <button onClick={formik.handleSubmit} className={styles.formBtn}>Sign in</button>
              </form>
          <NavLink to={"signup"}>
            <p>Forgot a password</p>
          </NavLink>
        </div>
      </div>
      <div className={styles.heroWrapper}></div>
    </div>
    </>
  );
};
export default SignIn;
