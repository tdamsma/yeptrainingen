import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.gif', '.svg', '.heif'];

async function checkImages(dir) {
	try {
		const files = await fs.promises.readdir(dir, { withFileTypes: true });
		for (const file of files) {
			const filePath = path.join(dir, file.name);
			if (file.isDirectory()) {
				await checkImages(filePath);
			} else if (file.isFile()) {
				const ext = path.extname(file.name).toLowerCase();
				if (supportedFormats.includes(ext)) {
					try {
						// Attempt to read the metadata of the image file
						await sharp(filePath).metadata();
						// Attempt to resize the image
						await sharp(filePath)
							.resize(100, 100) // Resizing to 100x100 pixels
							.toBuffer();
						console.log(`Valid image: ${filePath}`);
					} catch (error) {
						console.error(`Invalid image or unsupported format: ${filePath} - ${error.message}`);
					}
				}
			}
		}
	} catch (err) {
		console.error(`Error reading directory ${dir}: ${err.message}`);
	}
}

checkImages(path.join(process.cwd(), 'content'));
checkImages(path.join(process.cwd(), 'static'));
