import { useMemo } from "react";
import { useGetAllProductsQuery } from "../api/apiSlice";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";

export const ProductsList = () => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error
  } = useGetAllProductsQuery();

  const sortedList = useMemo(() => {
    if (!data || !Array.isArray(data)) {
      return []; // 返回一个空数组或者其他默认值
    }

    const sortedList = data.slice();
    sortedList.sort((a, b) => a.price - b.price);
    return sortedList; // 返回排序后的列表
  }, [data]);

  let content;
  if (isLoading) {
    content = <div>Loading....</div>;
  } else if (isSuccess) {
    content = (
      <div>
        {sortedList.map((item) => {
          return (
            <div key={item.id} style={{ padding: ".8rem" }}>
              <Link to={`/product/${item.id}`}>
                {item.title} - {item.price}
              </Link>
            </div>
          );
        })}
      </div>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div>
      <AddProduct />
      {content}
    </div> // 修复此处的分号问题
  );
};

export default ProductsList;
