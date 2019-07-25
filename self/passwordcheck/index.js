const express=require('express')

const app=express()

const passport=require('passport')

const LocalStrategy=require('passport-local').Strategy

const session=require('express-session')

app.set('view engine','hbs')

app.use(express.urlencoded({extended:true}))

passport.use(new LocalStrategy((username,password,done) => {
    if (username == 'Sanchit' && password == '12345678') {
        done(null, {
            id: 1,
            name: "Sanchit"
        })
    } else {
        done(null, false)
    }
}))

app.use(session({
    secret: 'Thanos was here',
    saveUninitialized: true,
    resave: false,
    cookie: {secure:false}
}))

app.use(passport.initialize());

app.use(passport.session())

passport.serializeUser((user,done)=>{
    return done(null,user)
})

passport.deserializeUser((user,done)=>{
    return done(null,user)
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/secret',(req,res)=>{
    res.render('secret',{user: req.user})
})
app.post('/login',passport.authenticate('local',{
    successRedirect: '/secret',
    failureRedirect:'/login'
}))

app.listen(2121,()=>{
    console.log("Running on 2121");
    
})