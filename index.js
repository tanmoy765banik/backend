require('dotenv').config();
const express = require('express');

const app = express();

const port=4000 || process.env.PORT
//req and res are two objects provided by express
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/twitter',(req,res)=>{
    res.send('tanmoydotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>watch videos</h2>")
}
)
//app.listen(process.env.PORT, ()=> {
 //   console.log(`Server running on port ${PORT}`);
//});
app.listen(port,()=> {
 console.log(`Server running on port ${port}`)
});
