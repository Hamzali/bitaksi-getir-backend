const express = require('express');
const router = express.Router();

const path = require('path');
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

    router.get('/getRecords', express.static(path.join(__dirname, 'public')));
    
    return router;
}