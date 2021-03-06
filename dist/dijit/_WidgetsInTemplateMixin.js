/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/parser"],function(t,e,i,r,o){return i("dijit._WidgetsInTemplateMixin",null,{_earlyTemplatedStartup:!1,widgetsInTemplate:!0,contextRequire:null,_beforeFillContent:function(){if(this.widgetsInTemplate){var t=this.domNode;if(this.containerNode&&!this.searchContainerNode&&(this.containerNode.stopParser=!0),o.parse(t,{noStart:!this._earlyTemplatedStartup,template:!0,inherited:{dir:this.dir,lang:this.lang,textDir:this.textDir},propsThis:this,contextRequire:this.contextRequire,scope:"dojo"}).then(r.hitch(this,function(t){this._startupWidgets=t;for(var e=0;e<t.length;e++)this._processTemplateNode(t[e],function(t,e){return t[e]},function(t,e,i){return e in t?t.connect(t,e,i):t.on(e,i,!0)});this.containerNode&&this.containerNode.stopParser&&delete this.containerNode.stopParser})),!this._startupWidgets)throw new Error(this.declaredClass+": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.")}},_processTemplateNode:function(t,e,i){return!(!e(t,"dojoType")&&!e(t,"data-dojo-type"))||this.inherited(arguments)},startup:function(){t.forEach(this._startupWidgets,function(t){t&&!t._started&&t.startup&&t.startup()}),this._startupWidgets=null,this.inherited(arguments)}})});
//# sourceMappingURL=sourcemaps/_WidgetsInTemplateMixin.js.map
