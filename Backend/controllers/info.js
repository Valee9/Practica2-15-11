import dataModel from '../models/info.js';

export const getDataInfo = async (req, res) => {

    try {
        res.status(200).send(dataModel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

};