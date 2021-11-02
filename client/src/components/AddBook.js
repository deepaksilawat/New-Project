import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
const AddBook = () => {


    const history = useHistory();

    const [formData, setFormData] = useState({
        title: '',
        image: '',
        description: ''
    });


    const { title,image, description } = formData;

    let name, value;
    const handleInput = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setFormData({ ...formData, [name]: value })


    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        const { title,image, description } = formData;

        console.log(formData);

        const res = await fetch("/addbook",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({ title,image, description })

    });
    const data = await res.json();
    if(data.status === 422 || !data){
            window.alert('invalid data');
            console.log('invalid data ');
    }else{
        window.alert('book added successfully');
        console.log('book added successfully');
        
        history.push('/');
    }
    }






    return (
        <div>
            <div className="App container">
                <p className="display-6 text-center mt-5">Add To Book Here</p> 
                <form type="POST" onSubmit={e => onSubmit(e) }>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Title</label>
                    <input type="text" name="title" value={title} onChange={handleInput} className="form-control" id="exampleFormControlInput1" placeholder="title" />
                </div>

                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input name="image" onChange={handleInput} class="form-control" type="file" id="formFile" />
                </div>


                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea name="description" value={description} onChange={handleInput} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Add Book </button>
                
                </form>
            </div>      
        </div>
    )
}

export default AddBook
