(this["webpackJsonpWildSpotter-client"]=this["webpackJsonpWildSpotter-client"]||[]).push([[0],{50:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(24),c=n.n(s),r=(n(50),n(10)),o=n(43),l=n(3),u=n(4),d=n(6),p=n(5),h=n(8),j=(n(30),n(2)),m=n(0),b=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.signIn;t.error;return Object(m.jsxs)("div",{className:"signIn",children:[Object(m.jsx)("h2",{children:"Wild Spotter"}),Object(m.jsx)("img",{className:"wolf",src:"wolf.png",alt:"wolf"}),Object(m.jsx)("h6",{children:"Do you know where you can find the European fabulous 5?"}),Object(m.jsx)("p",{children:"Log in to find them!"}),Object(m.jsxs)("form",{onSubmit:e,children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email"}),Object(m.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1"})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mySignUpBtn",children:"Login"}),Object(m.jsx)(j.b,{to:"/signup",children:Object(m.jsx)("div",{className:"btn btn-primary mySignUpBtn ",children:"Sign Up"})})]})]})}}]),n}(a.Component),O=(n(56),function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.signUp,n=t.error;return Object(m.jsxs)("div",{className:"signUp",children:[Object(m.jsx)("h2",{children:"Wild Spotter"}),Object(m.jsx)("img",{className:"wolf",src:"wolf.png"}),Object(m.jsx)("h6",{children:"Sign up to find the fabulous 5"}),Object(m.jsxs)("form",{onSubmit:e,children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Username"}),Object(m.jsx)("input",{type:"text",name:"username",className:"form-control"})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(m.jsx)("input",{type:"text",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1"})]}),n?Object(m.jsx)("div",{children:n.errorMessage}):null,Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mySignUpBtn",children:"Sign Up"})]}),Object(m.jsx)(j.b,{to:"/",children:Object(m.jsx)("img",{className:"xSize",src:"x-circle.svg"})})]})}}]),n}(a.Component)),f=n(7),x=n.n(f),g="https://wildspotter.herokuapp.com",v=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"navbar",children:[Object(m.jsx)("img",{className:"wolfnav",src:"wolf.png",alt:"wolf"}),Object(m.jsx)("div",{className:"btn-group",children:Object(m.jsxs)("select",{className:"btn btn-danger dropdown-toggle form-select",onChange:this.props.search,name:"animal","aria-label":"Default select example",children:[Object(m.jsx)("option",{selected:!0,children:"Search"}),Object(m.jsx)("option",{value:"wolf",children:"Wolf"}),Object(m.jsx)("option",{value:"bear",children:"Bear"}),Object(m.jsx)("option",{value:"bison",children:"Bison"}),Object(m.jsx)("option",{value:"moose",children:"Moose"}),Object(m.jsx)("option",{value:"lynx",children:"Lynx"})]})}),Object(m.jsx)("button",{onClick:this.props.logout,className:"btn btn-primary",children:"Log out"})]})}}]),n}(a.Component),y=n(17),S=n(79),N=n(80),w=n(83),D=n(81),A=(n(76),n(15)),I=n.n(A);var C=function(t){var e=Object(a.useState)([56.26,9.5]),n=Object(y.a)(e,2),i=n[0],s=n[1];function c(){Object(S.a)("click",(function(e){var n=e.latlng;s([n.lat,n.lng]),t.handleLocation([n.lat,n.lng])}));return null}var r=new I.a.Icon({iconUrl:t.animalMarker,iconSize:[44,38]});return console.log(i),Object(m.jsx)("div",{children:Object(m.jsxs)(N.a,{style:{width:"350px",height:"250px"},center:i,zoom:3,scrollWheelZoom:!1,children:[Object(m.jsx)(w.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(m.jsx)(c,{position:i}),Object(m.jsx)(D.a,{icon:r,position:i})]})})},U=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={animal:null,location:[],tourId:null},t.handleChange=function(e){t.setState({animal:e.target.value}),console.log(e.target.value)},t.handleTourChange=function(e){t.setState({tourId:e.target.value}),console.log(e.target.value)},t.handleLocation=function(e){t.setState({location:e})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e="bear.png";return"bear"===this.state.animal?e="bear.png":"wolf"==this.state.animal?e="Wolf2.png":"moose"==this.state.animal?e="Moose.png":"lynx"==this.state.animal?e="lynx1.png":"bison"==this.state.animal&&(e="https://image.flaticon.com/icons/png/512/2247/2247411.png"),console.log(this.props.allTours),Object(m.jsxs)("div",{className:"addAnimal",children:[Object(m.jsx)("h4",{children:"Hey Wild Spotter"}),Object(m.jsx)("h6",{children:"Pin the animals that you spotted on the map!"}),Object(m.jsxs)("form",{onSubmit:function(e){t.props.addAnimal(e,t.state.animal,t.state.location,t.state.tourId)},children:[Object(m.jsx)("div",{children:Object(m.jsxs)("select",{onChange:this.handleChange,name:"animal",class:"form-select form-control","aria-label":"Default select example",children:[Object(m.jsx)("option",{selected:!0,children:"Animal"}),Object(m.jsx)("option",{value:"wolf",children:"Wolf"}),Object(m.jsx)("option",{value:"bear",children:"Bear"}),Object(m.jsx)("option",{value:"bison",children:"Bison"}),Object(m.jsx)("option",{value:"moose",children:"Moose"}),Object(m.jsx)("option",{value:"lynx",children:"Lynx"})]})}),Object(m.jsxs)("select",{className:"dropdown-toggle form-control",onChange:this.handleTourChange,name:"tours","aria-label":"Default select example",children:[Object(m.jsx)("option",{selected:!0,children:"Tour"}),this.props.allTours.map((function(t){return Object(m.jsx)("option",{value:t._id,children:t.name})}))]}),Object(m.jsx)(C,{animalMarker:e,handleLocation:this.handleLocation}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInputPassword1",className:"form-label"}),Object(m.jsx)("input",{name:"description",placeholder:"Description",type:"text",className:"form-control",id:"exampleInputPassword1"})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mySignUpBtn",children:"Submit"})]}),Object(m.jsx)(j.b,{to:"/profile",children:Object(m.jsx)("img",{className:"xSize",src:"x-circle.svg"})})]})}}]),n}(a.Component),k=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=JSON.parse(JSON.stringify(this.props.allAnimals));t.sort((function(t,e){return new Date(e.createdAt)-new Date(t.createdAt)}));var e=t.slice(0,3),n=JSON.parse(JSON.stringify(this.props.allTours));console.log(this.props.allTours),n.sort((function(t,e){return new Date(e.createdAt)-new Date(t.createdAt)}));var a=n.slice(0,3);return Object(m.jsxs)("div",{className:"news",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h6",{children:"Last spotted animals"}),e.map((function(t){return Object(m.jsx)(j.b,{to:"/animalDetail/".concat(t._id),children:Object(m.jsx)("p",{className:"link",children:t.animal})})}))]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h6",{children:"Last added tours"}),a.map((function(t){return Object(m.jsx)(j.b,{to:"/tourDetail/".concat(t._id),children:Object(m.jsx)("p",{className:"link",children:t.name})})}))]})]})}}]),n}(a.Component),T=n(82),E=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;this.props.allAnimals;console.log(this.props.searchAnimal);var e=this.props.allAnimals;this.props.searchAnimal&&(e=this.props.allAnimals.filter((function(e){return e.animal==t.props.searchAnimal}))),"Animal"==this.props.searchAnimal&&(e=this.props.allAnimals);return Object(m.jsx)("div",{children:Object(m.jsxs)(N.a,{style:{width:"350px",height:"250px"},center:[56.26,9.5],zoom:4,scrollWheelZoom:!1,children:[Object(m.jsx)(w.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.map((function(t,e){var n="https://image.flaticon.com/icons/png/512/2247/2247411.png";"bear"===t.animal?n="bear.png":"wolf"===t.animal?n="Wolf2.png":"moose"===t.animal?n="Moose.png":"lynx"===t.animal?n="lynx1.png":"bison"===t.animal&&(n="https://image.flaticon.com/icons/png/512/2247/2247411.png");var a=new I.a.Icon({iconUrl:n,iconSize:[44,34]});return Object(m.jsx)(D.a,{icon:a,position:["".concat(t.location[0]),"".concat(t.location[1])],children:Object(m.jsxs)(T.a,{children:[t.description," ",Object(m.jsx)("br",{}),"."]})})}))]})})}}]),n}(a.Component),B=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={allAnimals:[],allTours:[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;x.a.get("".concat(g,"/api/animals"),{withCredentials:!0}).then((function(e){console.log(e.data),t.setState({allAnimals:e.data})})).catch((function(){})),x.a.get("".concat(g,"/api/tours"),{withCredentials:!0}).then((function(e){console.log("response.data"),t.setState({allTours:e.data})})).catch((function(){}))}},{key:"render",value:function(){return this.props.loggedInUser?Object(m.jsxs)("div",{className:"profile",children:[Object(m.jsxs)("h2",{className:"h2Margin",children:["Welcome: ",this.props.loggedInUser.username]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(k,{allAnimals:this.state.allAnimals,allTours:this.state.allTours}),Object(m.jsx)(E,{allAnimals:this.state.allAnimals,searchAnimal:this.props.searchAnimal}),Object(m.jsxs)("div",{className:"buttons-profile",children:[Object(m.jsx)(j.b,{to:"/tour",children:Object(m.jsx)("div",{className:"btn btn-primary mySignUpBtn",children:"Add Tour"})}),Object(m.jsx)(j.b,{to:"/add",children:Object(m.jsx)("div",{className:"btn btn-primary mySignUpBtn",children:"Add Animal"})})]})]})]}):(console.log("Redirecting from profile"),Object(m.jsx)(h.a,{to:"/"}))}}]),n}(a.Component),M=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"tour",children:[Object(m.jsx)("h4",{children:"Hey Wild Spotter"}),Object(m.jsx)("h6",{children:"Add here the hike description where you've spotted animals"}),Object(m.jsxs)("form",{onSubmit:this.props.addTour,children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:" Tour name "}),Object(m.jsx)("input",{name:"name",type:"text",className:"form-control",id:"exampleInputPassword1"})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:" Description "}),Object(m.jsx)("input",{name:"description",type:"text",className:"form-control",id:"exampleInputPassword1"})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mySignUpBtn",children:" Submit "})]}),Object(m.jsx)(j.b,{to:"/profile",children:Object(m.jsx)("img",{className:"xSize",src:"x-circle.svg"})})]})}}]),n}(a.Component),L=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={animal:{}},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.animalId;x.a.get("".concat(g,"/api/animalDetail/").concat(e)).then((function(e){console.log(e.data),t.setState({animal:e.data})})).catch((function(t){console.log("Detail fecth failed --\x3e",t)}))}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{className:"animalDetail",children:[Object(m.jsx)("h2",{children:"Wild Spotter"}),Object(m.jsx)("h4",{children:"Details"}),Object(m.jsxs)("p",{children:["Type of animal: ",Object(m.jsx)("br",{}),this.state.animal.animal]}),Object(m.jsxs)("p",{children:["Description: ",Object(m.jsx)("br",{}),this.state.animal.description]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(j.b,{to:"/animalDetail/".concat(this.state.animal._id,"/edit"),children:Object(m.jsx)("button",{className:"btn btn-primary mySignUpBtn",children:"Edit"})}),Object(m.jsx)(j.b,{to:"/profile",children:Object(m.jsx)("button",{onClick:function(){t.props.delete(t.state.animal._id)},className:"btn btn-primary mySignUpBtn",children:"Delete"})})]}),Object(m.jsx)(j.b,{to:"/profile",children:Object(m.jsx)("img",{className:"xSize",src:"x-circle.svg"})})]})}}]),n}(a.Component),_=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={animal:{}},t.handleNameChange=function(e){var n=e.target.value;console.log(n);var a=JSON.parse(JSON.stringify(t.state.animal));a.name=n,t.setState({animal:a})},t.handleDescChange=function(e){var n=e.target.value,a=JSON.parse(JSON.stringify(t.state.animal));a.description=n,t.setState({animal:a})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.animalId;x.a.get("".concat(g,"/api/animalDetail/").concat(e)).then((function(e){t.setState({animal:e.data})})).catch((function(){console.log("Detail fecth failed")}))}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{className:"editAnimal",children:[Object(m.jsx)("input",{type:"text",onChange:this.handleNameChange,value:this.state.animal.animal}),Object(m.jsx)("input",{type:"text",onChange:this.handleDescChange,value:this.state.animal.description}),Object(m.jsxs)(j.b,{to:"/profile",children:["  ",Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){t.props.onEdit(t.state.animal)},children:"Submit"})]})]})}}]),n}(a.Component),J=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={tour:{},animals:[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.tourId;x.a.get("".concat(g,"/api/tourDetail/").concat(e)).then((function(e){console.log(e.data),t.setState({tour:e.data.detail,animals:e.data.animals})})).catch((function(t){console.log("Detail fecth failed --\x3e",t)}))}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{className:"tourDetail",children:[Object(m.jsx)("h4",{children:"Details"}),Object(m.jsxs)("p",{children:["Tour: ",this.state.tour.name]}),Object(m.jsxs)("p",{children:["Description: ",this.state.tour.description]}),Object(m.jsx)(E,{allAnimals:this.state.animals}),Object(m.jsxs)("div",{className:"deleteEdit",children:[Object(m.jsx)(j.b,{to:"/tourDetail/".concat(this.state.tour._id,"/edit"),children:Object(m.jsx)("button",{className:"btn btn-primary mySignUpBtn",children:"Edit"})}),Object(m.jsx)(j.b,{to:"/profile",children:Object(m.jsx)("button",{onClick:function(){t.props.delete(t.state.tour._id)},className:"btn btn-primary mySignUpBtn",children:"Delete"})})]})]})}}]),n}(a.Component),P=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={tour:{}},t.handleNameChange=function(e){var n=e.target.value;console.log(n);var a=JSON.parse(JSON.stringify(t.state.tour));a.name=n,t.setState({tour:a})},t.handleDescChange=function(e){var n=e.target.value,a=JSON.parse(JSON.stringify(t.state.tour));a.description=n,t.setState({tour:a})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.tourId;x.a.get("".concat(g,"/api/tourDetail/").concat(e)).then((function(e){console.log(e.data),t.setState({tour:e.data.detail})})).catch((function(){console.log("Detail fecth failed")}))}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{className:"editTour",children:[Object(m.jsx)("input",{type:"text",className:"form-label",onChange:this.handleNameChange,value:this.state.tour.name}),Object(m.jsx)("input",{type:"text",className:"form-control form-label",onChange:this.handleDescChange,value:this.state.tour.description}),Object(m.jsxs)(j.b,{to:"/profile",children:["  ",Object(m.jsx)("button",{className:"btn btn-primary mySignUpBtn",onClick:function(){t.props.onEdit(t.state.tour)},children:"Submit"})]})]})}}]),n}(a.Component),W=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:"404 Page not found! Try again to hunt again...."})}}]),n}(a.Component),z=(n(77),function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={loggedInUser:null,error:null,animal:null,fetchingUser:!0,searchAnimal:null,allTours:[]},t.handleSignIn=function(e){e.preventDefault();var n={email:e.target.email.value,password:e.target.password.value};console.log("Coming here"),x.a.post("".concat(g,"/api/signIn"),n,{withCredentials:!0}).then((function(e){console.log("signin data",e.data),t.setState({loggedInUser:e.data},(function(){t.props.history.push("/profile")}))})).catch((function(t){console.log(t)}))},t.handleSignUp=function(e){e.preventDefault();var n={username:e.target.username.value,email:e.target.email.value,password:e.target.password.value};x.a.post("".concat(g,"/api/signup"),n).then((function(e){console.log(e.data),t.setState({loggedInUser:null},(function(){t.props.history.push("/")}))})).catch((function(e){console.log(e),t.setState({error:e.response.data})}))},t.handleLogout=function(){x.a.post("".concat(g,"/api/logout"),{},{withCredentials:!0}).then((function(){t.setState({loggedInUser:null},(function(){t.props.history.push("/")}))}))},t.handleAddAnimal=function(e,n,a,i){e.preventDefault();var s={animal:n,location:a,description:e.target.description.value,tourId:i};x.a.post("".concat(g,"/api/add"),s,{withCredentials:!0}).then((function(e){t.setState({animal:e.data},(function(){t.props.history.push("/profile")}))}))},t.handleAddTour=function(e){e.preventDefault();var n={name:e.target.name.value,description:e.target.description.value};x.a.post("".concat(g,"/api/tours"),n,{withCredentials:!0}).then((function(e){t.setState({tour:e.data,allTours:[e.data].concat(Object(o.a)(t.state.allTours))},(function(){t.props.history.push("/profile")}))}))},t.handleDelete=function(e){x.a.delete("".concat(g,"/api/animalDetail/").concat(e)).then((function(){var n=t.state.animal.filter((function(t){return t._id!==e}));t.setState({animal:n},(function(){t.props.history.push("/")}))})).catch((function(t){console.log("Delete failed",t)}))},t.handleEditAnimal=function(e){x.a.patch("".concat(g,"/api/animalDetail/").concat(e._id),{animal:e.animal,description:e.description,image:e.image}).then((function(){var n=t.state.animal.map((function(t){return e._id===t._id&&(t.animal=e.animal,t.description=e.description),t}));t.setState({animal:n},(function(){t.props.history.push("/")}))})).catch((function(t){console.log("Edit failed",t)}))},t.handleSearch=function(e){t.setState({searchAnimal:e.target.value}),console.log(e.target.value)},t.handleEditTour=function(e){x.a.patch("".concat(g,"/api/tourDetail/").concat(e._id),{name:e.name,description:e.description}).then((function(){var n=t.state.tour.map((function(t){return e._id===t._id&&(t.name=e.name,t.description=e.description),t}));t.setState({tour:n},(function(){t.props.history.push("/profile")}))})).catch((function(t){console.log("Edit failed",t)}))},t.handleDeleteTour=function(e){x.a.delete("".concat(g,"/api/tourDetail/").concat(e)).then((function(){var n=t.state.animal.filter((function(t){return t._id!==e}));t.setState({tour:n},(function(){t.props.history.push("/")}))})).catch((function(t){console.log("Delete failed",t)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.state.loggedInUser||x.a.get("".concat(g,"/api/user"),{withCredentials:!0}).then((function(e){t.setState({loggedInUser:e.data,fetchingUser:!1})})).catch((function(e){console.log(e),t.setState({fetchingUser:!1})})),x.a.get("".concat(g,"/api/tours"),{withCredentials:!0}).then((function(e){console.log("response.data"),t.setState({allTours:e.data})})).catch((function(){}))}},{key:"render",value:function(){var t=this;return console.log("This is the user connected --\x3e",this.state.loggedInUser),this.state.fetchingUser?Object(m.jsx)("p",{children:"Loading"}):Object(m.jsxs)("div",{children:[this.state.loggedInUser?Object(m.jsx)(v,Object(r.a)({logout:this.handleLogout,search:this.handleSearch},this.props)):null,Object(m.jsxs)(h.d,{children:[Object(m.jsx)(h.b,{exact:!0,path:"/",render:function(e){return Object(m.jsx)(b,Object(r.a)({signIn:t.handleSignIn,error:t.state.error},e))}}),Object(m.jsx)(h.b,{path:"/signup",render:function(e){return Object(m.jsx)(O,Object(r.a)({signUp:t.handleSignUp,error:t.state.error},e))}}),Object(m.jsx)(h.b,{path:"/profile",render:function(e){return Object(m.jsx)(B,Object(r.a)({searchAnimal:t.state.searchAnimal,news:t.state.animal,logout:t.handleLogout,loggedInUser:t.state.loggedInUser},e))}}),Object(m.jsx)(h.b,{path:"/add",render:function(e){return Object(m.jsx)(U,Object(r.a)({allTours:t.state.allTours,addAnimal:t.handleAddAnimal},e))}}),Object(m.jsx)(h.b,{path:"/tour",render:function(e){return Object(m.jsx)(M,Object(r.a)({addTour:t.handleAddTour},e))}}),Object(m.jsx)(h.b,{path:"/animalDetail/:animalId/edit",render:function(e){return Object(m.jsx)(_,Object(r.a)({onEdit:t.handleEditAnimal},e))}}),Object(m.jsx)(h.b,{path:"/animalDetail/:animalId",render:function(e){return Object(m.jsx)(L,Object(r.a)({delete:t.handleDelete},e))}}),Object(m.jsx)(h.b,{path:"/tourDetail/:tourId/edit",render:function(e){return Object(m.jsx)(P,Object(r.a)({onEdit:t.handleEditTour},e))}}),Object(m.jsx)(h.b,{path:"/tourDetail/:tourId",render:function(e){return Object(m.jsx)(J,Object(r.a)({delete:t.handleDeleteTour},e))}}),Object(m.jsx)(h.b,{component:W})]})]})}}]),n}(i.a.Component)),H=Object(h.g)(z);c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(j.a,{children:Object(m.jsx)(H,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.c24ec028.chunk.js.map