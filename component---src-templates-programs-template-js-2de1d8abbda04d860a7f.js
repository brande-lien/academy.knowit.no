(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{172:function(e,a,t){"use strict";t.r(a);t(94);var n=t(0),r=t.n(n),l=t(176),c=t(183),o=t(181),m=t(182),i=t.n(m),s=t(165),u=t.n(s),d=function(e){var a=e.data.frontmatter,t=a.title,n=a.author,l=a.email,c=a.updated,m=i()(c).format("LL");return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t),r.a.createElement("div",{className:u.a.blogHeader},r.a.createElement(o.a,{name:"access_time"}),r.a.createElement("span",{className:u.a.byline},"Oppdatert ",m," av ",r.a.createElement("a",{href:"mailto:"+l},n))))},p=t(177),g=t.n(p),E=t(166),f=t.n(E);t.d(a,"pageQuery",function(){return h});a.default=function(e){var a=e.data,t=a.markdownRemark,n=t.frontmatter,o=t.html,m=function(){return n.path.match(/\/courses/)?r.a.createElement(c.a,{data:t}):r.a.createElement(d,{data:t})};return console.log("should show info header:",n.path,m),r.a.createElement(l.a,{data:a},r.a.createElement(g.a,null,r.a.createElement("title",null,n.title),r.a.createElement("meta",{name:"description",content:n.description}),r.a.createElement("meta",{property:"og:title",content:n.title}),r.a.createElement("meta",{property:"og:description",content:n.description})),r.a.createElement("section",null,r.a.createElement("div",{className:f.a.content},m(),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}}))))};var h="3424177549"},174:function(e,a,t){"use strict";a.a={knowit:{green:["rgb(0, 89, 79)","rgb(0, 150, 130)","rgb(160, 209, 202)","rgb(201, 226, 224)"],purple:["rgb(97, 75, 121)","rgb(142, 127, 174)","rgb(182, 184, 220)","rgb(222, 225, 236)"],blue:["rgb(40, 51, 74)","rgb(87, 114, 139)","rgb(158, 181, 203)","rgb(214, 225, 236)"],yellow:["rgb(207, 176, 35)","rgb(249, 226, 103)","rgb(242, 240, 161)","rgb(238, 238, 200)"],red:["rgb(194, 110, 96)","rgb(234, 167, 148)","rgb(236, 195, 178)","rgb(243, 233, 226)"],gray:["rgb(117, 120, 123)","rgb(177, 179, 179)","rgb(208, 208, 206)","rgb(228, 226, 219)"]}}},175:function(e){e.exports={a:"0.6.0"}},176:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(173),c=t(177),o=t.n(c),m=function(e){var a=e.metadata;return r.a.createElement(o.a,null,r.a.createElement("title",null,a.title),r.a.createElement("meta",{name:"description",content:a.description}),r.a.createElement("meta",{name:"keywords",content:"Knowit, Knowit Academy, Knowit Academy Norway, Recruitment, Personal Development, Career Path"}),r.a.createElement("meta",{property:"og:title",content:a.title}),r.a.createElement("meta",{property:"og:description",content:a.description}),r.a.createElement("meta",{property:"og:url",content:a.siteUrl}),r.a.createElement("meta",{property:"og:image",content:a.ogImage}),r.a.createElement("link",{rel:"canonical",href:"https://academy.knowit.no/"}),r.a.createElement("html",{lang:"nb"}))},i=t(8),s=t.n(i),u=t(159),d=t.n(u),p=function(e){function a(){return e.apply(this,arguments)||this}return s()(a,e),a.prototype.render=function(){return r.a.createElement("a",{className:d.a.logoWrapper,href:"/"},r.a.createElement("img",{className:d.a.logoStyle,alt:"Knowit Academy Logo",src:"/assets/knowit_academy_logo.png"}))},a}(n.Component),g=t(160),E=t.n(g),f=function(){return r.a.createElement("header",{className:E.a.academyFrontHeader},r.a.createElement(p,null),r.a.createElement("nav",{className:E.a.academyHeaderMenu},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/#about"},"Om Knowit Academy")),r.a.createElement("li",null,r.a.createElement("a",{href:"/#theprograms"},"Programmene")),r.a.createElement("li",null,r.a.createElement("a",{href:"/how-to-apply"},"Påmelding")))))},h=t(174),y=t(175),b=t(161),v=t.n(b),w=function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("span",{className:v.a.version},"v",y.a))},k=l.a.div.withConfig({displayName:"AcademyFooter__Wrapper",componentId:"vya30l-0"})(["display:flex;flex-grow:1;justify-content:center;width:100%;padding:0;margin:0 auto;background-color:",";border-top:1px solid ",";"],h.a.knowit.green[3],h.a.knowit.green[1]),x=l.a.footer.withConfig({displayName:"AcademyFooter__Footer",componentId:"vya30l-1"})(["display:flex;padding:12px 1.4rem;align-items:center;max-width:960px;width:960px;& > *:not(:first-child){margin-left:0.8rem;}div{display:inline-block;font-size:calc(0.2em + 0.6em);font-weight:200;color:black;}img{width:auto;height:56px;}a{color:",";font-weight:600;text-decoration:none;}a:hover{text-decoration:underline;}"],h.a.knowit.green[0]),N=function(){return r.a.createElement(k,null,r.a.createElement(x,null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"/assets/knowit_academy_box_logo.png",alt:"Knowit Academy Logo"})),r.a.createElement("div",null,"Har du spørsmål om Knowit Academy? Send en epost til"," ",r.a.createElement("a",{href:"mailto:academy@knowit.no"},"academy@knowit.no")," så svarer vi så snart vi rekker.",r.a.createElement(w,null))))},_=l.a.div.withConfig({displayName:"FrontLayout__FrontPage",componentId:"sc-10ptwgi-0"})(["height:100%;background-color:white;display:flex;flex-direction:column;align-items:center;justify-items:center;margin:auto;main{flex-grow:1;display:flex;justify-content:flex-start;flex-direction:column;margin:0;}"]);a.a=function(e){var a=e.children,t=e.data;return r.a.createElement(_,null,r.a.createElement(m,{metadata:t}),r.a.createElement(f,{data:t}),r.a.createElement("main",null,a),r.a.createElement(N,null))}},181:function(e,a,t){"use strict";t(180);var n=t(0),r=t.n(n),l=t(163),c=t.n(l);a.a=function(e){var a=e.name;return r.a.createElement("span",{alt:a,title:a,className:c.a.iconStyle},a)}},183:function(e,a,t){"use strict";t(94),t(180);var n=t(0),r=t.n(n),l=t(181),c=t(182),o=t.n(c),m=(t(185),t(164)),i=t.n(m),s=function(e){var a=e.startDate,t=e.endDate;return r.a.createElement("div",null,r.a.createElement(l.a,{name:"date_range"}),r.a.createElement("span",{className:i.a.labels},function(e,a){var t=o()(e),n=o()(a);if(!1===o()(t).isValid)return"TBD";var r=t.format("D MMM");return n.isValid()&&(r+=" - "+n.format("D MMM")),r+=" "+t.format("YYYY")}(a,t)))},u=function(e){var a=e.name;return r.a.createElement("div",null,r.a.createElement(l.a,{name:"face"}),r.a.createElement("span",{className:i.a.labels},a))},d=function(e){var a=e.author,t=e.email;return t||(t="academy.knowit.no"),r.a.createElement(r.a.Fragment,null,"av ",r.a.createElement("a",{href:"mailto:"+t},a))},p=function(e){var a=e.date,t=e.path,n=e.author,c=e.email,m=t.match(/\/courses/)?"":r.a.createElement(d,{author:n,email:c});return r.a.createElement("div",null,r.a.createElement(l.a,{name:"access_time"}),r.a.createElement("span",{className:i.a.labels},"Oppdatert ",o()(a).format("LL")," ",m))},g=function(e){var a=e.url;e.teacher;return r.a.createElement("div",{className:i.a.pictureWrapper,style:{backgroundImage:"url("+a+")",backgroundClip:"padding-box",backgroundPosition:"50% 30%",backgroundSize:"cover",backgroundRepeat:"no-repeat"}})};a.a=function(e){var a=e.data.frontmatter,t=a.path.match(/\/courses/)?r.a.createElement(s,{startDate:a.date,endDate:a.endDate}):"",n=a.path.match(/\/courses/)?r.a.createElement(u,{name:a.teacher}):"",l=a.path.match(/\/courses/)?r.a.createElement(g,{url:a.image,teacher:a.teacher}):"";return r.a.createElement("div",{className:i.a.infoHeader},r.a.createElement("div",{className:i.a.infoBox},r.a.createElement("h1",null,a.title),r.a.createElement("div",{className:i.a.byline},t,n,r.a.createElement(p,{date:a.updated,path:a.path,author:a.author,email:a.email}))),l)}}}]);
//# sourceMappingURL=component---src-templates-programs-template-js-2de1d8abbda04d860a7f.js.map