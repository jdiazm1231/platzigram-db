'use strict'

const test = require('ava')
const utils = require('../lib/utils')

test('Extracting hashtags from exit', t => {
  let tags = utils.extractTags('aqui en #Bogota con toda la #familia en #aLmuErZo ##year2017')

  t.deepEqual(tags, [
    'bogota',
    'familia',
    'almuerzo',
    'year2017'
  ])

  tags = utils.extractTags('una foto que no tiene tag')
  t.deepEqual(tags, [])

  tags = utils.extractTags()
  t.deepEqual(tags, [])

  tags = utils.extractTags(null)
  t.deepEqual(tags, [])
})

/*

test('this should pass', t => {
  t.pass()
})

test('this should fail', t => {
  t.fail()
})

// funciones_asincronas

test('this should support async/await', async t => {
  let p = Promise.resolve(42)
  let secret = await p
  t.is(secret, 42)
})

*/
