const {Router} = require('express');
const LogEntry = require('../models/LogEntry')

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const entries = await LogEntry.find();
        res.json(entries);
    } catch (error) {
        next(error)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newLogEntry = LogEntry(req.body);
        const createdEntry = await newLogEntry.save();
        res.json(createdEntry);
    } catch (error) {
        next(error);   
    }
})

module.exports = router;