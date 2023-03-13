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
            type: String
        },
        litReview: [
            {
                type: Schema.type.ObjectId,
                ref: 'LitEntry'
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

userSchema.virtual('LitReviewCount').get(function() {
    return this.litReview.length;
});

// Create Model

const User = model('User', userSchema);

module.exports = User;