(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+xpN":function(t,e,n){t.exports={programOverview:"ProgramOverview-module--programOverview--2lsJw"}},"1zWx":function(t,e,n){t.exports={defaultButton:"Button-module--defaultButton--1kVfR"}},"24WQ":function(t,e,n){t.exports={signUpTitle:"SignupSection-module--signUpTitle--3_36K",signupButton:"SignupSection-module--signupButton--22wTV",signupSection:"SignupSection-module--signupSection--37m3K"}},A7T9:function(t,e,n){t.exports={courseInfoSection:"programpage-module--courseInfoSection--q8XZ8",aboutProgram:"programpage-module--aboutProgram--3NxGb"}},NVOB:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("ThPt"),u=n("24WQ"),c=n.n(u);e.a=function(){return r.a.createElement("section",{className:c.a.signupSection,id:"signup"},r.a.createElement("h2",{className:c.a.signUpTitle},"Påmelding"),r.a.createElement("p",null,"Påmeldingen har startet."," ",r.a.createElement("b",null,"søknadsfrist er mandag 2. september, 2019"),"."),r.a.createElement(o.a,{link:"/application-form",alt:"Information about how to apply",className:c.a.signupButton},"Søknadsskjema"),r.a.createElement("a",{class:"link",href:"/how-to-apply"},"Les mer om søknadsprosessen"))}},SYzQ:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),o=n("YYvG");e.default=function(){return r.a.createElement(o.a,{program:"tech-lead"})}},ThPt:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("1zWx"),u=n.n(o);e.a=function(t){var e=t.link,n=t.alt,a=t.style,o=t.className,c=t.children,i=void 0===o?u.a.defaultButton:o;return r.a.createElement("a",{href:e,className:i,style:a,role:"button",alt:n},c)}},YYvG:function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(t,e,n){return(o=r()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}var u=n("KQm4"),c=n("q1tI"),i=n.n(c),l=n("h5lK"),s=n("lkJS"),m=n("NVOB"),p=n("EW8U"),f=n("+xpN"),d=n.n(f),g=function(t){var e=t.courses,n=t.title,a=e.map((function(t){var e=t.node,n=t.node.frontmatter;return i.a.createElement(p.a,{data:e,key:n.path,showDescription:!0})}));return i.a.createElement("div",{className:d.a.programOverview},i.a.createElement("h2",null,n),a)},h=n("Wbzz"),v=function(){return Object(h.b)("3392641262")},w=n("A7T9"),E=n.n(w);e.a=function(t){var e=t.program,n=v(),a=new RegExp("^/programs/about-"+e),r=new RegExp("^/courses/"+e),c=n.allMarkdownRemark.edges.find((function(t){return t.node.frontmatter.path.match(a)})).node,p=n.allMarkdownRemark.edges.filter((function(t){return t.node.frontmatter.path.match(r)})).map((function(t){var e,n;return t.node.frontmatter.date=(e=t.node.frontmatter.date,n=e.split(/\D+/),o(Date,Object(u.a)(n))),t})).sort((function(t,e){return t.node.frontmatter.date>e.node.frontmatter.date?1:-1}));return c.frontmatter.siteUrl="https://academy.knowit.no/programs/"+e+"/",c.frontmatter.path="/programs/"+e,i.a.createElement(l.a,{data:n.site.siteMetadata},i.a.createElement("section",{id:"main",className:E.a.courseInfoSection},i.a.createElement(s.a,{data:c}),i.a.createElement("div",{className:E.a.aboutProgram,dangerouslySetInnerHTML:{__html:c.html}}),i.a.createElement(g,{courses:p,title:"Kursoversikt"}),i.a.createElement(m.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-programs-tech-lead-index-js-0972ef97f67077e816f9.js.map