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
            [column_value , column_name]
        );

        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err }); // Corrected JSON response format
    }
};

module.exports = { getAllData, columnDetails, updatedTableCheckedDatas }