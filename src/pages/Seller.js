import React from 'react'

const Seller = () => {
    const host = "http://localhost:3300/";
    const navigate = useNavigate();
    const [val, setVal] = useState({
        category: "",
        title: "",
        description: "",
        price: ""
    })
    const [file, setFile] = useState()
    const handleFileChange = (e) => {
        setFile(e.target.files[0])

    }
    const handleChange = (e) => {
        const value = e.target.value;
        const nm = e.target.name;
        setVal((preval) => {
            return {
                ...preval,
                [nm]: value
            }
        })
    }
    //write the handle submit part
    return (
        <div><div className="form-box">
            <h1>Sell Your product</h1>
            <br />
            <br />
            <form action="https://api.formbucket.com/f/c2K3QTQ" method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Category</label>
                    {/* <input className="form-control" id="name" type="text" name="category" /> */}
                    <select className="form-select mb-3 mt-1" name="category" id="category" value={val.category} onChange={handleChange}>
                        <option value="">Select category</option>
                        <option value="electronics">Electronics</option>
                        <option value="books">Books</option>
                        <option value="lab">Lab-Equipments</option>
                        <option value="hostel">Hostel</option>
                        <option value="fashion">Fashion</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className="form-group ">
                    <label htmlFor="email">Title</label>
                    <input className="form-control mt-1 mb-3" id="email" type="text" name="title" onChange={handleChange} value={val.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Upload Image</label>
                    <input className="form-control mt-1 mb-3" id="email" type="file" name="productImg" onChange={handleFileChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Price</label>
                    <input className="form-control mt-1 mb-3" id="email" type="number" name="price" onChange={handleChange} value={val.price} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Description</label>
                    <textarea className="form-control mt-1 mb-3" id="message" name="description" onChange={handleChange} value={val.description}></textarea>
                </div>
                <br />
                <div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        </div></div>
    )
}

export default Seller
