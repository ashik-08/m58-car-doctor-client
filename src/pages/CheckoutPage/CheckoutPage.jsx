import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutPage = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;

  const { user } = useContext(AuthContext);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    // console.log(firstName, lastName, phone, email, message);
    const order = {
      firstName,
      lastName,
      email,
      phone,
      service: title,
      service_id: _id,
      price,
      img,
      message,
    };
    console.log(order);

    // send data to server
    try {
      const response = await fetch("http://localhost:5000/services/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      const result = await response.json();
      console.log(result);
      if (result.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Order details added successfully",
          confirmButtonText: "Cool",
        });
        form.reset();
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div>
      <h2>checkout</h2>
      <div className="bg-foot-anchor mt-24 md:mt-32 lg:mt-36 xl:mt-40 px-5 md:px-12 lg:px-20 py-20 rounded-xl">
        <form onSubmit={handleCheckout}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-semibold">First Name</p>
              <input
                className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                type="text"
                name="first_name"
                id=""
                placeholder="First Name"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-semibold">Last Name</p>
              <input
                className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                type="text"
                name="last_name"
                id=""
                placeholder="Last Name"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-semibold">Phone</p>
              <input
                className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                type="number"
                name="phone"
                id=""
                placeholder="Your Phone"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-semibold">Email</p>
              <input
                className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
                required
                defaultValue={user?.email}
              />
            </span>
            <span className="space-y-4 md:col-span-2">
              <p className="text-sub-head text-lg font-semibold">Message</p>
              <textarea
                className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
                required
              ></textarea>
            </span>
            <span className="md:col-span-2">
              <button className="bg-special text-white text-xl font-semibold py-4 w-full rounded-lg">
                <input type="submit" value="Order Confirm" />
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
