import React, { useState } from "react";
import styles from "./ModulePopUp.module.scss";
import close from "../../../assets/logo/close.svg";
import plus from "../../../assets/logo/plus.svg";

const today = new Date();
const presentDate =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

const ModalPopUp = ({ hidden, setHidden, allProducts, handleSubmit }) => {
  const [form, setForm] = useState({
    productName: "",
    store: "",
    category: "",
    remains: "",
    weight: "",
    price: "",
  });

  const onChangeForm = (e, name) => {
    const { value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newProducts = [
      ...allProducts,
      {
        id: Math.floor(Math.random() * 1000),
        productName: form.productName,
        store: form.store,
        category: form.category,
        remains: form.remains,
        weight: form.weight,
        creationDate: presentDate,
        price: form.price,
        address: "Krylatskaya st",
      },
    ];

    localStorage.setItem("products", JSON.stringify(newProducts));
    handleSubmit();
  };

  return (
    <div
      style={{ display: hidden ? "block" : "none" }}
      className={styles.overlay}
    >
      <div
        style={{ display: hidden ? "block" : "none" }}
        className={styles.modalWrapper}
      >
        <div
          onClick={() => setHidden(false)}
          className={styles.close}
          src={close}
          alt="close"
        />
        <div className={styles.modalBox}>
          <h1>Create a product</h1>
          <div className={styles.modalForm}>
            <input
              onChange={(e) => onChangeForm(e, "store")}
              value={form.store}
              placeholder="Store"
              type="text"
            />
            <input
              onChange={(e) => onChangeForm(e, "price")}
              value={form.price}
              placeholder="Price"
              type="number"
            />
            <input
              onChange={(e) => onChangeForm(e, "productName")}
              value={form.productName}
              placeholder="Product Name"
              type="text"
            />
            <input
              onChange={(e) => onChangeForm(e, "category")}
              value={form.category}
              placeholder="Product Category"
              type="text"
            />
            <input
              onChange={(e) => onChangeForm(e, "remains")}
              value={form.remains}
              placeholder="Quanity of goods"
              type="number"
            />
            <input
              onChange={(e) => onChangeForm(e, "weight")}
              value={form.weight}
              placeholder="Weight/Volume of one item"
              type="text"
            />
            <button className={styles.formBtn} onClick={onSubmit}>
              <span>Add a product</span>
              <img src={plus} alt="plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPopUp;
