(this.webpackJsonpempldir=this.webpackJsonpempldir||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://randomuser.me/api/portraits/thumb/men/18.jpg","firstName":"Gustav","lastName":"Kristensen","phone":"9470293784","email":"gustav.kristensen@example.com","dob":"1988-03-02"},{"id":2,"image":"https://randomuser.me/api/portraits/thumb/men/6.jpg","firstName":"William","lastName":"Madsen","phone":"7645097289","email":"william.madsen@example.com","dob":"1976-03-31"},{"id":3,"image":"https://randomuser.me/api/portraits/thumb/men/80.jpg","firstName":"Julio ","lastName":"Graves","phone":"2862549274","email":"julio.graves@example.com","dob":"1987-09-25"},{"id":4,"image":"https://randomuser.me/api/portraits/thumb/women/33.jpg","firstName":"Simone","lastName":"Pickel","phone":"7392548452","email":"simone.pickel@example.com","dob":"1963-05-02"},{"id":5,"image":"https://randomuser.me/api/portraits/thumb/women/86.jpg","firstName":"Camille","lastName":"Roche","phone":"8462549733","email":"camille.roche@example.com","dob":"1969-01-21"},{"id":6,"image":"https://randomuser.me/api/portraits/thumb/men/83.jpg","firstName":"Chiel","lastName":"Dinnissen","phone":"9644635497","email":"chiel.dinnissen@example.com","dob":"1966-05-31"},{"id":7,"image":"https://randomuser.me/api/portraits/thumb/women/52.jpg","firstName":"Tara","lastName":"Perez","phone":"3779538247","email":"tara.perez@example.com","dob":"1948-04-20"}]')},,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),m=a(3),l=a.n(m),o=(a(13),a(4)),s=a(5),i=a(7),c=a(6);a(14);var d=function(){return n.a.createElement("div",{className:"Header"},n.a.createElement("h1",null,"Employee Directory"),n.a.createElement("p",null,"Click the Name or DOB heading to sort the column or use the search box to search by last name"))};a(15);var p=function(e){return n.a.createElement("div",{className:"Search"},n.a.createElement("input",{type:"text",placeholder:"Type Last Name Here",onChange:function(t){return e.searchLastName(t)}}))};a(16);var u=function(e){return n.a.createElement("div",{className:"TableData"},n.a.createElement("table",{className:"table table-bordered"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"ID"),n.a.createElement("th",{scope:"col"},"Image"),n.a.createElement("th",{scope:"col"},n.a.createElement("button",{onClick:e.sortEmplByName,className:"btn"},"Name")),n.a.createElement("th",{scope:"col"},"Phone"),n.a.createElement("th",{scope:"col"},"Email"),n.a.createElement("th",{scope:"col"},n.a.createElement("button",{onClick:e.sortEmplByDOB,className:"btn"},"DOB")))),n.a.createElement("tbody",null,e.employees.map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.id),n.a.createElement("td",null,n.a.createElement("img",{src:e.image,alt:"employee-img"})),n.a.createElement("td",null,e.firstName," ",e.lastName),n.a.createElement("td",null,e.phone),n.a.createElement("td",null,e.email),n.a.createElement("td",null,e.dob))})))))},h=a(1),E=(a(17),function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),m=0;m<r;m++)n[m]=arguments[m];return(e=t.call.apply(t,[this].concat(n))).state={employees:h,search:"",nameOrdered:"A",dobOrdered:""},e.searchLastName=function(t){var a=t.target.value,r=h.filter((function(e){return e.lastName.toLowerCase().includes(a.toLowerCase())}));e.setState({employees:r})},e.sortEmplByName=function(){if("A"===e.state.nameOrdered||""===e.state.nameOrdered){var t=e.state.employees.sort((function(e,t){return e.lastName<t.lastName?1:-1}));e.setState({employees:t,nameOrdered:"D",dobOrdered:""})}else{var a=e.state.employees.sort((function(e,t){return e.lastName>t.lastName?1:-1}));e.setState({employees:a,nameOrdered:"A",dobOrdered:""})}},e.sortEmplByDOB=function(){if("A"===e.state.dobOrdered||""===e.state.dobOrdered){var t=e.state.employees.sort((function(e,t){return new Date(t.dob)-new Date(e.dob)}));e.setState({employees:t,nameOrdered:"",dobOrdered:"D"})}else{var a=e.state.employees.sort((function(e,t){return new Date(e.dob)-new Date(t.dob)}));e.setState({employees:a,nameOrdered:"",dobOrdered:"A"})}},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Main"},n.a.createElement(d,null),n.a.createElement("hr",null),n.a.createElement(p,{searchLastName:this.searchLastName}),n.a.createElement(u,{employees:this.state.employees,sortEmplByName:this.sortEmplByName,sortEmplByDOB:this.sortEmplByDOB}))}}]),a}(n.a.Component));var b=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f2309c15.chunk.js.map