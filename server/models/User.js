const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minLength: 5
        },
        department: {
            ref: 'Department',
            type: Schema.Types.ObjectId
        },
        projects: [
            {
                type: String
            }
        ],
        litReviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'LitReview'
            }
        ],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// User pre - middleware

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

// Virtuals

userSchema.virtual('litReviewCount').get(function() {
    return this.litReviews.length;
});

// Create Model

const User = model('User', userSchema);

module.exports = User;