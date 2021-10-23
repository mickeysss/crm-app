import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./PersonalCabinet.module.scss";
import { imgs } from "../../mock/mock";
import ModalPopUp from "../Modals/PopUpModal/ModalPopUp";

const PersonalCabinet = (props) => {
  const [hidden, setHidden] = useState(false);
  const { register, handleSubmit } = useForm();
  const openModal = () => {
    setHidden(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.headWrapper}>
            <div className={styles.headWrapperTitle}>
              <h1>Personal Cabinet</h1>
              <p>Information about your account</p>
            </div>
            <div onClick={openModal} className={styles.wrapperButton}>
              <img
                src={imgs.createIcon}
                className={styles.buttonLogo}
                alt={"createIcon"}
              />
              <p className={styles.buttonText}>Create a product</p>
            </div>
          </div>
          <hr />
          <div>
            <form className={styles.formContainer} action="submit">
              <div className={styles.formColumn}>
                <label htmlFor="firstName" className={styles.formItem}>
                  First name
                  <input
                    {...register("firstName")}
                    className={styles.formInput}
                    placeholder="Enter First name"
                    type="text"
                  />
                </label>
                <label htmlFor="lastName" className={styles.formItem}>
                  Last name
                  <input
                    {...register("lastName")}
                    className={styles.formInput}
                    placeholder="Enter Last name"
                    type="text"
                  />
                </label>
              </div>
              <div className={styles.formColumn}>
                <label htmlFor="company" className={styles.formItem}>
                  Company name
                  <input
                    {...register("company")}
                    className={styles.formInput}
                    placeholder="Enter Company Name"
                    type="text"
                  />
                </label>
                <label className={styles.formItem}>
                  Company email
                  <input
                    {...register("category")}
                    className={styles.formInput}
                    placeholder="Company email"
                    type="email"
                  />
                </label>
              </div>
              <div className={styles.formColumn}>
                <label htmlFor="address" className={styles.formItem}>
                  Address
                  <input
                    {...register("address")}
                    className={styles.formInput}
                    placeholder="Enter address"
                    type="text"
                  />
                </label>
              </div>
              <div className={styles.formColumn}>
                <label htmlFor="oldPassword" className={styles.formItem}>
                  Enter Old Password
                  <input
                    {...register("oldPassword")}
                    className={styles.formInput}
                    placeholder="Enter password"
                    type="password"
                  />
                </label>
                <label htmlFor="newPassword" className={styles.formItem}>
                  Enter New Password
                  <input
                    {...register("newPassword")}
                    className={styles.formInput}
                    placeholder="Enter a new password"
                    type="password"
                  />
                </label>
              </div>
              <div className={styles.formColumn}>
                <button className={styles.formBtn}>Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ModalPopUp hidden={hidden} setHidden={setHidden} />
    </>
  );
};

export default PersonalCabinet;
