import dbConnect from "./dbConnect.js";

export async function addNewFurniture(req, res) {
    const db = dbConnect();
    const furnitureCollection = db.collection('furniture');

    const newFurniture = req.body;
    newFurniture.createdDate = new Date();

    const result = await furnitureCollection.insertOne(newFurniture)
        .catch(err => {
            res.status(500).send({ success: false, message: err });
            return;
        });

    res.status(201).send(result);
}