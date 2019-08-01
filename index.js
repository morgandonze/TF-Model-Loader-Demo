let code = require('tf-model-loader!./model/model.json')
eval(code)

const nsfwjs = require('nsfwjs')
const img = new Image()
img.crossOrigin = 'anonymous'

// some image here
img.src = 'https://i.imgur.com/Kwxetau.jpg'

// Load the model.
nsfwjs.load(modelLoader).then(model => {
  // Classify the image.
  model.classify(img).then(predictions => {
    console.log('Predictions', predictions)
  })
})
