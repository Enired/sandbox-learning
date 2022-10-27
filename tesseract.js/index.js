const {createWorker} = require('tesseract.js')

const worker = createWorker();

const textScanner = async() => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const {data: {text}} = await worker.recognize('pictures/steamtest4.jpg')
  console.log(text);
  await worker.terminate();
}

textScanner();