// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x43206_43207 = value;
x43206_43207.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x43211_43212 = value;
x43211_43212.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x43216_43217 = value;
x43216_43217.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__26894__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__26894__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__26894__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__27988__auto__ = [];
var len__27981__auto___43225 = arguments.length;
var i__27982__auto___43226 = (0);
while(true){
if((i__27982__auto___43226 < len__27981__auto___43225)){
args__27988__auto__.push((arguments[i__27982__auto___43226]));

var G__43227 = (i__27982__auto___43226 + (1));
i__27982__auto___43226 = G__43227;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__43221_43228 = cljs.core.seq.call(null,items);
var chunk__43222_43229 = null;
var count__43223_43230 = (0);
var i__43224_43231 = (0);
while(true){
if((i__43224_43231 < count__43223_43230)){
var item_43232 = cljs.core._nth.call(null,chunk__43222_43229,i__43224_43231);
if(cljs.core.some_QMARK_.call(null,item_43232)){
if(cljs.core.coll_QMARK_.call(null,item_43232)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_43232)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_43232));
}
} else {
}

var G__43233 = seq__43221_43228;
var G__43234 = chunk__43222_43229;
var G__43235 = count__43223_43230;
var G__43236 = (i__43224_43231 + (1));
seq__43221_43228 = G__43233;
chunk__43222_43229 = G__43234;
count__43223_43230 = G__43235;
i__43224_43231 = G__43236;
continue;
} else {
var temp__4657__auto___43237 = cljs.core.seq.call(null,seq__43221_43228);
if(temp__4657__auto___43237){
var seq__43221_43238__$1 = temp__4657__auto___43237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43221_43238__$1)){
var c__27717__auto___43239 = cljs.core.chunk_first.call(null,seq__43221_43238__$1);
var G__43240 = cljs.core.chunk_rest.call(null,seq__43221_43238__$1);
var G__43241 = c__27717__auto___43239;
var G__43242 = cljs.core.count.call(null,c__27717__auto___43239);
var G__43243 = (0);
seq__43221_43228 = G__43240;
chunk__43222_43229 = G__43241;
count__43223_43230 = G__43242;
i__43224_43231 = G__43243;
continue;
} else {
var item_43244 = cljs.core.first.call(null,seq__43221_43238__$1);
if(cljs.core.some_QMARK_.call(null,item_43244)){
if(cljs.core.coll_QMARK_.call(null,item_43244)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_43244)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_43244));
}
} else {
}

var G__43245 = cljs.core.next.call(null,seq__43221_43238__$1);
var G__43246 = null;
var G__43247 = (0);
var G__43248 = (0);
seq__43221_43228 = G__43245;
chunk__43222_43229 = G__43246;
count__43223_43230 = G__43247;
i__43224_43231 = G__43248;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq43220){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43220));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27988__auto__ = [];
var len__27981__auto___43256 = arguments.length;
var i__27982__auto___43257 = (0);
while(true){
if((i__27982__auto___43257 < len__27981__auto___43256)){
args__27988__auto__.push((arguments[i__27982__auto___43257]));

var G__43258 = (i__27982__auto___43257 + (1));
i__27982__auto___43257 = G__43258;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((2) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27989__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__43252_43259 = cljs.core.seq.call(null,children);
var chunk__43253_43260 = null;
var count__43254_43261 = (0);
var i__43255_43262 = (0);
while(true){
if((i__43255_43262 < count__43254_43261)){
var child_43263 = cljs.core._nth.call(null,chunk__43253_43260,i__43255_43262);
if(cljs.core.some_QMARK_.call(null,child_43263)){
if(cljs.core.coll_QMARK_.call(null,child_43263)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_43263))));
} else {
var temp__4655__auto___43264 = devtools.formatters.helpers.pref.call(null,child_43263);
if(cljs.core.truth_(temp__4655__auto___43264)){
var child_value_43265 = temp__4655__auto___43264;
template.push(child_value_43265);
} else {
}
}
} else {
}

var G__43266 = seq__43252_43259;
var G__43267 = chunk__43253_43260;
var G__43268 = count__43254_43261;
var G__43269 = (i__43255_43262 + (1));
seq__43252_43259 = G__43266;
chunk__43253_43260 = G__43267;
count__43254_43261 = G__43268;
i__43255_43262 = G__43269;
continue;
} else {
var temp__4657__auto___43270 = cljs.core.seq.call(null,seq__43252_43259);
if(temp__4657__auto___43270){
var seq__43252_43271__$1 = temp__4657__auto___43270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43252_43271__$1)){
var c__27717__auto___43272 = cljs.core.chunk_first.call(null,seq__43252_43271__$1);
var G__43273 = cljs.core.chunk_rest.call(null,seq__43252_43271__$1);
var G__43274 = c__27717__auto___43272;
var G__43275 = cljs.core.count.call(null,c__27717__auto___43272);
var G__43276 = (0);
seq__43252_43259 = G__43273;
chunk__43253_43260 = G__43274;
count__43254_43261 = G__43275;
i__43255_43262 = G__43276;
continue;
} else {
var child_43277 = cljs.core.first.call(null,seq__43252_43271__$1);
if(cljs.core.some_QMARK_.call(null,child_43277)){
if(cljs.core.coll_QMARK_.call(null,child_43277)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_43277))));
} else {
var temp__4655__auto___43278 = devtools.formatters.helpers.pref.call(null,child_43277);
if(cljs.core.truth_(temp__4655__auto___43278)){
var child_value_43279 = temp__4655__auto___43278;
template.push(child_value_43279);
} else {
}
}
} else {
}

var G__43280 = cljs.core.next.call(null,seq__43252_43271__$1);
var G__43281 = null;
var G__43282 = (0);
var G__43283 = (0);
seq__43252_43259 = G__43280;
chunk__43253_43260 = G__43281;
count__43254_43261 = G__43282;
i__43255_43262 = G__43283;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq43249){
var G__43250 = cljs.core.first.call(null,seq43249);
var seq43249__$1 = cljs.core.next.call(null,seq43249);
var G__43251 = cljs.core.first.call(null,seq43249__$1);
var seq43249__$2 = cljs.core.next.call(null,seq43249__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__43250,G__43251,seq43249__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27988__auto__ = [];
var len__27981__auto___43286 = arguments.length;
var i__27982__auto___43287 = (0);
while(true){
if((i__27982__auto___43287 < len__27981__auto___43286)){
args__27988__auto__.push((arguments[i__27982__auto___43287]));

var G__43288 = (i__27982__auto___43287 + (1));
i__27982__auto___43287 = G__43288;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((1) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27989__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq43284){
var G__43285 = cljs.core.first.call(null,seq43284);
var seq43284__$1 = cljs.core.next.call(null,seq43284);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43285,seq43284__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27988__auto__ = [];
var len__27981__auto___43291 = arguments.length;
var i__27982__auto___43292 = (0);
while(true){
if((i__27982__auto___43292 < len__27981__auto___43291)){
args__27988__auto__.push((arguments[i__27982__auto___43292]));

var G__43293 = (i__27982__auto___43292 + (1));
i__27982__auto___43292 = G__43293;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((1) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27989__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq43289){
var G__43290 = cljs.core.first.call(null,seq43289);
var seq43289__$1 = cljs.core.next.call(null,seq43289);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43290,seq43289__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args43294 = [];
var len__27981__auto___43299 = arguments.length;
var i__27982__auto___43300 = (0);
while(true){
if((i__27982__auto___43300 < len__27981__auto___43299)){
args43294.push((arguments[i__27982__auto___43300]));

var G__43301 = (i__27982__auto___43300 + (1));
i__27982__auto___43300 = G__43301;
continue;
} else {
}
break;
}

var G__43296 = args43294.length;
switch (G__43296) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43294.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj43298 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__26906__auto__ = start_index;
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return (0);
}
})()};
return obj43298;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__27988__auto__ = [];
var len__27981__auto___43309 = arguments.length;
var i__27982__auto___43310 = (0);
while(true){
if((i__27982__auto___43310 < len__27981__auto___43309)){
args__27988__auto__.push((arguments[i__27982__auto___43310]));

var G__43311 = (i__27982__auto___43310 + (1));
i__27982__auto___43310 = G__43311;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((1) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27989__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__43305){
var vec__43306 = p__43305;
var state_override_fn = cljs.core.nth.call(null,vec__43306,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq43303){
var G__43304 = cljs.core.first.call(null,seq43303);
var seq43303__$1 = cljs.core.next.call(null,seq43303);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__43304,seq43303__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__27892__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_43315_43318 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_43316_43319 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_43315_43318,_STAR_print_fn_STAR_43316_43319,sb__27892__auto__){
return (function (x__27893__auto__){
return sb__27892__auto__.append(x__27893__auto__);
});})(_STAR_print_newline_STAR_43315_43318,_STAR_print_fn_STAR_43316_43319,sb__27892__auto__))
;

try{var _STAR_print_level_STAR_43317_43320 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_43317_43320;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43316_43319;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43315_43318;
}
return [cljs.core.str(sb__27892__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_43322 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_43322;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__43324 = name;
switch (G__43324) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__43329 = tag;
var html_tag = cljs.core.nth.call(null,vec__43329,(0),null);
var style = cljs.core.nth.call(null,vec__43329,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_43333 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_43333;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_43336 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_43337 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_43337;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_43336;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__43338 = initial_value;
var G__43339 = value.call(null);
initial_value = G__43338;
value = G__43339;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__43340 = initial_value;
var G__43341 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__43340;
value = G__43341;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__43342 = initial_value;
var G__43343 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__43342;
value = G__43343;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1506566570756