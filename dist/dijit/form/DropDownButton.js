/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/query","../registry","../popup","./Button","../_Container","../_HasDropDown","dojo/text!./templates/DropDownButton.html","../a11yclick"],function(o,t,n,i,e,r,s,d,h){return o("dijit.form.DropDownButton",[r,s,d],{baseClass:"dijitDropDownButton",templateString:h,_fillContent:function(){if(this.srcNodeRef){var o=n("*",this.srcNodeRef);this.inherited(arguments,[o[0]]),this.dropDownContainer=this.srcNodeRef}},startup:function(){if(!this._started){if(!this.dropDown&&this.dropDownContainer){var o=n("[widgetId]",this.dropDownContainer)[0];o&&(this.dropDown=i.byNode(o)),delete this.dropDownContainer}this.dropDown&&e.hide(this.dropDown),this.inherited(arguments)}},isLoaded:function(){var o=this.dropDown;return!!o&&(!o.href||o.isLoaded)},loadDropDown:function(o){var n=this.dropDown,i=n.on("load",t.hitch(this,function(){i.remove(),o()}));n.refresh()},isFocusable:function(){return this.inherited(arguments)&&!this._mouseDown}})});
//# sourceMappingURL=../sourcemaps/form/DropDownButton.js.map
