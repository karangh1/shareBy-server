import multer from "multer";

const uploadFile = multer({dest: 'uploads'});

export default uploadFile;