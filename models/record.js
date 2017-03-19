module.exports = (mongoose) => {
    var Schema = mongoose.Schema;

    const recordSchema  = new Schema({
        key: String,
        value: String
    }, {collection: 'records'});

    const records = mongoose.model('Record', recordSchema);

    const findByKey = (key, callback) => {
        records.findOne({key: key}, callback);
    };

    return {
        findByKey: findByKey
    }
}
