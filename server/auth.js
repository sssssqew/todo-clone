const config = require('./config')
const jwt = require('jsonwebtoken')

const generateToken = (user) => { // 토큰 생성 
    return jwt.sign({
        _id: user._id, // 사용자 정보 (json) 
        name: user.name, 
        email: user.email, 
        userId: user.userId, 
        isAdmin: user.isAdmin, 
        createdAt: user.createdAt, 
    },
    config.JWT_SECRET, // JWT 비밀키
    {
        expiresIn: '1d', // 만료기한 (하루)
        issuer: 'sunrise',
    } )
}