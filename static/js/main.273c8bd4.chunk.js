(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],{17:function(e,a,t){e.exports=t(49)},22:function(e,a,t){},3:function(e){e.exports=JSON.parse('{"basics":{"name":"Mai H\u1ed3ng Ng\u1ef1","label":"Software Engineer","picture":"images/clooneymai.JPG","x_title":"Hey There! Glad you\'re here","summary":"Currently I\u2019m working as an Intern developer exploring React world. I\u2019m interested in service management and developing front-end and back-end applications.","location":{"country":"Vietnam","countryCode":"VIE","region":"Ho Chi Minh City"},"profiles":[{"socialmedia":"LinkedIn","urlSocialMedia":"https://www.linkedin.com/in/ng%E1%BB%B1-mai-h%E1%BB%93ng-09bb71156/","x_icon":"fab fa-2x fa-linkedin"},{"socialmedia":"Facebook","urlSocialMedia":"https://www.facebook.com/chlove3004","x_icon":"fab fa-2x fa-facebook"},{"socialmedia":"Instagram","urlSocialMedia":"https://www.instagram.com/_tesoroo/","x_icon":"fab fa-2x fa-instagram"}]},"interests":[{"name":"Travel","x_icon":"fa-globe-africa"},{"name":"Cat lover","x_icon":"fa-dog"},{"name":"Pork Buns","x_icon":"fa-utensils"},{"name":"Big Brain","x_icon":"fa-brain"}],"skills":[{"name":"HTML","level":90,"keywords":["Front End"]},{"name":"CSS","level":90,"keywords":["Front End"]},{"name":"Javascript","level":90,"keywords":["Front End"]},{"name":"Jquery","level":85,"keywords":["Front End"]},{"name":"Bootstrap 4","level":80,"keywords":["Front End"]},{"name":"Bulma","level":80,"keywords":["Front End"]},{"name":"React","level":85,"keywords":["Front End"]},{"name":"Ruby On Rails","level":85,"keywords":["Back End"]},{"name":"Node JS","level":80,"keywords":["Back End"]},{"name":"REST API","level":80,"keywords":["Back End"]},{"name":"SQL","level":80,"keywords":["Back End"]},{"name":"Java","level":75,"keywords":["Back End"]},{"name":"Git","level":75,"keywords":["Back End"]},{"name":"NoSQL","level":65,"keywords":["Back End"]}],"work":[{"company":"IMT Solutions","position":"Intern","website":"https://www.imt-soft.com/","startDate":"2019-10-15","endDate":"","summary":"Joined the PO Tool Project","highlights":[]}],"languages":[{"language":"English","fluency":"Fluent speaker","ielts":"6.5"},{"language":"Vietnamese","fluency":"Native speaker"}]}')},47:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(8),r=t.n(l),c=(t(22),t(9)),i=t(5),m=t(10),o=t(11),u=t(15),d=t(12),E=t(4),h=t(16);var f=function(e){return s.a.createElement("a",{href:e.href,className:"navbar-item is-unselectable has-text-black"},e.text)},v=t(3),g=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={showMenu:!1},t.handleMenuClick=t.handleMenuClick.bind(Object(E.a)(t)),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"handleMenuClick",value:function(e){var a=this.state.showMenu;this.setState({showMenu:!a})}},{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar is-transparent"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("a",{href:"/cv",className:"navbar-item is-unselectable has-text-white"},v.basics.name),s.a.createElement("span",{className:"navbar-burger burger has-text-white",onClick:this.handleMenuClick},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{className:" navbar-menu nav-menu "+(this.state.showMenu?"is-active":null)},s.a.createElement("div",{className:"navbar-end ",onClick:this.handleMenuClick},s.a.createElement(f,{text:"About Me",href:"#aboutMe"}),s.a.createElement(f,{text:"Skills",href:"#skills"}),s.a.createElement(f,{text:"Experience",href:"#experience"})))))}}]),a}(s.a.Component);var p=function(){return s.a.createElement("section",{className:"hero is-fullheight has-bg-image"},s.a.createElement("div",{className:"hero-head"},s.a.createElement(g,null)),s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("p",{className:"subtitle is-5 has-text-white"},"I'm a"),s.a.createElement("h1",{className:"title has-text-white"},v.basics.label),s.a.createElement("h2",{className:"subtitle has-text-white"},v.basics.location.region,", ",v.basics.location.country))))};var k=function(){return s.a.createElement("header",{id:"header"},s.a.createElement(p,null))};var N=function(e){var a="fas fa-1x "+e.faIcon;return s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"tags has-addons"},s.a.createElement("span",{className:"tag is-dark"},e.text),s.a.createElement("span",{className:"tag is-success"},s.a.createElement("i",{className:a}))))};var w=function(e){var a="fas fa-1x "+e.faIcon;return s.a.createElement("div",{className:"control"},s.a.createElement("a",{href:e.url,target:"blank",className:"is-hovered",title:e.text},s.a.createElement("div",{className:"tags has-addons"},s.a.createElement("span",{className:"tag is-dark"},e.text),s.a.createElement("span",{className:"tag"},s.a.createElement("i",{className:a})))))};var b=function(){return s.a.createElement("section",{className:"section has-background-black-ter",id:"aboutMe"},s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement("p",{className:"subtitle is-4 has-text-white has-text-weight-bold"},v.basics.x_title),s.a.createElement("figure",{className:"image container is-128x128",style:{marginBottom:"10px"}},s.a.createElement("img",{src:v.basics.picture,alt:v.basics.name,className:"is-rounded"})),s.a.createElement("div",{className:"container interests"},s.a.createElement("div",{className:"field is-grouped is-grouped-multiline has-text-centered socialMedia"},v.basics.profiles.map((function(e,a){return s.a.createElement(w,{key:a,text:e.socialmedia,url:e.urlSocialMedia,faIcon:e.x_icon})})))),s.a.createElement("p",{className:"subtitle is-5 has-text-white has-text-weight-light summary-text"},v.basics.summary),s.a.createElement("div",{className:"container interests"},s.a.createElement("div",{className:"field is-grouped is-grouped-multiline has-text-centered"},v.interests.map((function(e,a){return s.a.createElement(N,{key:a,text:e.name,faIcon:e.x_icon})}))))))};var x=function(e){return s.a.createElement("div",null,s.a.createElement("span",{className:"title is-5 has-text-white"},e.text),s.a.createElement("span",{className:"subtitle is-6 has-text-white skill-percentage"},e.percentage,"%"),s.a.createElement("progress",{className:"progress is-success",value:e.percentage,max:"100"},e.percentage,"%"))};var y=function(e){var a=e.skills;return s.a.createElement("ul",{className:"skill-list"},function(e){var a=[],t=0;return Object.entries(e).forEach((function(e){var n=Object(i.a)(e,2),l=n[0],r=n[1];a.push(s.a.createElement("li",{key:t},s.a.createElement(x,{key:t,text:l,percentage:r}))),t++})),a}(a))};var B=function(){return s.a.createElement("section",{className:"section has-background-dark",id:"skills"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title has-text-white"},"Skills"),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6"},s.a.createElement("div",{className:"has-text-centered"},s.a.createElement("span",{className:"icon has-text-white"},s.a.createElement("i",{className:"fas fa-3x fa-code"})),s.a.createElement("h2",{className:"title is-5 has-text-white"},"Front End")),s.a.createElement(y,{skills:v.skills.filter((function(e){return e.keywords.includes("Front End")})).reduce((function(e,a){return e[a.name]=a.level,e}),{})})),s.a.createElement("div",{className:"column is-6"},s.a.createElement("div",{className:"has-text-centered"},s.a.createElement("span",{className:"icon has-text-white"},s.a.createElement("i",{className:"fas fa-3x fa-laptop-code"})),s.a.createElement("h2",{className:"title is-5 has-text-white"},"Back End")),s.a.createElement(y,{skills:v.skills.filter((function(e){return e.keywords.includes("Back End")})).reduce((function(e,a){return e[a.name]=a.level,e}),{})})))))};var M=function(e){return s.a.createElement("div",{className:"timeline-item is-success"},s.a.createElement("div",{className:"timeline-marker is-image is-32x32"},s.a.createElement("img",{src:"",alt:""})),s.a.createElement("div",{className:"timeline-content"},s.a.createElement("p",{className:"heading"},e.date),s.a.createElement("p",{className:"heading"},e.position),s.a.createElement("h1",{className:"title is-4 has-text-white"},e.company),s.a.createElement("p",{style:{maxWidth:"25em"}},e.summary)))};var S=function(){return s.a.createElement("div",{className:"timeline is-centered"},s.a.createElement("header",{className:"timeline-header"},s.a.createElement("span",{className:"tag is-medium is-dark"},(new Date).getFullYear())),s.a.createElement("div",{className:"timeline-item"},s.a.createElement("div",{className:"timeline-marker is-success"}),s.a.createElement("div",{className:"timeline-content"})),v.work.map((function(e){return new Date(e.startDate).getFullYear()})).map((function(e,a){var t=[];return t.push(s.a.createElement("header",{key:a,className:"timeline-header"},s.a.createElement("span",{className:"tag is-success"},e))),t.push(v.work.filter((function(a){return new Date(a.startDate).getFullYear()===e})).map((function(e,a){return s.a.createElement(M,{key:a,date:new Date(e.startDate).toLocaleString("en-UK",{month:"long",year:"numeric"}),position:e.position,company:e.company,summary:e.summary})}))),t})))};var F=function(){return s.a.createElement("section",{className:"section has-background-grey-dark",id:"experience"},s.a.createElement("div",{className:"container has-text-white"},s.a.createElement("h1",{className:"title has-text-white"},"Experience"),s.a.createElement(S,null)))};var I=function(e){return s.a.createElement("li",null,e.lang," : ",e.fluency," ",s.a.createElement("br",null),e.ielts?"IELTS : "+e.ielts:"",s.a.createElement("hr",null))};var C=function(){return s.a.createElement("section",{className:"section has-background-dark"},s.a.createElement("div",{className:"container has-text-white"},s.a.createElement("h1",{className:"title has-text-white"},"Foreign Language"),s.a.createElement("ul",null,v.languages.map((function(e,a){return s.a.createElement(I,{key:a,lang:e.language,fluency:e.fluency,ielts:e.ielts})})))))};var O=function(){return s.a.createElement("main",null,s.a.createElement(b,null),s.a.createElement(B,null),s.a.createElement(C,null),s.a.createElement(F,null))};var j=function(){return s.a.createElement("footer",{className:"footer has-background-dark"},s.a.createElement("div",{className:"content has-text-centered has-text-white"},s.a.createElement("i",null,s.a.createElement("sup",null,s.a.createElement("i",{className:"fas fa-quote-left"})),"Success is not an accident, success is actually a choice.",s.a.createElement("sup",null,s.a.createElement("i",{className:"fas fa-quote-right"})),"\xa0 ",s.a.createElement("sub",null,"- \xa0Stephen Curry")),s.a.createElement("p",{class:"has-text-grey-light"},"\xa9 ",(new Date).getFullYear()," Mai Hong Ngu")))},_=t(1),D=t(14);t(47),t(48);function J(){var e=Object(c.a)(["\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  "]);return J=function(){return e},e}var L=function(){var e=s.a.useState(!0),a=Object(i.a)(e,2),t=a[0],n=a[1],l=Object(_.css)(J());return s.a.useEffect((function(){setTimeout((function(){return n(!1)}),2500)})),s.a.createElement("div",null,t?s.a.createElement(D.HashLoader,{css:l,size:"100px",color:"#e4d00a",loading:n}):s.a.createElement("div",null,s.a.createElement(k,null),s.a.createElement(O,null),s.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.273c8bd4.chunk.js.map