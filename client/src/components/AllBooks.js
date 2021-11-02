import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllBooks = () => {


    const [bookData, setBookData] = useState([]);



    const allBooksData = async () =>{
        
        try {
    
            const res = await fetch("/allbooks", {
                method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type" : "application/json"
            },
            
            });
            const data = await res.json();
            setBookData(data);
            console.log(data);

            
        } catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        allBooksData();
    }, []);

    
    return (
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    bookData.map((book, index) =>(
                    <div className="col" key={index}>
                        <Link to={`/book/${book.book_id}`}>
                            <div className="card h-100">
                            <img src="https://rukminim1.flixcart.com/image/416/416/kjbr8280-0/book/v/k/o/object-oriented-programming-using-c-and-java-original-imafyxef7v5umpjv.jpeg?q=70" className="card-img-top" alt="..." />
                            <div className="card-body">
                                
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">{book.description}</p>
                            </div>
                            </div>
                        </Link>
                    </div>
                    )
                    )
                }

                </div>
        </div>
    )
}

export default AllBooks
