webpackJsonp([0xbfcc6ed61fef],{403:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),u=n(i),s=a(56),c=n(s),d=a(407),f=n(d),m=a(5),p=a(52),h=n(p),b=function(e,t){return"admin"===e.role?-1:"admin"===t.role?1:"editor"===e.role?-1:"editor"===t.role?1:"member"===e.role?-1:"member"===t.role?1:0},v=function(e,t){return null===e.name?1:null===t.name?-1:e.name.localeCompare(t.name)},g=function(e){function t(){l(this,t);var a=r(this,e.call(this));return a.editDJ=function(e){var t=a.state.users,n=t.find(function(t){return t.id===e});a.setState({selectedId:e,selectedObject:u.default.createElement(f.default,{selectedObject:n,fetchFunction:a.fetchUsers})})},a.fetchUsers=function(){a.setState({selectedObject:null}),(0,m.fetchAll)("users").then(function(e){var t=e.sort(v).sort(b);a.setState({users:t})})},a.state={users:[],selectedId:0,selectedObject:null},a}return o(t,e),t.prototype.componentDidMount=function(){this.fetchUsers()},t.prototype.render=function(){var e=this,t=this.state,a=t.users,n=t.selectedId,l=t.selectedObject;return a?u.default.createElement("div",{className:h.default.center},u.default.createElement("div",{className:h.default.main},u.default.createElement("div",{className:h.default.list},a.map(function(t){return u.default.createElement(c.default,{title:t.name,onClick:function(){return e.editDJ(t.id)},selected:t.id===n,key:t.id})})),u.default.createElement("div",{className:h.default.selected},l))):u.default.createElement("div",{className:h.default.center})},t}(u.default.Component);t.default=g,e.exports=t.default},104:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=a(1),s=n(u),c=a(3),d=n(c),f=a(5),m=a(13),p=n(m),h=a(19),b=n(h),v=a(55),g=n(v),E=a(87),y=n(E),O=a(21),_=n(O),j={name:void 0,email:void 0,position:void 0,description:void 0},C=function(e){function t(){l(this,t);var a=r(this,e.call(this));return a.handleChange=function(e){var t,n=e.target.name;if("null"===e.target.value){var l;return void a.setState((l={},l[n]=null,l))}a.setState((t={},t[n]=e.target.value,t))},a.uploadChanges=function(){var e=a.state.id;e<0?a.addMember():a.updateMember()},a.addMember=function(){var e=a.state.photo;(0,f.fetchPost)("members",i({},a.state,{image:e})).then(function(){var e=a.props.fetchFunction;e()})},a.updateMember=function(){var e=a.state.photo;(0,f.fetchPut)("members",i({},a.state,{image:e})).then(function(){var e=a.props.fetchFunction;e()})},a.state={id:-1},a}return o(t,e),t.prototype.componentDidMount=function(){var e=this.props.selectedObject;this.setState(i({},j,e,{photo:e.image}))},t.prototype.componentWillReceiveProps=function(e){var t=e.selectedObject;this.setState(i({},j,t,{photo:t.image}))},t.prototype.render=function(){var e=this.props,t=e.selected,a=e.title,n=e.fetchFunction,l=e.deletable,r=this.state,o=r.id,u=r.name,c=r.email,d=r.position,f=r.description,m=o<0;return s.default.createElement("div",{className:p.default.main},l?s.default.createElement(_.default,{id:o,type:"members",fetchFunction:n}):null,s.default.createElement("div",{className:p.default.formgroup,hidden:t!==a},m?"Új Tag adatai:":"Tag adatai:",s.default.createElement(b.default,{selected:t,title:a,handleChange:this.handleChange,value:u,name:"name",example:"DJ Eddy",label:"Név"}),s.default.createElement(b.default,{selected:t,title:a,handleChange:this.handleChange,value:c,name:"email",example:"www.example.com",label:"Email"}),s.default.createElement(b.default,{selected:t,title:a,handleChange:this.handleChange,value:d,name:"position",example:"tag",label:"Pozíció"}),s.default.createElement(g.default,{selected:t,title:a,handleChange:this.handleChange,value:f,name:"description",example:"Csatlakoztam a körhöz",label:"Leírás"}),s.default.createElement(y.default,i({handleChange:this.handleChange},this.state)),s.default.createElement("div",{className:p.default.formgroup},s.default.createElement("button",{onClick:this.uploadChanges,type:"submit",className:p.default.submit},m?"Tag hozzáadása":"Tag módosítása"))))},t}(s.default.Component);C.propTypes={selectedObject:d.default.instanceOf(Object).isRequired,selected:d.default.string,title:d.default.string,fetchFunction:d.default.func.isRequired,deletable:d.default.bool},C.defaultProps={selected:"",title:"",deletable:!0},t.default=C,e.exports=t.default},407:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=a(1),s=n(u),c=a(3),d=n(c),f=a(5),m=a(25),p=a(13),h=n(p),b=a(62),v=n(b),g=a(21),E=n(g),y=a(104),O=n(y),_={name:void 0,email:void 0,role:void 0,memeber_id:void 0},j=function(e){function t(){l(this,t);var a=r(this,e.call(this));return a.handleChange=function(e){var t,n=e.target.name;if("null"===e.target.value){var l;return void a.setState((l={},l[n]=null,l))}a.setState((t={},t[n]=e.target.value,t))},a.uploadChanges=function(){var e=a.state.id;e<0?a.addMember():a.updateMember()},a.addMember=function(){var e=i({},a.state,{members:[]});(0,f.fetchPost)("users",e).then(function(){var e=a.props.fetchFunction;e()})},a.updateMember=function(){var e=i({},a.state,{members:[]});(0,f.fetchPut)("users",e).then(function(){var e=a.props.fetchFunction;e()})},a.fetchMembers=function(){(0,f.fetchAll)("members").then(function(e){a.setState({members:e})})},a.addNewElement=function(e){a.setState({addSelected:e})},a.close=function(){a.setState({addSelected:null})},a.state={id:-1,members:[],addSelected:null},a}return o(t,e),t.prototype.componentDidMount=function(){var e=this.props.selectedObject;this.setState(i({},_,e)),this.fetchMembers()},t.prototype.componentWillReceiveProps=function(e){var t=e.selectedObject;this.setState(i({},_,t))},t.prototype.render=function(){var e=this,t=this.props,a=t.selected,n=t.title,l=t.fetchFunction,r=this.state,o=r.id,i=r.name,u=r.email,c=r.role,d=r.member_id,f=r.members,p=r.addSelected;if(!f)return s.default.createElement("div",{className:h.default.main});var b=o<0,g=[];return g.push(s.default.createElement("option",{value:"admin"},"Admin")),g.push(s.default.createElement("option",{value:"editor"},"Szerkesztő")),g.push(s.default.createElement("option",{value:"member"},"Tag")),s.default.createElement("div",{className:h.default.main},s.default.createElement(E.default,{id:o,type:"members",fetchFunction:l}),s.default.createElement("div",{className:h.default.formgroup,hidden:a!==n},b?"Új Tag adatai:":"Tag adatai:",s.default.createElement("div",{className:h.default.formgroup},o+" : "+i),s.default.createElement("div",{className:h.default.formgroup},u),s.default.createElement("div",{className:h.default.formgroup},(0,m.getID)()!=o?s.default.createElement(v.default,{selected:a,title:n,handleChange:this.handleChange,value:c,name:"role",example:"tag",label:"Pozíció",options:g}):c,s.default.createElement(v.default,{selected:a,title:n,handleChange:this.handleChange,value:d,name:"member_id",label:"Tag",options:f.map(function(e){return s.default.createElement("option",{value:e.id,key:e.id},e.id+" – "+e.name)}),addNew:function(){return e.addNewElement("member_id")},close:function(){return e.close()}}),s.default.createElement(O.default,{selected:p,title:"member_id",selectedObject:{id:-1},fetchFunction:this.fetchMembers})),s.default.createElement("div",{className:h.default.formgroup},s.default.createElement("button",{onClick:this.uploadChanges,type:"submit",className:h.default.submit},"Felhasználó módosítása"))))},t}(s.default.Component);j.propTypes={selectedObject:d.default.instanceOf(Object).isRequired,selected:d.default.string,title:d.default.string,fetchFunction:d.default.func.isRequired},j.defaultProps={selected:"",title:""},t.default=j,e.exports=t.default},449:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),o=a(23),i=n(o),u=a(403),s=n(u),c=a(58),d=n(c),f=a(24),m=n(f),p=a(25);a(44);var h=function(){return(0,p.isAdmin)()?r.default.createElement("div",null,r.default.createElement(d.default,{users:!0}),r.default.createElement(i.default,{transitionName:"fade",transitionAppearTimeout:1e3,transitionEnterTimeout:300,transitionAppear:!0,transitionLeaveTimeout:300},r.default.createElement("div",{className:m.default.main},r.default.createElement(s.default,null)))):r.default.createElement("div",{className:m.default.pageCenter},r.default.createElement("div",null,"Nincs Jogosultságod ehhez az oldalhoz. Jelentkezz be!"))};t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-edit-users-js-25b5dfe70ee28dedf8b4.js.map