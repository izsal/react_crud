import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [body, setPrice] = useState('');
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setPrice(data.price);
    }

    const updateProduct = async(e) => {
        e.preventDefault();
        const product = { title, body };
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: "PUT",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        history.push("/");
    }

    return (
        <div>
            <form onSubmit={updateProduct}>
                <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                </div>
                </div>

                <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <input className="input" value={body} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Description" />
                </div>
                </div>
        
                <div className="field">
                <div className="control">
                    <button className="button is-primary">Update</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default EditProduct
