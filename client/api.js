// this page is currently useless. 
//debate deleting.

import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const rootUrl = '/'
const acceptJsonHeader = { Accept: 'application/json' }

export function getItem () {
  return request.get(rootUrl)
    .set(acceptJsonHeader)
    .then(res => {
      return res.body.items
    })
    .catch(logError)
}

export function addItem (i) {
  return request.post(rootUrl)
    .set(acceptJsonHeader)
    .set({'Authorization': `Bearer ${getEncodedToken()}`})
    .send(i)
    .then(res => res.body.item)
    .catch(logError)
}

export function updateItem (i) {
  return request.put(rootUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(i)
    .then(res => res.body.item)
    .catch(logError)
}

export function deleteItem (id) {
  return request.delete(`${rootUrl}/${id}`)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then(res => res.body.item)
    .catch(logError)
}

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added may update and delete')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/api.js):',
      err.message
    )
    throw err
  }
}
