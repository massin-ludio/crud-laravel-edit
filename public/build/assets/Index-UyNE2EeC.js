import{Q as V,r as f,T as D,l as b,o as r,f as u,a as p,w as v,F as x,b as e,m as N,e as A,i as g,p as y,u as c,g as B,k as L,t as w,D as $,E as q}from"./app-DaBEuCf8.js";import F from"./NewUser-DADCSU8m.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./TextInput-BBN4RJwj.js";import"./PrimaryButton-C-YJu6eE.js";const n=i=>($("data-v-624701d0"),i=i(),q(),i),T=n(()=>e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Dashboard",-1)),U={class:"py-12"},G={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Q={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},R={class:"p-6 text-gray-900"},j={class:"min-w-full leading-normal"},z=n(()=>e("thead",null,[e("tr",null,[e("th",null,"Nombre"),e("th",null,"Email"),e("th",null,"Acciones")])],-1)),J=["onClick"],K=["onClick"],O=n(()=>e("h2",null,"Editar Perfil",-1)),W=n(()=>e("label",{for:"name"},"Nombre:",-1)),X=n(()=>e("label",{for:"email"},"Email:",-1)),Y=n(()=>e("button",{type:"submit"},"Guardar Cambios",-1)),Z={__name:"Index",setup(i){const{props:C}=V(),a=f(C.profiles),d=f(!1),o=D({name:"",email:""});let m=null;const _=()=>{o.get(route("profiles.index"),{onSuccess:t=>{a.value=t.props.profiles}})},E=t=>{o.name=t.name,o.email=t.email,m=t.id,d.value=!0},k=()=>{o.put(route("profiles.update",m),{onSuccess:()=>{d.value=!1;const t=a.value.find(s=>s.id===m);t&&(t.name=o.name,t.email=o.email),L(_)},onError:t=>{console.error(t)}})},h=()=>{d.value=!1},S=t=>{o.delete(route("profiles.destroy",t),{onSuccess:()=>{a.value=a.value.filter(s=>s.id!==t)},onError:s=>{console.error(s)}})};return(t,s)=>{const I=b("Head"),M=b("AuthenticatedLayout");return r(),u(x,null,[p(I,{title:"Dashboard"}),p(M,null,{header:v(()=>[T]),default:v(()=>[e("div",U,[e("div",G,[e("div",Q,[e("div",R,[e("div",null,[e("table",j,[z,e("tbody",null,[(r(!0),u(x,null,N(a.value,l=>(r(),u("tr",{key:l.id},[e("td",null,w(l.name),1),e("td",null,w(l.email),1),e("td",null,[e("button",{onClick:P=>E(l),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Editar",8,J),e("button",{onClick:P=>S(l.id),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"},"Eliminar",8,K)])]))),128))])]),d.value?(r(),u("div",{key:0,onClose:h},[O,e("form",{onSubmit:A(k,["prevent"])},[W,g(e("input",{type:"text",id:"name","onUpdate:modelValue":s[0]||(s[0]=l=>c(o).name=l),required:""},null,512),[[y,c(o).name]]),X,g(e("input",{type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=l=>c(o).email=l),required:""},null,512),[[y,c(o).email]]),Y,e("button",{type:"button",onClick:h},"Cancelar")],32)],32)):B("",!0)])])])])]),p(F,{onRegisterSuccess:_})]),_:1})],64)}}},ne=H(Z,[["__scopeId","data-v-624701d0"]]);export{ne as default};
