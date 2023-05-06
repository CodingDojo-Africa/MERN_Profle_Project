const User = require('../models/admin.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// ADD NEW USER
module.exports.Register = async (req, res) => {
 
  try {
    const logUser = await User.findOne({ email: req.body.email });
    // CHECK IF USER EXISTS
    if (logUser) {
      res.status(400).json({ msg: 'Email already exists' });
    } else {
      // CREATE NEW USER
      User.create(req.body)
        .then((user) => {
          // CREATE TOKEN FOR NEW USER
          const payload = {
            id: user._id,
          };

          const token = jwt.sign(payload, 'supersecret', {
            expiresIn: '10d',
          });
          res.status(200).json({ user, token });
        })
        .catch((err) => res.status(400).json(err));
    }
  } catch (error) {
    res.status(400).json({msg: error});
    console.log(error);
  }
};

// LOGIN
module.exports.Login = async (req, res) => {
  try {
    console.log(req.body);
    // FIND USER BY EMAIL
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ msg: 'Email not found' });
    }
    // COMPARE PASSWORD
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Wrong password' });
    }
    // CREATE TOKEN FOR USER
    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, 'supersecret', {
      expiresIn: '10d',
    });

    return res.json({ user, token });
  } catch (error) {
    console.log(error);
  }
};

// GET CONNECTED USER
module.exports.GetConnectedUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.id });
  if (!user) {
    res.status(400).json({ msg: 'User does not exist' });
  }
  return res.json(user);
};
