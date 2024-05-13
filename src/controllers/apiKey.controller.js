import uniqid from 'uniqid';
import Status from '../models/status.model.js';



export const getAPiKey = async(req,res) =>{

    try{

    const generateApiKey = await uniqid();
    
    const findApiKey = await Status.findOne({apiKey:generateApiKey});

    if(findApiKey) {return res.status(400).json({message:"API key already exists"})}
    
    const saveApiKey = await Status.create({apiKey:generateApiKey});

    await saveApiKey.save();

    return res.status(200).json(saveApiKey);

    }catch(err){
        return res.status(500).json({message:err.message})
    }

}