const servidor= require('express');
const app= servidor();

//settings
app.set('port',4000);

//midlleware
app.use(cors());
app.use(express.json());

//routes
app.use('/frutas',require('./routers/frutas'));


module.exports= app;