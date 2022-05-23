const mongoose =  require ("mongoose")
const connect = async () => {
    try {await mongoose.connect(process.env.MONGO_URI)
        console.log ("connectdb")
    } catch (error) {
        console.error (error)
    }

}
module.exports = connect