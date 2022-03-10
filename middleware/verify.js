exports.check=(req,res,next)=>{
    const {username,email,phone,password,confirm}=req.body;
    userModel.findOne({email},(err,data)=>{
        // console.log(data);
        if(data){
            req.flash('error','This Email is Already Exist');
            res.redirect('/register');
            return;
        }
    })
    userModel.findOne({phone},(err,data)=>{
        // console.log(data);
        if(data){     //data.email kano jacha na
            req.flash('error','Phone No is Already Exist');
            res.redirect('/register');
            return;
        }
    })
    if(!username){
        req.flash('error','Please Enter Your Name');
        res.redirect('/register');
        return;
    }
    if(!email){
        req.flash('error','Please Enter Your Email');
        res.redirect('/register');
        return;
    }
    if(!phone){
        req.flash('error','Please Enter Your Phone');
        res.redirect('/register');
        return;
    }
    if(!password){
        req.flash('error','Please Enter Your Password');
        res.redirect('/register');
        return;
    }
    if(!confirm){
        req.flash('error','Please Fill the Confirm Password');
        res.redirect('/register');
        return;
    }
    if(password!=confirm){
        req.flash('error','Password or Confirm Password Doesn\'t Match');
        res.redirect('/register');
        return;
    }
    next();
}