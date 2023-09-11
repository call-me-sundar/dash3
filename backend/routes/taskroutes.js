const express = require('express');
const route = express.Router();

const {getAllData, columnDetails, updatedTableCheckedDatas} = require('../controllers/taskcontrollers')

route.get('/' , getAllData);
route.get('/columndetails' , columnDetails);
route.patch('/updatedTableCheckedDatas' , updatedTableCheckedDatas);

module.exports = route;