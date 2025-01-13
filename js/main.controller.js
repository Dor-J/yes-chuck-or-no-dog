'use strict'

function onInit() {
  addEventListeners()
}

function addEventListeners() {
  const onUserInputDebounce = debounce(onUserInput, 500)
  document
    .querySelector('#user-question')
    .addEventListener('input', (event) => onUserInputDebounce(event))
}

function onUserInput(ev) {
  ev.preventDefault()

  //   showLoader()
  const value = ev.target.value
  const valueLetters = value.split('')
  if (valueLetters.length < 3) {
    setHint('Qustion must be at least 3 letters.')
    return
  } else if (valueLetters.length > 3 && valueLetters.at(-1) !== '?') {
    setHint("Qustion must with a question mark ('?').")
    return
  } else {
    getYesNoAnswer(renderAns)
  }
}

function renderAns(data) {
  if (data.answer === 'yes') {
    getQuote(renderAnswerYes)
  } else {
    getDogImage(renderAnswerNo)
  }
}

function renderAnswerYes(data) {
  const randIdx = getRandomIntInclusive(1, 8)
  const img = new Image()
  img.src = `assets/images/chuck_norris_${randIdx}.png`
  img.onload = (img) => {
    document.querySelector('.answer-container h3 span').innerText = 'YES'
    document.querySelector('.answer-container p.quote').innerText = data.value
    document.querySelector('.answer-container img.answer-image').src =
      img.target.src
  }
}

function renderAnswerNo(data) {
  const img = new Image()
  img.onload = (img) => {
    document.querySelector('.answer-container h3 span').innerText = 'NO'
    document.querySelector('.answer-container p.quote').innerText = ''
    document.querySelector('.answer-container img.answer-image').src =
      img.target.src
  }
  img.src = data.message
}

function setHint(status) {
  document.querySelector('.answer-container p.quote').innerText = status

  setTimeout(clearHint, 2000)
}

function clearHint() {
  document.querySelector('.answer-container p.quote').innerText = ''
}
