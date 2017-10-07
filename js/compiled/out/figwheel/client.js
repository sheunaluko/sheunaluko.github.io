// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args39837 = [];
var len__27981__auto___39840 = arguments.length;
var i__27982__auto___39841 = (0);
while(true){
if((i__27982__auto___39841 < len__27981__auto___39840)){
args39837.push((arguments[i__27982__auto___39841]));

var G__39842 = (i__27982__auto___39841 + (1));
i__27982__auto___39841 = G__39842;
continue;
} else {
}
break;
}

var G__39839 = args39837.length;
switch (G__39839) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39837.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27988__auto__ = [];
var len__27981__auto___39845 = arguments.length;
var i__27982__auto___39846 = (0);
while(true){
if((i__27982__auto___39846 < len__27981__auto___39845)){
args__27988__auto__.push((arguments[i__27982__auto___39846]));

var G__39847 = (i__27982__auto___39846 + (1));
i__27982__auto___39846 = G__39847;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39844){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39844));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27988__auto__ = [];
var len__27981__auto___39849 = arguments.length;
var i__27982__auto___39850 = (0);
while(true){
if((i__27982__auto___39850 < len__27981__auto___39849)){
args__27988__auto__.push((arguments[i__27982__auto___39850]));

var G__39851 = (i__27982__auto___39850 + (1));
i__27982__auto___39850 = G__39851;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39848){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39848));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39852){
var map__39855 = p__39852;
var map__39855__$1 = ((((!((map__39855 == null)))?((((map__39855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39855):map__39855);
var message = cljs.core.get.call(null,map__39855__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39855__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26906__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26894__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26894__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26894__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30187__auto___40017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___40017,ch){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___40017,ch){
return (function (state_39986){
var state_val_39987 = (state_39986[(1)]);
if((state_val_39987 === (7))){
var inst_39982 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_39988_40018 = state_39986__$1;
(statearr_39988_40018[(2)] = inst_39982);

(statearr_39988_40018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (1))){
var state_39986__$1 = state_39986;
var statearr_39989_40019 = state_39986__$1;
(statearr_39989_40019[(2)] = null);

(statearr_39989_40019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (4))){
var inst_39939 = (state_39986[(7)]);
var inst_39939__$1 = (state_39986[(2)]);
var state_39986__$1 = (function (){var statearr_39990 = state_39986;
(statearr_39990[(7)] = inst_39939__$1);

return statearr_39990;
})();
if(cljs.core.truth_(inst_39939__$1)){
var statearr_39991_40020 = state_39986__$1;
(statearr_39991_40020[(1)] = (5));

} else {
var statearr_39992_40021 = state_39986__$1;
(statearr_39992_40021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (15))){
var inst_39946 = (state_39986[(8)]);
var inst_39961 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39946);
var inst_39962 = cljs.core.first.call(null,inst_39961);
var inst_39963 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39962);
var inst_39964 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39963)].join('');
var inst_39965 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39964);
var state_39986__$1 = state_39986;
var statearr_39993_40022 = state_39986__$1;
(statearr_39993_40022[(2)] = inst_39965);

(statearr_39993_40022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (13))){
var inst_39970 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_39994_40023 = state_39986__$1;
(statearr_39994_40023[(2)] = inst_39970);

(statearr_39994_40023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (6))){
var state_39986__$1 = state_39986;
var statearr_39995_40024 = state_39986__$1;
(statearr_39995_40024[(2)] = null);

(statearr_39995_40024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (17))){
var inst_39968 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_39996_40025 = state_39986__$1;
(statearr_39996_40025[(2)] = inst_39968);

(statearr_39996_40025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (3))){
var inst_39984 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39986__$1,inst_39984);
} else {
if((state_val_39987 === (12))){
var inst_39945 = (state_39986[(9)]);
var inst_39959 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39945,opts);
var state_39986__$1 = state_39986;
if(cljs.core.truth_(inst_39959)){
var statearr_39997_40026 = state_39986__$1;
(statearr_39997_40026[(1)] = (15));

} else {
var statearr_39998_40027 = state_39986__$1;
(statearr_39998_40027[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (2))){
var state_39986__$1 = state_39986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39986__$1,(4),ch);
} else {
if((state_val_39987 === (11))){
var inst_39946 = (state_39986[(8)]);
var inst_39951 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39952 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39946);
var inst_39953 = cljs.core.async.timeout.call(null,(1000));
var inst_39954 = [inst_39952,inst_39953];
var inst_39955 = (new cljs.core.PersistentVector(null,2,(5),inst_39951,inst_39954,null));
var state_39986__$1 = state_39986;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39986__$1,(14),inst_39955);
} else {
if((state_val_39987 === (9))){
var inst_39946 = (state_39986[(8)]);
var inst_39972 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39973 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39946);
var inst_39974 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39973);
var inst_39975 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39974)].join('');
var inst_39976 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39975);
var state_39986__$1 = (function (){var statearr_39999 = state_39986;
(statearr_39999[(10)] = inst_39972);

return statearr_39999;
})();
var statearr_40000_40028 = state_39986__$1;
(statearr_40000_40028[(2)] = inst_39976);

(statearr_40000_40028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (5))){
var inst_39939 = (state_39986[(7)]);
var inst_39941 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39942 = (new cljs.core.PersistentArrayMap(null,2,inst_39941,null));
var inst_39943 = (new cljs.core.PersistentHashSet(null,inst_39942,null));
var inst_39944 = figwheel.client.focus_msgs.call(null,inst_39943,inst_39939);
var inst_39945 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39944);
var inst_39946 = cljs.core.first.call(null,inst_39944);
var inst_39947 = figwheel.client.autoload_QMARK_.call(null);
var state_39986__$1 = (function (){var statearr_40001 = state_39986;
(statearr_40001[(8)] = inst_39946);

(statearr_40001[(9)] = inst_39945);

return statearr_40001;
})();
if(cljs.core.truth_(inst_39947)){
var statearr_40002_40029 = state_39986__$1;
(statearr_40002_40029[(1)] = (8));

} else {
var statearr_40003_40030 = state_39986__$1;
(statearr_40003_40030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (14))){
var inst_39957 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40004_40031 = state_39986__$1;
(statearr_40004_40031[(2)] = inst_39957);

(statearr_40004_40031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (16))){
var state_39986__$1 = state_39986;
var statearr_40005_40032 = state_39986__$1;
(statearr_40005_40032[(2)] = null);

(statearr_40005_40032[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (10))){
var inst_39978 = (state_39986[(2)]);
var state_39986__$1 = (function (){var statearr_40006 = state_39986;
(statearr_40006[(11)] = inst_39978);

return statearr_40006;
})();
var statearr_40007_40033 = state_39986__$1;
(statearr_40007_40033[(2)] = null);

(statearr_40007_40033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (8))){
var inst_39945 = (state_39986[(9)]);
var inst_39949 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39945,opts);
var state_39986__$1 = state_39986;
if(cljs.core.truth_(inst_39949)){
var statearr_40008_40034 = state_39986__$1;
(statearr_40008_40034[(1)] = (11));

} else {
var statearr_40009_40035 = state_39986__$1;
(statearr_40009_40035[(1)] = (12));

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
});})(c__30187__auto___40017,ch))
;
return ((function (switch__30075__auto__,c__30187__auto___40017,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30076__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30076__auto____0 = (function (){
var statearr_40013 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40013[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30076__auto__);

(statearr_40013[(1)] = (1));

return statearr_40013;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30076__auto____1 = (function (state_39986){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_39986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e40014){if((e40014 instanceof Object)){
var ex__30079__auto__ = e40014;
var statearr_40015_40036 = state_39986;
(statearr_40015_40036[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40037 = state_39986;
state_39986 = G__40037;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30076__auto__ = function(state_39986){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30076__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30076__auto____1.call(this,state_39986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30076__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30076__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___40017,ch))
})();
var state__30189__auto__ = (function (){var statearr_40016 = f__30188__auto__.call(null);
(statearr_40016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___40017);

return statearr_40016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___40017,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40038_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40038_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_40041 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40041){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e40040){if((e40040 instanceof Error)){
var e = e40040;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40041], null));
} else {
var e = e40040;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_40041))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40042){
var map__40051 = p__40042;
var map__40051__$1 = ((((!((map__40051 == null)))?((((map__40051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40051):map__40051);
var opts = map__40051__$1;
var build_id = cljs.core.get.call(null,map__40051__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40051,map__40051__$1,opts,build_id){
return (function (p__40053){
var vec__40054 = p__40053;
var seq__40055 = cljs.core.seq.call(null,vec__40054);
var first__40056 = cljs.core.first.call(null,seq__40055);
var seq__40055__$1 = cljs.core.next.call(null,seq__40055);
var map__40057 = first__40056;
var map__40057__$1 = ((((!((map__40057 == null)))?((((map__40057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40057):map__40057);
var msg = map__40057__$1;
var msg_name = cljs.core.get.call(null,map__40057__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40055__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40054,seq__40055,first__40056,seq__40055__$1,map__40057,map__40057__$1,msg,msg_name,_,map__40051,map__40051__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40054,seq__40055,first__40056,seq__40055__$1,map__40057,map__40057__$1,msg,msg_name,_,map__40051,map__40051__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40051,map__40051__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40065){
var vec__40066 = p__40065;
var seq__40067 = cljs.core.seq.call(null,vec__40066);
var first__40068 = cljs.core.first.call(null,seq__40067);
var seq__40067__$1 = cljs.core.next.call(null,seq__40067);
var map__40069 = first__40068;
var map__40069__$1 = ((((!((map__40069 == null)))?((((map__40069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40069):map__40069);
var msg = map__40069__$1;
var msg_name = cljs.core.get.call(null,map__40069__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40067__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40071){
var map__40083 = p__40071;
var map__40083__$1 = ((((!((map__40083 == null)))?((((map__40083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40083):map__40083);
var on_compile_warning = cljs.core.get.call(null,map__40083__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40083__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40083,map__40083__$1,on_compile_warning,on_compile_fail){
return (function (p__40085){
var vec__40086 = p__40085;
var seq__40087 = cljs.core.seq.call(null,vec__40086);
var first__40088 = cljs.core.first.call(null,seq__40087);
var seq__40087__$1 = cljs.core.next.call(null,seq__40087);
var map__40089 = first__40088;
var map__40089__$1 = ((((!((map__40089 == null)))?((((map__40089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40089):map__40089);
var msg = map__40089__$1;
var msg_name = cljs.core.get.call(null,map__40089__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40087__$1;
var pred__40091 = cljs.core._EQ_;
var expr__40092 = msg_name;
if(cljs.core.truth_(pred__40091.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40092))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40091.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40092))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40083,map__40083__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto__,msg_hist,msg_names,msg){
return (function (state_40320){
var state_val_40321 = (state_40320[(1)]);
if((state_val_40321 === (7))){
var inst_40240 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
if(cljs.core.truth_(inst_40240)){
var statearr_40322_40372 = state_40320__$1;
(statearr_40322_40372[(1)] = (8));

} else {
var statearr_40323_40373 = state_40320__$1;
(statearr_40323_40373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (20))){
var inst_40314 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40324_40374 = state_40320__$1;
(statearr_40324_40374[(2)] = inst_40314);

(statearr_40324_40374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (27))){
var inst_40310 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40325_40375 = state_40320__$1;
(statearr_40325_40375[(2)] = inst_40310);

(statearr_40325_40375[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (1))){
var inst_40233 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40320__$1 = state_40320;
if(cljs.core.truth_(inst_40233)){
var statearr_40326_40376 = state_40320__$1;
(statearr_40326_40376[(1)] = (2));

} else {
var statearr_40327_40377 = state_40320__$1;
(statearr_40327_40377[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (24))){
var inst_40312 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40328_40378 = state_40320__$1;
(statearr_40328_40378[(2)] = inst_40312);

(statearr_40328_40378[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (4))){
var inst_40318 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40320__$1,inst_40318);
} else {
if((state_val_40321 === (15))){
var inst_40316 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40329_40379 = state_40320__$1;
(statearr_40329_40379[(2)] = inst_40316);

(statearr_40329_40379[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (21))){
var inst_40269 = (state_40320[(2)]);
var inst_40270 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40271 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40270);
var state_40320__$1 = (function (){var statearr_40330 = state_40320;
(statearr_40330[(7)] = inst_40269);

return statearr_40330;
})();
var statearr_40331_40380 = state_40320__$1;
(statearr_40331_40380[(2)] = inst_40271);

(statearr_40331_40380[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (31))){
var inst_40299 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40320__$1 = state_40320;
if(cljs.core.truth_(inst_40299)){
var statearr_40332_40381 = state_40320__$1;
(statearr_40332_40381[(1)] = (34));

} else {
var statearr_40333_40382 = state_40320__$1;
(statearr_40333_40382[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (32))){
var inst_40308 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40334_40383 = state_40320__$1;
(statearr_40334_40383[(2)] = inst_40308);

(statearr_40334_40383[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (33))){
var inst_40295 = (state_40320[(2)]);
var inst_40296 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40297 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40296);
var state_40320__$1 = (function (){var statearr_40335 = state_40320;
(statearr_40335[(8)] = inst_40295);

return statearr_40335;
})();
var statearr_40336_40384 = state_40320__$1;
(statearr_40336_40384[(2)] = inst_40297);

(statearr_40336_40384[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (13))){
var inst_40254 = figwheel.client.heads_up.clear.call(null);
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40320__$1,(16),inst_40254);
} else {
if((state_val_40321 === (22))){
var inst_40275 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40276 = figwheel.client.heads_up.append_warning_message.call(null,inst_40275);
var state_40320__$1 = state_40320;
var statearr_40337_40385 = state_40320__$1;
(statearr_40337_40385[(2)] = inst_40276);

(statearr_40337_40385[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (36))){
var inst_40306 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40338_40386 = state_40320__$1;
(statearr_40338_40386[(2)] = inst_40306);

(statearr_40338_40386[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (29))){
var inst_40286 = (state_40320[(2)]);
var inst_40287 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40288 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40287);
var state_40320__$1 = (function (){var statearr_40339 = state_40320;
(statearr_40339[(9)] = inst_40286);

return statearr_40339;
})();
var statearr_40340_40387 = state_40320__$1;
(statearr_40340_40387[(2)] = inst_40288);

(statearr_40340_40387[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (6))){
var inst_40235 = (state_40320[(10)]);
var state_40320__$1 = state_40320;
var statearr_40341_40388 = state_40320__$1;
(statearr_40341_40388[(2)] = inst_40235);

(statearr_40341_40388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (28))){
var inst_40282 = (state_40320[(2)]);
var inst_40283 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40284 = figwheel.client.heads_up.display_warning.call(null,inst_40283);
var state_40320__$1 = (function (){var statearr_40342 = state_40320;
(statearr_40342[(11)] = inst_40282);

return statearr_40342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40320__$1,(29),inst_40284);
} else {
if((state_val_40321 === (25))){
var inst_40280 = figwheel.client.heads_up.clear.call(null);
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40320__$1,(28),inst_40280);
} else {
if((state_val_40321 === (34))){
var inst_40301 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40320__$1,(37),inst_40301);
} else {
if((state_val_40321 === (17))){
var inst_40260 = (state_40320[(2)]);
var inst_40261 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40262 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40261);
var state_40320__$1 = (function (){var statearr_40343 = state_40320;
(statearr_40343[(12)] = inst_40260);

return statearr_40343;
})();
var statearr_40344_40389 = state_40320__$1;
(statearr_40344_40389[(2)] = inst_40262);

(statearr_40344_40389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (3))){
var inst_40252 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40320__$1 = state_40320;
if(cljs.core.truth_(inst_40252)){
var statearr_40345_40390 = state_40320__$1;
(statearr_40345_40390[(1)] = (13));

} else {
var statearr_40346_40391 = state_40320__$1;
(statearr_40346_40391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (12))){
var inst_40248 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40347_40392 = state_40320__$1;
(statearr_40347_40392[(2)] = inst_40248);

(statearr_40347_40392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (2))){
var inst_40235 = (state_40320[(10)]);
var inst_40235__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40320__$1 = (function (){var statearr_40348 = state_40320;
(statearr_40348[(10)] = inst_40235__$1);

return statearr_40348;
})();
if(cljs.core.truth_(inst_40235__$1)){
var statearr_40349_40393 = state_40320__$1;
(statearr_40349_40393[(1)] = (5));

} else {
var statearr_40350_40394 = state_40320__$1;
(statearr_40350_40394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (23))){
var inst_40278 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40320__$1 = state_40320;
if(cljs.core.truth_(inst_40278)){
var statearr_40351_40395 = state_40320__$1;
(statearr_40351_40395[(1)] = (25));

} else {
var statearr_40352_40396 = state_40320__$1;
(statearr_40352_40396[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (35))){
var state_40320__$1 = state_40320;
var statearr_40353_40397 = state_40320__$1;
(statearr_40353_40397[(2)] = null);

(statearr_40353_40397[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (19))){
var inst_40273 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40320__$1 = state_40320;
if(cljs.core.truth_(inst_40273)){
var statearr_40354_40398 = state_40320__$1;
(statearr_40354_40398[(1)] = (22));

} else {
var statearr_40355_40399 = state_40320__$1;
(statearr_40355_40399[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (11))){
var inst_40244 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40356_40400 = state_40320__$1;
(statearr_40356_40400[(2)] = inst_40244);

(statearr_40356_40400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (9))){
var inst_40246 = figwheel.client.heads_up.clear.call(null);
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40320__$1,(12),inst_40246);
} else {
if((state_val_40321 === (5))){
var inst_40237 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40320__$1 = state_40320;
var statearr_40357_40401 = state_40320__$1;
(statearr_40357_40401[(2)] = inst_40237);

(statearr_40357_40401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (14))){
var inst_40264 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40320__$1 = state_40320;
if(cljs.core.truth_(inst_40264)){
var statearr_40358_40402 = state_40320__$1;
(statearr_40358_40402[(1)] = (18));

} else {
var statearr_40359_40403 = state_40320__$1;
(statearr_40359_40403[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (26))){
var inst_40290 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40320__$1 = state_40320;
if(cljs.core.truth_(inst_40290)){
var statearr_40360_40404 = state_40320__$1;
(statearr_40360_40404[(1)] = (30));

} else {
var statearr_40361_40405 = state_40320__$1;
(statearr_40361_40405[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (16))){
var inst_40256 = (state_40320[(2)]);
var inst_40257 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40258 = figwheel.client.heads_up.display_exception.call(null,inst_40257);
var state_40320__$1 = (function (){var statearr_40362 = state_40320;
(statearr_40362[(13)] = inst_40256);

return statearr_40362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40320__$1,(17),inst_40258);
} else {
if((state_val_40321 === (30))){
var inst_40292 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40293 = figwheel.client.heads_up.display_warning.call(null,inst_40292);
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40320__$1,(33),inst_40293);
} else {
if((state_val_40321 === (10))){
var inst_40250 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40363_40406 = state_40320__$1;
(statearr_40363_40406[(2)] = inst_40250);

(statearr_40363_40406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (18))){
var inst_40266 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40267 = figwheel.client.heads_up.display_exception.call(null,inst_40266);
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40320__$1,(21),inst_40267);
} else {
if((state_val_40321 === (37))){
var inst_40303 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40364_40407 = state_40320__$1;
(statearr_40364_40407[(2)] = inst_40303);

(statearr_40364_40407[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (8))){
var inst_40242 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40320__$1,(11),inst_40242);
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
}
});})(c__30187__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30075__auto__,c__30187__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30076__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30076__auto____0 = (function (){
var statearr_40368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40368[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30076__auto__);

(statearr_40368[(1)] = (1));

return statearr_40368;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30076__auto____1 = (function (state_40320){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_40320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e40369){if((e40369 instanceof Object)){
var ex__30079__auto__ = e40369;
var statearr_40370_40408 = state_40320;
(statearr_40370_40408[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40409 = state_40320;
state_40320 = G__40409;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30076__auto__ = function(state_40320){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30076__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30076__auto____1.call(this,state_40320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30076__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30076__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto__,msg_hist,msg_names,msg))
})();
var state__30189__auto__ = (function (){var statearr_40371 = f__30188__auto__.call(null);
(statearr_40371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto__);

return statearr_40371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto__,msg_hist,msg_names,msg))
);

return c__30187__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30187__auto___40472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___40472,ch){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___40472,ch){
return (function (state_40455){
var state_val_40456 = (state_40455[(1)]);
if((state_val_40456 === (1))){
var state_40455__$1 = state_40455;
var statearr_40457_40473 = state_40455__$1;
(statearr_40457_40473[(2)] = null);

(statearr_40457_40473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (2))){
var state_40455__$1 = state_40455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40455__$1,(4),ch);
} else {
if((state_val_40456 === (3))){
var inst_40453 = (state_40455[(2)]);
var state_40455__$1 = state_40455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40455__$1,inst_40453);
} else {
if((state_val_40456 === (4))){
var inst_40443 = (state_40455[(7)]);
var inst_40443__$1 = (state_40455[(2)]);
var state_40455__$1 = (function (){var statearr_40458 = state_40455;
(statearr_40458[(7)] = inst_40443__$1);

return statearr_40458;
})();
if(cljs.core.truth_(inst_40443__$1)){
var statearr_40459_40474 = state_40455__$1;
(statearr_40459_40474[(1)] = (5));

} else {
var statearr_40460_40475 = state_40455__$1;
(statearr_40460_40475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (5))){
var inst_40443 = (state_40455[(7)]);
var inst_40445 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40443);
var state_40455__$1 = state_40455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40455__$1,(8),inst_40445);
} else {
if((state_val_40456 === (6))){
var state_40455__$1 = state_40455;
var statearr_40461_40476 = state_40455__$1;
(statearr_40461_40476[(2)] = null);

(statearr_40461_40476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (7))){
var inst_40451 = (state_40455[(2)]);
var state_40455__$1 = state_40455;
var statearr_40462_40477 = state_40455__$1;
(statearr_40462_40477[(2)] = inst_40451);

(statearr_40462_40477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (8))){
var inst_40447 = (state_40455[(2)]);
var state_40455__$1 = (function (){var statearr_40463 = state_40455;
(statearr_40463[(8)] = inst_40447);

return statearr_40463;
})();
var statearr_40464_40478 = state_40455__$1;
(statearr_40464_40478[(2)] = null);

(statearr_40464_40478[(1)] = (2));


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
});})(c__30187__auto___40472,ch))
;
return ((function (switch__30075__auto__,c__30187__auto___40472,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30076__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30076__auto____0 = (function (){
var statearr_40468 = [null,null,null,null,null,null,null,null,null];
(statearr_40468[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30076__auto__);

(statearr_40468[(1)] = (1));

return statearr_40468;
});
var figwheel$client$heads_up_plugin_$_state_machine__30076__auto____1 = (function (state_40455){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_40455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e40469){if((e40469 instanceof Object)){
var ex__30079__auto__ = e40469;
var statearr_40470_40479 = state_40455;
(statearr_40470_40479[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40480 = state_40455;
state_40455 = G__40480;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30076__auto__ = function(state_40455){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30076__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30076__auto____1.call(this,state_40455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30076__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30076__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___40472,ch))
})();
var state__30189__auto__ = (function (){var statearr_40471 = f__30188__auto__.call(null);
(statearr_40471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___40472);

return statearr_40471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___40472,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto__){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto__){
return (function (state_40501){
var state_val_40502 = (state_40501[(1)]);
if((state_val_40502 === (1))){
var inst_40496 = cljs.core.async.timeout.call(null,(3000));
var state_40501__$1 = state_40501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40501__$1,(2),inst_40496);
} else {
if((state_val_40502 === (2))){
var inst_40498 = (state_40501[(2)]);
var inst_40499 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40501__$1 = (function (){var statearr_40503 = state_40501;
(statearr_40503[(7)] = inst_40498);

return statearr_40503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40501__$1,inst_40499);
} else {
return null;
}
}
});})(c__30187__auto__))
;
return ((function (switch__30075__auto__,c__30187__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30076__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30076__auto____0 = (function (){
var statearr_40507 = [null,null,null,null,null,null,null,null];
(statearr_40507[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30076__auto__);

(statearr_40507[(1)] = (1));

return statearr_40507;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30076__auto____1 = (function (state_40501){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_40501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e40508){if((e40508 instanceof Object)){
var ex__30079__auto__ = e40508;
var statearr_40509_40511 = state_40501;
(statearr_40509_40511[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40512 = state_40501;
state_40501 = G__40512;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30076__auto__ = function(state_40501){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30076__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30076__auto____1.call(this,state_40501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30076__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30076__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto__))
})();
var state__30189__auto__ = (function (){var statearr_40510 = f__30188__auto__.call(null);
(statearr_40510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto__);

return statearr_40510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto__))
);

return c__30187__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto__,figwheel_version,temp__4657__auto__){
return (function (state_40535){
var state_val_40536 = (state_40535[(1)]);
if((state_val_40536 === (1))){
var inst_40529 = cljs.core.async.timeout.call(null,(2000));
var state_40535__$1 = state_40535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40535__$1,(2),inst_40529);
} else {
if((state_val_40536 === (2))){
var inst_40531 = (state_40535[(2)]);
var inst_40532 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_40533 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40532);
var state_40535__$1 = (function (){var statearr_40537 = state_40535;
(statearr_40537[(7)] = inst_40531);

return statearr_40537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40535__$1,inst_40533);
} else {
return null;
}
}
});})(c__30187__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30075__auto__,c__30187__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30076__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30076__auto____0 = (function (){
var statearr_40541 = [null,null,null,null,null,null,null,null];
(statearr_40541[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30076__auto__);

(statearr_40541[(1)] = (1));

return statearr_40541;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30076__auto____1 = (function (state_40535){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_40535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e40542){if((e40542 instanceof Object)){
var ex__30079__auto__ = e40542;
var statearr_40543_40545 = state_40535;
(statearr_40543_40545[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40546 = state_40535;
state_40535 = G__40546;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30076__auto__ = function(state_40535){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30076__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30076__auto____1.call(this,state_40535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30076__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30076__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30189__auto__ = (function (){var statearr_40544 = f__30188__auto__.call(null);
(statearr_40544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto__);

return statearr_40544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto__,figwheel_version,temp__4657__auto__))
);

return c__30187__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40547){
var map__40551 = p__40547;
var map__40551__$1 = ((((!((map__40551 == null)))?((((map__40551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40551):map__40551);
var file = cljs.core.get.call(null,map__40551__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40551__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40551__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40553 = "";
var G__40553__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__40553),cljs.core.str("file "),cljs.core.str(file)].join(''):G__40553);
var G__40553__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__40553__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__40553__$1);
if(cljs.core.truth_((function (){var and__26894__auto__ = line;
if(cljs.core.truth_(and__26894__auto__)){
return column;
} else {
return and__26894__auto__;
}
})())){
return [cljs.core.str(G__40553__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__40553__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40554){
var map__40561 = p__40554;
var map__40561__$1 = ((((!((map__40561 == null)))?((((map__40561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40561):map__40561);
var ed = map__40561__$1;
var formatted_exception = cljs.core.get.call(null,map__40561__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40561__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40561__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40563_40567 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40564_40568 = null;
var count__40565_40569 = (0);
var i__40566_40570 = (0);
while(true){
if((i__40566_40570 < count__40565_40569)){
var msg_40571 = cljs.core._nth.call(null,chunk__40564_40568,i__40566_40570);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40571);

var G__40572 = seq__40563_40567;
var G__40573 = chunk__40564_40568;
var G__40574 = count__40565_40569;
var G__40575 = (i__40566_40570 + (1));
seq__40563_40567 = G__40572;
chunk__40564_40568 = G__40573;
count__40565_40569 = G__40574;
i__40566_40570 = G__40575;
continue;
} else {
var temp__4657__auto___40576 = cljs.core.seq.call(null,seq__40563_40567);
if(temp__4657__auto___40576){
var seq__40563_40577__$1 = temp__4657__auto___40576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40563_40577__$1)){
var c__27717__auto___40578 = cljs.core.chunk_first.call(null,seq__40563_40577__$1);
var G__40579 = cljs.core.chunk_rest.call(null,seq__40563_40577__$1);
var G__40580 = c__27717__auto___40578;
var G__40581 = cljs.core.count.call(null,c__27717__auto___40578);
var G__40582 = (0);
seq__40563_40567 = G__40579;
chunk__40564_40568 = G__40580;
count__40565_40569 = G__40581;
i__40566_40570 = G__40582;
continue;
} else {
var msg_40583 = cljs.core.first.call(null,seq__40563_40577__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40583);

var G__40584 = cljs.core.next.call(null,seq__40563_40577__$1);
var G__40585 = null;
var G__40586 = (0);
var G__40587 = (0);
seq__40563_40567 = G__40584;
chunk__40564_40568 = G__40585;
count__40565_40569 = G__40586;
i__40566_40570 = G__40587;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40588){
var map__40591 = p__40588;
var map__40591__$1 = ((((!((map__40591 == null)))?((((map__40591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40591):map__40591);
var w = map__40591__$1;
var message = cljs.core.get.call(null,map__40591__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26894__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26894__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26894__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40603 = cljs.core.seq.call(null,plugins);
var chunk__40604 = null;
var count__40605 = (0);
var i__40606 = (0);
while(true){
if((i__40606 < count__40605)){
var vec__40607 = cljs.core._nth.call(null,chunk__40604,i__40606);
var k = cljs.core.nth.call(null,vec__40607,(0),null);
var plugin = cljs.core.nth.call(null,vec__40607,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40613 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40603,chunk__40604,count__40605,i__40606,pl_40613,vec__40607,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40613.call(null,msg_hist);
});})(seq__40603,chunk__40604,count__40605,i__40606,pl_40613,vec__40607,k,plugin))
);
} else {
}

var G__40614 = seq__40603;
var G__40615 = chunk__40604;
var G__40616 = count__40605;
var G__40617 = (i__40606 + (1));
seq__40603 = G__40614;
chunk__40604 = G__40615;
count__40605 = G__40616;
i__40606 = G__40617;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40603);
if(temp__4657__auto__){
var seq__40603__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40603__$1)){
var c__27717__auto__ = cljs.core.chunk_first.call(null,seq__40603__$1);
var G__40618 = cljs.core.chunk_rest.call(null,seq__40603__$1);
var G__40619 = c__27717__auto__;
var G__40620 = cljs.core.count.call(null,c__27717__auto__);
var G__40621 = (0);
seq__40603 = G__40618;
chunk__40604 = G__40619;
count__40605 = G__40620;
i__40606 = G__40621;
continue;
} else {
var vec__40610 = cljs.core.first.call(null,seq__40603__$1);
var k = cljs.core.nth.call(null,vec__40610,(0),null);
var plugin = cljs.core.nth.call(null,vec__40610,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40622 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40603,chunk__40604,count__40605,i__40606,pl_40622,vec__40610,k,plugin,seq__40603__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40622.call(null,msg_hist);
});})(seq__40603,chunk__40604,count__40605,i__40606,pl_40622,vec__40610,k,plugin,seq__40603__$1,temp__4657__auto__))
);
} else {
}

var G__40623 = cljs.core.next.call(null,seq__40603__$1);
var G__40624 = null;
var G__40625 = (0);
var G__40626 = (0);
seq__40603 = G__40623;
chunk__40604 = G__40624;
count__40605 = G__40625;
i__40606 = G__40626;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args40627 = [];
var len__27981__auto___40634 = arguments.length;
var i__27982__auto___40635 = (0);
while(true){
if((i__27982__auto___40635 < len__27981__auto___40634)){
args40627.push((arguments[i__27982__auto___40635]));

var G__40636 = (i__27982__auto___40635 + (1));
i__27982__auto___40635 = G__40636;
continue;
} else {
}
break;
}

var G__40629 = args40627.length;
switch (G__40629) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40627.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40630_40638 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40631_40639 = null;
var count__40632_40640 = (0);
var i__40633_40641 = (0);
while(true){
if((i__40633_40641 < count__40632_40640)){
var msg_40642 = cljs.core._nth.call(null,chunk__40631_40639,i__40633_40641);
figwheel.client.socket.handle_incoming_message.call(null,msg_40642);

var G__40643 = seq__40630_40638;
var G__40644 = chunk__40631_40639;
var G__40645 = count__40632_40640;
var G__40646 = (i__40633_40641 + (1));
seq__40630_40638 = G__40643;
chunk__40631_40639 = G__40644;
count__40632_40640 = G__40645;
i__40633_40641 = G__40646;
continue;
} else {
var temp__4657__auto___40647 = cljs.core.seq.call(null,seq__40630_40638);
if(temp__4657__auto___40647){
var seq__40630_40648__$1 = temp__4657__auto___40647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40630_40648__$1)){
var c__27717__auto___40649 = cljs.core.chunk_first.call(null,seq__40630_40648__$1);
var G__40650 = cljs.core.chunk_rest.call(null,seq__40630_40648__$1);
var G__40651 = c__27717__auto___40649;
var G__40652 = cljs.core.count.call(null,c__27717__auto___40649);
var G__40653 = (0);
seq__40630_40638 = G__40650;
chunk__40631_40639 = G__40651;
count__40632_40640 = G__40652;
i__40633_40641 = G__40653;
continue;
} else {
var msg_40654 = cljs.core.first.call(null,seq__40630_40648__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40654);

var G__40655 = cljs.core.next.call(null,seq__40630_40648__$1);
var G__40656 = null;
var G__40657 = (0);
var G__40658 = (0);
seq__40630_40638 = G__40655;
chunk__40631_40639 = G__40656;
count__40632_40640 = G__40657;
i__40633_40641 = G__40658;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27988__auto__ = [];
var len__27981__auto___40663 = arguments.length;
var i__27982__auto___40664 = (0);
while(true){
if((i__27982__auto___40664 < len__27981__auto___40663)){
args__27988__auto__.push((arguments[i__27982__auto___40664]));

var G__40665 = (i__27982__auto___40664 + (1));
i__27982__auto___40664 = G__40665;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40660){
var map__40661 = p__40660;
var map__40661__$1 = ((((!((map__40661 == null)))?((((map__40661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40661):map__40661);
var opts = map__40661__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40659){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40659));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40667){if((e40667 instanceof Error)){
var e = e40667;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40667;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__40671){
var map__40672 = p__40671;
var map__40672__$1 = ((((!((map__40672 == null)))?((((map__40672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40672):map__40672);
var msg_name = cljs.core.get.call(null,map__40672__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1506566564140