const secretToken = process.env.MY_SECRET_KEY;

 const authenticate = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (token === secretToken) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

export default authenticate;