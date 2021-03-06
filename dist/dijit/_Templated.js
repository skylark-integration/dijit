/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["./_WidgetBase","./_TemplatedMixin","./_WidgetsInTemplateMixin","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/kernel"],function(e,t,i,a,d,n,r){return n.extend(e,{waiRole:"",waiState:""}),d("dijit._Templated",[t,i],{widgetsInTemplate:!1,constructor:function(){r.deprecated(this.declaredClass+": dijit._Templated deprecated, use dijit._TemplatedMixin and if necessary dijit._WidgetsInTemplateMixin","","2.0")},_processNode:function(e,t){var i=this.inherited(arguments),d=t(e,"waiRole");d&&e.setAttribute("role",d);var n=t(e,"waiState");return n&&a.forEach(n.split(/\s*,\s*/),function(t){if(-1!=t.indexOf("-")){var i=t.split("-");e.setAttribute("aria-"+i[0],i[1])}}),i}})});
//# sourceMappingURL=sourcemaps/_Templated.js.map
