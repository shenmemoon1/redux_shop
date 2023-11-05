import { useState } from "react";
import { useAddProductMutation } from "../api/apiSlice";

const AddProduct = () => {
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");

  const titleHandle = (e) => setTitle(e.target.value);
  const priceHandle = (e) => setPrice(e.target.value);
  const [addProduct] = useAddProductMutation();

  const handleAdd = async () => {
    // 创建包含新商品信息的对象
    const newProductData = {
      title: title,
      price: parseFloat(price)
    };

    try {
      // 调用添加操作，传递包含新商品信息的对象
      const result = await addProduct(newProductData).unwrap();

      console.log("商品已成功添加", result);
    } catch (error) {
      console.error("商品添加失败", error);
    }
  };

  return (
    <div>
      <label htmlFor="title">title</label>
      <input
        style={{ padding: ".3rem" }}
        id="title"
        type="text"
        value={title}
        onChange={titleHandle}
      />
      <hr />
      <label htmlFor="price">price</label>
      <input
        style={{ padding: ".3rem" }}
        id="price"
        type="text"
        value={price}
        onChange={priceHandle}
      />
      <br />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddProduct;
