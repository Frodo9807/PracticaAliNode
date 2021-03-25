import { insertuser } from "../models/userModel.js";
export const createuser = (req, res) => {
    const data = req.body;
    insertuser(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}