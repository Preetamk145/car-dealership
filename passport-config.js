const { authenticate } = require('passport')
const bcrypt =require('bcrypt')


const localstratergy =require('passport-local').Strategy

function initialise (passport,getUserByEmail,getUserById){
    const authenticateUser=async (email,password,done)=>{
        const user =getUserByEmail(email)
        if(user ==null){
           
            return done(null,false,{message :'NO user found'})
        }
        try{
            if(await bcrypt.compare(password,user.password))
            {
                return done(null,user)
            }else{
              
                return done(null,false,{message:'password correct'})

            }
        }
        catch(e){
            return done(e)
        }
    }
    passport.use(new localstratergy({usernameField:'email'},authenticateUser))
    passport.serializeUser((user,done)=>done(null,user.id))
    passport.deserializeUser((id,done)=>{
        return done(null,getUserById(id))
    })
}

module.exports =initialise