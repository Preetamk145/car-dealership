if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const express = require('express');
const bodyParser =require('body-parser');
const bcrypt=require('bcrypt');
const passport = require('passport');
const flash =require('express-flash')
const session =require('express-session')
const methodOverride =require('method-override');
const dbService=require('./DBService');
const app = express();
const port = 3000; 

const initialisepass = require('./passport-config')
initialisepass(passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users =[]

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('index.ejs',{user:req.user});
});

app.get('/profile', (req, res) => {
  res.render('profile.ejs',{user:req.user});
});

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/public/admin.html');
});
app.post('/login',(req,res,next)=>{
  userupdate(req.body)
  passport.authenticate('local',{
  successRedirect:'/',
  failureFlash:true,
  failureRedirect:'/'})(req,res,next);
})

app.post('/register' ,async(req,res) =>{
  try{
    const hashpass=await bcrypt.hash(req.body.pass,10)

    // dbService.addUser(user)
    // .then(()=>{console.log("sucess");})
    // .catch((err)=>{console.error(err);})

    useradd(req.body)
    
    // users.push({
    //   id:Date.now().toString(),
    //   name:req.body.name,
    //   email:req.body.email,
    //   password:hashpass
    // })
    res.redirect('/')
  }
  catch{
    res.redirect('/')
  }
  console.log(users)
})

app.delete('/logout',(req,res)=>{
  req.logOut(function(err){
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.redirect('/');
    }
  })
 
})

function checkauthenticated (req,res,next){
  if(req.isAuthenticated())
  {
      return next()
  }
  else{
      res.redirect('/')
  }
}
function checkNotAuthenticated(req,res){
  if(req.isAuthenticated())
  {
   return  res.redirect('/')
  }
  next()
}

function userupdate(user)
{
  console.log(user.email);
  var res=dbService.userreturn(user.email)

  users.push({
    id:res.rows[0].id,
    name:res.rows[0].name,
    email:res.rows[0].email,
    password:res.rows[0].password,
    adhno:res.rows[0].adhno,
    license_no:res.rows[0].license_no,
    address:res.rows[0].address,
    imgname:res.rows[0].imgname
  })
}
function useradd(user)
{
  console.log(user.email);
  dbService.useradd(user.name,user.email,user.licno,user.pass,user.add,user.img.name)
}
var ip = require("ip");
console.dir ( ip.address() );
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
