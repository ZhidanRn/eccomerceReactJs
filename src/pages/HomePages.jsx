import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
import { fetchDataByCategoryCall, fetchDataCall } from "../services/product.service";
import { fetchProducts } from "../store/action/productAction";

export default function HomePages() {
    const dispatch = useDispatch()

    const [dataProduct, setDataProduct] = useState([])
    const [title, setTitle] = useState()
    const [titleEmpty, setTitleEmpty] = useState('')
    const { products, status, error } = useSelector((state) => state.products)

    useEffect(() => {

        const fetchData = async() => {
                const res = await fetchDataCall()
                setDataProduct(res)
                setTitle('All Product')
        }
        
        fetchData()
        dispatch(fetchProducts())
    },[dispatch])

    if(status == 'loading'){
        return <p>Loading...</p>
    }else if(status == 'failed'){
        return <p>Error: {error}</p>
    }

    const fetchCategories = async(categoryVal) => {
        if(categoryVal == "all product"){
            try {
                const res = products
                setDataProduct(res)
            } catch (error){
                console.error('Error fetching :', error)
            }
        } else {
            try{
                const res = await fetchDataByCategoryCall(categoryVal)
                setDataProduct(res.data)
            }catch (error){
                console.error('Error fetching :', error)
            }
        }
        setTitle(categoryVal)
    }

    const fetchSearch = async(query) => {
        const res = await fetchDataCall()
        const filtered = res.filter((data) => data.title.toLowerCase().includes(query.toLowerCase()))
        if(filtered.length == 0){
            setTitleEmpty('DATA NOT FOUND')
            setDataProduct(filtered)
        } else {
            setTitleEmpty('')
            setDataProduct(filtered)
            setTitle('Search Result: ' + query)
        }
    }

    return(
        <>
            <Header categoryVal={fetchCategories} searchRes={fetchSearch}/>
            <main className="max-w-7xl mx-auto min-h-screen overflow-hidden p-6">

                <p className="text-5xl mb-5 capitalize" id="textAll">{title}</p>
                <p className="mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam obcaecati odit vero doloremque tenetur at modi quaerat repellendus dolores! Inventore quasi laboriosam amet, perspiciatis delectus earum ut natus voluptatem magnam. At consequuntur illo maiores. Sit hic itaque culpa libero eligendi repudiandae velit quaerat neque dignissimos quis doloribus, dolorum rem.
                </p>
                
                <div className="text-center font-bold">
                    {titleEmpty}
                </div>

                <div id="allProduct" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:max-w-5xl md:max-w-3xl sm:max-w-lg mx-auto">
                    {dataProduct.map((item, index)=> (<Card data={item} key={index}/>))}
                </div>
            </main>
            <Footer />
        </>
    )
} 