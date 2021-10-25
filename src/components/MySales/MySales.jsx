import React, { useEffect, useState } from "react";
import styles from "./MySales.module.scss";

import { imgs, products } from "../../mock/mock";

import ModalPopUp from "../Modals/PopUpModal/ModalPopUp";

const MySales = (props) => {
  const [hidden, setHidden] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  
  const handleSubmit = () => {
    if (allProducts && allProducts.length === 0) {
      localStorage.setItem("products", JSON.stringify(products));
      setAllProducts(products);
    }
  };
  useEffect(() => {
    setAllProducts(JSON.parse(localStorage.getItem("products")));
  }, []);

  const openModal = () => {
    setHidden(true);
  };
  const soldProducts = JSON.parse(localStorage.getItem("sale"));
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.headWrapper}>
            <div className={styles.headWrapperTitle}>
              <h1>My sales</h1>
              <p>Sales table</p>
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
          <div>
            <div className={styles.productsListMenus}>
              <div className={styles.productListMenu}>Product Name</div>
              <div className={styles.productListMenu}>Store</div>
              <div className={styles.productListMenu}>Address</div>
              <div className={styles.productListMenu}>Category</div>
              <div className={styles.productListMenu}>Creation Date</div>
              <div className={styles.productListMenu}>Price</div>
              <div className={styles.productListMenu}>Sold items</div>
              <div className={styles.productListMenu}>Weight/Volume</div>
              <div className={styles.productListMenu}>Last Sale</div>
            </div>
            {soldProducts.map((product) => (
              <div id={product.id} className={styles.productItems}>
                <div className={styles.productItem}>{product.productName}</div>
                <div className={styles.productItem}>{product.store}</div>
                <div className={styles.productItem}>{product.address}</div>
                <div className={styles.productItem}>{product.category}</div>
                <div className={styles.productItem}>{product.creationDate}</div>
                <div className={styles.productItem}>{`$${product.price}`}</div>
                <div className={styles.productItem}>{product.numberProducts}</div>
                <div className={styles.productItem}>{`${product.weight}kg`}</div>
                <div className={styles.productItem}>{product.saleDate}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalPopUp      
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        handleSubmit={handleSubmit}
        hidden={hidden}
        setHidden={setHidden}
      />
    </>
  );
};
export default MySales;
