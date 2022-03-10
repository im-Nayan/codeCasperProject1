const userModel = require('../../model/userModel')
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken')

// REGISTER POST METHODS
    exports.registerPost = (req, res) => {
        const user = new userModel({
            Username: req.body.Username,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Password: bcrypt.hashSync(req.body.Password,10)
        })
        user.save((err, data) => {
            if (!err) {
                res.status(200).json({
                    status: 'success',
                    result: user,
                    message: "User Register Successfully"
                });
            } else {
                res.status(404).json({
                    result: err,
                    message: "User Not Register..."
                });
            }
        })
    }

    // LOGIN POST METHODS
    exports.loginPost=(req,res)=>{
        const {Email,Password}=req.body
    
    
        userModel.findOne({Email},(err,data)=>{
            if(data){
                const hashpass = data.Password;
                const compassword =bcrypt.compareSync(Password,hashpass);
                if(compassword){
                    const token = jwt.sign({
                        Username:data.Username,
                    },'USER_JWT_TOKEN',{expiresIn:'3m'})
                    res.cookie('usertoken',token);
                    res.status(400).json({
                        status:'success',
                        result:data,
                        message:'login Successfully'
                    })
                }else{
                    res.status(405).json({
                        result: err,
                        message: "Invalid Password"
                    });
    
                }
            }else{
                res.status(405).json({
                    result: err,
                    message: "Invalid Email id"
                });
            }
        })
    }