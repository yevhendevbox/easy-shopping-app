import{u as m,a as f,b as v,r as g,o as x,g as h,c as l,d as w,e as y,f as t,h as s,t as o,w as i,i as b,j as d}from"./index-31dc055f.js";const k={class:"flex-grow-1 pt-16"},B={class:"container-sm py-16 d-flex flex-column flex-md-row flex-gap-4"},P={class:"d-flex flex-column flex-gap-2 flex-grow-0 flex-shrink-1"},V={class:"text-h2"},C={class:"text-h3"},L={class:"text-medium-emphasis"},N={class:"d-flex justify-end"},E={__name:"ProductView",setup(S){const{id:u}=m().params,p=f(),a=v();a.setOrderListFromLocalStorage();const e=g({id:null,title:"",price:null,description:"",category:"",image:"",rating:{}});return x(async()=>{try{e.value=await h(u),e.value||p.push({name:"notFound"})}catch(r){throw new Error(r)}}),(r,n)=>{const _=l("v-img"),c=l("v-btn");return w(),y("main",k,[t("div",B,[s(_,{width:400,"aspect-ratio":"16/9",cover:"",src:e.value.image,class:"flex-grow-1 flex-shrink-0"},null,8,["src"]),t("div",P,[t("h2",V,o(e.value.title),1),t("h3",C,o(e.value.price+"$"),1),t("div",null,[t("p",L," category: "+o(e.value.category)+" | rating: "+o(e.value.rating.rate)+"/"+o(e.value.rating.count),1)]),t("p",null,o(e.value.description),1),t("div",N,[s(c,{class:"me-2 text-none",to:"/",border:"","prepend-icon":"mdi-backspace-outline",variant:"flat"},{default:i(()=>[d(" Back to products ")]),_:1}),s(c,{border:"",class:"text-none",color:"amber-lighten-1","prepend-icon":"mdi-cart-plus",variant:"flat",onClick:n[0]||(n[0]=j=>b(a).addProductToAnOrder(e.value))},{default:i(()=>[d(" Add to cart ")]),_:1})])])])])}}};export{E as default};
