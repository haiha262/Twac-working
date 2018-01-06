webpackJsonp([1],{"./separator/component.js":function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s("./node_modules/babel-runtime/helpers/extends.js"),n=a(o),r=s("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),i=a(r),l=s("./node_modules/babel-runtime/helpers/classCallCheck.js"),c=a(l),d=s("./node_modules/babel-runtime/helpers/createClass.js"),p=a(d),u=s("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),h=a(u),m=s("./node_modules/babel-runtime/helpers/inherits.js"),b=a(m),v=s("./node_modules/react/react.js"),x=a(v),f=s("./node_modules/vc-cake/index.js"),g=a(f),y=g["default"].getService("api"),w=function(e){function t(){return(0,c["default"])(this,t),(0,h["default"])(this,(t.__proto__||(0,i["default"])(t)).apply(this,arguments))}return(0,b["default"])(t,e),(0,p["default"])(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.atts,o=e.editor,r=a.alignment,i=a.customClass,l=a.metaCustomId,c=a.style,d=s("./node_modules/classnames/index.js"),p={},u=void 0,h=["vce","vce-separator-container"],m=["vce-separator"];"string"==typeof i&&i&&h.push(i),r&&h.push("vce-separator--align-"+r),c&&h.push("vce-separator--style-"+c);var b=this.getMixinData("basicColor");b&&m.push("vce-separator--color-"+b.selector),b=this.getMixinData("separatorWidth"),b&&m.push("vce-separator--width-"+b.selector),b=this.getMixinData("separatorThickness"),b&&m.push("vce-separator--thickness-"+b.selector),l&&(p.id=l),m=d(m),h=d(h);var v=this.applyDO("margin"),f=this.applyDO("border padding background animation");return u="shadow"===c?x["default"].createElement("div",(0,n["default"])({className:m},p,f),x["default"].createElement("div",{className:"vce-separator-shadow vce-separator-shadow-left"}),x["default"].createElement("div",{className:"vce-separator-shadow vce-separator-shadow-right"})):x["default"].createElement("div",(0,n["default"])({className:m},p,f)),x["default"].createElement("div",(0,n["default"])({className:h},o,{id:"el-"+t},v),u)}}]),t}(y.elementComponent);t["default"]=w},0:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var o=s("./node_modules/vc-cake/index.js"),n=a(o),r=s("./separator/component.js"),i=a(r),l=n["default"].getService("cook").add;l(s("./separator/settings.json"),function(e){e.add(i["default"])},{css:s("./node_modules/raw-loader/index.js!./separator/styles.css"),editorCss:s("./node_modules/raw-loader/index.js!./separator/editor.css"),mixins:{basicColor:{mixin:s("./node_modules/raw-loader/index.js!./separator/cssMixins/basicColor.pcss")},separatorWidth:{mixin:s("./node_modules/raw-loader/index.js!./separator/cssMixins/separatorWidth.pcss")},separatorThickness:{mixin:s("./node_modules/raw-loader/index.js!./separator/cssMixins/separatorThickness.pcss")}}},"")},"./separator/settings.json":function(e,t){e.exports={groups:{type:"string",access:"protected",value:"Separators"},color:{type:"color",access:"public",value:"#bfc0c1",options:{label:"Separator color",cssMixin:{mixin:"basicColor",property:"color",namePattern:"[\\da-f]+"}}},alignment:{type:"buttonGroup",access:"public",value:"center",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},style:{type:"dropdown",access:"public",value:"solid",options:{label:"Style",values:[{label:"Line",value:"solid"},{label:"Dashed",value:"dashed"},{label:"Dotted",value:"dotted"},{label:"Double",value:"double"},{label:"Shadow",value:"shadow"}]}},thickness:{type:"number",access:"public",value:"1",options:{label:"Thickness",description:"Enter separator thickeness in pixels.",cssMixin:{mixin:"separatorThickness",property:"thickness",namePattern:"[\\da-f]+"},min:1}},width:{type:"range",access:"public",value:"60",options:{label:"Separator width",description:"Enter separator width in percents (Example: 60).",cssMixin:{mixin:"separatorWidth",property:"width",namePattern:"[\\da-f]+"},min:1,max:100,measurement:"%"}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["color","alignment","style","thickness","width","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},assetsLibrary:{access:"public",type:"string",value:["animate"]},metaBackendLabels:{type:"group",access:"protected",value:[{value:["color"]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"separator"}}},"./node_modules/raw-loader/index.js!./separator/cssMixins/basicColor.pcss":function(e,t){e.exports=".vce-separator--color-$selector {\n  color: $color;\n}"},"./node_modules/raw-loader/index.js!./separator/cssMixins/separatorThickness.pcss":function(e,t){e.exports=".vce-separator--thickness-$selector {\n  &::before {\n    border-width: $(thickness)px;\n  }\n  .vce-separator-shadow {\n    height: calc($(thickness)px * 2.5);\n  }\n  .vce-separator-shadow-left {\n    &::before {\n      box-shadow: 10px 10px 10px $(thickness)px;\n    }\n  }\n  .vce-separator-shadow-right {\n    &::before {\n      box-shadow: -10px 10px 10px $(thickness)px;\n    }\n  }\n}"},"./node_modules/raw-loader/index.js!./separator/cssMixins/separatorWidth.pcss":function(e,t){e.exports=".vce-separator--width-$selector {\n  width: $(width)%;\n}"},"./node_modules/raw-loader/index.js!./separator/editor.css":function(e,t){e.exports=".vce-basic-separator-container {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./separator/styles.css":function(e,t){e.exports="/* ----------------------------------------------\n * Separator\n * ---------------------------------------------- */\n.vce-separator-container {\n  line-height: 0;\n}\n.vce-separator {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  transition: color .3s ease;\n}\n.vce-separator::before {\n  display: block;\n  content: '';\n  box-sizing: content-box;\n  border-width: 1px;\n  border-top-style: solid;\n  width: 100%;\n}\n.vce-separator--align-left {\n  text-align: left;\n}\n.vce-separator--align-center {\n  text-align: center;\n}\n.vce-separator--align-right {\n  text-align: right;\n}\n.vce-separator--style-solid .vce-separator::before {\n  border-top-style: solid;\n}\n.vce-separator--style-dotted .vce-separator::before {\n  border-top-style: dotted;\n}\n.vce-separator--style-dashed .vce-separator::before {\n  border-top-style: dashed;\n}\n.vce-separator--style-double .vce-separator::before {\n  border-top-style: double;\n}\n.vce-separator--style-shadow .vce-separator {\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: auto;\n  margin-left: auto;\n}\n.vce-separator--style-shadow .vce-separator::before {\n  display: none;\n}\n.vce-separator-shadow {\n  position: relative;\n  min-height: 10px;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  min-width: 10%;\n  overflow: hidden;\n}\n.vce-separator-shadow::before {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 0;\n  top: -20px;\n  right: 0;\n  height: 10px;\n  border-radius: 100%;\n}\n.vce-separator-shadow-left::before {\n  right: -100%;\n}\n.vce-separator-shadow-right::before {\n  left: -100%;\n}\n"}});