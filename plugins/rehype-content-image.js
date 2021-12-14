const visit = require('unist-util-visit')

module.exports = function nuxtContentImages() {
  return function transformer(tree, _file) {
    visit(tree, 'element', visitor)

    function visitor(node) {
      if (node.tagName === 'img') {
        node.tagName = 'content-img'
      }
    }
  }
}
