(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),s=n.n(r),l=(n(29),n(0)),o=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"#",children:"ICS2608"}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{class:"navbar-nav",children:[Object(l.jsx)("a",{class:"nav-link",href:"/",children:"Home"}),Object(l.jsx)("a",{class:"nav-link",href:"/employees",children:"Employees"}),Object(l.jsx)("a",{class:"nav-link",href:"/add",children:"Add Employee"}),Object(l.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})},i=n(6),j=n(2),d=n.p+"static/media/logo.6ce24c58.svg",b=(n(31),function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Welcome to my page, ",e.name," ",e.stageName]}),e.children]})}),h=function(){return Object(l.jsx)("p",{children:"\ud83e\udd0d\ud83e\udd0d\ud83e\udd0d"})},m=n(20),u=n(21),O=n(24),p=n(23),x=function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:this.addCounter,children:"Click me!"}),Object(l.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(a.a.Component),f=n(3),v=n(22),g=n.n(v).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),y=function(){return g.get("/hello")},N=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){y().then((function(e){a(e.data)})).catch((function(e){console.log("something went wrong!")}))})),n};var k=function(){return Object(l.jsx)("div",{className:"Home",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(l.jsx)("p",{children:N()}),Object(l.jsxs)(b,{name:"stranger",stageName:"\ud83d\ude1c",children:[Object(l.jsx)("p",{children:"Hope you're having a nice day!"}),Object(l.jsx)(h,{}),Object(l.jsx)("p",{children:"--- jammy \ud83d\ude0a"}),Object(l.jsx)(x,{})]}),Object(l.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"})]})})},C=function(){return g.get("/employees")},A=function(e){return g.post("/employees",e)},S=function(e){return g.put("/employees",e)},E=function(e){return g.get("/employees/".concat(e))},w=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){C().then((function(e){a(e.data)})).catch((function(){console.log("An Error Occured.")}))})),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"List of Employees"}),Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"table table-hover table-light table-bordered border-dark",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"table-danger table-bordered border-dark",children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Location"}),Object(l.jsx)("td",{children:"Department"}),Object(l.jsx)("td",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.location}),Object(l.jsx)("td",{children:e.department}),Object(l.jsx)("td",{children:Object(l.jsx)(i.b,{className:"btn btn-primary",to:"/edit/".concat(e.employeeId),children:"Update"})})]},e.employeeId)}))})]})})]})},I=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Page Not Found!"})})},L=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(f.a)(r,2),o=s[0],i=s[1],d=Object(c.useState)(""),b=Object(f.a)(d,2),h=b[0],m=b[1],u=Object(j.f)(),O=Object(j.g)().employeeId;Object(c.useEffect)((function(){O?E(O).then((function(e){a(e.data.name),i(e.data.location),m(e.data.department)})).catch((function(e){console.error("Error!")})):console.log("employeeId does not exist")}),[]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Add Employee"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"name",className:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Add employee name",onChange:function(e){a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"location",className:"form-label",children:"Location"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"location",placeholder:"Add employee location",onChange:function(e){i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"department",className:"form-label",children:"Department"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"department",placeholder:"Add employee department",onChange:function(e){m(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),O?S({employeeId:O,name:n,location:o,department:h}).then((function(e){console.log("Updated employee!",e.data),u("/employees")})).catch((function(e){console.error("Something went wrong!")})):A({name:n,location:o,department:h}).then((function(e){console.log("Added a new employee!",e.data),u("/employees")})).catch((function(e){console.error("Something went wrong!")}))}(e)},children:"Save"})]})]})},D=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",element:Object(l.jsx)(k,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/employees",element:Object(l.jsx)(w,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/add",element:Object(l.jsx)(L,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/edit/:employeeId",element:Object(l.jsx)(L,{})}),Object(l.jsx)(j.a,{exact:!0,path:"*",element:Object(l.jsx)(I,{})})]})})})};var F=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(D,{})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(50);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root")),H()}},[[51,1,2]]]);
//# sourceMappingURL=main.1aefa0d6.chunk.js.map