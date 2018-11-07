var script={props:{sources:{type:Array,required:!0},autoplay:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},muted:{type:Boolean,default:!0},playsinline:{type:Boolean,default:!1},fallbackImg:{type:String,default:null}},name:"BackgroundVideo"},__vue_script__=script,__vue_render__=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"video-section"},[n("video",{staticClass:"video",attrs:{autoplay:e.autoplay,loop:e.loop,playsinline:e.playsinline},domProps:{muted:e.muted}},[e._l(e.sources,function(e,t){return n("source",{key:t,attrs:{src:e.src,type:e.type}})}),e._v(" "),e.fallbackImg?n("img",{attrs:{src:e.fallbackImg,alt:"HTML 5 video unsupported by browser"}}):e._e()],2),e._v(" "),n("div",{staticClass:"video-content"},[e._t("default")],2)])},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;var __vue_inject_styles__=function(e){e&&e("data-v-4069093c_0",{source:"\n.video-section[data-v-4069093c] {\n  position: relative;\n}\n.video[data-v-4069093c] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.video-content[data-v-4069093c] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n",map:{version:3,sources:["/Users/home/Development/vue-cover-video/src/BackgroundVideo.vue"],names:[],mappings:";AAwDA;EACA,mBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;CACA",file:"BackgroundVideo.vue",sourcesContent:['<template>\n<section class="video-section">\n  <video \n    class="video"\n    :autoplay="autoplay"\n    :loop="loop"\n    :playsinline="playsinline"\n    :muted="muted"\n  >\n    <source \n      v-for="(source, index) in sources" \n      :key="index" \n      :src="source.src"\n      :type="source.type"\n    >\n    <img v-if="fallbackImg" :src="fallbackImg" alt="HTML 5 video unsupported by browser">\n  </video>\n  <div class="video-content">\n    <slot></slot>\n  </div>\n</section>\n</template>\n\n<script>\nexport default {\n  props: {\n    sources: {\n      type: Array,\n      required: true\n    },\n    autoplay: {\n      type: Boolean,\n      default: false\n    },\n    loop: {\n      type: Boolean,\n      default: false\n    },\n    muted: {\n      type: Boolean,\n      default: true\n    },\n    playsinline: {\n      type: Boolean,\n      default: false\n    },\n    fallbackImg: {\n      type: String,\n      default: null\n    }\n  },\n  name: \'BackgroundVideo\'\n}\n<\/script>\n\n<style scoped>\n.video-section {\n  position: relative;\n}\n.video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.video-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n</style>\n']},media:void 0})},__vue_scope_id__="data-v-4069093c",__vue_module_identifier__=void 0,__vue_is_functional_template__=!1;function __vue_normalize__(e,t,n,o,i,a,l,s){var r,d=("function"==typeof n?n.options:n)||{};if(d.__file="/Users/home/Development/vue-cover-video/src/BackgroundVideo.vue",d.render||(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),d._scopeId=o,t&&(r=function(e){t.call(this,l(e))}),void 0!==r)if(d.functional){var u=d.render;d.render=function(e,t){return r.call(t),u(e,t)}}else{var _=d.beforeCreate;d.beforeCreate=_?[].concat(_,r):[r]}return d}function __vue_create_injector__(){var e=document.head||document.getElementsByTagName("head")[0],t=__vue_create_injector__.styles||(__vue_create_injector__.styles={}),n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(o,i){if(!document.querySelector('style[data-vue-ssr-id~="'+o+'"]')){var a=n?i.media||"default":o,l=t[a]||(t[a]={ids:[],parts:[],element:void 0});if(!l.ids.includes(o)){var s=i.source,r=l.ids.length;if(l.ids.push(o),n&&(l.element=l.element||document.querySelector("style[data-group="+a+"]")),!l.element){var d=l.element=document.createElement("style");d.type="text/css",i.media&&d.setAttribute("media",i.media),n&&(d.setAttribute("data-group",a),d.setAttribute("data-next-index","0")),e.appendChild(d)}if(n&&(r=parseInt(l.element.getAttribute("data-next-index")),l.element.setAttribute("data-next-index",r+1)),l.element.styleSheet)l.parts.push(s),l.element.styleSheet.cssText=l.parts.filter(Boolean).join("\n");else{var u=document.createTextNode(s),_=l.element.childNodes;_[r]&&l.element.removeChild(_[r]),_.length?l.element.insertBefore(u,_[r]):l.element.appendChild(u)}}}}}var BackgroundVideo=__vue_normalize__({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,__vue_create_injector__,void 0);function install(e){install.installed||(install.installed=!0,e.component("background-video",BackgroundVideo))}var plugin={install:install},GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin);export default component;export{install};