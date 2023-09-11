import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Components from './Devops.js/Components';
import Table from './Devops.js/Table';
import TableDatas from './TableDatas';


function Routing() {
    return (
        // <BrowserRouter>

        <Routes>


            <Route path="/" element={<Table />} />
            <Route path="/tabledatas" element={<TableDatas/>} />
            <Route path="/home" element={<Components />} />
        </Routes>

    //  </BrowserRouter>
    );
}

export default Routing;
