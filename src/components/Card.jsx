import { Link } from "react-router-dom"

export default function Card(props){
    const data = props.data
    return(
        <div className="w-80 sm:w-56 sm:h-80 bg-white rounded-md overflow-hidden shadow-md p-8 mx-auto">
            <Link to={`detail?id=${data.id}`}>
                <div className="h-30 ">
                    <img src={data.image} alt="${product.title}" className="w-full sm:h-48 object-scale-down transition-transform hover:scale-110" />
                </div>
                <div className="pt-4">
                    <h3 className="text-md tracking-wider font-semibold mb-2 hover:underline truncate">{data.title}</h3>
           
                    <p className="font-bold ">${data.price} USD</p>
                </div>
            </Link>
        </div>
    )
}