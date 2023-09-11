const express = require('express');
const route = express.Router();

const {getAllData, columnDetails, updatedTableCheckedDatas, updatedColumnName} = require('../controllers/taskcontrollers')

route.get('/' , getAllData);
route.get('/columndetails' , columnDetails);
route.patch('/updatedTableCheckedDatas' , updatedTableCheckedDatas);
route.put('/updatedColumnName' , updatedColumnName);

module.exports = route;