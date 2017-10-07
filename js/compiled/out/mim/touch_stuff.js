// Compiled by ClojureScript 1.9.229 {}
goog.provide('mim.touch_stuff');
goog.require('cljs.core');
goog.require('mim.svg_anim');
TouchList.prototype.cljs$core$ISeqable$ = true;

TouchList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.call(null,array__$1,(0));
});
mim.touch_stuff.log = (function mim$touch_stuff$log(var_args){
var args__27988__auto__ = [];
var len__27981__auto___29891 = arguments.length;
var i__27982__auto___29892 = (0);
while(true){
if((i__27982__auto___29892 < len__27981__auto___29891)){
args__27988__auto__.push((arguments[i__27982__auto___29892]));

var G__29893 = (i__27982__auto___29892 + (1));
i__27982__auto___29892 = G__29893;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return mim.touch_stuff.log.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

mim.touch_stuff.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",args));
return console.log(msg);
});

mim.touch_stuff.log.cljs$lang$maxFixedArity = (0);

mim.touch_stuff.log.cljs$lang$applyTo = (function (seq29890){
return mim.touch_stuff.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29890));
});

mim.touch_stuff.set_ui = (function mim$touch_stuff$set_ui(msg){
var ui = document.getElementById("console_ui");
return (ui["innerText"] = msg);
});
mim.touch_stuff.my_svg = cljs.core.atom.call(null,null);
mim.touch_stuff.my_svg_container = cljs.core.atom.call(null,null);
mim.touch_stuff.my_svg_elems = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
mim.touch_stuff.svgns = "http://www.w3.org/2000/svg";
mim.touch_stuff.make_circle_path = (function mim$touch_stuff$make_circle_path(x,y,r){
return [cljs.core.str("M"),cljs.core.str((x + r)),cljs.core.str(" "),cljs.core.str(y),cljs.core.str(" A "),cljs.core.str(r),cljs.core.str(" "),cljs.core.str(r)].join('');
});
mim.touch_stuff.make_canvas_circle = (function mim$touch_stuff$make_canvas_circle(svg,p__29895){
var vec__29899 = p__29895;
var x = cljs.core.nth.call(null,vec__29899,(0),null);
var y = cljs.core.nth.call(null,vec__29899,(1),null);
var circle = document.createElementNS(mim.touch_stuff.svgns,"path");
circle.setAttributeNS(null,"d","M150 0 L75 200 L225 200 Z");

svg.appendChild(circle);

cljs.core.swap_BANG_.call(null,mim.touch_stuff.my_svg_elems,cljs.core.conj,circle);

console.log(cljs.core.deref.call(null,mim.touch_stuff.my_svg_elems));

if((cljs.core.count.call(null,cljs.core.deref.call(null,mim.touch_stuff.my_svg_elems)) > (4))){
cljs.core.first.call(null,cljs.core.deref.call(null,mim.touch_stuff.my_svg_elems)).remove();

cljs.core.swap_BANG_.call(null,mim.touch_stuff.my_svg_elems,((function (circle,vec__29899,x,y){
return (function (p1__29894_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.drop.call(null,(1),p1__29894_SHARP_));
});})(circle,vec__29899,x,y))
);
} else {
}

return circle;
});
mim.touch_stuff.get_canvas_offsets = (function mim$touch_stuff$get_canvas_offsets(){
var offsets = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,mim.touch_stuff.my_svg_container).offsetLeft,cljs.core.deref.call(null,mim.touch_stuff.my_svg_container).offsetTop], null);
mim.touch_stuff.log.call(null,"OFFSETS");

console.log(offsets);

return offsets;
});
mim.touch_stuff.get_touch_loc = (function mim$touch_stuff$get_touch_loc(touch){
var raw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(touch["pageX"]),(touch["pageY"])], null);
var offsets = mim.touch_stuff.get_canvas_offsets.call(null);
return cljs.core.mapv.call(null,cljs.core._,raw,offsets);
});
mim.touch_stuff.touch_handler = (function mim$touch_stuff$touch_handler(evt){
mim.touch_stuff.log.call(null,"RECEIVED TOUCH!");

var touches = (evt["touches"]);
var first_touch = cljs.core.first.call(null,touches);
var vec__29905 = mim.touch_stuff.get_touch_loc.call(null,first_touch);
var x = cljs.core.nth.call(null,vec__29905,(0),null);
var y = cljs.core.nth.call(null,vec__29905,(1),null);
console.log(touches);

mim.touch_stuff.log.call(null,"TOUCH loc:: ",x," ",y);

return mim.svg_anim.add_elems_to_svg.call(null,cljs.core.deref.call(null,mim.touch_stuff.my_svg),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),mim.svg_anim.rotating_arcs_ui.call(null,x,y));
});
mim.touch_stuff.touch_end_handler = (function mim$touch_stuff$touch_end_handler(evt){
mim.touch_stuff.log.call(null,"RECEIVED TOUCH END!");

return mim.svg_anim.remove_elem_from_svg.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
});
mim.touch_stuff.init_canvas = (function mim$touch_stuff$init_canvas(){
var svg_container = document.getElementById("svgContainer");
var svg = document.getElementById("svg");
svg.setAttribute("width",svg_container.clientWidth);

svg.setAttribute("height",svg_container.clientHeight);

cljs.core.reset_BANG_.call(null,mim.touch_stuff.my_svg,svg);

cljs.core.reset_BANG_.call(null,mim.touch_stuff.my_svg_container,svg_container);

mim.touch_stuff.log.call(null,"Initting svg...");

mim.touch_stuff.log.call(null,"Got object::> ");

console.log(svg);

(window["svg"] = svg);

svg.addEventListener("touchstart",mim.touch_stuff.touch_handler,false);

return svg.addEventListener("touchend",mim.touch_stuff.touch_end_handler,false);
});

//# sourceMappingURL=touch_stuff.js.map?rel=1507392276719