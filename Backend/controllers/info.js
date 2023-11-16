import Info from '../models/info.js';

export const getInfo = async (req, res) => {

    try {
        const info = await Info.find();
        res.status(200).send(info);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

};