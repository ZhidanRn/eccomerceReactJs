import { useState } from "react"
import { Link } from "react-router-dom"
import { Cart } from "./Cart"

export default function Header({ categoryVal, searchRes, }){
    const [searchBar, setSearchBar] = useState('hidden')
    const [searchVal, setSearchVal] = useState('')
    const [menuList, setMenuList] = useState('hidden')
    const [viewCart, setViewCart] = useState('hidden')
    const [showCategory, setShowCategory] = useState({
        arrow: '',
        list: 'hidden'
    })
    const [listCategory, setListCategory] = useState([
        {
            label: "All Product",
            value: "all product",
        },
        {
            label: "Men's Clothing",
            value: "men's clothing",
        },
        {
            label: "Women's Clothing",
            value: "women's clothing",
        },
        {
            label: "Jewelery",
            value: "jewelery",
        },
        {
            label: "Electronics",
            value: "electronics",
        },
    ])

    const openSearchBar = () => {
        setSearchBar('')
    }

    const closeSearchBar = () => {
        setSearchBar('hidden')
    }

    const showMenu = () => {
        if(menuList == ''){
            setMenuList('hidden')
        } else {
            setMenuList('')
        }
    }

    const onClickArrow = () => {
        if(showCategory.list == ''){
            setShowCategory({arrow:'',list:'hidden'})
        }else {
            setShowCategory({arrow:'rotate-180',list:''})
        }
    }

    const onClickCategory = (category) => {
            categoryVal(category.value)

    }

    const onClickSearch = () => {
        searchRes(searchVal)
        console.log(searchVal)
    }

    const onChangeSearch = (e) => {
        setSearchVal(e.target.value.toString())
    }

    const onClickCart = () => {
        if(viewCart == ''){
            setViewCart('hidden')
        }else {
            setViewCart('')
        }
    }

    return(
        <>
            <header>


                <nav className="fixed border flex flex-row w-full shadow-sm p-2 items-center justify-center bg-white">
                    <div className="relative inline-block text-left px-6">
                        <button onClick={showMenu} type="button" className="inline-flex items-center justify-center px-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-100 active:border-gray-200">
                            <i className="fa-solid fa-bars text-2xl "></i>
                        </button>

                        {/* Menu List */}
                        <ul id="listMenu" className={`absolute border p-5 mt-3 w-52 bg-white ${menuList}`}>
                            <li>
                                <a href="" className="block p-2 text-gray-700 hover:bg-gray-100">About Us</a>
                            </li>
                            <li>
                                <a href="" className="block p-2 text-gray-700 hover:bg-gray-100">Contact Us</a>
                            </li>
                            <li>
                                <Link to={'login'}>
                                    <p className="block py-2 hover:bg-gray-100 hover:border-black hover:text-black mt-5 border text-center bg-red-500 text-white rounded-md cursor-pointer">Logout</p>
                                </Link>
                            </li>
                        </ul>

                    </div>

                    <div className="pr-4"><Link to={"/"}>Home</Link></div>

                    <div className="pr-1">Category </div>
                    <div>
                    <i onClick={onClickArrow} id="arrow" className={`fa-solid fa-chevron-down cursor-pointer transform transition-transform duration-300 ${showCategory.arrow}`}></i>
                        <ul id="listCategory" className={`absolute border p-5 mt-3 w-52 bg-white leading-loose transition-all duration-300 ease-in-out  ${showCategory.list}`}>
                            {
                                listCategory.map((category, index)=>(
                                    <li className="block p-2 text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={()=>onClickCategory(category)} value={category.value} key={index}>{category.label}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="mx-auto"></div>

                    {/* Button Search */}
                    <div>
                        <i onClick={openSearchBar} className="fa-solid fa-magnifying-glass text-2xl cursor-pointer transition-transform hover:scale-110"></i>
                    </div>

                    {/* Button Cart */}
                    <div className="px-6">
                        <i onClick={onClickCart} className="fa-solid fa-cart-shopping text-2xl cursor-pointer transition-transform hover:scale-110"></i>
                        <Cart show={viewCart} /> 
                    </div>
                </nav>
                <div id="searchBar" className={`text-center bg-white w-full fixed ${searchBar}`}>
                    <input type="search" id="searchInput" placeholder="Search" className=" p-2 my-5 border border-black w-1/2 rounded-md" defaultValue={searchVal} onChange={onChangeSearch} />
                    <i onClick={onClickSearch} className="fa-solid fa-magnifying-glass mx-2 text-2xl cursor-pointer transition-transform hover:scale-110"></i>
                    <i onClick={closeSearchBar} className="fa-solid fa-xmark text-2xl transition-transform hover:scale-110 cursor-pointer"></i>
                </div>
            </header>
        </>
    )
}