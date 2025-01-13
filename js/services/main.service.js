'use strict'

const YES_NO_API_URL = 'https://yesno.wtf/api'
/**
 * {
 *  "answer": "no" or "yes"
 *  "forced": false,
 *  "image": gif url
 * }
 */

const CHUCK_NORRIS_API_URL = 'https://api.chucknorris.io/jokes/random'
/**
 * {
 *  "categories": [],
 *  "created_at": "2020-01-05 13:42:22.701402",
 *  "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png",
 *  "id": "YTkL8wJEQf-XIcjLn68tfw",
 *  "updated_at": "2020-01-05 13:42:22.701402",
 *  "url": "https://api.chucknorris.io/jokes/YTkL8wJEQf-XIcjLn68tfw",
 *  "value": "Chuck Norris created the All-Spark."
 * }
 */

const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random'

/**
 * {
 *  "message": jpg url,
 *  "status": "success"
 * }
 */

function getQuote(renderAnswerYes) {
  getAns(renderAnswerYes, CHUCK_NORRIS_API_URL)
}

function getDogImage(renderAnswerNo) {
  getAns(renderAnswerNo, DOG_API_URL)
}

function getYesNoAnswer(onSuccess) {
  getAns(onSuccess, YES_NO_API_URL)
}

function getAns(onSuccess, URL) {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const ans = JSON.parse(xhr.responseText)
      onSuccess(ans)
    }
  }

  xhr.open('GET', URL, true)
  xhr.send()
}
