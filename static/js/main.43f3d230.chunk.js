(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/Adam_Doyle_Resume_2022.507db78b.pdf"},5316:function(e,t,n){e.exports=n(5471)},5328:function(e,t,n){},5468:function(e,t,n){},5471:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(20),a=n.n(i),l=n(12),c=n(21),s=function(e){return{type:"SET_SCREEN_SIZE",screenSize:e}},u=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desktop",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_SCREEN_SIZE":return(e=n.screenSize)<600?"mobile":e>=600&&e<1e3?"tablet":"desktop";default:return t}},p=function(){return{type:"OPEN_ABOUT"}},d=function(){return{type:"CLOSE_ABOUT"}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_ABOUT":return!0;case"CLOSE_ABOUT":return!1;default:return e}},h=function(e){return{type:"SELECT_COMPANY",company:e}},f={BEACON_BIOSIGNALS:"Beacon Biosignals",HEARTH:"Hearth",VERTAFORE:"Vertafore",WALMART:"Walmart Labs"},y=f.BEACON_BIOSIGNALS,v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_COMPANY":return t.company;default:return e}},g=function(){return{type:"OPEN_CONTACT_MODAL"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_CONTACT_MODAL":return!0;case"CLOSE_CONTACT_MODAL":return!1;default:return e}},E=n(29);n(5325);var w={emailInFlight:!1,emailReceived:!1,emailFailed:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;switch((arguments.length>1?arguments[1]:void 0).type){case"EMAIL_SENT":return Object.assign({},e,{emailInFlight:!0,emailReceived:!1,emailFailed:!1});case"EMAIL_RECEIVED":return Object.assign({},e,{emailInFlight:!1,emailReceived:!0,emailFailed:!1});case"EMAIL_FAILED":return Object.assign({},e,{emailInFlight:!1,emailReceived:!1,emailFailed:!0});default:return e}},O=Object(c.c)({screenSize:u,aboutOpen:m,selectedCompany:v,contactModalIsOpen:b,emailStatus:x}),S=n(5474),k=n(5475),C=(n(5328),n(7)),j=n(8),L=n(10),T=n(9),z=n(11),A=n(90),I=n.n(A),R=n(93),B=n.n(R),H=n(34),_=n.n(H),N=n(92),D=n(30),F=n.n(D),M={background:"#2A2A2A",white:"#E5E5E5",grey:"#848586",blue:"#16ADC2",primary:"#401786",secondary:"#9880C1",third:"#38E5F2"},P={navBar:{desktop:{cursor:"pointer",height:"11vh",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:M.background,position:"fixed",width:"100vw",marginTop:"-100px"},tablet:{cursor:"pointer",height:"11vh",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:M.background,position:"fixed",width:"100vw",marginTop:"-100px"},mobile:{cursor:"pointer",height:"11vh",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:M.background,position:"fixed",width:"100vw",marginTop:"-100px"}},logo:{desktop:{height:"40px",color:M.white,marginLeft:"203px"},tablet:{height:"40px",color:M.white},mobile:{height:"40px",color:M.white}},paths:{display:"flex",flexDirection:"row",path:{marginRight:"30px",cursor:"pointer",color:M.white}},hamburger:{color:M.white},resumeLink:{textDecoration:"none",color:M.white,border:"1px solid ".concat(M.white),width:"107px",height:"40px",boxSizing:"border-box",borderRadius:"5px",padding:"3px",mobile:{textDecoration:"none",color:"black"}}},G={ABOUT:"about",EXPERIENCE:"experience",CONTACT:"contact",HOME:"home"};function W(){W=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=E(a,n);if(l){if(l===u)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=c;var u={};function p(){}function d(){}function m(){}var h={};l(h,o,function(){return this});var f=Object.getPrototypeOf,y=f&&f(f(S([])));y&&y!==t&&n.call(y,o)&&(h=y);var v=m.prototype=p.prototype=Object.create(h);function g(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;this._invoke=function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,l){var c=s(e[o],e,i);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then(function(e){r("next",e,a,l)},function(e){r("throw",e,a,l)}):t.resolve(p).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,l)})}l(c.arg)}(o,i,r,a)})}return r=r?r.then(a,a):a()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=m,l(v,"constructor",m),l(m,"constructor",d),d.displayName=l(m,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,a,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new b(c(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then(function(e){return e.done?e.value:a.next()})},g(v),l(v,a,"Generator"),l(v,o,function(){return this}),l(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var U=function(e){function t(){var e,n;Object(C.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(L.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(o)))).state={anchorEl:null},n.handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleOpenResume=function(){n.handleClose()},n.handleClose=function(){n.setState({anchorEl:null})},n.scroll=function(){var e=Object(E.a)(W().mark(function e(t){return W().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.handleClose();case 2:n.props.scrollToElement(t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(z.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this,t=this.state.anchorEl;return o.a.createElement("div",null,o.a.createElement(I.a,{onClick:this.handleClick},o.a.createElement(N.a,{style:P.hamburger})),o.a.createElement(B.a,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose},o.a.createElement(_.a,{onClick:function(){e.scroll(G.ABOUT)}}," ","About"," "),o.a.createElement(_.a,{onClick:function(){e.scroll(G.EXPERIENCE)}}," ","Experience"," "),o.a.createElement(_.a,{onClick:function(){e.scroll(G.CONTACT)}}," ","Contact"," "),o.a.createElement(_.a,null,o.a.createElement("a",{href:F.a,target:"_blank",style:P.resumeLink.mobile},"Resume"))))}}]),t}(o.a.Component),V=n(94),J=n.n(V),Y=function(e){return o.a.createElement("div",{style:P.navBar[e.screenSize]},o.a.createElement("div",null,o.a.createElement("img",{onClick:function(){e.scrollToElement(G.HOME)},style:P.logo[e.screenSize],src:J.a,alt:"Adam Doyle"})),"desktop"===e.screenSize||"tablet"===e.screenSize?o.a.createElement("div",{style:P.paths},o.a.createElement("div",{onClick:function(){e.scrollToElement(G.ABOUT)},style:P.paths.path}," ","About"," "),o.a.createElement("div",{onClick:function(){e.scrollToElement(G.EXPERIENCE)},style:P.paths.path}," ","Experience"," "),o.a.createElement("div",{onClick:function(){e.scrollToElement(G.CONTACT)},style:P.paths.path}," ","Contact"," "),o.a.createElement("div",{style:P.paths.path},o.a.createElement("a",{href:F.a,target:"_blank",style:P.resumeLink},"Resume"))):o.a.createElement(U,e))},X=function(e){function t(){var e,n;Object(C.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(L.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(o)))).viewResume=function(){window.open("data:application/pdf"+F.a)},n.scrollToElement=function(e){n.props.scrollToMyRef(e)},n}return Object(z.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:G.HOME},o.a.createElement(Y,{viewResume:this.viewResume,screenSize:this.props.screenSize,scrollToElement:this.scrollToElement,style:P.navBarComponent}))}}]),t}(r.Component),q=Object(l.b)(function(e){return{screenSize:e.screenSize,aboutOpen:e.aboutOpen}},function(e){return Object(c.b)({openAbout:p,closeAbout:d},e)})(X),Q=n(3),Z={body:{desktop:{marginLeft:"203px",marginRight:"203px",marginBottom:"150px",backgroundColor:M.background},mobile:{marginBottom:"150px",backgroundColor:M.background,marginLeft:"10px",marginRight:"10px"}},componentHeader:{color:M.blue,fontSize:"30px",marginBottom:"15px",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"normal"},componentSubHeader:{color:M.white,fontFamily:"Helvetica",lineHeight:"normal"}},K=function(e){return{headline:{desktop:Object(Q.a)({},Z.body.desktop,{height:"100vh",marginTop:"100px",marginBottom:"0"}),tablet:Object(Q.a)({},Z.body.mobile,{marginTop:"100px"}),mobile:Object(Q.a)({},Z.body.mobile,{marginTop:"100px"})},intro:{color:M.grey,fontFamily:"Helvetica",lineHeight:"30px",fontSize:"desktop"===e?"30px":"20px",fontWeight:"bold",marginBottom:"desktop"===e?"10vh":"0vh"},myNameIs:{color:M.blue,fontSize:"desktop"===e?"100px":"70px",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"normal",marginBottom:"desktop"===e?"10vh":"15px"},wat:{color:M.white,fontSize:"desktop"===e?"30px":"20px",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"desktop"===e?"50px":"30px",marginBottom:"desktop"===e?"5vh":"15px"},details:{color:M.grey,fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"30px",fontSize:"desktop"===e?"30px":"20px",marginBottom:"desktop"===e?"10vh":"50px"},contact:{backgroundColor:M.blue,padding:"5px",width:"110px",display:"flex",justifyContent:"center",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"30px",fontSize:"15px",cursor:"pointer"},title:{color:M.blue}}},$={intro:"Hi, my name is",myNameIs:"ADAM DOYLE",wat:"I'm a software engineer specializing in developing high-quality mobile and web applications.",watTwo:" specializing in developing high-quality mobile and web applications.",contact:"Get in Touch",details:"Currently living in Orange County California and building software solutions at Beacon Biosignals"},ee=n(26),te=n.n(ee);function ne(){ne=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=E(a,n);if(l){if(l===u)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=c;var u={};function p(){}function d(){}function m(){}var h={};l(h,o,function(){return this});var f=Object.getPrototypeOf,y=f&&f(f(S([])));y&&y!==t&&n.call(y,o)&&(h=y);var v=m.prototype=p.prototype=Object.create(h);function g(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;this._invoke=function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,l){var c=s(e[o],e,i);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then(function(e){r("next",e,a,l)},function(e){r("throw",e,a,l)}):t.resolve(p).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,l)})}l(c.arg)}(o,i,r,a)})}return r=r?r.then(a,a):a()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=m,l(v,"constructor",m),l(m,"constructor",d),d.displayName=l(m,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,a,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new b(c(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then(function(e){return e.done?e.value:a.next()})},g(v),l(v,a,"Generator"),l(v,o,function(){return this}),l(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var re=function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(L.a)(this,Object(T.a)(t).call(this,e))).componentDidMount=function(){window.addEventListener("resize",n.handleResize)},n.handleResize=Object(E.a)(ne().mark(function e(){return ne().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({override:!0});case 2:return e.next=4,n.setState({override:!1});case 4:case"end":return e.stop()}},e)})),n.isVowel=function(e){return"a"===e.toLowerCase()||"e"===e.toLowerCase()||"i"===e.toLowerCase()||"o"===e.toLowerCase()||"u"===e.toLowerCase()},n.state={titleIndex:0,override:!1},n}return Object(z.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this,t=o.a.createElement(o.a.Fragment,null,o.a.createElement(te.a,{loop:!0,onFinishedTyping:function(){var t=e.state.titleIndex===e.props.titles.length-1?0:e.state.titleIndex+1;e.setState({titleIndex:t})},onStartedTyping:window.addEventListener("resize",o.a.createElement(te.a.Reset,{count:1,delay:5}))},o.a.createElement(te.a.Speed,{ms:50}),o.a.createElement("div",{id:"title",style:K().title},this.props.titles[this.state.titleIndex]),o.a.createElement(te.a.Delay,{ms:1e3}),o.a.createElement(te.a.Backspace,{count:this.props.titles[this.state.titleIndex].length+1}),o.a.createElement(te.a.Reset,{count:1,delay:5}))),n=this.isVowel(this.props.titles[this.state.titleIndex][0])?"I'm an ":"I'm a ";return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,n),this.state.override?o.a.createElement("div",null):t)}}]),t}(r.Component),oe=function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(L.a)(this,Object(T.a)(t).call(this,e))).componentWillMount=function(){},n.startChangingTitles=function(){setTimeout(n.changeTitle,6e3)},n.changeTitle=function(){var e=n.state.currentTitle,t=e===n.state.titles.length-1?0:++e;n.setState({currentTitle:t})},n.state={titles:["software engineer","problem solver","adrenaline junkie","risk taker","lifelong learner"],currentTitle:0},n}return Object(z.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:K(this.props.screenSize).headline[this.props.screenSize]},o.a.createElement("div",{style:K(this.props.screenSize).intro},$.intro),o.a.createElement("div",{style:K(this.props.screenSize).myNameIs},$.myNameIs),o.a.createElement("div",{style:K(this.props.screenSize).wat},o.a.createElement(re,{titles:this.state.titles}),o.a.createElement("span",null,$.watTwo)),o.a.createElement("div",{style:K(this.props.screenSize).details},$.details),o.a.createElement("div",{onClick:function(){e.props.scrollToMyRef(G.CONTACT)},style:K(this.props.screenSize).contact},$.contact))}}]),t}(r.Component),ie=Object(l.b)(void 0,function(e){return Object(c.b)({openContactModal:g},e)})(oe),ae={about:{desktop:Object(Q.a)({},Z.body.desktop,{marginTop:"75px",fontSize:"20px"}),tablet:Object(Q.a)({},Z.body.mobile),mobile:Object(Q.a)({},Z.body.mobile)},aboutHeader:Object(Q.a)({},Z.componentHeader),aboutContent:{desktop:Object(Q.a)({},Z.componentSubHeader,{display:"flex",flexDirection:"row",justifyContent:"space-between"}),tablet:Object(Q.a)({},Z.componentSubHeader,{display:"flex",flexDirection:"row",justifyContent:"space-between"}),mobile:Object(Q.a)({},Z.componentSubHeader,{display:"flex",flexDirection:"column",alignItems:"center"})},aboutWords:{display:"flex",flexDirection:"column",marginBottom:"50px"},aboutText:{marginRight:"10px",marginBottom:"30px"},skillsHeader:Object(Q.a)({},Z.componentSubHeader,{color:M.grey,marginBottom:"30px",fontWeight:"bold"}),skills:{display:"flex",flexDirection:"row"},individualSkill:{desktop:{marginBottom:"10px",color:M.white},tablet:{marginBottom:"10px",color:M.white},mobile:{marginBottom:"10px",color:M.white}},bullet:{color:M.blue,marginBottom:"15px"},skillsColumn:{display:"flex",flexDirection:"column",marginRight:"20px"},profilePicture:{desktop:{width:"25vw",marginLeft:"150px",marginBottom:"50px"},tablet:{width:"250px",marginLeft:"150px",marginBottom:"50px"},mobile:{width:"200px",marginBottom:"50px"}}},le={aboutHeader:"ABOUT",aboutTextP1:"I am a software engineer with a passion for building high-quality, high performance applications. I am focused on user-experience driven development, and building clean, maintainable products.",aboutTextP2:"Prior to my career in programming, I had a successful career in restaurant operations. My interest in creating system-level solutions and optimizations has proven to be one my biggest assets as an engineer.",aboutTextP3:" In my career I have had the opportunity to work on a variety of prodcts with some awesome teams. I am always looking for new opportunities to explore new technologies, solve intersting problems and deliver value to users.",skillsHeader:"Here's a few things I'm experienced with"},ce=n(95),se=n.n(ce),ue=function(e){return o.a.createElement("div",{style:ae.about[e.screenSize]},o.a.createElement("div",{style:ae.aboutHeader},le.aboutHeader),o.a.createElement("div",{style:ae.aboutContent[e.screenSize]},o.a.createElement("div",{style:ae.aboutWords},o.a.createElement("div",{style:ae.aboutText},le.aboutTextP1),o.a.createElement("div",{style:ae.aboutText},le.aboutTextP2),o.a.createElement("div",{style:ae.aboutText},le.aboutTextP3)),o.a.createElement("div",null,o.a.createElement("img",{style:ae.profilePicture[e.screenSize],src:se.a,alt:"Adam Doyle"}))),o.a.createElement("div",null,o.a.createElement("div",{style:ae.skillsHeader},le.skillsHeader),o.a.createElement("div",null,"desktop"===(t=e.screenSize)||"tablet"===t?o.a.createElement("div",{style:ae.skills},o.a.createElement("div",{style:ae.skillsColumn},o.a.createElement("li",{style:ae.bullet},o.a.createElement("span",{style:ae.individualSkill[t]},"JavaScript & Typescript")),o.a.createElement("li",{style:ae.bullet},o.a.createElement("span",{style:ae.individualSkill[t]},"HTML & CSS")),o.a.createElement("li",{style:ae.bullet},o.a.createElement("span",{style:ae.individualSkill[t]},"React & Redux")),o.a.createElement("li",{style:ae.bullet},o.a.createElement("span",{style:ae.individualSkill[t]},"Jest/Mocha"))),o.a.createElement("div",{style:ae.skillsColumn},o.a.createElement("li",{style:ae.bullet},o.a.createElement("span",{style:ae.individualSkill[t]},"Node")),o.a.createElement("li",{style:ae.bullet},o.a.createElement("span",{style:ae.individualSkill[t]},"MongoDB")),o.a.createElement("li",{style:ae.bullet},o.a.createElement("span",{style:ae.individualSkill[t]},"Express")),o.a.createElement("li",{style:ae.bullet},o.a.createElement("span",{style:ae.individualSkill[t]},"Go"))),o.a.createElement("div",{style:ae.skillsColumn},o.a.createElement("li",{style:ae.bullet},o.a.createElement("span",{style:ae.individualSkill[t]},"Agile/Scrum methodologies")),o.a.createElement("li",{style:ae.bullet},o.a.createElement("span",{style:ae.individualSkill[t]},"Responsive/Mobile First Development")),o.a.createElement("li",{style:ae.bullet},o.a.createElement("span",{style:ae.individualSkill[t]},"Test-Driven Development")),o.a.createElement("li",{style:ae.bullet},o.a.createElement("span",{style:ae.individualSkill[t]},"CI/CD")))):o.a.createElement("div",{style:ae.skills},o.a.createElement("div",{style:ae.skillsColumn},o.a.createElement("div",{style:ae.individualSkill[t]},"JavaScript"),o.a.createElement("div",{style:ae.individualSkill[t]},"HTML & CSS"),o.a.createElement("div",{style:ae.individualSkill[t]},"React & Redux"),o.a.createElement("div",{style:ae.individualSkill[t]},"Node"),o.a.createElement("div",{style:ae.individualSkill[t]},"Cypress")),o.a.createElement("div",{style:ae.skillsColumn},o.a.createElement("div",{style:ae.individualSkill[t]},"MongoDB"),o.a.createElement("div",{style:ae.individualSkill[t]},"Agile/Scrum methodologies"),o.a.createElement("div",{style:ae.individualSkill[t]},"Responsive/Mobile First Development"),o.a.createElement("div",{style:ae.individualSkill[t]},"Test-Driven Development"))))));var t},pe=function(e){function t(){return Object(C.a)(this,t),Object(L.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"about"},o.a.createElement(ue,{screenSize:this.props.screenSize}))}}]),t}(r.Component),de=Object(l.b)(function(e){return{screenSize:e.screenSize}})(pe),me={companyNameList:{desktop:{fontSize:"20px"},tablet:{},mobile:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}},companyName:Object(Q.a)({},Z.componentSubHeader,{marginBottom:"20px",marginTop:"20px",cursor:"pointer",width:"150px"}),selectedCompany:Object(Q.a)({},Z.componentSubHeader,{marginBottom:"20px",marginTop:"20px",color:M.third,cursor:"pointer",width:"150px"})},he=function(e){return o.a.createElement("div",{style:me.companyNameList[e.screenSize]},o.a.createElement("div",{style:e.selectedCompany===f.BEACON_BIOSIGNALS?me.selectedCompany:me.companyName,onClick:function(){e.selectCompany(f.BEACON_BIOSIGNALS)}},"Beacon Biosignals"),o.a.createElement("div",{style:e.selectedCompany===f.HEARTH?me.selectedCompany:me.companyName,onClick:function(){e.selectCompany(f.HEARTH)}},"Hearth"),o.a.createElement("div",{style:e.selectedCompany===f.VERTAFORE?me.selectedCompany:me.companyName,onClick:function(){e.selectCompany(f.VERTAFORE)}},"Vertafore"),o.a.createElement("div",{style:e.selectedCompany===f.WALMART?me.selectedCompany:me.companyName,onClick:function(){e.selectCompany(f.WALMART)}},"Walmart Labs"))},fe=function(e){function t(){return Object(C.a)(this,t),Object(L.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return o.a.createElement(he,{selectCompany:this.props.selectCompany,selectedCompany:this.props.selectedCompany,screenSize:this.props.screenSize})}}]),t}(r.Component),ye=Object(l.b)(function(e){return{screenSize:e.screenSize,selectedCompany:e.selectedCompany}},function(e){return Object(c.b)({selectCompany:h},e)})(fe),ve=function(e){return{jobs:{marginLeft:"20px"},jobHeader:{display:"flex",flexDirection:"row"},title:Object(Q.a)({},Z.componentSubHeader,{color:M.primary}),company:Object(Q.a)({},Z.componentSubHeader,{color:M.secondary}),dates:{color:M.primary},titleAndDate:{color:M.grey,fontSize:"24px",fontWeight:"bold",marginBottom:"10px"},bullet:{color:M.white,marginBottom:"10px",fontSize:"desktop"===e?"20px":null},bulletItem:{color:M.white},bulletContainer:{desktop:{marginTop:"20px",width:"55vw"},tablet:{marginTop:"20px",width:"55vw"},mobile:{marginTop:"20px"}}}},ge={"Beacon Biosignals":{title:"Senior Software Engineer",company:"Beacon Biosignals",dates:"Jan 2023 - Present",bullets:["Developed and maintained a suite of React-based applications that provided real-time data visualization and analysis of complex algorithms","Leveraged GraphQL as the priamry data-fetching and managment layer","Utilized React's component-based architecture to build reusable and modular UI components, maximizing development efficiency and minimizing duplication of code","Developed and maintaned inhouse UI Component libarary with storybook promoting UI/UX consistency across platform and company"]},Hearth:{title:"Full-stack Software Engineer",company:"Hearth",dates:"Nov 2021 - Nov 2022",bullets:["Developed, launched, and iterated on financial applications to help private contractors more effectively manage their businesses","Built web and native application,s in React, React Native, and Typescript","Developed backend services in Go","Developed and released private npm packages to bridge native SDKs to React Native projects","Interviewed and effectively participated in the hiring and onboarding of new employees"]},Vertafore:{title:"Software Engineer",company:"Vertafore",dates:"Feb 2020 - Nov 2021",bullets:["Software Engineer working on web applications using React.js","Contributor and maintainer to greenfield products aimed at modernizing the insurance industry","Contributor and maintainer to multiple custom inhouse UI Libraries promoting UI/UX consistency across platform and company","Responsible for writing, reviewing and testing code","Create reusable components leveraging custom hooks and providers","Mentor new developers as part of a mentorship pilot program"]},"Walmart Labs":{title:"Software Engineer",company:"Walmart Labs",dates:"Dec 2017 - Feb 2020",bullets:["Software Engineer working on mobile applications using React.js while integrating with teams throughout a micro-service ecosystem","Contributor to a cutting-edge team in supply chain technologies","Working in an agile environment with a focus on UX-driven development and CI/CD practices","Responsible for writing and reviewing JavaScript code, QA, planning and breaking down work","Frequently meet with, and provide support to business partners while collecting feedback from end-users","Interview and effectively participate in hiring and onboarding of employees"]}},be=function(e){return o.a.createElement("div",{style:ve(e.screenSize).jobs},o.a.createElement("div",{style:ve(e.screenSize).bulletContainer[e.screenSize]},o.a.createElement("div",{style:ve(e.screenSize).titleAndDate},"".concat(ge[e.selectedCompany].title," ").concat(ge[e.selectedCompany].dates)),ge[e.selectedCompany].bullets.map(function(t){return o.a.createElement("ul",null,o.a.createElement("li",{style:ve(e.screenSize).bullet},t))})))},Ee=function(e){function t(){return Object(C.a)(this,t),Object(L.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return o.a.createElement(be,{selectedCompany:this.props.selectedCompany,screenSize:this.props.screenSize})}}]),t}(r.Component),we=Object(l.b)(function(e){return{selectedCompany:e.selectedCompany,screenSize:e.screenSize}})(Ee),xe={experience:{desktop:Object(Q.a)({},Z.body.desktop),tablet:Object(Q.a)({},Z.body.mobile),mobile:Object(Q.a)({},Z.body.mobile)},experienceHeader:Object(Q.a)({},Z.componentHeader),jobInfo:{desktop:{display:"flex",flexDirection:"row",justifyContent:"space-between"},tablet:{display:"flex",flexDirection:"row",justifyContent:"space-between"},mobile:{display:"flex",flexDirection:"column"}}},Oe=function(e){return o.a.createElement("div",{id:"experience",style:xe.experience[e.screenSize]},o.a.createElement("div",{style:xe.experienceHeader},"Experience"),o.a.createElement("div",{style:xe.jobInfo[e.screenSize]},o.a.createElement(ye,null),o.a.createElement(we,null)))},Se=function(e){function t(){return Object(C.a)(this,t),Object(L.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return o.a.createElement(Oe,{screenSize:this.props.screenSize})}}]),t}(r.Component),ke=Object(l.b)(function(e){return{screenSize:e.screenSize}})(Se),Ce={getInTouch:{desktop:Object(Q.a)({},Z.body.desktop,{display:"flex",justifyContent:"center",flexDirection:"column"}),tablet:Object(Q.a)({},Z.body.mobile,{display:"flex",justifyContent:"center",flexDirection:"column"}),mobile:Object(Q.a)({},Z.body.mobile,{display:"flex",justifyContent:"center",flexDirection:"column"})},header:Object(Q.a)({},Z.componentHeader,{textAlign:"center",marginBottom:"30px"}),subHeader:{color:M.grey,fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"normal",fontSize:"20px",marginBottom:"30px",textAlign:"center"},contact:{color:M.white,fontFamily:"Helvetica",lineHeight:"normal",fontSize:"20px",marginBottom:"15px",textAlign:"center"},link:{color:"white"}},je={HEADER:"Get in Touch!",SUB_HEADER:"Let's connect! Feel free shoot me an email.",PHONE:"(630)217-2264",EMAIL:"hello@adamdoyle.dev"},Le=function(e){return o.a.createElement("div",{id:"contact",style:Ce.getInTouch[e.screenSize]},o.a.createElement("div",{style:Ce.header},je.HEADER),o.a.createElement("div",{style:Ce.subHeader},je.SUB_HEADER),o.a.createElement("div",{style:Ce.contact},o.a.createElement("a",{style:Ce.link,href:"mailto:hello@adamdoyle.dev",target:"_blank",rel:"noopener noreferrer"},"hello@adamdoyle.dev")))},Te=function(e){function t(){return Object(C.a)(this,t),Object(L.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return o.a.createElement(Le,{screenSize:this.props.screenSize})}}]),t}(r.Component),ze=Object(l.b)(function(e){return{screenSize:e.screenSize}})(Te),Ae=(n(5468),function(e){function t(){var e,n;Object(C.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(L.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){n.resize(),window.addEventListener("resize",n.resize)},n.resize=function(){n.props.setScreenSize(window.innerWidth)},n.scrollToMyRef=function(e){if(e){var t=document.getElementById(e),n=document.body.getBoundingClientRect().top,r=t.getBoundingClientRect().top-n-100;window.scrollTo({top:r,behavior:"smooth"})}},n}return Object(z.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(q,{scrollToMyRef:this.scrollToMyRef}),o.a.createElement(ie,{screenSize:this.props.screenSize,scrollToMyRef:this.scrollToMyRef}),o.a.createElement(de,null),o.a.createElement(ke,null),o.a.createElement(ze,null))}}]),t}(r.Component)),Ie=Object(l.b)(function(e){return{screenSize:e.screenSize}},function(e){return Object(c.b)({setScreenSize:s},e)})(Ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=n(96),Be=Object(c.d)(O,Object(c.a)(Re.a));a.a.render(o.a.createElement(l.a,{store:Be},o.a.createElement(S.a,{basename:"/adam_doyle"},o.a.createElement("div",null,o.a.createElement(k.a,{exact:!0,path:"/",component:Ie})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},94:function(e,t,n){e.exports=n.p+"static/media/logo.f76691f5.svg"},95:function(e,t,n){e.exports=n.p+"static/media/Adam_Doyle_img.8a0f871b.jpg"}},[[5316,2,1]]]);
//# sourceMappingURL=main.43f3d230.chunk.js.map