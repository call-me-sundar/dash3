import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Offcanvas from './Offcanvas/Offcanvas';

export default function Table() {

    const [apiData, setapiData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [tableColumns, setTableColumns] = useState([]);

    const [tableDeatils, setTableDetails] = useState({
        column_1: false,
        column_2: false,
        column_3: false,
        column_4: false,
        column_5: false,
        column_6: false,
        column_7: false,
        column_8: true,
        column_9: true,
        column_10: true,
        column_11: true,
        column_12: true,
        column_13: true,
        column_14: true,
        column_15: true,
        column_16: true,
        column_17: true,
        column_18: true,
        column_19: true,
        column_20: true,
        column_21: true,
        column_22: true,
        column_23: true,
        column_24: true,
        column_25: true,
    });



    let get_data = async () => {
        let res = await axios.get('http://localhost:4000/tabledatas');
        setapiData(res.data);
    };

    let columnDetails = async () => {
        let res = await axios.get('http://localhost:4000/tabledatas/columndetails');
        setTableColumns(res.data);
    }


    useEffect(() => {
        get_data();
        columnDetails();
    }, []);



    // console.log(apiData);
    console.log("table=>>>>>>>>>>>>>>>>>>>>>>>>>", tableColumns);
    


    const keys = apiData.map((key) => console.log(key));

    function data_type(value) {
        if (value == 'int') {
            return 'Number'
        } else if (value == "varchar") {
            return 'Text'
        } else if (value == '"tinyint"') {
            return 'boolean'
        }
        else {
            return 'Date'
        }
    }


    // const filteredData = apiData.filter((value) =>
    //     value.column_1.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
    //     value.column_2.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
    //     value.column_25.toString().toLowerCase().includes(searchQuery.toLowerCase()));

        
    // console.log("filteredData =>>>>>>>>>>>>>>>>>>>>>>>,",filteredData)

    return (
        <div>

            <div className='card-body p-5 bg-white rounded-4'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h6 className='mb-1'>Basic Data </h6>
                        <p className='text-muted'>A simple example with no frills.</p>
                    </div>
                    <div
                        className="d-none d-sm-inline-block form-inline ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light shadow-none"
                                placeholder="Search for anything..." aria-label="Search"
                                aria-describedby="basic-addon2" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                            <>
                                <button
                                    className="btn btn-primary shadow-none"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasWithBothOptions"
                                    aria-controls="offcanvasWithBothOptions"
                                >
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </>

                            {/* <div className="input-group-append">
                                <button className="btn btn-primary" type="button"
                                    onClick={() => {
                                        const filteredData = apiData.filter((value) =>
                                            value.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                            value.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                            value.position.toLowerCase().includes(searchQuery.toLowerCase()));
                                        setapiData(filteredData);
                                    }}>
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <table className="table-responsive table-bordered table-striped rounded-2">
                    <thead>
                        <tr>
                            {tableColumns.map((item, index) => (
                                <th className='px-5 py-3' id={item.column_name} key={index}>
                                    {item.column_name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {apiData.map((value, index) => (
                            <tr key={index}>
                                {Object.keys(value).map((key, v) => (
                                    <td className={'p-3 text-center column_'} key={key}>{value[key]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* <Offcanvas /> */}

            <div
                className="offcanvas offcanvas-end"
                data-bs-scroll="true"
                tabIndex={-1}
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                        Column Details
                    </h5>
                    <button
                        type="button"
                        className="btn-close shadow-none"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body p-3">

                    {tableColumns.map((item, index) => (
                        <div className='form-check d-flex justify-content-between' key={index}>
                            <div className='d-flex align-items-center'>
                                <input
                                    className="form-check-input shadow-none"
                                    type="checkbox"
                                    defaultValue=""
                                    id={'offcanvas' + index}
                                    checked={tableDeatils['column_' + (index+1)]} onChange={(e) => setTableDetails((prevData)=>({
                                        ...prevData,
                                        ['column_'+(index+1)]:e.target.checked,
                                    }))}
                                />
                                <label className="form-check-label text-capitalize" htmlFor={'offcanvas' + index}>
                                    <p className='m-0 px-2'>{item.column_name}
                                        <span className="fs-7 px-2">{data_type(item.data_type)}</span>
                                    </p>
                                </label>
                            </div>
                            <div className='cursor-pointer p-1'>
                                <button
                                    type="button"
                                    className="btn p-0 shadow-none border-0"
                                    data-bs-toggle="modal"
                                    data-bs-target={'#offcanvasedit' + index}
                                >
                                    <i className="fa-solid fa-ellipsis-vertical px-2"></i>
                                </button>
                            </div>
                            {/* Button trigger modal */}

                            {/* Modal */}
                            <div
                                className="modal fade"
                                id={'offcanvasedit' + index}
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                Modal title
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close shadow-none"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">...</div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
