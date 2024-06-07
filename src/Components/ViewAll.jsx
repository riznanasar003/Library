import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
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
                                            <th scope="col">AUTHOR</th>
                                            <th scope="col">PUBLISHED YEAR</th>
                                            <th scope="col">PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>One Indian girl</td>
                                            <td>Chetan Bagat</td>
                                            <td>2003</td>
                                            <td>1,500</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Wings Of Fire</td>
                                            <td>APJ Abdul Kalam</td>
                                            <td>2009</td>
                                            <td>2,000</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">3</th>
                                            <td>Mocking Bird</td>
                                            <td>Harper Lee</td>
                                            <td>2010</td>
                                            <td>1,000</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">4</th>
                                            <td>Frostfire</td>
                                            <td>Kevin Singh</td>
                                            <td>2012</td>
                                            <td>1,000</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">5</th>
                                            <td>Sunset</td>
                                            <td>Subhash Singh</td>
                                            <td>2014</td>
                                            <td>2,500</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">6</th>
                                            <td>Day Light</td>
                                            <td>Rizna</td>
                                            <td>2024</td>
                                            <td>4,000</td>
                                        </tr>
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