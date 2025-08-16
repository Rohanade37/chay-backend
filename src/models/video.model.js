import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';


const videoSchema = new Schema(
    {
      videoFile: {
        type: String,   //cloudnary url
         required: true,
      },

      thumbnail: {
         type: String,   //cloudnary url
         required: true,
      },

          title: {
         type: String,  
         required: true,
      },
             discription: {
         type: String,   
         required: true,
      },
          duration: {
         type: String,     //cloudnary url
         required: true,
      },
      views: {
         tyoe: Number,
         default: 0
      }, 
      isPublished: {
          type: Boolean,
          default: true
      },
       owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
       }  

    },
    {
        timestamps: true
    }
)


videoSchema.plugin(mongooseAggregatePaginate)

export const video = mongoose.model("video", videoSchema)

























