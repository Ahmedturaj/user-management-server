const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
const user = [
    { id: 1, name: 'turaj', email: 'turaj@email.com'},
    { id: 2, name: 'tarin', email: 'tarin@email.com'},
    { id: 3, name: 'tarin', email: 'tania@email.com'},
    { id: 4, name: 'tazim', email: 'tazim@email.com'}
]
app.use(cors());
app.use(express.json());
app.get('/', (req, res)=>{
    res.send('User management server is running')
})
app.get('/user', (req, res)=>{
res.send(user)
})
app.post('/user',(req, res)=>{
    console.log('post api heating')
console.log(res.body);
})
app.listen(port, ()=>{
    console.log(`server is running : ${port}`)
})