
import Status from "../models/status.model.js";
 const authenticate = async(req, res, next) => {

    const token = req.headers['x-access-token'];

    const tokenExists = await Status.findOne({apiKey:token});

    if (token === tokenExists.apiKey) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

export default authenticate;