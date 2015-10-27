'use strict';

module.exports = function () {
  SPACE: '\u200b',
  SPACE_HTML: '&#8203;',
  NON_JOINER: '\u200c',
  NON_JOINER_HTML_FIRST: '&#8204;',
  NON_JOINER_HTML_SECOND: '&zwnj;',

  /**
   * 
   * @param {string} character Character it can be a unicode value or an html string 
   * @return {boolean} Whether the given character is a zero width character
   */ 
  function: isZeroWidth (character) {
    var me = this;
    var items = [me.SPACE, me.SPACE_HTML, me.NON_JOINER, me.NON_JOINER_HTML_FIRST, me.NON_JOINER_HTML_SECOND];
    
    return items.indexOf(character) !== -1;
    
  }
  
}
