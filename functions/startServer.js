const app = require('./server').app;
const port = 2000;
app.listen(port, ()=> {
    console.log(`server started on port ${port}`)
});