// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the use chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."], true, false),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__33059){
var map__33063 = p__33059;
var map__33063__$1 = ((((!((map__33063 == null)))?((((map__33063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33063):map__33063);
var args = map__33063__$1;
var on_change = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__33065 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__26906__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__33065,external_model_value);
} else {
return G__33065;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__33066,event){
var map__33070 = p__33066;
var map__33070__$1 = ((((!((map__33070 == null)))?((((map__33070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33070):map__33070);
var state = map__33070__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33070__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__33070__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__33072 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__33072) {
case "input-text-blurred":
var and__26894__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__26894__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__26894__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__26906__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__33074,event){
var map__33078 = p__33074;
var map__33078__$1 = ((((!((map__33078 == null)))?((((map__33078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33078):map__33078);
var state = map__33078__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33078__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__33080 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__33080) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__33082,new_value){
var map__33085 = p__33082;
var map__33085__$1 = ((((!((map__33085 == null)))?((((map__33085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33085):map__33085);
var state = map__33085__$1;
var on_change = cljs.core.get.call(null,map__33085__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__33087,suggestion){
var map__33091 = p__33087;
var map__33091__$1 = ((((!((map__33091 == null)))?((((map__33091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33091):map__33091);
var state = map__33091__$1;
var suggestion_to_string = cljs.core.get.call(null,map__33091__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__33093 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__33093,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__33093;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__33094,index){
var map__33098 = p__33094;
var map__33098__$1 = ((((!((map__33098 == null)))?((((map__33098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33098):map__33098);
var state = map__33098__$1;
var suggestions = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__33100 = state;
var G__33100__$1 = cljs.core.assoc.call(null,G__33100,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__33100__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__33100__$1,suggestion):G__33100__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__33100__$2,suggestion);
} else {
return G__33100__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__33101,index){
var map__33104 = p__33101;
var map__33104__$1 = ((((!((map__33104 == null)))?((((map__33104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33104):map__33104);
var state = map__33104__$1;
var suggestions = cljs.core.get.call(null,map__33104__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__33106){
var map__33110 = p__33106;
var map__33110__$1 = ((((!((map__33110 == null)))?((((map__33110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33110):map__33110);
var state = map__33110__$1;
var suggestion_active_index = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__33112 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__33112,suggestion_active_index);
} else {
return G__33112;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__33113){
var map__33117 = p__33113;
var map__33117__$1 = ((((!((map__33117 == null)))?((((map__33117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33117):map__33117);
var state = map__33117__$1;
var suggestions = cljs.core.get.call(null,map__33117__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__33117__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__33119 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__33119,re_com.typeahead.wrap.call(null,((function (){var or__26906__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__33119;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__33120){
var map__33124 = p__33120;
var map__33124__$1 = ((((!((map__33124 == null)))?((((map__33124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33124):map__33124);
var state = map__33124__$1;
var suggestions = cljs.core.get.call(null,map__33124__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__33124__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__33126 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__33126,re_com.typeahead.wrap.call(null,((function (){var or__26906__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__33126;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__33128 = state;
var G__33128__$1 = re_com.typeahead.clear_suggestions.call(null,G__33128)
;
var G__33128__$2 = cljs.core.assoc.call(null,G__33128__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__33128__$2,null);
} else {
return G__33128__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__33129){
var map__33133 = p__33129;
var map__33133__$1 = ((((!((map__33133 == null)))?((((map__33133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33133):map__33133);
var state = map__33133__$1;
var input_text = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__33135 = state;
if(cljs.core.truth_((function (){var and__26894__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__26894__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__26894__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__33135,input_text);
} else {
return G__33135;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__33136_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__33136_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__30187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto__){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto__){
return (function (state_33186){
var state_val_33187 = (state_33186[(1)]);
if((state_val_33187 === (1))){
var state_33186__$1 = state_33186;
var statearr_33188_33203 = state_33186__$1;
(statearr_33188_33203[(2)] = null);

(statearr_33188_33203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (2))){
var state_33186__$1 = state_33186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33186__$1,(4),c_search);
} else {
if((state_val_33187 === (3))){
var inst_33184 = (state_33186[(2)]);
var state_33186__$1 = state_33186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33186__$1,inst_33184);
} else {
if((state_val_33187 === (4))){
var inst_33172 = (state_33186[(7)]);
var inst_33172__$1 = (state_33186[(2)]);
var inst_33173 = cljs.core.deref.call(null,state_atom);
var inst_33174 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_33173);
var inst_33175 = cljs.core._EQ_.call(null,"",inst_33172__$1);
var state_33186__$1 = (function (){var statearr_33189 = state_33186;
(statearr_33189[(7)] = inst_33172__$1);

(statearr_33189[(8)] = inst_33174);

return statearr_33189;
})();
if(inst_33175){
var statearr_33190_33204 = state_33186__$1;
(statearr_33190_33204[(1)] = (5));

} else {
var statearr_33191_33205 = state_33186__$1;
(statearr_33191_33205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (5))){
var inst_33177 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_33186__$1 = state_33186;
var statearr_33192_33206 = state_33186__$1;
(statearr_33192_33206[(2)] = inst_33177);

(statearr_33192_33206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (6))){
var inst_33172 = (state_33186[(7)]);
var inst_33174 = (state_33186[(8)]);
var inst_33179 = re_com.typeahead.search_data_source_BANG_.call(null,inst_33174,state_atom,inst_33172);
var state_33186__$1 = state_33186;
var statearr_33193_33207 = state_33186__$1;
(statearr_33193_33207[(2)] = inst_33179);

(statearr_33193_33207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (7))){
var inst_33181 = (state_33186[(2)]);
var state_33186__$1 = (function (){var statearr_33194 = state_33186;
(statearr_33194[(9)] = inst_33181);

return statearr_33194;
})();
var statearr_33195_33208 = state_33186__$1;
(statearr_33195_33208[(2)] = null);

(statearr_33195_33208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30187__auto__))
;
return ((function (switch__30075__auto__,c__30187__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30076__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30076__auto____0 = (function (){
var statearr_33199 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33199[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30076__auto__);

(statearr_33199[(1)] = (1));

return statearr_33199;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30076__auto____1 = (function (state_33186){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_33186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e33200){if((e33200 instanceof Object)){
var ex__30079__auto__ = e33200;
var statearr_33201_33209 = state_33186;
(statearr_33201_33209[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33210 = state_33186;
state_33186 = G__33210;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30076__auto__ = function(state_33186){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30076__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30076__auto____1.call(this,state_33186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30076__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30076__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto__))
})();
var state__30189__auto__ = (function (){var statearr_33202 = f__30188__auto__.call(null);
(statearr_33202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto__);

return statearr_33202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto__))
);

return c__30187__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__33215 = cljs.core.deref.call(null,state_atom);
var map__33215__$1 = ((((!((map__33215 == null)))?((((map__33215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33215):map__33215);
var state = map__33215__$1;
var input_text = cljs.core.get.call(null,map__33215__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__33215__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__33215,map__33215__$1,state,input_text,c_input){
return (function (p1__33211_SHARP_){
var G__33217 = p1__33211_SHARP_;
var G__33217__$1 = cljs.core.assoc.call(null,G__33217,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__33217__$1,new_text);
} else {
return G__33217__$1;
}
});})(map__33215,map__33215__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__33221 = cljs.core._EQ_;
var expr__33222 = event.which;
if(cljs.core.truth_(pred__33221.call(null,goog.events.KeyCodes.UP,expr__33222))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__33221.call(null,goog.events.KeyCodes.DOWN,expr__33222))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__33221.call(null,goog.events.KeyCodes.ENTER,expr__33222))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__33221.call(null,goog.events.KeyCodes.ESC,expr__33222))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__33221.call(null,goog.events.KeyCodes.TAB,expr__33222))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__27988__auto__ = [];
var len__27981__auto___33252 = arguments.length;
var i__27982__auto___33253 = (0);
while(true){
if((i__27982__auto___33253 < len__27981__auto___33252)){
args__27988__auto__.push((arguments[i__27982__auto___33253]));

var G__33254 = (i__27982__auto___33253 + (1));
i__27982__auto___33253 = G__33254;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__33226){
var map__33227 = p__33226;
var map__33227__$1 = ((((!((map__33227 == null)))?((((map__33227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33227):map__33227);
var args = map__33227__$1;
var data_source = cljs.core.get.call(null,map__33227__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__33227__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__33227__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33227__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__33229 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__33229__$1 = ((((!((map__33229 == null)))?((((map__33229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33229):map__33229);
var state = map__33229__$1;
var c_search = cljs.core.get.call(null,map__33229__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__33229__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__33255__delegate = function (p__33231){
var map__33232 = p__33231;
var map__33232__$1 = ((((!((map__33232 == null)))?((((map__33232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33232):map__33232);
var args__$1 = map__33232__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__33234 = cljs.core.deref.call(null,state_atom);
var map__33234__$1 = ((((!((map__33234 == null)))?((((map__33234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33234):map__33234);
var state__$1 = map__33234__$1;
var suggestions = cljs.core.get.call(null,map__33234__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__33234__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__33234__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__33234__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__26906__auto__ = width;
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source__$1)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source__$1);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__26906__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__27686__auto__ = ((function (map__33234,map__33234__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33232,map__33232__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__33236(s__33237){
return (new cljs.core.LazySeq(null,((function (map__33234,map__33234__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33232,map__33232__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__33237__$1 = s__33237;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33237__$1);
if(temp__4657__auto__){
var s__33237__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33237__$2)){
var c__27684__auto__ = cljs.core.chunk_first.call(null,s__33237__$2);
var size__27685__auto__ = cljs.core.count.call(null,c__27684__auto__);
var b__33239 = cljs.core.chunk_buffer.call(null,size__27685__auto__);
if((function (){var i__33238 = (0);
while(true){
if((i__33238 < size__27685__auto__)){
var vec__33246 = cljs.core._nth.call(null,c__27684__auto__,i__33238);
var i = cljs.core.nth.call(null,vec__33246,(0),null);
var s = cljs.core.nth.call(null,vec__33246,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__33239,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__33238,selected_QMARK_,vec__33246,i,s,c__27684__auto__,size__27685__auto__,b__33239,s__33237__$2,temp__4657__auto__,map__33234,map__33234__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33232,map__33232__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__33238,selected_QMARK_,vec__33246,i,s,c__27684__auto__,size__27685__auto__,b__33239,s__33237__$2,temp__4657__auto__,map__33234,map__33234__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33232,map__33232__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__33238,selected_QMARK_,vec__33246,i,s,c__27684__auto__,size__27685__auto__,b__33239,s__33237__$2,temp__4657__auto__,map__33234,map__33234__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33232,map__33232__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__33224_SHARP_){
p1__33224_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__33238,selected_QMARK_,vec__33246,i,s,c__27684__auto__,size__27685__auto__,b__33239,s__33237__$2,temp__4657__auto__,map__33234,map__33234__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33232,map__33232__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__33256 = (i__33238 + (1));
i__33238 = G__33256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33239),re_com$typeahead$iter__33236.call(null,cljs.core.chunk_rest.call(null,s__33237__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33239),null);
}
} else {
var vec__33249 = cljs.core.first.call(null,s__33237__$2);
var i = cljs.core.nth.call(null,vec__33249,(0),null);
var s = cljs.core.nth.call(null,vec__33249,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__33249,i,s,s__33237__$2,temp__4657__auto__,map__33234,map__33234__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33232,map__33232__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__33249,i,s,s__33237__$2,temp__4657__auto__,map__33234,map__33234__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33232,map__33232__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__33249,i,s,s__33237__$2,temp__4657__auto__,map__33234,map__33234__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33232,map__33232__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__33224_SHARP_){
p1__33224_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__33249,i,s,s__33237__$2,temp__4657__auto__,map__33234,map__33234__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33232,map__33232__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__33236.call(null,cljs.core.rest.call(null,s__33237__$2)));
}
} else {
return null;
}
break;
}
});})(map__33234,map__33234__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33232,map__33232__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__33234,map__33234__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33232,map__33232__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__27686__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__33255 = function (var_args){
var p__33231 = null;
if (arguments.length > 0) {
var G__33257__i = 0, G__33257__a = new Array(arguments.length -  0);
while (G__33257__i < G__33257__a.length) {G__33257__a[G__33257__i] = arguments[G__33257__i + 0]; ++G__33257__i;}
  p__33231 = new cljs.core.IndexedSeq(G__33257__a,0);
} 
return G__33255__delegate.call(this,p__33231);};
G__33255.cljs$lang$maxFixedArity = 0;
G__33255.cljs$lang$applyTo = (function (arglist__33258){
var p__33231 = cljs.core.seq(arglist__33258);
return G__33255__delegate(p__33231);
});
G__33255.cljs$core$IFn$_invoke$arity$variadic = G__33255__delegate;
return G__33255;
})()
;
;})(map__33229,map__33229__$1,state,c_search,c_input,state_atom,input_text_model,map__33227,map__33227__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq33225){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33225));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__30187__auto___33425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___33425,out){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___33425,out){
return (function (state_33392){
var state_val_33393 = (state_33392[(1)]);
if((state_val_33393 === (7))){
var inst_33347 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33394_33426 = state_33392__$1;
(statearr_33394_33426[(2)] = inst_33347);

(statearr_33394_33426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (1))){
var inst_33342 = null;
var state_33392__$1 = (function (){var statearr_33395 = state_33392;
(statearr_33395[(7)] = inst_33342);

return statearr_33395;
})();
var statearr_33396_33427 = state_33392__$1;
(statearr_33396_33427[(2)] = null);

(statearr_33396_33427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (4))){
var state_33392__$1 = state_33392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33392__$1,(7),in$);
} else {
if((state_val_33393 === (15))){
var inst_33377 = (state_33392[(2)]);
var state_33392__$1 = (function (){var statearr_33397 = state_33392;
(statearr_33397[(8)] = inst_33377);

return statearr_33397;
})();
var statearr_33398_33428 = state_33392__$1;
(statearr_33398_33428[(2)] = null);

(statearr_33398_33428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (13))){
var inst_33365 = (state_33392[(9)]);
var inst_33379 = cljs.core._EQ_.call(null,inst_33365,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_33392__$1 = state_33392;
if(inst_33379){
var statearr_33399_33429 = state_33392__$1;
(statearr_33399_33429[(1)] = (16));

} else {
var statearr_33400_33430 = state_33392__$1;
(statearr_33400_33430[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (6))){
var inst_33351 = (state_33392[(10)]);
var inst_33350 = (state_33392[(2)]);
var inst_33351__$1 = cljs.core.async.timeout.call(null,ms);
var inst_33359 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33360 = [in$,inst_33351__$1];
var inst_33361 = (new cljs.core.PersistentVector(null,2,(5),inst_33359,inst_33360,null));
var state_33392__$1 = (function (){var statearr_33401 = state_33392;
(statearr_33401[(11)] = inst_33350);

(statearr_33401[(10)] = inst_33351__$1);

return statearr_33401;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33392__$1,(8),inst_33361);
} else {
if((state_val_33393 === (17))){
var state_33392__$1 = state_33392;
var statearr_33402_33431 = state_33392__$1;
(statearr_33402_33431[(2)] = null);

(statearr_33402_33431[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (3))){
var inst_33390 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33392__$1,inst_33390);
} else {
if((state_val_33393 === (12))){
var inst_33350 = (state_33392[(11)]);
var state_33392__$1 = state_33392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33392__$1,(15),out,inst_33350);
} else {
if((state_val_33393 === (2))){
var inst_33342 = (state_33392[(7)]);
var inst_33344 = (inst_33342 == null);
var state_33392__$1 = state_33392;
if(cljs.core.truth_(inst_33344)){
var statearr_33403_33432 = state_33392__$1;
(statearr_33403_33432[(1)] = (4));

} else {
var statearr_33404_33433 = state_33392__$1;
(statearr_33404_33433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (11))){
var inst_33387 = (state_33392[(2)]);
var inst_33342 = inst_33387;
var state_33392__$1 = (function (){var statearr_33405 = state_33392;
(statearr_33405[(7)] = inst_33342);

return statearr_33405;
})();
var statearr_33406_33434 = state_33392__$1;
(statearr_33406_33434[(2)] = null);

(statearr_33406_33434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (9))){
var inst_33363 = (state_33392[(12)]);
var inst_33371 = cljs.core.nth.call(null,inst_33363,(0),null);
var inst_33372 = cljs.core.nth.call(null,inst_33363,(1),null);
var state_33392__$1 = (function (){var statearr_33407 = state_33392;
(statearr_33407[(13)] = inst_33372);

return statearr_33407;
})();
var statearr_33408_33435 = state_33392__$1;
(statearr_33408_33435[(2)] = inst_33371);

(statearr_33408_33435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (5))){
var inst_33342 = (state_33392[(7)]);
var state_33392__$1 = state_33392;
var statearr_33409_33436 = state_33392__$1;
(statearr_33409_33436[(2)] = inst_33342);

(statearr_33409_33436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (14))){
var inst_33385 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33410_33437 = state_33392__$1;
(statearr_33410_33437[(2)] = inst_33385);

(statearr_33410_33437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (16))){
var inst_33364 = (state_33392[(14)]);
var state_33392__$1 = state_33392;
var statearr_33411_33438 = state_33392__$1;
(statearr_33411_33438[(2)] = inst_33364);

(statearr_33411_33438[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (10))){
var inst_33351 = (state_33392[(10)]);
var inst_33365 = (state_33392[(9)]);
var inst_33374 = cljs.core._EQ_.call(null,inst_33365,inst_33351);
var state_33392__$1 = state_33392;
if(inst_33374){
var statearr_33412_33439 = state_33392__$1;
(statearr_33412_33439[(1)] = (12));

} else {
var statearr_33413_33440 = state_33392__$1;
(statearr_33413_33440[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (18))){
var inst_33383 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33414_33441 = state_33392__$1;
(statearr_33414_33441[(2)] = inst_33383);

(statearr_33414_33441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (8))){
var inst_33365 = (state_33392[(9)]);
var inst_33363 = (state_33392[(12)]);
var inst_33363__$1 = (state_33392[(2)]);
var inst_33364 = cljs.core.nth.call(null,inst_33363__$1,(0),null);
var inst_33365__$1 = cljs.core.nth.call(null,inst_33363__$1,(1),null);
var inst_33366 = cljs.core._EQ_.call(null,inst_33365__$1,in$);
var state_33392__$1 = (function (){var statearr_33415 = state_33392;
(statearr_33415[(14)] = inst_33364);

(statearr_33415[(9)] = inst_33365__$1);

(statearr_33415[(12)] = inst_33363__$1);

return statearr_33415;
})();
if(inst_33366){
var statearr_33416_33442 = state_33392__$1;
(statearr_33416_33442[(1)] = (9));

} else {
var statearr_33417_33443 = state_33392__$1;
(statearr_33417_33443[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30187__auto___33425,out))
;
return ((function (switch__30075__auto__,c__30187__auto___33425,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__30076__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__30076__auto____0 = (function (){
var statearr_33421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33421[(0)] = re_com$typeahead$debounce_$_state_machine__30076__auto__);

(statearr_33421[(1)] = (1));

return statearr_33421;
});
var re_com$typeahead$debounce_$_state_machine__30076__auto____1 = (function (state_33392){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_33392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e33422){if((e33422 instanceof Object)){
var ex__30079__auto__ = e33422;
var statearr_33423_33444 = state_33392;
(statearr_33423_33444[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33445 = state_33392;
state_33392 = G__33445;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__30076__auto__ = function(state_33392){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__30076__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__30076__auto____1.call(this,state_33392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__30076__auto____0;
re_com$typeahead$debounce_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__30076__auto____1;
return re_com$typeahead$debounce_$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___33425,out))
})();
var state__30189__auto__ = (function (){var statearr_33424 = f__30188__auto__.call(null);
(statearr_33424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___33425);

return statearr_33424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___33425,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1506566548455