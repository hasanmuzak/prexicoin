(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{603:function(e,t,n){var content=n(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("2227c88c",content,!0,{sourceMap:!1})},606:function(e,t,n){"use strict";n(603)},607:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,'/*purgecss start ignore*/\n#convert-section[data-v-950360d2]{\n  position:relative\n}\n#convert-section #loading-div[data-v-950360d2]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100%;\n  height:100%;\n  background-color:hsla(0,0%,100%,.85);\n  z-index:9999\n}\n#convert-section #loading-div .loading-text[data-v-950360d2]{\n  font-size:.9rem;\n  color:rgba(0,0,0,.5);\n  font-weight:500\n}\n.currency_selection[data-v-950360d2] .p-dropdown{\n  border-radius:14px\n}\n[data-v-950360d2] .p-inputtext{\n  font-family:"DM Sans",sans-serif;\n  font-size:1rem\n}\n.menu_item[data-v-950360d2]{\n  color:#acb6bc;\n  font-size:.9rem;\n  transition:.2s;\n  border-radius:6px;\n  padding:8px;\n  cursor:pointer\n}\n.menu_item[data-v-950360d2]:hover{\n  color:#3b82f6\n}\n.menu_item.selected[data-v-950360d2]{\n  background-color:#3b82f6;\n  color:#fff;\n  font-weight:500\n}\n.create-bot-section[data-v-950360d2]{\n  transition:.2s;\n  color:#acb6bc;\n  cursor:pointer\n}\n.create-bot-section[data-v-950360d2]:hover{\n  color:#3b82f6;\n  border-color:#3b82f6\n}\n\n/*purgecss end ignore*/',""]),r.locals={},e.exports=r},656:function(e,t,n){"use strict";n.r(t);n(35),n(26),n(39),n(23),n(40);var r=n(13),c=n(17),l=(n(62),n(30),n(14),n(59),n(51));function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={components:{RotateSquare3:n(605).a},data:function(){return{amount:null,selected_currency:null,currency_real_price:null,loading:!1,selected_menu:1,selected_sell_currency:null,convertAmount:null}},computed:d(d(d({},Object(l.c)("currencies",["getCurrencies"])),Object(l.c)("user",["getProfile"])),{},{computedWalletCurrencies:function(){if(this.getProfile&&this.getProfile.wallet_list&&this.getProfile.wallet_list.length>0){var e=this.getProfile.wallet_list.filter((function(element){return 0!==element.amount}));if(e)return e.map((function(element){return{symbol:element.currency.symbol,logo:element.currency.logo,title:element.currency.title,slug:element.currency.slug}}))}}}),watch:{selected_sell_currency:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e||"USDT"===e.symbol){n.next=6;break}return t.loading=!0,n.next=4,t.$fetchCurrencyPrice("".concat(e.symbol,"USDT"));case 4:(r=n.sent)&&(t.currency_real_price=r,t.loading=!1);case 6:case"end":return n.stop()}}),n)})))()},selected_currency:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e||"USDT"===e.symbol){n.next=6;break}return t.loading=!0,n.next=4,t.$fetchCurrencyPrice("".concat(e.symbol,"USDT"));case 4:(r=n.sent)&&(t.currency_real_price=r,t.loading=!1);case 6:case"end":return n.stop()}}),n)})))()}},methods:d(d({},Object(l.b)("user",["setProfile"])),{},{updateUserProfile:function(){var e=this;this.$axios.get("panel/user/profile/me").then((function(t){e.setProfile(t.data)})).catch((function(e){console.log(e)}))},resetForm:function(){this.amount=null,this.currency_symbol=null},resetSellForm:function(){this.convertAmount=null,this.selected_sell_currency=null},buyCurrency:function(){var e=this,t={amount:this.amount,currency_symbol:this.selected_currency.symbol};this.$axios.put("panel/user-wallet",t).then((function(t){e.$toast.success("İşlem başarılı bir şekilde gerçekleşti."),e.updateUserProfile(),e.resetForm()})).catch((function(t){400===t.response.status&&e.resetForm()}))},convertCurrency:function(){var e=this,t={percent:this.convertAmount,currency_symbol:this.selected_sell_currency.symbol};this.$axios.put("panel/convert/user-wallet",t).then((function(t){e.$toast.success("İşlem başarılı bir şekilde gerçekleşti."),e.updateUserProfile(),e.resetSellForm()})).catch((function(t){400===t.response.status&&e.resetSellForm()}))}})},m=(n(606),n(3)),component=Object(m.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tw-p-4",attrs:{id:"convert-section"}},[n("div",{staticClass:"tw-flex tw-items-center tw-justify-between"},[n("div",{staticClass:"menu_item tw-w-full tw-text-center",class:1===e.selected_menu?"selected":"",on:{click:function(t){e.selected_menu=1}}},[e._v("\n      Al\n    ")]),e._v(" "),n("div",{staticClass:"menu_item tw-w-full tw-text-center",class:2===e.selected_menu?"selected":"",on:{click:function(t){e.selected_menu=2}}},[e._v("\n      Sat\n    ")]),e._v(" "),n("div",{staticClass:"menu_item tw-w-full tw-text-center",class:3===e.selected_menu?"selected":"",on:{click:function(t){e.selected_menu=3}}},[e._v("\n      Bot\n    ")])]),e._v(" "),1===e.selected_menu?n("div",{staticClass:"tw-pt-0"},[n("div",{staticClass:"currency_selection tw-mt-5"},[n("Dropdown",{staticStyle:{width:"100%"},attrs:{options:e.getCurrencies,optionLabel:"title",placeholder:"Döviz Seç"},scopedSlots:e._u([{key:"value",fn:function(t){return[t.value?n("div",{staticClass:"tw-flex tw-items-center",staticStyle:{height:"32px"}},[n("img",{attrs:{src:t.value.logo,width:"18"}}),e._v(" "),n("div",{staticClass:"tw-pl-2 font-semibold",staticStyle:{color:"#283036"}},[e._v("\n              "+e._s(t.value.title)+"\n            ")])]):n("div",[n("div",{staticClass:"tw-flex tw-items-center",staticStyle:{height:"32px"}},[e._v("\n              "+e._s(t.placeholder)+"\n            ")])])]}}],null,!1,3356086507),model:{value:e.selected_currency,callback:function(t){e.selected_currency=t},expression:"selected_currency"}})],1),e._v(" "),n("div",{staticClass:"currency_selection tw-mt-3"},[n("InputNumber",{attrs:{id:"currency-us",mode:"currency",placeholder:"Miktar... ($)",currency:"USD",locale:"en-US"},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1),e._v(" "),e.selected_currency&&e.currency_real_price&&"Tether"!==e.selected_currency.title?n("div",{staticClass:"tw-text-center tw-mt-3",staticStyle:{"font-size":"0.9rem",color:"#a4aeb2"}},[e._v("\n      "+e._s(e.amount?(e.amount/e.currency_real_price).toFixed(5):0)+"\n      "),n("span",{staticClass:"tw-capitalize"},[e._v(e._s(e.selected_currency.shortcut))])]):e._e(),e._v(" "),n("div",{staticClass:"tw-mt-3 currency_selection"},[n("Button",{staticClass:"tw-w-full",attrs:{disabled:e.loading,label:"Cüzdana Aktar"},on:{click:e.buyCurrency}})],1),e._v(" "),e._m(0)]):e._e(),e._v(" "),2===e.selected_menu?n("div",[e.computedWalletCurrencies?n("div",[n("div",{staticClass:"currency_selection tw-mt-5"},[n("Dropdown",{staticStyle:{width:"100%"},attrs:{options:e.computedWalletCurrencies,optionLabel:"title",placeholder:"Döviz Seç"},scopedSlots:e._u([{key:"value",fn:function(t){return[t.value?n("div",{staticClass:"tw-flex tw-items-center",staticStyle:{height:"32px"}},[n("img",{attrs:{src:t.value.logo,width:"18"}}),e._v(" "),n("div",{staticClass:"tw-pl-2 font-semibold",staticStyle:{color:"#283036"}},[e._v("\n                "+e._s(t.value.title)+"\n              ")])]):n("div",[n("div",{staticClass:"tw-flex tw-items-center",staticStyle:{height:"32px"}},[e._v("\n                "+e._s(t.placeholder)+"\n              ")])])]}}],null,!1,3336812779),model:{value:e.selected_sell_currency,callback:function(t){e.selected_sell_currency=t},expression:"selected_sell_currency"}})],1),e._v(" "),n("div",{staticClass:"currency_selection tw-mt-3"},[n("InputNumber",{attrs:{id:"currency-us",placeholder:"Miktar... (%)",min:0,max:100,locale:"en-US"},model:{value:e.convertAmount,callback:function(t){e.convertAmount=t},expression:"convertAmount"}})],1),e._v(" "),e.selected_currency&&e.currency_real_price&&"Tether"!==e.selected_currency.title?n("div",{staticClass:"tw-text-center tw-mt-3",staticStyle:{"font-size":"0.9rem",color:"#a4aeb2"}},[e._v("\n        "+e._s(e.amount?(e.amount/e.currency_real_price).toFixed(5):0)+"\n        "),n("span",{staticClass:"tw-capitalize"},[e._v(e._s(e.selected_currency.shortcut))])]):e._e(),e._v(" "),n("div",{staticClass:"tw-mt-3 currency_selection"},[n("Button",{staticClass:"tw-w-full",attrs:{disabled:e.loading,label:"Dönüştür"},on:{click:e.convertCurrency}})],1),e._v(" "),e._m(1)]):e._e()]):e._e(),e._v(" "),3===e.selected_menu?n("div",[n("nuxt-link",{staticClass:"tw-border create-bot-section tw-rounded tw-border-dashed tw-h-full tw-mt-5 tw-flex tw-items-center tw-justify-center",staticStyle:{"font-size":"0.9rem",height:"60px"},attrs:{to:{name:"create-bot"}}},[e._v("\n      Bot Oluştur\n    ")])],1):e._e(),e._v(" "),e.loading?n("div",{attrs:{id:"loading-div"}},[n("div",{staticClass:"tw-flex tw-items-center tw-justify-center tw-flex-col tw-h-full tw-w-full"},[n("div",[n("RotateSquare3",{attrs:{color:"#3B82F6"}})],1),e._v(" "),n("span",{staticClass:"tw-mt-2 loading-text"},[e._v("Yükleniyor...")])])]):e._e()])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tw-mt-3"},[n("p",{staticClass:"tw-m-0 tw-text-center",staticStyle:{"font-size":"0.9rem",color:"#a4aeb2"}},[e._v("\n        Aktarılacak tutar, güncel market fiyatlarına göre değişiklik\n        gösterebilir.\n      ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tw-mt-3"},[n("p",{staticClass:"tw-m-0 tw-text-center",staticStyle:{"font-size":"0.9rem",color:"#a4aeb2"}},[e._v("\n          Dönüştürülecek tutar, güncel market fiyatlarına göre değişiklik\n          gösterebilir.\n        ")])])}],!1,null,"950360d2",null);t.default=component.exports}}]);