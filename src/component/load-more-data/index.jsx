import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=12&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        const updateProducts = result.products.map((product) => ({
          ...product,
          quntity: 0,
        }));
        setProducts((prevData) => [...prevData, ...updateProducts]);
        setLoading(false);

        if ([...products, ...result.products].length >= 100) {
          setDisableButton(true);
        }
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [count]);

  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  const handleAddButton = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quntity: product.quntity + 1 }
          : product
      )
    );
  };

  const handleLessButton = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quntity > 0
          ? { ...product, quntity: product.quntity - 1 }
          : product
      )
    );
  };

  return (
    <div>
      <div className="header-titel">
        <h1>PROTSUCTS</h1>
      </div>
      <div className="products-cover">
        <div className="load-more-container">
          <div className="product-container">
            {products && products.length
              ? products.map((item, index) => (
                  <div className="product" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p className="count-quntity">{item.quntity}</p>
                    <p className="prices">Price: ${item.price}</p>
                    <div className="buttons">
                      <button
                        className="button-add"
                        onClick={() => handleAddButton(item.id)}
                      >
                        +
                      </button>
                      <button
                        className="button-remove"
                        onClick={() => handleLessButton(item.id)}
                      >
                        -
                      </button>
                    </div>
                    <button className="add-to-bag-button">ADD TO BAG</button>
                  </div>
                ))
              : null}
          </div>
          <div>
            <button
              className="button-container"
              disabled={disableButton}
              onClick={() => setCount(count + 1)}
            >
              Load more products
            </button>
            {disableButton ? <p>You have reached to 100 products</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadMoreData;
