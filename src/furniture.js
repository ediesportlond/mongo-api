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

export async function getAllFurniture (req,res){
    const db = dbConnect();
    const furnitureCollection = db.collection('furniture');
    const result = await furnitureCollection.find({}).toArray()
    .catch(err => {
        res.status(500).send({success:false, message:err})
        return
    })
    res.status(201).send({success:true, message: result})
}

export async function findFurniture(req,res){
    const db = dbConnect();
    const furnitureCollection = db.collection('furniture');

    const { key, value } = req.params;
    const search = new RegExp(value, "i");
    const query = {
    };
    query[key] = { 
        $regex: search
    }

    const result = await furnitureCollection.find(query).toArray()
    .catch(err => {
        res.status(500).send({success:false, message:err})
        return
    })

    res.status(201).send({success:true, message: result})
}