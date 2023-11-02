import Swal from "sweetalert2";
import PropTypes from "prop-types";

const CartDetailsRow = ({ cartItem, cartItems, setCartItems }) => {
  const { _id, img, service, firstName, lastName, email, price, status } =
    cartItem;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // delete cart item from database
        try {
          const response = await fetch(
            `https://m58-car-doctor-server.vercel.app/checkout/${id}`,
            {
              method: "DELETE",
            }
          );
          const result = await response.json();
          console.log(result);
          if (result.deletedCount > 0) {
            Swal.fire("Deleted!", "Item has been deleted.", "success");
            // update/reload/sync the UI
            const remainingCartItems = cartItems.filter(
              (items) => items._id !== id
            );
            setCartItems(remainingCartItems);
          }
        } catch (error) {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      }
    });
  };

  const handleApproval = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // delete cart item from database
        try {
          const response = await fetch(
            `https://m58-car-doctor-server.vercel.app/checkout/${id}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ approved: "true" }),
            }
          );
          const result = await response.json();
          console.log(result);
          if (result.modifiedCount > 0) {
            Swal.fire("Updated!", "Item has been approved.", "success");
            // update state
            const remainingCartItems = cartItems.filter(
              (items) => items._id !== id
            );
            const approved = cartItems.find((item) => item._id === id);
            approved.status = "true";
            const newCart = [approved, ...remainingCartItems];
            setCartItems(newCart);
          }
        } catch (error) {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      }
    });
  };

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-5">
          <div className="avatar">
            <div className="mask w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-lg">
              <img src={img} alt="service-img" />
            </div>
          </div>
          <div>
            <p className="text-sub-head md:text-lg font-semibold">{service}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="text-para md:text-lg font-medium">
          {firstName + " " + lastName}
        </p>
        <br />
        <p className="badge badge-outline">{email}</p>
      </td>
      <td className="text-sub-head md:text-lg font-semibold">${price}</td>
      <th>
        {status === "true" ? (
          <button className="btn-sm bg-transparent text-[#29B170] font-medium capitalize outline outline-1 outline-[#29B170] rounded-lg">
            Approved
          </button>
        ) : (
          <button
            onClick={() => handleApproval(_id)}
            className="btn btn-sm bg-special text-white font-medium capitalize"
          >
            Pending
          </button>
        )}
      </th>
    </tr>
  );
};

CartDetailsRow.propTypes = {
  cartItem: PropTypes.object,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};

export default CartDetailsRow;
