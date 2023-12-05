(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2203)}])},2203:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Home}});var n=t(5893),o=t(5675),a=t.n(o),s=t(9473),i=t(7294),c=t(8258),l=t(1163),d=t(5697),h=t(5607),u=t.n(h);function Modal(e){let{children:r}=e;return(0,n.jsx)("div",{className:u().root,children:r})}Modal.propTypes={children:d.any};var m=t(1664),_=t.n(m),x=t(4184),p=t.n(x),v=t(2387),j=t.n(v);let f=(0,i.forwardRef)((e,r)=>{let{className:t,cbData:o,children:a,as:s,href:c,onClick:l,onMouseLeave:d,onMouseEnter:h,preventClick:u,stopPropagation:m,...x}=e,v=(0,i.useMemo)(()=>s||(c?"a":"button"),[c,s]),f=(0,i.useMemo)(()=>{var e;return e=c||"",/^https?:\/\//.test(e)},[c]),N=(0,i.useMemo)(()=>p()(t,j().root,{}),[t]),handleMouseLeave=()=>{d&&d(o)},handleMouseEnter=()=>{h&&h(o)};return c&&!f?(0,n.jsx)(_(),{href:c,className:N,ref:r,onMouseLeave:handleMouseLeave,onMouseEnter:handleMouseEnter,...x,children:a}):(0,n.jsx)(v,{className:N,href:c,ref:r,rel:c&&f&&"noopener noreferrer",target:c&&f&&"_blank",onClick:e=>{m&&e.stopPropagation(),u&&e.preventDefault(),l&&l(o)},onMouseLeave:handleMouseLeave,onMouseEnter:handleMouseEnter,...x,children:a})});f.propTypes={className:d.string,cbData:d.func,children:d.any,as:d.any,href:d.string,onClick:d.func,onMouseLeave:d.func,onMouseEnter:d.func,preventClick:d.bool,stopPropagation:d.bool};var N=(0,i.memo)(f),g=t(4427),b=t.n(g);function BookPreview(e){let{title:r,author:t,year:o,onClick:s}=e;return(0,n.jsxs)("div",{className:b().root,children:[(0,n.jsxs)("div",{className:b().header,children:[(0,n.jsx)("h2",{children:r}),(0,n.jsx)(N,{className:b().closeBtn,onClick:s,children:(0,n.jsx)(a(),{src:"/close.svg",alt:"close button icon",width:100,height:100})})]}),(0,n.jsxs)("div",{className:b().container,children:[(0,n.jsxs)("div",{className:b().block,children:[(0,n.jsx)(a(),{src:"/author.svg",alt:"author",width:50,height:100}),(0,n.jsx)("p",{className:b().info,children:t})]}),(0,n.jsxs)("div",{className:b().block,children:[(0,n.jsx)(a(),{src:"/calendar.svg",alt:"calendar",width:50,height:100}),(0,n.jsx)("p",{className:b().info,children:o})]})]})]})}BookPreview.propTypes={title:d.string.isRequired,author:d.string.isRequired,year:d.number.isRequired,onClick:d.func};var k=t(2175),C=[{id:"1",type:"text",name:"title",inputName:"Название",maxLength:"60"},{id:"2",type:"text",name:"author",inputName:"Aвтор",maxLength:"60"},{id:"3",type:"number",name:"year",inputName:"Год издания"}],B=t(570),y=t(6310),F=y.Ry().shape({title:y.Z_().matches(/\S/,"Строка не должна состоять только из пробелов").required("Обязательно для заполнения!"),author:y.Z_().matches(/\S/,"Строка не должна состоять только из пробелов").required("Обязательно для заполнения!"),year:y.Rx("введите число").required("Обязательно для заполнения!").integer("Введите целое число").min(1,"Введите значение не равное 0").max(new Date().getFullYear(),"Этот год еще не наступил :( попробуйте еще раз").test("not-starts-with-zero","Год не может начинаться с 0",e=>{let r=e.toString().charAt(0);return"0"!==r})}),E=t(741),S=t.n(E);function EditForm(e){let{id:r,onClick:t}=e,o=(0,s.v9)(e=>e.books),{title:i,author:c,year:l}=o.find(e=>e.id===r),d=(0,s.I0)(),h=(0,k.TA)({initialValues:{title:i,author:c,year:l},onSubmit:(e,n)=>{setTimeout(()=>{let o=F.isValid(e);o&&(d((0,B.eB)({values:e,id:r})),t()),n.setSubmitting(!1)},300)},validationSchema:F}),u=C.map(e=>(0,n.jsxs)("div",{className:S().inputContainer,children:[(0,n.jsx)("p",{className:S().inputName,children:"".concat(e.inputName," :")}),(0,n.jsx)("input",{type:e.type,name:e.name,placeholder:e.inputName,value:h.values[e.name],onChange:h.handleChange,maxLength:e.maxLength||"",className:S().inputField}),h.touched[e.name]&&h.errors[e.name]&&(0,n.jsx)("div",{className:S().errorMessage,children:h.errors[e.name]})]},e.id));return(0,n.jsxs)("div",{className:S().root,children:[(0,n.jsx)("div",{className:S().header,children:(0,n.jsx)("h2",{children:"Редактирование"})}),(0,n.jsx)(N,{className:S().closeBtn,onClick:t,children:(0,n.jsx)(a(),{src:"/close.svg",alt:"close button icon",width:50,height:50})}),(0,n.jsx)("div",{className:S().container,children:(0,n.jsxs)("form",{className:S().form,onSubmit:h.handleSubmit,onReset:h.resetForm,children:[u,(0,n.jsxs)("div",{className:S().btnContainer,children:[(0,n.jsx)(N,{type:"submit",className:S().saveBtn,children:"Сохранить"}),(0,n.jsx)(N,{type:"reset",className:S().resetBtn,children:"Сброс"}),(0,n.jsx)(N,{className:S().removeBtn,onClick:()=>{d((0,B.fy)({id:r})),t()},children:"Удалить"})]})]})})]})}EditForm.propTypes={id:d.number.isRequired,onClick:d.func};var w=t(5345),M=t.n(w);function Book(e){let{title:r,author:t,year:o,id:s}=e,[c,l]=(0,i.useState)(!1),[d,h]=(0,i.useState)(!1);return(0,n.jsxs)("div",{className:M().root,children:[c&&(0,n.jsx)(Modal,{children:(0,n.jsx)(BookPreview,{title:r,author:t,year:o,onClick:l})}),d&&(0,n.jsx)(Modal,{children:(0,n.jsx)(EditForm,{id:s,onClick:h})}),(0,n.jsx)("div",{className:M().header,children:(0,n.jsx)("h2",{children:r})}),(0,n.jsxs)("div",{className:M().content,children:[(0,n.jsxs)("div",{className:M().container,children:[(0,n.jsx)("p",{className:M().info,children:t}),(0,n.jsx)("p",{className:M().info,children:o})]}),(0,n.jsxs)("div",{className:M().footer,children:[(0,n.jsx)(N,{onClick:()=>{h(!0)},children:(0,n.jsx)(a(),{src:"/edit.svg",alt:"edit icon",width:50,height:50})}),(0,n.jsx)(N,{onClick:()=>{l(!0)},children:(0,n.jsx)(a(),{src:"/eye.svg",alt:"zoom icon",width:50,height:50})})]})]})]})}Book.propTypes={title:d.string.isRequired,author:d.string.isRequired,year:d.number.isRequired,id:d.number.isRequired};var L=t(9851),P=t.n(L);function SearchField(e){let{handleChange:r,value:t,onClick:o}=e;return(0,n.jsx)("div",{className:P().root,children:(0,n.jsxs)("div",{className:P().searchForm,children:[(0,n.jsx)("input",{type:"text",placeholder:"Начать поиск",value:t,onChange:r}),(0,n.jsx)(N,{onClick:o,className:P().resetBtn,children:(0,n.jsx)(a(),{src:"/cross.svg",alt:"reset button icon",width:50,height:50})})]})})}SearchField.propTypes={handleChange:d.func.isRequired,value:d.string,onClick:d.func};var T=t(1790),q=t.n(T);function Library(){let e=(0,l.useRouter)(),r=(0,i.useRef)(null),{query:t}=e,[o,a]=(0,i.useState)(""),d=(0,s.v9)(e=>e.books),h=new c.sz(d,{keySelector:e=>[e.title,e.author]}),u=d.map(e=>(0,n.jsx)(Book,{title:e.title,author:e.author,year:e.year,id:e.id},e.id)),m=h.search(t.search||"").map(e=>(0,n.jsx)(Book,{title:e.title,author:e.author,year:e.year,id:e.id},e.id));return(0,i.useEffect)(()=>{null===r.current&&(r.current=o)},[o]),(0,i.useEffect)(()=>{let t=r.current!==o;if(""!==o&&t)e.push("?search=".concat(o));else if(""===o&&t){let{search:r,...t}=e.query;e.push({pathname:e.pathname,query:t},void 0,{shallow:!0})}r.current=o},[o,e]),(0,i.useEffect)(()=>{t.search&&!o&&a(t.search)},[t.search]),(0,n.jsxs)("div",{className:q().root,children:[d.length>0&&(0,n.jsx)(SearchField,{handleChange:e=>a(e.target.value),value:o,onClick:()=>a("")}),(0,n.jsxs)("div",{className:q().content,children:[t.search&&m,t.search&&0===m.length&&(0,n.jsx)("div",{children:"Ничего не найдено..."}),!t.search&&u]})]})}var A=[{id:"1",type:"text",name:"title",placeholder:"Название",maxLength:"60"},{id:"2",type:"text",name:"author",placeholder:"Aвтор",maxLength:"60"},{id:"3",type:"number",name:"year",placeholder:"Год издания"}],R=t(847),H=t.n(R);function CreateForm(e){let{onClick:r}=e,t=(0,s.I0)(),o=(0,k.TA)({initialValues:{title:"",author:"",year:""},onSubmit:(e,n)=>{setTimeout(()=>{let o=F.isValid(e);o&&(t((0,B.TA)(e)),r()),n.setSubmitting(!1)},300)},validationSchema:F}),a=A.map(e=>(0,n.jsxs)("div",{className:H().inputContainer,children:[(0,n.jsx)("input",{type:e.type,name:e.name,placeholder:e.placeholder||"",maxLength:e.maxLength||"",className:H().inputField,onChange:o.handleChange,value:o.values[e.name]}),o.touched[e.name]&&o.errors[e.name]&&(0,n.jsx)("div",{className:H().errorMessage,children:o.errors[e.name]})]},e.id));return(0,n.jsxs)("div",{className:H().root,children:[(0,n.jsx)("div",{className:H().header,children:(0,n.jsx)("h2",{children:"Новая книга"})}),(0,n.jsx)("div",{className:H().container,children:(0,n.jsxs)("form",{className:H().form,onSubmit:o.handleSubmit,children:[a,(0,n.jsxs)("div",{className:H().btnContainer,children:[(0,n.jsx)(N,{type:"submit",className:H().saveBtn,children:"Сохранить"}),(0,n.jsx)(N,{className:H().cancelBtn,onClick:r,children:"Отмена"})]})]})})]})}CreateForm.propTypes={onClick:d.func};var X=t(8927),Z=t.n(X),O=t(7637),G=t.n(O);function AddBookGroup(){let[e,r]=(0,i.useState)(!1);return(0,n.jsxs)("div",{className:G().root,children:[(0,n.jsx)(N,{onClick:()=>{r(!0)},className:G().addBtn,children:(0,n.jsx)(a(),{src:"/buttonAdd.svg",alt:"add book button",width:120,height:80})}),(0,n.jsx)("p",{className:"".concat(G().btnText," ").concat(Z().className),children:"Нажми, чтобы добавить книгу"}),e&&(0,n.jsx)(Modal,{children:(0,n.jsx)(CreateForm,{onClick:r})})]})}var z=t(1570),D=t.n(z);function HomePage(){return(0,n.jsxs)("main",{className:D().root,children:[(0,n.jsxs)("div",{className:D().header,children:[(0,n.jsx)("div",{className:D().pic,children:(0,n.jsx)(a(),{src:"/star.svg",alt:"little star",width:50,height:50})}),(0,n.jsx)("h1",{children:"My books"})]}),(0,n.jsx)(AddBookGroup,{}),(0,n.jsx)(Library,{})]})}function Home(){return(0,n.jsx)(HomePage,{})}},7637:function(e){e.exports={root:"AddBookGroup_root__2E7hH",btnText:"AddBookGroup_btnText__mIJJi",addBtn:"AddBookGroup_addBtn__jUy9X"}},5345:function(e){e.exports={root:"Book_root__GaDeJ",header:"Book_header__SHfyL",content:"Book_content__yajeU",container:"Book_container___G_zf",info:"Book_info__os_oN",footer:"Book_footer__AqImS"}},4427:function(e){e.exports={root:"bookPreview_root__LJlXa",closeBtn:"bookPreview_closeBtn__vAx5a",container:"bookPreview_container__X1V_a",header:"bookPreview_header__e1KSY",block:"bookPreview_block__ZxZ6C",info:"bookPreview_info__0DAra"}},2387:function(e){e.exports={root:"Button_root__3YzY7"}},847:function(e){e.exports={root:"createForm_root__XTKua",header:"createForm_header__XqCYI",inputField:"createForm_inputField__llfnO",container:"createForm_container__AcZ1_",form:"createForm_form___KwZ6",inputContainer:"createForm_inputContainer__dPZCB",btnContainer:"createForm_btnContainer__yvN_T",saveBtn:"createForm_saveBtn__bB9C0",cancelBtn:"createForm_cancelBtn__R5eq8",errorMessage:"createForm_errorMessage__7FoaL"}},741:function(e){e.exports={root:"EditForm_root__s0tTx",closeBtn:"EditForm_closeBtn__XBh3C",container:"EditForm_container__6NOQo",header:"EditForm_header__lGpbQ",form:"EditForm_form__JgKXQ",inputContainer:"EditForm_inputContainer__gClVt",inputField:"EditForm_inputField__9YoL4",errorMessage:"EditForm_errorMessage__LAoIC",btnContainer:"EditForm_btnContainer__3zlC5",saveBtn:"EditForm_saveBtn___W7Cl",resetBtn:"EditForm_resetBtn__8Ov96",removeBtn:"EditForm_removeBtn__gm_ZN"}},1790:function(e){e.exports={root:"Library_root__rXL6Z",content:"Library_content__hohCR"}},5607:function(e){e.exports={root:"Modal_root__qnbe_"}},9851:function(e){e.exports={root:"SearchField_root__qOiFk",searchForm:"SearchField_searchForm__ShFSO",resetBtn:"SearchField_resetBtn__OsO9D",searchError:"SearchField_searchError___2HUb"}},1570:function(e){e.exports={root:"HomePage_root__QZS2S",header:"HomePage_header__NggCQ",pic:"HomePage_pic__vcU7x",container:"HomePage_container__hBi__"}}},function(e){e.O(0,[994,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);