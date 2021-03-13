(function(){var b=b||{};b.scope={};b.checkStringArgs=function(a,c,d){if(null==a)throw new TypeError("The 'this' value for String.prototype."+d+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+d+" must not be a regular expression");return a+""};b.ASSUME_ES5=!1;b.ASSUME_NO_NATIVE_MAP=!1;b.ASSUME_NO_NATIVE_SET=!1;
b.defineProperty=b.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,d){a!=Array.prototype&&a!=Object.prototype&&(a[c]=d.value)};b.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};b.global=b.getGlobal(this);
b.polyfill=function(a,c){if(c){var d=b.global;a=a.split(".");for(var e=0;e<a.length-1;e++){var f=a[e];f in d||(d[f]={});d=d[f]}a=a[a.length-1];e=d[a];c=c(e);c!=e&&null!=c&&b.defineProperty(d,a,{configurable:!0,writable:!0,value:c})}};var g=g||{};g.global=this;g.isDef=function(a){return void 0!==a};g.isString=function(a){return"string"==typeof a};g.isBoolean=function(a){return"boolean"==typeof a};g.isNumber=function(a){return"number"==typeof a};
g.exportPath_=function(a,c,d){a=a.split(".");d=d||g.global;a[0]in d||!d.execScript||d.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)!a.length&&g.isDef(c)?d[e]=c:d=d[e]&&d[e]!==Object.prototype[e]?d[e]:d[e]={}};g.define=function(a,c){g.exportPath_(a,c)};g.DEBUG=!0;g.LOCALE="en";g.TRUSTED_SITE=!0;g.STRICT_MODE_COMPATIBLE=!1;g.DISALLOW_TEST_ONLY_CODE=!g.DEBUG;g.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING=!1;
g.provide=function(a){if(g.isInModuleLoader_())throw Error("goog.provide can not be used within a goog.module.");g.constructNamespace_(a)};g.constructNamespace_=function(a,c){g.exportPath_(a,c)};g.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
g.module=function(a){if(!g.isString(a)||!a||-1==a.search(g.VALID_MODULE_RE_))throw Error("Invalid module identifier");if(!g.isInModuleLoader_())throw Error("Module "+a+" has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");if(g.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");
g.moduleLoaderState_.moduleName=a};g.module.get=function(a){return g.module.getInternal_(a)};g.module.getInternal_=function(){return null};g.moduleLoaderState_=null;g.isInModuleLoader_=function(){return null!=g.moduleLoaderState_};g.module.declareLegacyNamespace=function(){g.moduleLoaderState_.declareLegacyNamespace=!0};g.setTestOnly=function(a){if(g.DISALLOW_TEST_ONLY_CODE)throw a=a||"",Error("Importing test-only code into non-debug environment"+(a?": "+a:"."));};g.forwardDeclare=function(){};
g.getObjectByName=function(a,c){a=a.split(".");c=c||g.global;for(var d=0;d<a.length;d++)if(c=c[a[d]],!g.isDefAndNotNull(c))return null;return c};g.globalize=function(a,c){c=c||g.global;for(var d in a)c[d]=a[d]};g.addDependency=function(a,c,d,e){if(g.DEPENDENCIES_ENABLED){var f=g.getLoader_();f&&f.addDependency(a,c,d,e)}};g.ENABLE_DEBUG_LOADER=!0;g.logToConsole_=function(a){g.global.console&&g.global.console.error(a)};g.require=function(a){g.ENABLE_DEBUG_LOADER&&g.debugLoader_&&g.getLoader_().earlyProcessLoad(a)};
g.basePath="";g.nullFunction=function(){};g.abstractMethod=function(){throw Error("unimplemented abstract method");};g.addSingletonGetter=function(a){a.instance_=void 0;a.getInstance=function(){if(a.instance_)return a.instance_;g.DEBUG&&(g.instantiatedSingletons_[g.instantiatedSingletons_.length]=a);return a.instance_=new a}};g.instantiatedSingletons_=[];g.LOAD_MODULE_USING_EVAL=!0;g.SEAL_MODULE_EXPORTS=null;g.loadedModules_={};g.DEPENDENCIES_ENABLED=!1;g.TRANSPILE="detect";g.TRANSPILER="transpile.js";
g.DEBUG_LOADER="";g.hasBadLetScoping=null;g.useSafari10Workaround=function(){if(null==g.hasBadLetScoping){try{var a=!eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')}catch(c){a=!1}g.hasBadLetScoping=a}return g.hasBadLetScoping};g.workaroundSafari10EvalBug=function(a){return"(function(){"+a+"\n;})();\n"};
g.loadModule=function(a){var c=g.moduleLoaderState_;try{g.moduleLoaderState_={moduleName:void 0,declareLegacyNamespace:!1};if(g.isFunction(a))var d=a.call(void 0,{});else if(g.isString(a))g.useSafari10Workaround()&&(a=g.workaroundSafari10EvalBug(a)),d=g.loadModuleFromSource_.call(void 0,a);else throw Error("Invalid module definition");var e=g.moduleLoaderState_.moduleName;if(!g.isString(e)||!e)throw Error('Invalid module name "'+e+'"');g.moduleLoaderState_.declareLegacyNamespace?g.constructNamespace_(e,
d):g.DEBUG&&Object.seal&&"object"==typeof d&&null!=d&&Object.seal(d);g.loadedModules_[e]=d}finally{g.moduleLoaderState_=c}};g.loadModuleFromSource_=function(a){eval(a);return{}};g.normalizePath_=function(a){a=a.split("/");for(var c=0;c<a.length;)"."==a[c]?a.splice(c,1):c&&".."==a[c]&&a[c-1]&&".."!=a[c-1]?a.splice(--c,2):c++;return a.join("/")};
g.loadFileSync_=function(a){if(g.global.CLOSURE_LOAD_FILE_SYNC)return g.global.CLOSURE_LOAD_FILE_SYNC(a);try{var c=new g.global.XMLHttpRequest;c.open("get",a,!1);c.send();return 0==c.status||200==c.status?c.responseText:null}catch(d){return null}};
g.transpile_=function(a,c){var d=g.global.$jscomp;d||(g.global.$jscomp=d={});var e=d.transpile;if(!e){var f=g.basePath+g.TRANSPILER,h=g.loadFileSync_(f);if(h){(function(){eval(h+"\n//# sourceURL="+f)}).call(g.global);if(g.global.$gwtExport&&g.global.$gwtExport.$jscomp&&!g.global.$gwtExport.$jscomp.transpile)throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: '+JSON.stringify(g.global.$gwtExport));g.global.$jscomp.transpile=g.global.$gwtExport.$jscomp.transpile;
d=g.global.$jscomp;e=d.transpile}}e||(e=d.transpile=function(a,c){g.logToConsole_(c+" requires transpilation but no transpiler was found.");return a});return e(a,c)};
g.typeOf=function(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof a.call)return"object";return c};g.isNull=function(a){return null===a};g.isDefAndNotNull=function(a){return null!=a};g.isArray=function(a){return"array"==g.typeOf(a)};g.isArrayLike=function(a){var c=g.typeOf(a);return"array"==c||"object"==c&&"number"==typeof a.length};g.isDateLike=function(a){return g.isObject(a)&&"function"==typeof a.getFullYear};g.isFunction=function(a){return"function"==g.typeOf(a)};
g.isObject=function(a){var c=typeof a;return"object"==c&&null!=a||"function"==c};g.getUid=function(a){return a[g.UID_PROPERTY_]||(a[g.UID_PROPERTY_]=++g.uidCounter_)};g.hasUid=function(a){return!!a[g.UID_PROPERTY_]};g.removeUid=function(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(g.UID_PROPERTY_);try{delete a[g.UID_PROPERTY_]}catch(c){}};g.UID_PROPERTY_="closure_uid_"+(1E9*Math.random()>>>0);g.uidCounter_=0;g.getHashCode=null;g.removeHashCode=null;
g.cloneObject=function(a){var c=g.typeOf(a);if("object"==c||"array"==c){if(a.clone)return a.clone();c="array"==c?[]:{};for(var d in a)c[d]=g.cloneObject(a[d]);return c}return a};g.bindNative_=function(a,c,d){return a.call.apply(a.bind,arguments)};
g.bindJs_=function(a,c,d){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(c,d)}}return function(){return a.apply(c,arguments)}};g.bind=function(a,c,d){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.bind=g.bindNative_:g.bind=g.bindJs_;return g.bind.apply(null,arguments)};
g.partial=function(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(this,c)}};g.mixin=function(a,c){for(var d in c)a[d]=c[d]};g.now=g.TRUSTED_SITE&&Date.now||function(){return+new Date};
g.globalEval=function(a){if(g.global.execScript)g.global.execScript(a,"JavaScript");else if(g.global.eval){if(null==g.evalWorksForGlobals_){try{g.global.eval("var _evalTest_ = 1;")}catch(e){}if("undefined"!=typeof g.global._evalTest_){try{delete g.global._evalTest_}catch(e){}g.evalWorksForGlobals_=!0}else g.evalWorksForGlobals_=!1}if(g.evalWorksForGlobals_)g.global.eval(a);else{var c=g.global.document,d=c.createElement("SCRIPT");d.type="text/javascript";d.defer=!1;d.appendChild(c.createTextNode(a));
c.head.appendChild(d);c.head.removeChild(d)}}else throw Error("goog.globalEval not available");};g.evalWorksForGlobals_=null;
g.getCssName=function(a,c){function d(a){a=a.split("-");for(var c=[],d=0;d<a.length;d++)c.push(e(a[d]));return c.join("-")}function e(a){return g.cssNameMapping_[a]||a}if("."==String(a).charAt(0))throw Error('className passed in goog.getCssName must not start with ".". You passed: '+a);var f=g.cssNameMapping_?"BY_WHOLE"==g.cssNameMappingStyle_?e:d:function(a){return a};a=c?a+"-"+f(c):f(a);return g.global.CLOSURE_CSS_NAME_MAP_FN?g.global.CLOSURE_CSS_NAME_MAP_FN(a):a};
g.setCssNameMapping=function(a,c){g.cssNameMapping_=a;g.cssNameMappingStyle_=c};g.getMsg=function(a,c){c&&(a=a.replace(/\{\$([^}]+)}/g,function(a,e){return null!=c&&e in c?c[e]:a}));return a};g.getMsgWithFallback=function(a){return a};g.exportSymbol=function(a,c,d){g.exportPath_(a,c,d)};g.exportProperty=function(a,c,d){a[c]=d};
g.inherits=function(a,c){function d(){}d.prototype=c.prototype;a.superClass_=c.prototype;a.prototype=new d;a.prototype.constructor=a;a.base=function(a,d,h){for(var e=Array(arguments.length-2),f=2;f<arguments.length;f++)e[f-2]=arguments[f];return c.prototype[d].apply(a,e)}};
g.base=function(a,c,d){var e=arguments.callee.caller;if(g.STRICT_MODE_COMPATIBLE||g.DEBUG&&!e)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(e.superClass_){for(var f=Array(arguments.length-1),h=1;h<arguments.length;h++)f[h-1]=arguments[h];return e.superClass_.constructor.apply(a,f)}f=Array(arguments.length-2);for(h=2;h<arguments.length;h++)f[h-2]=arguments[h];h=!1;for(var k=a.constructor;k;k=
k.superClass_&&k.superClass_.constructor)if(k.prototype[c]===e)h=!0;else if(h)return k.prototype[c].apply(a,f);if(a[c]===e)return a.constructor.prototype[c].apply(a,f);throw Error("goog.base called from a method of one name to a method of a different name");};g.scope=function(a){if(g.isInModuleLoader_())throw Error("goog.scope is not supported within a goog.module.");a.call(g.global)};
g.defineClass=function(a,c){var d=c.constructor,e=c.statics;d&&d!=Object.prototype.constructor||(d=function(){throw Error("cannot instantiate an interface (no constructor defined).");});d=g.defineClass.createSealingConstructor_(d,a);a&&g.inherits(d,a);delete c.constructor;delete c.statics;g.defineClass.applyProperties_(d.prototype,c);null!=e&&(e instanceof Function?e(d):g.defineClass.applyProperties_(d,e));return d};g.defineClass.SEAL_CLASS_INSTANCES=null;
g.defineClass.createSealingConstructor_=function(a,c){function d(){var c=a.apply(this,arguments)||this;c[g.UID_PROPERTY_]=c[g.UID_PROPERTY_];this.constructor===d&&e&&Object.seal instanceof Function&&Object.seal(c);return c}if(!g.DEBUG)return a;var e=!g.defineClass.isUnsealable_(c);return d};g.defineClass.isUnsealable_=function(a){return a&&a.prototype&&a.prototype[g.UNSEALABLE_CONSTRUCTOR_PROPERTY_]};g.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.defineClass.applyProperties_=function(a,c){for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);for(var e=0;e<g.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;e++)d=g.defineClass.OBJECT_PROTOTYPE_FIELDS_[e],Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])};g.tagUnsealableClass=function(){};g.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable";
if(g.DEPENDENCIES_ENABLED){g.inHtmlDocument_=function(){var a=g.global.document;return null!=a&&"write"in a};g.findBasePath_=function(){if(g.isDef(g.global.CLOSURE_BASE_PATH)&&g.isString(g.global.CLOSURE_BASE_PATH))g.basePath=g.global.CLOSURE_BASE_PATH;else if(g.inHtmlDocument_()){var a=g.global.document,c=a.currentScript;a=c?[c]:a.getElementsByTagName("SCRIPT");for(c=a.length-1;0<=c;--c){var d=a[c].src,e=d.lastIndexOf("?");e=-1==e?d.length:e;if("base.js"==d.substr(e-7,7)){g.basePath=d.substr(0,e-
7);break}}}};g.findBasePath_();g.Transpiler=function(){this.requiresTranspilation_=null};g.Transpiler.prototype.createRequiresTranspilation_=function(){function a(a,c){e?d[a]=!0:c()?d[a]=!1:e=d[a]=!0}function c(a){try{return!!eval(a)}catch(k){return!1}}var d={es3:!1},e=!1,f=g.global.navigator&&g.global.navigator.userAgent?g.global.navigator.userAgent:"";a("es5",function(){return c("[1,].length==1")});a("es6",function(){var a=f.match(/Edge\/(\d+)(\.\d)*/i);return a&&15>Number(a[1])?!1:c('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')});
a("es6-impl",function(){return!0});a("es7",function(){return c("2 ** 2 == 4")});a("es8",function(){return c("async () => 1, true")});return d};g.Transpiler.prototype.needsTranspile=function(a){if("always"==g.TRANSPILE)return!0;if("never"==g.TRANSPILE)return!1;this.requiresTranspilation_||(this.requiresTranspilation_=this.createRequiresTranspilation_());if(a in this.requiresTranspilation_)return this.requiresTranspilation_[a];throw Error("Unknown language mode: "+a);};g.Transpiler.prototype.transpile=
function(a,c){return g.transpile_(a,c)};g.transpiler_=new g.Transpiler;g.DebugLoader=function(){this.dependencies_={loadFlags:{},nameToPath:{},requires:{},visited:{},written:{},deferred:{}};this.oldIeWaiting_=!1;this.queuedModules_=[];this.lastNonModuleScriptIndex_=0};g.DebugLoader.IS_OLD_IE_=!(g.global.atob||!g.global.document||!g.global.document.all);g.DebugLoader.prototype.earlyProcessLoad=function(a){g.DebugLoader.IS_OLD_IE_&&this.maybeProcessDeferredDep_(a)};g.DebugLoader.prototype.load=function(a){var c=
this.getPathFromDeps_(a);if(c){var d=function(a){if(!(a in h.written||a in h.visited)){h.visited[a]=!0;if(a in h.requires)for(var c in h.requires[a])if(!k.isProvided(c))if(c in h.nameToPath)d(h.nameToPath[c]);else throw Error("Undefined nameToPath for "+c);a in f||(f[a]=!0,e.push(a))}},e=[],f={},h=this.dependencies_,k=this;d(c);for(a=0;a<e.length;a++)c=e[a],this.dependencies_.written[c]=!0;for(a=0;a<e.length;a++)if(c=e[a]){var m=h.loadFlags[c]||{},p=m.lang||"es3";p=this.getTranspiler().needsTranspile(p);
"goog"==m.module||p?this.importProcessedScript_(g.basePath+c,"goog"==m.module,p):this.importScript_(g.basePath+c)}else throw Error("Undefined script input");}else throw a="goog.require could not find: "+a,this.logToConsole(a),Error(a);};g.DebugLoader.prototype.addDependency=function(a,c,d,e){var f;a=a.replace(/\\/g,"/");var h=this.dependencies_;e&&"boolean"!==typeof e||(e=e?{module:"goog"}:{});for(var k=0;f=c[k];k++)h.nameToPath[f]=a,h.loadFlags[a]=e;for(e=0;c=d[e];e++)a in h.requires||(h.requires[a]=
{}),h.requires[a][c]=!0};g.DebugLoader.prototype.importScript_=function(a,c){(g.global.CLOSURE_IMPORT_SCRIPT||g.bind(this.writeScriptTag_,this))(a,c)&&(this.dependencies_.written[a]=!0)};g.DebugLoader.prototype.importProcessedScript_=function(a,c,d){this.importScript_("",'goog.debugLoader_.retrieveAndExec_("'+a+'", '+c+", "+d+");")};g.DebugLoader.prototype.retrieveAndExec_=function(){};g.DebugLoader.prototype.wrapModule_=function(a,c){return g.LOAD_MODULE_USING_EVAL&&g.isDef(g.global.JSON)?"goog.loadModule("+
g.global.JSON.stringify(c+"\n//# sourceURL="+a+"\n")+");":'goog.loadModule(function(exports) {"use strict";'+c+"\n;return exports});\n//# sourceURL="+a+"\n"};g.DebugLoader.prototype.loadQueuedModules_=function(){var a=this.queuedModules_.length;if(0<a){var c=this.queuedModules_;this.queuedModules_=[];for(var d=0;d<a;d++)this.maybeProcessDeferredPath_(c[d])}this.oldIeWaiting_=!1};g.DebugLoader.prototype.maybeProcessDeferredDep_=function(a){this.isDeferredModule_(a)&&this.allDepsAreAvailable_(a)&&(a=
this.getPathFromDeps_(a),this.maybeProcessDeferredPath_(g.basePath+a))};g.DebugLoader.prototype.isDeferredModule_=function(a){var c=(a=this.getPathFromDeps_(a))&&this.dependencies_.loadFlags[a]||{},d=c.lang||"es3";return a&&("goog"==c.module||this.getTranspiler().needsTranspile(d))?g.basePath+a in this.dependencies_.deferred:!1};g.DebugLoader.prototype.allDepsAreAvailable_=function(a){if((a=this.getPathFromDeps_(a))&&a in this.dependencies_.requires)for(var c in this.dependencies_.requires[a])if(!this.isProvided(c)&&
!this.isDeferredModule_(c))return!1;return!0};g.DebugLoader.prototype.maybeProcessDeferredPath_=function(a){if(a in this.dependencies_.deferred){var c=this.dependencies_.deferred[a];delete this.dependencies_.deferred[a];g.globalEval(c)}};g.DebugLoader.prototype.writeScriptSrcNode_=function(a){g.global.document.write('<script type="text/javascript" src="'+a+'">\x3c/script>')};g.DebugLoader.prototype.appendScriptSrcNode_=function(a){var c=g.global.document,d=c.createElement("script");d.type="text/javascript";
d.src=a;d.defer=!1;d.async=!1;c.head.appendChild(d)};g.DebugLoader.prototype.writeScriptTag_=function(a,c){if(this.inHtmlDocument()){var d=g.global.document;if(!g.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING&&"complete"==d.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}void 0===c?g.DebugLoader.IS_OLD_IE_?(this.oldIeWaiting_=!0,c=" onreadystatechange='goog.debugLoader_.onScriptLoad_(this, "+ ++this.lastNonModuleScriptIndex_+")' ",d.write('<script type="text/javascript" src="'+
a+'"'+c+">\x3c/script>")):g.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING?this.appendScriptSrcNode_(a):this.writeScriptSrcNode_(a):d.write('<script type="text/javascript">'+this.protectScriptTag_(c)+"\x3c/script>");return!0}return!1};g.DebugLoader.prototype.protectScriptTag_=function(a){return a.replace(/<\/(SCRIPT)/ig,"\\x3c/$1")};g.DebugLoader.prototype.onScriptLoad_=function(a,c){"complete"==a.readyState&&this.lastNonModuleScriptIndex_==c&&this.loadQueuedModules_();return!0};g.DebugLoader.prototype.getPathFromDeps_=
function(a){return a in this.dependencies_.nameToPath?this.dependencies_.nameToPath[a]:null};g.DebugLoader.prototype.getTranspiler=function(){return g.transpiler_};g.DebugLoader.prototype.isProvided=function(a){return g.isProvided_(a)};g.DebugLoader.prototype.inHtmlDocument=function(){return g.inHtmlDocument_()};g.DebugLoader.prototype.logToConsole=function(a){g.logToConsole_(a)};g.DebugLoader.prototype.loadFileSync=function(a){return g.loadFileSync_(a)};g.DebugLoader.prototype.normalizePath=function(a){return g.normalizePath_(a)};
g.debugLoader_=null;g.registerDebugLoader=function(a){if(g.debugLoader_)throw Error("Debug loader already registered!");if(!(a instanceof g.DebugLoader))throw Error("Not a goog.DebugLoader.");g.debugLoader_=a};g.getLoader_=function(){if(!g.debugLoader_&&g.DEBUG_LOADER)throw Error("Loaded debug loader file but no loader was registered!");g.debugLoader_||(g.debugLoader_=new g.DebugLoader);return g.debugLoader_};var l;g.DEBUG_LOADER&&(l=new g.DebugLoader,l.importScript_(g.basePath+g.DEBUG_LOADER));g.global.CLOSURE_NO_DEPS||
(l=l||new g.DebugLoader,g.DEBUG_LOADER||g.registerDebugLoader(l),l.importScript_(g.basePath+"deps.js"))};g.string={};g.string.DETECT_DOUBLE_ESCAPING=!1;g.string.FORCE_NON_DOM_HTML_UNESCAPING=!1;g.string.Unicode={NBSP:"\u00a0"};g.string.startsWith=function(a,c){return 0==a.lastIndexOf(c,0)};g.string.endsWith=function(a,c){var d=a.length-c.length;return 0<=d&&a.indexOf(c,d)==d};g.string.caseInsensitiveStartsWith=function(a,c){return 0==g.string.caseInsensitiveCompare(c,a.substr(0,c.length))};
g.string.caseInsensitiveEndsWith=function(a,c){return 0==g.string.caseInsensitiveCompare(c,a.substr(a.length-c.length,c.length))};g.string.caseInsensitiveEquals=function(a,c){return a.toLowerCase()==c.toLowerCase()};g.string.subs=function(a,c){for(var d=a.split("%s"),e="",f=Array.prototype.slice.call(arguments,1);f.length&&1<d.length;)e+=d.shift()+f.shift();return e+d.join("%s")};g.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};
g.string.isEmptyOrWhitespace=function(a){return/^[\s\xa0]*$/.test(a)};g.string.isEmptyString=function(a){return 0==a.length};g.string.isEmpty=null;g.string.isEmptyOrWhitespaceSafe=function(a){return g.string.isEmptyOrWhitespace(g.string.makeSafe(a))};g.string.isEmptySafe=null;g.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};g.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};g.string.isNumeric=function(a){return!/[^0-9]/.test(a)};g.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};
g.string.isSpace=function(a){return" "==a};g.string.isUnicodeChar=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};g.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};g.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};g.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};g.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};
g.string.collapseBreakingSpaces=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};g.string.trim=g.TRUSTED_SITE&&String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};g.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};g.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};
g.string.caseInsensitiveCompare=function(a,c){a=String(a).toLowerCase();c=String(c).toLowerCase();return a<c?-1:a==c?0:1};g.string.numberAwareCompare_=function(a,c,d){if(a==c)return 0;if(!a)return-1;if(!c)return 1;for(var e=a.toLowerCase().match(d),f=c.toLowerCase().match(d),h=Math.min(e.length,f.length),k=0;k<h;k++){d=e[k];var m=f[k];if(d!=m)return a=parseInt(d,10),!isNaN(a)&&(c=parseInt(m,10),!isNaN(c)&&a-c)?a-c:d<m?-1:1}return e.length!=f.length?e.length-f.length:a<c?-1:1};
g.string.intAwareCompare=function(a,c){return g.string.numberAwareCompare_(a,c,/\d+|\D+/g)};g.string.floatAwareCompare=function(a,c){return g.string.numberAwareCompare_(a,c,/\d+|\.\d+|\D+/g)};g.string.numerateCompare=null;g.string.urlEncode=function(a){return encodeURIComponent(String(a))};g.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};g.string.newLineToBr=function(a,c){return a.replace(/(\r\n|\r|\n)/g,c?"<br />":"<br>")};
g.string.htmlEscape=function(a,c){if(c)a=a.replace(g.string.AMP_RE_,"&amp;").replace(g.string.LT_RE_,"&lt;").replace(g.string.GT_RE_,"&gt;").replace(g.string.QUOT_RE_,"&quot;").replace(g.string.SINGLE_QUOTE_RE_,"&#39;").replace(g.string.NULL_RE_,"&#0;"),g.string.DETECT_DOUBLE_ESCAPING&&(a=a.replace(g.string.E_RE_,"&#101;"));else{if(!g.string.ALL_RE_.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(g.string.AMP_RE_,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(g.string.LT_RE_,"&lt;"));-1!=a.indexOf(">")&&
(a=a.replace(g.string.GT_RE_,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(g.string.QUOT_RE_,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(g.string.SINGLE_QUOTE_RE_,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(g.string.NULL_RE_,"&#0;"));g.string.DETECT_DOUBLE_ESCAPING&&-1!=a.indexOf("e")&&(a=a.replace(g.string.E_RE_,"&#101;"))}return a};g.string.AMP_RE_=/&/g;g.string.LT_RE_=/</g;g.string.GT_RE_=/>/g;g.string.QUOT_RE_=/"/g;g.string.SINGLE_QUOTE_RE_=/'/g;g.string.NULL_RE_=/\x00/g;g.string.E_RE_=/e/g;
g.string.ALL_RE_=g.string.DETECT_DOUBLE_ESCAPING?/[\x00&<>"'e]/:/[\x00&<>"']/;g.string.unescapeEntities=function(a){return g.string.contains(a,"&")?!g.string.FORCE_NON_DOM_HTML_UNESCAPING&&"document"in g.global?g.string.unescapeEntitiesUsingDom_(a):g.string.unescapePureXmlEntities_(a):a};g.string.unescapeEntitiesWithDocument=function(a,c){return g.string.contains(a,"&")?g.string.unescapeEntitiesUsingDom_(a,c):a};
g.string.unescapeEntitiesUsingDom_=function(a,c){var d={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var e=c?c.createElement("div"):g.global.document.createElement("div");return a.replace(g.string.HTML_ENTITY_PATTERN_,function(a,c){var f=d[a];if(f)return f;"#"==c.charAt(0)&&(c=Number("0"+c.substr(1)),isNaN(c)||(f=String.fromCharCode(c)));f||(e.innerHTML=a+" ",f=e.firstChild.nodeValue.slice(0,-1));return d[a]=f})};
g.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(a,d){switch(d){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:return"#"!=d.charAt(0)||(d=Number("0"+d.substr(1)),isNaN(d))?a:String.fromCharCode(d)}})};g.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;g.string.whitespaceEscape=function(a,c){return g.string.newLineToBr(a.replace(/  /g," &#160;"),c)};g.string.preserveSpaces=function(a){return a.replace(/(^|[\n ]) /g,"$1"+g.string.Unicode.NBSP)};
g.string.stripQuotes=function(a,c){for(var d=c.length,e=0;e<d;e++){var f=1==d?c:c.charAt(e);if(a.charAt(0)==f&&a.charAt(a.length-1)==f)return a.substring(1,a.length-1)}return a};g.string.truncate=function(a,c,d){d&&(a=g.string.unescapeEntities(a));a.length>c&&(a=a.substring(0,c-3)+"...");d&&(a=g.string.htmlEscape(a));return a};
g.string.truncateMiddle=function(a,c,d,e){d&&(a=g.string.unescapeEntities(a));if(e&&a.length>c){e>c&&(e=c);var f=a.length-e;a=a.substring(0,c-e)+"..."+a.substring(f)}else a.length>c&&(e=Math.floor(c/2),f=a.length-e,a=a.substring(0,e+c%2)+"..."+a.substring(f));d&&(a=g.string.htmlEscape(a));return a};g.string.specialEscapeChars_={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"};g.string.jsEscapeCache_={"'":"\\'"};
g.string.quote=function(a){a=String(a);for(var c=['"'],d=0;d<a.length;d++){var e=a.charAt(d),f=e.charCodeAt(0);c[d+1]=g.string.specialEscapeChars_[e]||(31<f&&127>f?e:g.string.escapeChar(e))}c.push('"');return c.join("")};g.string.escapeString=function(a){for(var c=[],d=0;d<a.length;d++)c[d]=g.string.escapeChar(a.charAt(d));return c.join("")};
g.string.escapeChar=function(a){if(a in g.string.jsEscapeCache_)return g.string.jsEscapeCache_[a];if(a in g.string.specialEscapeChars_)return g.string.jsEscapeCache_[a]=g.string.specialEscapeChars_[a];var c=a.charCodeAt(0);if(31<c&&127>c)var d=a;else{if(256>c){if(d="\\x",16>c||256<c)d+="0"}else d="\\u",4096>c&&(d+="0");d+=c.toString(16).toUpperCase()}return g.string.jsEscapeCache_[a]=d};g.string.contains=function(a,c){return-1!=a.indexOf(c)};
g.string.caseInsensitiveContains=function(a,c){return g.string.contains(a.toLowerCase(),c.toLowerCase())};g.string.countOf=function(a,c){return a&&c?a.split(c).length-1:0};g.string.removeAt=function(a,c,d){var e=a;0<=c&&c<a.length&&0<d&&(e=a.substr(0,c)+a.substr(c+d,a.length-c-d));return e};g.string.remove=function(a,c){return a.replace(c,"")};g.string.removeAll=function(a,c){c=new RegExp(g.string.regExpEscape(c),"g");return a.replace(c,"")};
g.string.replaceAll=function(a,c,d){c=new RegExp(g.string.regExpEscape(c),"g");return a.replace(c,d.replace(/\$/g,"$$$$"))};g.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};g.string.repeat=String.prototype.repeat?function(a,c){return a.repeat(c)}:function(a,c){return Array(c+1).join(a)};
g.string.padNumber=function(a,c,d){a=g.isDef(d)?a.toFixed(d):String(a);d=a.indexOf(".");-1==d&&(d=a.length);return g.string.repeat("0",Math.max(0,c-d))+a};g.string.makeSafe=function(a){return null==a?"":String(a)};g.string.buildString=function(a){return Array.prototype.join.call(arguments,"")};g.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.now()).toString(36)};
g.string.compareVersions=function(a,c){var d=0;a=g.string.trim(String(a)).split(".");c=g.string.trim(String(c)).split(".");for(var e=Math.max(a.length,c.length),f=0;0==d&&f<e;f++){var h=a[f]||"",k=c[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;d=0==h[1].length?0:parseInt(h[1],10);var m=0==k[1].length?0:parseInt(k[1],10);d=g.string.compareElements_(d,m)||g.string.compareElements_(0==h[2].length,0==k[2].length)||
g.string.compareElements_(h[2],k[2]);h=h[3];k=k[3]}while(0==d)}return d};g.string.compareElements_=function(a,c){return a<c?-1:a>c?1:0};g.string.hashCode=function(a){for(var c=0,d=0;d<a.length;++d)c=31*c+a.charCodeAt(d)>>>0;return c};g.string.uniqueStringCounter_=2147483648*Math.random()|0;g.string.createUniqueString=function(){return"goog_"+g.string.uniqueStringCounter_++};g.string.toNumber=function(a){var c=Number(a);return 0==c&&g.string.isEmptyOrWhitespace(a)?NaN:c};
g.string.isLowerCamelCase=function(a){return/^[a-z]+([A-Z][a-z]*)*$/.test(a)};g.string.isUpperCamelCase=function(a){return/^([A-Z][a-z]*)+$/.test(a)};g.string.toCamelCase=function(a){return String(a).replace(/\-([a-z])/g,function(a,d){return d.toUpperCase()})};g.string.toSelectorCase=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};
g.string.toTitleCase=function(a,c){c=g.isString(c)?g.string.regExpEscape(c):"\\s";return a.replace(new RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(a,c,f){return c+f.toUpperCase()})};g.string.capitalize=function(a){return String(a.charAt(0)).toUpperCase()+String(a.substr(1)).toLowerCase()};g.string.parseInt=function(a){isFinite(a)&&(a=String(a));return g.isString(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};
g.string.splitLimit=function(a,c,d){a=a.split(c);for(var e=[];0<d&&a.length;)e.push(a.shift()),d--;a.length&&e.push(a.join(c));return e};g.string.lastComponent=function(a,c){if(c)"string"==typeof c&&(c=[c]);else return a;for(var d=-1,e=0;e<c.length;e++)if(""!=c[e]){var f=a.lastIndexOf(c[e]);f>d&&(d=f)}return-1==d?a:a.slice(d+1)};
g.string.editDistance=function(a,c){var d=[],e=[];if(a==c)return 0;if(!a.length||!c.length)return Math.max(a.length,c.length);for(var f=0;f<c.length+1;f++)d[f]=f;for(f=0;f<a.length;f++){e[0]=f+1;for(var h=0;h<c.length;h++)e[h+1]=Math.min(e[h]+1,d[h+1]+1,d[h]+Number(a[f]!=c[h]));for(h=0;h<d.length;h++)d[h]=e[h]}return e[c.length]};var n={app:{}};n.app.blacklist=function(a,c){n.app.setSupported_(!1,c);for(var d in a)if(a.hasOwnProperty(d)){var e=parseInt(a[d],10);if(!n.app.testUserAgent_(d,e,c))return}n.app.setSupported_(!0);n.app.setStatusClass_(n.app.ClassName_.SUPPORTED,c)};n.app.ready=function(a){n.app.isSupported_(a)&&n.app.setStatusClass_(n.app.ClassName_.READY,a)};n.app.bootstrap=function(a,c,d,e){var f=e||window;n.app.isSupported_(e)&&f.angular&&f.angular.bootstrap(c||f.document.documentElement,[a],d)};
n.app.injectFiles=function(a,c){if(n.app.isSupported_(c)){c=c||window;for(var d="",e=0,f;f=a[e];e++)d+='<script src="'+g.string.htmlEscape(f)+'">\x3c/script>';c.document.write(d)}};n.app.testUserAgent_=function(a,c,d){if(a==n.app.Env_.IE)return 11<=c&&!n.app.testRegExp_(n.app.UserAgent_.IE11,c,d)?!1:n.app.testRegExp_(n.app.UserAgent_.IE,c,d);for(var e in n.app.Env_)if(n.app.Env_[e]==a){var f=n.app.UserAgent_[e];break}return n.app.testRegExp_(f,c,d)};
n.app.testRegExp_=function(a,c,d){a=(d||window).navigator.userAgent.match(a);return!a||a&&parseInt(a[1],10)>c};n.app.setStatusClass_=function(a,c){c=(c||window).document.documentElement;n.app.ClassNameRegExp_.test(c.className)?c.className=c.className.replace(n.app.ClassNameRegExp_,a):c.className+=(c.className?" ":"")+a};n.app.isSupported_=function(a){return 0!=(a||window)[n.app.SUPPORTED_PROP_NAME_]};n.app.setSupported_=function(a,c){(c||window)[n.app.SUPPORTED_PROP_NAME_]=a};
n.app.ClassName_={SUPPORTED:"glue-app-supported",READY:"glue-app-ready"};n.app.Env_={IE:"ie",ANDROID:"android",IOS:"ios"};n.app.UserAgent_={IE:/MSIE\s(\d+)\.(\d+);\sWindows\sNT/,IE11:/Windows\sNT.+Trident.+rv:(\d+)(?:.(\d+))?/,IOS:/(?:iPhone|iPad)?;.+OS\s(\d+)_\d+/,ANDROID:/Android\s(\d+)\.(\d+)/};n.app.ClassNameRegExp_=/\bglue-app-?\w*\b/;n.app.SUPPORTED_PROP_NAME_="glueAppSupported";n.detect={};n.detect.decorateDom=function(a,c){g.isArray(a)||(a=[a]);for(var d=document.documentElement,e=0,f;f=a[e];e++){var h=f.isSupported;f=f.FEATURE_ID;if(!h||!f)throw Error(n.detect.ERROR.cannotDecorate);h()&&(c?d.setAttribute(n.detect.getFeatureDataAttributeName_(f),""):d.className+=" "+n.detect.getFeatureClassName_(f))}};n.detect.getFeatureClassName_=function(a){return n.detect.CLASSNAME_PREFIX+a};n.detect.getFeatureDataAttributeName_=function(a){return n.detect.DATA_ATTRIBUTE_PREFIX+a};
n.detect.CLASSNAME_PREFIX="glue-";n.detect.DATA_ATTRIBUTE_PREFIX="data-supports-";n.detect.ERROR={cannotDecorate:"Cannot decorate for the specified feature."};n.detect.flexbox={};n.detect.flexbox.PROPS="flexWrap WebkitFlexWrap MozFlexWrap OFlexWrap msFlexWrap boxDirection WebkitBoxDirection MozBoxDirection OBoxDirection msBoxDirection".split(" ");n.detect.flexbox.TEST_ELEMENT=document.documentElement.style;n.detect.flexbox.isSupported=function(a){a=a||n.detect.flexbox.TEST_ELEMENT;for(var c=n.detect.flexbox.PROPS.slice(0);0<c.length&&!(c.shift()in a););return 0<c.length};g.exportSymbol("glue.detect.flexbox.isSupported",n.detect.flexbox.isSupported);
n.detect.flexbox.FEATURE_ID="flexbox";g.exportSymbol("glue.detect.flexbox.FEATURE_ID",n.detect.flexbox.FEATURE_ID);g.exportProperty(n.detect.flexbox,"FEATURE_ID",n.detect.flexbox.FEATURE_ID);g.memoize=function(a,c){var d=c||g.memoize.simpleSerializer;return function(){if(g.memoize.ENABLE_MEMOIZE){var c=this||g.global;c=c[g.memoize.CACHE_PROPERTY_]||(c[g.memoize.CACHE_PROPERTY_]={});var f=d(g.getUid(a),arguments);return c.hasOwnProperty(f)?c[f]:c[f]=a.apply(this,arguments)}return a.apply(this,arguments)}};g.memoize.ENABLE_MEMOIZE=!0;g.memoize.clearCache=function(a){a[g.memoize.CACHE_PROPERTY_]={}};g.memoize.CACHE_PROPERTY_="closure_memoize_cache_";
g.memoize.simpleSerializer=function(a,c){a=[a];for(var d=c.length-1;0<=d;--d)a.push(typeof c[d],c[d]);return a.join("\x0B")};n.detect.touch={};n.detect.touch.isSupported=g.memoize(function(a){a=void 0===a?window:a;return"ontouchstart"in a});n.detect.touch.FEATURE_ID="touch";g.exportProperty(n.detect.touch,"isSupported",n.detect.touch.isSupported);g.exportProperty(n.detect.touch,"FEATURE_ID",n.detect.touch.FEATURE_ID);n.detect.decorateDom(n.detect.flexbox);n.detect.decorateDom(n.detect.touch);n.app.blacklist({ie:10,android:4});}).call(window)
