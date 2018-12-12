/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

// XRegExp 1.5.0
// (c) 2007-2010 Steven Levithan
// MIT License
// <http://xregexp.com>
// Provides an augmented, extensible, cross-browser implementation of regular expressions,
// including support for additional syntax, flags, and methods

var XRegExp;

if (XRegExp) {
    // Avoid running twice, since that would break references to native globals
    throw Error("can't load XRegExp twice in the same frame");
}

// Run within an anonymous function to protect variables and avoid new globals
(function () {

    //---------------------------------
    //  Constructor
    //---------------------------------

    // Accepts a pattern and flags; returns a new, extended `RegExp` object. Differs from a native
    // regular expression in that additional syntax and flags are supported and cross-browser
    // syntax inconsistencies are ameliorated
    XRegExp = function (pattern, flags) {
        var output = [],
            currScope = XRegExp.OUTSIDE_CLASS,
            pos = 0,
            context, tokenResult, match, chr, regex;

        if (XRegExp.isRegExp(pattern)) {
            if (flags !== undefined)
                throw TypeError("can't supply flags when constructing one RegExp from another");
            return clone(pattern);
        }
        // Tokens become part of the regex construction process, so protect against infinite
        // recursion when an XRegExp is constructed within a token handler or trigger
        if (isInsideConstructor)
            throw Error("can't call the XRegExp constructor within token definition functions");

        flags = flags || "";
        context = { // `this` object for custom tokens
            hasNamedCapture: false,
            captureNames: [],
            hasFlag: function (flag) {return flags.indexOf(flag) > -1;},
            setFlag: function (flag) {flags += flag;}
        };

        while (pos < pattern.length) {
            // Check for custom tokens at the current position
            tokenResult = runTokens(pattern, pos, currScope, context);

            if (tokenResult) {
                output.push(tokenResult.output);
                pos += (tokenResult.match[0].length || 1);
            } else {
                // Check for native multicharacter metasequences (excluding character classes) at
                // the current position
                if (match = real.exec.call(nativeTokens[currScope], pattern.slice(pos))) {
                    output.push(match[0]);
                    pos += match[0].length;
                } else {
                    chr = pattern.charAt(pos);
                    if (chr === "[")
                        currScope = XRegExp.INSIDE_CLASS;
                    else if (chr === "]")
                        currScope = XRegExp.OUTSIDE_CLASS;
                    // Advance position one character
                    output.push(chr);
                    pos++;
                }
            }
        }

        regex = RegExp(output.join(""), real.replace.call(flags, flagClip, ""));
        regex._xregexp = {
            source: pattern,
            captureNames: context.hasNamedCapture ? context.captureNames : null
        };
        return regex;
    };


    //---------------------------------
    //  Public properties
    //---------------------------------

    XRegExp.version = "1.5.0";

    // Token scope bitflags
    XRegExp.INSIDE_CLASS = 1;
    XRegExp.OUTSIDE_CLASS = 2;


    //---------------------------------
    //  Private variables
    //---------------------------------

    var replacementToken = /\$(?:(\d\d?|[$&`'])|{([$\w]+)})/g,
        flagClip = /[^gimy]+|([\s\S])(?=[\s\S]*\1)/g, // Nonnative and duplicate flags
        quantifier = /^(?:[?*+]|{\d+(?:,\d*)?})\??/,
        isInsideConstructor = false,
        tokens = [],
        // Copy native globals for reference ("native" is an ES3 reserved keyword)
        real = {
            exec: RegExp.prototype.exec,
            test: RegExp.prototype.test,
            match: String.prototype.match,
            replace: String.prototype.replace,
            split: String.prototype.split
        },
        compliantExecNpcg = real.exec.call(/()??/, "")[1] === undefined, // check `exec` handling of nonparticipating capturing groups
        compliantLastIndexIncrement = function () {
            var x = /^/g;
            real.test.call(x, "");
            return !x.lastIndex;
        }(),
        compliantLastIndexReset = function () {
            var x = /x/g;
            real.replace.call("x", x, "");
            return !x.lastIndex;
        }(),
        hasNativeY = RegExp.prototype.sticky !== undefined,
        nativeTokens = {};

    // `nativeTokens` match native multicharacter metasequences only (including deprecated octals,
    // excluding character classes)
    nativeTokens[XRegExp.INSIDE_CLASS] = /^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/;
    nativeTokens[XRegExp.OUTSIDE_CLASS] = /^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/;


    //---------------------------------
    //  Public methods
    //---------------------------------

    // Lets you extend or change XRegExp syntax and create custom flags. This is used internally by
    // the XRegExp library and can be used to create XRegExp plugins. This function is intended for
    // users with advanced knowledge of JavaScript's regular expression syntax and behavior. It can
    // be disabled by `XRegExp.freezeTokens`
    XRegExp.addToken = function (regex, handler, scope, trigger) {
        tokens.push({
            pattern: clone(regex, "g" + (hasNativeY ? "y" : "")),
            handler: handler,
            scope: scope || XRegExp.OUTSIDE_CLASS,
            trigger: trigger || null
        });
    };

    // Accepts a pattern and flags; returns an extended `RegExp` object. If the pattern and flag
    // combination has previously been cached, the cached copy is returned; otherwise the newly
    // created regex is cached
    XRegExp.cache = function (pattern, flags) {
        var key = pattern + "/" + (flags || "");
        return XRegExp.cache[key] || (XRegExp.cache[key] = XRegExp(pattern, flags));
    };

    // Accepts a `RegExp` instance; returns a copy with the `/g` flag set. The copy has a fresh
    // `lastIndex` (set to zero). If you want to copy a regex without forcing the `global`
    // property, use `XRegExp(regex)`. Do not use `RegExp(regex)` because it will not preserve
    // special properties required for named capture
    XRegExp.copyAsGlobal = function (regex) {
        return clone(regex, "g");
    };

    // Accepts a string; returns the string with regex metacharacters escaped. The returned string
    // can safely be used at any point within a regex to match the provided literal string. Escaped
    // characters are [ ] { } ( ) * + ? - . , \ ^ $ | # and whitespace
    XRegExp.escape = function (str) {
        return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };

    // Accepts a string to search, regex to search with, position to start the search within the
    // string (default: 0), and an optional Boolean indicating whether matches must start at-or-
    // after the position or at the specified position only. This function ignores the `lastIndex`
    // property of the provided regex
    XRegExp.execAt = function (str, regex, pos, anchored) {
        regex = clone(regex, "g" + ((anchored && hasNativeY) ? "y" : ""));
        regex.lastIndex = pos = pos || 0;
        var match = regex.exec(str);
        if (anchored)
            return (match && match.index === pos) ? match : null;
        else
            return match;
    };

    // Breaks the unrestorable link to XRegExp's private list of tokens, thereby preventing
    // syntax and flag changes. Should be run after XRegExp and any plugins are loaded
    XRegExp.freezeTokens = function () {
        XRegExp.addToken = function () {
            throw Error("can't run addToken after freezeTokens");
        };
    };

    // Accepts any value; returns a Boolean indicating whether the argument is a `RegExp` object.
    // Note that this is also `true` for regex literals and regexes created by the `XRegExp`
    // constructor. This works correctly for variables created in another frame, when `instanceof`
    // and `constructor` checks would fail to work as intended
    XRegExp.isRegExp = function (o) {
        return Object.prototype.toString.call(o) === "[object RegExp]";
    };

    // Executes `callback` once per match within `str`. Provides a simpler and cleaner way to
    // iterate over regex matches compared to the traditional approaches of subverting
    // `String.prototype.replace` or repeatedly calling `exec` within a `while` loop
    XRegExp.iterate = function (str, origRegex, callback, context) {
        var regex = clone(origRegex, "g"),
            i = -1, match;
        while (match = regex.exec(str)) {
            callback.call(context, match, ++i, str, regex);
            if (regex.lastIndex === match.index)
                regex.lastIndex++;
        }
        if (origRegex.global)
            origRegex.lastIndex = 0;
    };

    // Accepts a string and an array of regexes; returns the result of using each successive regex
    // to search within the matches of the previous regex. The array of regexes can also contain
    // objects with `regex` and `backref` properties, in which case the named or numbered back-
    // references specified are passed forward to the next regex or returned. E.g.:
    // var xregexpImgFileNames = XRegExp.matchChain(html, [
    //     {regex: /<img\b([^>]+)>/i, backref: 1}, // <img> tag attributes
    //     {regex: XRegExp('(?ix) \\s src=" (?<src> [^"]+ )'), backref: "src"}, // src attribute values
    //     {regex: XRegExp("^http://xregexp\\.com(/[^#?]+)", "i"), backref: 1}, // xregexp.com paths
    //     /[^\/]+$/ // filenames (strip directory paths)
    // ]);
    XRegExp.matchChain = function (str, chain) {
        return function recurseChain (values, level) {
            var item = chain[level].regex ? chain[level] : {regex: chain[level]},
                regex = clone(item.regex, "g"),
                matches = [], i;
            for (i = 0; i < values.length; i++) {
                XRegExp.iterate(values[i], regex, function (match) {
                    matches.push(item.backref ? (match[item.backref] || "") : match[0]);
                });
            }
            return ((level === chain.length - 1) || !matches.length) ?
                matches : recurseChain(matches, level + 1);
        }([str], 0);
    };


    //---------------------------------
    //  New RegExp prototype methods
    //---------------------------------

    // Accepts a context object and arguments array; returns the result of calling `exec` with the
    // first value in the arguments array. the context is ignored but is accepted for congruity
    // with `Function.prototype.apply`
    RegExp.prototype.apply = function (context, args) {
        return this.exec(args[0]);
    };

    // Accepts a context object and string; returns the result of calling `exec` with the provided
    // string. the context is ignored but is accepted for congruity with `Function.prototype.call`
    RegExp.prototype.call = function (context, str) {
        return this.exec(str);
    };


    //---------------------------------
    //  Overriden native methods
    //---------------------------------

    // Adds named capture support (with backreferences returned as `result.name`), and fixes two
    // cross-browser issues per ES3:
    // - Captured values for nonparticipating capturing groups should be returned as `undefined`,
    //   rather than the empty string.
    // - `lastIndex` should not be incremented after zero-length matches.
    RegExp.prototype.exec = function (str) {
        var match = real.exec.apply(this, arguments),
            name, r2;
        if (match) {
            // Fix browsers whose `exec` methods don't consistently return `undefined` for
            // nonparticipating capturing groups
            if (!compliantExecNpcg && match.length > 1 && indexOf(match, "") > -1) {
                r2 = RegExp(this.source, real.replace.call(getNativeFlags(this), "g", ""));
                // Using `str.slice(match.index)` rather than `match[0]` in case lookahead allowed
                // matching due to characters outside the match
                real.replace.call(str.slice(match.index), r2, function () {
                    for (var i = 1; i < arguments.length - 2; i++) {
                        if (arguments[i] === undefined)
                            match[i] = undefined;
                    }
                });
            }
            // Attach named capture properties
            if (this._xregexp && this._xregexp.captureNames) {
                for (var i = 1; i < match.length; i++) {
                    name = this._xregexp.captureNames[i - 1];
                    if (name)
                       match[name] = match[i];
                }
            }
            // Fix browsers that increment `lastIndex` after zero-length matches
            if (!compliantLastIndexIncrement && this.global && !match[0].length && (this.lastIndex > match.index))
                this.lastIndex--;
        }
        return match;
    };

    // Don't override `test` if it won't change anything
    if (!compliantLastIndexIncrement) {
        // Fix browser bug in native method
        RegExp.prototype.test = function (str) {
            // Use the native `exec` to skip some processing overhead, even though the overriden
            // `exec` would take care of the `lastIndex` fix
            var match = real.exec.call(this, str);
            // Fix browsers that increment `lastIndex` after zero-length matches
            if (match && this.global && !match[0].length && (this.lastIndex > match.index))
                this.lastIndex--;
            return !!match;
        };
    }

    // Adds named capture support and fixes browser bugs in native method
    String.prototype.match = function (regex) {
        if (!XRegExp.isRegExp(regex))
            regex = RegExp(regex); // Native `RegExp`
        if (regex.global) {
            var result = real.match.apply(this, arguments);
            regex.lastIndex = 0; // Fix IE bug
            return result;
        }
        return regex.exec(this); // Run the altered `exec`
    };

    // Adds support for `${n}` tokens for named and numbered backreferences in replacement text,
    // and provides named backreferences to replacement functions as `arguments[0].name`. Also
    // fixes cross-browser differences in replacement text syntax when performing a replacement
    // using a nonregex search value, and the value of replacement regexes' `lastIndex` property
    // during replacement iterations. Note that this doesn't support SpiderMonkey's proprietary
    // third (`flags`) parameter
    String.prototype.replace = function (search, replacement) {
        var isRegex = XRegExp.isRegExp(search),
            captureNames, result, str;

        // There are many combinations of search/replacement types/values and browser bugs that
        // preclude passing to native `replace`, so just keep this check relatively simple
        if (isRegex && typeof replacement.valueOf() === "string" && replacement.indexOf("${") === -1 && compliantLastIndexReset)
            return real.replace.apply(this, arguments);

        if (!isRegex)
            search = search + ""; // Type conversion
        else if (search._xregexp)
            captureNames = search._xregexp.captureNames; // Array or `null`

        if (typeof replacement === "function") {
            result = real.replace.call(this, search, function () {
                if (captureNames) {
                    // Change the `arguments[0]` string primitive to a String object which can store properties
                    arguments[0] = new String(arguments[0]);
                    // Store named backreferences on `arguments[0]`
                    for (var i = 0; i < captureNames.length; i++) {
                        if (captureNames[i])
                            arguments[0][captureNames[i]] = arguments[i + 1];
                    }
                }
                // Update `lastIndex` before calling `replacement`
                if (isRegex && search.global)
                    search.lastIndex = arguments[arguments.length - 2] + arguments[0].length;
                return replacement.apply(null, arguments);
            });
        } else {
            str = this + ""; // Type conversion, so `args[args.length - 1]` will be a string (given nonstring `this`)
            result = real.replace.call(str, search, function () {
                var args = arguments; // Keep this function's `arguments` available through closure
                return real.replace.call(replacement, replacementToken, function ($0, $1, $2) {
                    // Numbered backreference (without delimiters) or special variable
                    if ($1) {
                        switch ($1) {
                            case "$": return "$";
                            case "&": return args[0];
                            case "`": return args[args.length - 1].slice(0, args[args.length - 2]);
                            case "'": return args[args.length - 1].slice(args[args.length - 2] + args[0].length);
                            // Numbered backreference
                            default:
                                // What does "$10" mean?
                                // - Backreference 10, if 10 or more capturing groups exist
                                // - Backreference 1 followed by "0", if 1-9 capturing groups exist
                                // - Otherwise, it's the string "$10"
                                // Also note:
                                // - Backreferences cannot be more than two digits (enforced by `replacementToken`)
                                // - "$01" is equivalent to "$1" if a capturing group exists, otherwise it's the string "$01"
                                // - There is no "$0" token ("$&" is the entire match)
                                var literalNumbers = "";
                                $1 = +$1; // Type conversion; drop leading zero
                                if (!$1) // `$1` was "0" or "00"
                                    return $0;
                                while ($1 > args.length - 3) {
                                    literalNumbers = String.prototype.slice.call($1, -1) + literalNumbers;
                                    $1 = Math.floor($1 / 10); // Drop the last digit
                                }
                                return ($1 ? args[$1] || "" : "$") + literalNumbers;
                        }
                    // Named backreference or delimited numbered backreference
                    } else {
                        // What does "${n}" mean?
                        // - Backreference to numbered capture n. Two differences from "$n":
                        //   - n can be more than two digits
                        //   - Backreference 0 is allowed, and is the entire match
                        // - Backreference to named capture n, if it exists and is not a number overridden by numbered capture
                        // - Otherwise, it's the string "${n}"
                        var n = +$2; // Type conversion; drop leading zeros
                        if (n <= args.length - 3)
                            return args[n];
                        n = captureNames ? indexOf(captureNames, $2) : -1;
                        return n > -1 ? args[n + 1] : $0;
                    }
                });
            });
        }

        if (isRegex && search.global)
            search.lastIndex = 0; // Fix IE bug

        return result;
    };

    // A consistent cross-browser, ES3 compliant `split`
    String.prototype.split = function (s /* separator */, limit) {
        // If separator `s` is not a regex, use the native `split`
        if (!XRegExp.isRegExp(s))
            return real.split.apply(this, arguments);

        var str = this + "", // Type conversion
            output = [],
            lastLastIndex = 0,
            match, lastLength;

        // Behavior for `limit`: if it's...
        // - `undefined`: No limit
        // - `NaN` or zero: Return an empty array
        // - A positive number: Use `Math.floor(limit)`
        // - A negative number: No limit
        // - Other: Type-convert, then use the above rules
        if (limit === undefined || +limit < 0) {
            limit = Infinity;
        } else {
            limit = Math.floor(+limit);
            if (!limit)
                return [];
        }

        // This is required if not `s.global`, and it avoids needing to set `s.lastIndex` to zero
        // and restore it to its original value when we're done using the regex
        s = XRegExp.copyAsGlobal(s);

        while (match = s.exec(str)) { // Run the altered `exec` (required for `lastIndex` fix, etc.)
            if (s.lastIndex > lastLastIndex) {
                output.push(str.slice(lastLastIndex, match.index));

                if (match.length > 1 && match.index < str.length)
                    Array.prototype.push.apply(output, match.slice(1));

                lastLength = match[0].length;
                lastLastIndex = s.lastIndex;

                if (output.length >= limit)
                    break;
            }

            if (s.lastIndex === match.index)
                s.lastIndex++;
        }

        if (lastLastIndex === str.length) {
            if (!real.test.call(s, "") || lastLength)
                output.push("");
        } else {
            output.push(str.slice(lastLastIndex));
        }

        return output.length > limit ? output.slice(0, limit) : output;
    };


    //---------------------------------
    //  Private helper functions
    //---------------------------------

    // Supporting function for `XRegExp`, `XRegExp.copyAsGlobal`, etc. Returns a copy of a `RegExp`
    // instance with a fresh `lastIndex` (set to zero), preserving properties required for named
    // capture. Also allows adding new flags in the process of copying the regex
    function clone (regex, additionalFlags) {
        if (!XRegExp.isRegExp(regex))
            throw TypeError("type RegExp expected");
        var x = regex._xregexp;
        regex = XRegExp(regex.source, getNativeFlags(regex) + (additionalFlags || ""));
        if (x) {
            regex._xregexp = {
                source: x.source,
                captureNames: x.captureNames ? x.captureNames.slice(0) : null
            };
        }
        return regex;
    };

    function getNativeFlags (regex) {
        return (regex.global     ? "g" : "") +
               (regex.ignoreCase ? "i" : "") +
               (regex.multiline  ? "m" : "") +
               (regex.extended   ? "x" : "") + // Proposed for ES4; included in AS3
               (regex.sticky     ? "y" : "");
    };

    function runTokens (pattern, index, scope, context) {
        var i = tokens.length,
            result, match, t;
        // Protect against constructing XRegExps within token handler and trigger functions
        isInsideConstructor = true;
        // Must reset `isInsideConstructor`, even if a `trigger` or `handler` throws
        try {
            while (i--) { // Run in reverse order
                t = tokens[i];
                if ((scope & t.scope) && (!t.trigger || t.trigger.call(context))) {
                    t.pattern.lastIndex = index;
                    match = t.pattern.exec(pattern); // Running the altered `exec` here allows use of named backreferences, etc.
                    if (match && match.index === index) {
                        result = {
                            output: t.handler.call(context, match, scope),
                            match: match
                        };
                        break;
                    }
                }
            }
        } catch (err) {
            throw err;
        } finally {
            isInsideConstructor = false;
        }
        return result;
    };

    function indexOf (array, item, from) {
        if (Array.prototype.indexOf) // Use the native array method if available
            return array.indexOf(item, from);
        for (var i = from || 0; i < array.length; i++) {
            if (array[i] === item)
                return i;
        }
        return -1;
    };


    //---------------------------------
    //  Built-in tokens
    //---------------------------------

    // Augment XRegExp's regular expression syntax and flags. Note that when adding tokens, the
    // third (`scope`) argument defaults to `XRegExp.OUTSIDE_CLASS`

    // Comment pattern: (?# )
    XRegExp.addToken(
        /\(\?#[^)]*\)/,
        function (match) {
            // Keep tokens separated unless the following token is a quantifier
            return real.test.call(quantifier, match.input.slice(match.index + match[0].length)) ? "" : "(?:)";
        }
    );

    // Capturing group (match the opening parenthesis only).
    // Required for support of named capturing groups
    XRegExp.addToken(
        /\((?!\?)/,
        function () {
            this.captureNames.push(null);
            return "(";
        }
    );

    // Named capturing group (match the opening delimiter only): (?<name>
    XRegExp.addToken(
        /\(\?<([$\w]+)>/,
        function (match) {
            this.captureNames.push(match[1]);
            this.hasNamedCapture = true;
            return "(";
        }
    );

    // Named backreference: \k<name>
    XRegExp.addToken(
        /\\k<([\w$]+)>/,
        function (match) {
            var index = indexOf(this.captureNames, match[1]);
            // Keep backreferences separate from subsequent literal numbers. Preserve back-
            // references to named groups that are undefined at this point as literal strings
            return index > -1 ?
                "\\" + (index + 1) + (isNaN(match.input.charAt(match.index + match[0].length)) ? "" : "(?:)") :
                match[0];
        }
    );

    // Empty character class: [] or [^]
    XRegExp.addToken(
        /\[\^?]/,
        function (match) {
            // For cross-browser compatibility with ES3, convert [] to \b\B and [^] to [\s\S].
            // (?!) should work like \b\B, but is unreliable in Firefox
            return match[0] === "[]" ? "\\b\\B" : "[\\s\\S]";
        }
    );

    // Mode modifier at the start of the pattern only, with any combination of flags imsx: (?imsx)
    // Does not support x(?i), (?-i), (?i-m), (?i: ), (?i)(?m), etc.
    XRegExp.addToken(
        /^\(\?([imsx]+)\)/,
        function (match) {
            this.setFlag(match[1]);
            return "";
        }
    );

    // Whitespace and comments, in free-spacing (aka extended) mode only
    XRegExp.addToken(
        /(?:\s+|#.*)+/,
        function (match) {
            // Keep tokens separated unless the following token is a quantifier
            return real.test.call(quantifier, match.input.slice(match.index + match[0].length)) ? "" : "(?:)";
        },
        XRegExp.OUTSIDE_CLASS,
        function () {return this.hasFlag("x");}
    );

    // Dot, in dotall (aka singleline) mode only
    XRegExp.addToken(
        /\./,
        function () {return "[\\s\\S]";},
        XRegExp.OUTSIDE_CLASS,
        function () {return this.hasFlag("s");}
    );


    //---------------------------------
    //  Backward compatibility
    //---------------------------------

    // Uncomment the following block for compatibility with XRegExp 1.0-1.2:
    /*
    XRegExp.matchWithinChain = XRegExp.matchChain;
    RegExp.prototype.addFlags = function (s) {return clone(this, s);};
    RegExp.prototype.execAll = function (s) {var r = []; XRegExp.iterate(s, this, function (m) {r.push(m);}); return r;};
    RegExp.prototype.forEachExec = function (s, f, c) {return XRegExp.iterate(s, this, f, c);};
    RegExp.prototype.validate = function (s) {var r = RegExp("^(?:" + this.source + ")$(?!\\s)", getNativeFlags(this)); if (this.global) this.lastIndex = 0; return s.search(r) === 0;};
    */

})();

// CommonJS
typeof(exports) != 'undefined' ? exports.XRegExp = XRegExp : null;

//
// Begin anonymous function. This is used to contain local scope variables without polutting global scope.
//
if (typeof(SyntaxHighlighter) == 'undefined') var SyntaxHighlighter = function() { 

// CommonJS
if (typeof(require) != 'undefined' && typeof(XRegExp) == 'undefined')
{
	XRegExp = require('XRegExp').XRegExp;
}

// Shortcut object which will be assigned to the SyntaxHighlighter variable.
// This is a shorthand for local reference in order to avoid long namespace 
// references to SyntaxHighlighter.whatever...
var sh = {
	defaults : {
		/** Additional CSS class names to be added to highlighter elements. */
		'class-name' : '',
		
		/** First line number. */
		'first-line' : 1,
		
		/**
		 * Pads line numbers. Possible values are:
		 *
		 *   false - don't pad line numbers.
		 *   true  - automaticaly pad numbers with minimum required number of leading zeroes.
		 *   [int] - length up to which pad line numbers.
		 */
		'pad-line-numbers' : false,
		
		/** Lines to highlight. */
		'highlight' : null,
		
		/** Title to be displayed above the code block. */
		'title' : null,
		
		/** Enables or disables smart tabs. */
		'smart-tabs' : true,
		
		/** Gets or sets tab size. */
		'tab-size' : 4,
		
		/** Enables or disables gutter. */
		'gutter' : true,
		
		/** Enables or disables toolbar. */
		'toolbar' : true,
		
		/** Enables quick code copy and paste from double click. */
		'quick-code' : true,
		
		/** Forces code view to be collapsed. */
		'collapse' : false,
		
		/** Enables or disables automatic links. */
		'auto-links' : true,
		
		/** Gets or sets light mode. Equavalent to turning off gutter and toolbar. */
		'light' : false,
		
		'html-script' : false
	},
	
	config : {
		space : '&nbsp;',
		
		/** Enables use of <SCRIPT type="syntaxhighlighter" /> tags. */
		useScriptTags : true,
		
		/** Blogger mode flag. */
		bloggerMode : false,
		
		stripBrs : false,
		
		/** Name of the tag that SyntaxHighlighter will automatically look for. */
		tagName : 'pre',
		
		strings : {
			expandSource : 'expand source',
			help : '?',
			alert: 'SyntaxHighlighter\n\n',
			noBrush : 'Can\'t find brush for: ',
			brushNotHtmlScript : 'Brush wasn\'t configured for html-script option: ',
			
			// this is populated by the build script
			aboutDialog : '@ABOUT@'
		}
	},
	
	/** Internal 'global' variables. */
	vars : {
		discoveredBrushes : null,
		highlighters : {}
	},
	
	/** This object is populated by user included external brush files. */
	brushes : {},

	/** Common regular expressions. */
	regexLib : {
		multiLineCComments			: /\/\*[\s\S]*?\*\//gm,
		singleLineCComments			: /\/\/.*$/gm,
		singleLinePerlComments		: /#.*$/gm,
		doubleQuotedString			: /"([^\\"\n]|\\.)*"/g,
		singleQuotedString			: /'([^\\'\n]|\\.)*'/g,
		multiLineDoubleQuotedString	: new XRegExp('"([^\\\\"]|\\\\.)*"', 'gs'),
		multiLineSingleQuotedString	: new XRegExp("'([^\\\\']|\\\\.)*'", 'gs'),
		xmlComments					: /(&lt;|<)!--[\s\S]*?--(&gt;|>)/gm,
		url							: /\w+:\/\/[\w-.\/?%&=:@;]*/g,
		
		/** <?= ?> tags. */
		phpScriptTags 				: { left: /(&lt;|<)\?=?/g, right: /\?(&gt;|>)/g },
		
		/** <%= %> tags. */
		aspScriptTags				: { left: /(&lt;|<)%=?/g, right: /%(&gt;|>)/g },
		
		/** <script></script> tags. */
		scriptScriptTags			: { left: /(&lt;|<)\s*script.*?(&gt;|>)/gi, right: /(&lt;|<)\/\s*script\s*(&gt;|>)/gi }
	},

	toolbar: {
		/**
		 * Generates HTML markup for the toolbar.
		 * @param {Highlighter} highlighter Highlighter instance.
		 * @return {String} Returns HTML markup.
		 */
		getHtml: function(highlighter)
		{
			var html = '<div class="toolbar">',
				items = sh.toolbar.items,
				list = items.list
				;
			
			function defaultGetHtml(highlighter, name)
			{
				return sh.toolbar.getButtonHtml(highlighter, name, sh.config.strings[name]);
			};
			
			for (var i = 0; i < list.length; i++)
				html += (items[list[i]].getHtml || defaultGetHtml)(highlighter, list[i]);
			
			html += '</div>';
			
			return html;
		},
		
		/**
		 * Generates HTML markup for a regular button in the toolbar.
		 * @param {Highlighter} highlighter Highlighter instance.
		 * @param {String} commandName		Command name that would be executed.
		 * @param {String} label			Label text to display.
		 * @return {String}					Returns HTML markup.
		 */
		getButtonHtml: function(highlighter, commandName, label)
		{
			return '<span><a href="#" class="toolbar_item'
				+ ' command_' + commandName
				+ ' ' + commandName
				+ '">' + label + '</a></span>'
				;
		},
		
		/**
		 * Event handler for a toolbar anchor.
		 */
		handler: function(e)
		{
			var target = e.target,
				className = target.className || ''
				;

			function getValue(name)
			{
				var r = new RegExp(name + '_(\\w+)'),
					match = r.exec(className)
					;

				return match ? match[1] : null;
			};
			
			var highlighter = getHighlighterById(findParentElement(target, '.syntaxhighlighter').id),
				commandName = getValue('command')
				;
			
			// execute the toolbar command
			if (highlighter && commandName)
				sh.toolbar.items[commandName].execute(highlighter);

			// disable default A click behaviour
			e.preventDefault();
		},
		
		/** Collection of toolbar items. */
		items : {
			// Ordered lis of items in the toolbar. Can't expect `for (var n in items)` to be consistent.
			list: ['expandSource', 'help'],

			expandSource: {
				getHtml: function(highlighter)
				{
					if (highlighter.getParam('collapse') != true)
						return '';
						
					var title = highlighter.getParam('title');
					return sh.toolbar.getButtonHtml(highlighter, 'expandSource', title ? title : sh.config.strings.expandSource);
				},
			
				execute: function(highlighter)
				{
					var div = getHighlighterDivById(highlighter.id);
					removeClass(div, 'collapsed');
				}
			},

			/** Command to display the about dialog window. */
			help: {
				execute: function(highlighter)
				{	
					var wnd = popup('', '_blank', 500, 250, 'scrollbars=0'),
						doc = wnd.document
						;
					
					doc.write(sh.config.strings.aboutDialog);
					doc.close();
					wnd.focus();
				}
			}
		}
	},

	/**
	 * Finds all elements on the page which should be processes by SyntaxHighlighter.
	 *
	 * @param {Object} globalParams		Optional parameters which override element's 
	 * 									parameters. Only used if element is specified.
	 * 
	 * @param {Object} element	Optional element to highlight. If none is
	 * 							provided, all elements in the current document 
	 * 							are returned which qualify.
	 *
	 * @return {Array}	Returns list of <code>{ target: DOMElement, params: Object }</code> objects.
	 */
	findElements: function(globalParams, element)
	{
		var elements = element ? [element] : toArray(document.getElementsByTagName(sh.config.tagName)), 
			conf = sh.config,
			result = []
			;

		// support for <SCRIPT TYPE="syntaxhighlighter" /> feature
		if (conf.useScriptTags)
			elements = elements.concat(getSyntaxHighlighterScriptTags());

		if (elements.length === 0) 
			return result;
	
		for (var i = 0; i < elements.length; i++) 
		{
			var item = {
				target: elements[i], 
				// local params take precedence over globals
				params: merge(globalParams, parseParams(elements[i].className))
			};

			if (item.params['brush'] == null)
				continue;
				
			result.push(item);
		}
		
		return result;
	},

	/**
	 * Shorthand to highlight all elements on the page that are marked as 
	 * SyntaxHighlighter source code.
	 * 
	 * @param {Object} globalParams		Optional parameters which override element's 
	 * 									parameters. Only used if element is specified.
	 * 
	 * @param {Object} element	Optional element to highlight. If none is
	 * 							provided, all elements in the current document 
	 * 							are highlighted.
	 */ 
	highlight: function(globalParams, element)
	{
		var elements = this.findElements(globalParams, element),
			propertyName = 'innerHTML', 
			highlighter = null,
			conf = sh.config
			;

		if (elements.length === 0) 
			return;
	
		for (var i = 0; i < elements.length; i++) 
		{
			var element = elements[i],
				target = element.target,
				params = element.params,
				brushName = params.brush,
				code
				;

			if (brushName == null)
				continue;

			// Instantiate a brush
			if (params['html-script'] == 'true' || sh.defaults['html-script'] == true) 
			{
				highlighter = new sh.HtmlScript(brushName);
				brushName = 'htmlscript';
			}
			else
			{
				var brush = findBrush(brushName);
				
				if (brush)
					highlighter = new brush();
				else
					continue;
			}
			
			code = target[propertyName];
			
			// remove CDATA from <SCRIPT/> tags if it's present
			if (conf.useScriptTags)
				code = stripCData(code);
				
			// Inject title if the attribute is present
			if ((target.title || '') != '')
				params.title = target.title;
				
			params['brush'] = brushName;
			highlighter.init(params);
			element = highlighter.getDiv(code);
			
			// carry over ID
			if ((target.id || '') != '')
				element.id = target.id;
			
			target.parentNode.replaceChild(element, target);
		}
	},

	/**
	 * Main entry point for the SyntaxHighlighter.
	 * @param {Object} params Optional params to apply to all highlighted elements.
	 */
	all: function(params)
	{
		attachEvent(
			window,
			'load',
			function() { sh.highlight(params); }
		);
	}
}; // end of sh

/**
 * Checks if target DOM elements has specified CSS class.
 * @param {DOMElement} target Target DOM element to check.
 * @param {String} className Name of the CSS class to check for.
 * @return {Boolean} Returns true if class name is present, false otherwise.
 */
function hasClass(target, className)
{
	return target.className.indexOf(className) != -1;
};

/**
 * Adds CSS class name to the target DOM element.
 * @param {DOMElement} target Target DOM element.
 * @param {String} className New CSS class to add.
 */
function addClass(target, className)
{
	if (!hasClass(target, className))
		target.className += ' ' + className;
};

/**
 * Removes CSS class name from the target DOM element.
 * @param {DOMElement} target Target DOM element.
 * @param {String} className CSS class to remove.
 */
function removeClass(target, className)
{
	target.className = target.className.replace(className, '');
};

/**
 * Converts the source to array object. Mostly used for function arguments and 
 * lists returned by getElementsByTagName() which aren't Array objects.
 * @param {List} source Source list.
 * @return {Array} Returns array.
 */
function toArray(source)
{
	var result = [];
	
	for (var i = 0; i < source.length; i++) 
		result.push(source[i]);
		
	return result;
};

/**
 * Splits block of text into lines.
 * @param {String} block Block of text.
 * @return {Array} Returns array of lines.
 */
function splitLines(block)
{
	return block.split('\n');
}

/**
 * Generates HTML ID for the highlighter.
 * @param {String} highlighterId Highlighter ID.
 * @return {String} Returns HTML ID.
 */
function getHighlighterId(id)
{
	var prefix = 'highlighter_';
	return id.indexOf(prefix) == 0 ? id : prefix + id;
};

/**
 * Finds Highlighter instance by ID.
 * @param {String} highlighterId Highlighter ID.
 * @return {Highlighter} Returns instance of the highlighter.
 */
function getHighlighterById(id)
{
	return sh.vars.highlighters[getHighlighterId(id)];
};

/**
 * Finds highlighter's DIV container.
 * @param {String} highlighterId Highlighter ID.
 * @return {Element} Returns highlighter's DIV element.
 */
function getHighlighterDivById(id)
{
	return document.getElementById(getHighlighterId(id));
};

/**
 * Stores highlighter so that getHighlighterById() can do its thing. Each
 * highlighter must call this method to preserve itself.
 * @param {Highilghter} highlighter Highlighter instance.
 */
function storeHighlighter(highlighter)
{
	sh.vars.highlighters[getHighlighterId(highlighter.id)] = highlighter;
};

/**
 * Looks for a child or parent node which has specified classname.
 * Equivalent to jQuery's $(container).find(".className")
 * @param {Element} target Target element.
 * @param {String} search Class name or node name to look for.
 * @param {Boolean} reverse If set to true, will go up the node tree instead of down.
 * @return {Element} Returns found child or parent element on null.
 */
function findElement(target, search, reverse /* optional */)
{
	if (target == null)
		return null;
		
	var nodes			= reverse != true ? target.childNodes : [ target.parentNode ],
		propertyToFind	= { '#' : 'id', '.' : 'className' }[search.substr(0, 1)] || 'nodeName',
		expectedValue,
		found
		;

	expectedValue = propertyToFind != 'nodeName'
		? search.substr(1)
		: search.toUpperCase()
		;
		
	// main return of the found node
	if ((target[propertyToFind] || '').indexOf(expectedValue) != -1)
		return target;
	
	for (var i = 0; nodes && i < nodes.length && found == null; i++)
		found = findElement(nodes[i], search, reverse);
	
	return found;
};

/**
 * Looks for a parent node which has specified classname.
 * This is an alias to <code>findElement(container, className, true)</code>.
 * @param {Element} target Target element.
 * @param {String} className Class name to look for.
 * @return {Element} Returns found parent element on null.
 */
function findParentElement(target, className)
{
	return findElement(target, className, true);
};

/**
 * Finds an index of element in the array.
 * @ignore
 * @param {Object} searchElement
 * @param {Number} fromIndex
 * @return {Number} Returns index of element if found; -1 otherwise.
 */
function indexOf(array, searchElement, fromIndex)
{
	fromIndex = Math.max(fromIndex || 0, 0);

	for (var i = fromIndex; i < array.length; i++)
		if(array[i] == searchElement)
			return i;
	
	return -1;
};

/**
 * Generates a unique element ID.
 */
function guid(prefix)
{
	return (prefix || '') + Math.round(Math.random() * 1000000).toString();
};

/**
 * Merges two objects. Values from obj2 override values in obj1.
 * Function is NOT recursive and works only for one dimensional objects.
 * @param {Object} obj1 First object.
 * @param {Object} obj2 Second object.
 * @return {Object} Returns combination of both objects.
 */
function merge(obj1, obj2)
{
	var result = {}, name;

	for (name in obj1) 
		result[name] = obj1[name];
	
	for (name in obj2) 
		result[name] = obj2[name];
		
	return result;
};

/**
 * Attempts to convert string to boolean.
 * @param {String} value Input string.
 * @return {Boolean} Returns true if input was "true", false if input was "false" and value otherwise.
 */
function toBoolean(value)
{
	var result = { "true" : true, "false" : false }[value];
	return result == null ? value : result;
};

/**
 * Opens up a centered popup window.
 * @param {String} url		URL to open in the window.
 * @param {String} name		Popup name.
 * @param {int} width		Popup width.
 * @param {int} height		Popup height.
 * @param {String} options	window.open() options.
 * @return {Window}			Returns window instance.
 */
function popup(url, name, width, height, options)
{
	var x = (screen.width - width) / 2,
		y = (screen.height - height) / 2
		;
		
	options +=	', left=' + x + 
				', top=' + y +
				', width=' + width +
				', height=' + height
		;
	options = options.replace(/^,/, '');

	var win = window.open(url, name, options);
	win.focus();
	return win;
};

/**
 * Adds event handler to the target object.
 * @param {Object} obj		Target object.
 * @param {String} type		Name of the event.
 * @param {Function} func	Handling function.
 */
function attachEvent(obj, type, func, scope)
{
	function handler(e)
	{
		e = e || window.event;
		
		if (!e.target)
		{
			e.target = e.srcElement;
			e.preventDefault = function()
			{
				this.returnValue = false;
			};
		}
			
		func.call(scope || window, e);
	};
	
	if (obj.attachEvent) 
	{
		obj.attachEvent('on' + type, handler);
	}
	else 
	{
		obj.addEventListener(type, handler, false);
	}
};

/**
 * Displays an alert.
 * @param {String} str String to display.
 */
function alert(str)
{
	window.alert(sh.config.strings.alert + str);
};

/**
 * Finds a brush by its alias.
 *
 * @param {String} alias		Brush alias.
 * @param {Boolean} showAlert	Suppresses the alert if false.
 * @return {Brush}				Returns bursh constructor if found, null otherwise.
 */
function findBrush(alias, showAlert)
{
	var brushes = sh.vars.discoveredBrushes,
		result = null
		;
	
	if (brushes == null) 
	{
		brushes = {};
		
		// Find all brushes
		for (var brush in sh.brushes) 
		{
			var info = sh.brushes[brush],
				aliases = info.aliases
				;
			
			if (aliases == null) 
				continue;
			
			// keep the brush name
			info.brushName = brush.toLowerCase();
			
			for (var i = 0; i < aliases.length; i++) 
				brushes[aliases[i]] = brush;
		}
		
		sh.vars.discoveredBrushes = brushes;
	}
	
	result = sh.brushes[brushes[alias]];

	if (result == null && showAlert != false)
		alert(sh.config.strings.noBrush + alias);
	
	return result;
};

/**
 * Executes a callback on each line and replaces each line with result from the callback.
 * @param {Object} str			Input string.
 * @param {Object} callback		Callback function taking one string argument and returning a string.
 */
function eachLine(str, callback)
{
	var lines = splitLines(str);
	
	for (var i = 0; i < lines.length; i++)
		lines[i] = callback(lines[i], i);
		
	return lines.join('\n');
};

/**
 * This is a special trim which only removes first and last empty lines
 * and doesn't affect valid leading space on the first line.
 * 
 * @param {String} str   Input string
 * @return {String}      Returns string without empty first and last lines.
 */
function trimFirstAndLastLines(str)
{
	return str.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g, '');
};

/**
 * Parses key/value pairs into hash object.
 * 
 * Understands the following formats:
 * - name: word;
 * - name: [word, word];
 * - name: "string";
 * - name: 'string';
 * 
 * For example:
 *   name1: value; name2: [value, value]; name3: 'value'
 *   
 * @param {String} str    Input string.
 * @return {Object}       Returns deserialized object.
 */
function parseParams(str)
{
	var match, 
		result = {},
		arrayRegex = new XRegExp("^\\[(?<values>(.*?))\\]$"),
		regex = new XRegExp(
			"(?<name>[\\w-]+)" +
			"\\s*:\\s*" +
			"(?<value>" +
				"[\\w-%#]+|" +		// word
				"\\[.*?\\]|" +		// [] array
				'".*?"|' +			// "" string
				"'.*?'" +			// '' string
			")\\s*;?",
			"g"
		)
		;

	while ((match = regex.exec(str)) != null) 
	{
		var value = match.value
			.replace(/^['"]|['"]$/g, '') // strip quotes from end of strings
			;
		
		// try to parse array value
		if (value != null && arrayRegex.test(value))
		{
			var m = arrayRegex.exec(value);
			value = m.values.length > 0 ? m.values.split(/\s*,\s*/) : [];
		}
		
		result[match.name] = value;
	}
	
	return result;
};

/**
 * Wraps each line of the string into <code/> tag with given style applied to it.
 * 
 * @param {String} str   Input string.
 * @param {String} css   Style name to apply to the string.
 * @return {String}      Returns input string with each line surrounded by <span/> tag.
 */
function wrapLinesWithCode(str, css)
{
	if (str == null || str.length == 0 || str == '\n') 
		return str;

	str = str.replace(/</g, '&lt;');

	// Replace two or more sequential spaces with &nbsp; leaving last space untouched.
	str = str.replace(/ {2,}/g, function(m)
	{
		var spaces = '';
		
		for (var i = 0; i < m.length - 1; i++)
			spaces += sh.config.space;
		
		return spaces + ' ';
	});

	// Split each line and apply <span class="...">...</span> to them so that
	// leading spaces aren't included.
	if (css != null) 
		str = eachLine(str, function(line)
		{
			if (line.length == 0) 
				return '';
			
			var spaces = '';
			
			line = line.replace(/^(&nbsp;| )+/, function(s)
			{
				spaces = s;
				return '';
			});
			
			if (line.length == 0) 
				return spaces;
			
			return spaces + '<code class="' + css + '">' + line + '</code>';
		});

	return str;
};

/**
 * Pads number with zeros until it's length is the same as given length.
 * 
 * @param {Number} number	Number to pad.
 * @param {Number} length	Max string length with.
 * @return {String}			Returns a string padded with proper amount of '0'.
 */
function padNumber(number, length)
{
	var result = number.toString();
	
	while (result.length < length)
		result = '0' + result;
	
	return result;
};

/**
 * Replaces tabs with spaces.
 * 
 * @param {String} code		Source code.
 * @param {Number} tabSize	Size of the tab.
 * @return {String}			Returns code with all tabs replaces by spaces.
 */
function processTabs(code, tabSize)
{
	var tab = '';
	
	for (var i = 0; i < tabSize; i++)
		tab += ' ';

	return code.replace(/\t/g, tab);
};

/**
 * Replaces tabs with smart spaces.
 * 
 * @param {String} code    Code to fix the tabs in.
 * @param {Number} tabSize Number of spaces in a column.
 * @return {String}        Returns code with all tabs replaces with roper amount of spaces.
 */
function processSmartTabs(code, tabSize)
{
	var lines = splitLines(code),
		tab = '\t',
		spaces = ''
		;
	
	// Create a string with 1000 spaces to copy spaces from... 
	// It's assumed that there would be no indentation longer than that.
	for (var i = 0; i < 50; i++) 
		spaces += '                    '; // 20 spaces * 50
			
	// This function inserts specified amount of spaces in the string
	// where a tab is while removing that given tab.
	function insertSpaces(line, pos, count)
	{
		return line.substr(0, pos)
			+ spaces.substr(0, count)
			+ line.substr(pos + 1, line.length) // pos + 1 will get rid of the tab
			;
	};

	// Go through all the lines and do the 'smart tabs' magic.
	code = eachLine(code, function(line)
	{
		if (line.indexOf(tab) == -1) 
			return line;
		
		var pos = 0;
		
		while ((pos = line.indexOf(tab)) != -1) 
		{
			// This is pretty much all there is to the 'smart tabs' logic.
			// Based on the position within the line and size of a tab,
			// calculate the amount of spaces we need to insert.
			var spaces = tabSize - pos % tabSize;
			line = insertSpaces(line, pos, spaces);
		}
		
		return line;
	});
	
	return code;
};

/**
 * Performs various string fixes based on configuration.
 */
function fixInputString(str)
{
	var br = /<br\s*\/?>|&lt;br\s*\/?&gt;/gi;
	
	if (sh.config.bloggerMode == true)
		str = str.replace(br, '\n');

	if (sh.config.stripBrs == true)
		str = str.replace(br, '');
		
	return str;
};

/**
 * Removes all white space at the begining and end of a string.
 * 
 * @param {String} str   String to trim.
 * @return {String}      Returns string without leading and following white space characters.
 */
function trim(str)
{
	return str.replace(/^\s+|\s+$/g, '');
};

/**
 * Unindents a block of text by the lowest common indent amount.
 * @param {String} str   Text to unindent.
 * @return {String}      Returns unindented text block.
 */
function unindent(str)
{
	var lines = splitLines(fixInputString(str)),
		indents = new Array(),
		regex = /^\s*/,
		min = 1000
		;
	
	// go through every line and check for common number of indents
	for (var i = 0; i < lines.length && min > 0; i++) 
	{
		var line = lines[i];
		
		if (trim(line).length == 0) 
			continue;
		
		var matches = regex.exec(line);
		
		// In the event that just one line doesn't have leading white space
		// we can't unindent anything, so bail completely.
		if (matches == null) 
			return str;
			
		min = Math.min(matches[0].length, min);
	}
	
	// trim minimum common number of white space from the begining of every line
	if (min > 0) 
		for (var i = 0; i < lines.length; i++) 
			lines[i] = lines[i].substr(min);
	
	return lines.join('\n');
};

/**
 * Callback method for Array.sort() which sorts matches by
 * index position and then by length.
 * 
 * @param {Match} m1	Left object.
 * @param {Match} m2    Right object.
 * @return {Number}     Returns -1, 0 or -1 as a comparison result.
 */
function matchesSortCallback(m1, m2)
{
	// sort matches by index first
	if(m1.index < m2.index)
		return -1;
	else if(m1.index > m2.index)
		return 1;
	else
	{
		// if index is the same, sort by length
		if(m1.length < m2.length)
			return -1;
		else if(m1.length > m2.length)
			return 1;
	}
	
	return 0;
};

/**
 * Executes given regular expression on provided code and returns all
 * matches that are found.
 * 
 * @param {String} code    Code to execute regular expression on.
 * @param {Object} regex   Regular expression item info from <code>regexList</code> collection.
 * @return {Array}         Returns a list of Match objects.
 */ 
function getMatches(code, regexInfo)
{
	function defaultAdd(match, regexInfo)
	{
		return match[0];
	};
	
	var index = 0,
		match = null,
		matches = [],
		func = regexInfo.func ? regexInfo.func : defaultAdd
		;
	
	while((match = regexInfo.regex.exec(code)) != null)
	{
		var resultMatch = func(match, regexInfo);
		
		if (typeof(resultMatch) == 'string')
			resultMatch = [new sh.Match(resultMatch, match.index, regexInfo.css)];

		matches = matches.concat(resultMatch);
	}
	
	return matches;
};

/**
 * Turns all URLs in the code into <a/> tags.
 * @param {String} code Input code.
 * @return {String} Returns code with </a> tags.
 */
function processUrls(code)
{
	var gt = /(.*)((&gt;|&lt;).*)/;
	
	return code.replace(sh.regexLib.url, function(m)
	{
		var suffix = '',
			match = null
			;
		
		// We include &lt; and &gt; in the URL for the common cases like <http://google.com>
		// The problem is that they get transformed into &lt;http://google.com&gt;
		// Where as &gt; easily looks like part of the URL string.
	
		if (match = gt.exec(m))
		{
			m = match[1];
			suffix = match[2];
		}
		
		return '<a href="' + m + '">' + m + '</a>' + suffix;
	});
};

/**
 * Finds all <SCRIPT TYPE="syntaxhighlighter" /> elementss.
 * @return {Array} Returns array of all found SyntaxHighlighter tags.
 */
function getSyntaxHighlighterScriptTags()
{
	var tags = document.getElementsByTagName('script'),
		result = []
		;
	
	for (var i = 0; i < tags.length; i++)
		if (tags[i].type == 'syntaxhighlighter')
			result.push(tags[i]);
			
	return result;
};

/**
 * Strips <![CDATA[]]> from <SCRIPT /> content because it should be used
 * there in most cases for XHTML compliance.
 * @param {String} original	Input code.
 * @return {String} Returns code without leading <![CDATA[]]> tags.
 */
function stripCData(original)
{
	var left = '<![CDATA[',
		right = ']]>',
		// for some reason IE inserts some leading blanks here
		copy = trim(original),
		changed = false,
		leftLength = left.length,
		rightLength = right.length
		;
	
	if (copy.indexOf(left) == 0)
	{
		copy = copy.substring(leftLength);
		changed = true;
	}
	
	var copyLength = copy.length;
	
	if (copy.indexOf(right) == copyLength - rightLength)
	{
		copy = copy.substring(0, copyLength - rightLength);
		changed = true;
	}
	
	return changed ? copy : original;
};


/**
 * Quick code mouse double click handler.
 */
function quickCodeHandler(e)
{
	var target = e.target,
		highlighterDiv = findParentElement(target, '.syntaxhighlighter'),
		container = findParentElement(target, '.container'),
		textarea = document.createElement('textarea'),
		highlighter
		;

	if (!container || !highlighterDiv || findElement(container, 'textarea'))
		return;

	highlighter = getHighlighterById(highlighterDiv.id);
	
	// add source class name
	addClass(highlighterDiv, 'source');

	// Have to go over each line and grab it's text, can't just do it on the
	// container because Firefox loses all \n where as Webkit doesn't.
	var lines = container.childNodes,
		code = []
		;
	
	for (var i = 0; i < lines.length; i++)
		code.push(lines[i].innerText || lines[i].textContent);
	
	// using \r instead of \r or \r\n makes this work equally well on IE, FF and Webkit
	code = code.join('\r');
	
	// inject <textarea/> tag
	textarea.appendChild(document.createTextNode(code));
	container.appendChild(textarea);
	
	// preselect all text
	textarea.focus();
	textarea.select();
	
	// set up handler for lost focus
	attachEvent(textarea, 'blur', function(e)
	{
		textarea.parentNode.removeChild(textarea);
		removeClass(highlighterDiv, 'source');
	});
};

/**
 * Match object.
 */
sh.Match = function(value, index, css)
{
	this.value = value;
	this.index = index;
	this.length = value.length;
	this.css = css;
	this.brushName = null;
};

sh.Match.prototype.toString = function()
{
	return this.value;
};

/**
 * Simulates HTML code with a scripting language embedded.
 * 
 * @param {String} scriptBrushName Brush name of the scripting language.
 */
sh.HtmlScript = function(scriptBrushName)
{
	var brushClass = findBrush(scriptBrushName),
		scriptBrush,
		xmlBrush = new sh.brushes.Xml(),
		bracketsRegex = null,
		ref = this,
		methodsToExpose = 'getDiv getHtml init'.split(' ')
		;

	if (brushClass == null)
		return;
	
	scriptBrush = new brushClass();
	
	for(var i = 0; i < methodsToExpose.length; i++)
		// make a closure so we don't lose the name after i changes
		(function() {
			var name = methodsToExpose[i];
			
			ref[name] = function()
			{
				return xmlBrush[name].apply(xmlBrush, arguments);
			};
		})();
	
	if (scriptBrush.htmlScript == null)
	{
		alert(sh.config.strings.brushNotHtmlScript + scriptBrushName);
		return;
	}
	
	xmlBrush.regexList.push(
		{ regex: scriptBrush.htmlScript.code, func: process }
	);
	
	function offsetMatches(matches, offset)
	{
		for (var j = 0; j < matches.length; j++) 
			matches[j].index += offset;
	}
	
	function process(match, info)
	{
		var code = match.code,
			matches = [],
			regexList = scriptBrush.regexList,
			offset = match.index + match.left.length,
			htmlScript = scriptBrush.htmlScript,
			result
			;

		// add all matches from the code
		for (var i = 0; i < regexList.length; i++)
		{
			result = getMatches(code, regexList[i]);
			offsetMatches(result, offset);
			matches = matches.concat(result);
		}
		
		// add left script bracket
		if (htmlScript.left != null && match.left != null)
		{
			result = getMatches(match.left, htmlScript.left);
			offsetMatches(result, match.index);
			matches = matches.concat(result);
		}
		
		// add right script bracket
		if (htmlScript.right != null && match.right != null)
		{
			result = getMatches(match.right, htmlScript.right);
			offsetMatches(result, match.index + match[0].lastIndexOf(match.right));
			matches = matches.concat(result);
		}
		
		for (var j = 0; j < matches.length; j++)
			matches[j].brushName = brushClass.brushName;
			
		return matches;
	}
};

/**
 * Main Highlither class.
 * @constructor
 */
sh.Highlighter = function()
{
	// not putting any code in here because of the prototype inheritance
};

sh.Highlighter.prototype = {
	/**
	 * Returns value of the parameter passed to the highlighter.
	 * @param {String} name				Name of the parameter.
	 * @param {Object} defaultValue		Default value.
	 * @return {Object}					Returns found value or default value otherwise.
	 */
	getParam: function(name, defaultValue)
	{
		var result = this.params[name];
		return toBoolean(result == null ? defaultValue : result);
	},
	
	/**
	 * Shortcut to document.createElement().
	 * @param {String} name		Name of the element to create (DIV, A, etc).
	 * @return {HTMLElement}	Returns new HTML element.
	 */
	create: function(name)
	{
		return document.createElement(name);
	},
	
	/**
	 * Applies all regular expression to the code and stores all found
	 * matches in the `this.matches` array.
	 * @param {Array} regexList		List of regular expressions.
	 * @param {String} code			Source code.
	 * @return {Array}				Returns list of matches.
	 */
	findMatches: function(regexList, code)
	{
		var result = [];
		
		if (regexList != null)
			for (var i = 0; i < regexList.length; i++) 
				// BUG: length returns len+1 for array if methods added to prototype chain (oising@gmail.com)
				if (typeof (regexList[i]) == "object")
					result = result.concat(getMatches(code, regexList[i]));
		
		// sort and remove nested the matches
		return this.removeNestedMatches(result.sort(matchesSortCallback));
	},
	
	/**
	 * Checks to see if any of the matches are inside of other matches. 
	 * This process would get rid of highligted strings inside comments, 
	 * keywords inside strings and so on.
	 */
	removeNestedMatches: function(matches)
	{
		// Optimized by Jose Prado (http://joseprado.com)
		for (var i = 0; i < matches.length; i++) 
		{ 
			if (matches[i] === null)
				continue;
			
			var itemI = matches[i],
				itemIEndPos = itemI.index + itemI.length
				;
			
			for (var j = i + 1; j < matches.length && matches[i] !== null; j++) 
			{
				var itemJ = matches[j];
				
				if (itemJ === null) 
					continue;
				else if (itemJ.index > itemIEndPos) 
					break;
				else if (itemJ.index == itemI.index && itemJ.length > itemI.length)
					matches[i] = null;
				else if (itemJ.index >= itemI.index && itemJ.index < itemIEndPos) 
					matches[j] = null;
			}
		}
		
		return matches;
	},
	
	/**
	 * Creates an array containing integer line numbers starting from the 'first-line' param.
	 * @return {Array} Returns array of integers.
	 */
	figureOutLineNumbers: function(code)
	{
		var lines = [],
			firstLine = parseInt(this.getParam('first-line'))
			;
		
		eachLine(code, function(line, index)
		{
			lines.push(index + firstLine);
		});
		
		return lines;
	},
	
	/**
	 * Determines if specified line number is in the highlighted list.
	 */
	isLineHighlighted: function(lineNumber)
	{
		var list = this.getParam('highlight', []);
		
		if (typeof(list) != 'object' && list.push == null) 
			list = [ list ];
		
		return indexOf(list, lineNumber.toString()) != -1;
	},
	
	/**
	 * Generates HTML markup for a single line of code while determining alternating line style.
	 * @param {Integer} lineNumber	Line number.
	 * @param {String} code Line	HTML markup.
	 * @return {String}				Returns HTML markup.
	 */
	getLineHtml: function(lineIndex, lineNumber, code)
	{
		var classes = [
			'line',
			'number' + lineNumber,
			'index' + lineIndex,
			'alt' + (lineNumber % 2 == 0 ? 1 : 2).toString()
		];
		
		if (this.isLineHighlighted(lineNumber))
		 	classes.push('highlighted');
		
		if (lineNumber == 0)
			classes.push('break');
			
		return '<div class="' + classes.join(' ') + '">' + code + '</div>';
	},
	
	/**
	 * Generates HTML markup for line number column.
	 * @param {String} code			Complete code HTML markup.
	 * @param {Array} lineNumbers	Calculated line numbers.
	 * @return {String}				Returns HTML markup.
	 */
	getLineNumbersHtml: function(code, lineNumbers)
	{
		var html = '',
			count = splitLines(code).length,
			firstLine = parseInt(this.getParam('first-line')),
			pad = this.getParam('pad-line-numbers')
			;
		
		if (pad == true)
			pad = (firstLine + count - 1).toString().length;
		else if (isNaN(pad) == true)
			pad = 0;
			
		for (var i = 0; i < count; i++)
		{
			var lineNumber = lineNumbers ? lineNumbers[i] : firstLine + i,
				code = lineNumber == 0 ? sh.config.space : padNumber(lineNumber, pad)
				;
				
			html += this.getLineHtml(i, lineNumber, code);
		}
		
		return html;
	},
	
	/**
	 * Splits block of text into individual DIV lines.
	 * @param {String} code			Code to highlight.
	 * @param {Array} lineNumbers	Calculated line numbers.
	 * @return {String}				Returns highlighted code in HTML form.
	 */
	getCodeLinesHtml: function(html, lineNumbers)
	{
		html = trim(html);
		
		var lines = splitLines(html),
			padLength = this.getParam('pad-line-numbers'),
			firstLine = parseInt(this.getParam('first-line')),
			html = '',
			brushName = this.getParam('brush')
			;

		for (var i = 0; i < lines.length; i++)
		{
			var line = lines[i],
				indent = /^(&nbsp;|\s)+/.exec(line),
				spaces = null,
				lineNumber = lineNumbers ? lineNumbers[i] : firstLine + i;
				;

			if (indent != null)
			{
				spaces = indent[0].toString();
				line = line.substr(spaces.length);
				spaces = spaces.replace(' ', sh.config.space);
			}

			line = trim(line);
			
			if (line.length == 0)
				line = sh.config.space;
			
			html += this.getLineHtml(
				i,
				lineNumber, 
				(spaces != null ? '<code class="' + brushName + ' spaces">' + spaces + '</code>' : '') + line
			);
		}
		
		return html;
	},
	
	/**
	 * Returns HTML for the table title or empty string if title is null.
	 */
	getTitleHtml: function(title)
	{
		return title ? '<caption>' + title + '</caption>' : '';
	},
	
	/**
	 * Finds all matches in the source code.
	 * @param {String} code		Source code to process matches in.
	 * @param {Array} matches	Discovered regex matches.
	 * @return {String} Returns formatted HTML with processed mathes.
	 */
	getMatchesHtml: function(code, matches)
	{
		var pos = 0, 
			result = '',
			brushName = this.getParam('brush', '')
			;
		
		function getBrushNameCss(match)
		{
			var result = match ? (match.brushName || brushName) : brushName;
			return result ? result + ' ' : '';
		};
		
		// Finally, go through the final list of matches and pull the all
		// together adding everything in between that isn't a match.
		for (var i = 0; i < matches.length; i++) 
		{
			var match = matches[i],
				matchBrushName
				;
			
			if (match === null || match.length === 0) 
				continue;
			
			matchBrushName = getBrushNameCss(match);
			
			result += wrapLinesWithCode(code.substr(pos, match.index - pos), matchBrushName + 'plain')
					+ wrapLinesWithCode(match.value, matchBrushName + match.css)
					;

			pos = match.index + match.length + (match.offset || 0);
		}

		// don't forget to add whatever's remaining in the string
		result += wrapLinesWithCode(code.substr(pos), getBrushNameCss() + 'plain');

		return result;
	},
	
	/**
	 * Generates HTML markup for the whole syntax highlighter.
	 * @param {String} code Source code.
	 * @return {String} Returns HTML markup.
	 */
	getHtml: function(code)
	{
		var html = '',
			classes = [ 'syntaxhighlighter' ],
			tabSize,
			matches,
			lineNumbers
			;
		
		// process light mode
		if (this.getParam('light') == true)
			this.params.toolbar = this.params.gutter = false;

		className = 'syntaxhighlighter';

		if (this.getParam('collapse') == true)
			classes.push('collapsed');
		
		if ((gutter = this.getParam('gutter')) == false)
			classes.push('nogutter');

		// add custom user style name
		classes.push(this.getParam('class-name'));

		// add brush alias to the class name for custom CSS
		classes.push(this.getParam('brush'));

		code = trimFirstAndLastLines(code)
			.replace(/\r/g, ' ') // IE lets these buggers through
			;

		tabSize = this.getParam('tab-size');

		// replace tabs with spaces
		code = this.getParam('smart-tabs') == true
			? processSmartTabs(code, tabSize)
			: processTabs(code, tabSize)
			;

		// unindent code by the common indentation
		code = unindent(code);

		if (gutter)
			lineNumbers = this.figureOutLineNumbers(code);
		
		// find matches in the code using brushes regex list
		matches = this.findMatches(this.regexList, code);
		// processes found matches into the html
		html = this.getMatchesHtml(code, matches);
		// finally, split all lines so that they wrap well
		html = this.getCodeLinesHtml(html, lineNumbers);

		// finally, process the links
		if (this.getParam('auto-links'))
			html = processUrls(html);
		
		if (typeof(navigator) != 'undefined' && navigator.userAgent && navigator.userAgent.match(/MSIE/))
			classes.push('ie');
		
		html = 
			'<div id="' + getHighlighterId(this.id) + '" class="' + classes.join(' ') + '">'
				+ (this.getParam('toolbar') ? sh.toolbar.getHtml(this) : '')
				+ '<table border="0" cellpadding="0" cellspacing="0">'
					+ this.getTitleHtml(this.getParam('title'))
					+ '<tbody>'
						+ '<tr>'
							+ (gutter ? '<td class="gutter">' + this.getLineNumbersHtml(code) + '</td>' : '')
							+ '<td class="code">'
								+ '<div class="container">'
									+ html
								+ '</div>'
							+ '</td>'
						+ '</tr>'
					+ '</tbody>'
				+ '</table>'
			+ '</div>'
			;
			
		return html;
	},
	
	/**
	 * Highlights the code and returns complete HTML.
	 * @param {String} code     Code to highlight.
	 * @return {Element}        Returns container DIV element with all markup.
	 */
	getDiv: function(code)
	{
		if (code === null) 
			code = '';
		
		this.code = code;

		var div = this.create('div');

		// create main HTML
		div.innerHTML = this.getHtml(code);
		
		// set up click handlers
		if (this.getParam('toolbar'))
			attachEvent(findElement(div, '.toolbar'), 'click', sh.toolbar.handler);
		
		if (this.getParam('quick-code'))
			attachEvent(findElement(div, '.code'), 'dblclick', quickCodeHandler);
		
		return div;
	},
	
	/**
	 * Initializes the highlighter/brush.
	 *
	 * Constructor isn't used for initialization so that nothing executes during necessary
	 * `new SyntaxHighlighter.Highlighter()` call when setting up brush inheritence.
	 *
	 * @param {Hash} params Highlighter parameters.
	 */
	init: function(params)
	{
		this.id = guid();
		
		// register this instance in the highlighters list
		storeHighlighter(this);
		
		// local params take precedence over defaults
		this.params = merge(sh.defaults, params || {})
		
		// process light mode
		if (this.getParam('light') == true)
			this.params.toolbar = this.params.gutter = false;
	},
	
	/**
	 * Converts space separated list of keywords into a regular expression string.
	 * @param {String} str    Space separated keywords.
	 * @return {String}       Returns regular expression string.
	 */
	getKeywords: function(str)
	{
		str = str
			.replace(/^\s+|\s+$/g, '')
			.replace(/\s+/g, '|')
			;
		
		return '\\b(?:' + str + ')\\b';
	},
	
	/**
	 * Makes a brush compatible with the `html-script` functionality.
	 * @param {Object} regexGroup Object containing `left` and `right` regular expressions.
	 */
	forHtmlScript: function(regexGroup)
	{
		this.htmlScript = {
			left : { regex: regexGroup.left, css: 'script' },
			right : { regex: regexGroup.right, css: 'script' },
			code : new XRegExp(
				"(?<left>" + regexGroup.left.source + ")" +
				"(?<code>.*?)" +
				"(?<right>" + regexGroup.right.source + ")",
				"sgi"
				)
		};
	}
}; // end of Highlighter

return sh;
}(); // end of anonymous function

// CommonJS
typeof(exports) != 'undefined' ? exports.SyntaxHighlighter = SyntaxHighlighter : null;

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		function getKeywordsCSS(str)
		{
			return '\\b([a-z_]|)' + str.replace(/ /g, '(?=:)\\b|\\b([a-z_\\*]|\\*|)') + '(?=:)\\b';
		};
	
		function getValuesCSS(str)
		{
			return '\\b' + str.replace(/ /g, '(?!-)(?!:)\\b|\\b()') + '\:\\b';
		};

		var keywords =	'ascent azimuth background-attachment background-color background-image background-position ' +
						'background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top ' +
						'border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color ' +
						'border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width ' +
						'border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color ' +
						'content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display ' +
						'elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font ' +
						'height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top ' +
						'margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans ' +
						'outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page ' +
						'page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position ' +
						'quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress ' +
						'table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em ' +
						'vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index';

		var values =	'above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder '+
						'both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed '+
						'continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double '+
						'embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia '+
						'gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic '+
						'justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha '+
						'lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower '+
						'navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset '+
						'outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side '+
						'rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow '+
						'small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize '+
						'table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal '+
						'text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin '+
						'upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow';

		var fonts =		'[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif';
	
		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },	// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },	// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },	// single quoted strings
			{ regex: /\#[a-fA-F0-9]{3,6}/g,								css: 'value' },		// html colors
			{ regex: /(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,				css: 'value' },		// sizes
			{ regex: /!important/g,										css: 'color3' },	// !important
			{ regex: new RegExp(getKeywordsCSS(keywords), 'gm'),		css: 'keyword' },	// keywords
			{ regex: new RegExp(getValuesCSS(values), 'g'),				css: 'value' },		// values
			{ regex: new RegExp(this.getKeywords(fonts), 'g'),			css: 'color1' }		// fonts
			];

		this.forHtmlScript({ 
			left: /(&lt;|<)\s*style.*?(&gt;|>)/gi, 
			right: /(&lt;|<)\/\s*style\s*(&gt;|>)/gi 
			});
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['css'];

	SyntaxHighlighter.brushes.CSS = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		function process(match, regexInfo)
		{
			var constructor = SyntaxHighlighter.Match,
				code = match[0],
				tag = new XRegExp('(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)', 'xg').exec(code),
				result = []
				;
		
			if (match.attributes != null) 
			{
				var attributes,
					regex = new XRegExp('(?<name> [\\w:\\-\\.]+)' +
										'\\s*=\\s*' +
										'(?<value> ".*?"|\'.*?\'|\\w+)',
										'xg');

				while ((attributes = regex.exec(code)) != null) 
				{
					result.push(new constructor(attributes.name, match.index + attributes.index, 'color1'));
					result.push(new constructor(attributes.value, match.index + attributes.index + attributes[0].indexOf(attributes.value), 'string'));
				}
			}

			if (tag != null)
				result.push(
					new constructor(tag.name, match.index + tag[0].indexOf(tag.name), 'keyword')
				);

			return result;
		}
	
		this.regexList = [
			{ regex: new XRegExp('(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)', 'gm'),			css: 'color2' },	// <![ ... [ ... ]]>
			{ regex: SyntaxHighlighter.regexLib.xmlComments,												css: 'comments' },	// <!-- ... -->
			{ regex: new XRegExp('(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)', 'sg'), func: process }
		];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['xml', 'xhtml', 'xslt', 'html'];

	SyntaxHighlighter.brushes.Xml = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

/*! Magnific Popup - v1.0.1 - 2015-12-30
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 // AMD. Register as an anonymous module. 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 // Node/CommonJS 
 factory(require('jquery')); 
 } else { 
 // Browser globals 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1; 
		mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
		mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;	

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });
		
		mfp.currItem = item;

		

		

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}
		
		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;
		
		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;
		
		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},



	
	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		} 

		var eName = 'click.magnificPopup';
		options.mainEl = el;
		
		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}
		
		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}
			

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( '<img src="'+value+'" class="' + el.attr('class') + '" />' );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();	

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}
			

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);			
		this.modules.push(name);
	},

	defaults: {   

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
		
		disableOn: 0,	

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened
		
		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true, 

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,
	
		removalDelay: 0,

		prependTo: null,
		
		fixedContentPos: 'auto', 
	
		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);
		
		/*
		 * As Zepto doesn't support .data() method for objects 
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};


//Quick benchmark
/*
var start = performance.now(),
	i,
	rounds = 1000;

for(i = 0; i < rounds; i++) {

}
console.log('Test #1:', performance.now() - start);

start = performance.now();
for(i = 0; i < rounds; i++) {

}
console.log('Test #2:', performance.now() - start);
*/


/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder, 
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});





	

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined) 
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title', 
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {
				
				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}
				
				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');
					
					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');
							
							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');
							
						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {										
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			} 

			return template;
		}
	}
});



/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;		
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;
				
			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it
					
					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image); 
					
					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images 

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}
					
					
					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');
					
					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}	
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*
			
			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',
	
	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) { 
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com', 
				id: 'v=', 
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					} 
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;
				
			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});
			
			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery',
				supportsFastClick = Boolean($.fn.mfpFastClick);

			mfp.direction = true; // true - next, false - prev
			
			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),			
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					var eName = supportsFastClick ? 'mfpFastClick' : 'click';
					arrowLeft[eName](function() {
						mfp.prev();
					});			
					arrowRight[eName](function() {
						mfp.next();
					});	

					// Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
					if(mfp.isIE7) {
						_getEl('b', arrowLeft[0], false, true);
						_getEl('a', arrowLeft[0], false, true);
						_getEl('b', arrowRight[0], false, true);
						_getEl('a', arrowRight[0], false, true);
					}

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);		
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
			
				if(mfp.arrowLeft && supportsFastClick) {
					mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
				}
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		}, 
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*
Touch Support that might be implemented some day

addSwipeGesture: function() {
	var startX,
		moved,
		multipleTouches;

		return;

	var namespace = '.mfp',
		addEventNames = function(pref, down, move, up, cancel) {
			mfp._tStart = pref + down + namespace;
			mfp._tMove = pref + move + namespace;
			mfp._tEnd = pref + up + namespace;
			mfp._tCancel = pref + cancel + namespace;
		};

	if(window.navigator.msPointerEnabled) {
		addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
	} else if('ontouchstart' in window) {
		addEventNames('touch', 'start', 'move', 'end', 'cancel');
	} else {
		return;
	}
	_window.on(mfp._tStart, function(e) {
		var oE = e.originalEvent;
		multipleTouches = moved = false;
		startX = oE.pageX || oE.changedTouches[0].pageX;
	}).on(mfp._tMove, function(e) {
		if(e.originalEvent.touches.length > 1) {
			multipleTouches = e.originalEvent.touches.length;
		} else {
			//e.preventDefault();
			moved = true;
		}
	}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
		if(moved && !multipleTouches) {
			var oE = e.originalEvent,
				diff = startX - (oE.pageX || oE.changedTouches[0].pageX);

			if(diff > 20) {
				mfp.next();
			} else if(diff < -20) {
				mfp.prev();
			}
		}
	});
},
*/


/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/

/*>>fastclick*/
/**
 * FastClick event implementation. (removes 300ms delay on touch devices)
 * Based on https://developers.google.com/mobile/articles/fast_buttons
 *
 * You may use it outside the Magnific Popup by calling just:
 *
 * $('.your-el').mfpFastClick(function() {
 *     console.log('Clicked!');
 * });
 *
 * To unbind:
 * $('.your-el').destroyMfpFastClick();
 * 
 * 
 * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
 * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
 * 
 */

(function() {
	var ghostClickDelay = 1000,
		supportsTouch = 'ontouchstart' in window,
		unbindTouchMove = function() {
			_window.off('touchmove'+ns+' touchend'+ns);
		},
		eName = 'mfpFastClick',
		ns = '.'+eName;


	// As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
	$.fn.mfpFastClick = function(callback) {

		return $(this).each(function() {

			var elem = $(this),
				lock;

			if( supportsTouch ) {

				var timeout,
					startX,
					startY,
					pointerMoved,
					point,
					numPointers;

				elem.on('touchstart' + ns, function(e) {
					pointerMoved = false;
					numPointers = 1;

					point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
					startX = point.clientX;
					startY = point.clientY;

					_window.on('touchmove'+ns, function(e) {
						point = e.originalEvent ? e.originalEvent.touches : e.touches;
						numPointers = point.length;
						point = point[0];
						if (Math.abs(point.clientX - startX) > 10 ||
							Math.abs(point.clientY - startY) > 10) {
							pointerMoved = true;
							unbindTouchMove();
						}
					}).on('touchend'+ns, function(e) {
						unbindTouchMove();
						if(pointerMoved || numPointers > 1) {
							return;
						}
						lock = true;
						e.preventDefault();
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							lock = false;
						}, ghostClickDelay);
						callback();
					});
				});

			}

			elem.on('click' + ns, function() {
				if(!lock) {
					callback();
				}
			});
		});
	};

	$.fn.destroyMfpFastClick = function() {
		$(this).off('touchstart' + ns + ' click' + ns);
		if(supportsTouch) _window.off('touchmove'+ns+' touchend'+ns);
	};
})();

/*>>fastclick*/
 _checkInstance(); }));
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

window.matchMedia || (window.matchMedia = function() {
    "use strict";

    // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia = (window.styleMedia || window.media);

    // For those that don't support matchMedium
    if (!styleMedia) {
        var style       = document.createElement('style'),
            script      = document.getElementsByTagName('script')[0],
            info        = null;

        style.type  = 'text/css';
        style.id    = 'matchmediajs-test';

        script.parentNode.insertBefore(style, script);

        // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
        info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

        styleMedia = {
            matchMedium: function(media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                if (style.styleSheet) {
                    style.styleSheet.cssText = text;
                } else {
                    style.textContent = text;
                }

                // Test if media query is true or false
                return info.width === '1px';
            }
        };
    }

    return function(media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
        };
    };
}());

/*!
 * clipboard.js v1.5.16
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Clipboard = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (element.matches(selector)) return element;
        element = element.parentNode;
    }
}

module.exports = closest;

},{}],2:[function(require,module,exports){
var closest = require('./closest');

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;

},{"./closest":1}],3:[function(require,module,exports){
/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};

},{}],4:[function(require,module,exports){
var is = require('./is');
var delegate = require('delegate');

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;

},{"./is":3,"delegate":2}],5:[function(require,module,exports){
function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        element.focus();
        element.setSelectionRange(0, element.value.length);

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;

},{}],6:[function(require,module,exports){
function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;

},{}],7:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'select'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = document.body.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.addEventListener('focus', window.scrollTo(0, yPosition));
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                document.body.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    document.body.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    document.body.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.target) {
                    this.target.blur();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

},{"select":5}],8:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', './clipboard-action', 'tiny-emitter', 'good-listener'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)
});
/*
// @name: Responsive-img.js
// @version: 1.1
// 
// Copyright 2013-2014 Koen Vendrik, http://kvendrik.com
// Licensed under the MIT license
*/

	function makeImagesResponsive(){

			var viewport = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

		////////GET ALL IMAGES////////

		var images = document.getElementsByTagName('body')[0].getElementsByTagName('img');
		if( images.length === 0 ){
			return;
		}

		////////HASATTR FUNCTION////////

		var hasAttr;
		if(!images[0].hasAttribute){ //IE <=7 fix

			hasAttr = function(el, attrName){ //IE does not support Object.Prototype
				return el.getAttribute(attrName) !== null;
			};

		} else {

			hasAttr = function(el, attrName){
				return el.hasAttribute(attrName);
			};

		}

		////////CHECK IF DISPLAY IS RETINA////////

		var retina = window.devicePixelRatio ? window.devicePixelRatio >= 1.2 ? 1 : 0 : 0;

		////////LOOP ALL IMAGES////////

		for (var i = 0; i < images.length; i++) {

				var image = images[i];


				//set attr names

				var srcAttr = ( retina && hasAttr(image, 'data-src2x') ) ? 'data-src2x' : 'data-src';
				var baseAttr = ( retina && hasAttr(image, 'data-src-base2x') ) ? 'data-src-base2x' : 'data-src-base';

				//check image attributes

				if( !hasAttr(image, srcAttr) ){
					continue;
				}

				var basePath = hasAttr(image, baseAttr) ? image.getAttribute(baseAttr) : '';


				//get attributes

				var queries = image.getAttribute(srcAttr);



				//split defined query list

					var queries_array = queries.split(',');

				//loop queries

				for(var j = 0; j < queries_array.length; j++){

					//split each individual query
					var query = queries_array[j].replace(':','||').split('||');

					//get condition and response
					var condition = query[0];
					var response = query[1];


					//set empty variables
					var conditionpx;
					var bool;


					//check if condition is below
					if(condition.indexOf('<') !== -1){

						conditionpx = condition.split('<');

						if(queries_array[(j -1)]){

							var prev_query = queries_array[(j - 1)].split(/:(.+)/);
							var prev_cond = prev_query[0].split('<');

							bool =  (viewport <= conditionpx[1] && viewport > prev_cond[1]);

						} else {

							bool =  (viewport <= conditionpx[1]);

						}

					} else {

						conditionpx = condition.split('>');

						if(queries_array[(j +1)]){

							var next_query = queries_array[(j +1)].split(/:(.+)/);
							var next_cond = next_query[0].split('>');
							
							bool = (viewport >= conditionpx[1] && viewport < next_cond[1]);

						} else {

							bool = (viewport >= conditionpx[1]);

						}

					}


					//check if document.width meets condition
					if(bool){

						var isCrossDomain = response.indexOf('//') !== -1 ? 1 : 0;

						var new_source;
						if(isCrossDomain === 1){
							new_source = response;
						} else {
							new_source = basePath + response;
						}

						if(image.src !== new_source){

							//change img src to basePath + response
							image.setAttribute('src', new_source);

						}

						//break loop
						break;
					}

				}


		}

	}

if(window.addEventListener){

	window.addEventListener('load', makeImagesResponsive, false);
	window.addEventListener('resize', makeImagesResponsive, false);

} else { //ie <=8 fix

	window.attachEvent('onload', makeImagesResponsive);
	window.attachEvent('onresize', makeImagesResponsive);

}
function AccordionComponent(commonState) {
	var self = this;
	this.componentRoot = $('.c-accordion:not(.c-accordion--group)');
	this.componentTarget = $(".c-accordion:not(.c-accordion--group) .c-accordion__section");
	this.componentGroupRoot = $('.c-accordion--group');
	this.titleSelector = ".c-accordion__section__title";
	this.componentgroupController = $('.c-accordion-controller__toggle');
	this.commonState = commonState;
	this.parent = null;

	this.toggle = function (target, immediately) {
		target.toggleClass('is--open');
		target.attr("aria-expanded", target.hasClass("is--open"));
		target.parent().attr("aria-expanded", target.hasClass("is--open"));
		if(immediately) {
			target.next().toggle();
		} else {
			target.next().slideToggle();
		}
		if(target.hasClass('is--open')) {
			self.parent.notifyActivate(target.next());//notifier:toggle対象dom
		}
	};

	this.toggleAll = function (group, immediately) {
		var target = group.find(self.titleSelector);
		target.toggleClass('is--open');
		target.attr("aria-expanded", target.hasClass("is--open"));
		target.parent().attr("aria-expanded", target.hasClass("is--open"));
		var lang = $('html').attr('lang');
		var labelHide = 'Hide All';
		var labelShow = 'View All';
		if (lang == 'ja') {
			labelHide = '全て隠す';
			labelShow = '全て表示';
		}
		if(immediately) {
			target.next().toggle();
		} else {
			target.next().slideToggle();
		}
		if(target.hasClass('is--open')) {
			group.prev().children(self.componentgroupController).addClass('is--show').html(labelHide);
			self.parent.notifyActivate(target.next());//notifier:toggle対象dom
		} else {
			group.prev().children(self.componentgroupController).removeClass('is--show').html(labelShow);
		}
	};

	this.selectHeader = function () {
		return self.componentTarget.children(self.titleSelector);
	};

	this.selectSection = function () {
		return self.componentTarget;
	};

	this.groupToggleController = function () {
		return self.componentGroupRoot.prev().children(self.componentgroupController);
	}

	this.events = [
		{
			type: "click",
			selector: this.selectHeader,
			listener: function (event) {
				event.preventDefault();
				self.toggle($(this), false);
			}
		},
		{
			type: "keydown",
			selector: this.selectHeader,
			listener: function (event) {
				if(event.keyCode == commonState.keyCode.ENTER) {
					self.toggle($(this), false);
					return;
				}

				var target;
				switch (event.keyCode) {
					case commonState.keyCode.LEFT:
						target = $(this).closest(self.componentTarget).prev().children(self.titleSelector);
						break;
					case commonState.keyCode.RIGHT:
						target = $(this).closest(self.componentTarget).next().children(self.titleSelector);
				}
				if (!!target) {
					return target.eq(0).focus();
				}
			}
		},
		{
			type: 'click',
			selector: this.groupToggleController,
			listener: function (event) {
				event.preventDefault();
				self.toggleAll($(this).parent().next(self.componentGroupRoot), true);
			}
		}
	]
}

AccordionComponent.prototype.load = function () {
	var self = this;
	this.componentTarget.each(function () {
		$(this).children(self.titleSelector).attr({role: 'button', tabindex: 0});
	});

	var initialAccordionControl = function (selector) {
		self.componentRoot.each(function () {
			if($(this).hasClass(selector)) {
				$(this).children('.c-accordion__section').each(function () {
					if (!$(this).hasClass('is--ini-open')) {
						self.toggle($(this).children('.c-accordion__section__title'), true);
					}
				})
			} else {
				$(this).children('.c-accordion__section').each(function () {
					if ($(this).hasClass('is--ini-open')) {
						self.toggle($(this).children('.c-accordion__section__title'), true);
					}
				})
			}
		});
	}

	if(this.commonState.isMobile()) {
		initialAccordionControl('is--sp-open');
	} else {
		initialAccordionControl('is--pc-open');
	}
};

/**
 * コンポーネントの共通処理を行う基底コンポーネント
 *
 * @param controller
 * @param component 具象コンポーネント
 * @param commonState コンポーネント共通で参照する状態変数
 * @constructor
 */
function BaseComponent(controller, component, commonState) {
	this.controller = controller;
	this.component = component;
	this.commonState = commonState;
}

/**
 * コンポーネントの初期処理を行う
 */
BaseComponent.prototype.load = function () {
	//イベント登録前に初期処理実行
	if(this.component.load) {
		this.component.load();
	}

	//具象コンポーネントのeventsプロパティで定義したイベントを一括登録
	if (this.component.events) {
		$.each(this.component.events, function () {
			if($(this.delegateSelector)) {
				$(this.selector()).on(this.type, this.delegateSelector, this.listener);
			} else {
				$(this.selector()).on(this.type, this.listener);
			}
		});
	}

	//イベント登録後に初期処理実行
	if(this.component.postLoad) {
		this.component.postLoad();
	}
};

/**
 * ウィンドウのリサイズイベントを実行する。
 * 各コンポーネントで「resize」,「changeToMobileState」及び「changeToUnMobileState」が関数定義されている場合に処理を行う。
 *
 * @param reGetMobileState リサイズイベント実行時のモバイル状態フラグ
 */
BaseComponent.prototype.resize = function (reGetMobileState) {
	if (this.component.resize) {
		this.component.resize();
	}

	//非mobile状態→mobile状態に遷移
	if (!this.commonState.currentMobileState && reGetMobileState) {
		if (this.component.changeToMobileState) {
			this.component.changeToMobileState()
		}
		return;
	}

	//mobile状態→非mobile状態に遷移
	if (this.commonState.currentMobileState && !reGetMobileState) {
		if (this.component.changeToUnMobileState) {
			this.component.changeToUnMobileState()
		}
	}
};

/**
 * コントローラにアクテイブ通知を行う
 */
BaseComponent.prototype.notifyActivate = function (notifier) {
	this.controller.notify(notifier, this.component.componentName);
};

/**
 * アクティブ状態通知を受信する
 * 通知受信処理が実装されていた場合に受信処理を行う。
 * @param notifier 通知元コンポーネント
 * @param componentName 通知元コンポーネント名
 */
BaseComponent.prototype.receiveActivateNotification = function (notifier, componentName) {
	if(this.component.receiveActivateNotification) {
		this.component.receiveActivateNotification(notifier ,componentName);
	}
};
/**
 * 各コンポーネント共通して参照する状態変数
 */
function State() {
	//現在のウィンドウサイズがモバイル状態かどうかのフラグ
	//true: モバイル状態 false:非モバイル状態
	this.currentMobileState = this.getMobileState();
	//ユーザエージェントがSafariかどうかをあらわすフラグ
	this.userAgentSafari = this.getSafari();

	this.keyCode = {
		LEFT: 37,
		RIGHT: 39,
		ENTER: 13,
		TAB: 9
	}
}

State.prototype.getMobileState = function () {
	return window.matchMedia('(max-width: 767px)').matches
};

State.prototype.update = function (reGetMobileState) {
	if (this.currentMobileState != reGetMobileState) {
		this.currentMobileState = reGetMobileState;
	}
};

State.prototype.isMobile = function () {
	return this.currentMobileState
};

State.prototype.getSafari = function () {
	var ua = window.navigator.userAgent.toLowerCase();
	return ua.indexOf('chrome') < 0 && ua.indexOf('safari') >= 0;
};

State.prototype.isSafari = function () {
	return this.userAgentSafari;
};

State.prototype.saveCookie = function (key, value, expireDay) {
	$.cookie(key, value, { expires: expireDay, path: "/" });
};

State.prototype.containsCookie = function (key, expectValue) {
	return $.cookie(key) == expectValue;
};

//test用
State.prototype.deleteCookie = function (key, path) {
	$.removeCookie(key, { path: path });
};


/**
 * コンポーネント制御
 */
function Controller() {
	this.components = [];
	this.state = new State();
}

Controller.prototype.init = function () {
	var self = this;

	var register = function (component, componentName) {
		var base = new BaseComponent(self, component, self.state);
		if(component.parent === null) {
			component.parent = base;
		}
		component.componentName = componentName;
		self.components.push(base)
	};

	//コンポーネント登録
	register(new GlobalNavComponent(this.state), "GlobalNavComponent");
	register(new HeaderSearchComponent(this.state), "HeaderSearchComponent");
	register(new FooterComponent(this.state), "FooterComponent");
	register(new LinkComponent(this.state), "LinkComponent");
	register(new MediaComponent(this.state), "MediaComponent");
	register(new TableComponent(this.state), "TableComponent");
	register(new TabComponent(this.state), "TabComponent");
	register(new AccordionComponent(this.state), "AccordionComponent");
	register(new ModalComponent(this.state), "ModalComponent");
	register(new ToolTipComponent(this.state), "ToolTipComponent");
	register(new NavigationComponent(), "NavigationComponent");
	register(new GeoLocationMenu(this.state, new Resource()), "GeoLocationMenu");

	//コンポーネントのloadイベント実行
	$(window).on('load', function(){
		$.each(self.components, function() {
			this.load();
		});
	});

	//監視イベントの開始
	$(window).on('resize', function(){
		var reGetMobileState = self.state.getMobileState();
		$.each(self.components, function() {
			this.resize(reGetMobileState);
		});
		self.state.update(reGetMobileState)
	});
};


/**
 * アクティブ状態になったコンポーネントを他のコンポーネントに通知する
 * @param notifier 通知元dom
 * @param componentName 通知元コンポーネント名
 */
Controller.prototype.notify = function (notifier, componentName) {
	$.each(this.components, function() {
		if(componentName !== this.component.componentName) {
			this.receiveActivateNotification(notifier, componentName);
		}
	});
};

function FooterComponent(commonState) {
	this.commonState = commonState;
	this.selector = '.footer__accordion';
	this.events = [];

	this.changeElement = function (element) {
		//element付け替え
		$(this.selector).each(function () {
			var innerText = $(this).html();
			var classes = $(this).attr("class");
			if(element == 'a') {
				$(this).replaceWith('<' + element + ' href="#" class="' + classes + '">' + innerText + '</' + element + '>');
			} else {
				$(this).replaceWith('<' + element + ' class="' + classes + '">' + innerText + '</' + element + '>');
			}
		});
	}

	var pageTop = $('.js_link-pagetop');
	if (pageTop.length) {
		this.events.push({
			type: 'scroll',
			selector: function () {
				return $(window);
			},
			listener: function (event) {
				if ($(this).scrollTop() > 300) {
					return pageTop.addClass('is--visible');
				} else {
					return pageTop.removeClass('is--visible');
				}
			}
		});
		this.events.push({
			type: 'click',
			selector: function () {
				return pageTop.find('a[href*=#]');
			},
			listener: function (event) {
				var target;
				if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
					target = $(this.hash);
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top
						}, 500);
						history.pushState("", document.title, window.location.pathname);
						return false;
					} else {
						return false;
					}
				}
			}
		});
	}

}

FooterComponent.prototype.changeToMobileState = function () {
	var self = this;

	//element付け替え
	this.changeElement('a');

	//clickイベント登録
	$(this.selector).each(function () {
		$(this).on('click', function (event) {
			event.preventDefault();
			if (self.commonState.isMobile()) {
				$(this).toggleClass('is--open');
				$(this).next().slideToggle();
				$(this).attr("aria-expanded", $(this).hasClass("is--open"));
			}
		});
	})
};

FooterComponent.prototype.changeToUnMobileState = function () {
	//element付け替え
	this.changeElement('span');
};

FooterComponent.prototype.load = function () {
	if(this.commonState.isMobile()) {
		this.changeToMobileState()
	}
};
function GeoLocationMenu(commonState, resource) {
	this.resource = resource;
	this.commonState = commonState;
	this.cookieExpireDay = 30;
	this.selectorContext = {};
	this.activeLinkContext = null;
	var self = this;

	this.events = [
		{
			type: "click",
			selector: function () {
				return $("#geo-location-goto-global");
			},
			listener: function () {
				self.commonState.saveCookie("suggest", "suggested", self.cookieExpireDay)
			}
		}
	];

	if(window.geoLocationForceMode) {
		this.events.push({
			type: 'click',
			selector: function () {
				return $('#delete-cookie-for-test')
			},
			listener: function (event) {
				event.preventDefault();
				commonState.deleteCookie("suggest", "/")
			}
		});
	}
}

GeoLocationMenu.prototype.load = function () {
	var location = window.location;
	//サジェスト機能発動条件 (top page) or (強制モード)
	var isIndex = new RegExp('^/index.html?');
	if((location.pathname === "" || location.pathname === "/" || isIndex.test(location.pathname)) || window.geoLocationForceMode ) {
		//continue
	} else {
		return;//処理終了
	}

	var query = window.location.search;
	var hasQuery = query != "";
	var countryCodeFromQuery = function () {
		if(hasQuery) {
			return query.replace("?country_code=","");
		} else {
			return window.country_iso_code;
		}
	};

	var countryCode = countryCodeFromQuery();

	var resourceName = "geoLocationInfo";
	var targetJsonFileName = countryCode + ".json";
	this.resource.register(resourceName, {
		url: "/assets/json/" + targetJsonFileName,
		dataType: "json"
	});

	this.success = function (name, suggest, data) {
		var self = this;
		this.resource.resourceMap[name]["data"] = data;
		suggest(countryCode);
	};

	this.createMenu = function (countryCode) {
		if (countryCode) {
			this.createLinks();
		}

		//selectorContext生成
		this.selectorContext.regionMenu = $('.geo-location-region-menu');
		this.selectorContext.companyLinks = $('.geo-location-links');

		this.hideAllMenu();
		countryCode ? this.changeLinkMenu(countryCode) : this.selectorContext.regionMenu.show();
	};

	this.hideAllMenu = function () {
		this.selectorContext.regionMenu.hide();
		this.selectorContext.companyLinks.hide();
	};

	var linkPageTemplate = $('.geo-location-template-link');
	var linkTypeTemplate = $('#geo-location-template-link-company');

	this.changeLinkMenu = function (countryCode) {
		this.selectorContext.companyLinks.show();
		//表示中のlinkページを非表示にする
		if (this.activeLinkContext) {
			this.activeLinkContext.hide();
		}
		var activeLinkTarget = $('#geo-location-link-' + countryCode);
		activeLinkTarget.show();
		this.activeLinkContext = activeLinkTarget;
	};

	this.createLinks = function () {
		var countryData = this.resource.getCountryData();
		var self = this;

		//template取得
		var linkPage = linkPageTemplate.clone(true);
		linkPage.removeClass('geo-location-template-link');
		linkPage.addClass('geo-location-link');
		linkPage.hide();

		//id付与
		linkPage.attr({id: 'geo-location-link-' + countryCode});
		var linkPageContents = linkPage.find('.geo-location-link__contents');

		//header生成
		var header = linkPage.find('.geo-location-link__country-name');
		var fromCountry = linkPage.find('.geo-location-link__from-country');
		header.append(countryData.country);
		fromCountry.append(countryData.country);

		//linkリスト生成
		$.each(countryData.companies, function () {
			var link = linkTypeTemplate.clone(true);
			link.removeAttr('id');
			link.show();
			var companyInfo = this.isDistributor === "True" ? '<span>' + 'Distributor' + '</span>' + this.name : this.name;
			link.find('.geo-location-link-company-block__body').children('.geo-location-link-company-block__text').append(companyInfo);

			//link生成
			$.each(this.links, function () {
				link.find('.geo-location-link-company-block__body').children('.geo-location-link-company-block__list').append($('<li>').append('<i class="c-icon__left--arrowright"></i>').append($('<a>', {
					href: this.log,//カウントHTML用URL
					target: this.target,
					text: this.lang
				}).append(((this.target == '_blank') ? '<i class="c-icon__image"><img src="/assets/img/icon_link-ext.svg" alt="[Open in a new window]" height="17" width="17"></i>' : ''))));
			});

			//title挿入
			link.find('.geo-location-link-company-block__title').append(self.resource.getCompanyTypeName(this.type));

			//imagePath挿入
			link.find('.geo-location-link-company-block__media').find('img').attr('src', self.resource.getImagePath(this.type));
			linkPageContents.append(link);
		});

		//caption挿入
		linkPage.find('.geo-location-link__footer').append(countryData.caption);

		//2カラムgrid用マークアップ挿入
		do {
			linkPageContents.children(".c-grid__col1-2:lt(2)").wrapAll('<div class="c-grid"></div>');
		} while (linkPageContents.children(".c-grid__col1-2").length);

		//domとしてappend
		$('.geo-location-links').append(linkPage);


		//戻るボタンのイベントを登録
		var backToRegion = function () {
			this.hideAllMenu();
			this.selectorContext.regionMenu.show();
		};
		$('.geo-location-link__back').on('click', backToRegion.bind(this));
	};

	//国一覧メニューオープン処理
	this.suggest = function (countryCode) {
		//メニュー生成（dom生成）
		this.createMenu(countryCode);

		//クッキーチェック
		if (this.commonState.containsCookie("suggest", "suggested")) {
			//do nothing
		} else {
			//モーダル開く
			$("a[href='#geo-location-modalcontent']").click();
		}
	};

	//国コードが判別出来なかった場合はリージョンメニューをsuggestする。
	if (!countryCode) {
		this.suggest(null);
		return;
	}

	//国固有情報取得
	this.resource.get(resourceName, this.success.bind(this, resourceName, this.suggest.bind(this)), this.suggest.bind(this, null))

};

function GlobalNavComponent(commonState) {
	var self = this;
	this.commonState = commonState;
	this.selectorContext = {};
	this.parent = null;
	this.events = [
		{
			type: 'click',
			selector: function () {
				return $(".global-navi__button").add('.global-navi__close');
			},
			listener: function (event) {
				event.preventDefault();
				var navButtonWrapper = self.selectorContext['navButtonWrapper'];
				var navButton = self.selectorContext['navButton'];
				navButtonWrapper.toggleClass('is--active');
				navButton.toggleClass('is--active');
				navButton.attr('aria-expanded', navButton.hasClass('is--active'));
				if(!navButton.hasClass('is--active')) {
					navButton.eq(0).focus();
				}

				$('.global-navi__wrap').toggle(0, self.toggleOverlay);
				if(navButton.hasClass('is--active')) {
					//通知する
					self.parent.notifyActivate();
				}
			}
		},
		{
			type: 'click',
			selector: function () {
				return $(".global-navi__menu__item.has--sub>a").add('.global-navi__submenu__close');
			},
			listener: function (event) {
				var elem, lang, mobile;
				event.preventDefault();
				lang = $('html')[0].lang;
				mobile = commonState.isMobile();
				elem = $(this).closest('.global-navi__menu__item');
				if ((lang === 'en' && !mobile) || (lang === 'ja' && mobile)) {
					if (elem.hasClass('is--open')) {
						$(this).closest('.global-navi__menu__item').removeClass('is--open');
						$(this).closest('.global-navi__menu__item').siblings().removeClass('is--open');
						$(this).attr('aria-expanded', false);
					} else {
						$(this).closest('.global-navi__menu__item').removeClass('is--open');
						$(this).closest('.global-navi__menu__item').siblings().removeClass('is--open');
						$(this).closest('.global-navi__menu__item').toggleClass('is--open');
						self.selectorContext.navLinks.attr('aria-expanded', false);
						$(this).attr('aria-expanded', true);
					}
				}
				if (lang === 'en' && mobile) {
					if (elem.hasClass('is--open')) {
						$(this).closest('.global-navi__menu__item').removeClass('is--open');
						$(this).attr('aria-expanded', false);
						$(this).closest('.global-navi__menu__item.has--sub').children('a').eq(0).focus();
					} else {
						$(this).closest('.global-navi__menu__item').removeClass('is--open');
						$(this).closest('.global-navi__menu__item').toggleClass('is--open');
						self.selectorContext.navLinks.attr('aria-expanded', false);
						$(this).attr('aria-expanded', true);
					}
				}
			}
		},
		{
			type: 'keydown',
			selector: function () {
				return $(".global-navi__submenu__close");
			},
			listener: function (event) {
				if(event.keyCode == commonState.keyCode.TAB) {
					event.preventDefault();
					//フォーカスをオープン中のグロナビ内に閉じ込める
					$('.global-navi__menu__item.is--open > a').eq(0).focus();
				}
			}
		},
		{
			type: 'keydown',
			selector: function () {
				return $(".global-navi__close");
			},
			listener: function (event) {
				if(event.keyCode == commonState.keyCode.TAB) {
					event.preventDefault();
					//フォーカスをオープン中のハンバーガーメニュー内に閉じ込める
					self.selectorContext['navButton'].eq(0).focus();
				}
				if(event.keyCode == commonState.keyCode.ENTER) {
					self.selectorContext['navButton'].eq(0).focus();
				}
			}
		}
	];

	this.openCurrentMegaMenu = function () {
		if ($('.global-navi__menu').hasClass('no--stay')) {
			//任意設定
			$('.global-navi__menu > li').each(function () {
				var $anchor, isOpen, hasActive;
				$anchor = $(this).children('a');
				isOpen = $(this).is('.is--open');
				hasActive = $(this).is('.is--active');
				if (hasActive && !isOpen) {
					return $anchor.click();
				}
			});
		} else {
			//自動判定
			var dir = location.pathname.split("/")[1];
			if (dir !== void 0) {
				$('.global-navi__menu > li').each(function () {
					var $anchor, href, isCurrent, isOpen;
					$anchor = $(this).children('a');
					href = $anchor.attr('href').replace(/\/|index.html?/g, '');
					isCurrent = href === dir ? true : false;
					isOpen = $(this).is('.is--open');
					if (isCurrent && !isOpen) {
						return $anchor.click();
					}
				});
			}
		}
	};

	this.toggleOverlay = function () {
		if ($(this).is(':hidden')) {
			$('.overlay-bg').remove();
		} else {
			$('<div class="overlay-bg"></div>').insertAfter($(this).closest('.global-navi'));
		}
	};

	$(".category-navi .category-navi-inner").each(function () {
		return $(this).find('.category-navi__title').on('click', function (event) {
			if (commonState.getMobileState()) {
				event.preventDefault();
				$(this).toggleClass('is--open');
				return $(this).next().slideToggle();
			}
		});
	});

	var isAutoStay = function () {
		return !$('.global-navi__menu').hasClass('no--stay');
	};

	if (isAutoStay()) {
		var dir = location.pathname.split("/")[1];
		if (dir !== void 0) {
			dir = dir.replace(/index.html?/g, '');
			$(".global-navi__menu > li").each(function () {
				var href;
				href = $(this).find("a").attr("href").replace(/\/|index.html?/g, '');
				$(this).removeClass("is--active");
				if (href === dir) {
					return $(this).addClass("is--active");
				}
			});
		}
	}
}

GlobalNavComponent.prototype.postLoad = function () {
	this.selectorContext['navButtonWrapper'] = $('.global-navi__button');
	this.selectorContext['navButton'] = this.selectorContext['navButtonWrapper'].children('button');

	this.reset();
	this.selectorContext['navLinks'] = $('.global-navi__menu__item.has--sub > a');
	this.selectorContext.navLinks.attr('aria-expanded', false);
	if (this.commonState.isMobile()) {
		this.openCurrentMegaMenu();
	}
};

GlobalNavComponent.prototype.changeToMobileState = function () {
	this.reset();
	$(".category-navi .category-navi-inner .category-navi__title").each(function () {
		$(this).removeClass('is--open');
		$(this).next().hide();
	});

	this.openCurrentMegaMenu();
};

GlobalNavComponent.prototype.changeToUnMobileState = function () {
	this.reset();
	$(".category-navi .category-navi-inner .category-navi__title").each(function () {
		$(this).removeClass('is--open');
		$(this).next().show();
	});
};

GlobalNavComponent.prototype.reset = function () {
	this.selectorContext['navButtonWrapper'].removeClass('is--active');
	this.selectorContext['navButton'].removeClass('is--active');
	this.selectorContext['navButton'].attr('aria-expanded', false);
	$('.global-navi__wrap').hide();
	$('.overlay-bg').remove();
	$('.global-navi__menu__item').each(function () {
		return $(this).removeClass('is--open');
	});
};

GlobalNavComponent.prototype.receiveActivateNotification = function (notifier, componentName) {
	if(componentName == "HeaderSearchComponent") {
		//HeaderSearchComponentとの表示競合を避けるため自身を閉じる
		this.selectorContext['navButtonWrapper'].removeClass('is--active');
		this.selectorContext['navButton'].removeClass('is--active');
		this.selectorContext['navButton'].attr('aria-expanded', false);
		$('.global-navi__wrap').hide();
		$('.overlay-bg').remove();
	}
};

function HeaderSearchComponent() {
	var self = this;
	this.targetSelector = '.header__search__button > button';
	this.parent = null;
	this.events = [
		{
			type: 'click',
			selector: function () {
				return $(self.targetSelector);
			},
			listener: function (event) {
				event.preventDefault();
				$(this).parent().toggleClass('is--active');
				self.toggleText($(this));
				$('.header__search__form').toggle();
				if($(this).parent().hasClass('is--active')) {
					//アクティブ通知する
					self.parent.notifyActivate()
				}
			}
		}
	];

	this.toggleText = function ($button) {
		var lang = $('html')[0].lang;
		var $target = $button.find("span");
		//aria-labelの文言を変えるようにする。
		if(lang === "ja") {
			if($button.parent().hasClass('is--active')) {
				$target.attr('aria-label', "閉じる")
			} else {
				$target.attr('aria-label', "検索")
			}

		} else if(lang === "en") {
			if($button.parent().hasClass('is--active')) {
				$target.attr('aria-label', 'Close')
			} else {
				$target.attr('aria-label', 'Search')
			}
		}
	}
}

HeaderSearchComponent.prototype.load = function () {
	this.toggleText($(this.targetSelector));
};

HeaderSearchComponent.prototype.receiveActivateNotification = function (notifier, componentName) {
	if(componentName == "GlobalNavComponent") {
		//GlobalNavComponentとの表示競合を避けるため自身を閉じる
		$(this.targetSelector).parent().removeClass('is--active');
		$('.header__search__form').hide()
	}
};


/**
 * 初期処理
 */
$(function() {
	var controller = new Controller();
	controller.init();
});


function LinkComponent(commonState) {
	var self = this;
	this.commonState = commonState;
	this.componentTarget = $(".c-accordion-local .c-accordion-local__section");
	this.accordionTitleSelector = '.c-accordion-local__section__title';
	this.accordionContentSelector = '.c-accordion-local__section__content';
	this.parent = null;
	
	this.events = [
		{
			type: "click keydown",
			selector: function () {
				return self.componentTarget.children(self.accordionTitleSelector);
			},
			listener: function (event) {
				if(self.commonState.isMobile()) {
					if((event.type === "keydown" && event.keyCode == commonState.keyCode.ENTER) || event.type === "click") {
						event.preventDefault();
						$(this).toggleClass('is--open');
						$(this).next().slideToggle();
						if($(this).hasClass('is--open')) {
							self.parent.notifyActivate($(this).next());//notifier:toggle対象dom
						}
					}
				}
			}
		}
	]
}

LinkComponent.prototype.load = function () {
	$(this.accordionTitleSelector).attr('tabindex' ,0);
	if(this.commonState.isMobile()) {
		var titleSelector = this.accordionTitleSelector;
		this.componentTarget.each(function () {
			//タグアクセスの場合オープン状態で初期化する。
			if (location.hash == '#' + $(this).attr('id')) {
				$(this).children(titleSelector).addClass('is--open').next().slideToggle()
			}
			//初期表示指定あり
			if ($(this).hasClass('is--ini-open')) {
				$(this).children(titleSelector).addClass('is--open').next().toggle()
			}
		});
	}
};


LinkComponent.prototype.changeToMobileState = function () {
	this.hideAll();
};

LinkComponent.prototype.changeToUnMobileState = function () {
	this.showAll();
};

LinkComponent.prototype.showAll = function () {
	var contentSelector = this.accordionContentSelector;
	this.componentTarget.each(function () {
		$(this).children(contentSelector).show();
	});
};

LinkComponent.prototype.hideAll = function () {
	var titleSelector = this.accordionTitleSelector;
	var contentSelector = this.accordionContentSelector;
	this.componentTarget.each(function () {
		//コンテキスト維持
		if($(this).children(titleSelector).hasClass('is--open')) {
			$(this).children(titleSelector).show();
		} else {
			$(this).children(contentSelector).hide();
		}
	});
};

function MediaComponent() {
	this.componentRoot = $('.c-viewer');
	var self = this;

	this.componentRoot.each(function() {
		var $left_controller, $right_controller, $thumbnail, image_switching, interval, switchImageSource;
		if ($(this).parents('pre').length) {
			return true;
		}
		interval = null;
		$thumbnail = $(this).find('.c-viewer__thumbnail');
		$left_controller = $('<a>').addClass('c-viewer__thumbnail__controll--left hidden').attr("href","#");
		$right_controller = $('<a>').addClass('c-viewer__thumbnail__controll--right hidden').attr("href","#");
		$thumbnail.prepend($left_controller);
		$thumbnail.append($right_controller);
		if (navigator.userAgent.toLowerCase().search(/iphone|ipad|android/) !== -1) {
			$thumbnail.find('.c-viewer__thumbnail__list').each(function() {
				return $(this).css('overflow-x', 'auto');
			});
		}
		$right_controller.on("click", function(event) {
			event.preventDefault();
			var $thmb_list, current_scroll, scroll_to;
			$thmb_list = $(this).siblings('.c-viewer__thumbnail__list');
			current_scroll = $thmb_list.get(0).scrollLeft;
			scroll_to = Math.min(current_scroll + $thmb_list.width() / 2, $thmb_list.get(0).scrollWidth - $thmb_list.width());
			$thmb_list.animate({
				scrollLeft: scroll_to
			}, 200);
		});

		$left_controller.on("click", function(event) {
			event.preventDefault();
			var $thmb_list, current_scroll, scroll_to;
			$thmb_list = $(this).siblings('.c-viewer__thumbnail__list');
			current_scroll = $thmb_list.get(0).scrollLeft;
			scroll_to = Math.max(current_scroll - $thmb_list.width() / 2, 0);
			$thmb_list.animate({
				scrollLeft: scroll_to
			}, 300);
		});

		image_switching = false;
		switchImageSource = function($img, src) {
			var origin_opacity, repl_opacity;
			if (image_switching) {
				return;
			}
			image_switching = true;
			origin_opacity = 100;
			repl_opacity = 0;
			interval = window.setInterval(function() {
				if (origin_opacity > 0) {
					origin_opacity -= 10;
					$img.css("opacity", origin_opacity / 100);
				} else if (origin_opacity <= 0 && repl_opacity === 0) {
					$img.css("opacity", 0);
					$img.attr("src", src);
					repl_opacity += 10;
				} else if (repl_opacity < 100) {
					$img.css("opacity", repl_opacity / 100);
					repl_opacity += 10;
				} else {
					$img.css("opacity", "");
					window.clearInterval(interval);
					image_switching = false;
				}
			}, 15);
		};

		$(this).find('.c-viewer__thumbnail__list LI').each(function() {
			var $img;
			if ($(this).hasClass('is--active')) {
				$img = $(this).parents('.c-viewer').find('.c-viewer__viewbox__image');
				$img.attr("src", $(this).attr("data-src"));
			}
			$(this).on("click", function(event) {
				//href="#"のイベント伝搬ストップ
				event.preventDefault();
				if(image_switching) {
					window.clearInterval(interval);
					image_switching = false;
				}
				$(this).siblings('LI').each(function() {
					return $(this).removeClass('is--active');
				});
				$(this).addClass('is--active');
				$img = $(this).parents('.c-viewer').find('.c-viewer__viewbox__image');
				switchImageSource($img, $(this).attr("data-src"));
			});
		});
	});

	$(window).on('load resize', function() {
		self.changeControllerDisplay();
	});
}

MediaComponent.prototype.changeControllerDisplay = function () {
	this.componentRoot.find('.c-viewer__thumbnail__list').each(function() {
		var panel = $(this).get(0);
		if (panel.clientWidth === panel.scrollWidth) {
			$(this).siblings('.c-viewer__thumbnail__controll--left').addClass('hidden');
			return $(this).siblings('.c-viewer__thumbnail__controll--right').addClass('hidden');
		} else {
			$(this).siblings('.c-viewer__thumbnail__controll--left').removeClass('hidden');
			return $(this).siblings('.c-viewer__thumbnail__controll--right').removeClass('hidden');
		}
	});
};

MediaComponent.prototype.receiveActivateNotification = function (notifier, componentName) {
	if(componentName == "AccordionComponent" || componentName == "LinkComponent") {
		var self = this;
		this.componentRoot.each(function () {
			if($(this).parent().get(0) == notifier.get(0)) {//compare dom(not jQuery object)
				//自身が通知元のアコーディオン配下だった場合にボタンの表示有無判定を行う。
				self.changeControllerDisplay();
			}
		});
	}
};



function ModalComponent() {
	var focus_waiting_time = 100;
	var TAB_KEY_CODE = 9;
	var ENTER_KEY_CODE = 13;
	$('.js-modal').magnificPopup({
		type: 'inline',
		// preloader: false,
		mainClass: 'mfp-fade',
		removalDelay: 300,
		fixedBgPos: true,
		closeBtnInside: true,
		enableEscapeKey:true,
		closeMarkup: '<span role="button" class="js-modal__close" tabindex="0">Close(Esc)</span>',
		callbacks: {
			open: function() {
				var self = this;
				var $content = $(this)[0].content;
				var $topElement = $content.children().eq(0);
				$topElement.attr('tabindex', 0);
				$topElement.css('outline', 'none');
				$content.find('.js-modal__close').on('keydown click', function (event) {
					if(event.keyCode == TAB_KEY_CODE) {
						event.preventDefault();
						$topElement.focus();
					}

					if(event.keyCode == ENTER_KEY_CODE || event.type === "click") {
						self.close();
					}
				});
				return window.setTimeout(function() {
					$topElement.focus();
				}, focus_waiting_time);
			}
		}
	});
}
function NavigationComponent() {
	var get_filename, get_hash, get_path, is_index, page_filename, page_is_index, page_path;
	get_path = function (url) {
		var matched;
		if (url.indexOf("#") === 0) {
			url = location.pathname + url;
		}
		url = url.replace(/^https?\:\/\/[\w\-\.\:]+/, "");
		url = url.split("#")[0].split("?")[0];
		matched = url.match("(/.+/)[^\/]*?$");
		if (!!matched) {
			return matched[1];
		} else {
			return "/";
		}
	};
	get_hash = function (url) {
		url = url.replace(/^https?\:\/\/[\w\-\.\:]+/, "");
		if (url.indexOf("#") < 0) {
			return "";
		}
		return url.slice(url.indexOf("#"));
	};
	is_index = function (url) {
		url = url.split("#")[0].split("?")[0];
		url = url.replace(/index.html?$/, '');
		return url.lastIndexOf('/') === url.length - 1;
	};
	get_filename = function (url) {
		var spl;
		spl = url.split("#")[0].split("?")[0].split("/");
		return spl[spl.length - 1].replace(/index.html?/, '');
	};
	page_path = get_path(location.pathname);
	page_filename = get_filename(location.href);
	page_is_index = is_index(location.href);

	$('.category-navi__links,.local-navi__links').each(function () {
		var $found, $links, $menu, max_path_length;
		$found = null;
		$menu = $(this);
		if ($menu.hasClass('no--stay')) {
			return;
		}
		$links = $menu.find('>LI A');
		$links.each(function () {
			return $(this).parents('LI').removeClass("is--active");
		});
		if ($found === null) {
			$links.each(function () {
				var href, link_filename, link_hash, link_path;
				if ($(this).parents('LI').hasClass('sp-only--title')) {
					return true;
				}
				href = $(this).attr("href");
				link_path = get_path(href);
				link_filename = get_filename(href);
				link_hash = get_hash(href);
				if (!link_hash && link_path === page_path && link_filename === page_filename) {
					$found = $(this);
					return false;
				}
			});
		}
		if ($found === null && !page_is_index) {
			$links.each(function () {
				var href, link_hash, link_is_index, link_path;
				if ($(this).parents('LI').hasClass('sp-only--title')) {
					return true;
				}
				href = $(this).attr("href");
				link_path = get_path(href);
				link_is_index = is_index(href);
				link_hash = get_hash(href);
				if (!link_hash && link_path === page_path && link_is_index) {
					$found = $(this);
					return false;
				}
			});
		}
		if ($found === null) {
			max_path_length = 0;
			$links.each(function () {
				var href, link_path, spl;
				if ($(this).parents('LI').hasClass('sp-only--title')) {
					return true;
				}
				href = $(this).attr("href");
				link_path = get_path(href);
				if (page_path.indexOf(link_path) === 0 && page_path.length > link_path.length) {
					spl = link_path.split("/");
					if (max_path_length < spl.length) {
						max_path_length = spl.length;
						return $found = $(this);
					}
				}
			});
		}
		if ($found !== null) {
			return $found.parents('LI').addClass("is--active");
		}
	});
}
/**
 * WebAPIリソースコンテナ
 */
function Resource() {
	this.resourceMap = {};
	this.timeoutMills = 3000;
}

Resource.prototype.register = function (name, resource) {
	this.resourceMap[name] = resource;
};

/**
 * リソースをサーバから取得する
 * @param name リソース名
 * @param success リソース取得後のコールバック
 * @param error リソース取得失敗時のコールバック
 */
Resource.prototype.get = function (name, success, error) {
	var url = this.resourceMap[name].url;
	var dataType = this.resourceMap[name].dataType;

	var errorListener = function (response, status) {
		try {
			$.parseJSON(response);
			error(response, status);
		} catch (e) {
			console.error("json parse error!!!" + e)
			error(status);
		}
	};

	$.ajax({
		type: 'GET',
		url: url,
		dataType: dataType,
		success: success,
		error: errorListener,
		timeout: this.timeoutMills
	})
};

/**
 * 会社タイプ別のイメージpathを取得する
 */
Resource.prototype.getImagePath = function (type) {
	return this.resourceMap.geoLocationInfo.data.thumbnails[type].link;
};

/**
 * 会社タイプ別のイメージpathを取得する
 */
Resource.prototype.getCompanyTypeName = function (type) {
	return this.resourceMap.geoLocationInfo.data.thumbnails[type].name;
};

Resource.prototype.getCountryData = function () {
	return this.resourceMap.geoLocationInfo.data;
};
function TabComponent(commonState) {
	var self = this;

	this.selectTabItem = function () {
		return $('.js-tab').find('.c-tab__item');
	};

	this.selectTabALink = function () {
		return $('.js-tab').find('.c-tab__item > a');
	};

	this.tab = $('.c-tab');

	this.changeTab = function (event) {
		var $tab, $tabs, $tabItem, $tabContents, index;
		if (!$(this).hasClass("is--active")) {
			event.preventDefault();
			$tabItem = $(this);
			index = $tabItem.index();
			$tab = $tabItem.closest('.c-tab');
			$tabs = $tab.find('.c-tab__tabs').first();
			$tabContents = $tab.children('.c-tab__contents');
			$tabContents.children(".c-tab__panel" + ".is--open").removeClass("is--open").hide();
			$tabContents.children('.c-tab__panel').eq(index).toggleClass("is--open").toggle();
			$tabs.children(".c-tab__item").removeClass("is--active");
			$tabItem.addClass("is--active");
		} else {
			event.preventDefault();
		}
	};

	this.events = [
		{
			type: 'click',
			selector: self.selectTabItem,
			listener: self.changeTab
		},
		{
			type: 'keydown',
			selector: self.selectTabALink,
			listener: function (event) {
				var $target;
				switch (event.keyCode) {
					case commonState.keyCode.LEFT:
						$target = $(this).parent().prev('li[role="tab"]');
						break;
					case commonState.keyCode.RIGHT:
						$target = $(this).parent().next('li[role="tab"]');
						break;
					default:
						$target = null;
				}
				if (!!$target) {
					return $target.children('a').focus();
				}
			}
		},
		{
			type: 'keydown',
			selector: self.selectTabItem,
			listener: function (event) {
				if (event.keyCode == commonState.keyCode.ENTER) {
					self.changeTab.apply(this, [event]);
				}
			}
		}
	];
}

TabComponent.prototype.load = function () {
	$('.js-tab').each(function (i) {
		var $tab, index;
		$tab = $(this);
		var $tabs = $tab.find('.c-tab__tabs').first();
		var $tabItems = $tabs.children('.c-tab__item');
		var $panels = $('.c-tab__panel', $tab.children('.c-tab__contents'));
		$.each($tabItems, function (item_index) {
			var id;
			id = $panels.eq(item_index).attr('id');
			if (!id) {
				id = 'tabpanel_' + i + '_' + item_index;
				$panels.eq(item_index).attr('id', id);
			}
			$(this).html('<a href="#' + id + '">' + $(this).html() + '</a>');
		});

		if ($tabs.children('.is--active').length !== 0) {
			index = $tabs.children('.is--active').index();
			$panels.eq(index).addClass('is--open').show();
		} else {
			$tabItems.eq(0).addClass('is--active');
			$panels.eq(0).addClass('is--open').show();
		}
	});

	var location_hash = location.hash;
	if (location.hash) {
		$('.js-tab .c-tab__item > A').each(function () {
			var hash;
			hash = $(this).attr('href');
			hash = hash.indexOf('#') > -1 ? hash.slice(hash.indexOf('#')) : '';
			if (hash === location_hash) {
				$(this).focus();
				return $(this).get(0).scrollIntoView();
			}
		});
	}
	this.adjustHeight();
};

TabComponent.prototype.adjustHeight = function () {
	//タブ高さ調整
	this.tab.each(function () {
		var label_height;
		label_height = 0;
		var isHide = !$(this).parent().is(':visible');
		if(isHide) {
			//高さを取得するため一時的に表示状態にする。
			$(this).parent().show();
		}
		//各itemのmax値を算出する。
		var $items = $('.c-tab__item', $(this).find('.c-tab__tabs').first());
		//reset
		$items.each(function () {
			$(this).removeAttr('style');
		});
		$items.each(function () {
			label_height = Math.max(label_height, $(this).height());
		});
		//各タブの高さを最大値に合わせる。
		$items.each(function () {
			if (label_height > 0) {
				$(this).height(label_height);
			}
		});
		if(isHide) {
			$(this).parent().hide();
		}
	});
};

TabComponent.prototype.resize = function () {
	this.adjustHeight();
};
function TableComponent(commonState) {
	this.commonState = commonState;
	this.accordionTHSelector = '.c-table-accordion--2col TH';

	this.events = [
		{
			type: 'click',
			selector: function () {
				return $('.c-table-accordion--2col TH');
			},
			listener: function (event) {
				if (commonState.isMobile()) {
					event.preventDefault();
					self.toggle($(this), false);
				}
			}
		},
		{
			type: 'keydown',
			selector: function () {
				return $('.c-table-accordion--2col TH');
			},
			listener: function (event) {
				if(event.keyCode == commonState.keyCode.ENTER) {
					self.toggle($(this), false);
					return;
				}
				var target;
				switch (event.keyCode) {
					case commonState.keyCode.LEFT:
						target = $(this).closest('tr').prev().children(this.accordionTHSelector);
						break;
					case commonState.keyCode.RIGHT:
						target = $(this).closest('tr').next().children(this.accordionTHSelector);
						break;
				}
				if (!!target) {
					return target.eq(0).focus();
				}
			}
		}
	];
	this.toggle = function (target, immediately) {
		target.toggleClass('is--open');
		target.attr("aria-expanded", target.hasClass("is--open"));
		target.parent().attr("aria-expanded", target.hasClass("is--open"));
		if(immediately) {
			target.next().toggle();
		} else {
			target.next().slideToggle();
		}
	};
	this.bindToggleEvent = function(obj) {
		$(obj).on('click', function (event) {
			event.preventDefault();
			self.toggle($(obj),false);
		});
		$(obj).on('keydown', function (event) {
			if(event.keyCode == self.commonState.keyCode.ENTER) {
				self.toggle($(obj), false);
				return;
			}
			var target;
			switch (event.keyCode) {
				case self.commonState.keyCode.LEFT:
					target = $(this).closest('tr').prev().children(this.accordionTHSelector);
					break;
				case self.commonState.keyCode.RIGHT:
					target = $(this).closest('tr').next().children(this.accordionTHSelector);
					break;
			}
			if (!!target) {
				return target.eq(0).focus();
			}
		});
	}

	this.origin = '.c-table-accordion, .c-table-accordion2';
	this.alt = '.c-table-accordion--sm';
	var self = this;
	this.trNumList = [];
	this.tdNumList = [];
	this.pcTrContext = [];

	//テーブルレコード数取得
	$(this.origin).each(function(){
		//縮小時アコーディオン1(A)で利用
		var num = $("tbody tr", $(this)).length;
		self.trNumList.push(num);
		//縮小時アコーディオン2(A')で利用
		var num2 = $("thead tr:eq(0) th", $(this)).length - 1;
		self.tdNumList.push(num2);
	});

	//wrap要素付け替え関数
	this.replaceElement = function (origin, toElement) {
		//originから属性全てを取得
		var attrsArr = this.getAttrs(origin.get(0));

		//toElementへ属性を引き継ぎ
		var elm = $(toElement, attrsArr);
		
		//空の場合はスペースを追加
		if (origin.contents()[0] == undefined) {
			origin.append('&nbsp;');
		}
		
		origin.wrap(elm);
		origin.contents().unwrap();
	};

	this.getAttrs = function(elm) {
		var elmAttrs = elm.attributes;
		var attrsArr = {};
		$.each(elmAttrs, function (idx) {
			var key = elmAttrs[idx].name;
			var value = elmAttrs[idx].value;
			attrsArr[key] = value;
		});
		return attrsArr;
	}
}

TableComponent.prototype.load = function () {
	$(this.origin).each(function(){
		//altテーブル枠生成
		var $altTable = $('<table>');
		$altTable.addClass('c-table c-table--horizontal c-table-accordion--2col c-table-accordion--sm');
		var $caption = $(this).children('caption');
		if($caption.length > 0) {
			$altTable.append($caption.clone(true));
		}
		$altTable.append('<tbody>');
		$altTable.insertAfter($(this));
	});
	$(this.alt).hide();

	this.reset();
};

TableComponent.prototype.changeTableLayout = function (isMobile) {
	$(".c-table-simple--list TD.data-txt").each(function (index) {
		var client_height, th_height;
		$(this).css("height", "");

		if (isMobile) {
			//高さ調節
			th_height = $($('.data-th')[index]).height();
			client_height = $(this).height();
			if (th_height > client_height) {
				$(this).css("height", th_height + "px");
			}
		}
	});
	//通常コンポーネント（テーブル - theadの各項目をそれぞれの先頭に付与）
	$(".c-table-list .data-txt").each(function (index) {
		var client_height, th_height;
		$(this).css("height", "");

		if (isMobile) {
			//高さ調節
			th_height = $(this).find('.data-th').height();
			client_height = $(this).height();
			if (th_height > client_height) {
				$(this).css("height", th_height + "px");
			}
		}
	});
};

TableComponent.prototype.reset = function () {
	var self = this;
	$(this.accordionTHSelector).each(function () {
		$(this).removeClass("is--open");
		if (self.commonState.isMobile()) {
			self.hideAllAccordion();
		} else {
			self.showAllAccordion();
		}
	});
	this.changeTableLayout(self.commonState.isMobile());

	if(self.commonState.isMobile()) {
		this.changeToMobileState(true)
	}

};

TableComponent.prototype.changeToMobileState = function (isLoading) {
	$(this.accordionTHSelector).each(function () {
		$(this).removeClass("is--open").attr({role: 'button', tabindex: 0});
	});
	this.changeTableLayout(true);

	var root = this;
	$(this.origin).each(function(index){
		var $pcTheadList = $('thead', $(this));
		var $pcTheadThList = $('thead th', $(this));
		var $pcBodyThList = $('tbody th', $(this));
		var $pcBodyTrList = $('tbody tr', $(this));
		var $altTable = $(root.alt).eq(index);
		var $mobileTBody = $('tbody', $altTable);
		var isAccordion2 = $(this).hasClass('c-table-accordion2');

		//縮小時アコーディオン1(アコーディオンメニュー=>[thead]th, コンテンツ=>[tbody]th + [tbody]td)
		if (!isAccordion2) {
			$pcTheadThList.each(function (index) {
				//左上隅の空ヘッダーは除外
				if (index == 0) {
					return;
				}

				$('<tr>').appendTo($mobileTBody);

				//th移動
				var $trTarget = $('tr', $mobileTBody).last();
				$(this).appendTo($trTarget).attr({role: 'button', tabindex: 0});
				//load時はeventsで登録されるため登録不要
				if(isLoading !== true) {
					root.bindToggleEvent($(this));
				}

				$('<td>').appendTo($trTarget);

				var $tdTarget = $('td', $trTarget).last();
				$('<dl>').appendTo($tdTarget);

				var pcBodyTdList = [];
				$pcBodyTrList.each(function () {
					//未移動のtd先頭要素取得
					pcBodyTdList.push($(this).children('td').first())
				});

				var $dlTarget = $('dl', $tdTarget).last();
				$pcBodyThList.each(function (index) {
					//<th>→<dt>に変換してdlに移動
					var clone = $(this).clone(true);
					clone.appendTo($dlTarget);
					root.replaceElement(clone,"<dt>");

					//<td>→<dd>に変換してdlに移動
					pcBodyTdList[index].appendTo($dlTarget);
					root.replaceElement(pcBodyTdList[index],"<dd>");

					$(this).remove()
				});

			});

			$pcTheadList.children().remove();
			if(root.pcTrContext.length == 0) {
				//属性コンテキストを保存しておいてpcに戻すときにこれを使う。
				$pcBodyTrList.each(function () {
					root.pcTrContext.push(root.getAttrs(this));
				});
			}
			$pcBodyTrList.remove();
		

		//縮小時アコーディオン2'(アコーディオンメニュー=>[tbody]th, コンテンツ=>[thdad]th + [tbody]td)
		} else {
			
			$pcBodyTrList.each(function (index) {

				$('<tr>').appendTo($mobileTBody);
				var pcBodyTdList = $(this).find('td');

				var $trTarget = $('tr', $mobileTBody).last();
				$(this).find('th:eq(0)').appendTo($trTarget).attr({role: 'button', tabindex: 0});

				$('<td>').appendTo($trTarget);
				var $tdTarget = $('td', $trTarget).last();
				
				$('<dl>').appendTo($tdTarget);
				var $dlTarget = $('dl', $tdTarget).last();
				
				$pcTheadThList.each(function (index) {
					//左上隅の空ヘッダーは除外
					if (index == 0) {
						return;
					}

					//thead > <th> → <dt>に変換してdlに移動
					var clone = $(this).clone(true);
					clone.appendTo($dlTarget);
					root.replaceElement(clone,"<dt>");
					var tdIndex = index-1;

					//<td>→<dd>に変換してdlに移動]
					$(pcBodyTdList[tdIndex]).appendTo($dlTarget);
					root.replaceElement($(pcBodyTdList[tdIndex]),"<dd>");

					$(this).remove()
					
				});
			
			});

			$pcTheadList.children().remove();
			$pcBodyTrList.remove();
			//load時はeventsで登録されるため登録不要
			if(isLoading !== true) {
				$('th', $mobileTBody).each(function() {
					$(this).off('click');
					root.bindToggleEvent($(this));
				});
			}
		}

		//テーブル表示切り替え
		$altTable.show();
		$(this).hide();

	});


	//ニュースコンポーネント用
	var self = this;
	$(".c-table-simple--list TD.data-txt").each(function () {
		//data-thからコンテンツを取得して挿入する。
		$(this).prepend("<span class='data-th'>" + $(this).data('th') + "</span>");
		self.changeTableLayout(true);
	});
	//通常コンポーネント（テーブル - theadの各項目をそれぞれの先頭に付与）
	$(".c-table-list .data-txt").each(function () {
		$(this).prepend("<span class='data-th'>" + ($(this).data('th') || '') + "</span>");
		self.changeTableLayout(true);
	});

	this.hideAllAccordion();

};

TableComponent.prototype.changeToUnMobileState = function () {
	$(this.accordionTHSelector).each(function () {
		$(this).removeClass("is--open").removeAttr('aria-expanded tabindex role');
	});

	this.showAllAccordion();

	$(".c-table-simple--list TD.data-txt, .c-table-list .data-txt").each(function () {
		$(this).css("height", "");
	});

	var root = this;
	$(this.origin).each(function(index){
		var $altTable = $(root.alt).eq(index);

		var $mobileTheadList = $('tbody tr th', $altTable);
		var $mobileTrList = $('tbody tr', $altTable);
		var $pcTBody = $('tbody', $(this));
		var $pcThead = $('thead', $(this));
		var isAccordion2 = $(this).hasClass('c-table-accordion2');

		//縮小時アコーディオン1
		if (!isAccordion2) {
			//theader生成
			$('<tr>').appendTo($pcThead);
			var thTarget = $('tr', $pcThead);
			//空thを最初に追加
			$('<th>').appendTo(thTarget);
			$mobileTheadList.each(function () {
				var clone = $(this).clone(true);
				clone.appendTo(thTarget).off();
			});

			//tbodyヘッダ生成
			for (var i = 0; i < root.trNumList[index]; i++) {
				//属性コンテキストからtrの属性を復元する
				$('<tr>', root.pcTrContext[i]).appendTo($pcTBody);

				// $('<tr>').appendTo($pcTBody);
				//korega origin??
				var $trTarget = $('tr', $pcTBody).last();
				//<dt>→<th>に変換してtrに移動
				var dt = $('td dl dt', $mobileTrList).first();
				dt.appendTo($trTarget);
				root.replaceElement(dt, "<th>");
			}


			//<dd>→<td>に変換してtrに移動
			var $pcBodyTRList = $('tbody tr', $(this));
			var recordNum = root.trNumList[index];
			$pcBodyTRList.each(function () {
				var $mobileDDList = $('tbody tr dd', $altTable);
				var trTarget = $(this);
				var ddListSize = $mobileDDList.length;
				var moveDDList = [];
				//移動対象となる各レコードの同一index要素をピックアップ
				for (var i = 0; i < ddListSize; i += recordNum) {
					moveDDList.push($mobileDDList.eq(i));
				}
				//生成したリストを移動
				$.each(moveDDList, function () {
					this.appendTo(trTarget);
					root.replaceElement(this, "<td>");
				});
				recordNum--;
			});


		//縮小時アコーディオン2
		} else {

			var $mobileBodyTheadList = $('tbody tr:eq(0) td dt', $altTable);

			//thead生成
			$('<tr>').appendTo($pcThead);
			var thTarget = $('tr', $pcThead);
			//空thを最初に追加
			$('<th>').appendTo(thTarget);
			
			$mobileBodyTheadList.each(function () {
				$(this).appendTo(thTarget);
				root.replaceElement($(this), "<th>");
				//アコーディオンイベント解除
				$(this).off()
			});

			//tbody生成
			$mobileTrList.each(function () {
				$('<tr>').appendTo($pcTBody);
				var trTarget = $('tr', $pcTBody).last();
				var clone = $(this).find('th:eq(0)').clone(true);
				clone.appendTo(trTarget).off();
				$(this).find('dd').each(function() {
					$(this).appendTo(trTarget);
					root.replaceElement($(this), "<td>");
				});
			});

		}

		$mobileTheadList.children().remove();
		$mobileTrList.remove();

		//テーブル表示切り替え
		$altTable.hide();
		$(this).show();
	});

	//ニュースコンポーネント用, 通常コンポーネント（テーブル - theadの各項目をそれぞれの先頭に付与）
	$(".c-table-simple--list TD.data-txt, .c-table-list .data-txt").each(function () {
		//data-thからコンテンツを取得して挿入する。
		$(this).find("span.data-th").eq(0).remove();
	});
};

TableComponent.prototype.showAllAccordion = function () {
	$(this.accordionTHSelector).each(function () {
		$(this).next().css("display", "");
	})
};

TableComponent.prototype.hideAllAccordion = function () {
	$(this.accordionTHSelector).each(function () {
		if(!$(this).hasClass('is--ini-open')) {
			$(this).next().hide();
		} else {
			$(this).addClass('is--open').next().show();
		}
	})
};


function ToolTipComponent(commonState) {
	var self = this;
	this.componentTarget = $('.c-tooltip');
	this.commonState = commonState;
	this.$focusContext = null;

	this.events = [
		{
			type: 'click touchstart',
			selector: function () {
				return $(document.body);
			},
			listener: this.clearToolTip
		},
		{
			type: 'click',
			selector: function () {
				return $('.c-tooltip__content__close-button > a');
			},
			listener: function (event) {
				event.preventDefault();
				self.clearToolTip();
			}
		},
		{//ページ内リンク無効化
			type: 'click',
			selector: function () {
				return $('.c-tooltip__content__heading__label');
			},
			listener: function (event) {
				event.preventDefault();
			}
		},
		{
			type: 'click',
			selector: function () {
				return self.componentTarget;
			},
			listener: function (event) {
				var $target, $trigger;
				event.preventDefault();
				event.stopPropagation();
				self.clearToolTip();
				$trigger = $(this);
				//フォーカス戻り先を保存しておく
				self.$focusContext = $trigger;
				$target = $('[data-tooltip-id="' + $trigger.attr('data-tooltip-target') + '"]');
				$target.toggleClass('hidden');
				self.panelAdjust($(this));
				if (!$target.hasClass('hidden')) {
					$target.attr('tabindex', 0);
					$target.find('.c-tooltip__content__heading__label').eq(0).focus();
				}
			}
		}
	];

	this.componentTarget.each(function () {
		$('[data-tooltip-id="' + $(this).attr('data-tooltip-target') + '"]').each(function () {
			$(this).on('click touchstart', function (event) {
				//document.body要素イベント無効化
				event.stopPropagation();
				var $srcElement = $(event.target);
				if ($srcElement.hasClass('c-tooltip__content__heading')) {
					$(this).toggleClass('hidden');
				}
			});
		});
	});
}

//ツールチップ本体を非表示にする
ToolTipComponent.prototype.clearToolTip = function () {
	var self = this;
	$('.c-tooltip__content').each(function () {
		$(this).addClass('hidden');
		$(this).attr('tabindex', -1);
		$(this).blur();
		//フォーカスを元のリンクに戻す
		if (self.$focusContext) {
			self.$focusContext.focus();
		}
	})
};

ToolTipComponent.prototype.load = function () {
	this.clearToolTip();

	var self = this;
	this.horizontal_margin = 15;
	this.bottom_margin = 12;

	this.componentTarget.each(function () {
		self.tooltipTarget = $('[data-tooltip-id="' + $(this).attr('data-tooltip-target') + '"]');
		//ラベルと閉じるボタンを生成する
		self.tooltipTarget.children('.c-tooltip__content__heading').each(function () {
			$(this).html('<a href="#" class="c-tooltip__content__heading__label">'
				+ $(this).html() + '</a><div class="c-tooltip__content__close-button"><a href="#" aria-label="Close"></a></div>');
		});
		self.panelAdjust($(this));
	});
};

ToolTipComponent.prototype.resize = function () {
	var self = this;
	this.componentTarget.each(function () {
		self.panelAdjust($(this))
	});
};

//パネル位置調整
ToolTipComponent.prototype.panelAdjust = function ($trigger) {
	var self = this;
	var $targets = $('[data-tooltip-id="' + $trigger.attr('data-tooltip-target') + '"]');
	$targets.each(function () {
		var $current_target, $target_offset, $trigger_head, $trigger_offset, dif_left, dif_top, styles;
		$current_target = $(this);
		$current_target.css("width", "");
		if (!$current_target.hasClass('hidden')) {
			if (self.commonState.isSafari()) {
				$current_target.css({
					transform: 'translate(0px,0px)',
					'-webkit-transform': 'translate(0px,0px)'
				});
				$current_target.parent().css('position', 'relative');
			} else {
				$current_target.css({
					top: '0px',
					left: '0px'
				});
			}
			self.componentTarget.css('position', 'relative');
			$trigger_head = $('<span>').css('position', 'absolute');
			$trigger.prepend($trigger_head);
			$trigger_offset = $trigger_head.offset();
			$target_offset = $current_target.offset();
			dif_left = $trigger_offset.left - $target_offset.left;
			dif_top = $trigger_offset.top - $target_offset.top;
			styles = {
				top: dif_top - (self.commonState.isMobile() ? 0 : self.bottom_margin) - $current_target.height()
			};
			if (self.commonState.isMobile()) {
				styles.width = $(window).width() - 2 * self.horizontal_margin + 'px';
				styles.left = -$target_offset.left + self.horizontal_margin;
			} else if ($trigger_offset.left + 300 > $(window).width()) {
				styles.width = '';
				styles.left = dif_left - ($trigger_offset.left + 310 - $(window).width());
			} else {
				styles.width = '';
				styles.left = dif_left;
			}
			if (self.commonState.isSafari()) {
				$current_target.css({
					transform: 'translate(' + styles.left + 'px,' + styles.top + 'px)',
					'-webkit-transform': 'translate(' + styles.left + 'px,' + styles.top + 'px)',
					width: styles.width
				});
			} else {
				$current_target.css({
					left: styles.left + 'px',
					top: styles.top + 'px',
					width: styles.width
				});
			}
			self.componentTarget.css('position', '');
			$trigger_head.remove();
		}
	});
};
