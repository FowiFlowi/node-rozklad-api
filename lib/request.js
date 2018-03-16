'use strict'

const debug = require('debug')('rozklad')
const req = require('got')
const cache = new Map()
const host = 'http://api.rozklad.org.ua/v2/'

async function sendreq(path, query = {}) {
  for (const name in query) {
    query[name] = JSON.stringify(query[name])
  }

  debug('path: %s', path)
  if (Object.keys(query).length > 0)
    debug('query: %o', query)
  
  try {
    const url = encodeURI(`${host}${path}`)
    const { body } = await req(url, { query, cache, json: true })

    return body.meta
      ? body
      : body.data

  } catch (e) {
    if (e.statusCode === 404) return null
    else throw e
  }
}

module.exports = sendreq
