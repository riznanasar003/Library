import React, { useState } from 'react'
import Navbar from './Navbar'

const AddBook = () => {
    const [data, setData] = useState(
        
            {
                "booktitle":"",
                "category":"",
                "pubyear":"",
                "authorname":"",
                "disname":"",
                "pubname":"",
                "price":"",
                "edition":""
                
            }

        
    )

    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue = () =>{
        console.log(data)
    }

  return (
    <div>
        <Navbar/>
        <div className="container">
            <br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Book Title</label>
                            <input type="text" className="form-control" name='booktitle' value={data.booktitle} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-control">Category</label>
                            <select name="category" value={data.category} onChange={inputHandler} id="" className="form-control">
                                <option value="Novel">Novel</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                                <option value="Fairy Tale">Fairy Tale</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Published Year</label>
                            <input type="date" name="pubyear" value={data.pubyear} onChange={inputHandler} id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Author Name</label>
                            <input type="text" className="form-control" name='authorname' value={data.authorname} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Distributer Name</label>
                            <input type="text" className="form-control" name="disname" value={data.disname} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Publisher Name</label>
                            <input type="text" className="form-control" name='pubname' value={data.pubname} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Edition</label>
                            <input type="text" className="form-control"name="edition" value={data.edition} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddBook