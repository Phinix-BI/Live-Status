import Status from "../models/status.model.js";


// updateStatus is a function that updates the status of a user
// It takes in a request object and a response object


 export const updateStatus = async (req, res) => {
  
    const { status } = req.body;

    const apiKey = req.headers['x-access-token'];

    const findData = await Status.findOne({apiKey:apiKey});
    
    if(!findData) return res.status(400).json({message:"API key does not exist"});

    const updatedStatus = await Status.updateOne({apiKey},{status:status});
    
    if(!updatedStatus) return res.status(400).json({message:"Status not updated please check your api key and try again"});

    res.status(200).json(updatedStatus);
}

export const getStatus = async (req, res) => {
    const apiKey = req.headers['x-access-token'];

    const status = await Status.findOne({apiKey:apiKey});
    return res.status(200).json(status);
}


// get request




// post request
// export const createApiKey = async(req,res) =>{
//     const {userId} = req.body;  

