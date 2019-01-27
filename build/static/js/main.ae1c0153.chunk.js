(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(37),i=a.n(s),c=a(148),o=a(150),l=a(149),d=a(5),p=a(6),m=a(8),u=a(7),h=a(9),v=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(){a.props.history.push("/store")},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"card",onClick:this.handleClick},n.a.createElement("div",{className:"card__picture"}),n.a.createElement("span",{className:"card__caption"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u0435\u043d\u044e"),n.a.createElement("p",{className:"card__caption"},"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"))}}]),t}(n.a.Component);var f=function(e){return n.a.createElement("div",{className:"page-wrapper"},n.a.createElement(v,{history:e.history}))},b=a(24);function g(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}var E=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t="available"===this.props.details.status;return n.a.createElement("li",{className:"dish"},n.a.createElement("img",{className:"dish-image",src:this.props.details.image,alt:this.props.details.image}),n.a.createElement("h3",{className:"dish-header"},this.props.details.name,n.a.createElement("span",{className:"dish-price"},g(this.props.details.price))),n.a.createElement("p",{className:"dish-description"},this.props.details.description),n.a.createElement("button",{disabled:!t,className:"dish-addButton",onClick:function(){return e.props.addToOrder(e.props.index)}},t?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0437\u0430\u043a\u0430\u0437":"\u0420\u0430\u0441\u043f\u0440\u043e\u0434\u0430\u043d\u043e"))}}]),t}(n.a.Component),O=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"store-division dishes"},n.a.createElement("h2",{className:"store-division__header"},"\u041c\u0435\u043d\u044e"),n.a.createElement("ul",null,Object.keys(this.props.dishes).map(function(t){return n.a.createElement(E,{key:t,index:t,details:e.props.dishes[t],addToOrder:e.props.addToOrder})})))}}]),t}(n.a.Component),_=a(30),y=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).renderOrder=function(e){var t=a.props.dishes[e],r=a.props.order[e];return t&&"unavailable"!==a.props.dishes[e].status?n.a.createElement(_.CSSTransition,{classNames:"order__item",key:e,timeout:{enter:250,exit:250}},n.a.createElement("li",{key:e,className:"order__item"},n.a.createElement(_.TransitionGroup,{component:"span",className:"order__count-wrapper"},n.a.createElement(_.CSSTransition,{classNames:"order__count",key:r,timeout:{enter:300,exit:300}},n.a.createElement("span",{className:"order__count"},r))),t.name,n.a.createElement("span",{className:"order__price"},g(t.price)),n.a.createElement("button",{className:"order__delete",onClick:function(){return a.props.removeFromOrder(e)}},"\xd7"))):null},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.map(function(t){return e.props.dishes[t]&&"unavailable"!==e.props.dishes[t].status?e.props.dishes[t].price*e.props.order[t]:0}).reduce(function(e,t){return e+t},0);return n.a.createElement("div",{className:"store-division order"},n.a.createElement("h2",{className:"store-division__header"},"\u0417\u0430\u043a\u0430\u0437"),n.a.createElement(_.TransitionGroup,{component:"ul"},t.map(this.renderOrder)),n.a.createElement("strong",{className:"order__total"},"\u0418\u0442\u043e\u0433\u043e: ",g(a)),n.a.createElement("br",null),n.a.createElement("button",{className:"order__confirm",onClick:function(){return alert("to be continued...")}},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"))}}]),t}(n.a.Component),N=a(31),j=a.n(N),D=a(54),k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={valid:!0},a.nameRef=n.a.createRef(),a.priceRef=n.a.createRef(),a.statusRef=n.a.createRef(),a.descriptionRef=n.a.createRef(),a.imageRef=n.a.createRef(),a.createDish=function(e){if(e.preventDefault(),-1===a.priceRef.current.value.search(/\D/)){var t={name:a.nameRef.current.value,price:Number(a.priceRef.current.value),status:a.statusRef.current.value,description:a.descriptionRef.current.value,image:a.imageRef.current.value};a.setState({valid:!0}),a.props.addDish(t)}else a.setState({valid:!1})},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"addDishForm",onSubmit:this.createDish},!this.state.valid&&n.a.createElement("div",{className:"addDishForm__prompt"},"\u041f\u043e\u043b\u0435 \u0446\u0435\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b!"),n.a.createElement("input",{className:"addDishForm__input--small",type:"text",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",ref:this.nameRef}),n.a.createElement("input",{className:"addDishForm__input--small",type:"text",placeholder:"\u0446\u0435\u043d\u0430",ref:this.priceRef}),n.a.createElement("select",{className:"addDishForm__select",name:"status",id:"",ref:this.statusRef},n.a.createElement("option",{value:"available"},"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"),n.a.createElement("option",{value:"unavailable"},"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438")),n.a.createElement("textarea",{className:"addDishForm__textarea",name:"description",id:"",placeholder:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",ref:this.descriptionRef}),n.a.createElement("input",{className:"addDishForm__input--big",type:"text",placeholder:"\u0444\u043e\u0442\u043e",ref:this.imageRef}),n.a.createElement("button",{className:"addDishForm__button--big"},"+ \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u043b\u044e\u0434\u043e"))}}]),t}(n.a.Component),C=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).deleteDish=function(e){e.preventDefault(),a.props.deleteDish(a.props.index)},a.handleChange=function(e){var t;if("price"===e.currentTarget.name){if(t=Number(e.currentTarget.value),isNaN(t))return}else t=e.currentTarget.value;var r=a.props.dishes[a.props.index];r[e.currentTarget.name]=t,a.props.updateDish(r,a.props.index)},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.dishes[this.props.index];return n.a.createElement("form",{className:"addDishForm",onSubmit:this.deleteDish},n.a.createElement("input",{className:"addDishForm__input--small",type:"text",name:"name",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:e.name,onChange:this.handleChange}),n.a.createElement("input",{className:"addDishForm__input--small",type:"text",name:"price",placeholder:"\u0446\u0435\u043d\u0430",value:e.price,onChange:this.handleChange}),n.a.createElement("select",{className:"addDishForm__select",name:"status",id:"",value:e.status,onChange:this.handleChange},n.a.createElement("option",{value:"available"},"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"),n.a.createElement("option",{value:"unavailable"},"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438")),n.a.createElement("textarea",{className:"addDishForm__textarea",name:"description",id:"",placeholder:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:e.description,onChange:this.handleChange}),n.a.createElement("input",{className:"addDishForm__input--big",type:"text",placeholder:"\u0444\u043e\u0442\u043e",name:"image",value:e.image,onChange:this.handleChange}),n.a.createElement("button",{className:"addDishForm__button--big"},"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0431\u043b\u044e\u0434\u043e"))}}]),t}(n.a.Component);var z=function(e){return n.a.createElement("div",{className:"store-division inventory"},n.a.createElement("h2",{className:"store-division__header"},"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),n.a.createElement("p",{className:"login__paragraph"},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u043e\u043c:"),n.a.createElement("button",{className:"login__button",onClick:e.authenticate},"\u0412\u043e\u0439\u0442\u0438 \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u043e"))},S=a(38),x=a.n(S),R=a(72),w=a.n(R),F=x.a.initializeApp({apiKey:"AIzaSyCuQxB34izRPWRa_nCvV98DmkRv3gGFZzw",authDomain:"pizza-store-chernetsky.firebaseapp.com",databaseURL:"https://pizza-store-chernetsky.firebaseio.com"}),T=w.a.createClass(F.database()),A=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={signedIn:!1,uid:null},a.authenticate=Object(D.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.auth().signInAnonymously();case 2:case"end":return e.stop()}},e,this)})),a.logOut=Object(D.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.auth().signOut();case 2:a.setState({signedIn:!1,uid:null});case 3:case"end":return e.stop()}},e,this)})),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.auth().onAuthStateChanged(function(t){t&&e.setState({signedIn:!0,uid:t.uid})})}},{key:"render",value:function(){var e=this;return this.state.signedIn?n.a.createElement("div",{className:"store-division inventory"},n.a.createElement("h2",{className:"store-division__header"},"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),n.a.createElement("button",{className:"logout__button",onClick:this.logOut},"\u0412\u044b\u0439\u0442\u0438"),Object.keys(this.props.dishes).map(function(t){return n.a.createElement(C,{key:t,index:t,dishes:e.props.dishes,deleteDish:e.props.deleteDish,updateDish:e.props.updateDish})}),n.a.createElement(k,{addDish:this.props.addDish}),n.a.createElement("button",{className:"load__button",onClick:this.props.loadSampleDishes},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d\u043d\u044b\u0435 \u0431\u043b\u044e\u0434\u0430")):n.a.createElement(z,{authenticate:this.authenticate})}}]),t}(n.a.Component),I={dish1:{name:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438",image:"./images/sample-pizza/sample-pizza1.jpg",description:"\u0421\u0430\u043b\u044f\u043c\u0438, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441, \u0441\u043f\u0435\u0446\u0438\u0438.",price:1724,status:"available"},dish2:{name:"\u041c\u044f\u0441\u043d\u0430\u044f",image:"./images/sample-pizza/sample-pizza2.jpg",description:"\u0421\u0432\u0438\u043d\u0438\u043d\u0430, \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u0430, \u043a\u0443\u0440\u0438\u0446\u0430 \u0437\u0430\u043f\u0435\u0447\u0435\u043d\u043d\u0430\u044f, \u043a\u0443\u0440\u0438\u0446\u0430 \u043a\u043e\u043f\u0447\u0435\u043d\u0430\u044f, \u043a\u0430\u0440\u0430\u043c\u0435\u043b\u044c\u043d\u044b\u0439 \u043b\u0443\u043a, \u043f\u043e\u043c\u0438\u0434\u043e\u0440, \u0431\u0430\u0441\u0442\u0443\u0440\u043c\u0430, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441.",price:1200,status:"available"},dish3:{name:"\u041e\u0432\u043e\u0449\u043d\u0430\u044f",image:"./images/sample-pizza/sample-pizza3.jpg",description:"\u0411\u0430\u043a\u043b\u0430\u0436\u0430\u043d, \u0446\u0443\u043a\u0438\u043d\u0438, \u043f\u0435\u0440\u0435\u0446 \u0441\u043b\u0430\u0434\u043a\u0438\u0439, \u043b\u0443\u043a \u043a\u0440\u0430\u0441\u043d\u044b\u0439, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b, \u0440\u0443\u043a\u043a\u043e\u043b\u0430, \u0441\u043e\u0443\u0441 \u0422\u0435\u0440\u0438\u044f\u043a\u0438, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043f\u0435\u0446\u0438\u0438.",price:1684,status:"unavailable"},dish4:{name:"\u0413\u0440\u0438\u0431\u043d\u0430\u044f",image:"./images/sample-pizza/sample-pizza4.jpg",description:"\u0424\u0438\u043b\u0435 \u043a\u0443\u0440\u0438\u043d\u043e\u0435 \u0437\u0430\u043f\u0435\u0447\u0435\u043d\u043d\u043e\u0435, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d, \u043b\u0443\u043a \u0440\u0435\u043f\u0447\u0430\u0442\u044b\u0439, \u0441\u043b\u0438\u0432\u043a\u0438, \u0441\u043e\u0443\u0441 \u0421\u043c\u0435\u0442\u0430\u043d\u043d\u044b\u0439, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043f\u0435\u0446\u0438\u0438, \u0437\u0435\u043b\u0435\u043d\u044c. ",price:1129,status:"available"},dish5:{name:"\u0421 \u0432\u044f\u043b\u0435\u043d\u043e\u0439 \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u043e\u0439",image:"./images/sample-pizza/sample-pizza5.jpg",description:"\u0412\u044f\u043b\u0435\u043d\u0430\u044f \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u0430, \u0433\u0440\u0443\u0434\u0438\u043d\u043a\u0430, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b, \u0441\u043e\u0443\u0441 \u0413\u043e\u0440\u0447\u0438\u0447\u043d\u044b\u0439, \u0440\u0443\u043a\u043a\u043e\u043b\u0430, \u043f\u043e\u043c\u0438\u0434\u043e\u0440\u044b \u0447\u0435\u0440\u0440\u0438, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043f\u0435\u0446\u0438\u0438.",price:2234,status:"available"}},U=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={dishes:{},order:{}},a.updateDish=function(e,t){var r=Object(b.a)({},a.state.dishes);r[t]=e,a.setState({dishes:r})},a.addDish=function(e){var t=Object(b.a)({},a.state.dishes);t["dish".concat(Date.now())]=e,a.setState({dishes:t})},a.deleteDish=function(e){var t=Object(b.a)({},a.state.dishes);t[e]=null,a.setState({dishes:t})},a.addToOrder=function(e){var t=Object(b.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a.removeFromOrder=function(e){var t=Object(b.a)({},a.state.order);delete t[e],a.setState({order:t})},a.loadSampleDishes=function(){a.setState({dishes:I})},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("pizza-store-order");e&&this.setState({order:JSON.parse(e)}),this.ref=T.syncState("".concat(this.props.match.params.store,"/dishes"),{context:this,state:"dishes"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("pizza-store-order",JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){T.removeBinding(this.ref)}},{key:"render",value:function(){return n.a.createElement("div",{className:"page-wrapper"},n.a.createElement("div",{className:"store-wrapper"},n.a.createElement(O,{dishes:this.state.dishes,addToOrder:this.addToOrder}),n.a.createElement(y,{order:this.state.order,dishes:this.state.dishes,removeFromOrder:this.removeFromOrder}),n.a.createElement(A,{addDish:this.addDish,dishes:this.state.dishes,deleteDish:this.deleteDish,updateDish:this.updateDish,loadSampleDishes:this.loadSampleDishes})))}}]),t}(n.a.Component);var B=function(){return n.a.createElement("div",null,"Not found!")};var J=function(){return n.a.createElement(c.a,null,n.a.createElement(o.a,null,n.a.createElement(l.a,{exact:!0,path:"/",component:f}),n.a.createElement(l.a,{path:"/:store",component:U}),n.a.createElement(l.a,{component:B})))};a(144);i.a.render(n.a.createElement(J,null),document.getElementById("main"))},74:function(e,t,a){e.exports=a(146)}},[[74,2,1]]]);
//# sourceMappingURL=main.ae1c0153.chunk.js.map