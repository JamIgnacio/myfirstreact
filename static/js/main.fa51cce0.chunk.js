(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(14),a=n.n(r),i=(n(25),n.p+"static/media/logo.6ce24c58.svg"),o=(n(26),n(0)),j=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["Hello ",e.name," a.k.a. ",e.stageName]}),e.children]})},l=function(){return Object(o.jsx)("p",{children:"Borahae! \ud83d\udc9c"})},h=n(15),d=n(16),b=n(20),u=n(18),O=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:this.addCounter,children:"Click me!!!"}),Object(o.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(s.a.Component),p=n(17),x=n.n(p).a.create({baseURL:"http://localhost:8080",headers:{"Content-Type":"application/json"}}),m=function(){return x.get("/hello")},f=n(19),g=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){m().then((function(e){s(e.data)})).catch((function(e){console.log("something went wrong!")}))})),n};var v=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(o.jsxs)("p",{children:["Edit ",Object(o.jsx)("code",{children:"src/App.js"})," and save to reload. --- jammy \ud83d\ude0a"]}),Object(o.jsx)("p",{children:g()}),Object(o.jsxs)(j,{name:"Jungkook",stageName:"JK",children:[Object(o.jsx)("p",{children:"Birthday is on September 1st."}),Object(o.jsx)(l,{}),Object(o.jsx)(O,{})]}),Object(o.jsxs)(j,{name:"Jimin",stageName:"JM",children:[Object(o.jsx)("p",{children:"Birthday is on October 13th."}),Object(o.jsx)(l,{}),Object(o.jsx)(O,{})]}),Object(o.jsxs)(j,{name:"Namjoon",stageName:"RM",children:[Object(o.jsx)("p",{children:"Birthday is on September 12th."}),Object(o.jsx)(l,{}),Object(o.jsx)(O,{})]}),Object(o.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(o.jsxs)(s.a.StrictMode,{children:[Object(o.jsx)(v,{}),Object(o.jsx)(v,{})]}),document.getElementById("root")),k()}},[[46,1,2]]]);
//# sourceMappingURL=main.fa51cce0.chunk.js.map