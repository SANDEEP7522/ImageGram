import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "./awsConfig.js"


export const s3uploder = multer({
    Storage: multerS3({
        s3: s3,
        bucket: AWS_BUCKET_NAME, // in aws go to your bucket name 
        // acl: "public-read", no needs
        key: function (req, file, cb){
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9 ); // to make sure key is unique
             cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]);
        }
    })
}); // uploader is middleware
