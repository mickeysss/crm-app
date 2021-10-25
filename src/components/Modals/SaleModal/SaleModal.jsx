import React, { useEffect, useState } from "react";

import styles from "./SaleModal.module.scss";

import { imgs } from "../../../mock/mock";

const SaleModal = ({
  hidden,
  setHidden,
  id,
  store,
  price,
  remains,
  weight,
  productName,
  category,
}) => {
  const [saleProducts, setSaleProducts] = useState([]);
  const [form, setForm] = useState({
    numberProducts: "",
    saleDate: "",
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
    const today = new Date();
    const presentDate =
    today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

    const userInfo = JSON.parse(localStorage.getItem("CURRENT USER"))
    
      const soldItems = [
      ...saleProducts,
      {
        id: id,
        store: store,
        productName: productName,
        category: category,
        price: price,
        remains: remains,
        weight: weight,
        creationDate: presentDate,
        address: userInfo.address || 'No configured address',
        numberProducts: form.numberProducts,
        saleDate: form.saleDate,
    }]
    localStorage.setItem("sale", JSON.stringify(soldItems));
    setSaleProducts(soldItems);
    setHidden(false)
  };

  return (
    <>
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
            <h1>Sell product</h1>

            <div id={id} className={styles.modalForm}>
              <input
                placeholder="Number of products"
                type="number"
                onChange={(e) => onChangeForm(e, "numberProducts")}
                value={form.numberProducts}
              />
              <input
                placeholder="Date of sale"
                type="date"
                onChange={(e) => onChangeForm(e, "saleDate")}
                value={form.saleDate}
              />
              <button onClick={onSubmit} className={styles.formBtn}>
                Sell product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SaleModal;
