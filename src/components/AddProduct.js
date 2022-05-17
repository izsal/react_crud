import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [body, setPrice] = useState('');
    const history = useHistory();

    const saveProduct = async(e) => {
        e.preventDefault();
        const product = { title, body, userId: 1 };
        await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        history.push("/");
    }

    return (
        <div>
            <form onSubmit={saveProduct}>
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
                    <button className="button is-primary">Save</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
