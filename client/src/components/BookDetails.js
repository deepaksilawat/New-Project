import React, { useState, useEffect } from 'react';


const BookDetails = (props) => {

    const [bookData, setBookData] = useState({});

    const getBookById = async () =>{
       
        try {   
            console.log(props); 
            const path = props.match.params.id
            const res = await fetch(`/book/${path}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            },
            
            });
            const data = await res.json();
            console.log("single book data",data);
            setBookData(data);

            
        } catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getBookById();
    }, [getBookById]);


    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <p className="display-6">heading : {bookData.title}</p>
                    <div className="py-3">
                    <img src="https://rukminim1.flixcart.com/image/416/416/kjbr8280-0/book/v/k/o/object-oriented-programming-using-c-and-java-original-imafyxef7v5umpjv.jpeg?q=70" className="card-img-top w-50 h-50" alt="..." />
                    </div>
                    <p>{bookData.description}</p>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}

export default BookDetails
