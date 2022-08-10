import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOrders, getMyOrdersAsync } from "../Slicers/orderSlice";
import { selectToken } from "../Slicers/loginSlice";
const Orders = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
    dispatch(getMyOrdersAsync());
  }, []);
  const myOrders = useSelector(selectOrders);

  return (
    <div>
      <h1>
        Orders{" "}
        {myOrders.map((order, i) => (
          <div key={i}>
            {order.bookName} ---- {order.author}
          </div>
        ))}
      </h1>
      <button onClick={() => dispatch(getMyOrdersAsync(token))}>
        Get orders
      </button>
    </div>
  );
};

export default Orders;
