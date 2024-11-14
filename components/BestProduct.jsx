import React, { useState, useEffect } from "react";
import { fetchApi } from "@/utils/axiosInstance";
import likeButton from "@/images/etc/likeButton.svg";
import nonImage from "@/images/etc/nonImage.svg";
import styles from "@/components/css/BestProduct.module.css";
import Image from "next/image";

const BestProduct = () => {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const products = await fetchProducts();
        const filteredProducts = sortProducts(products);
        const productsWithImages = filteredProducts.map((product) => ({
          ...product,
          imageUrl: getImageUrl(product.images),
        }));
        setBestProducts(productsWithImages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBestProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetchApi("/products");
    if (response && response.list) {
      return response.list.map((product) => ({
        ...product,
        images: product.images || null,
      }));
    }
    return [];
  };

  const sortProducts = (products) => {
    return products
      .sort((a, b) => b.favoriteCount - a.favoriteCount)
      .slice(0, 4);
  };

  const getImageUrl = (images) => {
    return Array.isArray(images) && images.length > 0 ? images[0] : null;
  };

  return (
    <div className={styles.product_wrapper}>
      <div className={styles.best_product}>
        <div className={styles.best_product_title}>
          <h2>베스트 상품</h2>
        </div>
        <div className={styles.product_list}>
          {bestProducts.map((product) => (
            <div key={product.id} className={styles.product_item}>
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={200}
                  height={200}
                />
              ) : (
                <Image
                  src={nonImage}
                  alt="이미지 없음"
                  width={200}
                  height={200}
                />
              )}
              <div className={styles.product_content}>
                <h3>{product.name}</h3>
                <p>{product.price.toLocaleString()}원</p>
                <div className={styles.like_wrapper}>
                  <Image
                    src={likeButton}
                    alt="좋아요 버튼"
                    width={20}
                    height={20}
                  />
                  <p>{product.favoriteCount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
