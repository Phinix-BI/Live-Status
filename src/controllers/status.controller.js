import Status from "../models/status.model.js";

// updateStatus is a function that updates the status of a user
// It takes in a request object and a response object

    export const createStatus = async (status) => {
    
    const newStatus = new Status({ status });
   
    const savedStatus = await newStatus.save();
    
    return savedStatus;
}

 export const updateStatus = async (req, res) => {
  
    const { status } = req.body;

    const findData = await Status.countDocuments();

    if (findData === 0) {
        const newStatus = await createStatus(status);
        return res.status(201).json(newStatus);
    }

   
    const updatedStatus = await Status.updateOne({}, { status : status });
   
    res.status(200).json(updatedStatus);
}

export const getStatus = async (req, res) => {
    const status = await Status.find();
   return res.status(200).json(status);
}