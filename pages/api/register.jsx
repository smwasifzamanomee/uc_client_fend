import multer from "multer";
import nc from "next-connect";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(process.cwd(), "public", "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, new Date().getTime() + "-" + file.originalname);
    },
  }),
});

const handler = nc({
  onError(error, req, res) {
    console.error(error.stack);
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
})
  .use(upload.single("license_file"))
  .post(async (req, res) => {
    console.log("req.file", req.file);
    res.status(201).json({ body: req.body, file: req.file });
  });

export default handler;
