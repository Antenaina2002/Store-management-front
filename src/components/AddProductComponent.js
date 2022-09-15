import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import ProductService from '../services/ProductService'

const AddProductComponent = () => {

    const [Name, setName] = useState('')
    const [Price, setPrice] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateProduct = (e) => {
        e.preventDefault();

        const product = {Name, Price}

        if(id){
            ProductService.updateProduct(id, product).then((_response) => {
                history.push('/product')
            }).catch(error => {
                console.log(error)
            })

        }else{
            ProductService.createProduct(product).then((response) =>{

                console.log(response.data)
    
                history.push('/product');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        ProductService.getProductById(id).then((response) =>{
            setName(response.data.Name)
            setLastName(response.data.Price)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Product</h2>
        }else{
            return <h2 className = "text-center">Add Product</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "Name"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Price :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter price"
                                        name = "Price"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateProduct(e)} >Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddProductComponent
