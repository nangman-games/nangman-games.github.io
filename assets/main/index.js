System.register("chunks:///_virtual/RotateLabel.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,o,i,n,a,l,s,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized,n=e.defineProperty},function(e){a=e.cclegacy,l=e._decorator,s=e.Node,c=e.Component}],execute:function(){var u,p,f,y,b;a._RF.push({},"21872PGmL9LZIJz1I6syoJc","RotateLabel",void 0);var h=l.ccclass,d=l.property;e("RotateLabel",(u=h("RotateLabel"),p=d({type:s}),u((b=t((y=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,o(i(t),"label",b,i(t)),n(i(t),"z",0),n(i(t),"speed",100),t}r(t,e);var a=t.prototype;return a.start=function(){},a.update=function(e){this.z+=e*this.speed,this.label.setRotationFromEuler(0,0,this.z)},t}(c)).prototype,"label",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=y))||f));a._RF.pop()}}}));

System.register("chunks:///_virtual/ButtonAction.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,c,e,r;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,c=t._decorator,e=t.sys,r=t.Component}],execute:function(){var s;o._RF.push({},"6dea0rJDs1KRpUDzzb6sphC","ButtonAction",void 0);var i=c.ccclass;c.property,t("ButtonAction",i("ButtonAction")(s=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var c=o.prototype;return c.start=function(){},c.clickButton=function(){console.log("click"),e.openURL("https://note.nangman.games")},o}(r))||s);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./RotateLabel.ts","./ButtonAction.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});