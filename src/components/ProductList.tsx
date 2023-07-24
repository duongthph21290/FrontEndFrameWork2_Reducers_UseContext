import axios from "axios";
import { ProductContext } from "../context/Product";
import { useContext, useEffect } from "react";

const ProductList = () => {
  const { state, dispatch } = useContext(ProductContext);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      dispatch({ type: "product/fetch", payload: data });
    })();
  }, []);

  const addProduct = async (product: any) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/products",
        product
      );
      dispatch({ type: "product/add", payload: data });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const removeProduct = async (id: any) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      dispatch({ type: "product/remove", payload: id });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const updateProduct = async (product: any) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3000/products/${product.id}`,
        product
      );
      dispatch({ type: "product/update", payload: data });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div>
      {state.products.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button
        onClick={() => addProduct({ name: "Thêm sản phẩm mới thành công" })}
      >
        Thêm sản phẩm
      </button>
      <button onClick={() => removeProduct(4)}>Xóa sản phẩm </button>
      <button
        onClick={() => updateProduct({ name: "Cập nhật thành công", id: 8 })}
      >
        Cập nhật sản phẩm
      </button>
    </div>
  );
};

export default ProductList;
