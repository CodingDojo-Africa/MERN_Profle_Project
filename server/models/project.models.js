const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, 'title is required'],
      minlength: [3, 'title must be 3 characters at least.']
    },
  
  
      catagorie:{
        type: String,
        require: [true, 'catagorie is required'],
        enum: ['Ai Project', 'Machine Learning Project', 'Deep Learinng','Data Science','Industrial Automation Project']
    },
      
      description:{
          type: String,
          require: [true, 'description is required'],
          minlength: [10, 'description must be 10 characters at least.']
         
      },
      enverment:{
        type: String,
        require: [true, ' is required']
      },
      technologie:{
        type: String,
        require: [true, 'technologie used is required']
      },
      picturePath: {
        type: String,
        default: "",
      }
,
video:{
  type:String,
  default:"",
}, url:{
  type:String,
}
  },

  { timestamps: true }
);

module.exports.Project = mongoose.model('Project', ProjectSchema);

