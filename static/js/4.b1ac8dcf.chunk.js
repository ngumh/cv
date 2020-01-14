(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[4],{42:function(e){e.exports=JSON.parse('{"basics":{"name":"Mai H\u1ed3ng Ng\u1ef1","label":"Software Engineer","picture":"images/clooneymai.JPG","x_title":"Hey There! Glad you\'re here","summary":"Currently I\u2019m working as an Intern developer exploring React world. I\u2019m interested in service management and developing front-end and back-end applications.","location":{"country":"Vietnam","countryCode":"VIE","region":"Ho Chi Minh City"},"profiles":[{"socialmedia":"LinkedIn","urlSocialMedia":"https://www.linkedin.com/in/ng%E1%BB%B1-mai-h%E1%BB%93ng-09bb71156/","x_icon":"fab fa-2x fa-linkedin"},{"socialmedia":"Facebook","urlSocialMedia":"https://www.facebook.com/chlove3004","x_icon":"fab fa-2x fa-facebook"},{"socialmedia":"Instagram","urlSocialMedia":"https://www.instagram.com/_tesoroo/","x_icon":"fab fa-2x fa-instagram"}]},"interests":[{"name":"Travel","x_icon":"fa-globe-africa"},{"name":"Cat lover","x_icon":"fa-cat"},{"name":"Waffle","x_icon":"fa-utensils"},{"name":"Boulevardier","x_icon":"fa-cocktail"}],"skills":[{"name":"HTML5 / CSS3","level":90,"keywords":["Front End"]},{"name":"React / Redux","level":85,"keywords":["Front End"]},{"name":"SCSS / jQuery / Responsive Web","level":85,"keywords":["Front End"]},{"name":"Javascript / ES6","level":85,"keywords":["Front End"]},{"name":"React Native","level":85,"keywords":["Other Skills"]},{"name":"Ruby On Rails","level":85,"keywords":["Back End"]},{"name":"Node JS","level":80,"keywords":["Back End"]},{"name":"SQL","level":80,"keywords":["Back End"]},{"name":"Java","level":75,"keywords":["Back End"]},{"name":"Git","level":75,"keywords":["Other Skills"]},{"name":"Linux","level":75,"keywords":["Other Skills"]}],"work":[{"company":"IMT Solutions","position":"Part Time","website":"https://www.imt-soft.com/","startDate":"2019-09-24","endDate":"","summary":"Joined the PO Tool Project","highlights":[]}],"languages":[{"language":"English","fluency":"Fluent speaker","ielts":"6.5"},{"language":"Vietnamese","fluency":"Native speaker"}]}')},51:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(43),i=t(44),r=t(47),c=t(46),o=t(45),m=t(48);var u=function(e){return s.a.createElement("a",{href:e.href,className:"navbar-item is-unselectable has-text-black"},e.text)},h=t(42),d=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).state={showMenu:!1},t.handleMenuClick=t.handleMenuClick.bind(Object(o.a)(t)),t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"handleMenuClick",value:function(e){var a=this.state.showMenu;this.setState({showMenu:!a})}},{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar is-transparent"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("a",{href:"/cv",className:"navbar-item is-unselectable has-text-white"},h.basics.name),s.a.createElement("span",{className:"navbar-burger burger has-text-white",onClick:this.handleMenuClick},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{className:" navbar-menu nav-menu "+(this.state.showMenu?"is-active":null)},s.a.createElement("div",{className:"navbar-end ",onClick:this.handleMenuClick},s.a.createElement(u,{text:"About Me",href:"#aboutMe"}),s.a.createElement(u,{text:"Skills",href:"#skills"}),s.a.createElement(u,{text:"Experience",href:"#experience"})))))}}]),a}(s.a.Component);var v=function(){return s.a.createElement("section",{className:"hero is-fullheight has-bg-image"},s.a.createElement("div",{className:"hero-head"},s.a.createElement(d,null)),s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("p",{className:"subtitle is-5 has-text-white"},"I'm a"),s.a.createElement("h1",{className:"title has-text-white"},h.basics.label),s.a.createElement("h2",{className:"subtitle has-text-white"},h.basics.location.region,", ",h.basics.location.country))))},b=t(49),f=t.n(b),w=(t(51),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(s)))).state={days:void 0,hours:void 0,minutes:void 0,seconds:void 0},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var a=f()("01 24 2020, 00:00 ","M DD YYYY, h:mm a"),t=f()(),n=f()(a-t),s=n.format("D"),l=n.format("HH"),i=n.format("mm"),r=n.format("ss");e.setState({days:s,hours:l,minutes:i,seconds:r})}),1e3)}},{key:"componentWillMount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,a=e.days,t=e.hours,n=e.minutes,l=e.seconds;return s.a.createElement("div",{className:"has-background-dark section"},s.a.createElement("h1",{className:"has-text-white has-text-centered is-uppercase"},"S\u1eafp \u0110\u1ebfn T\u1ebft R\u1ed3i"),s.a.createElement("div",{className:"countdown-wrapper"},s.a.createElement("div",{className:"countdown-item"},a,s.a.createElement("span",{className:"has-text-white"},"Ng\xe0y")),s.a.createElement("div",{className:"countdown-item"},t,s.a.createElement("span",{className:"has-text-white"},"Gi\u1edd")),s.a.createElement("div",{className:"countdown-item"},n,s.a.createElement("span",{className:"has-text-white"},"Ph\xfat")),s.a.createElement("div",{className:"countdown-item"},l,s.a.createElement("span",{className:"has-text-white"},"Gi\xe2y"))))}}]),a}(s.a.Component));a.default=function(){return s.a.createElement("header",{id:"header"},s.a.createElement(v,null),s.a.createElement(w,null))}}}]);
//# sourceMappingURL=4.b1ac8dcf.chunk.js.map