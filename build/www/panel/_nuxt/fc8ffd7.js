(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4,6],{599:function(t,e,n){var content=n(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("2915500e",content,!0,{sourceMap:!1})},600:function(t,e,n){"use strict";n(599)},601:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.custom_tag_section span[data-v-1a2cef50]{\n  display:inline-block;\n  padding:4px 9px;\n  font-size:.9rem;\n  border-radius:6px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},602:function(t,e,n){"use strict";n.r(e);var r={props:{background_color:{type:String,default:null},color:{type:String,default:null},text:{type:String,default:null}}},o=(n(600),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"custom_tag_section"},[n("span",{style:{backgroundColor:t.background_color,color:t.color}},[t._v("\n      "+t._s(t.text)+"\n    ")])])])}),[],!1,null,"1a2cef50",null);e.default=component.exports},603:function(t,e,n){var content=n(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("2227c88c",content,!0,{sourceMap:!1})},604:function(t,e,n){var content=n(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("9964b50c",content,!0,{sourceMap:!1})},606:function(t,e,n){"use strict";n(603)},607:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n#convert-section[data-v-950360d2]{\n  position:relative\n}\n#convert-section #loading-div[data-v-950360d2]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100%;\n  height:100%;\n  background-color:hsla(0,0%,100%,.85);\n  z-index:9999\n}\n#convert-section #loading-div .loading-text[data-v-950360d2]{\n  font-size:.9rem;\n  color:rgba(0,0,0,.5);\n  font-weight:500\n}\n.currency_selection[data-v-950360d2] .p-dropdown{\n  border-radius:14px\n}\n[data-v-950360d2] .p-inputtext{\n  font-family:"DM Sans",sans-serif;\n  font-size:1rem\n}\n.menu_item[data-v-950360d2]{\n  color:#acb6bc;\n  font-size:.9rem;\n  transition:.2s;\n  border-radius:6px;\n  padding:8px;\n  cursor:pointer\n}\n.menu_item[data-v-950360d2]:hover{\n  color:#3b82f6\n}\n.menu_item.selected[data-v-950360d2]{\n  background-color:#3b82f6;\n  color:#fff;\n  font-weight:500\n}\n.create-bot-section[data-v-950360d2]{\n  transition:.2s;\n  color:#acb6bc;\n  cursor:pointer\n}\n.create-bot-section[data-v-950360d2]:hover{\n  color:#3b82f6;\n  border-color:#3b82f6\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},608:function(t,e,n){"use strict";n(604)},609:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.p-tooltip{\n  max-width:none!important\n}\n.p-tooltip-text{\n  font-family:"DMSans",sans-serif!important;\n  font-size:13px!important;\n  background-color:#17171c!important\n}\n.p-confirm-popup{\n  z-index:9999!important\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},655:function(t,e,n){var content=n(754);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("bddfabf0",content,!0,{sourceMap:!1})},656:function(t,e,n){"use strict";n.r(e);n(35),n(26),n(39),n(23),n(40);var r=n(13),o=n(17),c=(n(62),n(30),n(14),n(59),n(51));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{RotateSquare3:n(605).a},data:function(){return{amount:null,selected_currency:null,currency_real_price:null,loading:!1,selected_menu:1,selected_sell_currency:null,convertAmount:null}},computed:d(d(d({},Object(c.c)("currencies",["getCurrencies"])),Object(c.c)("user",["getProfile"])),{},{computedWalletCurrencies:function(){if(this.getProfile&&this.getProfile.wallet_list&&this.getProfile.wallet_list.length>0){var t=this.getProfile.wallet_list.filter((function(element){return 0!==element.amount}));if(t)return t.map((function(element){return{symbol:element.currency.symbol,logo:element.currency.logo,title:element.currency.title,slug:element.currency.slug}}))}}}),watch:{selected_sell_currency:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t||"USDT"===t.symbol){n.next=6;break}return e.loading=!0,n.next=4,e.$fetchCurrencyPrice("".concat(t.symbol,"USDT"));case 4:(r=n.sent)&&(e.currency_real_price=r,e.loading=!1);case 6:case"end":return n.stop()}}),n)})))()},selected_currency:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t||"USDT"===t.symbol){n.next=6;break}return e.loading=!0,n.next=4,e.$fetchCurrencyPrice("".concat(t.symbol,"USDT"));case 4:(r=n.sent)&&(e.currency_real_price=r,e.loading=!1);case 6:case"end":return n.stop()}}),n)})))()}},methods:d(d({},Object(c.b)("user",["setProfile"])),{},{updateUserProfile:function(){var t=this;this.$axios.get("panel/user/profile/me").then((function(e){t.setProfile(e.data)})).catch((function(t){console.log(t)}))},resetForm:function(){this.amount=null,this.currency_symbol=null},resetSellForm:function(){this.convertAmount=null,this.selected_sell_currency=null},buyCurrency:function(){var t=this,e={amount:this.amount,currency_symbol:this.selected_currency.symbol};this.$axios.put("panel/user-wallet",e).then((function(e){t.$toast.success("İşlem başarılı bir şekilde gerçekleşti."),t.updateUserProfile(),t.resetForm()})).catch((function(e){400===e.response.status&&t.resetForm()}))},convertCurrency:function(){var t=this,e={percent:this.convertAmount,currency_symbol:this.selected_sell_currency.symbol};this.$axios.put("panel/convert/user-wallet",e).then((function(e){t.$toast.success("İşlem başarılı bir şekilde gerçekleşti."),t.updateUserProfile(),t.resetSellForm()})).catch((function(e){400===e.response.status&&t.resetSellForm()}))}})},f=(n(606),n(3)),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-p-4",attrs:{id:"convert-section"}},[n("div",{staticClass:"tw-flex tw-items-center tw-justify-between"},[n("div",{staticClass:"menu_item tw-w-full tw-text-center",class:1===t.selected_menu?"selected":"",on:{click:function(e){t.selected_menu=1}}},[t._v("\n      Al\n    ")]),t._v(" "),n("div",{staticClass:"menu_item tw-w-full tw-text-center",class:2===t.selected_menu?"selected":"",on:{click:function(e){t.selected_menu=2}}},[t._v("\n      Sat\n    ")]),t._v(" "),n("div",{staticClass:"menu_item tw-w-full tw-text-center",class:3===t.selected_menu?"selected":"",on:{click:function(e){t.selected_menu=3}}},[t._v("\n      Bot\n    ")])]),t._v(" "),1===t.selected_menu?n("div",{staticClass:"tw-pt-0"},[n("div",{staticClass:"currency_selection tw-mt-5"},[n("Dropdown",{staticStyle:{width:"100%"},attrs:{options:t.getCurrencies,optionLabel:"title",placeholder:"Döviz Seç"},scopedSlots:t._u([{key:"value",fn:function(e){return[e.value?n("div",{staticClass:"tw-flex tw-items-center",staticStyle:{height:"32px"}},[n("img",{attrs:{src:e.value.logo,width:"18"}}),t._v(" "),n("div",{staticClass:"tw-pl-2 font-semibold",staticStyle:{color:"#283036"}},[t._v("\n              "+t._s(e.value.title)+"\n            ")])]):n("div",[n("div",{staticClass:"tw-flex tw-items-center",staticStyle:{height:"32px"}},[t._v("\n              "+t._s(e.placeholder)+"\n            ")])])]}}],null,!1,3356086507),model:{value:t.selected_currency,callback:function(e){t.selected_currency=e},expression:"selected_currency"}})],1),t._v(" "),n("div",{staticClass:"currency_selection tw-mt-3"},[n("InputNumber",{attrs:{id:"currency-us",mode:"currency",placeholder:"Miktar... ($)",currency:"USD",locale:"en-US"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),t._v(" "),t.selected_currency&&t.currency_real_price&&"Tether"!==t.selected_currency.title?n("div",{staticClass:"tw-text-center tw-mt-3",staticStyle:{"font-size":"0.9rem",color:"#a4aeb2"}},[t._v("\n      "+t._s(t.amount?(t.amount/t.currency_real_price).toFixed(5):0)+"\n      "),n("span",{staticClass:"tw-capitalize"},[t._v(t._s(t.selected_currency.shortcut))])]):t._e(),t._v(" "),n("div",{staticClass:"tw-mt-3 currency_selection"},[n("Button",{staticClass:"tw-w-full",attrs:{disabled:t.loading,label:"Cüzdana Aktar"},on:{click:t.buyCurrency}})],1),t._v(" "),t._m(0)]):t._e(),t._v(" "),2===t.selected_menu?n("div",[t.computedWalletCurrencies?n("div",[n("div",{staticClass:"currency_selection tw-mt-5"},[n("Dropdown",{staticStyle:{width:"100%"},attrs:{options:t.computedWalletCurrencies,optionLabel:"title",placeholder:"Döviz Seç"},scopedSlots:t._u([{key:"value",fn:function(e){return[e.value?n("div",{staticClass:"tw-flex tw-items-center",staticStyle:{height:"32px"}},[n("img",{attrs:{src:e.value.logo,width:"18"}}),t._v(" "),n("div",{staticClass:"tw-pl-2 font-semibold",staticStyle:{color:"#283036"}},[t._v("\n                "+t._s(e.value.title)+"\n              ")])]):n("div",[n("div",{staticClass:"tw-flex tw-items-center",staticStyle:{height:"32px"}},[t._v("\n                "+t._s(e.placeholder)+"\n              ")])])]}}],null,!1,3336812779),model:{value:t.selected_sell_currency,callback:function(e){t.selected_sell_currency=e},expression:"selected_sell_currency"}})],1),t._v(" "),n("div",{staticClass:"currency_selection tw-mt-3"},[n("InputNumber",{attrs:{id:"currency-us",placeholder:"Miktar... (%)",min:0,max:100,locale:"en-US"},model:{value:t.convertAmount,callback:function(e){t.convertAmount=e},expression:"convertAmount"}})],1),t._v(" "),t.selected_currency&&t.currency_real_price&&"Tether"!==t.selected_currency.title?n("div",{staticClass:"tw-text-center tw-mt-3",staticStyle:{"font-size":"0.9rem",color:"#a4aeb2"}},[t._v("\n        "+t._s(t.amount?(t.amount/t.currency_real_price).toFixed(5):0)+"\n        "),n("span",{staticClass:"tw-capitalize"},[t._v(t._s(t.selected_currency.shortcut))])]):t._e(),t._v(" "),n("div",{staticClass:"tw-mt-3 currency_selection"},[n("Button",{staticClass:"tw-w-full",attrs:{disabled:t.loading,label:"Dönüştür"},on:{click:t.convertCurrency}})],1),t._v(" "),t._m(1)]):t._e()]):t._e(),t._v(" "),3===t.selected_menu?n("div",[n("nuxt-link",{staticClass:"tw-border create-bot-section tw-rounded tw-border-dashed tw-h-full tw-mt-5 tw-flex tw-items-center tw-justify-center",staticStyle:{"font-size":"0.9rem",height:"60px"},attrs:{to:{name:"create-bot"}}},[t._v("\n      Bot Oluştur\n    ")])],1):t._e(),t._v(" "),t.loading?n("div",{attrs:{id:"loading-div"}},[n("div",{staticClass:"tw-flex tw-items-center tw-justify-center tw-flex-col tw-h-full tw-w-full"},[n("div",[n("RotateSquare3",{attrs:{color:"#3B82F6"}})],1),t._v(" "),n("span",{staticClass:"tw-mt-2 loading-text"},[t._v("Yükleniyor...")])])]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-mt-3"},[n("p",{staticClass:"tw-m-0 tw-text-center",staticStyle:{"font-size":"0.9rem",color:"#a4aeb2"}},[t._v("\n        Aktarılacak tutar, güncel market fiyatlarına göre değişiklik\n        gösterebilir.\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-mt-3"},[n("p",{staticClass:"tw-m-0 tw-text-center",staticStyle:{"font-size":"0.9rem",color:"#a4aeb2"}},[t._v("\n          Dönüştürülecek tutar, güncel market fiyatlarına göre değişiklik\n          gösterebilir.\n        ")])])}],!1,null,"950360d2",null);e.default=component.exports},657:function(t,e,n){"use strict";n.r(e);var r=n(602),o=n(1),c=n.n(o);c.a.locale("tr");var l={components:{CustomTag:r.default},props:{selected_bot:{type:Array,default:[]},display:{type:Boolean,default:!1}},methods:{computedTransactionAt:function(t){return c()(t,"YYYY-MM-DD HH:mm:ss").format("DD MMMM, YYYY - HH:mm")},cancelBot:function(t){var e=this;this.$confirm.require({target:t.currentTarget,message:"Botu iptal etmek istediğine emin misin? Bu işlem geri alınamaz.",icon:"pi pi-exclamation-triangle",accept:function(){e.$emit("botCanceled",e.selected_bot[0].id)},reject:function(){console.log("Rejected.")}})},stopBot:function(t){var e=this;this.$confirm.require({target:t.currentTarget,message:"Botu duraklatmak istediğine emin misin?",icon:"pi pi-exclamation-triangle",accept:function(){e.$emit("botStopped",e.selected_bot[0].id)},reject:function(){console.log("Rejected.")}})},continueBot:function(t){var e=this;this.$confirm.require({target:t.currentTarget,message:"Botu devam ettirmek istediğine emin misin?",icon:"pi pi-exclamation-triangle",accept:function(){e.$emit("botContinued",e.selected_bot[0].id)},reject:function(){console.log("Rejected.")}})},computedTransactionType:function(t){return t?1===t?"Alım yapıldı":"Satış yapıldı":"İşlem yok"}},computed:{currentDate:function(){return c()()}}},d=(n(608),n(3)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.selected_bot?n("Dialog",{attrs:{contentStyle:{width:"620px"},modal:!0,dismissableMask:"",visible:t.display},on:{hide:function(e){return t.$emit("BotHistoryModalClosed")},"update:visible":function(e){t.display=e}},scopedSlots:t._u([{key:"header",fn:function(){return[n("h3",{staticClass:"tw-font-semibold"},[t._v("\n        Bot Geçmişi - "+t._s(t.selected_bot[0].title)+"\n      ")])]},proxy:!0},{key:"footer",fn:function(){return[n("Button",{staticClass:"p-button-text",attrs:{label:"Kapat",icon:"pi pi-times"},on:{click:function(e){t.display=!1}}})]},proxy:!0}],null,!1,2425532318)},[t._v(" "),n("div",[n("ConfirmPopup"),t._v(" "),n("ConfirmPopup",{attrs:{group:"demo"},scopedSlots:t._u([{key:"message",fn:function(e){return[n("div",{staticClass:"flex p-4"},[n("i",{class:e.message.icon,staticStyle:{"font-size":"1.5rem"}}),t._v(" "),n("p",{staticClass:"pl-2"},[t._v(t._s(e.message.message))])])]}}],null,!1,4287188327)}),t._v(" "),n("div",{staticClass:"tw-flex tw-items-center tw-justify-between"},[n("div",{staticClass:"tw-flex tw-flex-col"},[n("div",[n("span",{staticClass:"tw-font-semibold"},[t._v("Bot:")]),t._v(" "),n("span",{staticClass:"tw-text-gray-500"},[t._v(t._s(t.selected_bot[0].title))])]),t._v(" "),n("div",{staticClass:"tw-mt-3"},[n("span",{staticClass:"tw-font-semibold"},[t._v("Strateji:")]),t._v(" "),n("span",{staticClass:"tw-text-gray-500"},[t._v(t._s(t.selected_bot[0].strategy.title))])]),t._v(" "),n("div",{staticClass:"tw-mt-3 tw-flex tw-items-center"},[n("span",{staticClass:"tw-font-semibold tw-mr-1"},[t._v("Durum:")]),t._v(" "),n("CustomTag",{attrs:{background_color:t.$convertBotStatus(t.selected_bot[0].bot_submission_id).background_color,color:t.$convertBotStatus(t.selected_bot[0].bot_submission_id).color,text:t.$convertBotStatus(t.selected_bot[0].bot_submission_id).text}})],1)]),t._v(" "),n("div",{staticClass:"tw-flex tw-flex-col"},[n("div",[n("span",{staticClass:"tw-font-semibold"},[t._v("Başlangıç Tarihi:")]),t._v(" "),n("span",{staticClass:"tw-text-gray-500"},[t._v(t._s(t.computedTransactionAt(t.selected_bot[0].started_at)))])]),t._v(" "),n("div",{staticClass:"tw-mt-3"},[n("span",{staticClass:"tw-font-semibold"},[t._v("Bitiş Tarihi:")]),t._v(" "),n("span",{staticClass:"tw-text-gray-500"},[t._v(t._s(t.computedTransactionAt(t.selected_bot[0].finish_at)))])]),t._v(" "),n("div",{staticClass:"tw-mt-3 tw-flex tw-items-center"},[n("span",{staticClass:"tw-font-semibold tw-mr-1"},[t._v("Son Durum:")]),t._v(" "),n("span",{staticClass:"tw-text-gray-500"},[t._v(t._s(t.computedTransactionType(t.selected_bot[0].last_transaction_type)))])])])]),t._v(" "),[4,5].includes(t.selected_bot[0].bot_submission_id)&&null!==t.selected_bot[0].bot_submission_id?t._e():n("div",{staticClass:"tw-border tw-p-2 tw-rounded tw-border-gray-50 tw-mt-3 tw-flex tw-items-center tw-justify-end"},[[1,2].includes(t.selected_bot[0].bot_submission_id)||null===t.selected_bot[0].bot_submission_id?n("Button",{staticClass:"p-button-text p-button-secondary",staticStyle:{"margin-right":"8px"},attrs:{label:"Botu duraklat"},on:{click:function(e){return t.stopBot(e)}}}):t._e(),t._v(" "),[3].includes(t.selected_bot[0].bot_submission_id)||null===t.selected_bot[0].bot_submission_id?n("Button",{staticClass:"p-button-text p-button-success",staticStyle:{"margin-right":"8px"},attrs:{label:"Botu devam ettir"},on:{click:function(e){return t.continueBot(e)}}}):t._e(),t._v(" "),[1,2,3].includes(t.selected_bot[0].bot_submission_id)||null===t.selected_bot[0].bot_submission_id?n("Button",{staticClass:"p-button-text p-button-danger",attrs:{label:"Botu iptal et"},on:{click:function(e){return t.cancelBot(e)}}}):t._e()],1),t._v(" "),n("div",{class:t.selected_bot[0].history_list&&t.selected_bot[0].history_list.length>0?"tw-mt-3":""},t._l(t.selected_bot[0].history_list,(function(e){return n("div",{key:e.id},[n("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:{value:e.description,class:"custom-tooltip"},expression:"{\n              value: item.description,\n              class: 'custom-tooltip',\n            }",modifiers:{bottom:!0}}],staticClass:"tw-flex tw-items-center tw-justify-between tw-p-4 tw-rounded-lg hover:tw-bg-blue-50 tw-mb-2"},[n("div",{staticClass:"tw-flex tw-flex-col tw-items-center"},[n("span",{staticClass:"tw-text-gray-600 tw-font-semibold"},[t._v("ID")]),t._v(" "),n("span",[t._v("\n                "+t._s(e.id)+"\n              ")])]),t._v(" "),n("div",{staticClass:"tw-flex tw-flex-col tw-items-center"},[n("span",{staticClass:"tw-text-gray-600 tw-font-semibold"},[t._v("Miktar (Varlık)")]),t._v(" "),n("span",[t._v("\n                "+t._s(e.amount)+"\n              ")])]),t._v(" "),n("div",{staticClass:"tw-flex tw-flex-col tw-items-center"},[n("span",{staticClass:"tw-text-gray-600 tw-font-semibold"},[t._v("Fiyat ($)")]),t._v(" "),n("span",[t._v("\n                "+t._s(e.from_what?e.from_what:"-")+"\n              ")])]),t._v(" "),n("div",{staticClass:"tw-flex tw-flex-col tw-items-center"},[n("span",{staticClass:"tw-text-gray-600 tw-font-semibold"},[t._v("İşlem Tipi")]),t._v(" "),n("CustomTag",{attrs:{background_color:t.$convertHistoryStatus(e.bot_history_status_id).background_color,color:t.$convertHistoryStatus(e.bot_history_status_id).color,text:t.$convertHistoryStatus(e.bot_history_status_id).text}})],1),t._v(" "),n("div",{staticClass:"tw-flex tw-flex-col tw-items-center"},[n("span",{staticClass:"tw-text-gray-600 tw-font-semibold"},[t._v("İşlem Tarihi")]),t._v(" "),n("span",[t._v("\n                "+t._s(t.computedTransactionAt(e.transaction_at))+"\n              ")])])])])})),0)],1)]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},753:function(t,e,n){"use strict";n(655)},754:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.title[data-v-517222e8]{\n  font-size:20px;\n  font-weight:500\n}\n.custom-tag[data-v-517222e8]{\n  font-size:11px;\n  color:#95a1a9;\n  margin-left:6px;\n  transition:.2s;\n  border-radius:6px;\n  width:36px;\n  padding:6px 0;\n  text-align:center;\n  cursor:pointer\n}\n.custom-tag.selected[data-v-517222e8],.custom-tag[data-v-517222e8]:hover{\n  color:#3b82f6;\n  background-color:#dfefff\n}\n.custom-tag.selected[data-v-517222e8]{\n  font-weight:500\n}\n.date-string[data-v-517222e8]{\n  color:#748086;\n  font-size:.9rem\n}\n.currency-selector[data-v-517222e8] .p-inputtext{\n  font-size:.9rem;\n  padding:.5rem\n}\n.currency-selector[data-v-517222e8] .p-component{\n  font-size:.9rem\n}\n.currency-selector[data-v-517222e8] .pi{\n  font-size:10px\n}\n.data_table[data-v-517222e8] .p-paginator-bottom{\n  border:none\n}\n.data_table[data-v-517222e8] .p-paginator-first,.data_table[data-v-517222e8] .p-paginator-last,.data_table[data-v-517222e8] .p-paginator-next,.data_table[data-v-517222e8] .p-paginator-page,.data_table[data-v-517222e8] .p-paginator-prev{\n  min-width:2.2rem;\n  height:2.2rem;\n  font-size:.9rem;\n  font-family:"DM Sans",sans-serif\n}\n.data_table[data-v-517222e8] .p-column-header-content{\n  justify-content:center\n}\n.data_table[data-v-517222e8] .p-datatable-tbody tr:hover .custom_table_body{\n  transition:.2s;\n  background-color:#eef5fd\n}\n.data_table[data-v-517222e8] .p-datatable-tbody tr:hover .custom_table_body:first-of-type{\n  border-top-left-radius:4px;\n  border-bottom-left-radius:4px\n}\n.data_table[data-v-517222e8] .p-datatable-tbody tr:hover .custom_table_body:last-of-type{\n  border-top-right-radius:4px;\n  border-bottom-right-radius:4px\n}\n.data_table .action_section .p-button[data-v-517222e8]{\n  padding:.5rem 1rem\n}\n.data_table[data-v-517222e8] .p-datatable .p-datatable-thead>tr>th{\n  background-color:#fff;\n  border:none;\n  font-family:"DM Sans",sans-serif;\n  font-size:.9rem\n}\n.data_table[data-v-517222e8] .p-datatable .p-datatable-tbody>tr>td{\n  background-color:#fff;\n  border:none;\n  font-family:"DM Sans",sans-serif;\n  font-size:1rem;\n  color:#6d808b\n}\n[data-v-517222e8] .p-tabview-title{\n  font-size:.9rem;\n  font-family:"DM Sans",sans-serif\n}\n[data-v-517222e8] .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus{\n  box-shadow:none\n}\n[data-v-517222e8] .p-tabview-panels{\n  padding-bottom:0\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},761:function(t,e,n){"use strict";n.r(e);n(35),n(26),n(39),n(40);var r=n(10),o=n(13),c=n(17),l=(n(62),n(30),n(14),n(23),n(58),n(86),n(1)),d=n.n(l),_=n(602),f=n(656),m=n(657),v=n(51);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}d.a.locale("tr");var w={name:"Home",data:function(){return{currencies:null,selected_currency:"bitcoin",amount:null,columns:[{field:"id",header:"#",sortable:!0},{field:"currency_title",header:"Döviz",sortable:!0},{field:"inital_amount",header:"Başlangıç ($)",sortable:!0},{field:"current_amount",header:"Final ($)",sortable:!0},{field:"status",header:"Durum",sortable:!0},{field:"action",header:"Aksiyon"}],history_columns:[{field:"id",header:"#",sortable:!0},{field:"currency_title",header:"Döviz",sortable:!0},{field:"inital_amount",header:"Miktar (adet)",sortable:!0},{field:"price",header:"Fiyat ($)",sortable:!0},{field:"status",header:"Durum",sortable:!0},{field:"transaction_at",header:"Tarih",sortable:!0}],products:null,statuses_bots:[{name:"Tümü",value:1},{name:"Devam Eden",value:2},{name:"Pasif",value:3},{name:"İptal Edilmiş",value:4},{name:"Tamamlanmış",value:5}],selected_bot_status:1,statuses_history:[{name:"Tümü",value:1},{name:"Alış İşlemi",value:2},{name:"Satış İşlemi",value:3}],selected_history_status:1,show_bot_modal:!1,selected_bot:null,kline_data:null,days:1}},components:{CustomTag:_.default,BuySellConvert:f.default,BotHistory:m.default},methods:y(y(y({},Object(v.b)("currencies",["setCurrencies","setGlobalCurrencies","setGlobalHistoryPrices"])),Object(v.b)("user",["setProfile"])),{},{handleBotCanceled:function(t){var e=this;this.$axios.put("panel/bot/cancel/".concat(t)).then((function(t){e.$toast.success("İşlem başarılı bir şekilde gerçekleşti."),e.show_bot_modal=!1,e.fetchUserProfile()}))},handleBotStopped:function(t){var e=this;this.$axios.put("panel/bot/stop/".concat(t)).then((function(t){e.$toast.success("İşlem başarılı bir şekilde gerçekleşti."),e.show_bot_modal=!1,e.fetchUserProfile()}))},handleBotContinue:function(t){var e=this;this.$axios.put("panel/bot/continue/".concat(t)).then((function(t){e.$toast.success("İşlem başarılı bir şekilde gerçekleşti."),e.show_bot_modal=!1,e.fetchUserProfile()}))},computedTransactionAt:function(t){return d()(t,"YYYY-MM-DD HH:mm:ss").format("DD MMMM, YYYY - HH:mm")},computedSelectedBot:function(t){return this.getProfile.bot_list&&this.getProfile.bot_list.length>0?this.getProfile.bot_list.filter((function(element){return element.id===t})):[]},showHistoryModal:function(t){this.show_bot_modal=!0,this.selected_bot=this.computedSelectedBot(t)},fetchData:function(symbol){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fetchHistoricalPrice(symbol,t.computedDaysInterval.interval,t.computedDaysInterval.startTime,t.computedDaysInterval.endTime);case 2:(data=e.sent)&&(t.kline_data=data);case 4:case"end":return e.stop()}}),e)})))()},fetchUserProfile:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("panel/user/profile/me");case 2:200===(n=e.sent).status?(t.setProfile(n.data),n.data.wallet_list&&n.data.wallet_list.length>0&&(r=n.data.wallet_list.filter((function(element){return"USDT"!==element.currency.symbol})),t.fetchGlobalCurrencies(r),t.fetchGlobalHistoryPrices(r))):console.log(n);case 4:case"end":return e.stop()}}),e)})))()},fetchGlobalCurrencies:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$fetchGlobalCurrencies(t);case 2:(data=n.sent)&&e.setGlobalCurrencies(data);case 4:case"end":return n.stop()}}),n)})))()},fetchGlobalHistoryPrices:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$fetchGlobalHistoryPrices(t);case 2:(data=n.sent)&&e.setGlobalHistoryPrices(data);case 4:case"end":return n.stop()}}),n)})))()}}),computed:y(y(y({},Object(v.c)("user",["getProfile"])),Object(v.c)("currencies",["getCurrencies"])),{},{computedTransactionList:function(){if(this.getProfile){var t=[];return this.getProfile.bot_list&&this.getProfile.bot_list.length>0&&(this.getProfile.bot_list.forEach((function(element){element.history_list.forEach((function(t){t.logo=element.currency.logo,t.title=element.currency.title})),t=[].concat(Object(r.a)(t),Object(r.a)(element.history_list))})),2===this.selected_history_status&&t.length>0&&(t=t.filter((function(element){return 1===element.bot_history_status_id}))),3===this.selected_history_status&&t.length>0&&(t=t.filter((function(element){return 2===element.bot_history_status_id})))),t}},computedBotList:function(){if(this.getProfile&&this.getProfile.bot_list&&this.getProfile.bot_list.length>0){var t=Object(r.a)(this.getProfile.bot_list);return 2===this.selected_bot_status&&(t=t.filter((function(element){return[1,2].includes(element.bot_submission_id)}))),3===this.selected_bot_status&&(t=t.filter((function(element){return[3].includes(element.bot_submission_id)}))),4===this.selected_bot_status&&(t=t.filter((function(element){return[4].includes(element.bot_submission_id)}))),5===this.selected_bot_status&&(t=t.filter((function(element){return[5].includes(element.bot_submission_id)}))),t}},computedCurrencies:function(){if(this.getProfile&&this.getCurrencies)return this.getCurrencies.filter((function(element){return"USDT"!==element.symbol}))},computedDaysInterval:function(){return 1===this.days?{interval:"m15",startTime:d()().subtract(1,"days").valueOf(),endTime:d()().valueOf()}:7===this.days?{interval:"h1",startTime:d()().subtract(7,"days").valueOf(),endTime:d()().valueOf()}:14===this.days?{interval:"h6",startTime:d()().subtract(14,"days").valueOf(),endTime:d()().valueOf()}:30===this.days?{interval:"h12",startTime:d()().subtract(30,"days").valueOf(),endTime:d()().valueOf()}:365===this.days?{interval:"d1",startTime:d()().subtract(365,"days").valueOf(),endTime:d()().valueOf()}:void 0},computedChartData:function(){var t=this;if(this.kline_data){var e=[];return this.kline_data.forEach((function(element){e.push(t.$convertPrice(parseFloat(element.priceUsd)))})),e}},computedSeries:function(){return[{name:"Fiyat",data:this.computedChartData}]},computedOptions:function(){return{chart:{type:"area",zoom:{enabled:!1},toolbar:{show:!1},fontFamily:"DM Sans, sans-serif"},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},grid:{strokeDashArray:7,row:{opacity:.2},column:{opacity:.5}},xaxis:{categories:this.computedTime,tooltip:{enabled:!1},labels:{show:!1}},yaxis:{show:!0},tooltip:{y:{formatter:function(t){return"".concat(t," $")}}}}},computedFormat:function(){return 1===this.days?"HH:mm":7===this.days||14===this.days||30===this.days?"DD MMMM HH:mm":365===this.days?"DD MMMM, YYYY":void 0},computedTime:function(){var t=this;if(this.kline_data){var e=[];return this.kline_data.forEach((function(element){e.push(d.a.unix(Math.round(element.time/1e3)).format(t.computedFormat))})),e}}}),watch:{selected_currency:{handler:function(t){this.fetchData(t)},immediate:!0},days:function(t){this.fetchData(this.selected_currency)}}},x=(n(753),n(3)),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-pb-4"},[n("div",{staticClass:"tw-flex tw-gap-5"},[n("div",{staticClass:"tw-w-8/12 tw-bg-white tw-p-4 tw-rounded-lg"},[n("div",{staticClass:"tw-flex tw-items-center tw-justify-between"},[n("h1",{staticClass:"title"},[t._v("İstatistik")]),t._v(" "),n("div",{staticClass:"tw-flex tw-items-center"},[n("div",{staticClass:"custom-tag",class:1===t.days?"selected":"",on:{click:function(e){t.days=1}}},[t._v("\n            1g\n          ")]),t._v(" "),n("div",{staticClass:"custom-tag",class:7===t.days?"selected":"",on:{click:function(e){t.days=7}}},[t._v("\n            1h\n          ")]),t._v(" "),n("div",{staticClass:"custom-tag",class:14===t.days?"selected":"",on:{click:function(e){t.days=14}}},[t._v("\n            2h\n          ")]),t._v(" "),n("div",{staticClass:"custom-tag",class:30===t.days?"selected":"",on:{click:function(e){t.days=30}}},[t._v("\n            30g\n          ")]),t._v(" "),n("div",{staticClass:"custom-tag",class:365===t.days?"selected":"",on:{click:function(e){t.days=365}}},[t._v("\n            Tüm\n          ")])])]),t._v(" "),n("div",[n("apexchart",{attrs:{type:"area",height:"225",options:t.computedOptions,series:t.computedSeries}})],1),t._v(" "),n("div",{staticClass:"tw-flex tw-items-center tw-justify-between"},[n("div",{staticClass:"date-string"},[t._v("2 Mart 2022 20:53 - 3 Mart 2022 20:53")]),t._v(" "),n("div",{staticClass:"currency-selector"},[n("Dropdown",{staticStyle:{width:"160px"},attrs:{optionValue:"slug",options:t.computedCurrencies,optionLabel:"title",placeholder:"Select a currency"},model:{value:t.selected_currency,callback:function(e){t.selected_currency=e},expression:"selected_currency"}})],1)])]),t._v(" "),n("div",{staticClass:"tw-w-4/12 tw-bg-white tw-rounded-lg"},[n("BuySellConvert")],1)]),t._v(" "),n("div",{staticClass:"tw-bg-white tw-p-4 tw-mt-4 tw-rounded-lg data_table"},[n("TabView",[n("TabPanel",{attrs:{header:"Botlar"}},[n("div",[n("div",{staticClass:"tw-flex tw-items-center tw-justify-between tw-mb-4"},[n("h1",{staticClass:"title"},[t._v("Bot Geçmişi")]),t._v(" "),n("div",{staticClass:"tw-flex tw-items-center"},[n("div",{staticClass:"currency-selector"},[n("Dropdown",{staticStyle:{width:"140px"},attrs:{optionValue:"value",options:t.statuses_bots,optionLabel:"name",placeholder:"Durum..."},model:{value:t.selected_bot_status,callback:function(e){t.selected_bot_status=e},expression:"selected_bot_status"}})],1)])]),t._v(" "),t.getProfile?n("DataTable",{attrs:{value:t.computedBotList,responsiveLayout:"scroll",paginator:"",rows:4}},t._l(t.columns,(function(col){return n("Column",{key:col.field,attrs:{field:col.field,header:col.header,bodyStyle:{"text-align":"center"},sortable:col.sortable,bodyClass:"custom_table_body"},scopedSlots:t._u([{key:"body",fn:function(e){return["id"===col.field?n("div",[t._v("\n                  "+t._s(e.data.id)+"\n                ")]):t._e(),t._v(" "),"currency_title"===col.field?n("div",{staticClass:"tw-flex tw-items-center tw-justify-center"},[n("img",{staticClass:"tw-mr-2",attrs:{src:e.data.currency.logo,width:"18"}}),t._v("\n                  "+t._s(e.data.currency.title)+"\n                ")]):t._e(),t._v(" "),"inital_amount"===col.field?n("div",{},[t._v("\n                  "+t._s(e.data.initial_amount?e.data.initial_amount.toFixed(2):"-")+"\n                ")]):t._e(),t._v(" "),"current_amount"===col.field?n("div",{class:e.data.current_amount>e.data.initial_amount?"text-success":e.data.current_amount<e.data.initial_amount?"text-danger":""},[t._v("\n                  "+t._s(e.data.current_amount?e.data.current_amount.toFixed(2):"-")+"\n                ")]):t._e(),t._v(" "),"status"===col.field?n("div",[n("CustomTag",{attrs:{background_color:t.$convertBotStatus(e.data.bot_submission_id).background_color,color:t.$convertBotStatus(e.data.bot_submission_id).color,text:t.$convertBotStatus(e.data.bot_submission_id).text}})],1):t._e(),t._v(" "),"action"===col.field?n("div",{staticClass:"action_section"},[n("Button",{staticClass:"p-button-text",attrs:{label:"Detay"},on:{click:function(n){return t.showHistoryModal(e.data.id)}}})],1):t._e()]}}],null,!0)})})),1):t._e()],1)]),t._v(" "),n("TabPanel",{attrs:{header:"İşlemler"}},[n("div",[n("div",{staticClass:"tw-flex tw-items-center tw-justify-between tw-mb-4"},[n("h1",{staticClass:"title"},[t._v("İşlem Geçmişi")]),t._v(" "),n("div",{staticClass:"tw-flex tw-items-center"},[n("div",{staticClass:"currency-selector"},[n("Dropdown",{staticStyle:{width:"140px"},attrs:{optionValue:"value",options:t.statuses_history,optionLabel:"name",placeholder:"Durum..."},model:{value:t.selected_history_status,callback:function(e){t.selected_history_status=e},expression:"selected_history_status"}})],1)])]),t._v(" "),n("DataTable",{attrs:{value:t.computedTransactionList,responsiveLayout:"scroll",paginator:"",rows:6}},t._l(t.history_columns,(function(col){return n("Column",{key:col.field,attrs:{field:col.field,header:col.header,bodyStyle:{"text-align":"center"},sortable:col.sortable,bodyClass:"custom_table_body"},scopedSlots:t._u([{key:"body",fn:function(e){return["id"===col.field?n("div",[t._v("\n                  "+t._s(e.data.id)+"\n                ")]):t._e(),t._v(" "),"currency_title"===col.field?n("div",{staticClass:"tw-flex tw-items-center tw-justify-center"},[n("img",{staticClass:"tw-mr-2",attrs:{src:e.data.logo,width:"18"}}),t._v("\n                  "+t._s(e.data.title)+"\n                ")]):t._e(),t._v(" "),"inital_amount"===col.field?n("div",{},[t._v("\n                  "+t._s(e.data.amount?e.data.amount:"-")+"\n                ")]):t._e(),t._v(" "),"status"===col.field?n("div",[n("CustomTag",{attrs:{background_color:t.$convertHistoryStatus(e.data.bot_history_status_id).background_color,color:t.$convertHistoryStatus(e.data.bot_history_status_id).color,text:t.$convertHistoryStatus(e.data.bot_history_status_id).text}})],1):t._e(),t._v(" "),"transaction_at"===col.field?n("div",{},[t._v("\n                  "+t._s(t.computedTransactionAt(e.data.transaction_at))+"\n                ")]):t._e(),t._v(" "),"price"===col.field?n("div",{},[t._v("\n                  "+t._s(e.data.from_what?e.data.from_what:"-")+"\n                ")]):t._e()]}}],null,!0)})})),1)],1)])],1)],1),t._v(" "),n("BotHistory",{attrs:{display:t.show_bot_modal,selected_bot:t.selected_bot},on:{BotHistoryModalClosed:function(e){t.show_bot_modal=!1},botCanceled:function(e){return t.handleBotCanceled(e)},botStopped:function(e){return t.handleBotStopped(e)},botContinued:function(e){return t.handleBotContinue(e)}}})],1)}),[],!1,null,"517222e8",null);e.default=component.exports}}]);