import React from 'react';

function Login(props) {
    return (

            <div className='container-fluid yt' >
                <div className="card l3">
                    <div className="row ">
                        <div className="col-lg-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" className="img-fluid rounded-start ty" alt="..." />
                        </div>
                        <div className="col-lg-7 l4">
                            <div className="card-body mt-4">
                                <h5 className="card-title fw-bold l8 text-start">Intuite</h5>
                                <p className=' l2 text-start'> Sign into your account</p>

                                <form>
                                    <div className="form-group  ">
                                        <label for="exampleInputEmail1" className='l7' >Email address</label>
                                        <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                    <div className="form-group mt-3">
                                        <label for="exampleInputPassword1" className='l7 '>Password</label>
                                        <input type="password" className="form-control mt-2" id="exampleInputPassword1" />
                                    </div>
                                    <div className='form-group mt-3'>
                                        <button type="submit" className="btn-btn form-control l5 text-white p-2 ">Login</button>
                                    </div>
                                </form>
                                <p className="card-text mt-3">
                                    <a href="#" className='text-secondary l6'>Forgot password</a>
                                </p>
                                <p className="card-text mt-4">
                                    <a href="#" className='text-secondary l6'>Terms of use Privacy policy</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

      
    );
}

export default Login;