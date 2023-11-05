import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products"
    }),
    getProduct: builder.query({
      query: (productId) => `products/${productId}`
    }),
    updatePrice: builder.mutation({
      query: ({ productId, newPrice }) => ({
        url: `products/${productId}`,
        method: "PUT",
        body: { price: newPrice }
      })
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products", // 定义用于添加商品的 API 端点
        method: "POST", // 使用 HTTP POST 请求来添加商品
        body: newProduct // 发送包含新商品信息的数据
      })
    })
  })
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useUpdatePriceMutation,
  useAddProductMutation
} = apiSlice;
