import { useEffect, useState } from "react"

const useProducts=() =>{
    const [ products, setProducts] = useState([])

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    //return necessary things jate ek ba ekadik kichu return korte hobe array hisebe
    return [products,setProducts];
}
export default useProducts;
    
//export na korle import kore use korte parbona