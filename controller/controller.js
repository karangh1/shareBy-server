import { request, response } from 'express';
import File from '../modals/modal.js'

export const upload = async (req,res)=>{
    // console.log(req.file)
    const fileObj = {
      path:req.file.path,
      name:req.file.originalname,
   }

   try {
      const file =await File.create(fileObj);
      res.status(200).json({ path: `http://localhost:8000/file/${file._id}` })
      console.log(`http://localhost:8000/file/${file._id}`);
   } catch (err) {
      console.log("error is ",err.message)
   }
}

export const downloadFile = async (req, res) => {
    try {
      const image = await File.findOne({ _id: req.params.fileId });
      if (!image) {
        return res.status(404).send('Image not found');
      }
      image.downloadCount++;
      await image.save();
      res.download(image.path, image.name);
    } catch (err) {
      console.log("Error:", err.message);
      res.status(500).send('Internal Server Error');
    }
  }
  