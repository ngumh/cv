(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[5],{42:function(e){e.exports=JSON.parse('{"basics":{"name":"Mai H\u1ed3ng Ng\u1ef1","label":"Software Engineer","picture":"images/clooneymai.JPG","x_title":"Hey There! Glad you\'re here","summary":"Currently I\u2019m working as an Intern developer exploring React world. I\u2019m interested in service management and developing front-end and back-end applications.","location":{"country":"Vietnam","countryCode":"VIE","region":"Ho Chi Minh City"},"profiles":[{"socialmedia":"LinkedIn","urlSocialMedia":"https://www.linkedin.com/in/ng%E1%BB%B1-mai-h%E1%BB%93ng-09bb71156/","x_icon":"fab fa-2x fa-linkedin"},{"socialmedia":"Facebook","urlSocialMedia":"https://www.facebook.com/chlove3004","x_icon":"fab fa-2x fa-facebook"},{"socialmedia":"Instagram","urlSocialMedia":"https://www.instagram.com/_tesoroo/","x_icon":"fab fa-2x fa-instagram"}]},"interests":[{"name":"Travel","x_icon":"fa-globe-africa"},{"name":"Cat lover","x_icon":"fa-cat"},{"name":"Waffle","x_icon":"fa-utensils"},{"name":"Boulevardier","x_icon":"fa-cocktail"}],"skills":[{"name":"HTML","level":90,"keywords":["Front End"]},{"name":"CSS","level":90,"keywords":["Front End"]},{"name":"Javascript","level":90,"keywords":["Front End"]},{"name":"Jquery","level":85,"keywords":["Front End"]},{"name":"Bootstrap 4","level":80,"keywords":["Front End"]},{"name":"Bulma","level":80,"keywords":["Front End"]},{"name":"React","level":85,"keywords":["Front End"]},{"name":"Ruby On Rails","level":85,"keywords":["Back End"]},{"name":"Node JS","level":80,"keywords":["Back End"]},{"name":"REST API","level":80,"keywords":["Back End"]},{"name":"SQL","level":80,"keywords":["Back End"]},{"name":"Java","level":75,"keywords":["Back End"]},{"name":"Git","level":75,"keywords":["Back End"]},{"name":"NoSQL","level":65,"keywords":["Back End"]}],"work":[{"company":"","position":"Freelancer","website":"","startDate":"2020-02-14","endDate":"","summary":"Unemployeed","highlights":[]},{"company":"IMT Solutions","position":"Part Time","website":"https://www.imt-soft.com/","startDate":"2019-10-15","endDate":"","summary":"Joined the PO Tool Project","highlights":[]}],"languages":[{"language":"English","fluency":"Fluent speaker","ielts":"6.5"},{"language":"Vietnamese","fluency":"Native speaker"}]}')},53:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n);var r=function(e){var a="fas fa-1x "+e.faIcon;return s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"tags has-addons"},s.a.createElement("span",{className:"tag is-dark"},e.text),s.a.createElement("span",{className:"tag is-success"},s.a.createElement("i",{className:a}))))};function l(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,s=!1,r=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(t.push(l.value),!a||t.length!==a);n=!0);}catch(c){s=!0,r=c}finally{try{n||null==i.return||i.return()}finally{if(s)throw r}}return t}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=function(e){var a="fas fa-1x "+e.faIcon,t=l(s.a.useState({width:window.innerWidth}),2),n=t[0],r=t[1];return s.a.useEffect((function(){function e(){r({width:window.innerWidth})}return window.addEventListener("resize",e),function(a){window.removeEventListener("resize",e)}})),s.a.createElement("div",{className:"control"},s.a.createElement("a",{href:e.url,target:"blank",className:"is-hovered",title:e.text},s.a.createElement("div",{className:"tags has-addons"},n.width>417?s.a.createElement("span",{className:"tag is-dark"},e.text):"",s.a.createElement("span",{className:"tag"},s.a.createElement("i",{className:a})))))},c=t(42);var m=function(){return s.a.createElement("section",{className:"section has-background-black-ter",id:"aboutMe"},s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement("p",{className:"subtitle is-4 has-text-white has-text-weight-bold"},c.basics.x_title),s.a.createElement("figure",{className:"image container is-128x128",style:{marginBottom:"10px"}},s.a.createElement("img",{src:c.basics.picture,alt:c.basics.name,className:"is-rounded"})),s.a.createElement("div",{className:"container interests"},s.a.createElement("div",{className:"field is-grouped is-grouped-multiline has-text-centered socialMedia"},c.basics.profiles.map((function(e,a){return s.a.createElement(i,{key:a,text:e.socialmedia,url:e.urlSocialMedia,faIcon:e.x_icon})})))),s.a.createElement("p",{className:"subtitle is-5 has-text-white has-text-weight-light summary-text"},c.basics.summary),s.a.createElement("div",{className:"container interests"},s.a.createElement("div",{className:"field is-grouped is-grouped-multiline has-text-centered"},c.interests.map((function(e,a){return s.a.createElement(r,{key:a,text:e.name,faIcon:e.x_icon})}))))))};var o=function(e){return s.a.createElement("div",null,s.a.createElement("span",{className:"title is-5 has-text-white"},e.text),s.a.createElement("span",{className:"subtitle is-6 has-text-white skill-percentage"},e.percentage,"%"),s.a.createElement("progress",{className:"progress is-success",value:e.percentage,max:"100"},e.percentage,"%"))};var u=function(e){var a=e.skills;return s.a.createElement("ul",{className:"skill-list"},function(e){var a=[],t=0;return Object.entries(e).forEach((function(e){var n=l(e,2),r=n[0],i=n[1];a.push(s.a.createElement("li",{key:t},s.a.createElement(o,{key:t,text:r,percentage:i}))),t++})),a}(a))};var d=function(){return s.a.createElement("section",{className:"section has-background-dark",id:"skills"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title has-text-white"},"Skills"),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6"},s.a.createElement("div",{className:"has-text-centered"},s.a.createElement("span",{className:"icon has-text-white"},s.a.createElement("i",{className:"fas fa-3x fa-code"})),s.a.createElement("h2",{className:"title is-5 has-text-white"},"Front End")),s.a.createElement(u,{skills:c.skills.filter((function(e){return e.keywords.includes("Front End")})).reduce((function(e,a){return e[a.name]=a.level,e}),{})})),s.a.createElement("div",{className:"column is-6"},s.a.createElement("div",{className:"has-text-centered"},s.a.createElement("span",{className:"icon has-text-white"},s.a.createElement("i",{className:"fas fa-3x fa-laptop-code"})),s.a.createElement("h2",{className:"title is-5 has-text-white"},"Back End")),s.a.createElement(u,{skills:c.skills.filter((function(e){return e.keywords.includes("Back End")})).reduce((function(e,a){return e[a.name]=a.level,e}),{})})))))};var E=function(e){return s.a.createElement("div",{className:"timeline-item is-success"},s.a.createElement("div",{className:"timeline-marker is-image is-32x32"},s.a.createElement("img",{src:"",alt:""})),s.a.createElement("div",{className:"timeline-content"},s.a.createElement("p",{className:"heading"},e.date),s.a.createElement("p",{className:"heading"},e.position),s.a.createElement("h1",{className:"title is-4 has-text-white"},e.company),s.a.createElement("p",{style:{maxWidth:"25em"}},e.summary)))};var h=function(){return s.a.createElement("div",{className:"timeline is-centered"},s.a.createElement("header",{className:"timeline-header"},s.a.createElement("span",{className:"tag is-medium is-dark"},(new Date).getFullYear())),s.a.createElement("div",{className:"timeline-item"},s.a.createElement("div",{className:"timeline-marker is-success"}),s.a.createElement("div",{className:"timeline-content"})),c.work.map((function(e){return new Date(e.startDate).getFullYear()})).map((function(e,a){var t=[];return t.push(s.a.createElement("header",{key:a,className:"timeline-header"},s.a.createElement("span",{className:"tag is-success"},e))),t.push(c.work.filter((function(a){return new Date(a.startDate).getFullYear()===e})).map((function(e,a){return s.a.createElement(E,{key:a,date:new Date(e.startDate).toLocaleString("en-UK",{month:"long",year:"numeric"}),position:e.position,company:e.company,summary:e.summary})}))),t})))};var f=function(){return s.a.createElement("section",{className:"section has-background-grey-dark",id:"experience"},s.a.createElement("div",{className:"container has-text-white"},s.a.createElement("h1",{className:"title has-text-white"},"Experiences"),s.a.createElement(h,null)))};var v=function(e){return s.a.createElement("li",null,e.lang," : ",e.fluency," ",s.a.createElement("br",null),e.ielts?"IELTS : "+e.ielts:"",s.a.createElement("hr",null))};var p=function(){return s.a.createElement("section",{className:"section has-background-dark"},s.a.createElement("div",{className:"container has-text-white"},s.a.createElement("h1",{className:"title has-text-white"},"Foreign Language"),s.a.createElement("ul",null,c.languages.map((function(e,a){return s.a.createElement(v,{key:a,lang:e.language,fluency:e.fluency,ielts:e.ielts})})))))};a.default=function(){return s.a.createElement("main",null,s.a.createElement(m,null),s.a.createElement(d,null),s.a.createElement(p,null),s.a.createElement(f,null))}}}]);
//# sourceMappingURL=5.0e0c09b1.chunk.js.map