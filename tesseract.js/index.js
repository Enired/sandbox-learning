const {createWorker, } = require('tesseract.js')

const worker = createWorker();

const textScanner = async() => {
  await worker.load();
  await worker.loadLanguage('eng+kor');
  await worker.initialize('eng+kor');

  const {data: {text}} = await worker.recognize('pictures/5.jpg', {rectangle: {top: 550, left: 0, height: 200, width: 300}})
  console.log(text);
  await worker.terminate();
}

textScanner();