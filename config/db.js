const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://psarvesht08:EjaUPSSHG02oaBRC@cluster0.b7tdnt6.mongodb.net/sample_mflix',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connected to mongoose")
}).catch(()=>{
     console.log("error connecting to mongoose")
})
