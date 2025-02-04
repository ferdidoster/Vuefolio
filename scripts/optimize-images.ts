import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Define input and output directories
const inputDir: string = 'public/images';
const outputDir: string = 'public/optimized-images';

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to process images
function processImages(): void {
    const files: string[] = fs.readdirSync(inputDir);

    files.forEach((file) => {
        const inputPath: string = path.join(inputDir, file);
        const outputPath: string = path.join(outputDir, file.replace(/\.[^/.]+$/, '.webp')); // Convert to .webp

        sharp(inputPath)
            .resize({ width: 800 }) // Resize to 800px width
            .webp({ quality: 80 }) // Compress and convert to WebP
            .toFile(outputPath)
            .then((info) => {
                console.log(`Processed: ${file}`, info);
            })
            .catch((err) => {
                console.error(`Error processing ${file}:`, err.message);
            });
    });
}

// Execute the processing function
processImages();
