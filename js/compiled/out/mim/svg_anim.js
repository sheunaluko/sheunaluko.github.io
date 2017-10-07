// Compiled by ClojureScript 1.9.229 {}
goog.provide('mim.svg_anim');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
TouchList.prototype.cljs$core$ISeqable$ = true;

TouchList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.call(null,array__$1,(0));
});
mim.svg_anim.log = (function mim$svg_anim$log(var_args){
var args__27989__auto__ = [];
var len__27982__auto___39918 = arguments.length;
var i__27983__auto___39919 = (0);
while(true){
if((i__27983__auto___39919 < len__27982__auto___39918)){
args__27989__auto__.push((arguments[i__27983__auto___39919]));

var G__39920 = (i__27983__auto___39919 + (1));
i__27983__auto___39919 = G__39920;
continue;
} else {
}
break;
}

var argseq__27990__auto__ = ((((0) < args__27989__auto__.length))?(new cljs.core.IndexedSeq(args__27989__auto__.slice((0)),(0),null)):null);
return mim.svg_anim.log.cljs$core$IFn$_invoke$arity$variadic(argseq__27990__auto__);
});

mim.svg_anim.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",args));
return console.log(msg);
});

mim.svg_anim.log.cljs$lang$maxFixedArity = (0);

mim.svg_anim.log.cljs$lang$applyTo = (function (seq39917){
return mim.svg_anim.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39917));
});

mim.svg_anim.set_ui = (function mim$svg_anim$set_ui(msg){
var ui = document.getElementById("console_ui");
return (ui["innerText"] = msg);
});
mim.svg_anim.velocity = (function mim$svg_anim$velocity(var_args){
var args__27989__auto__ = [];
var len__27982__auto___39923 = arguments.length;
var i__27983__auto___39924 = (0);
while(true){
if((i__27983__auto___39924 < len__27982__auto___39923)){
args__27989__auto__.push((arguments[i__27983__auto___39924]));

var G__39925 = (i__27983__auto___39924 + (1));
i__27983__auto___39924 = G__39925;
continue;
} else {
}
break;
}

var argseq__27990__auto__ = ((((1) < args__27989__auto__.length))?(new cljs.core.IndexedSeq(args__27989__auto__.slice((1)),(0),null)):null);
return mim.svg_anim.velocity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27990__auto__);
});

mim.svg_anim.velocity.cljs$core$IFn$_invoke$arity$variadic = (function (el,args){
return cljs.core.apply.call(null,Velocity,el,cljs.core.mapv.call(null,cljs.core.clj__GT_js,args));
});

mim.svg_anim.velocity.cljs$lang$maxFixedArity = (1);

mim.svg_anim.velocity.cljs$lang$applyTo = (function (seq39921){
var G__39922 = cljs.core.first.call(null,seq39921);
var seq39921__$1 = cljs.core.next.call(null,seq39921);
return mim.svg_anim.velocity.cljs$core$IFn$_invoke$arity$variadic(G__39922,seq39921__$1);
});

(window["vel"] = mim.svg_anim.velocity);
mim.svg_anim.to_rad = (function mim$svg_anim$to_rad(deg){
return ((Math.PI / (180)) * deg);
});
mim.svg_anim.svgns = "http://www.w3.org/2000/svg";
mim.svg_anim.circular_arc = (function mim$svg_anim$circular_arc(cx,cy,r,th_1,th_2){
var path = document.createElementNS(mim.svg_anim.svgns,"path");
var rad1 = mim.svg_anim.to_rad.call(null,th_1);
var rad2 = mim.svg_anim.to_rad.call(null,th_2);
var vec__39932 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (r * Math.cos(rad1))),(cy + (r * Math.sin(rad1)))], null);
var p1_x = cljs.core.nth.call(null,vec__39932,(0),null);
var p1_y = cljs.core.nth.call(null,vec__39932,(1),null);
var vec__39935 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (r * Math.cos(rad2))),(cy + (r * Math.sin(rad2)))], null);
var p2_x = cljs.core.nth.call(null,vec__39935,(0),null);
var p2_y = cljs.core.nth.call(null,vec__39935,(1),null);
var d = goog.string.format("M%d %d A %d %d 0 0 1 %d %d",p1_x,p1_y,r,r,p2_x,p2_y);
path.setAttributeNS(null,"transform-origin",[cljs.core.str(cx),cljs.core.str(" "),cljs.core.str(cy)].join(''));

path.setAttributeNS(null,"d",d);

path.setAttributeNS(null,"stroke","black");

path.setAttributeNS(null,"stroke-width","8px");

path.setAttributeNS(null,"fill","none");

return path;
});
mim.svg_anim.elem_lib = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
mim.svg_anim.get_elem = (function mim$svg_anim$get_elem(id){
return id.call(null,cljs.core.deref.call(null,mim.svg_anim.elem_lib));
});
mim.svg_anim.set_elem = (function mim$svg_anim$set_elem(id,v){
return cljs.core.swap_BANG_.call(null,mim.svg_anim.elem_lib,cljs.core.assoc,id,v);
});
mim.svg_anim.get_key_generator = (function mim$svg_anim$get_key_generator(){
var counter = cljs.core.atom.call(null,(0));
return ((function (counter){
return (function (){
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

return cljs.core.keyword.call(null,[cljs.core.str("fresh_id_"),cljs.core.str(cljs.core.deref.call(null,counter))].join(''));
});
;})(counter))
});
mim.svg_anim.fresh_key = mim.svg_anim.get_key_generator.call(null);
mim.svg_anim.rotating_arc = (function mim$svg_anim$rotating_arc(var_args){
var args__27989__auto__ = [];
var len__27982__auto___39941 = arguments.length;
var i__27983__auto___39942 = (0);
while(true){
if((i__27983__auto___39942 < len__27982__auto___39941)){
args__27989__auto__.push((arguments[i__27983__auto___39942]));

var G__39943 = (i__27983__auto___39942 + (1));
i__27983__auto___39942 = G__39943;
continue;
} else {
}
break;
}

var argseq__27990__auto__ = ((((2) < args__27989__auto__.length))?(new cljs.core.IndexedSeq(args__27989__auto__.slice((2)),(0),null)):null);
return mim.svg_anim.rotating_arc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27990__auto__);
});

mim.svg_anim.rotating_arc.cljs$core$IFn$_invoke$arity$variadic = (function (speed,dir,args){
var arc = cljs.core.apply.call(null,mim.svg_anim.circular_arc,args);
var _ = console.log(arc);
var ___$1 = (window["arc"] = arc);
var k = mim.svg_anim.fresh_key.call(null);
var interval = setInterval(((function (arc,_,___$1,k){
return (function (){
if(cljs.core.truth_(arc.isConnected)){
vel(arc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotateY","rotateY",701428609),[cljs.core.str(dir),cljs.core.str("="),cljs.core.str(.2),cljs.core.str("deg")].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(0)], null));

return vel(arc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotateZ","rotateZ",-2039495426),[cljs.core.str(dir),cljs.core.str("="),cljs.core.str(speed),cljs.core.str("deg")].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(0)], null));
} else {
return mim.svg_anim.log.call(null,"Finishing animation");
}
});})(arc,_,___$1,k))
,(10));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"elem","elem",618631056),arc], null);
});

mim.svg_anim.rotating_arc.cljs$lang$maxFixedArity = (2);

mim.svg_anim.rotating_arc.cljs$lang$applyTo = (function (seq39938){
var G__39939 = cljs.core.first.call(null,seq39938);
var seq39938__$1 = cljs.core.next.call(null,seq39938);
var G__39940 = cljs.core.first.call(null,seq39938__$1);
var seq39938__$2 = cljs.core.next.call(null,seq39938__$1);
return mim.svg_anim.rotating_arc.cljs$core$IFn$_invoke$arity$variadic(G__39939,G__39940,seq39938__$2);
});

mim.svg_anim.rotating_arcs_ui = (function mim$svg_anim$rotating_arcs_ui(cx,cy){
var r1 = (100);
var r2 = (50);
var r3 = (10);
var arcs_data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"+",cx,cy,r1,(0),(40)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"+",cx,cy,r1,(90),(120)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"+",cx,cy,r1,(180),(200)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"+",cx,cy,r1,(270),(280)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"-",cx,cy,r2,(0),(40)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"-",cx,cy,r2,(90),(120)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"-",cx,cy,r2,(180),(200)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"-",cx,cy,r2,(270),(280)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"+",cx,cy,r3,(0),(40)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"+",cx,cy,r3,(90),(120)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"+",cx,cy,r3,(180),(200)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"+",cx,cy,r3,(270),(280)], null)], null)], null);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,(function (){var iter__27687__auto__ = ((function (r1,r2,r3,arcs_data){
return (function mim$svg_anim$rotating_arcs_ui_$_iter__39964(s__39965){
return (new cljs.core.LazySeq(null,((function (r1,r2,r3,arcs_data){
return (function (){
var s__39965__$1 = s__39965;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39965__$1);
if(temp__4657__auto__){
var s__39965__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39965__$2)){
var c__27685__auto__ = cljs.core.chunk_first.call(null,s__39965__$2);
var size__27686__auto__ = cljs.core.count.call(null,c__27685__auto__);
var b__39967 = cljs.core.chunk_buffer.call(null,size__27686__auto__);
if((function (){var i__39966 = (0);
while(true){
if((i__39966 < size__27686__auto__)){
var data = cljs.core._nth.call(null,c__27685__auto__,i__39966);
cljs.core.chunk_append.call(null,b__39967,(function (){var iter__27687__auto__ = ((function (i__39966,data,c__27685__auto__,size__27686__auto__,b__39967,s__39965__$2,temp__4657__auto__,r1,r2,r3,arcs_data){
return (function mim$svg_anim$rotating_arcs_ui_$_iter__39964_$_iter__39976(s__39977){
return (new cljs.core.LazySeq(null,((function (i__39966,data,c__27685__auto__,size__27686__auto__,b__39967,s__39965__$2,temp__4657__auto__,r1,r2,r3,arcs_data){
return (function (){
var s__39977__$1 = s__39977;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__39977__$1);
if(temp__4657__auto____$1){
var s__39977__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39977__$2)){
var c__27685__auto____$1 = cljs.core.chunk_first.call(null,s__39977__$2);
var size__27686__auto____$1 = cljs.core.count.call(null,c__27685__auto____$1);
var b__39979 = cljs.core.chunk_buffer.call(null,size__27686__auto____$1);
if((function (){var i__39978 = (0);
while(true){
if((i__39978 < size__27686__auto____$1)){
var d = cljs.core._nth.call(null,c__27685__auto____$1,i__39978);
cljs.core.chunk_append.call(null,b__39979,(function (){var arc_anim = cljs.core.apply.call(null,mim.svg_anim.rotating_arc,d);
return arc_anim;
})());

var G__39984 = (i__39978 + (1));
i__39978 = G__39984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39979),mim$svg_anim$rotating_arcs_ui_$_iter__39964_$_iter__39976.call(null,cljs.core.chunk_rest.call(null,s__39977__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39979),null);
}
} else {
var d = cljs.core.first.call(null,s__39977__$2);
return cljs.core.cons.call(null,(function (){var arc_anim = cljs.core.apply.call(null,mim.svg_anim.rotating_arc,d);
return arc_anim;
})(),mim$svg_anim$rotating_arcs_ui_$_iter__39964_$_iter__39976.call(null,cljs.core.rest.call(null,s__39977__$2)));
}
} else {
return null;
}
break;
}
});})(i__39966,data,c__27685__auto__,size__27686__auto__,b__39967,s__39965__$2,temp__4657__auto__,r1,r2,r3,arcs_data))
,null,null));
});})(i__39966,data,c__27685__auto__,size__27686__auto__,b__39967,s__39965__$2,temp__4657__auto__,r1,r2,r3,arcs_data))
;
return iter__27687__auto__.call(null,data);
})());

var G__39985 = (i__39966 + (1));
i__39966 = G__39985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39967),mim$svg_anim$rotating_arcs_ui_$_iter__39964.call(null,cljs.core.chunk_rest.call(null,s__39965__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39967),null);
}
} else {
var data = cljs.core.first.call(null,s__39965__$2);
return cljs.core.cons.call(null,(function (){var iter__27687__auto__ = ((function (data,s__39965__$2,temp__4657__auto__,r1,r2,r3,arcs_data){
return (function mim$svg_anim$rotating_arcs_ui_$_iter__39964_$_iter__39980(s__39981){
return (new cljs.core.LazySeq(null,((function (data,s__39965__$2,temp__4657__auto__,r1,r2,r3,arcs_data){
return (function (){
var s__39981__$1 = s__39981;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__39981__$1);
if(temp__4657__auto____$1){
var s__39981__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39981__$2)){
var c__27685__auto__ = cljs.core.chunk_first.call(null,s__39981__$2);
var size__27686__auto__ = cljs.core.count.call(null,c__27685__auto__);
var b__39983 = cljs.core.chunk_buffer.call(null,size__27686__auto__);
if((function (){var i__39982 = (0);
while(true){
if((i__39982 < size__27686__auto__)){
var d = cljs.core._nth.call(null,c__27685__auto__,i__39982);
cljs.core.chunk_append.call(null,b__39983,(function (){var arc_anim = cljs.core.apply.call(null,mim.svg_anim.rotating_arc,d);
return arc_anim;
})());

var G__39986 = (i__39982 + (1));
i__39982 = G__39986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39983),mim$svg_anim$rotating_arcs_ui_$_iter__39964_$_iter__39980.call(null,cljs.core.chunk_rest.call(null,s__39981__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39983),null);
}
} else {
var d = cljs.core.first.call(null,s__39981__$2);
return cljs.core.cons.call(null,(function (){var arc_anim = cljs.core.apply.call(null,mim.svg_anim.rotating_arc,d);
return arc_anim;
})(),mim$svg_anim$rotating_arcs_ui_$_iter__39964_$_iter__39980.call(null,cljs.core.rest.call(null,s__39981__$2)));
}
} else {
return null;
}
break;
}
});})(data,s__39965__$2,temp__4657__auto__,r1,r2,r3,arcs_data))
,null,null));
});})(data,s__39965__$2,temp__4657__auto__,r1,r2,r3,arcs_data))
;
return iter__27687__auto__.call(null,data);
})(),mim$svg_anim$rotating_arcs_ui_$_iter__39964.call(null,cljs.core.rest.call(null,s__39965__$2)));
}
} else {
return null;
}
break;
}
});})(r1,r2,r3,arcs_data))
,null,null));
});})(r1,r2,r3,arcs_data))
;
return iter__27687__auto__.call(null,arcs_data);
})()));
});
mim.svg_anim.add_elems_to_svg = (function mim$svg_anim$add_elems_to_svg(svg,k,elems){
mim.svg_anim.set_elem.call(null,k,elems);

var seq__39991 = cljs.core.seq.call(null,elems);
var chunk__39992 = null;
var count__39993 = (0);
var i__39994 = (0);
while(true){
if((i__39994 < count__39993)){
var e = cljs.core._nth.call(null,chunk__39992,i__39994);
svg.appendChild(new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(e));

var G__39995 = seq__39991;
var G__39996 = chunk__39992;
var G__39997 = count__39993;
var G__39998 = (i__39994 + (1));
seq__39991 = G__39995;
chunk__39992 = G__39996;
count__39993 = G__39997;
i__39994 = G__39998;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39991);
if(temp__4657__auto__){
var seq__39991__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39991__$1)){
var c__27718__auto__ = cljs.core.chunk_first.call(null,seq__39991__$1);
var G__39999 = cljs.core.chunk_rest.call(null,seq__39991__$1);
var G__40000 = c__27718__auto__;
var G__40001 = cljs.core.count.call(null,c__27718__auto__);
var G__40002 = (0);
seq__39991 = G__39999;
chunk__39992 = G__40000;
count__39993 = G__40001;
i__39994 = G__40002;
continue;
} else {
var e = cljs.core.first.call(null,seq__39991__$1);
svg.appendChild(new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(e));

var G__40003 = cljs.core.next.call(null,seq__39991__$1);
var G__40004 = null;
var G__40005 = (0);
var G__40006 = (0);
seq__39991 = G__40003;
chunk__39992 = G__40004;
count__39993 = G__40005;
i__39994 = G__40006;
continue;
}
} else {
return null;
}
}
break;
}
});
mim.svg_anim._remove_element = (function mim$svg_anim$_remove_element(element){
var map__40009 = element;
var map__40009__$1 = ((((!((map__40009 == null)))?((((map__40009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40009):map__40009);
var interval = cljs.core.get.call(null,map__40009__$1,new cljs.core.Keyword(null,"interval","interval",1708495417));
var elem = cljs.core.get.call(null,map__40009__$1,new cljs.core.Keyword(null,"elem","elem",618631056));
clearInterval(interval);

return elem.remove();
});
mim.svg_anim.remove_elem_from_svg = (function mim$svg_anim$remove_elem_from_svg(k){
var element = mim.svg_anim.get_elem.call(null,k);
var seq__40015 = cljs.core.seq.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,element));
var chunk__40016 = null;
var count__40017 = (0);
var i__40018 = (0);
while(true){
if((i__40018 < count__40017)){
var el = cljs.core._nth.call(null,chunk__40016,i__40018);
mim.svg_anim._remove_element.call(null,el);

var G__40019 = seq__40015;
var G__40020 = chunk__40016;
var G__40021 = count__40017;
var G__40022 = (i__40018 + (1));
seq__40015 = G__40019;
chunk__40016 = G__40020;
count__40017 = G__40021;
i__40018 = G__40022;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40015);
if(temp__4657__auto__){
var seq__40015__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40015__$1)){
var c__27718__auto__ = cljs.core.chunk_first.call(null,seq__40015__$1);
var G__40023 = cljs.core.chunk_rest.call(null,seq__40015__$1);
var G__40024 = c__27718__auto__;
var G__40025 = cljs.core.count.call(null,c__27718__auto__);
var G__40026 = (0);
seq__40015 = G__40023;
chunk__40016 = G__40024;
count__40017 = G__40025;
i__40018 = G__40026;
continue;
} else {
var el = cljs.core.first.call(null,seq__40015__$1);
mim.svg_anim._remove_element.call(null,el);

var G__40027 = cljs.core.next.call(null,seq__40015__$1);
var G__40028 = null;
var G__40029 = (0);
var G__40030 = (0);
seq__40015 = G__40027;
chunk__40016 = G__40028;
count__40017 = G__40029;
i__40018 = G__40030;
continue;
}
} else {
return null;
}
}
break;
}
});
(window["rem"] = mim.svg_anim.remove_elem_from_svg);

//# sourceMappingURL=svg_anim.js.map?rel=1506756242249