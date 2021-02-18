module.exports = (mongoose) => {
    const { Schema, model: Model } = mongoose;
    const { String, ObjectId, Boolean, Date } = Schema.Types;

    const courseSchema = new Schema({ 
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            maxLength: 50
        },
        imageUrl: {
            type: String,
            required: true
        },
        isPublic: {
            type: Boolean,
            default: false,
            checked: false
        },
        createdAt: {
            type: Date || String,
            required: true
        },
        usersEnrolled: [
            {
                type: ObjectId,
                ref: 'User'
            }
        ]
    })

    return Model('Course', courseSchema)
}