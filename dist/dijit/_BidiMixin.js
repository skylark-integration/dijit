/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define([],function(){var t="‪",i="‬",e="‫";return{textDir:"",getTextDir:function(t){return"auto"==this.textDir?this._checkContextual(t):this.textDir},_checkContextual:function(t){var i=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return i?i[0]<="z"?"ltr":"rtl":this.dir?this.dir:this.isLeftToRight()?"ltr":"rtl"},applyTextDir:function(t,i){if(this.textDir){var e=this.textDir;if("auto"==e){if(void 0===i){var r=t.tagName.toLowerCase();i="input"==r||"textarea"==r?t.value:t.innerText||t.textContent||""}e=this._checkContextual(i)}t.dir!=e&&(t.dir=e)}},enforceTextDirWithUcc:function(r,n){return this.textDir?(r&&(r.originalText=n),("ltr"==("auto"==this.textDir?this._checkContextual(n):this.textDir)?t:e)+n+i):n},restoreOriginalText:function(t){return t.originalText&&(t.text=t.originalText,delete t.originalText),t},_setTextDirAttr:function(t){if(!this._created||this.textDir!=t){this._set("textDir",t);var i=null;this.displayNode?(i=this.displayNode,this.displayNode.align="rtl"==this.dir?"right":"left"):i=this.textDirNode||this.focusNode||this.textbox,i&&this.applyTextDir(i)}}}});
//# sourceMappingURL=sourcemaps/_BidiMixin.js.map
