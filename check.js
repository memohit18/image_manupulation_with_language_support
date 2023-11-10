const { createCanvas, loadImage, registerFont } = require('canvas');

// Load the custom Hindi font
const hindiFontPath = '/Users/macbookpro/Documents/canvas/Akshar Unicode.ttf';
registerFont(hindiFontPath, { family: 'HindiFont' });

const backgroundImagePath = 'https://e1.pxfuel.com/desktop-wallpaper/10/282/desktop-wallpaper-minimalist-bus-vector-road-afari.jpg';
const secondImagePath = 'https://w0.peakpx.com/wallpaper/309/624/HD-wallpaper-luffytaro-luffy-portrait-thumbnail.jpg';

const canvas = createCanvas(800, 600);
const context = canvas.getContext('2d');

async function addHindiText() {
    try {
        // Load the background image
        const backgrocuundImage = await loadImage(backgroundImagePath);
        context.drawImage(backgrocuundImage, 0, 0, canvas.width, canvas.height);

        // Load the second image
        const secondImage = await loadImage(secondImagePath);
        context.drawImage(secondImage, 0, (canvas.height - secondImage.height) / 2);

        // Add Hindi text
        const hindiText = 'छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः';
        context.font = '32px HindiFont';
        context.fillStyle = '#000';
        context.fillText(hindiText, canvas.width - 500, (canvas.height - secondImage.height) / 2 + 20);

        // Save the merged image with the added Hindi text
        const fs = require('fs');
        const out = fs.createWriteStream('merged-image-canvas.jpg');
        const stream = canvas.createJPEGStream({ quality: 0.95 });
        stream.pipe(out);
        out.on('finish', () => console.log('The image was saved.'));
    } catch (error) {
        console.error(error);
    }
}

addHindiText();
