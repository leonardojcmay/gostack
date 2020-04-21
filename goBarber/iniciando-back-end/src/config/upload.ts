import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
    directory: tmpFolder,

    storage: multer.diskStorage({
        // sempre que for fazer upload de imagens, a imagens serão direcionadas para a pasta tmp
        destination: tmpFolder,
        filename(request, file, callback) {
            // fazendo com que o arquivo seja gerado com um nome unico
            const fileHash = crypto.randomBytes(10).toString('HEX');
            const fileName = `${fileHash}-${file.originalname}`;

            return callback(null, fileName);
        },
    }),
};
