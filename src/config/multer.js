import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve} from 'path';

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'temp', 'uploads'),
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (error, response) =>{
                if(error) return(error);

                return callback(null, response.toString('hex') + extname(file.originalname));
            })
        },
    }) 
}