import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changedData] = useState([])
    const fetchData = ()=>{
        axios.get("http://localhost:8084/view").then(
            (response)=>{
                changedData(response.data)
            }
        ).catch().finally()
        
    }
     useEffect(()=>{fetchData()},[])   
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