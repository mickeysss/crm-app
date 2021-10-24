import React from "react";

import styles from "./SignUp.module.scss";

import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { validate } from "../../../validate/validate";

const SignUp = ({isReg,setIsReg}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validate,
    onSubmit: (values) => {
      localStorage.setItem("CURRENT USER", JSON.stringify(values));
      setIsReg(localStorage.setItem("isReg",JSON.stringify(true)))
    },
  });
  return (
    <>
    {isReg && <Redirect to="/main-page"/>}
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.modalBox}>
          <h1>Create an account</h1>
          <form className={styles.formContainer}>
            <div className={styles.formColumn}>
              <div className={styles.inputBlock}>
              <label htmlFor="firstName" className={styles.formItem}>
                First name
                <input
                  id="firstName"
                  name="firstName"
                  className={styles.formInput}
                  placeholder={formik.errors.firstName }
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
              </label>
              {formik.errors.firstName ? <div className={styles.errors}>{formik.errors.firstName}</div> : null}
              </div>
              <div>
              <label htmlFor="lastName" className={styles.formItem}>
                Last name
                <input
                  id="lastName"
                  name="lastName"
                  className={styles.formInput}
                  placeholder="Last name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              </label>
              {formik.errors.lastName ? <div className={styles.errors}>{formik.errors.lastName}</div> : null}
              </div>
            </div>
            <div className={styles.inputBlock}>
            <label htmlFor="company" className={styles.formItem}>
              Company name
              <input
                id="company"
                name="company"
                className={styles.formInput}
                placeholder="Company Name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.companyName}
              />
            </label>
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="email" className={styles.formItem}>
                Email
                <input
                  id="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="Email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />            
              </label>
              {formik.errors.email ? <div className={styles.errors}>{formik.errors.email}</div> : null}
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="password" className={styles.formItem}>
                Enter Password
                <input
                  id="password"
                  name="password"
                  className={styles.formInput}
                  placeholder="Password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </label>
              {formik.errors.password ? <div className={styles.errors}>{formik.errors.password}</div> : null}
            </div>
            <div className={styles.inputBlock}>
            <label htmlFor="repeatPassword" className={styles.formItem}>
              Repeat Password
              <input
                id="repeatPassword"
                name="repeatPassword"
                className={styles.formInput}
                placeholder="Repeat password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
              />
            </label>
            {formik.errors.password ? <div className={styles.errors}>{formik.errors.password}</div> : null}
            </div>
            <button onClick={formik.handleSubmit} className={styles.formBtn}>
              Create an account
            </button>
          </form>
          <div className={styles.formLink}>
          <span>Already have an account?</span>
          <NavLink to={"signin"}><span>Log in</span></NavLink>
          </div>
        </div>
      </div>
      <div className={styles.heroWrapper}></div>
    </div>
    </>
  );
};

export default SignUp;
