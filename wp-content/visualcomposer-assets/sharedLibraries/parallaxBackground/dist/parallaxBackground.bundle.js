!function(e){function t(s){if(n[s])return n[s].exports;var r=n[s]={exports:{},id:s,loaded:!1};return e[s].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p=".",t(0)}({"./src/parallax.js":function(e,t){"use strict";window.vcv.on("ready",function(e,t){if("merge"!==e){var n="[data-vce-assets-parallax]";n=t?'[data-vcv-element="'+t+'"] '+n:n,window.vceAssetsParallax(n)}})},"./src/plugin.js":function(e,t){"use strict";!function(e,t){function n(t){var n={element:null,bgElement:null,waypoint:null,observer:null,reverse:!1,speed:30,setup:function(e){return this.resize=this.resize.bind(this),this.handleAttributeChange=this.handleAttributeChange.bind(this),e.getVceParallax?this.update():(e.getVceParallax=this,this.element=e,this.bgElement=e.querySelector(e.dataset.vceAssetsParallax),this.prepareElement(),this.create()),e.getVceParallax},handleAttributeChange:function(){this.element.getAttribute("data-vce-assets-parallax")?this.update():this.destroy()},addScrollEvent:function(){e.addEventListener("scroll",this.resize),this.resize()},removeScrollEvent:function(){e.removeEventListener("scroll",this.resize)},resize:function(){if(this.element.clientHeight){var t=e.innerHeight,n=this.element.getBoundingClientRect(),s=n.height+t,r=(n.top-t)*-1,l=0;r>=0&&r<=s&&(l=r/s);var i=2*this.speed*l*-1+this.speed;"true"===this.reverse&&(i*=-1),this.bgElement.style.transform="translateY("+i+"vh)"}},prepareElement:function(){var e=parseInt(t.dataset.vceAssetsParallaxSpeed);e&&(this.speed=e),"vceAssetsParallaxReverse"in t.dataset&&(this.reverse=t.dataset.vceAssetsParallaxReverse),this.bgElement.style.top="-"+this.speed+"vh",this.bgElement.style.bottom="-"+this.speed+"vh"},create:function(){var e=this;this.waypoint={},this.waypoint.top=new Waypoint({element:e.element,handler:function(t){"up"===t&&e.removeScrollEvent(),"down"===t&&e.addScrollEvent()},offset:"100%"}),this.waypoint.bottom=new Waypoint({element:e.element,handler:function(t){"up"===t&&e.addScrollEvent(),"down"===t&&e.removeScrollEvent()},offset:function(){return-e.element.clientHeight}}),e.observer=new MutationObserver(this.handleAttributeChange),e.observer.observe(this.element,{attributes:!0})},update:function(){this.prepareElement(),this.resize(),Waypoint.refreshAll()},destroy:function(){this.removeScrollEvent(),this.bgElement.style.top=null,this.bgElement.style.bottom=null,this.bgElement.style.transform=null,this.bgElement=null,this.waypoint.top.destroy(),this.waypoint.bottom.destroy(),this.waypoint=null,this.observer.disconnect(),this.observer=null,delete this.element.getVceParallax,this.element=null}};return n.setup(t)}var s={init:function(e){Waypoint.refreshAll();var s=t.querySelectorAll(e);return s=[].slice.call(s),s.forEach(function(e){e.getVceParallax?e.getVceParallax.update():n(e)}),1===s.length?s.pop():s}};e.vceAssetsParallax=s.init}(window,document)},"./src/parallax.css":function(e,t){},0:function(e,t,n){n("./src/plugin.js"),n("./src/parallax.js"),e.exports=n("./src/parallax.css")}});