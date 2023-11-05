import { useParams, Link } from "react-router-dom";
import { useGetProductQuery, useUpdatePriceMutation } from "../api/apiSlice";
import { useState } from "react";

const SinglePage = () => {
  const { id } = useParams();
  const { data } = useGetProductQuery(id);
  const [newPrice, setNewPrice] = useState("");

  const [updatePrice] = useUpdatePriceMutation(); // 使用 useUpdatePriceMutation 钩子

  const priceHandle = (value) => {
    setNewPrice(value);
    console.log(value);
  };

  const handleUpdatePrice = async () => {
    try {
      const result = await updatePrice({
        productId: id,
        newPrice: newPrice
      });
      console.log("Price update successful", result);
      // 可以添加其他处理成功的逻辑
    } catch (error) {
      console.error("Price update error", error);
      // 可以添加处理错误的逻辑
    }
  };

  return (
    <div>
      <h1>Product Detail</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <img
            style={{ width: "20rem" }}
            src={data.image}
            alt={data.category}
          />
          <p>Price: {data.price}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <label htmlFor="price">Price:</label>
      <input
        id="price"
        value={newPrice}
        type="text"
        onChange={(e) => priceHandle(e.target.value)}
      />
      <button onClick={handleUpdatePrice}>Update Price</button>

      <div>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default SinglePage;
