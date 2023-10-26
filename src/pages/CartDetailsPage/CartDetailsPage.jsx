import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import CartDetailsRow from "./CartDetailsRow";

const CartDetailsPage = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  const url = `http://localhost:5000/checkout?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCartItems(data);
      });
  }, [url]);

  return (
    <section className="mt-24 md:mt-32 lg:mt-36 xl:mt-40">
      {user?.email && cartItems.length === 0 ? (
        <div className="text-center py-3.5 md:py-5 xl:py-6">
          <h1 className="text-head text-3xl md:text-4xl lg:text-5xl font-bold">
            Your Cart is Empty!!!
          </h1>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service</th>
                <th>User</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item) => (
                <CartDetailsRow
                  key={item._id}
                  cartItem={item}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                ></CartDetailsRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default CartDetailsPage;
