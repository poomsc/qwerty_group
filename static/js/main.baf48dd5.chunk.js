(this.webpackJsonpqwerty_group=this.webpackJsonpqwerty_group||[]).push([[0],{21:function(e,t,s){},22:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(2),r=s.n(n),i=s(7),a=s.n(i),l=(s(21),s(22),s(3)),o=s(8),d=s.n(o),j=s(10),b=s(5),x=s(9),u=s.p+"static/media/logo.5531b895.png",h=function(e){var t=e.setWordSearch,s=e.openSideBar,n=e.setOpenSideBar;return Object(c.jsx)("nav",{class:"bg-white fixed w-full z-50",children:Object(c.jsxs)("div",{class:"flex justify-center my-2",children:[Object(c.jsx)("img",{alt:"logo",src:u,className:"h-7 mx-3 mt-2 lg:mt-0 lg:mx-0 lg:h-10 lg:mr-5"}),Object(c.jsxs)("div",{class:" bg-white rounded flex justify-items-center  items-center lg:w-96 sm:w-28 p-3 shadow-sm border border-gray-200",children:[Object(c.jsx)("button",{class:"outline-none focus:outline-none",children:Object(c.jsx)(b.b,{})}),Object(c.jsx)("input",{type:"search",name:"",placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32","x-model":"q",class:"w-full pl-4 text-sm outline-none focus:outline-none bg-transparent",onChange:function(e){t(e.target.value)}}),Object(c.jsx)("div",{class:"select",children:Object(c.jsxs)("select",{name:"",id:"","x-model":"image_type",class:"text-sm outline-none focus:outline-none bg-transparent",children:[Object(c.jsx)("option",{value:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",selected:!0,children:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"}),Object(c.jsx)("option",{value:"\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e43\u0e01\u0e25\u0e49\u0e09\u0e31\u0e19",children:"\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e43\u0e01\u0e25\u0e49\u0e09\u0e31\u0e19"}),Object(c.jsx)("option",{value:"\u0e0a\u0e37\u0e48\u0e2d\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32",children:"\u0e0a\u0e37\u0e48\u0e2d\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"}),Object(c.jsx)("option",{value:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"})]})})]}),Object(c.jsx)("h1",{children:Object(c.jsx)(x.a,{className:"mt-3 mx-2 text-2xl"})}),Object(c.jsx)("div",{class:"flex-auto text-4xl pt-1 mr-2 lg:hidden",onClick:function(){n(!s),console.log(s)},children:Object(c.jsx)(j.a,{})})]})})},g=function(e){var t=e.value,s=e.index,n=e.setCategories;return Object(c.jsxs)("div",{class:"flex items-center",children:[Object(c.jsx)("input",{id:"push_everything",name:"push_notifications",type:"radio",class:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300",onClick:function(){n(s),console.log(s)}}),Object(c.jsx)("label",{for:"push_everything",class:"ml-3 block text-sm font-medium text-gray-700",children:t})]})},O=function(e){var t=e.data.categories,s=e.setCategories;return Object(c.jsxs)("fieldset",{class:"pb-4",children:[Object(c.jsx)("div",{children:Object(c.jsx)("legend",{class:"text-base font-semibold text-gray-900",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"})}),Object(c.jsxs)("div",{class:"mt-2 space-y-2",children:[Object(c.jsx)(g,{value:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",index:-1,setCategories:s}),t.map((function(e,t){return Object(c.jsx)(g,{value:e.name,index:t,setCategories:s})}))]})]})},p=function(e){var t=e.data.priceRange,s=e.setPriceLevel;return Object(c.jsxs)("div",{class:"col-span-6 sm:col-span-3 pb-4",children:[Object(c.jsx)("label",{for:"provinces",class:"block text-base font-semibold text-gray-900",children:"\u0e23\u0e32\u0e04\u0e32"}),Object(c.jsxs)("select",{id:"provinces",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",onChange:function(e){s(parseInt(e.target.value)+1),console.log(parseInt(e.target.value)+1)},children:[Object(c.jsx)("option",{value:5,children:"\u0e44\u0e21\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14"}),t.map((function(e,t){return Object(c.jsx)("option",{value:t,children:e})}))]})]})},m=function(e){var t=e.data.provinces,s=e.setProvinces;return Object(c.jsxs)("div",{class:"col-span-6 sm:col-span-3 pb-4",children:[Object(c.jsx)("label",{for:"provinces",class:"block text-base font-semibold text-gray-900",children:"\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14 / \u0e43\u0e01\u0e25\u0e49\u0e09\u0e31\u0e19"}),Object(c.jsxs)("select",{id:"provinces",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",onChange:function(e){s(e.target.value),console.log(e.target.value)},children:[Object(c.jsx)("option",{value:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",children:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"}),t.map((function(e){return Object(c.jsx)("option",{value:e,children:e})}))]})]})},f=function(e){var t=e.value,s=e.index,n=e.setSubCategories;return Object(c.jsxs)("div",{class:"flex items-center",children:[Object(c.jsx)("input",{id:"push_everything2",name:"push_notifications2",type:"radio",class:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300",onClick:function(){n(s),console.log("subCat",s)}}),Object(c.jsx)("label",{for:"push_everything2",class:"ml-3 block text-sm font-medium text-gray-700",children:t})]})},v=function(e){var t=e.data.subcategories,s=e.setSubCategories;return Object(c.jsxs)("fieldset",{class:"pb-4",children:[Object(c.jsx)("div",{children:Object(c.jsx)("legend",{class:"text-base font-semibold text-gray-900",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"})}),Object(c.jsxs)("div",{class:"mt-2 space-y-2",children:[Object(c.jsx)(f,{value:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",index:-1,setSubCategories:s}),t.map((function(e,t){return Object(c.jsx)(f,{value:e,index:t+1,setSubCategories:s})}))]})]})},y=function(){return Object(c.jsxs)("div",{class:"col-span-6 sm:col-span-3 pb-4",children:[Object(c.jsx)("label",{for:"region",class:"block text-base font-semibold text-gray-900",children:"\u0e20\u0e39\u0e21\u0e34\u0e20\u0e32\u0e04"}),Object(c.jsxs)("select",{id:"region",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[Object(c.jsx)("option",{value:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",children:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"}),["\u0e20\u0e32\u0e04\u0e40\u0e2b\u0e19\u0e37\u0e2d","\u0e20\u0e32\u0e04\u0e15\u0e30\u0e27\u0e31\u0e19\u0e2d\u0e2d\u0e01","\u0e20\u0e32\u0e04\u0e15\u0e30\u0e27\u0e31\u0e19\u0e15\u0e01","\u0e20\u0e32\u0e04\u0e01\u0e25\u0e32\u0e07","\u0e20\u0e32\u0e04\u0e15\u0e30\u0e27\u0e31\u0e19\u0e2d\u0e2d\u0e01\u0e40\u0e09\u0e35\u0e22\u0e07\u0e40\u0e2b\u0e19\u0e37\u0e2d","\u0e20\u0e32\u0e04\u0e43\u0e15\u0e49"].map((function(e){return Object(c.jsx)("option",{value:e,children:e})}))]})]})},w=s(11),S=s(12),C=s(15),k=s(14),N=function(e){Object(C.a)(s,e);var t=Object(k.a)(s);function s(e){var c;Object(w.a)(this,s),(c=t.call(this,e)).state={stars:[],rating:0,hovered:0,selectedIcon:"\u2605",deselectedIcon:"\u2606"};for(var n=e.outOf?e.outOf:5,r=0;r<n;r++)c.state.stars.push(r+1);return c}return Object(S.a)(s,[{key:"changeRating",value:function(e){this.setState({rating:e}),this.props.onChange&&this.props.onChange(e)}},{key:"hoverRating",value:function(e){this.setState({hovered:e})}},{key:"render",value:function(){var e=this,t=this.state,s=t.stars,n=t.rating,r=t.hovered,i=t.deselectedIcon,a=t.selectedIcon;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{for:"provinces",class:"block text-base font-semibold text-gray-900",children:"\u0e08\u0e33\u0e19\u0e27\u0e19 Rating"}),Object(c.jsx)("div",{className:"rating pl-3",style:{fontSize:"1.5em",color:"#063662"},children:s.map((function(t){return Object(c.jsx)("span",{className:"mr-2",style:{cursor:"pointer"},onClick:function(){e.changeRating(t)},onMouseEnter:function(){e.hoverRating(t)},onMouseLeave:function(){e.hoverRating(0)},children:n<t&&r<t?i:a})}))})]})}}]),s}(r.a.Component),B=function(e){var t=e.value;return Object(c.jsxs)("div",{class:"flex items-center",children:[Object(c.jsx)("input",{id:"push_everything",name:"push_notifications",type:"radio",class:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"}),Object(c.jsx)("label",{for:"push_everything",class:"ml-3 block text-sm font-medium text-gray-700",children:t})]})},P=function(){return Object(c.jsxs)("fieldset",{class:"pb-4",children:[Object(c.jsx)("div",{children:Object(c.jsx)("legend",{class:"text-base font-semibold text-gray-900",children:"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19"})}),Object(c.jsxs)("div",{class:"mt-2 space-y-2",children:[Object(c.jsx)(B,{value:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",index:-1}),Object(c.jsx)(B,{value:"\u0e23\u0e31\u0e10\u0e1a\u0e32\u0e25",index:-1}),Object(c.jsx)(B,{value:"\u0e40\u0e2d\u0e01\u0e0a\u0e19",index:-1}),Object(c.jsx)(B,{value:"\u0e23\u0e31\u0e10\u0e27\u0e34\u0e2a\u0e32\u0e2b\u0e01\u0e34\u0e08",index:-1})]})]})},_=function(e){var t=e.children,s=e.openSideBar;return Object(c.jsx)("div",{className:"".concat(s?"":"hidden"," z-30 fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 shadow-lg overflow-y-scroll"),children:Object(c.jsx)("div",{class:"h-full scrolling-touch lg:h-auto lg:block lg:sticky lg:top-20 bg-white lg:bg-transparent",children:t})})},F=function(e){var t=e.data,s=e.openSideBar,n=(e.setOpenSideBar,e.setCategories),r=e.setProvinces,i=e.setPriceLevel,a=e.setSubCategories,l=e.categories;return Object(c.jsx)(_,{openSideBar:s,children:Object(c.jsx)("div",{class:"flex flex-col px-5",children:t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{data:t,setCategories:n}),Object(c.jsx)("br",{}),Object(c.jsx)(m,{data:t,setProvinces:r}),Object(c.jsx)("br",{}),Object(c.jsx)(p,{data:t,setPriceLevel:i}),Object(c.jsx)("br",{}),Object(c.jsx)(y,{}),Object(c.jsx)("br",{}),Object(c.jsx)(N,{}),Object(c.jsx)("br",{}),Object(c.jsx)(P,{}),Object(c.jsx)("br",{}),l>-1&&Object(c.jsx)(v,{data:t.categories[l],setSubCategories:a})]})})})},I=s(13),L=s(4),T=s.n(L),R=function(e){var t=e.data,s=t.shopNameTH,n=t.categoryName,r=t.subcategoryName,i=t.coverImageId,a=t.facilities,l=t.priceLevel,o=t.isOpen,d=t.highlightText,j=t.recommendedItems,x=t.addressProvinceName,u=t.addressDistrictName,h=e.wordSearch;return Object(c.jsx)(c.Fragment,{children:(T.a.compareTwoStrings(h,s)>.001||T.a.compareTwoStrings(h,n)>.001||T.a.compareTwoStrings(h,r)>.001||T.a.compareTwoStrings(h,x)>.001||0===h.length)&&Object(c.jsxs)("div",{class:"md:flex shadow-lg  mx-6 md:mx-auto md:my-2 my-40 max-w-lg md:max-w-2xl h-64",children:[Object(c.jsx)("img",{class:"h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6",src:i,alt:"bag"}),Object(c.jsxs)("div",{class:"w-full md:w-2/3 px-4 py-4 bg-white rounded-lg",children:[Object(c.jsxs)("div",{class:"flex items-center",children:[Object(c.jsx)("h1",{class:"text-xl text-gray-800 font-bold mr-auto",children:s}),"Y"===o?Object(c.jsx)("button",{class:"bg-green-600 text-white px-2 py-2 rounded-md",children:"\u0e40\u0e1b\u0e34\u0e14\u0e2d\u0e22\u0e39\u0e48"}):Object(c.jsx)("button",{class:"bg-gray-600 text-white px-2 py-2 rounded-md",children:"\u0e1b\u0e34\u0e14"})]}),Object(c.jsxs)("div",{class:"text-base text-gray-400",children:[Object(c.jsxs)("span",{children:[r," | "]}),Object(c.jsx)("span",{class:"font-semibold text-black",children:"\u0e3f".repeat(l)}),Object(c.jsx)("span",{class:"font-semibold ",children:"\u0e3f".repeat(4-l)}),Object(c.jsxs)("span",{children:[" | ",u," "]}),x]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{class:"text-base",children:[Object(c.jsx)("p",{class:"text-gray-500 mt-2",children:d}),Object(c.jsxs)("p",{class:"mt-2",children:[Object(c.jsx)("span",{class:"",children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e19\u0e30\u0e19\u0e33: "}),Object(c.jsx)("span",{class:" text-gray-500",children:j.join(", ")})]})]}),Object(c.jsxs)("div",{class:"text-xl text-green-600 flex items-center mt-2 top-auto",children:[Object(c.jsx)("button",{class:"bg-white px-2 py-2 rounded hover:underline",children:a.includes("\u0e17\u0e35\u0e48\u0e08\u0e2d\u0e14\u0e23\u0e16")?Object(c.jsx)(b.a,{}):Object(c.jsx)(c.Fragment,{})}),Object(c.jsx)("button",{class:"bg-white px-2 py-2 rounded hover:underline",children:a.includes("\u0e23\u0e31\u0e1a\u0e08\u0e2d\u0e07\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32")?Object(c.jsx)(I.a,{}):Object(c.jsx)(c.Fragment,{})})]})]})]})})},z=function(e){var t=e.data,s=(e.categories,e.provinces),n=e.priceLevel,r=(e.subCategories,e.wordSearch);return Object(c.jsx)("div",{className:"container pt-24 mx-auto",children:Object(c.jsx)("div",{className:"flex flex-wrap -m-4",children:t&&t.merchants.map((function(e){return Object(c.jsx)(c.Fragment,{children:T.a.compareTwoStrings(s,e.addressProvinceName)>.7&&e.priceLevel<=n&&Object(c.jsx)(R,{data:e,wordSearch:r})})}))})})},E=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),s=t[0],r=t[1],i=Object(n.useState)(!0),a=Object(l.a)(i,2),o=a[0],j=a[1],b=Object(n.useState)(!0),x=Object(l.a)(b,2),u=x[0],g=x[1],O=Object(n.useState)(-1),p=Object(l.a)(O,2),m=p[0],f=p[1],v=Object(n.useState)("\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e21\u0e2b\u0e32\u0e19\u0e04\u0e23"),y=Object(l.a)(v,2),w=y[0],S=y[1],C=Object(n.useState)(5),k=Object(l.a)(C,2),N=k[0],B=k[1],P=Object(n.useState)(""),_=Object(l.a)(P,2),I=_[0],L=_[1],T=Object(n.useState)(""),R=Object(l.a)(T,2),E=R[0],q=R[1];return Object(n.useEffect)((function(){j(!0);try{fetch("https://panjs.com/ywc18.json").then((function(e){return e.json()})).then((function(e){return r(e)}))}catch(e){console.log(e)}j(!1)}),[]),o?Object(c.jsx)("div",{className:"flex justify-center items-center min-h-screen text-white",children:Object(c.jsx)(d.a,{type:"spinningBubbles",color:"#6EDCFF",height:"8%",width:"8%"})}):Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{setWordSearch:q,openSideBar:u,setOpenSideBar:g}),Object(c.jsx)("div",{className:"w-full max-w-screen-xl mx-auto px-6",children:Object(c.jsxs)("div",{class:"lg:flex",children:[Object(c.jsx)(F,{data:s,openSideBar:u,categories:m,setOpenSideBar:g,setCategories:f,setProvinces:S,setPriceLevel:B,setSubCategories:L}),Object(c.jsx)("div",{className:" min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5",children:Object(c.jsx)(z,{data:s,categories:m,provinces:w,priceLevel:N,subCategories:I,wordSearch:E})})]})})]})};var q=function(){return Object(c.jsx)("div",{class:"bg-gray-200",children:Object(c.jsx)(E,{})})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),r(e),i(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(q,{})}),document.getElementById("root")),D()}},[[23,1,2]]]);
//# sourceMappingURL=main.baf48dd5.chunk.js.map