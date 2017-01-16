'use strict'

/*
  inicialmente vamos a crear una constante llamada utils
  donde vamos va enviar nuestro funcion estraer tags.

  -la funcion extractTags recibe como parametro el texto o el comentario
  y ponemos en un array todos las palabras que inicien con # y luego con
  la funcion normalize los pasamos a minuscula y le quitamos el #
  esto lo retornamos para hacer nuestros test de la misma manera exportamos
  el modulo de utils
*/

const utils = {
  extractTags
}

function extractTags (text) {
  if (text == null) return []
  let matches = text.match(/#(\w+)/g)
  if (matches === null) return []
  matches = matches.map(normalize)
  return matches
}

function normalize (text) {
  text = text.toLowerCase()
  text = text.replace(/#/g, '')
  return text
}

module.exports = utils
