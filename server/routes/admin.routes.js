
const { authenticate } = require('../config/jwt.config');
const isAuth = require('../middleware/auth');

const {
    Register,
    Login,
    GetConnectedUser,
  } = require('../controllers/admin.controller');
  
  module.exports = (app) => {
    app.post('/api/naceur/register', Register);
    app.post('/api/naceur/login', Login);
 
    app.get('/api/naceur', isAuth, GetConnectedUser);
  };
  