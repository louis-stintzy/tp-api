import multer from 'multer';

// ----- Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const limits = {
  fileSize: 1024 * 1024 * 3,
}; // Limite de taille de fichier à 3MB

const fileFilter = (req, file: Express.Multer.File, cb) => {
  if (!file) {
    return cb(null, true); // Pas de fichier à vérifier (l'envoi de fichier est facultatif)
  }

  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('File type not supported'), false);
  }
};

export const upload = multer({ storage, limits, fileFilter });
