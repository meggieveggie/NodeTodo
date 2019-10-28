var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb+srv://' + process.env.MONGO_DB_USER + ':' + process.env.MONGO_DB_PASSWORD + '@cluster0-gd2ra.mongodb.net/test?retryWrites=true&w=majority'
    }
}