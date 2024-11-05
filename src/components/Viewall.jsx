import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [productData, changeProductData] = useState(
        []
    )
    const fetchData = () => {
        axios.get("https://fakestoreapi.com/products").then(
            (response) => {
                changeProductData(response.data)
            }
        ).catch()
    }
    useEffect(
        () => { fetchData() }, []
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {productData.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card">
                                            <img src={value.image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.id}</h5>
                                                <p class="card-text">{value.title}</p>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">{value.price}</li>
                                                <li class="list-group-item">{value.description}</li>
                                                <li class="list-group-item">{value.category}</li>
                                            </ul>

                                        </div>

                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall
