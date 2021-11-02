import React from 'react'

const Login = () => {
    return (
        <div>
        <div className="row py-5">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <div className=" alert alert-light text-center py-3 bg-light">
                    <h2>Login here</h2>
                </div>
                <div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="d-grid gap-2 mt-5">
                        <button className="btn btn-primary" type="button">Login</button>
                    </div>

                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
        </div>
    )
}

export default Login
