import React from 'react';

function Logout(props) {
    return (
    
            <div className="card l3 ">
                <div className="row ">
                    <div className="col-lg-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" className="img-fluid rounded-start tyt" alt="..." />
                    </div>
                    <div className="col-lg-7 l4">
                        <div className="card-body mt-5">
                            <h5 className="card-title fw-bold l8">Demeter Fragrances</h5>
                            <p className=' log1  mt-3'> Sign into your account</p>

                            <form>
                                <div className="form-group  ">
                                    <label for="exampleInputEmail1" className='log2 mt-3' >Email address</label>
                                    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                                <div className="form-group mt-2">
                                    <label for="exampleInputPassword1" className='log2 mt-2 '>Password</label>
                                    <input type="password" className="form-control mt-2" id="exampleInputPassword1" />
                                </div>
                                <div className='form-group mt-3'>
                                    <button type="submit" className="btn-btn form-control l5 text-white p-2 ">Login</button>
                                </div>

                            </form>

                            <p className="card-text mt-3 text-center">
                                <a href="#" className='text-secondary log3'>Forgot password</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>


       
    );
}

export default Logout;