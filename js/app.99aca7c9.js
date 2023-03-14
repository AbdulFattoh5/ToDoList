(function(){"use strict";var e={2380:function(e,t,n){var a=n(9242),o=n(3396);function s(e,t,n,s,l,i){const r=(0,o.up)("Navbar"),d=(0,o.up)("Notes"),c=(0,o.up)("AddBtn"),h=(0,o.up)("Modal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r,{onGetSearch:t[0]||(t[0]=e=>l.search=e),lang:l.lang,onChangeLang:i.changeLang},null,8,["lang","onChangeLang"]),(0,o.Wm)(d,{notes:i.filterNotes,onChangeNote:i.changeNote,onDelNote:i.delNote,search:l.search,lang:l.lang},null,8,["notes","onChangeNote","onDelNote","search","lang"]),(0,o.Wm)(c,{onOpenModal:i.openModal},null,8,["onOpenModal"]),(0,o.wy)((0,o.Wm)(h,{edit:l.edit,onCloseModal:i.closeModal,currentId:l.currentId,onAddNote:i.addNote,editNote:l.editNote,onEditedNote:i.editedNote,lang:l.lang},null,8,["edit","onCloseModal","currentId","onAddNote","editNote","onEditedNote","lang"]),[[a.F8,l.modalOpen]])],64)}n(7658);var l=n(7139),i=n.p+"img/search.2c9e71ed.svg",r=n.p+"img/close.1d4d165f.svg";const d={class:"header"},c={class:"header_notes"},h={class:"container"},g={class:"header_change"},u={key:0,class:"header_p"},p=["placeholder"],w={key:0,src:i,alt:""},_={key:1,src:r,alt:""};function m(e,t,n,s,i,r){return(0,o.wg)(),(0,o.iD)("header",d,[(0,o._)("div",c,["ru"==n.lang?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"header_lang",onClick:t[0]||(t[0]=(...e)=>r.changeLang&&r.changeLang(...e))}," UZ ")):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"header_lang",onClick:t[1]||(t[1]=(...e)=>r.changeLang&&r.changeLang(...e))},"RU")),(0,o._)("div",h,[(0,o._)("div",g,[(0,o.Wm)(a.uT,{name:"opp"},{default:(0,o.w5)((()=>[0==i.header?((0,o.wg)(),(0,o.iD)("p",u,(0,l.zw)(r.words.appbartitle[n.lang]),1)):(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:1,type:"text",class:"header_input","onUpdate:modelValue":t[2]||(t[2]=e=>i.search=e),placeholder:r.words.appbarseacrch[n.lang]},null,8,p)),[[a.nr,i.search]])])),_:1})])]),(0,o._)("button",{class:"header_search",onClick:t[3]||(t[3]=(...e)=>r.changeHeader&&r.changeHeader(...e))},[0==i.header?((0,o.wg)(),(0,o.iD)("img",w)):((0,o.wg)(),(0,o.iD)("img",_))])])])}var f={name:"NavbarTodo",props:{lang:String},inject:["words"],data(){return{search:"",header:!1}},watch:{search(e){this.$emit("getSearch",e)}},methods:{changeHeader(){this.header=!this.header},changeLang(){this.$emit("changeLang","ru"==this.lang?"uz":"ru")}}},b=n(89);const v=(0,b.Z)(f,[["render",m]]);var N=v,y=n.p+"img/flex.4ed3d4be.svg",k=n.p+"img/grid.dbae4039.svg";const C={class:"changer"},z={class:"container changer_wrap"},D={key:0,class:"all_notes"},O={key:1,class:"all_notes"},S={class:"ch_btn"},M=(0,o._)("img",{src:y,alt:""},null,-1),L={class:"btn_span"},j=(0,o._)("img",{src:k,alt:""},null,-1),T={class:"btn_span"},x={class:"container"};function I(e,t,n,a,s,i){const r=(0,o.up)("Note");return(0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("div",z,[n.search?((0,o.wg)(),(0,o.iD)("h3",O,(0,l.zw)(i.words.appbarseacrch[n.lang]),1)):((0,o.wg)(),(0,o.iD)("h3",D,(0,l.zw)(n.notes.length>0?i.words.infobar[n.lang]:i.words.noinfobar[n.lang]),1)),(0,o._)("button",S,[s.changer?((0,o.wg)(),(0,o.iD)("div",{key:1,class:"ch_cont",onClick:t[1]||(t[1]=(...e)=>i.changerClass&&i.changerClass(...e))},[j,(0,o._)("span",T,(0,l.zw)(i.words.grid[n.lang]),1)])):((0,o.wg)(),(0,o.iD)("div",{key:0,class:"ch_cont",onClick:t[0]||(t[0]=(...e)=>i.changerClass&&i.changerClass(...e))},[M,(0,o._)("span",L,(0,l.zw)(i.words.list[n.lang]),1)]))])]),(0,o._)("div",x,[(0,o._)("div",{class:(0,l.C_)([s.changer?s.flex:s.grid])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.notes,((t,a)=>((0,o.wg)(),(0,o.j4)(r,{key:a,note:t,lang:n.lang,onChangeNote:n=>e.$emit("changeNote",t.id),onDelNote:n=>e.$emit("delNote",t.id)},null,8,["note","lang","onChangeNote","onDelNote"])))),128))],2)])])}var $=n.p+"img/pen.092f5b23.svg",A=n.p+"img/trash.f04c87ff.svg";const Z={class:"note_item"},E={class:"note_top"},B={class:"note_title"},H={class:"note_date"},U={class:"note_desc"},W={class:"note_btns"},J=(0,o._)("img",{src:$,alt:""},null,-1),R={class:"note_btn-span"},q=(0,o._)("img",{src:A,alt:""},null,-1),V={class:"note_btn-span"};function F(e,t,n,a,s,i){return(0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("div",E,[(0,o._)("h3",B,(0,l.zw)(n.note.title),1),(0,o._)("p",H,(0,l.zw)(n.note.date),1)]),(0,o._)("p",U,(0,l.zw)(n.note.desc),1),(0,o._)("div",W,[(0,o._)("button",{class:"note_btn redact",onClick:t[0]||(t[0]=t=>e.$emit("changeNote",n.note.id))},[J,(0,o._)("span",R,(0,l.zw)(i.words.editbtn[n.lang]),1)]),(0,o._)("button",{class:"note_btn delete",onClick:t[1]||(t[1]=t=>e.$emit("delNote",n.note.id))},[q,(0,o._)("span",V,(0,l.zw)(i.words.deledit[n.lang]),1)])])])}var G={name:"NoteItemTodo",props:{note:{typeof:Object,default:{title:"",desc:"",id:"",date:""}},lang:String},inject:["words"],data(){return{}}};const P=(0,b.Z)(G,[["render",F]]);var Q=P,Y={name:"NotesTodo",components:{Note:Q},inject:["words"],props:{notes:{typeof:Array},search:String,lang:String},data(){return{flex:"changer_flex",grid:"changer_grid",changer:!1}},methods:{changerClass(){this.changer=!this.changer}}};const K=(0,b.Z)(Y,[["render",I]]);var X=K;const ee=(0,o._)("img",{src:$,alt:""},null,-1),te=[ee];function ne(e,t,n,a,s,l){return(0,o.wg)(),(0,o.iD)("button",{class:"add_btn",onClick:t[0]||(t[0]=t=>e.$emit("openModal"))},te)}var ae={name:"AddBtnTodo"};const oe=(0,b.Z)(ae,[["render",ne]]);var se=oe;const le={class:"modal_title"},ie={class:"modal_inputs"},re={class:"modal_input-cont"},de=(0,o._)("span",{class:"modal_input-cont_span"},"Title",-1),ce={class:"modal_input-cont"},he=(0,o._)("span",{class:"modal_input-cont_span"},"Content",-1),ge={class:"modal_btns"};function ue(e,t,n,s,i,r){return(0,o.wg)(),(0,o.j4)(a.uT,{name:"show"},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"modal",onClick:t[6]||(t[6]=(...e)=>r.closeModal&&r.closeModal(...e))},[(0,o._)("div",{class:"modal_content",onClick:t[5]||(t[5]=(0,a.iM)((()=>{}),["stop"]))},[(0,o._)("h3",le,(0,l.zw)(n.edit?r.words.titlewindowedit[n.lang]:r.words.titlewindow[n.lang]),1),(0,o._)("div",ie,[(0,o._)("div",re,[de,(0,o.wy)((0,o._)("input",{type:"text",class:"modal_input",placeholder:"Title","onUpdate:modelValue":t[0]||(t[0]=e=>i.title=e)},null,512),[[a.nr,i.title]])]),(0,o._)("div",ce,[he,(0,o.wy)((0,o._)("input",{type:"text",class:"modal_input",placeholder:"Content","onUpdate:modelValue":t[1]||(t[1]=e=>i.desc=e)},null,512),[[a.nr,i.desc]])])]),(0,o._)("div",ge,[(0,o._)("button",{class:"modal_btn delete",onClick:t[2]||(t[2]=(...e)=>r.closeModal&&r.closeModal(...e))},(0,l.zw)(r.words.closebtn[n.lang]),1),n.edit?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"modal_btn redact",onClick:t[4]||(t[4]=(...e)=>r.editedNote&&r.editedNote(...e))},(0,l.zw)(r.words.editwindowbtn[n.lang]),1)):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"modal_btn redact",onClick:t[3]||(t[3]=(...e)=>r.addNote&&r.addNote(...e))},(0,l.zw)(r.words.addbtn[n.lang]),1))])])])])),_:1})}var pe={name:"ModalTodo",props:{edit:Boolean,currentId:Number,editNote:Object,lang:String},inject:["words"],data(){return{title:"",desc:"",id:this.currentId}},methods:{closeModal(){this.$emit("closeModal",!1),this.title="",this.desc=""},addNote(){if(""!=this.title&&""!=this.desc){const e={id:this.id++,title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("addNote",e),this.title="",this.desc="",this.closeModal()}},editedNote(){if(""!=this.title&&""!=this.desc){const e={id:this.editNote.id,title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("editedNote",e),this.closeModal(),this.title="",this.desc=""}}}};const we=(0,b.Z)(pe,[["render",ue]]);var _e=we;const me={appbartitle:{ru:"Заметки",uz:"Eslatmalar"},appbarseacrch:{ru:"Поиск...",uz:"Qidirish..."},infobar:{ru:"Все заметки",uz:"Barcha eslatmalar"},noinfobar:{ru:"Нет заметок",uz:"Еslatmalar yoq"},list:{ru:"Список",uz:"Roʻyxat"},grid:{ru:"Сетка",uz:"Setka"},titlewindow:{ru:"Добавить заметку",uz:"Eslatma qo’shish"},titlewindowedit:{ru:"Изменить заметку",uz:"Elsatmani tahrirlash"},editbtn:{ru:"РЕДАКТИРОВАТЬ",uz:"O`ZGARTIRISH"},deledit:{ru:"Удалить",uz:"o'chirish"},closebtn:{ru:"Отмена",uz:"Bekor qilish"},addbtn:{ru:"Добавить",uz:"Qo’shish"},editwindowbtn:{ru:"изменить",uz:"o'zgartirish"}};var fe=me,be={name:"AppTodo",components:{Navbar:N,Notes:X,AddBtn:se,Modal:_e},data(){return{notes:[],modalOpen:!1,edit:!1,currentId:1,editNote:{},search:"",langwords:{},lang:"ru"}},created(){this.getNotes(),localStorage.lang=localStorage.lang||"ru",this.lang=localStorage.lang||"ru",this.langwords=fe,localStorage.words=JSON.stringify(this.langwords)},provide(){return{words:localStorage.words?JSON.parse(localStorage.words):fe}},methods:{openModal(){this.modalOpen=!0,this.edit=!1},closeModal(e){this.modalOpen=e,this.edit=e},addNote(e){this.notes.push(e)},getNotes(){const e=localStorage.notes;e&&(this.notes=JSON.parse(e))},changeNote(e){this.edit=this.modalOpen=!0;let t=this.notes.find((t=>t.id==e));console.log(t),this.editNote=t,console.log(this.editNote)},editedNote(e){this.notes.forEach((t=>{t.id==e.id&&(t.title=e.title,t.desc=e.desc,t.date=e.date)}))},delNote(e){let t=this.notes.findIndex((t=>t.id==e));this.notes.splice(t,1)},changeLang(e){this.lang=localStorage.lang=e}},watch:{notes:{handler(){localStorage.notes=JSON.stringify(this.notes)},deep:!0}},computed:{filterNotes(){return this.search?this.notes.filter((e=>e.title.toLowerCase().includes(this.search.toLowerCase()))):this.notes}}};const ve=(0,b.Z)(be,[["render",s]]);var Ne=ve;(0,a.ri)(Ne).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,s){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],s=e[c][2];for(var i=!0,r=0;r<a.length;r++)(!1&s||l>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(i=!1,s<l&&(l=s));if(i){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/ToDoList/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,l=a[0],i=a[1],r=a[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(r)var c=r(n)}for(t&&t(a);d<l.length;d++)s=l[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},a=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2380)}));a=n.O(a)})();
//# sourceMappingURL=app.99aca7c9.js.map