module.exports = (mongoose) => {
    var Schema = mongoose.Schema;

    const recordSchema  = new Schema({
        key: String,
        value: String,
        createdAt: Date
    }, {collection: 'records'});

    const records = mongoose.model('Record', recordSchema);

    const findByKey = (key, callback) => {
        records.findOne({key: key}, callback);
    };

    const findEverything = (a, cb) => {
        records.find({}, cb);
    }

    return {
        findByKey: findByKey,
        findEverything: findEverything
    }
}
