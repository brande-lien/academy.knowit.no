(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+xpN":function(e,t,n){e.exports={programOverview:"ProgramOverview-module--programOverview--2lsJw"}},"1zWx":function(e,t,n){e.exports={defaultButton:"Button-module--defaultButton--1kVfR"}},"24WQ":function(e,t,n){e.exports={signUpTitle:"SignupSection-module--signUpTitle--3_36K",signupButton:"SignupSection-module--signupButton--22wTV",signupSection:"SignupSection-module--signupSection--37m3K"}},A7T9:function(e,t,n){e.exports={courseInfoSection:"programpage-module--courseInfoSection--q8XZ8",aboutProgram:"programpage-module--aboutProgram--3NxGb"}},NVOB:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("ThPt"),s=n("24WQ"),i=n.n(s);t.a=function(){return r.a.createElement("section",{className:i.a.signupSection,id:"signup"},r.a.createElement("h2",{className:i.a.signUpTitle},"Påmelding"),r.a.createElement("p",null,"Påmeldingen har startet."," ",r.a.createElement("b",null,"søknadsfrist er mandag 2. september, 2019"),"."),r.a.createElement(o.a,{link:"/application-form",alt:"Information about how to apply",className:i.a.signupButton},"Søknadsskjema"),r.a.createElement("a",{class:"link",href:"/how-to-apply"},"Les mer om søknadsprosessen"))}},SshV:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("YYvG");t.default=function(){return r.a.createElement(o.a,{program:"design-lead"})}},ThPt:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("1zWx"),s=n.n(o);t.a=function(e){var t=e.link,n=e.alt,a=e.style,o=e.className,i=e.children,u=void 0===o?s.a.defaultButton:o;return r.a.createElement("a",{href:t,className:u,style:a,role:"button",alt:n},i)}},YYvG:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("h5lK"),s=n("lkJS"),i=n("NVOB"),u=n("EW8U"),l=n("+xpN"),c=n.n(l),m=function(e){var t=e.courses,n=e.title,a=t.map((function(e){var t=e.node,n=e.node.frontmatter;return r.a.createElement(u.a,{data:t,key:n.path,showDescription:!0})}));return r.a.createElement("div",{className:c.a.programOverview},r.a.createElement("h2",null,n),a)},p=n("Wbzz"),d=function(){return Object(p.b)("3392641262")},f=n("A7T9"),g=n.n(f);t.a=function(e){var t=e.program,n=d(),a=new RegExp("^/programs/about-"+t),u=new RegExp("^/courses/"+t),l=n.allMarkdownRemark.edges.find((function(e){return e.node.frontmatter.path.match(a)})).node,c=n.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.path.match(u)})).map((function(e){return e.node.frontmatter.date=new Date(e.node.frontmatter.date),e})).sort((function(e,t){return e.node.frontmatter.date>t.node.frontmatter.date?1:-1}));return l.frontmatter.siteUrl="https://academy.knowit.no/programs/"+t+"/",l.frontmatter.path="/programs/"+t,r.a.createElement(o.a,{data:n.site.siteMetadata},r.a.createElement("section",{id:"main",className:g.a.courseInfoSection},r.a.createElement(s.a,{data:l}),r.a.createElement("div",{className:g.a.aboutProgram,dangerouslySetInnerHTML:{__html:l.html}}),r.a.createElement(m,{courses:c,title:"Kursoversikt"}),r.a.createElement(i.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-programs-design-lead-index-js-9f6ee5c7050e1e1716d1.js.map