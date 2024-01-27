const mongoose = require('mongoose');

 mongoose.connect("mongodb+srv://vandesh1992:um2dOVKXL6rK2MQ5@microservicetest.qrobe9k.mongodb.net/MicroServiceTest?retryWrites=true&w=majority",
).then(()=>{
    console.log('connected to DB');
}).catch((e)=>{
    console.log('Error ',e);
})