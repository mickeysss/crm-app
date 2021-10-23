import React, { useMemo, useState } from "react";

import styles from "./EditModal.module.scss";
import { imgs } from "../../../mock/mock";

const today = new Date();
const presentDate =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

const EditModal = ({ hidden, setHidden, id, products }) => {
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

  const onSubmit = () => {
    const newProducts = products.map((pr) => {
      if (pr.id === form.id) {
        return {
          id: form.id,
          productName: form.productName,
          store: form.store,
          category: form.category,
          remains: form.remains,
          weight: form.weight,
          creationDate: presentDate,
          price: form.price,
          address: "",
        };
      }
      return pr;
    });

    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  const newProduct = useMemo(() => {
    return products.filter((pr) => pr.id === id)[0];
  }, [products]);

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
          src={imgs.close}
          alt="closeIcon"
        />
        <div className={styles.modalBox}>
          <h1>Editing a product</h1>
          <div id={id} className={styles.modalForm}>
            <input
              defaultValue={newProduct.store}
              placeholder="Store"
              type="text"
            />
            <input
              defaultValue={newProduct.price}
              placeholder="Price"
              onChange={(e) => onChangeForm(e, "price")}
              type="number"
            />
            <input
              defaultValue={newProduct.productName}
              placeholder="Product Name"
              onChange={(e) => onChangeForm(e, "productName")}
              type="text"
            />

            <input
              defaultValue={newProduct.category}
              placeholder="Product Category"
              onChange={(e) => onChangeForm(e, "category")}
              type="text"
            />
            <input
              defaultValue={newProduct.remains}
              placeholder="Quanity of goods"
              onChange={(e) => onChangeForm(e, "remains")}
              type="number"
            />
            <input
              defaultValue={newProduct.weight}
              placeholder="Weight/Volume of one item"
              onChange={(e) => onChangeForm(e, "weight")}
              type="text"
            />
            <button onClick={onSubmit} className={styles.formBtn}>
              <span>Save changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
