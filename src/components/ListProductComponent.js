import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ProductService from '../services/ProductService'

const ListProductComponent = () => {

    const [products, setProduct] = useState([])

    useEffect(() => {

        getAllProduct();
    }, [])

    const getAllProduct = () => {
        EmployeeService.getAllProduct().then((response) => {
            setProduct(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteProduct = (productId) => {
       EmployeeService.deleteProduct(productId).then((response) =>{
        getAllProduct();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Product </h2>
            <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Product </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Product Id </th>
                    <th> Product Name </th>
                    <th> Product Price </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        products.map(
                            product =>
                            <tr key = {product.id}> 
                                <td> {product.id} </td>
                                <td> {product.Name} </td>
                                <td>{product.Price}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-product/${product.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteProduct(product.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListProductComponent
