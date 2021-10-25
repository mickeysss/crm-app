import React, { useState } from "react";
import styles from "./ProductItem.module.scss";
import { imgs } from "../../../mock/mock";
import EditModal from "../../Modals/EditModal/EditModal";
import SaleModal from "../../Modals/SaleModal/SaleModal";
const ProductItem = ({ product, allProducts, updateAllProducts }) => {
  const [hidden, setHidden] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);

  const onRemoveProduct = (id) => {
    updateAllProducts(allProducts.filter((item) => item.id !== id));
  };

  const onEditProduct = (id) => {
    setHidden(true);
    setIsSellOpen(false);
    const hasId = allProducts.filter((item) => item.id !== id);
    if (hasId) {
      setIsEditOpen(true);
    }
  };

  const onSaleProduct = (product) => {
    setHidden(true);
    setIsEditOpen(false);
    const hasId = allProducts.filter((item) => item.id === product.id);
    if (hasId) {
      setIsSellOpen(true);
    }
  };

  return (
    <>
            
          <div id={product.id} className={styles.productItems}>
          <div className={styles.productItem}>{product.productName}</div>
          <div className={styles.productItem}>{product.store}</div>
          <div className={styles.productItem}>{product.address}</div>
          <div className={styles.productItem}>{product.category}</div>
          <div className={styles.productItem}>{product.creationDate}</div>
          <div className={styles.productItem}>{`$${product.price}`}</div>
          <div className={styles.productItem}>{product.remains}</div>
          <div className={styles.productItem}>{`${product.weight}kg`}</div>
          <div className={styles.productItem}>
            <div onClick={onEditProduct} className={styles.button}>
              <img src={imgs.editIcon} alt="edit" />
            </div>
            <div onClick={onSaleProduct} className={styles.button}>
              <p>Sell</p>
            </div>
            <div
              onClick={() => onRemoveProduct(product.id)}
              className={styles.button}
            >
              <img className={styles.delete} src={imgs.deleteIcon} alt="delete" />
            </div>
          </div>
        </div>
      {isEditOpen && (
        <EditModal
          products={allProducts}
          id={product.id}
          hidden={hidden}
          setHidden={setHidden}
        />
      )}
      {isSellOpen && (
        <SaleModal
          id={product.id}
          productName={product.productName}
          price={product.price}
          store={product.store}
          category={product.category}
          remains={product.remains}
          weight={product.weight}
          hidden={hidden}
          setHidden={setHidden}
        />
      )}
    </>
  );
};

export default ProductItem;
