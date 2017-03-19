const router = require('express').Router();

module.exports = (records) => {
    router.post('/getRecord', (req, res) => {
        
        records.findByKey(req.body.key, (err, data) => {
            if (err) {
                res.sendStatus(404);
            } else {
                res.send(data);
            }
        });
    });
    
    return router;
}