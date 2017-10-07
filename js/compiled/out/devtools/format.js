// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__27569__auto__ = (((value == null))?null:value);
var m__27570__auto__ = (devtools.format._header[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,value);
} else {
var m__27570__auto____$1 = (devtools.format._header["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__27569__auto__ = (((value == null))?null:value);
var m__27570__auto__ = (devtools.format._has_body[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,value);
} else {
var m__27570__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__27569__auto__ = (((value == null))?null:value);
var m__27570__auto__ = (devtools.format._body[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,value);
} else {
var m__27570__auto____$1 = (devtools.format._body["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40704__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40704__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40704__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40704__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40703__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40703__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40704__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40704__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40704__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40704__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40703__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40703__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40704__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40704__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40704__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40704__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40703__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40703__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40704__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40704__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40704__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40704__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40703__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40703__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40704__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40704__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40704__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40704__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40703__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40703__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40704__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40704__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40704__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40704__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40703__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40703__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40704__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40704__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40704__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40704__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40703__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40703__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__27988__auto__ = [];
var len__27981__auto___40725 = arguments.length;
var i__27982__auto___40726 = (0);
while(true){
if((i__27982__auto___40726 < len__27981__auto___40725)){
args__27988__auto__.push((arguments[i__27982__auto___40726]));

var G__40727 = (i__27982__auto___40726 + (1));
i__27982__auto___40726 = G__40727;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq40724){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40724));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27988__auto__ = [];
var len__27981__auto___40729 = arguments.length;
var i__27982__auto___40730 = (0);
while(true){
if((i__27982__auto___40730 < len__27981__auto___40729)){
args__27988__auto__.push((arguments[i__27982__auto___40730]));

var G__40731 = (i__27982__auto___40730 + (1));
i__27982__auto___40730 = G__40731;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq40728){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40728));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27988__auto__ = [];
var len__27981__auto___40733 = arguments.length;
var i__27982__auto___40734 = (0);
while(true){
if((i__27982__auto___40734 < len__27981__auto___40733)){
args__27988__auto__.push((arguments[i__27982__auto___40734]));

var G__40735 = (i__27982__auto___40734 + (1));
i__27982__auto___40734 = G__40735;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq40732){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40732));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27988__auto__ = [];
var len__27981__auto___40737 = arguments.length;
var i__27982__auto___40738 = (0);
while(true){
if((i__27982__auto___40738 < len__27981__auto___40737)){
args__27988__auto__.push((arguments[i__27982__auto___40738]));

var G__40739 = (i__27982__auto___40738 + (1));
i__27982__auto___40738 = G__40739;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq40736){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40736));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27988__auto__ = [];
var len__27981__auto___40741 = arguments.length;
var i__27982__auto___40742 = (0);
while(true){
if((i__27982__auto___40742 < len__27981__auto___40741)){
args__27988__auto__.push((arguments[i__27982__auto___40742]));

var G__40743 = (i__27982__auto___40742 + (1));
i__27982__auto___40742 = G__40743;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq40740){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40740));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27988__auto__ = [];
var len__27981__auto___40745 = arguments.length;
var i__27982__auto___40746 = (0);
while(true){
if((i__27982__auto___40746 < len__27981__auto___40745)){
args__27988__auto__.push((arguments[i__27982__auto___40746]));

var G__40747 = (i__27982__auto___40746 + (1));
i__27982__auto___40746 = G__40747;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq40744){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40744));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27988__auto__ = [];
var len__27981__auto___40749 = arguments.length;
var i__27982__auto___40750 = (0);
while(true){
if((i__27982__auto___40750 < len__27981__auto___40749)){
args__27988__auto__.push((arguments[i__27982__auto___40750]));

var G__40751 = (i__27982__auto___40750 + (1));
i__27982__auto___40750 = G__40751;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq40748){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40748));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27988__auto__ = [];
var len__27981__auto___40759 = arguments.length;
var i__27982__auto___40760 = (0);
while(true){
if((i__27982__auto___40760 < len__27981__auto___40759)){
args__27988__auto__.push((arguments[i__27982__auto___40760]));

var G__40761 = (i__27982__auto___40760 + (1));
i__27982__auto___40760 = G__40761;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((1) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27989__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40755){
var vec__40756 = p__40755;
var state_override = cljs.core.nth.call(null,vec__40756,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__40756,state_override){
return (function (p1__40752_SHARP_){
return cljs.core.merge.call(null,p1__40752_SHARP_,state_override);
});})(vec__40756,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq40753){
var G__40754 = cljs.core.first.call(null,seq40753);
var seq40753__$1 = cljs.core.next.call(null,seq40753);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__40754,seq40753__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27988__auto__ = [];
var len__27981__auto___40763 = arguments.length;
var i__27982__auto___40764 = (0);
while(true){
if((i__27982__auto___40764 < len__27981__auto___40763)){
args__27988__auto__.push((arguments[i__27982__auto___40764]));

var G__40765 = (i__27982__auto___40764 + (1));
i__27982__auto___40764 = G__40765;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq40762){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40762));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27988__auto__ = [];
var len__27981__auto___40768 = arguments.length;
var i__27982__auto___40769 = (0);
while(true){
if((i__27982__auto___40769 < len__27981__auto___40768)){
args__27988__auto__.push((arguments[i__27982__auto___40769]));

var G__40770 = (i__27982__auto___40769 + (1));
i__27982__auto___40769 = G__40770;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((1) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27989__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq40766){
var G__40767 = cljs.core.first.call(null,seq40766);
var seq40766__$1 = cljs.core.next.call(null,seq40766);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__40767,seq40766__$1);
});


//# sourceMappingURL=format.js.map?rel=1506566564604