import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../store/action/cartActions"

export const Cart = ({ show }) => {
    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()

    const totalPrice = (items) => {
        let total = 0

        for(const item of items){
            total += item.price
        }

        return total
    }
    const price = totalPrice(cartItems)


    const onClickRemoveFromCart = (index) => {
        dispatch(removeFromCart(index))
    }

    const onClickCheckOut = (e) => {
        if(price === 0){
            alert('Please order something')
        } else {
            alert('Your transaction is succesfully')
        }
    }

    return(
    <>
        <div className={`absolute bg-white w-72 sm:w-96 rounded-md shadow-md right-10 top-14 ${show}`}>
            <ul className=" p-3 ">
            {cartItems.map((item, index) => (
                <li className="flex py-2" key={index}>
                    <div className="w-[15%] mr-4"><img src={item.image} alt="" /></div>
                    <div className="text-md w-[70%]">{item.title}</div>
                    <div className="mx-auto"></div>
                    <div className="ml-5 my-auto flex">
                        <p className="text-md">${item.price}</p>
                        <i onClick={() => onClickRemoveFromCart(index)} className="fa-solid fa-trash ml-3 my-auto cursor-pointer"></i>
                    </div>
                </li>
            ))}
            <div className="flex">

                <button onClick={onClickCheckOut} className="px-2 py-1 mt-2 bg-teal-700 text-white rounded-md">Checkout</button>
                <div className="mx-auto"></div>
                <p className="text-xl mt-2"> ${price.toFixed(2)}</p>
            </div>
            </ul>

        </div>
    </>
    )
}
