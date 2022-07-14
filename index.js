// 1. Change server.js to main.js
//    Install node modules
// 2. Install and require body-parser
// 3. Change filename homerouter.js to homeroute.js
// 4. Change name in user.js  file
// 5. Change port number
// 6. Comment nav
// 7. Require cors
// 8. In addauthor.ejs there is spelling mistake
// 9. 
// 10. In signuproute.js, change param to params

const express = require('express'); 
const port = 3000;
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');

// const nav= [
//     {
//         link:"/books",
//         title:"Books"
//     },
//     {
//         link:"/authors",
//         title:"Authors"
//     },
//     {
//         link:"/addbook",
//         title:"Add Book"
//     },
//     {
//         link:"/addauthor",
//         title:"Add Author"
//     }
// ]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





// app.listen(3000,()=>{
//     console.log("Server Ready on 3000");
// });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })