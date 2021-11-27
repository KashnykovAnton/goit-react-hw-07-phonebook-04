(this["webpackJsonpgoit-react-hw-07-phonebook-04"]=this["webpackJsonpgoit-react-hw-07-phonebook-04"]||[]).push([[0],{16:function(t,e){},17:function(t,e){},34:function(t,e,n){},35:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"filterContact",(function(){return w}));var a=n(0),r=n.n(a),o=n(12),i=n.n(o),s=n(4),u=(n(33),n(34),n(35),n(2));function d(t){var e=t.title,n=t.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:e}),n]})}var b=n(10),j=n(19),l=n(21),O=n(20),h=n(6),f=Object(O.a)({reducerPath:"contactsAPI",tagTypes:["Contacts"],baseQuery:Object(h.d)({baseUrl:"https://6196d384af46280017e7e2d4.mockapi.io"}),endpoints:function(t){return{getContacts:t.query({query:function(){return"/contacts"},providesTags:function(t){return t?[].concat(Object(l.a)(t.map((function(t){return{type:"Contacts",id:t.id}}))),[{type:"Contacts"}]):["Contacts"]}}),addContact:t.mutation({query:function(t){return{url:"/contacts",method:"POST",body:Object(j.a)({},t)}},invalidatesTags:["Contacts"]}),deleteContact:t.mutation({query:function(t){return{url:"/contacts/".concat(t),method:"DELETE"}},invalidatesTags:["Contacts"]})}}}),m=f.useGetContactsQuery,p=f.useAddContactMutation,x=f.useDeleteContactMutation;function v(t){var e=t.id,n=t.name,c=t.number,a=x(),r=Object(b.a)(a,1)[0];return Object(u.jsxs)("li",{children:[Object(u.jsxs)("span",{children:[n,":"]}),Object(u.jsx)("span",{children:c}),Object(u.jsx)("button",{type:"button",id:e,onClick:function(){!function(t){r(t)}(e)},children:"Delete"})]})}function C(){var t=m(void 0,{refetchOnFocus:!0}),e=t.data,n=void 0===e?[]:e,c=t.error,r=t.isFetching,o=Object(s.e)((function(t){return t.filter})),i=Object(a.useMemo)((function(){var t=o.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}),[o,n]);return c?Object(u.jsxs)("h1",{children:["Sory, we have some troubles: ",c.data]}):Object(u.jsxs)(u.Fragment,{children:[r&&Object(u.jsx)("h1",{children:"Loading..."}),Object(u.jsx)("ul",{children:!r&&i.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(u.jsx)(v,{id:e,name:n,number:c},e)}))}),0===n.length&&!r&&Object(u.jsx)("h1",{children:"There are no contacts in phonebook!"})]})}var y=n(39);function g(){var t=Object(a.useState)(""),e=Object(b.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(b.a)(r,2),i=o[0],s=o[1],d=m().data,j=void 0===d?[]:d,l=p(),O=Object(b.a)(l,1)[0],h=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":s(a);break;default:return}},f=function(t){var e=t.name.toLowerCase();j.find((function(t){return t.name.toLowerCase()===e}))?alert("".concat(t.name," is already in contacts")):O(t)},x=Object(y.a)(),v=Object(y.a)();return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f({name:n,number:i}),c(""),s("")},children:[Object(u.jsx)("label",{htmlFor:x,children:"Name"}),Object(u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,id:x,onChange:h}),Object(u.jsx)("label",{htmlFor:v,children:"Number"}),Object(u.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,id:v,onChange:h}),Object(u.jsx)("button",{type:"submit",children:"Add contact"})]})}n(16),n(17);var k=n(1),w=Object(k.b)("contacts/filterContact");function A(){var t=Object(s.e)((function(t){return t.filter})),e=Object(s.d)(),n=Object(a.useCallback)((function(t){e(c.filterContact(t.target.value))}),[e]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:Object(y.a)(),children:"Find contacts by name"}),Object(u.jsx)("input",{type:"text",value:t,id:Object(y.a)(),onChange:n})]})}function T(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{title:"Phonebook",children:Object(u.jsx)(g,{})}),Object(u.jsxs)(d,{title:"Contacts",children:[Object(u.jsx)(A,{}),Object(u.jsx)(C,{})]})]})}var F,q=n(8),L=n(9),S=Object(k.d)("",Object(q.a)({},c.filterContact,(function(t,e){return e.payload}))),z=Object(k.a)({reducer:(F={},Object(q.a)(F,f.reducerPath,f.reducer),Object(q.a)(F,"filter",S),F),middleware:function(t){return t({serializableCheck:{ignoredActions:[L.a,L.f,L.b,L.c,L.d,L.e]}}).concat(f.middleware)},devTools:!1});Object(h.e)(z.dispatch),i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(s.a,{store:z,children:Object(u.jsx)(T,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.13055e75.chunk.js.map