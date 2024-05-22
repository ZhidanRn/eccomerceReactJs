import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../store/reducer/cartSlice";
import { useNavigate } from "react-router-dom";

export const Cart = ({ show }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const totalPrice = (items) => {
    let total = 0;

    for (const item of items) {
      total += item.price * item.quantity;
    }

    return total;
  };
  const price = totalPrice(cartItems);

  const onClickRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  const onClickCheckOut = (e) => {
    if (price === 0) {
      alert("Please order something");
    } else {
      alert("Your transaction is succesfully");
    }
  };

  const onClickIncrement = (index) => {
    dispatch(increaseQuantity(index));
  };
  const onClickDecrement = (index) => {
    dispatch(decreaseQuantity(index));
  };

  return (
    <>
    <div
        className={`fixed w-full md:w-[470px] max-h-screen top-[60px] right-[0] ${show}`}
      >
        <div className=" bg-white overflow-y-scroll h-[calc(100vh-240px)] scrollbar-thin scrollbar-thumb-[#4a5568] scrollbar-track-[#cbd5e0]">
        <ul className="p-8">
          {cartItems.map((item, index) => (
            <li className="flex pt-5 pb-8 border-b border-gray-200" key={index}>
              <div className="w-[17%] mr-4">
                <img src={item.image} alt="" />
              </div>
              <div className="flex flex-col w-full ">
                <div className="flex text-md">
                  <p className="font-semibold">{item.title}</p>
                  <div className="mx-auto"></div>
                  <p className="font-extrabold">${item.price}</p>
                </div>
                <div className=" flex m-2 border border-blue-200 w-max" >
                  <div
                    id="decrement"
                    className="mx-1.5  cursor-pointer font-bold"
                    onClick={() => onClickDecrement(index)}
                  >
                  -
                  </div>
                  <input
                    type="text"
                    className="w-7 text-center border"
                    id="inputQty"
                    value={item.quantity}
                  />
                  <div
                    id="increment"
                    className="mx-1  cursor-pointer font-bold"
                    onClick={() => onClickIncrement(index)}
                  >
                    +
                  </div>
                </div>
                <div className="flex justify-end">
                  <p
                    className="text-red-500 cursor-pointer"
                    onClick={() => onClickRemoveFromCart(index)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </p>
                </div>
              </div>
            </li>
          ))}
          
        </ul>
        </div>
        <div className="my-auto"></div>
        <hr />
          <div className="p-8">
            <div className="flex my-5 text-xl mt-2 font-extrabold">
              <p>TOTAL</p>
              <div className="mx-auto"></div>
              <p>${price.toFixed(2)}</p>
            </div>
            <button onClick={onClickCheckOut} type="submit" className="border text-white text-md uppercase font-bold tracking-[0.18em] bg-[#213775] w-full p-3 relative overflow-hidden transition-all duration-200 ease-in-out hover:text-[#213775] hover:scale-100 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f6ddda] before:to-[#f6ddda] before:transition-all before:duration-200 before:ease-in-out before:z-[-1] hover:before:left-0  ">
              CONTINUE TO ORDER
            </button>
          </div>
      </div>
    </>
  );
};