const db = require('../models/db')

const getAllData = async (req, res) => {
    try {
        const [result] = await db.query("select * from dashboardtable");
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json("error", err)
    }
}

const columnDetails = async (req, res) => { 
    try {
        const [result] = await db.query("select * from columndetails");
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json("error", err)
    }
}

const updatedTableCheckedDatas = async (req, res) => {
    const { column_name, column_value } = req.body; // Destructure the body object

    try {
        const [result] = await db.query(
            "UPDATE columndetails SET checked = ? WHERE column_name = ?;",
            [column_value, column_name]
        );

        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err }); // Corrected JSON response format
    }
};

const updatedColumnName = async (req, res) => {
    const { changedColumnName, columnName, column_datatype } = req.body; // Destructure the body object
    try {
        // Update the column name in the database table 
        const updateQuery = "UPDATE columndetails SET column_name = ? WHERE column_name = ?";
        const [updateResult] = await db.query(updateQuery, [changedColumnName, columnName]);
        
        // Change the column name in the dashboard table 
        const alterQuery = `ALTER TABLE dashboardtable CHANGE COLUMN ${columnName} ${changedColumnName} ${column_datatype}`;
        await db.query(alterQuery);
        res.status(200).json(updateResult);
    } catch (err) {
        res.status(400).json({ error: err.message });
        // Corrected JSON response format and included error message    
    }
};




module.exports = { getAllData, columnDetails, updatedTableCheckedDatas, updatedColumnName }