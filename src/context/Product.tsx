import { produce } from "immer";
import React, { useReducer } from "react";
import { productReducer } from "../reducers/Products";

export const ProductContext = React.createContext({} as any);

const initialState = {
  products: [],
  error: "",
  isLoading: false,
};

const ProductProvider = (props: any) => {
  const [state, dispatch] = useReducer(produce(productReducer), initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
