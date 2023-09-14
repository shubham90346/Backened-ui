import React from 'react';

function SaleReport(props) {
    return (
        <div className=''>
            <div className='container'>
                <div className='row tab-content ' id='SaleReport'>
                    <div className='col-lg-6'>
                        <h3 className=' fw-bold mt-4  s5'>Sales Report</h3>
                    </div>
                    <div className='col-lg-6'>
                        <button type="button" className="btn btn fw-bold s2  mt-4 text-white">Download</button>
                    </div>
                </div>



                <div className='d-flex mt-3'>
                    <select name="language" id="language" className='s8 text-secondary'>
                        <option value="javascript">1</option>
                        <option value="python">2</option>
                        <option value="c++" >3</option>
                        <option value="java" selected >Select Month
                        </option>
                    </select>
                    <select name="language" id="language" className='s4 text-secondary'>
                        <option value="javascript">1</option>
                        <option value="python">2</option>
                        <option value="c++" >3</option>
                        <option value="java" selected>Select Year</option>
                    </select>
                    <select name="language" id="language" className='s4 text-secondary'>
                        <option value="javascript">1</option>
                        <option value="python">2</option>
                        <option value="c++" >3</option>
                        <option value="java" selected>By Order No</option>
                    </select>
                    <select name="language" id="language" className='s4 text-secondary'>
                        <option value="javascript">1</option>
                        <option value="python">2</option>
                        <option value="c++" >3</option>
                        <option value="java" selected>Select product</option>
                    </select>
                    <select name="language" id="language" className='s4 text-secondary'>
                        <option value="javascript">1</option>
                        <option value="python">2</option>
                        <option value="c++" >3</option>
                        <option value="java" selected>Select Customer</option>
                    </select>
                    <button type="button" className="btn btn- s7 text-white">Submit</button>
                    <button type="button" className="btn btn-  s6 text-white">Clear</button>
                </div>



                <table className='mt-5 table'>
                    <tr className='s11 '>
                        <th >Order No</th>
                        <th >Customer Name</th>
                        <th >Product Name</th>
                        <th >Product Price</th>
                        <th >Qty</th>
                        <th >Subtotal price</th>
                        <th >Tax</th>
                        <th >Total price</th>
                    </tr>

                    <tr className='s12 text-secondary'>
                        <td >154-D456746</td>
                        <td>Mark johny</td>
                        <td>Wood Door</td>
                        <td>-120.00</td>
                        <td>-10</td>
                        <td>-1200</td>
                        <td>8%</td>
                        <td>1293</td>
                    </tr>
                    <tr  className='s12 text-secondary'>
                        <td >154-D456746</td>
                        <td>Mark johny</td>
                        <td>Wood Door</td>
                        <td>-120.00</td>
                        <td>-10</td>
                        <td>-1200</td>
                        <td>8%</td>
                        <td>1293</td>
                    </tr>
                    <tr  className='s12 text-secondary'>
                        <td >154-D456746</td>
                        <td>Mark johny</td>
                        <td>Wood Door</td>
                        <td>-120.00</td>
                        <td>-10</td>
                        <td>-1200</td>
                        <td>8%</td>
                        <td>1293</td>
                    </tr>
                    <tr  className='s12 text-secondary'>
                        <td >154-D456746</td>
                        <td>Mark johny</td>
                        <td>Wood Door</td>
                        <td>-120.00</td>
                        <td>-10</td>
                        <td>-1200</td>
                        <td>8%</td>
                        <td>1293</td>
                    </tr>
                    <tr  className='s12 text-secondary'>
                        <td >154-D456746</td>
                        <td>Mark johny</td>
                        <td>Wood Door</td>
                        <td>-120.00</td>
                        <td>-10</td>
                        <td>-1200</td>
                        <td>8%</td>
                        <td>1293</td>
                    </tr>
                    <tr  className='s12 text-secondary'>
                        <td >154-D456746</td>
                        <td>Mark johny</td>
                        <td>Wood Door</td>
                        <td>-120.00</td>
                        <td>-10</td>
                        <td>-1200</td>
                        <td>8%</td>
                        <td>1293</td>
                    </tr>
                    <tr  className='s12 text-secondary'>
                        <td >154-D456746</td>
                        <td>Mark johny</td>
                        <td>Wood Door</td>
                        <td>-120.00</td>
                        <td>-10</td>
                        <td>-1200</td>
                        <td>8%</td>
                        <td>1293</td>
                    </tr>
                </table>
              


                <ul className="pagination justify-content-end mt-5">
                    <li className="page-item ">
                        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li className="page-item"><a class="page-link" href="#">1</a></li>
                    <li className="page-item"><a class="page-link" href="#">2</a></li>
                    <li className="page-item"><a class="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>


            </div>
            <br/> <br/>







        </div>
    );
}

export default SaleReport;