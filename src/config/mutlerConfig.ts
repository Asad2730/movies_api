import multer from 'multer';
import path from 'path';

const storage:multer.StorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>cb(null,path.join(__dirname,'../uploads')),
    filename(req,file,cb){
        const uniqueSuffix:string = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
})

const upload:multer.Multer = multer({storage})

export default upload