const { Schema, model } = require('mongoose');

const departmentSchema = new Schema(
    {
        departmentName: {
            type: String
        },
        departmentState: {
            type: String
        },
        departmentArea: {
            type: String
        },
        departmentDescription: {
            type: String
        },
        departmentMembers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
);

const Department = model('Department', departmentSchema);

module.exports = Department;