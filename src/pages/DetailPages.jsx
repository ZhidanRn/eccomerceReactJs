import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchDataByIdCall } from "../services/product.service";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/reducer/cartSlice";

export default function DetailPages() {
  const itemInCart = useSelector((state) => state.cart.items);
  console.log(itemInCart);

  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [qty, setQty] = useState(1);

  const fetchDataId = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get("id");
    try {
      const res = await fetchDataByIdCall(itemId);
      setData(res.data);
    } catch (error) {
      console.error("Error with axios request", error.message);
    }
  };

  useEffect(() => {
    fetchDataId();
  }, []);

  const incrementQty = () => {
    setQty(qty + 1);
  };

  const decrementQty = () => {
    if (qty == 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };

  const onChangeQty = (e) => {
    setQty(e.target.value);
  };

  const onClickAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: qty }));
  };

  return (
    <>
      <Header />
      <main className=" mx-auto overflow-hidden p-6">
        <div
          id="show"
          className="flex-row lg:flex items-center justify-center tracking-wide"
        >
          <div
            id="img"
            className="w-[50%] md:w-[30%] mx-auto lg:mx-0 lg:min-h-screen"
          >
            <img src={data.image} alt="" />
          </div>
          <div className="lg:w-[30%] lg:p-8 lg:min-h-screen">
            <p id="title" className="text-3xl font-semibold ">
              {data.title}
            </p>
            <p id="price" className="text-2xl my-2">
              {data.price}$ USD
            </p>
            <p className="font-light ml-2">Quantity:</p>
            <div className="h-12 flex m-2 border border-black w-max rounded-md">
              <i
                onClick={decrementQty}
                id="decrement"
                className="fa-solid fa-minus mx-4 border-gray-700 flex items-center justify-center cursor-pointer"
              ></i>
              <input
                type="text"
                className="w-14 text-center"
                id="inputQty"
                value={qty}
                onChange={onChangeQty}
              />
              <i
                onClick={incrementQty}
                id="increment"
                className="fa-solid fa-plus mx-4 border-gray-100 flex items-center justify-center cursor-pointer"
              ></i>
            </div>
            <button
              onClick={() => onClickAddToCart(data)}
              className="bg-purple-700 p-2 text-white w-full rounded"
            >
              Add To Chart
            </button>

            <p className="text-xl mt-5">Description:</p>
            <p id="description" className="leading-loose">
              {data.description}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}