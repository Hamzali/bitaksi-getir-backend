const router = require('express').Router();

module.exports = (records) => {
    router.post('/getRecord', (req, res) => {
        
        records.findByKey(req.body.key, (err, data) => {
            if (data) {
                res.send(data);
            } else {
                res.sendStatus(404);
            }
        });
    });
    
    return router;
}