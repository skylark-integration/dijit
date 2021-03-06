/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/dom-attr","dojo/_base/lang","dojo/query!css2","../registry"],function(t,e,i,o,n,s){return e("dijit.form._RadioButtonMixin",null,{type:"radio",_getRelatedWidgets:function(){var t=[];return n("input[type=radio]",this.focusNode.form||this.ownerDocument).forEach(o.hitch(this,function(e){if(e.name==this.name&&e.form==this.focusNode.form){var i=s.getEnclosingWidget(e);i&&t.push(i)}})),t},_setCheckedAttr:function(e){this.inherited(arguments),this._created&&e&&t.forEach(this._getRelatedWidgets(),o.hitch(this,function(t){t!=this&&t.checked&&t.set("checked",!1)}))},_getSubmitValue:function(t){return null==t?"on":t},_onClick:function(e){return this.checked||this.disabled?(e.stopPropagation(),e.preventDefault(),!1):this.readOnly?(e.stopPropagation(),e.preventDefault(),t.forEach(this._getRelatedWidgets(),o.hitch(this,function(t){i.set(this.focusNode||this.domNode,"checked",t.checked)})),!1):this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/form/_RadioButtonMixin.js.map
