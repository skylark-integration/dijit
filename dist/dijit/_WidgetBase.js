/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["require","dojo/_base/array","dojo/aspect","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/_base/kernel","dojo/_base/lang","dojo/on","dojo/ready","dojo/Stateful","dojo/topic","dojo/_base/window","./Destroyable","dojo/has!dojo-bidi?./_BidiMixin","./registry"],function(require,t,e,i,s,o,r,n,d,a,c,h,u,l,f,m,p,_,b,g,N,y,v){u.add("dijit-legacy-requires",!l.isAsync),u.add("dojo-bidi",!1),u("dijit-legacy-requires")&&p(0,function(){require(["dijit/_base/manager"])});var w={};function j(t){return function(e){n[e?"set":"remove"](this.domNode,t,e),this._set(t,e)}}var A=o("dijit._WidgetBase",[_,N],{id:"",_setIdAttr:"domNode",lang:"",_setLangAttr:j("lang"),dir:"",_setDirAttr:j("dir"),class:"",_setClassAttr:{node:"domNode",type:"class"},_setTypeAttr:null,style:"",title:"",tooltip:"",baseClass:"",srcNodeRef:null,domNode:null,containerNode:null,ownerDocument:null,_setOwnerDocumentAttr:function(t){this._set("ownerDocument",t)},attributeMap:{},_blankGif:i.blankGif||require.toUrl("dojo/resources/blank.gif"),_introspect:function(){var t=this.constructor;if(!t._setterAttrs){var e=t.prototype,i=t._setterAttrs=[],s=t._onMap={};for(var o in e.attributeMap)i.push(o);for(o in e)/^on/.test(o)&&(s[o.substring(2).toLowerCase()]=o),/^_set[A-Z](.*)Attr$/.test(o)&&(o=o.charAt(4).toLowerCase()+o.substr(5,o.length-9),e.attributeMap&&o in e.attributeMap||i.push(o))}},postscript:function(t,e){this.create(t,e)},create:function(t,e){var i;if(this._introspect(),this.srcNodeRef=r.byId(e),this._connects=[],this._supportingWidgets=[],this.srcNodeRef&&"string"==typeof this.srcNodeRef.id&&(this.id=this.srcNodeRef.id),t&&(this.params=t,f.mixin(this,t)),this.postMixInProperties(),this.id||(this.id=v.getUniqueId(this.declaredClass.replace(/\./g,"_")),this.params&&delete this.params.id),this.ownerDocument=this.ownerDocument||(this.srcNodeRef?this.srcNodeRef.ownerDocument:document),this.ownerDocumentBody=g.body(this.ownerDocument),v.add(this),this.buildRendering(),this.domNode){this._applyAttributes();var s=this.srcNodeRef;s&&s.parentNode&&this.domNode!==s&&(s.parentNode.replaceChild(this.domNode,s),i=!0),this.domNode.setAttribute("widgetId",this.id)}this.postCreate(),i&&delete this.srcNodeRef,this._created=!0},_applyAttributes:function(){var e={};for(var i in this.params||{})e[i]=this._get(i);for(i in t.forEach(this.constructor._setterAttrs,function(t){if(!(t in e)){var i=this._get(t);i&&this.set(t,i)}},this),e)this.set(i,e[i])},postMixInProperties:function(){},buildRendering:function(){if(this.domNode||(this.domNode=this.srcNodeRef||this.ownerDocument.createElement("div")),this.baseClass){var e=this.baseClass.split(" ");this.isLeftToRight()||(e=e.concat(t.map(e,function(t){return t+"Rtl"}))),d.add(this.domNode,e)}},postCreate:function(){},startup:function(){this._started||(this._started=!0,t.forEach(this.getChildren(),function(t){t._started||t._destroyed||!f.isFunction(t.startup)||(t.startup(),t._started=!0)}))},destroyRecursive:function(t){this._beingDestroyed=!0,this.destroyDescendants(t),this.destroy(t)},destroy:function(e){function i(t){t.destroyRecursive?t.destroyRecursive(e):t.destroy&&t.destroy(e)}this._beingDestroyed=!0,this.uninitialize(),t.forEach(this._connects,f.hitch(this,"disconnect")),t.forEach(this._supportingWidgets,i),this.domNode&&t.forEach(v.findWidgets(this.domNode,this.containerNode),i),this.destroyRendering(e),v.remove(this.id),this._destroyed=!0},destroyRendering:function(t){this.bgIframe&&(this.bgIframe.destroy(t),delete this.bgIframe),this.domNode&&(t?n.remove(this.domNode,"widgetId"):a.destroy(this.domNode),delete this.domNode),this.srcNodeRef&&(t||a.destroy(this.srcNodeRef),delete this.srcNodeRef)},destroyDescendants:function(e){t.forEach(this.getChildren(),function(t){t.destroyRecursive&&t.destroyRecursive(e)})},uninitialize:function(){return!1},_setStyleAttr:function(t){var e=this.domNode;f.isObject(t)?h.set(e,t):e.style.cssText?e.style.cssText+="; "+t:e.style.cssText=t,this._set("style",t)},_attrToDom:function(e,i,s){s=arguments.length>=3?s:this.attributeMap[e],t.forEach(f.isArray(s)?s:[s],function(t){var s=this[t.node||t||"domNode"];switch(t.type||"attribute"){case"attribute":f.isFunction(i)&&(i=f.hitch(this,i));var o=t.attribute?t.attribute:/^on[A-Z][a-zA-Z]*$/.test(e)?e.toLowerCase():e;s.tagName?n.set(s,o,i):s.set(o,i);break;case"innerText":s.innerHTML="",s.appendChild(this.ownerDocument.createTextNode(i));break;case"innerHTML":s.innerHTML=i;break;case"class":d.replace(s,i,this[e])}},this)},get:function(t){var e=this._getAttrNames(t);return this[e.g]?this[e.g]():this._get(t)},set:function(t,e){if("object"==typeof t){for(var i in t)this.set(i,t[i]);return this}var s=this._getAttrNames(t),o=this[s.s];if(f.isFunction(o))var r=o.apply(this,Array.prototype.slice.call(arguments,1));else{var n=this.focusNode&&!f.isFunction(this.focusNode)?"focusNode":"domNode",d=this[n]&&this[n].tagName,a=d&&(w[d]||(w[d]=function(t){var e={};for(var i in t)e[i.toLowerCase()]=!0;return e}(this[n]))),c=t in this.attributeMap?this.attributeMap[t]:s.s in this?this[s.s]:a&&s.l in a&&"function"!=typeof e||/^aria-|^data-|^role$/.test(t)?n:null;null!=c&&this._attrToDom(t,e,c),this._set(t,e)}return r||this},_attrPairNames:{},_getAttrNames:function(t){var e=this._attrPairNames;if(e[t])return e[t];var i=t.replace(/^[a-z]|-[a-zA-Z]/g,function(t){return t.charAt(t.length-1).toUpperCase()});return e[t]={n:t+"Node",s:"_set"+i+"Attr",g:"_get"+i+"Attr",l:i.toLowerCase()}},_set:function(t,e){var i,s,o=this[t];this[t]=e,!this._created||((i=o)===(s=e)||i!=i&&s!=s)||(this._watchCallbacks&&this._watchCallbacks(t,o,e),this.emit("attrmodified-"+t,{detail:{prevValue:o,newValue:e}}))},_get:function(t){return this[t]},emit:function(t,e,i){void 0===(e=e||{}).bubbles&&(e.bubbles=!0),void 0===e.cancelable&&(e.cancelable=!0),e.detail||(e.detail={}),e.detail.widget=this;var s,o=this["on"+t];return o&&(s=o.apply(this,i||[e])),this._started&&!this._beingDestroyed&&m.emit(this.domNode,t.toLowerCase(),e),s},on:function(t,i){var s=this._onMap(t);return s?e.after(this,s,i,!0):this.own(m(this.domNode,t,i))[0]},_onMap:function(t){var e=this.constructor,i=e._onMap;if(!i)for(var s in i=e._onMap={},e.prototype)/^on/.test(s)&&(i[s.replace(/^on/,"").toLowerCase()]=s);return i["string"==typeof t&&t.toLowerCase()]},toString:function(){return"[Widget "+this.declaredClass+", "+(this.id||"NO ID")+"]"},getChildren:function(){return this.containerNode?v.findWidgets(this.containerNode):[]},getParent:function(){return v.getEnclosingWidget(this.domNode.parentNode)},connect:function(t,e,i){return this.own(s.connect(t,e,this,i))[0]},disconnect:function(t){t.remove()},subscribe:function(t,e){return this.own(b.subscribe(t,f.hitch(this,e)))[0]},unsubscribe:function(t){t.remove()},isLeftToRight:function(){return this.dir?"ltr"==this.dir.toLowerCase():c.isBodyLtr(this.ownerDocument)},isFocusable:function(){return this.focus&&"none"!=h.get(this.domNode,"display")},placeAt:function(t,e){var i=!t.tagName&&v.byId(t);if(!i||!i.addChild||e&&"number"!=typeof e){var s=i&&"domNode"in i?i.containerNode&&!/after|before|replace/.test(e||"")?i.containerNode:i.domNode:r.byId(t,this.ownerDocument);a.place(this.domNode,s,e),!this._started&&(this.getParent()||{})._started&&this.startup()}else i.addChild(this,e);return this},defer:function(t,e){var i=setTimeout(f.hitch(this,function(){i&&(i=null,this._destroyed||f.hitch(this,t)())}),e||0);return{remove:function(){return i&&(clearTimeout(i),i=null),null}}}});return u("dojo-bidi")&&A.extend(y),A});
//# sourceMappingURL=sourcemaps/_WidgetBase.js.map
