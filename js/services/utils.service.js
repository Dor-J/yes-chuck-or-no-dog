// js/services/utils.service.js
'use strict'

function debounce(func, wait) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      clearTimeout(timeout)
      func(...args)
    }, wait)
  }
}

function getDateStr(date) {
  return new Date(date).toISOString().substring(0, 10)
}

function getFormatDate(time) {
  const date = new Date(time)
  return date.toDateString()
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
