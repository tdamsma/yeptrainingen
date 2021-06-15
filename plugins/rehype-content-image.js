const visit = require('unist-util-visit')

module.exports = function nuxtContentImages() {
  // console.log(info)
  return function transformer(tree, _file) {
    visit(tree, 'element', visitor)

    function visitor(node) {
      if (node.tagName === 'img') {
        node.tagName = 'content-img'
        // console.log('rehype:', 'img -> content-img', node.properties)
      }
    }
  }
}
