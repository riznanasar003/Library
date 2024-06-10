import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data,changedData] = useState([

        {
            "booktitle":"Half girlfriend",
            "category":"Novel",
            "pubyear":"09-09-20234",
            "authorname":"Chetan bagat",
            "disname":"Rizna",
            "pubname":"Royal books",
            "price":"1200",
            "edition":"2"
            
        }
    ]
        
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">SL NO</th>
                                            <th scope="col">BOOK TITLE</th>
                                            <th scope="col">CATEGORY</th>
                                            <th scope="col">PUBLISHED DATE</th>
                                            <th scope="col">AUTHOR NAME</th>
                                            <th scope="col">DISTRIBUTER NAME</th>
                                            <th scope="col">PUBLISHER NAME</th>
                                            <th scope="col">PRICE</th>
                                            <th scope="col">EDITION</th>

                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value, index)=>{
                                                return <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{value.booktitle}</td>
                                                <td>{value.category}</td>
                                                <td>{value.pubyear}</td>
                                                <td>{value.authorname}</td>
                                                <td>{value.disname}</td>
                                                <td>{value.pubname}</td>
                                                <td>{value.price}</td>
                                                <td>{value.edition}</td>
                                            </tr>
                                            }
                                        )}
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll