const passport = require('passport')
const User = require('../auth/User')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local')
const GoogleStrategy = require('passport-google-oauth20').Strategy
// CLIENT_ID: 832924595250-p433ikggd5296ap9s8i5s9dheqb2jcjn.apps.googleusercontent.com
// CLIENT_SECRET: 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
passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    function(email, password, done){
        User.findOne({email}).then(user =>{
            bcrypt.compare(password, user.password, function(err, result) {
                if(err) {return done(err)}
                if(result) {return done(null , user)}
            });
        }).catch(e =>{
            return done(e)
        })
    }
))

passport.use(new GoogleStrategy({
    clientID: '832924595250-p433ikggd5296ap9s8i5s9dheqb2jcjn.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:5000/api/auth/google",
    scope: ['openid' , 'email' , 'profile']
  },
  async function (accessToken, refreshToken, profile, cb) {
    const user = await User.findOne({ googleId: profile.id })
    if(!user){
        const newUser = await new User({
            googleId: profile.id,
            full_name: profile.displayName,
        }).save()
        return cb(null, newUser)
    }else{
        return cb(null, user)
    }
}
));

passport.serializeUser(function(user, done){
    done(null , user._id)
})

passport.deserializeUser(function(id , done){
    User.findById(id).then((user , err) => {
        done(err , user)
    })
})