(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12c01978"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=u},"1dde":function(e,t,r){var n=r("d039"),u=r("b622"),a=r("2d00"),i=u("species");e.exports=function(e){return a>=51||!n((function(){var t=[],r=t.constructor={};return r[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=u},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=u},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=u},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("numeric",/^[0-9]*$/);t.default=u},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=u},"4de4":function(e,t,r){"use strict";var n=r("23e7"),u=r("b727").filter,a=r("1dde"),i=r("ae40"),o=a("filter"),s=i("filter");n({target:"Array",proto:!0,forced:!o||!s},{filter:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0)}})},"5afa":function(e,t,r){},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,a=(0,n.regex)("email",u);t.default=a},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=u},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=u},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=u},"65f0":function(e,t,r){var n=r("861d"),u=r("e8b5"),a=r("b622"),i=a("species");e.exports=function(e,t){var r;return u(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!u(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,n.regex)("url",u);t.default=a},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=u(r("8750"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var i=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=i;var o=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=o;var s=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=s;var f=function(e,t){return(0,n.default)({type:e},(function(e){return!i(e)||t.test(e)}))};t.regex=f},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:"/dragonfly/"}).BUILD?r("cb69").withParams:r("0234").withParams,u=n;t.default=u},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)}))};t.default=u;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=u},ac8b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"signup"}},[r("div",{staticClass:"signup-form"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"input",class:{invalid:e.$v.email.$error}},[r("label",{attrs:{for:"email"}},[e._v("Mail")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{blur:function(t){return e.$v.email.$touch()},input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.$v.email.email?e._e():r("p",{staticClass:"warn"},[e._v("Please provide a valid email address")]),e.$v.email.required?e._e():r("p",{staticClass:"warn"},[e._v("This field must not be empty")])]),r("div",{staticClass:"input",class:{invalid:e.$v.age.$error}},[r("label",{attrs:{for:"age"}},[e._v("Your Age")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.age,expression:"age",modifiers:{number:!0}}],attrs:{type:"number",id:"age"},domProps:{value:e.age},on:{blur:[function(t){return e.$v.age.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.age=e._n(t.target.value))}}}),e.$v.age.minVal?e._e():r("p",{staticClass:"warn"},[e._v("You have to be at least "+e._s(e.$v.age.$params.minVal.min)+" years old")])]),r("div",{staticClass:"input",class:{invalid:e.$v.password.$error}},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{blur:function(t){return e.$v.password.$touch()},input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("div",{staticClass:"input",class:{invalid:e.$v.confirmPassword.$error}},[r("label",{attrs:{for:"confirm-password"}},[e._v("Confirm Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],attrs:{type:"password",id:"confirm-password"},domProps:{value:e.confirmPassword},on:{blur:function(t){return e.$v.confirmPassword.$touch()},input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}})]),r("div",{staticClass:"input"},[r("label",{attrs:{for:"country"}},[e._v("Country")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],attrs:{id:"country"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.country=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"usa"}},[e._v("USA")]),r("option",{attrs:{value:"india"}},[e._v("India")]),r("option",{attrs:{value:"uk"}},[e._v("UK")]),r("option",{attrs:{value:"germany"}},[e._v("Germany")])])]),r("div",{staticClass:"hobbies"},[r("h3",[e._v("Add some Hobbies")]),r("button",{attrs:{type:"button"},on:{click:e.onAddHobby}},[e._v("Add Hobby")]),r("div",{staticClass:"hobby-list"},[e._l(e.hobbyInputs,(function(t,n){return r("div",{key:t.id,staticClass:"input",class:{invalid:e.$v.hobbyInputs.$each[n].$error}},[r("label",{attrs:{for:t.id}},[e._v("Hobby #"+e._s(n))]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"hobbyInput.value"}],attrs:{type:"text",id:t.id},domProps:{value:t.value},on:{blur:function(t){return e.$v.hobbyInputs.$each[n].value.$touch()},input:function(r){r.target.composing||e.$set(t,"value",r.target.value)}}}),r("button",{attrs:{type:"button"},on:{click:function(r){return e.onDeleteHobby(t.id)}}},[e._v("X")])])})),e.$v.hobbyInputs.minLen?e._e():r("p",[e._v("You have to specify at least "+e._s(e.$v.hobbyInputs.$params.minLen.min)+" hobbies")]),e.$v.hobbyInputs.required?e._e():r("p",[e._v("Please add hobbies")])],2)]),r("div",{staticClass:"input inline",class:{invalid:e.$v.tou.$invalid}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.terms,expression:"terms"}],attrs:{type:"checkbox",id:"terms"},domProps:{checked:Array.isArray(e.terms)?e._i(e.terms,null)>-1:e.terms},on:{change:[function(t){var r=e.terms,n=t.target,u=!!n.checked;if(Array.isArray(r)){var a=null,i=e._i(r,a);n.checked?i<0&&(e.terms=r.concat([a])):i>-1&&(e.terms=r.slice(0,i).concat(r.slice(i+1)))}else e.terms=u},function(t){return e.$v.tou.$touch()}]}}),r("label",{attrs:{for:"terms"}},[e._v("Accept Terms of Use")])]),r("div",{staticClass:"submit"},[r("button",{attrs:{type:"submit",disabled:e.$v.$invalid}},[e._v("Submit")])])])])])},u=[],a=(r("4de4"),r("d81d"),r("b64b"),r("b5ae")),i=r("bc3a"),o=r.n(i),s={data:function(){return{email:"",age:null,password:"",confirmPassword:"",country:"usa",hobbyInputs:[],terms:!1}},validations:{email:{required:a["required"],email:a["email"],unique:function(e){return""===e||o.a.get('/users.json?orderBy="email"&equalTo="'+e+'"').then((function(e){return console.log("email/unique/res: ",e),0===Object.keys(e.data).length}))}},age:{required:a["required"],numeric:a["numeric"],minVal:Object(a["minValue"])(18)},password:{required:a["required"],minLen:Object(a["minLength"])(6)},confirmPassword:{sameAs:Object(a["sameAs"])((function(e){return e.password}))},tou:{},hobbyInputs:{required:a["required"],minLen:Object(a["minLength"])(2),$each:{value:{required:a["required"],minLen:Object(a["minLength"])(5)}}}},methods:{onAddHobby:function(){var e={id:Math.random()*Math.random()*1e3,value:""};this.hobbyInputs.push(e)},onDeleteHobby:function(e){this.hobbyInputs=this.hobbyInputs.filter((function(t){return t.id!==e}))},onSubmit:function(){var e={email:this.email,age:this.age,password:this.password,confirmPassword:this.confirmPassword,country:this.country,hobbies:this.hobbyInputs.map((function(e){return e.value})),terms:this.terms};this.$store.dispatch("signup",e)}}},f=s,c=(r("bd74"),r("2877")),l=Object(c["a"])(f,n,u,!1,null,"0d1f5488",null);t["default"]=l.exports},ae40:function(e,t,r){var n=r("83ab"),u=r("d039"),a=r("5135"),i=Object.defineProperty,o={},s=function(e){throw e};e.exports=function(e,t){if(a(o,e))return o[e];t||(t={});var r=[][e],f=!!a(t,"ACCESSORS")&&t.ACCESSORS,c=a(t,0)?t[0]:s,l=a(t,1)?t[1]:void 0;return o[e]=!!r&&!u((function(){if(f&&!n)return!0;var e={length:-1};f?i(e,1,{enumerable:!0,get:s}):e[1]=1,r.call(e,c,l)}))}},b5ae:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return j.default}}),t.helpers=void 0;var u=M(r("6235")),a=M(r("3a54")),i=M(r("45b8")),o=M(r("ec11")),s=M(r("5d75")),f=M(r("c99d")),c=M(r("91d3")),l=M(r("2a12")),d=M(r("5db3")),p=M(r("d4f4")),v=M(r("aa82")),b=M(r("e652")),m=M(r("b6cb")),y=M(r("772d")),h=M(r("d294")),g=M(r("3360")),_=M(r("6417")),P=M(r("eb66")),w=M(r("46bc")),O=M(r("1331")),j=M(r("c301")),$=q(r("78ef"));function A(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return A=function(){return e},e}function q(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=A();if(t&&t.has(e))return t.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=u?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function M(e){return e&&e.__esModule?e:{default:e}}t.helpers=$},b64b:function(e,t,r){var n=r("23e7"),u=r("7b0b"),a=r("df75"),i=r("d039"),o=i((function(){a(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(e){return a(u(e))}})},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=u},b727:function(e,t,r){var n=r("0366"),u=r("44ad"),a=r("7b0b"),i=r("50c4"),o=r("65f0"),s=[].push,f=function(e){var t=1==e,r=2==e,f=3==e,c=4==e,l=6==e,d=5==e||l;return function(p,v,b,m){for(var y,h,g=a(p),_=u(g),P=n(v,b,3),w=i(_.length),O=0,j=m||o,$=t?j(p,w):r?j(p,0):void 0;w>O;O++)if((d||O in _)&&(y=_[O],h=P(y,O,g),e))if(t)$[O]=h;else if(h)switch(e){case 3:return!0;case 5:return y;case 6:return O;case 2:s.call($,y)}else if(c)return!1;return l?-1:f||c?c:$}};e.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},bd74:function(e,t,r){"use strict";var n=r("5afa"),u=r.n(n);u.a},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=u},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t.default=u;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},u=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},a=n.vuelidate?n.vuelidate.withParams:u;t.withParams=a}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=u},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=u},d81d:function(e,t,r){"use strict";var n=r("23e7"),u=r("b727").map,a=r("1dde"),i=r("ae40"),o=a("map"),s=i("map");n({target:"Array",proto:!0,forced:!o||!s},{map:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0)}})},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=u},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=u},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=u}}]);
//# sourceMappingURL=chunk-12c01978.2a6f75a9.js.map