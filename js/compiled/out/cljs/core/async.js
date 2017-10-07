// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30232 = [];
var len__27981__auto___30238 = arguments.length;
var i__27982__auto___30239 = (0);
while(true){
if((i__27982__auto___30239 < len__27981__auto___30238)){
args30232.push((arguments[i__27982__auto___30239]));

var G__30240 = (i__27982__auto___30239 + (1));
i__27982__auto___30239 = G__30240;
continue;
} else {
}
break;
}

var G__30234 = args30232.length;
switch (G__30234) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30232.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30235 = (function (f,blockable,meta30236){
this.f = f;
this.blockable = blockable;
this.meta30236 = meta30236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30237,meta30236__$1){
var self__ = this;
var _30237__$1 = this;
return (new cljs.core.async.t_cljs$core$async30235(self__.f,self__.blockable,meta30236__$1));
});

cljs.core.async.t_cljs$core$async30235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30237){
var self__ = this;
var _30237__$1 = this;
return self__.meta30236;
});

cljs.core.async.t_cljs$core$async30235.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30235.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30236","meta30236",1964109477,null)], null);
});

cljs.core.async.t_cljs$core$async30235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30235";

cljs.core.async.t_cljs$core$async30235.cljs$lang$ctorPrWriter = (function (this__27512__auto__,writer__27513__auto__,opt__27514__auto__){
return cljs.core._write.call(null,writer__27513__auto__,"cljs.core.async/t_cljs$core$async30235");
});

cljs.core.async.__GT_t_cljs$core$async30235 = (function cljs$core$async$__GT_t_cljs$core$async30235(f__$1,blockable__$1,meta30236){
return (new cljs.core.async.t_cljs$core$async30235(f__$1,blockable__$1,meta30236));
});

}

return (new cljs.core.async.t_cljs$core$async30235(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args30244 = [];
var len__27981__auto___30247 = arguments.length;
var i__27982__auto___30248 = (0);
while(true){
if((i__27982__auto___30248 < len__27981__auto___30247)){
args30244.push((arguments[i__27982__auto___30248]));

var G__30249 = (i__27982__auto___30248 + (1));
i__27982__auto___30248 = G__30249;
continue;
} else {
}
break;
}

var G__30246 = args30244.length;
switch (G__30246) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30244.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30251 = [];
var len__27981__auto___30254 = arguments.length;
var i__27982__auto___30255 = (0);
while(true){
if((i__27982__auto___30255 < len__27981__auto___30254)){
args30251.push((arguments[i__27982__auto___30255]));

var G__30256 = (i__27982__auto___30255 + (1));
i__27982__auto___30255 = G__30256;
continue;
} else {
}
break;
}

var G__30253 = args30251.length;
switch (G__30253) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30251.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args30258 = [];
var len__27981__auto___30261 = arguments.length;
var i__27982__auto___30262 = (0);
while(true){
if((i__27982__auto___30262 < len__27981__auto___30261)){
args30258.push((arguments[i__27982__auto___30262]));

var G__30263 = (i__27982__auto___30262 + (1));
i__27982__auto___30262 = G__30263;
continue;
} else {
}
break;
}

var G__30260 = args30258.length;
switch (G__30260) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30258.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30265 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30265);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30265,ret){
return (function (){
return fn1.call(null,val_30265);
});})(val_30265,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30266 = [];
var len__27981__auto___30269 = arguments.length;
var i__27982__auto___30270 = (0);
while(true){
if((i__27982__auto___30270 < len__27981__auto___30269)){
args30266.push((arguments[i__27982__auto___30270]));

var G__30271 = (i__27982__auto___30270 + (1));
i__27982__auto___30270 = G__30271;
continue;
} else {
}
break;
}

var G__30268 = args30266.length;
switch (G__30268) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30266.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27821__auto___30273 = n;
var x_30274 = (0);
while(true){
if((x_30274 < n__27821__auto___30273)){
(a[x_30274] = (0));

var G__30275 = (x_30274 + (1));
x_30274 = G__30275;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30276 = (i + (1));
i = G__30276;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30280 = (function (alt_flag,flag,meta30281){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30281 = meta30281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30282,meta30281__$1){
var self__ = this;
var _30282__$1 = this;
return (new cljs.core.async.t_cljs$core$async30280(self__.alt_flag,self__.flag,meta30281__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30282){
var self__ = this;
var _30282__$1 = this;
return self__.meta30281;
});})(flag))
;

cljs.core.async.t_cljs$core$async30280.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30280.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30280.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30281","meta30281",821735177,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30280";

cljs.core.async.t_cljs$core$async30280.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27512__auto__,writer__27513__auto__,opt__27514__auto__){
return cljs.core._write.call(null,writer__27513__auto__,"cljs.core.async/t_cljs$core$async30280");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30280 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30280(alt_flag__$1,flag__$1,meta30281){
return (new cljs.core.async.t_cljs$core$async30280(alt_flag__$1,flag__$1,meta30281));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30280(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30286 = (function (alt_handler,flag,cb,meta30287){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30287 = meta30287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30288,meta30287__$1){
var self__ = this;
var _30288__$1 = this;
return (new cljs.core.async.t_cljs$core$async30286(self__.alt_handler,self__.flag,self__.cb,meta30287__$1));
});

cljs.core.async.t_cljs$core$async30286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30288){
var self__ = this;
var _30288__$1 = this;
return self__.meta30287;
});

cljs.core.async.t_cljs$core$async30286.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30286.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30287","meta30287",1107928813,null)], null);
});

cljs.core.async.t_cljs$core$async30286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30286";

cljs.core.async.t_cljs$core$async30286.cljs$lang$ctorPrWriter = (function (this__27512__auto__,writer__27513__auto__,opt__27514__auto__){
return cljs.core._write.call(null,writer__27513__auto__,"cljs.core.async/t_cljs$core$async30286");
});

cljs.core.async.__GT_t_cljs$core$async30286 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30286(alt_handler__$1,flag__$1,cb__$1,meta30287){
return (new cljs.core.async.t_cljs$core$async30286(alt_handler__$1,flag__$1,cb__$1,meta30287));
});

}

return (new cljs.core.async.t_cljs$core$async30286(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30289_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30289_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30290_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30290_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26906__auto__ = wport;
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30291 = (i + (1));
i = G__30291;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26906__auto__ = ret;
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26894__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26894__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26894__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27988__auto__ = [];
var len__27981__auto___30297 = arguments.length;
var i__27982__auto___30298 = (0);
while(true){
if((i__27982__auto___30298 < len__27981__auto___30297)){
args__27988__auto__.push((arguments[i__27982__auto___30298]));

var G__30299 = (i__27982__auto___30298 + (1));
i__27982__auto___30298 = G__30299;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((1) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27989__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30294){
var map__30295 = p__30294;
var map__30295__$1 = ((((!((map__30295 == null)))?((((map__30295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30295):map__30295);
var opts = map__30295__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30292){
var G__30293 = cljs.core.first.call(null,seq30292);
var seq30292__$1 = cljs.core.next.call(null,seq30292);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30293,seq30292__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30300 = [];
var len__27981__auto___30350 = arguments.length;
var i__27982__auto___30351 = (0);
while(true){
if((i__27982__auto___30351 < len__27981__auto___30350)){
args30300.push((arguments[i__27982__auto___30351]));

var G__30352 = (i__27982__auto___30351 + (1));
i__27982__auto___30351 = G__30352;
continue;
} else {
}
break;
}

var G__30302 = args30300.length;
switch (G__30302) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30300.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30187__auto___30354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___30354){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___30354){
return (function (state_30326){
var state_val_30327 = (state_30326[(1)]);
if((state_val_30327 === (7))){
var inst_30322 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
var statearr_30328_30355 = state_30326__$1;
(statearr_30328_30355[(2)] = inst_30322);

(statearr_30328_30355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (1))){
var state_30326__$1 = state_30326;
var statearr_30329_30356 = state_30326__$1;
(statearr_30329_30356[(2)] = null);

(statearr_30329_30356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (4))){
var inst_30305 = (state_30326[(7)]);
var inst_30305__$1 = (state_30326[(2)]);
var inst_30306 = (inst_30305__$1 == null);
var state_30326__$1 = (function (){var statearr_30330 = state_30326;
(statearr_30330[(7)] = inst_30305__$1);

return statearr_30330;
})();
if(cljs.core.truth_(inst_30306)){
var statearr_30331_30357 = state_30326__$1;
(statearr_30331_30357[(1)] = (5));

} else {
var statearr_30332_30358 = state_30326__$1;
(statearr_30332_30358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (13))){
var state_30326__$1 = state_30326;
var statearr_30333_30359 = state_30326__$1;
(statearr_30333_30359[(2)] = null);

(statearr_30333_30359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (6))){
var inst_30305 = (state_30326[(7)]);
var state_30326__$1 = state_30326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30326__$1,(11),to,inst_30305);
} else {
if((state_val_30327 === (3))){
var inst_30324 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30326__$1,inst_30324);
} else {
if((state_val_30327 === (12))){
var state_30326__$1 = state_30326;
var statearr_30334_30360 = state_30326__$1;
(statearr_30334_30360[(2)] = null);

(statearr_30334_30360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (2))){
var state_30326__$1 = state_30326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30326__$1,(4),from);
} else {
if((state_val_30327 === (11))){
var inst_30315 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
if(cljs.core.truth_(inst_30315)){
var statearr_30335_30361 = state_30326__$1;
(statearr_30335_30361[(1)] = (12));

} else {
var statearr_30336_30362 = state_30326__$1;
(statearr_30336_30362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (9))){
var state_30326__$1 = state_30326;
var statearr_30337_30363 = state_30326__$1;
(statearr_30337_30363[(2)] = null);

(statearr_30337_30363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (5))){
var state_30326__$1 = state_30326;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30338_30364 = state_30326__$1;
(statearr_30338_30364[(1)] = (8));

} else {
var statearr_30339_30365 = state_30326__$1;
(statearr_30339_30365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (14))){
var inst_30320 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
var statearr_30340_30366 = state_30326__$1;
(statearr_30340_30366[(2)] = inst_30320);

(statearr_30340_30366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (10))){
var inst_30312 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
var statearr_30341_30367 = state_30326__$1;
(statearr_30341_30367[(2)] = inst_30312);

(statearr_30341_30367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (8))){
var inst_30309 = cljs.core.async.close_BANG_.call(null,to);
var state_30326__$1 = state_30326;
var statearr_30342_30368 = state_30326__$1;
(statearr_30342_30368[(2)] = inst_30309);

(statearr_30342_30368[(1)] = (10));


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
});})(c__30187__auto___30354))
;
return ((function (switch__30075__auto__,c__30187__auto___30354){
return (function() {
var cljs$core$async$state_machine__30076__auto__ = null;
var cljs$core$async$state_machine__30076__auto____0 = (function (){
var statearr_30346 = [null,null,null,null,null,null,null,null];
(statearr_30346[(0)] = cljs$core$async$state_machine__30076__auto__);

(statearr_30346[(1)] = (1));

return statearr_30346;
});
var cljs$core$async$state_machine__30076__auto____1 = (function (state_30326){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_30326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e30347){if((e30347 instanceof Object)){
var ex__30079__auto__ = e30347;
var statearr_30348_30369 = state_30326;
(statearr_30348_30369[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30370 = state_30326;
state_30326 = G__30370;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$state_machine__30076__auto__ = function(state_30326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30076__auto____1.call(this,state_30326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30076__auto____0;
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30076__auto____1;
return cljs$core$async$state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___30354))
})();
var state__30189__auto__ = (function (){var statearr_30349 = f__30188__auto__.call(null);
(statearr_30349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___30354);

return statearr_30349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___30354))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30558){
var vec__30559 = p__30558;
var v = cljs.core.nth.call(null,vec__30559,(0),null);
var p = cljs.core.nth.call(null,vec__30559,(1),null);
var job = vec__30559;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30187__auto___30745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___30745,res,vec__30559,v,p,job,jobs,results){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___30745,res,vec__30559,v,p,job,jobs,results){
return (function (state_30566){
var state_val_30567 = (state_30566[(1)]);
if((state_val_30567 === (1))){
var state_30566__$1 = state_30566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30566__$1,(2),res,v);
} else {
if((state_val_30567 === (2))){
var inst_30563 = (state_30566[(2)]);
var inst_30564 = cljs.core.async.close_BANG_.call(null,res);
var state_30566__$1 = (function (){var statearr_30568 = state_30566;
(statearr_30568[(7)] = inst_30563);

return statearr_30568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30566__$1,inst_30564);
} else {
return null;
}
}
});})(c__30187__auto___30745,res,vec__30559,v,p,job,jobs,results))
;
return ((function (switch__30075__auto__,c__30187__auto___30745,res,vec__30559,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0 = (function (){
var statearr_30572 = [null,null,null,null,null,null,null,null];
(statearr_30572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__);

(statearr_30572[(1)] = (1));

return statearr_30572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1 = (function (state_30566){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_30566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e30573){if((e30573 instanceof Object)){
var ex__30079__auto__ = e30573;
var statearr_30574_30746 = state_30566;
(statearr_30574_30746[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30747 = state_30566;
state_30566 = G__30747;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__ = function(state_30566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1.call(this,state_30566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___30745,res,vec__30559,v,p,job,jobs,results))
})();
var state__30189__auto__ = (function (){var statearr_30575 = f__30188__auto__.call(null);
(statearr_30575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___30745);

return statearr_30575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___30745,res,vec__30559,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30576){
var vec__30577 = p__30576;
var v = cljs.core.nth.call(null,vec__30577,(0),null);
var p = cljs.core.nth.call(null,vec__30577,(1),null);
var job = vec__30577;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27821__auto___30748 = n;
var __30749 = (0);
while(true){
if((__30749 < n__27821__auto___30748)){
var G__30580_30750 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30580_30750) {
case "compute":
var c__30187__auto___30752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30749,c__30187__auto___30752,G__30580_30750,n__27821__auto___30748,jobs,results,process,async){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (__30749,c__30187__auto___30752,G__30580_30750,n__27821__auto___30748,jobs,results,process,async){
return (function (state_30593){
var state_val_30594 = (state_30593[(1)]);
if((state_val_30594 === (1))){
var state_30593__$1 = state_30593;
var statearr_30595_30753 = state_30593__$1;
(statearr_30595_30753[(2)] = null);

(statearr_30595_30753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (2))){
var state_30593__$1 = state_30593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30593__$1,(4),jobs);
} else {
if((state_val_30594 === (3))){
var inst_30591 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30593__$1,inst_30591);
} else {
if((state_val_30594 === (4))){
var inst_30583 = (state_30593[(2)]);
var inst_30584 = process.call(null,inst_30583);
var state_30593__$1 = state_30593;
if(cljs.core.truth_(inst_30584)){
var statearr_30596_30754 = state_30593__$1;
(statearr_30596_30754[(1)] = (5));

} else {
var statearr_30597_30755 = state_30593__$1;
(statearr_30597_30755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (5))){
var state_30593__$1 = state_30593;
var statearr_30598_30756 = state_30593__$1;
(statearr_30598_30756[(2)] = null);

(statearr_30598_30756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (6))){
var state_30593__$1 = state_30593;
var statearr_30599_30757 = state_30593__$1;
(statearr_30599_30757[(2)] = null);

(statearr_30599_30757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (7))){
var inst_30589 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
var statearr_30600_30758 = state_30593__$1;
(statearr_30600_30758[(2)] = inst_30589);

(statearr_30600_30758[(1)] = (3));


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
});})(__30749,c__30187__auto___30752,G__30580_30750,n__27821__auto___30748,jobs,results,process,async))
;
return ((function (__30749,switch__30075__auto__,c__30187__auto___30752,G__30580_30750,n__27821__auto___30748,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0 = (function (){
var statearr_30604 = [null,null,null,null,null,null,null];
(statearr_30604[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__);

(statearr_30604[(1)] = (1));

return statearr_30604;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1 = (function (state_30593){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_30593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e30605){if((e30605 instanceof Object)){
var ex__30079__auto__ = e30605;
var statearr_30606_30759 = state_30593;
(statearr_30606_30759[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30760 = state_30593;
state_30593 = G__30760;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__ = function(state_30593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1.call(this,state_30593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__;
})()
;})(__30749,switch__30075__auto__,c__30187__auto___30752,G__30580_30750,n__27821__auto___30748,jobs,results,process,async))
})();
var state__30189__auto__ = (function (){var statearr_30607 = f__30188__auto__.call(null);
(statearr_30607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___30752);

return statearr_30607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(__30749,c__30187__auto___30752,G__30580_30750,n__27821__auto___30748,jobs,results,process,async))
);


break;
case "async":
var c__30187__auto___30761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30749,c__30187__auto___30761,G__30580_30750,n__27821__auto___30748,jobs,results,process,async){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (__30749,c__30187__auto___30761,G__30580_30750,n__27821__auto___30748,jobs,results,process,async){
return (function (state_30620){
var state_val_30621 = (state_30620[(1)]);
if((state_val_30621 === (1))){
var state_30620__$1 = state_30620;
var statearr_30622_30762 = state_30620__$1;
(statearr_30622_30762[(2)] = null);

(statearr_30622_30762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (2))){
var state_30620__$1 = state_30620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30620__$1,(4),jobs);
} else {
if((state_val_30621 === (3))){
var inst_30618 = (state_30620[(2)]);
var state_30620__$1 = state_30620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30620__$1,inst_30618);
} else {
if((state_val_30621 === (4))){
var inst_30610 = (state_30620[(2)]);
var inst_30611 = async.call(null,inst_30610);
var state_30620__$1 = state_30620;
if(cljs.core.truth_(inst_30611)){
var statearr_30623_30763 = state_30620__$1;
(statearr_30623_30763[(1)] = (5));

} else {
var statearr_30624_30764 = state_30620__$1;
(statearr_30624_30764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (5))){
var state_30620__$1 = state_30620;
var statearr_30625_30765 = state_30620__$1;
(statearr_30625_30765[(2)] = null);

(statearr_30625_30765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (6))){
var state_30620__$1 = state_30620;
var statearr_30626_30766 = state_30620__$1;
(statearr_30626_30766[(2)] = null);

(statearr_30626_30766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (7))){
var inst_30616 = (state_30620[(2)]);
var state_30620__$1 = state_30620;
var statearr_30627_30767 = state_30620__$1;
(statearr_30627_30767[(2)] = inst_30616);

(statearr_30627_30767[(1)] = (3));


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
});})(__30749,c__30187__auto___30761,G__30580_30750,n__27821__auto___30748,jobs,results,process,async))
;
return ((function (__30749,switch__30075__auto__,c__30187__auto___30761,G__30580_30750,n__27821__auto___30748,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0 = (function (){
var statearr_30631 = [null,null,null,null,null,null,null];
(statearr_30631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__);

(statearr_30631[(1)] = (1));

return statearr_30631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1 = (function (state_30620){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_30620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e30632){if((e30632 instanceof Object)){
var ex__30079__auto__ = e30632;
var statearr_30633_30768 = state_30620;
(statearr_30633_30768[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30769 = state_30620;
state_30620 = G__30769;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__ = function(state_30620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1.call(this,state_30620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__;
})()
;})(__30749,switch__30075__auto__,c__30187__auto___30761,G__30580_30750,n__27821__auto___30748,jobs,results,process,async))
})();
var state__30189__auto__ = (function (){var statearr_30634 = f__30188__auto__.call(null);
(statearr_30634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___30761);

return statearr_30634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(__30749,c__30187__auto___30761,G__30580_30750,n__27821__auto___30748,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30770 = (__30749 + (1));
__30749 = G__30770;
continue;
} else {
}
break;
}

var c__30187__auto___30771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___30771,jobs,results,process,async){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___30771,jobs,results,process,async){
return (function (state_30656){
var state_val_30657 = (state_30656[(1)]);
if((state_val_30657 === (1))){
var state_30656__$1 = state_30656;
var statearr_30658_30772 = state_30656__$1;
(statearr_30658_30772[(2)] = null);

(statearr_30658_30772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (2))){
var state_30656__$1 = state_30656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30656__$1,(4),from);
} else {
if((state_val_30657 === (3))){
var inst_30654 = (state_30656[(2)]);
var state_30656__$1 = state_30656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30656__$1,inst_30654);
} else {
if((state_val_30657 === (4))){
var inst_30637 = (state_30656[(7)]);
var inst_30637__$1 = (state_30656[(2)]);
var inst_30638 = (inst_30637__$1 == null);
var state_30656__$1 = (function (){var statearr_30659 = state_30656;
(statearr_30659[(7)] = inst_30637__$1);

return statearr_30659;
})();
if(cljs.core.truth_(inst_30638)){
var statearr_30660_30773 = state_30656__$1;
(statearr_30660_30773[(1)] = (5));

} else {
var statearr_30661_30774 = state_30656__$1;
(statearr_30661_30774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (5))){
var inst_30640 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30656__$1 = state_30656;
var statearr_30662_30775 = state_30656__$1;
(statearr_30662_30775[(2)] = inst_30640);

(statearr_30662_30775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (6))){
var inst_30637 = (state_30656[(7)]);
var inst_30642 = (state_30656[(8)]);
var inst_30642__$1 = cljs.core.async.chan.call(null,(1));
var inst_30643 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30644 = [inst_30637,inst_30642__$1];
var inst_30645 = (new cljs.core.PersistentVector(null,2,(5),inst_30643,inst_30644,null));
var state_30656__$1 = (function (){var statearr_30663 = state_30656;
(statearr_30663[(8)] = inst_30642__$1);

return statearr_30663;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30656__$1,(8),jobs,inst_30645);
} else {
if((state_val_30657 === (7))){
var inst_30652 = (state_30656[(2)]);
var state_30656__$1 = state_30656;
var statearr_30664_30776 = state_30656__$1;
(statearr_30664_30776[(2)] = inst_30652);

(statearr_30664_30776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (8))){
var inst_30642 = (state_30656[(8)]);
var inst_30647 = (state_30656[(2)]);
var state_30656__$1 = (function (){var statearr_30665 = state_30656;
(statearr_30665[(9)] = inst_30647);

return statearr_30665;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30656__$1,(9),results,inst_30642);
} else {
if((state_val_30657 === (9))){
var inst_30649 = (state_30656[(2)]);
var state_30656__$1 = (function (){var statearr_30666 = state_30656;
(statearr_30666[(10)] = inst_30649);

return statearr_30666;
})();
var statearr_30667_30777 = state_30656__$1;
(statearr_30667_30777[(2)] = null);

(statearr_30667_30777[(1)] = (2));


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
});})(c__30187__auto___30771,jobs,results,process,async))
;
return ((function (switch__30075__auto__,c__30187__auto___30771,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0 = (function (){
var statearr_30671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__);

(statearr_30671[(1)] = (1));

return statearr_30671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1 = (function (state_30656){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_30656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e30672){if((e30672 instanceof Object)){
var ex__30079__auto__ = e30672;
var statearr_30673_30778 = state_30656;
(statearr_30673_30778[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30779 = state_30656;
state_30656 = G__30779;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__ = function(state_30656){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1.call(this,state_30656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___30771,jobs,results,process,async))
})();
var state__30189__auto__ = (function (){var statearr_30674 = f__30188__auto__.call(null);
(statearr_30674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___30771);

return statearr_30674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___30771,jobs,results,process,async))
);


var c__30187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto__,jobs,results,process,async){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto__,jobs,results,process,async){
return (function (state_30712){
var state_val_30713 = (state_30712[(1)]);
if((state_val_30713 === (7))){
var inst_30708 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
var statearr_30714_30780 = state_30712__$1;
(statearr_30714_30780[(2)] = inst_30708);

(statearr_30714_30780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (20))){
var state_30712__$1 = state_30712;
var statearr_30715_30781 = state_30712__$1;
(statearr_30715_30781[(2)] = null);

(statearr_30715_30781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (1))){
var state_30712__$1 = state_30712;
var statearr_30716_30782 = state_30712__$1;
(statearr_30716_30782[(2)] = null);

(statearr_30716_30782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (4))){
var inst_30677 = (state_30712[(7)]);
var inst_30677__$1 = (state_30712[(2)]);
var inst_30678 = (inst_30677__$1 == null);
var state_30712__$1 = (function (){var statearr_30717 = state_30712;
(statearr_30717[(7)] = inst_30677__$1);

return statearr_30717;
})();
if(cljs.core.truth_(inst_30678)){
var statearr_30718_30783 = state_30712__$1;
(statearr_30718_30783[(1)] = (5));

} else {
var statearr_30719_30784 = state_30712__$1;
(statearr_30719_30784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (15))){
var inst_30690 = (state_30712[(8)]);
var state_30712__$1 = state_30712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30712__$1,(18),to,inst_30690);
} else {
if((state_val_30713 === (21))){
var inst_30703 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
var statearr_30720_30785 = state_30712__$1;
(statearr_30720_30785[(2)] = inst_30703);

(statearr_30720_30785[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (13))){
var inst_30705 = (state_30712[(2)]);
var state_30712__$1 = (function (){var statearr_30721 = state_30712;
(statearr_30721[(9)] = inst_30705);

return statearr_30721;
})();
var statearr_30722_30786 = state_30712__$1;
(statearr_30722_30786[(2)] = null);

(statearr_30722_30786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (6))){
var inst_30677 = (state_30712[(7)]);
var state_30712__$1 = state_30712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30712__$1,(11),inst_30677);
} else {
if((state_val_30713 === (17))){
var inst_30698 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
if(cljs.core.truth_(inst_30698)){
var statearr_30723_30787 = state_30712__$1;
(statearr_30723_30787[(1)] = (19));

} else {
var statearr_30724_30788 = state_30712__$1;
(statearr_30724_30788[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (3))){
var inst_30710 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30712__$1,inst_30710);
} else {
if((state_val_30713 === (12))){
var inst_30687 = (state_30712[(10)]);
var state_30712__$1 = state_30712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30712__$1,(14),inst_30687);
} else {
if((state_val_30713 === (2))){
var state_30712__$1 = state_30712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30712__$1,(4),results);
} else {
if((state_val_30713 === (19))){
var state_30712__$1 = state_30712;
var statearr_30725_30789 = state_30712__$1;
(statearr_30725_30789[(2)] = null);

(statearr_30725_30789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (11))){
var inst_30687 = (state_30712[(2)]);
var state_30712__$1 = (function (){var statearr_30726 = state_30712;
(statearr_30726[(10)] = inst_30687);

return statearr_30726;
})();
var statearr_30727_30790 = state_30712__$1;
(statearr_30727_30790[(2)] = null);

(statearr_30727_30790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (9))){
var state_30712__$1 = state_30712;
var statearr_30728_30791 = state_30712__$1;
(statearr_30728_30791[(2)] = null);

(statearr_30728_30791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (5))){
var state_30712__$1 = state_30712;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30729_30792 = state_30712__$1;
(statearr_30729_30792[(1)] = (8));

} else {
var statearr_30730_30793 = state_30712__$1;
(statearr_30730_30793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (14))){
var inst_30692 = (state_30712[(11)]);
var inst_30690 = (state_30712[(8)]);
var inst_30690__$1 = (state_30712[(2)]);
var inst_30691 = (inst_30690__$1 == null);
var inst_30692__$1 = cljs.core.not.call(null,inst_30691);
var state_30712__$1 = (function (){var statearr_30731 = state_30712;
(statearr_30731[(11)] = inst_30692__$1);

(statearr_30731[(8)] = inst_30690__$1);

return statearr_30731;
})();
if(inst_30692__$1){
var statearr_30732_30794 = state_30712__$1;
(statearr_30732_30794[(1)] = (15));

} else {
var statearr_30733_30795 = state_30712__$1;
(statearr_30733_30795[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (16))){
var inst_30692 = (state_30712[(11)]);
var state_30712__$1 = state_30712;
var statearr_30734_30796 = state_30712__$1;
(statearr_30734_30796[(2)] = inst_30692);

(statearr_30734_30796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (10))){
var inst_30684 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
var statearr_30735_30797 = state_30712__$1;
(statearr_30735_30797[(2)] = inst_30684);

(statearr_30735_30797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (18))){
var inst_30695 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
var statearr_30736_30798 = state_30712__$1;
(statearr_30736_30798[(2)] = inst_30695);

(statearr_30736_30798[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (8))){
var inst_30681 = cljs.core.async.close_BANG_.call(null,to);
var state_30712__$1 = state_30712;
var statearr_30737_30799 = state_30712__$1;
(statearr_30737_30799[(2)] = inst_30681);

(statearr_30737_30799[(1)] = (10));


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
}
}
}
});})(c__30187__auto__,jobs,results,process,async))
;
return ((function (switch__30075__auto__,c__30187__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0 = (function (){
var statearr_30741 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__);

(statearr_30741[(1)] = (1));

return statearr_30741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1 = (function (state_30712){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_30712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e30742){if((e30742 instanceof Object)){
var ex__30079__auto__ = e30742;
var statearr_30743_30800 = state_30712;
(statearr_30743_30800[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30801 = state_30712;
state_30712 = G__30801;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__ = function(state_30712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1.call(this,state_30712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto__,jobs,results,process,async))
})();
var state__30189__auto__ = (function (){var statearr_30744 = f__30188__auto__.call(null);
(statearr_30744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto__);

return statearr_30744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto__,jobs,results,process,async))
);

return c__30187__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30802 = [];
var len__27981__auto___30805 = arguments.length;
var i__27982__auto___30806 = (0);
while(true){
if((i__27982__auto___30806 < len__27981__auto___30805)){
args30802.push((arguments[i__27982__auto___30806]));

var G__30807 = (i__27982__auto___30806 + (1));
i__27982__auto___30806 = G__30807;
continue;
} else {
}
break;
}

var G__30804 = args30802.length;
switch (G__30804) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30802.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30809 = [];
var len__27981__auto___30812 = arguments.length;
var i__27982__auto___30813 = (0);
while(true){
if((i__27982__auto___30813 < len__27981__auto___30812)){
args30809.push((arguments[i__27982__auto___30813]));

var G__30814 = (i__27982__auto___30813 + (1));
i__27982__auto___30813 = G__30814;
continue;
} else {
}
break;
}

var G__30811 = args30809.length;
switch (G__30811) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30809.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30816 = [];
var len__27981__auto___30869 = arguments.length;
var i__27982__auto___30870 = (0);
while(true){
if((i__27982__auto___30870 < len__27981__auto___30869)){
args30816.push((arguments[i__27982__auto___30870]));

var G__30871 = (i__27982__auto___30870 + (1));
i__27982__auto___30870 = G__30871;
continue;
} else {
}
break;
}

var G__30818 = args30816.length;
switch (G__30818) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30816.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30187__auto___30873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___30873,tc,fc){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___30873,tc,fc){
return (function (state_30844){
var state_val_30845 = (state_30844[(1)]);
if((state_val_30845 === (7))){
var inst_30840 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30846_30874 = state_30844__$1;
(statearr_30846_30874[(2)] = inst_30840);

(statearr_30846_30874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (1))){
var state_30844__$1 = state_30844;
var statearr_30847_30875 = state_30844__$1;
(statearr_30847_30875[(2)] = null);

(statearr_30847_30875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (4))){
var inst_30821 = (state_30844[(7)]);
var inst_30821__$1 = (state_30844[(2)]);
var inst_30822 = (inst_30821__$1 == null);
var state_30844__$1 = (function (){var statearr_30848 = state_30844;
(statearr_30848[(7)] = inst_30821__$1);

return statearr_30848;
})();
if(cljs.core.truth_(inst_30822)){
var statearr_30849_30876 = state_30844__$1;
(statearr_30849_30876[(1)] = (5));

} else {
var statearr_30850_30877 = state_30844__$1;
(statearr_30850_30877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (13))){
var state_30844__$1 = state_30844;
var statearr_30851_30878 = state_30844__$1;
(statearr_30851_30878[(2)] = null);

(statearr_30851_30878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (6))){
var inst_30821 = (state_30844[(7)]);
var inst_30827 = p.call(null,inst_30821);
var state_30844__$1 = state_30844;
if(cljs.core.truth_(inst_30827)){
var statearr_30852_30879 = state_30844__$1;
(statearr_30852_30879[(1)] = (9));

} else {
var statearr_30853_30880 = state_30844__$1;
(statearr_30853_30880[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (3))){
var inst_30842 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30844__$1,inst_30842);
} else {
if((state_val_30845 === (12))){
var state_30844__$1 = state_30844;
var statearr_30854_30881 = state_30844__$1;
(statearr_30854_30881[(2)] = null);

(statearr_30854_30881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (2))){
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30844__$1,(4),ch);
} else {
if((state_val_30845 === (11))){
var inst_30821 = (state_30844[(7)]);
var inst_30831 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30844__$1,(8),inst_30831,inst_30821);
} else {
if((state_val_30845 === (9))){
var state_30844__$1 = state_30844;
var statearr_30855_30882 = state_30844__$1;
(statearr_30855_30882[(2)] = tc);

(statearr_30855_30882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (5))){
var inst_30824 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30825 = cljs.core.async.close_BANG_.call(null,fc);
var state_30844__$1 = (function (){var statearr_30856 = state_30844;
(statearr_30856[(8)] = inst_30824);

return statearr_30856;
})();
var statearr_30857_30883 = state_30844__$1;
(statearr_30857_30883[(2)] = inst_30825);

(statearr_30857_30883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (14))){
var inst_30838 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30858_30884 = state_30844__$1;
(statearr_30858_30884[(2)] = inst_30838);

(statearr_30858_30884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (10))){
var state_30844__$1 = state_30844;
var statearr_30859_30885 = state_30844__$1;
(statearr_30859_30885[(2)] = fc);

(statearr_30859_30885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (8))){
var inst_30833 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
if(cljs.core.truth_(inst_30833)){
var statearr_30860_30886 = state_30844__$1;
(statearr_30860_30886[(1)] = (12));

} else {
var statearr_30861_30887 = state_30844__$1;
(statearr_30861_30887[(1)] = (13));

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
});})(c__30187__auto___30873,tc,fc))
;
return ((function (switch__30075__auto__,c__30187__auto___30873,tc,fc){
return (function() {
var cljs$core$async$state_machine__30076__auto__ = null;
var cljs$core$async$state_machine__30076__auto____0 = (function (){
var statearr_30865 = [null,null,null,null,null,null,null,null,null];
(statearr_30865[(0)] = cljs$core$async$state_machine__30076__auto__);

(statearr_30865[(1)] = (1));

return statearr_30865;
});
var cljs$core$async$state_machine__30076__auto____1 = (function (state_30844){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_30844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e30866){if((e30866 instanceof Object)){
var ex__30079__auto__ = e30866;
var statearr_30867_30888 = state_30844;
(statearr_30867_30888[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30889 = state_30844;
state_30844 = G__30889;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$state_machine__30076__auto__ = function(state_30844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30076__auto____1.call(this,state_30844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30076__auto____0;
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30076__auto____1;
return cljs$core$async$state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___30873,tc,fc))
})();
var state__30189__auto__ = (function (){var statearr_30868 = f__30188__auto__.call(null);
(statearr_30868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___30873);

return statearr_30868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___30873,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto__){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto__){
return (function (state_30953){
var state_val_30954 = (state_30953[(1)]);
if((state_val_30954 === (7))){
var inst_30949 = (state_30953[(2)]);
var state_30953__$1 = state_30953;
var statearr_30955_30976 = state_30953__$1;
(statearr_30955_30976[(2)] = inst_30949);

(statearr_30955_30976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (1))){
var inst_30933 = init;
var state_30953__$1 = (function (){var statearr_30956 = state_30953;
(statearr_30956[(7)] = inst_30933);

return statearr_30956;
})();
var statearr_30957_30977 = state_30953__$1;
(statearr_30957_30977[(2)] = null);

(statearr_30957_30977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (4))){
var inst_30936 = (state_30953[(8)]);
var inst_30936__$1 = (state_30953[(2)]);
var inst_30937 = (inst_30936__$1 == null);
var state_30953__$1 = (function (){var statearr_30958 = state_30953;
(statearr_30958[(8)] = inst_30936__$1);

return statearr_30958;
})();
if(cljs.core.truth_(inst_30937)){
var statearr_30959_30978 = state_30953__$1;
(statearr_30959_30978[(1)] = (5));

} else {
var statearr_30960_30979 = state_30953__$1;
(statearr_30960_30979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (6))){
var inst_30936 = (state_30953[(8)]);
var inst_30933 = (state_30953[(7)]);
var inst_30940 = (state_30953[(9)]);
var inst_30940__$1 = f.call(null,inst_30933,inst_30936);
var inst_30941 = cljs.core.reduced_QMARK_.call(null,inst_30940__$1);
var state_30953__$1 = (function (){var statearr_30961 = state_30953;
(statearr_30961[(9)] = inst_30940__$1);

return statearr_30961;
})();
if(inst_30941){
var statearr_30962_30980 = state_30953__$1;
(statearr_30962_30980[(1)] = (8));

} else {
var statearr_30963_30981 = state_30953__$1;
(statearr_30963_30981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (3))){
var inst_30951 = (state_30953[(2)]);
var state_30953__$1 = state_30953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30953__$1,inst_30951);
} else {
if((state_val_30954 === (2))){
var state_30953__$1 = state_30953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30953__$1,(4),ch);
} else {
if((state_val_30954 === (9))){
var inst_30940 = (state_30953[(9)]);
var inst_30933 = inst_30940;
var state_30953__$1 = (function (){var statearr_30964 = state_30953;
(statearr_30964[(7)] = inst_30933);

return statearr_30964;
})();
var statearr_30965_30982 = state_30953__$1;
(statearr_30965_30982[(2)] = null);

(statearr_30965_30982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (5))){
var inst_30933 = (state_30953[(7)]);
var state_30953__$1 = state_30953;
var statearr_30966_30983 = state_30953__$1;
(statearr_30966_30983[(2)] = inst_30933);

(statearr_30966_30983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (10))){
var inst_30947 = (state_30953[(2)]);
var state_30953__$1 = state_30953;
var statearr_30967_30984 = state_30953__$1;
(statearr_30967_30984[(2)] = inst_30947);

(statearr_30967_30984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (8))){
var inst_30940 = (state_30953[(9)]);
var inst_30943 = cljs.core.deref.call(null,inst_30940);
var state_30953__$1 = state_30953;
var statearr_30968_30985 = state_30953__$1;
(statearr_30968_30985[(2)] = inst_30943);

(statearr_30968_30985[(1)] = (10));


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
});})(c__30187__auto__))
;
return ((function (switch__30075__auto__,c__30187__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30076__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30076__auto____0 = (function (){
var statearr_30972 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30972[(0)] = cljs$core$async$reduce_$_state_machine__30076__auto__);

(statearr_30972[(1)] = (1));

return statearr_30972;
});
var cljs$core$async$reduce_$_state_machine__30076__auto____1 = (function (state_30953){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_30953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e30973){if((e30973 instanceof Object)){
var ex__30079__auto__ = e30973;
var statearr_30974_30986 = state_30953;
(statearr_30974_30986[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30987 = state_30953;
state_30953 = G__30987;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30076__auto__ = function(state_30953){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30076__auto____1.call(this,state_30953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30076__auto____0;
cljs$core$async$reduce_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30076__auto____1;
return cljs$core$async$reduce_$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto__))
})();
var state__30189__auto__ = (function (){var statearr_30975 = f__30188__auto__.call(null);
(statearr_30975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto__);

return statearr_30975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto__))
);

return c__30187__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30988 = [];
var len__27981__auto___31040 = arguments.length;
var i__27982__auto___31041 = (0);
while(true){
if((i__27982__auto___31041 < len__27981__auto___31040)){
args30988.push((arguments[i__27982__auto___31041]));

var G__31042 = (i__27982__auto___31041 + (1));
i__27982__auto___31041 = G__31042;
continue;
} else {
}
break;
}

var G__30990 = args30988.length;
switch (G__30990) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30988.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto__){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto__){
return (function (state_31015){
var state_val_31016 = (state_31015[(1)]);
if((state_val_31016 === (7))){
var inst_30997 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31017_31044 = state_31015__$1;
(statearr_31017_31044[(2)] = inst_30997);

(statearr_31017_31044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (1))){
var inst_30991 = cljs.core.seq.call(null,coll);
var inst_30992 = inst_30991;
var state_31015__$1 = (function (){var statearr_31018 = state_31015;
(statearr_31018[(7)] = inst_30992);

return statearr_31018;
})();
var statearr_31019_31045 = state_31015__$1;
(statearr_31019_31045[(2)] = null);

(statearr_31019_31045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (4))){
var inst_30992 = (state_31015[(7)]);
var inst_30995 = cljs.core.first.call(null,inst_30992);
var state_31015__$1 = state_31015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31015__$1,(7),ch,inst_30995);
} else {
if((state_val_31016 === (13))){
var inst_31009 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31020_31046 = state_31015__$1;
(statearr_31020_31046[(2)] = inst_31009);

(statearr_31020_31046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (6))){
var inst_31000 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
if(cljs.core.truth_(inst_31000)){
var statearr_31021_31047 = state_31015__$1;
(statearr_31021_31047[(1)] = (8));

} else {
var statearr_31022_31048 = state_31015__$1;
(statearr_31022_31048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (3))){
var inst_31013 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31015__$1,inst_31013);
} else {
if((state_val_31016 === (12))){
var state_31015__$1 = state_31015;
var statearr_31023_31049 = state_31015__$1;
(statearr_31023_31049[(2)] = null);

(statearr_31023_31049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (2))){
var inst_30992 = (state_31015[(7)]);
var state_31015__$1 = state_31015;
if(cljs.core.truth_(inst_30992)){
var statearr_31024_31050 = state_31015__$1;
(statearr_31024_31050[(1)] = (4));

} else {
var statearr_31025_31051 = state_31015__$1;
(statearr_31025_31051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (11))){
var inst_31006 = cljs.core.async.close_BANG_.call(null,ch);
var state_31015__$1 = state_31015;
var statearr_31026_31052 = state_31015__$1;
(statearr_31026_31052[(2)] = inst_31006);

(statearr_31026_31052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (9))){
var state_31015__$1 = state_31015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31027_31053 = state_31015__$1;
(statearr_31027_31053[(1)] = (11));

} else {
var statearr_31028_31054 = state_31015__$1;
(statearr_31028_31054[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (5))){
var inst_30992 = (state_31015[(7)]);
var state_31015__$1 = state_31015;
var statearr_31029_31055 = state_31015__$1;
(statearr_31029_31055[(2)] = inst_30992);

(statearr_31029_31055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (10))){
var inst_31011 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31030_31056 = state_31015__$1;
(statearr_31030_31056[(2)] = inst_31011);

(statearr_31030_31056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (8))){
var inst_30992 = (state_31015[(7)]);
var inst_31002 = cljs.core.next.call(null,inst_30992);
var inst_30992__$1 = inst_31002;
var state_31015__$1 = (function (){var statearr_31031 = state_31015;
(statearr_31031[(7)] = inst_30992__$1);

return statearr_31031;
})();
var statearr_31032_31057 = state_31015__$1;
(statearr_31032_31057[(2)] = null);

(statearr_31032_31057[(1)] = (2));


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
});})(c__30187__auto__))
;
return ((function (switch__30075__auto__,c__30187__auto__){
return (function() {
var cljs$core$async$state_machine__30076__auto__ = null;
var cljs$core$async$state_machine__30076__auto____0 = (function (){
var statearr_31036 = [null,null,null,null,null,null,null,null];
(statearr_31036[(0)] = cljs$core$async$state_machine__30076__auto__);

(statearr_31036[(1)] = (1));

return statearr_31036;
});
var cljs$core$async$state_machine__30076__auto____1 = (function (state_31015){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_31015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e31037){if((e31037 instanceof Object)){
var ex__30079__auto__ = e31037;
var statearr_31038_31058 = state_31015;
(statearr_31038_31058[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31059 = state_31015;
state_31015 = G__31059;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$state_machine__30076__auto__ = function(state_31015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30076__auto____1.call(this,state_31015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30076__auto____0;
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30076__auto____1;
return cljs$core$async$state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto__))
})();
var state__30189__auto__ = (function (){var statearr_31039 = f__30188__auto__.call(null);
(statearr_31039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto__);

return statearr_31039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto__))
);

return c__30187__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27569__auto__ = (((_ == null))?null:_);
var m__27570__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,_);
} else {
var m__27570__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27569__auto__ = (((m == null))?null:m);
var m__27570__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27570__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27569__auto__ = (((m == null))?null:m);
var m__27570__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,m,ch);
} else {
var m__27570__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27569__auto__ = (((m == null))?null:m);
var m__27570__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,m);
} else {
var m__27570__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31285 = (function (mult,ch,cs,meta31286){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31286 = meta31286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31287,meta31286__$1){
var self__ = this;
var _31287__$1 = this;
return (new cljs.core.async.t_cljs$core$async31285(self__.mult,self__.ch,self__.cs,meta31286__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31287){
var self__ = this;
var _31287__$1 = this;
return self__.meta31286;
});})(cs))
;

cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31285.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31286","meta31286",2006528352,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31285";

cljs.core.async.t_cljs$core$async31285.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27512__auto__,writer__27513__auto__,opt__27514__auto__){
return cljs.core._write.call(null,writer__27513__auto__,"cljs.core.async/t_cljs$core$async31285");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31285 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31285(mult__$1,ch__$1,cs__$1,meta31286){
return (new cljs.core.async.t_cljs$core$async31285(mult__$1,ch__$1,cs__$1,meta31286));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31285(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30187__auto___31510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___31510,cs,m,dchan,dctr,done){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___31510,cs,m,dchan,dctr,done){
return (function (state_31422){
var state_val_31423 = (state_31422[(1)]);
if((state_val_31423 === (7))){
var inst_31418 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31424_31511 = state_31422__$1;
(statearr_31424_31511[(2)] = inst_31418);

(statearr_31424_31511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (20))){
var inst_31321 = (state_31422[(7)]);
var inst_31333 = cljs.core.first.call(null,inst_31321);
var inst_31334 = cljs.core.nth.call(null,inst_31333,(0),null);
var inst_31335 = cljs.core.nth.call(null,inst_31333,(1),null);
var state_31422__$1 = (function (){var statearr_31425 = state_31422;
(statearr_31425[(8)] = inst_31334);

return statearr_31425;
})();
if(cljs.core.truth_(inst_31335)){
var statearr_31426_31512 = state_31422__$1;
(statearr_31426_31512[(1)] = (22));

} else {
var statearr_31427_31513 = state_31422__$1;
(statearr_31427_31513[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (27))){
var inst_31370 = (state_31422[(9)]);
var inst_31365 = (state_31422[(10)]);
var inst_31290 = (state_31422[(11)]);
var inst_31363 = (state_31422[(12)]);
var inst_31370__$1 = cljs.core._nth.call(null,inst_31363,inst_31365);
var inst_31371 = cljs.core.async.put_BANG_.call(null,inst_31370__$1,inst_31290,done);
var state_31422__$1 = (function (){var statearr_31428 = state_31422;
(statearr_31428[(9)] = inst_31370__$1);

return statearr_31428;
})();
if(cljs.core.truth_(inst_31371)){
var statearr_31429_31514 = state_31422__$1;
(statearr_31429_31514[(1)] = (30));

} else {
var statearr_31430_31515 = state_31422__$1;
(statearr_31430_31515[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (1))){
var state_31422__$1 = state_31422;
var statearr_31431_31516 = state_31422__$1;
(statearr_31431_31516[(2)] = null);

(statearr_31431_31516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (24))){
var inst_31321 = (state_31422[(7)]);
var inst_31340 = (state_31422[(2)]);
var inst_31341 = cljs.core.next.call(null,inst_31321);
var inst_31299 = inst_31341;
var inst_31300 = null;
var inst_31301 = (0);
var inst_31302 = (0);
var state_31422__$1 = (function (){var statearr_31432 = state_31422;
(statearr_31432[(13)] = inst_31302);

(statearr_31432[(14)] = inst_31301);

(statearr_31432[(15)] = inst_31340);

(statearr_31432[(16)] = inst_31299);

(statearr_31432[(17)] = inst_31300);

return statearr_31432;
})();
var statearr_31433_31517 = state_31422__$1;
(statearr_31433_31517[(2)] = null);

(statearr_31433_31517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (39))){
var state_31422__$1 = state_31422;
var statearr_31437_31518 = state_31422__$1;
(statearr_31437_31518[(2)] = null);

(statearr_31437_31518[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (4))){
var inst_31290 = (state_31422[(11)]);
var inst_31290__$1 = (state_31422[(2)]);
var inst_31291 = (inst_31290__$1 == null);
var state_31422__$1 = (function (){var statearr_31438 = state_31422;
(statearr_31438[(11)] = inst_31290__$1);

return statearr_31438;
})();
if(cljs.core.truth_(inst_31291)){
var statearr_31439_31519 = state_31422__$1;
(statearr_31439_31519[(1)] = (5));

} else {
var statearr_31440_31520 = state_31422__$1;
(statearr_31440_31520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (15))){
var inst_31302 = (state_31422[(13)]);
var inst_31301 = (state_31422[(14)]);
var inst_31299 = (state_31422[(16)]);
var inst_31300 = (state_31422[(17)]);
var inst_31317 = (state_31422[(2)]);
var inst_31318 = (inst_31302 + (1));
var tmp31434 = inst_31301;
var tmp31435 = inst_31299;
var tmp31436 = inst_31300;
var inst_31299__$1 = tmp31435;
var inst_31300__$1 = tmp31436;
var inst_31301__$1 = tmp31434;
var inst_31302__$1 = inst_31318;
var state_31422__$1 = (function (){var statearr_31441 = state_31422;
(statearr_31441[(13)] = inst_31302__$1);

(statearr_31441[(14)] = inst_31301__$1);

(statearr_31441[(16)] = inst_31299__$1);

(statearr_31441[(18)] = inst_31317);

(statearr_31441[(17)] = inst_31300__$1);

return statearr_31441;
})();
var statearr_31442_31521 = state_31422__$1;
(statearr_31442_31521[(2)] = null);

(statearr_31442_31521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (21))){
var inst_31344 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31446_31522 = state_31422__$1;
(statearr_31446_31522[(2)] = inst_31344);

(statearr_31446_31522[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (31))){
var inst_31370 = (state_31422[(9)]);
var inst_31374 = done.call(null,null);
var inst_31375 = cljs.core.async.untap_STAR_.call(null,m,inst_31370);
var state_31422__$1 = (function (){var statearr_31447 = state_31422;
(statearr_31447[(19)] = inst_31374);

return statearr_31447;
})();
var statearr_31448_31523 = state_31422__$1;
(statearr_31448_31523[(2)] = inst_31375);

(statearr_31448_31523[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (32))){
var inst_31365 = (state_31422[(10)]);
var inst_31364 = (state_31422[(20)]);
var inst_31362 = (state_31422[(21)]);
var inst_31363 = (state_31422[(12)]);
var inst_31377 = (state_31422[(2)]);
var inst_31378 = (inst_31365 + (1));
var tmp31443 = inst_31364;
var tmp31444 = inst_31362;
var tmp31445 = inst_31363;
var inst_31362__$1 = tmp31444;
var inst_31363__$1 = tmp31445;
var inst_31364__$1 = tmp31443;
var inst_31365__$1 = inst_31378;
var state_31422__$1 = (function (){var statearr_31449 = state_31422;
(statearr_31449[(10)] = inst_31365__$1);

(statearr_31449[(20)] = inst_31364__$1);

(statearr_31449[(21)] = inst_31362__$1);

(statearr_31449[(22)] = inst_31377);

(statearr_31449[(12)] = inst_31363__$1);

return statearr_31449;
})();
var statearr_31450_31524 = state_31422__$1;
(statearr_31450_31524[(2)] = null);

(statearr_31450_31524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (40))){
var inst_31390 = (state_31422[(23)]);
var inst_31394 = done.call(null,null);
var inst_31395 = cljs.core.async.untap_STAR_.call(null,m,inst_31390);
var state_31422__$1 = (function (){var statearr_31451 = state_31422;
(statearr_31451[(24)] = inst_31394);

return statearr_31451;
})();
var statearr_31452_31525 = state_31422__$1;
(statearr_31452_31525[(2)] = inst_31395);

(statearr_31452_31525[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (33))){
var inst_31381 = (state_31422[(25)]);
var inst_31383 = cljs.core.chunked_seq_QMARK_.call(null,inst_31381);
var state_31422__$1 = state_31422;
if(inst_31383){
var statearr_31453_31526 = state_31422__$1;
(statearr_31453_31526[(1)] = (36));

} else {
var statearr_31454_31527 = state_31422__$1;
(statearr_31454_31527[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (13))){
var inst_31311 = (state_31422[(26)]);
var inst_31314 = cljs.core.async.close_BANG_.call(null,inst_31311);
var state_31422__$1 = state_31422;
var statearr_31455_31528 = state_31422__$1;
(statearr_31455_31528[(2)] = inst_31314);

(statearr_31455_31528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (22))){
var inst_31334 = (state_31422[(8)]);
var inst_31337 = cljs.core.async.close_BANG_.call(null,inst_31334);
var state_31422__$1 = state_31422;
var statearr_31456_31529 = state_31422__$1;
(statearr_31456_31529[(2)] = inst_31337);

(statearr_31456_31529[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (36))){
var inst_31381 = (state_31422[(25)]);
var inst_31385 = cljs.core.chunk_first.call(null,inst_31381);
var inst_31386 = cljs.core.chunk_rest.call(null,inst_31381);
var inst_31387 = cljs.core.count.call(null,inst_31385);
var inst_31362 = inst_31386;
var inst_31363 = inst_31385;
var inst_31364 = inst_31387;
var inst_31365 = (0);
var state_31422__$1 = (function (){var statearr_31457 = state_31422;
(statearr_31457[(10)] = inst_31365);

(statearr_31457[(20)] = inst_31364);

(statearr_31457[(21)] = inst_31362);

(statearr_31457[(12)] = inst_31363);

return statearr_31457;
})();
var statearr_31458_31530 = state_31422__$1;
(statearr_31458_31530[(2)] = null);

(statearr_31458_31530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (41))){
var inst_31381 = (state_31422[(25)]);
var inst_31397 = (state_31422[(2)]);
var inst_31398 = cljs.core.next.call(null,inst_31381);
var inst_31362 = inst_31398;
var inst_31363 = null;
var inst_31364 = (0);
var inst_31365 = (0);
var state_31422__$1 = (function (){var statearr_31459 = state_31422;
(statearr_31459[(10)] = inst_31365);

(statearr_31459[(27)] = inst_31397);

(statearr_31459[(20)] = inst_31364);

(statearr_31459[(21)] = inst_31362);

(statearr_31459[(12)] = inst_31363);

return statearr_31459;
})();
var statearr_31460_31531 = state_31422__$1;
(statearr_31460_31531[(2)] = null);

(statearr_31460_31531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (43))){
var state_31422__$1 = state_31422;
var statearr_31461_31532 = state_31422__$1;
(statearr_31461_31532[(2)] = null);

(statearr_31461_31532[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (29))){
var inst_31406 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31462_31533 = state_31422__$1;
(statearr_31462_31533[(2)] = inst_31406);

(statearr_31462_31533[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (44))){
var inst_31415 = (state_31422[(2)]);
var state_31422__$1 = (function (){var statearr_31463 = state_31422;
(statearr_31463[(28)] = inst_31415);

return statearr_31463;
})();
var statearr_31464_31534 = state_31422__$1;
(statearr_31464_31534[(2)] = null);

(statearr_31464_31534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (6))){
var inst_31354 = (state_31422[(29)]);
var inst_31353 = cljs.core.deref.call(null,cs);
var inst_31354__$1 = cljs.core.keys.call(null,inst_31353);
var inst_31355 = cljs.core.count.call(null,inst_31354__$1);
var inst_31356 = cljs.core.reset_BANG_.call(null,dctr,inst_31355);
var inst_31361 = cljs.core.seq.call(null,inst_31354__$1);
var inst_31362 = inst_31361;
var inst_31363 = null;
var inst_31364 = (0);
var inst_31365 = (0);
var state_31422__$1 = (function (){var statearr_31465 = state_31422;
(statearr_31465[(10)] = inst_31365);

(statearr_31465[(29)] = inst_31354__$1);

(statearr_31465[(20)] = inst_31364);

(statearr_31465[(21)] = inst_31362);

(statearr_31465[(30)] = inst_31356);

(statearr_31465[(12)] = inst_31363);

return statearr_31465;
})();
var statearr_31466_31535 = state_31422__$1;
(statearr_31466_31535[(2)] = null);

(statearr_31466_31535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (28))){
var inst_31381 = (state_31422[(25)]);
var inst_31362 = (state_31422[(21)]);
var inst_31381__$1 = cljs.core.seq.call(null,inst_31362);
var state_31422__$1 = (function (){var statearr_31467 = state_31422;
(statearr_31467[(25)] = inst_31381__$1);

return statearr_31467;
})();
if(inst_31381__$1){
var statearr_31468_31536 = state_31422__$1;
(statearr_31468_31536[(1)] = (33));

} else {
var statearr_31469_31537 = state_31422__$1;
(statearr_31469_31537[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (25))){
var inst_31365 = (state_31422[(10)]);
var inst_31364 = (state_31422[(20)]);
var inst_31367 = (inst_31365 < inst_31364);
var inst_31368 = inst_31367;
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31368)){
var statearr_31470_31538 = state_31422__$1;
(statearr_31470_31538[(1)] = (27));

} else {
var statearr_31471_31539 = state_31422__$1;
(statearr_31471_31539[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (34))){
var state_31422__$1 = state_31422;
var statearr_31472_31540 = state_31422__$1;
(statearr_31472_31540[(2)] = null);

(statearr_31472_31540[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (17))){
var state_31422__$1 = state_31422;
var statearr_31473_31541 = state_31422__$1;
(statearr_31473_31541[(2)] = null);

(statearr_31473_31541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (3))){
var inst_31420 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31422__$1,inst_31420);
} else {
if((state_val_31423 === (12))){
var inst_31349 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31474_31542 = state_31422__$1;
(statearr_31474_31542[(2)] = inst_31349);

(statearr_31474_31542[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (2))){
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(4),ch);
} else {
if((state_val_31423 === (23))){
var state_31422__$1 = state_31422;
var statearr_31475_31543 = state_31422__$1;
(statearr_31475_31543[(2)] = null);

(statearr_31475_31543[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (35))){
var inst_31404 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31476_31544 = state_31422__$1;
(statearr_31476_31544[(2)] = inst_31404);

(statearr_31476_31544[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (19))){
var inst_31321 = (state_31422[(7)]);
var inst_31325 = cljs.core.chunk_first.call(null,inst_31321);
var inst_31326 = cljs.core.chunk_rest.call(null,inst_31321);
var inst_31327 = cljs.core.count.call(null,inst_31325);
var inst_31299 = inst_31326;
var inst_31300 = inst_31325;
var inst_31301 = inst_31327;
var inst_31302 = (0);
var state_31422__$1 = (function (){var statearr_31477 = state_31422;
(statearr_31477[(13)] = inst_31302);

(statearr_31477[(14)] = inst_31301);

(statearr_31477[(16)] = inst_31299);

(statearr_31477[(17)] = inst_31300);

return statearr_31477;
})();
var statearr_31478_31545 = state_31422__$1;
(statearr_31478_31545[(2)] = null);

(statearr_31478_31545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (11))){
var inst_31299 = (state_31422[(16)]);
var inst_31321 = (state_31422[(7)]);
var inst_31321__$1 = cljs.core.seq.call(null,inst_31299);
var state_31422__$1 = (function (){var statearr_31479 = state_31422;
(statearr_31479[(7)] = inst_31321__$1);

return statearr_31479;
})();
if(inst_31321__$1){
var statearr_31480_31546 = state_31422__$1;
(statearr_31480_31546[(1)] = (16));

} else {
var statearr_31481_31547 = state_31422__$1;
(statearr_31481_31547[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (9))){
var inst_31351 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31482_31548 = state_31422__$1;
(statearr_31482_31548[(2)] = inst_31351);

(statearr_31482_31548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (5))){
var inst_31297 = cljs.core.deref.call(null,cs);
var inst_31298 = cljs.core.seq.call(null,inst_31297);
var inst_31299 = inst_31298;
var inst_31300 = null;
var inst_31301 = (0);
var inst_31302 = (0);
var state_31422__$1 = (function (){var statearr_31483 = state_31422;
(statearr_31483[(13)] = inst_31302);

(statearr_31483[(14)] = inst_31301);

(statearr_31483[(16)] = inst_31299);

(statearr_31483[(17)] = inst_31300);

return statearr_31483;
})();
var statearr_31484_31549 = state_31422__$1;
(statearr_31484_31549[(2)] = null);

(statearr_31484_31549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (14))){
var state_31422__$1 = state_31422;
var statearr_31485_31550 = state_31422__$1;
(statearr_31485_31550[(2)] = null);

(statearr_31485_31550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (45))){
var inst_31412 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31486_31551 = state_31422__$1;
(statearr_31486_31551[(2)] = inst_31412);

(statearr_31486_31551[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (26))){
var inst_31354 = (state_31422[(29)]);
var inst_31408 = (state_31422[(2)]);
var inst_31409 = cljs.core.seq.call(null,inst_31354);
var state_31422__$1 = (function (){var statearr_31487 = state_31422;
(statearr_31487[(31)] = inst_31408);

return statearr_31487;
})();
if(inst_31409){
var statearr_31488_31552 = state_31422__$1;
(statearr_31488_31552[(1)] = (42));

} else {
var statearr_31489_31553 = state_31422__$1;
(statearr_31489_31553[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (16))){
var inst_31321 = (state_31422[(7)]);
var inst_31323 = cljs.core.chunked_seq_QMARK_.call(null,inst_31321);
var state_31422__$1 = state_31422;
if(inst_31323){
var statearr_31490_31554 = state_31422__$1;
(statearr_31490_31554[(1)] = (19));

} else {
var statearr_31491_31555 = state_31422__$1;
(statearr_31491_31555[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (38))){
var inst_31401 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31492_31556 = state_31422__$1;
(statearr_31492_31556[(2)] = inst_31401);

(statearr_31492_31556[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (30))){
var state_31422__$1 = state_31422;
var statearr_31493_31557 = state_31422__$1;
(statearr_31493_31557[(2)] = null);

(statearr_31493_31557[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (10))){
var inst_31302 = (state_31422[(13)]);
var inst_31300 = (state_31422[(17)]);
var inst_31310 = cljs.core._nth.call(null,inst_31300,inst_31302);
var inst_31311 = cljs.core.nth.call(null,inst_31310,(0),null);
var inst_31312 = cljs.core.nth.call(null,inst_31310,(1),null);
var state_31422__$1 = (function (){var statearr_31494 = state_31422;
(statearr_31494[(26)] = inst_31311);

return statearr_31494;
})();
if(cljs.core.truth_(inst_31312)){
var statearr_31495_31558 = state_31422__$1;
(statearr_31495_31558[(1)] = (13));

} else {
var statearr_31496_31559 = state_31422__$1;
(statearr_31496_31559[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (18))){
var inst_31347 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31497_31560 = state_31422__$1;
(statearr_31497_31560[(2)] = inst_31347);

(statearr_31497_31560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (42))){
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(45),dchan);
} else {
if((state_val_31423 === (37))){
var inst_31390 = (state_31422[(23)]);
var inst_31381 = (state_31422[(25)]);
var inst_31290 = (state_31422[(11)]);
var inst_31390__$1 = cljs.core.first.call(null,inst_31381);
var inst_31391 = cljs.core.async.put_BANG_.call(null,inst_31390__$1,inst_31290,done);
var state_31422__$1 = (function (){var statearr_31498 = state_31422;
(statearr_31498[(23)] = inst_31390__$1);

return statearr_31498;
})();
if(cljs.core.truth_(inst_31391)){
var statearr_31499_31561 = state_31422__$1;
(statearr_31499_31561[(1)] = (39));

} else {
var statearr_31500_31562 = state_31422__$1;
(statearr_31500_31562[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (8))){
var inst_31302 = (state_31422[(13)]);
var inst_31301 = (state_31422[(14)]);
var inst_31304 = (inst_31302 < inst_31301);
var inst_31305 = inst_31304;
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31305)){
var statearr_31501_31563 = state_31422__$1;
(statearr_31501_31563[(1)] = (10));

} else {
var statearr_31502_31564 = state_31422__$1;
(statearr_31502_31564[(1)] = (11));

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
});})(c__30187__auto___31510,cs,m,dchan,dctr,done))
;
return ((function (switch__30075__auto__,c__30187__auto___31510,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30076__auto__ = null;
var cljs$core$async$mult_$_state_machine__30076__auto____0 = (function (){
var statearr_31506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31506[(0)] = cljs$core$async$mult_$_state_machine__30076__auto__);

(statearr_31506[(1)] = (1));

return statearr_31506;
});
var cljs$core$async$mult_$_state_machine__30076__auto____1 = (function (state_31422){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_31422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e31507){if((e31507 instanceof Object)){
var ex__30079__auto__ = e31507;
var statearr_31508_31565 = state_31422;
(statearr_31508_31565[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31566 = state_31422;
state_31422 = G__31566;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30076__auto__ = function(state_31422){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30076__auto____1.call(this,state_31422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30076__auto____0;
cljs$core$async$mult_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30076__auto____1;
return cljs$core$async$mult_$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___31510,cs,m,dchan,dctr,done))
})();
var state__30189__auto__ = (function (){var statearr_31509 = f__30188__auto__.call(null);
(statearr_31509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___31510);

return statearr_31509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___31510,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31567 = [];
var len__27981__auto___31570 = arguments.length;
var i__27982__auto___31571 = (0);
while(true){
if((i__27982__auto___31571 < len__27981__auto___31570)){
args31567.push((arguments[i__27982__auto___31571]));

var G__31572 = (i__27982__auto___31571 + (1));
i__27982__auto___31571 = G__31572;
continue;
} else {
}
break;
}

var G__31569 = args31567.length;
switch (G__31569) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31567.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27569__auto__ = (((m == null))?null:m);
var m__27570__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,m,ch);
} else {
var m__27570__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27569__auto__ = (((m == null))?null:m);
var m__27570__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,m,ch);
} else {
var m__27570__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27569__auto__ = (((m == null))?null:m);
var m__27570__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,m);
} else {
var m__27570__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27569__auto__ = (((m == null))?null:m);
var m__27570__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,m,state_map);
} else {
var m__27570__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27569__auto__ = (((m == null))?null:m);
var m__27570__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,m,mode);
} else {
var m__27570__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27988__auto__ = [];
var len__27981__auto___31584 = arguments.length;
var i__27982__auto___31585 = (0);
while(true){
if((i__27982__auto___31585 < len__27981__auto___31584)){
args__27988__auto__.push((arguments[i__27982__auto___31585]));

var G__31586 = (i__27982__auto___31585 + (1));
i__27982__auto___31585 = G__31586;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((3) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27989__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31578){
var map__31579 = p__31578;
var map__31579__$1 = ((((!((map__31579 == null)))?((((map__31579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31579):map__31579);
var opts = map__31579__$1;
var statearr_31581_31587 = state;
(statearr_31581_31587[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31579,map__31579__$1,opts){
return (function (val){
var statearr_31582_31588 = state;
(statearr_31582_31588[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31579,map__31579__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31583_31589 = state;
(statearr_31583_31589[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31574){
var G__31575 = cljs.core.first.call(null,seq31574);
var seq31574__$1 = cljs.core.next.call(null,seq31574);
var G__31576 = cljs.core.first.call(null,seq31574__$1);
var seq31574__$2 = cljs.core.next.call(null,seq31574__$1);
var G__31577 = cljs.core.first.call(null,seq31574__$2);
var seq31574__$3 = cljs.core.next.call(null,seq31574__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31575,G__31576,G__31577,seq31574__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31755 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31756){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31756 = meta31756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31757,meta31756__$1){
var self__ = this;
var _31757__$1 = this;
return (new cljs.core.async.t_cljs$core$async31755(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31756__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31757){
var self__ = this;
var _31757__$1 = this;
return self__.meta31756;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31755.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31756","meta31756",-1453006860,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31755";

cljs.core.async.t_cljs$core$async31755.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27512__auto__,writer__27513__auto__,opt__27514__auto__){
return cljs.core._write.call(null,writer__27513__auto__,"cljs.core.async/t_cljs$core$async31755");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31755 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31755(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31756){
return (new cljs.core.async.t_cljs$core$async31755(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31756));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31755(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30187__auto___31920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___31920,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___31920,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31857){
var state_val_31858 = (state_31857[(1)]);
if((state_val_31858 === (7))){
var inst_31773 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31859_31921 = state_31857__$1;
(statearr_31859_31921[(2)] = inst_31773);

(statearr_31859_31921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (20))){
var inst_31785 = (state_31857[(7)]);
var state_31857__$1 = state_31857;
var statearr_31860_31922 = state_31857__$1;
(statearr_31860_31922[(2)] = inst_31785);

(statearr_31860_31922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (27))){
var state_31857__$1 = state_31857;
var statearr_31861_31923 = state_31857__$1;
(statearr_31861_31923[(2)] = null);

(statearr_31861_31923[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (1))){
var inst_31761 = (state_31857[(8)]);
var inst_31761__$1 = calc_state.call(null);
var inst_31763 = (inst_31761__$1 == null);
var inst_31764 = cljs.core.not.call(null,inst_31763);
var state_31857__$1 = (function (){var statearr_31862 = state_31857;
(statearr_31862[(8)] = inst_31761__$1);

return statearr_31862;
})();
if(inst_31764){
var statearr_31863_31924 = state_31857__$1;
(statearr_31863_31924[(1)] = (2));

} else {
var statearr_31864_31925 = state_31857__$1;
(statearr_31864_31925[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (24))){
var inst_31817 = (state_31857[(9)]);
var inst_31808 = (state_31857[(10)]);
var inst_31831 = (state_31857[(11)]);
var inst_31831__$1 = inst_31808.call(null,inst_31817);
var state_31857__$1 = (function (){var statearr_31865 = state_31857;
(statearr_31865[(11)] = inst_31831__$1);

return statearr_31865;
})();
if(cljs.core.truth_(inst_31831__$1)){
var statearr_31866_31926 = state_31857__$1;
(statearr_31866_31926[(1)] = (29));

} else {
var statearr_31867_31927 = state_31857__$1;
(statearr_31867_31927[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (4))){
var inst_31776 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
if(cljs.core.truth_(inst_31776)){
var statearr_31868_31928 = state_31857__$1;
(statearr_31868_31928[(1)] = (8));

} else {
var statearr_31869_31929 = state_31857__$1;
(statearr_31869_31929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (15))){
var inst_31802 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
if(cljs.core.truth_(inst_31802)){
var statearr_31870_31930 = state_31857__$1;
(statearr_31870_31930[(1)] = (19));

} else {
var statearr_31871_31931 = state_31857__$1;
(statearr_31871_31931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (21))){
var inst_31807 = (state_31857[(12)]);
var inst_31807__$1 = (state_31857[(2)]);
var inst_31808 = cljs.core.get.call(null,inst_31807__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31809 = cljs.core.get.call(null,inst_31807__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31810 = cljs.core.get.call(null,inst_31807__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31857__$1 = (function (){var statearr_31872 = state_31857;
(statearr_31872[(13)] = inst_31809);

(statearr_31872[(12)] = inst_31807__$1);

(statearr_31872[(10)] = inst_31808);

return statearr_31872;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31857__$1,(22),inst_31810);
} else {
if((state_val_31858 === (31))){
var inst_31839 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
if(cljs.core.truth_(inst_31839)){
var statearr_31873_31932 = state_31857__$1;
(statearr_31873_31932[(1)] = (32));

} else {
var statearr_31874_31933 = state_31857__$1;
(statearr_31874_31933[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (32))){
var inst_31816 = (state_31857[(14)]);
var state_31857__$1 = state_31857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31857__$1,(35),out,inst_31816);
} else {
if((state_val_31858 === (33))){
var inst_31807 = (state_31857[(12)]);
var inst_31785 = inst_31807;
var state_31857__$1 = (function (){var statearr_31875 = state_31857;
(statearr_31875[(7)] = inst_31785);

return statearr_31875;
})();
var statearr_31876_31934 = state_31857__$1;
(statearr_31876_31934[(2)] = null);

(statearr_31876_31934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (13))){
var inst_31785 = (state_31857[(7)]);
var inst_31792 = inst_31785.cljs$lang$protocol_mask$partition0$;
var inst_31793 = (inst_31792 & (64));
var inst_31794 = inst_31785.cljs$core$ISeq$;
var inst_31795 = (inst_31793) || (inst_31794);
var state_31857__$1 = state_31857;
if(cljs.core.truth_(inst_31795)){
var statearr_31877_31935 = state_31857__$1;
(statearr_31877_31935[(1)] = (16));

} else {
var statearr_31878_31936 = state_31857__$1;
(statearr_31878_31936[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (22))){
var inst_31817 = (state_31857[(9)]);
var inst_31816 = (state_31857[(14)]);
var inst_31815 = (state_31857[(2)]);
var inst_31816__$1 = cljs.core.nth.call(null,inst_31815,(0),null);
var inst_31817__$1 = cljs.core.nth.call(null,inst_31815,(1),null);
var inst_31818 = (inst_31816__$1 == null);
var inst_31819 = cljs.core._EQ_.call(null,inst_31817__$1,change);
var inst_31820 = (inst_31818) || (inst_31819);
var state_31857__$1 = (function (){var statearr_31879 = state_31857;
(statearr_31879[(9)] = inst_31817__$1);

(statearr_31879[(14)] = inst_31816__$1);

return statearr_31879;
})();
if(cljs.core.truth_(inst_31820)){
var statearr_31880_31937 = state_31857__$1;
(statearr_31880_31937[(1)] = (23));

} else {
var statearr_31881_31938 = state_31857__$1;
(statearr_31881_31938[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (36))){
var inst_31807 = (state_31857[(12)]);
var inst_31785 = inst_31807;
var state_31857__$1 = (function (){var statearr_31882 = state_31857;
(statearr_31882[(7)] = inst_31785);

return statearr_31882;
})();
var statearr_31883_31939 = state_31857__$1;
(statearr_31883_31939[(2)] = null);

(statearr_31883_31939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (29))){
var inst_31831 = (state_31857[(11)]);
var state_31857__$1 = state_31857;
var statearr_31884_31940 = state_31857__$1;
(statearr_31884_31940[(2)] = inst_31831);

(statearr_31884_31940[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (6))){
var state_31857__$1 = state_31857;
var statearr_31885_31941 = state_31857__$1;
(statearr_31885_31941[(2)] = false);

(statearr_31885_31941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (28))){
var inst_31827 = (state_31857[(2)]);
var inst_31828 = calc_state.call(null);
var inst_31785 = inst_31828;
var state_31857__$1 = (function (){var statearr_31886 = state_31857;
(statearr_31886[(7)] = inst_31785);

(statearr_31886[(15)] = inst_31827);

return statearr_31886;
})();
var statearr_31887_31942 = state_31857__$1;
(statearr_31887_31942[(2)] = null);

(statearr_31887_31942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (25))){
var inst_31853 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31888_31943 = state_31857__$1;
(statearr_31888_31943[(2)] = inst_31853);

(statearr_31888_31943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (34))){
var inst_31851 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31889_31944 = state_31857__$1;
(statearr_31889_31944[(2)] = inst_31851);

(statearr_31889_31944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (17))){
var state_31857__$1 = state_31857;
var statearr_31890_31945 = state_31857__$1;
(statearr_31890_31945[(2)] = false);

(statearr_31890_31945[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (3))){
var state_31857__$1 = state_31857;
var statearr_31891_31946 = state_31857__$1;
(statearr_31891_31946[(2)] = false);

(statearr_31891_31946[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (12))){
var inst_31855 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31857__$1,inst_31855);
} else {
if((state_val_31858 === (2))){
var inst_31761 = (state_31857[(8)]);
var inst_31766 = inst_31761.cljs$lang$protocol_mask$partition0$;
var inst_31767 = (inst_31766 & (64));
var inst_31768 = inst_31761.cljs$core$ISeq$;
var inst_31769 = (inst_31767) || (inst_31768);
var state_31857__$1 = state_31857;
if(cljs.core.truth_(inst_31769)){
var statearr_31892_31947 = state_31857__$1;
(statearr_31892_31947[(1)] = (5));

} else {
var statearr_31893_31948 = state_31857__$1;
(statearr_31893_31948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (23))){
var inst_31816 = (state_31857[(14)]);
var inst_31822 = (inst_31816 == null);
var state_31857__$1 = state_31857;
if(cljs.core.truth_(inst_31822)){
var statearr_31894_31949 = state_31857__$1;
(statearr_31894_31949[(1)] = (26));

} else {
var statearr_31895_31950 = state_31857__$1;
(statearr_31895_31950[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (35))){
var inst_31842 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
if(cljs.core.truth_(inst_31842)){
var statearr_31896_31951 = state_31857__$1;
(statearr_31896_31951[(1)] = (36));

} else {
var statearr_31897_31952 = state_31857__$1;
(statearr_31897_31952[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (19))){
var inst_31785 = (state_31857[(7)]);
var inst_31804 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31785);
var state_31857__$1 = state_31857;
var statearr_31898_31953 = state_31857__$1;
(statearr_31898_31953[(2)] = inst_31804);

(statearr_31898_31953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (11))){
var inst_31785 = (state_31857[(7)]);
var inst_31789 = (inst_31785 == null);
var inst_31790 = cljs.core.not.call(null,inst_31789);
var state_31857__$1 = state_31857;
if(inst_31790){
var statearr_31899_31954 = state_31857__$1;
(statearr_31899_31954[(1)] = (13));

} else {
var statearr_31900_31955 = state_31857__$1;
(statearr_31900_31955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (9))){
var inst_31761 = (state_31857[(8)]);
var state_31857__$1 = state_31857;
var statearr_31901_31956 = state_31857__$1;
(statearr_31901_31956[(2)] = inst_31761);

(statearr_31901_31956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (5))){
var state_31857__$1 = state_31857;
var statearr_31902_31957 = state_31857__$1;
(statearr_31902_31957[(2)] = true);

(statearr_31902_31957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (14))){
var state_31857__$1 = state_31857;
var statearr_31903_31958 = state_31857__$1;
(statearr_31903_31958[(2)] = false);

(statearr_31903_31958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (26))){
var inst_31817 = (state_31857[(9)]);
var inst_31824 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31817);
var state_31857__$1 = state_31857;
var statearr_31904_31959 = state_31857__$1;
(statearr_31904_31959[(2)] = inst_31824);

(statearr_31904_31959[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (16))){
var state_31857__$1 = state_31857;
var statearr_31905_31960 = state_31857__$1;
(statearr_31905_31960[(2)] = true);

(statearr_31905_31960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (38))){
var inst_31847 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31906_31961 = state_31857__$1;
(statearr_31906_31961[(2)] = inst_31847);

(statearr_31906_31961[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (30))){
var inst_31809 = (state_31857[(13)]);
var inst_31817 = (state_31857[(9)]);
var inst_31808 = (state_31857[(10)]);
var inst_31834 = cljs.core.empty_QMARK_.call(null,inst_31808);
var inst_31835 = inst_31809.call(null,inst_31817);
var inst_31836 = cljs.core.not.call(null,inst_31835);
var inst_31837 = (inst_31834) && (inst_31836);
var state_31857__$1 = state_31857;
var statearr_31907_31962 = state_31857__$1;
(statearr_31907_31962[(2)] = inst_31837);

(statearr_31907_31962[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (10))){
var inst_31761 = (state_31857[(8)]);
var inst_31781 = (state_31857[(2)]);
var inst_31782 = cljs.core.get.call(null,inst_31781,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31783 = cljs.core.get.call(null,inst_31781,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31784 = cljs.core.get.call(null,inst_31781,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31785 = inst_31761;
var state_31857__$1 = (function (){var statearr_31908 = state_31857;
(statearr_31908[(16)] = inst_31782);

(statearr_31908[(7)] = inst_31785);

(statearr_31908[(17)] = inst_31784);

(statearr_31908[(18)] = inst_31783);

return statearr_31908;
})();
var statearr_31909_31963 = state_31857__$1;
(statearr_31909_31963[(2)] = null);

(statearr_31909_31963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (18))){
var inst_31799 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31910_31964 = state_31857__$1;
(statearr_31910_31964[(2)] = inst_31799);

(statearr_31910_31964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (37))){
var state_31857__$1 = state_31857;
var statearr_31911_31965 = state_31857__$1;
(statearr_31911_31965[(2)] = null);

(statearr_31911_31965[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (8))){
var inst_31761 = (state_31857[(8)]);
var inst_31778 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31761);
var state_31857__$1 = state_31857;
var statearr_31912_31966 = state_31857__$1;
(statearr_31912_31966[(2)] = inst_31778);

(statearr_31912_31966[(1)] = (10));


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
});})(c__30187__auto___31920,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30075__auto__,c__30187__auto___31920,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30076__auto__ = null;
var cljs$core$async$mix_$_state_machine__30076__auto____0 = (function (){
var statearr_31916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31916[(0)] = cljs$core$async$mix_$_state_machine__30076__auto__);

(statearr_31916[(1)] = (1));

return statearr_31916;
});
var cljs$core$async$mix_$_state_machine__30076__auto____1 = (function (state_31857){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_31857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e31917){if((e31917 instanceof Object)){
var ex__30079__auto__ = e31917;
var statearr_31918_31967 = state_31857;
(statearr_31918_31967[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31968 = state_31857;
state_31857 = G__31968;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30076__auto__ = function(state_31857){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30076__auto____1.call(this,state_31857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30076__auto____0;
cljs$core$async$mix_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30076__auto____1;
return cljs$core$async$mix_$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___31920,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30189__auto__ = (function (){var statearr_31919 = f__30188__auto__.call(null);
(statearr_31919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___31920);

return statearr_31919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___31920,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27569__auto__ = (((p == null))?null:p);
var m__27570__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27570__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27569__auto__ = (((p == null))?null:p);
var m__27570__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,p,v,ch);
} else {
var m__27570__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31969 = [];
var len__27981__auto___31972 = arguments.length;
var i__27982__auto___31973 = (0);
while(true){
if((i__27982__auto___31973 < len__27981__auto___31972)){
args31969.push((arguments[i__27982__auto___31973]));

var G__31974 = (i__27982__auto___31973 + (1));
i__27982__auto___31973 = G__31974;
continue;
} else {
}
break;
}

var G__31971 = args31969.length;
switch (G__31971) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31969.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27569__auto__ = (((p == null))?null:p);
var m__27570__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,p);
} else {
var m__27570__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27569__auto__ = (((p == null))?null:p);
var m__27570__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27569__auto__)]);
if(!((m__27570__auto__ == null))){
return m__27570__auto__.call(null,p,v);
} else {
var m__27570__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27570__auto____$1 == null))){
return m__27570__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31977 = [];
var len__27981__auto___32102 = arguments.length;
var i__27982__auto___32103 = (0);
while(true){
if((i__27982__auto___32103 < len__27981__auto___32102)){
args31977.push((arguments[i__27982__auto___32103]));

var G__32104 = (i__27982__auto___32103 + (1));
i__27982__auto___32103 = G__32104;
continue;
} else {
}
break;
}

var G__31979 = args31977.length;
switch (G__31979) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31977.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26906__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26906__auto__,mults){
return (function (p1__31976_SHARP_){
if(cljs.core.truth_(p1__31976_SHARP_.call(null,topic))){
return p1__31976_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31976_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26906__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31980 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31981){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31981 = meta31981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31982,meta31981__$1){
var self__ = this;
var _31982__$1 = this;
return (new cljs.core.async.t_cljs$core$async31980(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31981__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31982){
var self__ = this;
var _31982__$1 = this;
return self__.meta31981;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31980.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31980.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31980.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31980.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31980.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31980.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31980.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31981","meta31981",-1041814352,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31980";

cljs.core.async.t_cljs$core$async31980.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27512__auto__,writer__27513__auto__,opt__27514__auto__){
return cljs.core._write.call(null,writer__27513__auto__,"cljs.core.async/t_cljs$core$async31980");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31980 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31980(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31981){
return (new cljs.core.async.t_cljs$core$async31980(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31981));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31980(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30187__auto___32106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___32106,mults,ensure_mult,p){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___32106,mults,ensure_mult,p){
return (function (state_32054){
var state_val_32055 = (state_32054[(1)]);
if((state_val_32055 === (7))){
var inst_32050 = (state_32054[(2)]);
var state_32054__$1 = state_32054;
var statearr_32056_32107 = state_32054__$1;
(statearr_32056_32107[(2)] = inst_32050);

(statearr_32056_32107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (20))){
var state_32054__$1 = state_32054;
var statearr_32057_32108 = state_32054__$1;
(statearr_32057_32108[(2)] = null);

(statearr_32057_32108[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (1))){
var state_32054__$1 = state_32054;
var statearr_32058_32109 = state_32054__$1;
(statearr_32058_32109[(2)] = null);

(statearr_32058_32109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (24))){
var inst_32033 = (state_32054[(7)]);
var inst_32042 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32033);
var state_32054__$1 = state_32054;
var statearr_32059_32110 = state_32054__$1;
(statearr_32059_32110[(2)] = inst_32042);

(statearr_32059_32110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (4))){
var inst_31985 = (state_32054[(8)]);
var inst_31985__$1 = (state_32054[(2)]);
var inst_31986 = (inst_31985__$1 == null);
var state_32054__$1 = (function (){var statearr_32060 = state_32054;
(statearr_32060[(8)] = inst_31985__$1);

return statearr_32060;
})();
if(cljs.core.truth_(inst_31986)){
var statearr_32061_32111 = state_32054__$1;
(statearr_32061_32111[(1)] = (5));

} else {
var statearr_32062_32112 = state_32054__$1;
(statearr_32062_32112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (15))){
var inst_32027 = (state_32054[(2)]);
var state_32054__$1 = state_32054;
var statearr_32063_32113 = state_32054__$1;
(statearr_32063_32113[(2)] = inst_32027);

(statearr_32063_32113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (21))){
var inst_32047 = (state_32054[(2)]);
var state_32054__$1 = (function (){var statearr_32064 = state_32054;
(statearr_32064[(9)] = inst_32047);

return statearr_32064;
})();
var statearr_32065_32114 = state_32054__$1;
(statearr_32065_32114[(2)] = null);

(statearr_32065_32114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (13))){
var inst_32009 = (state_32054[(10)]);
var inst_32011 = cljs.core.chunked_seq_QMARK_.call(null,inst_32009);
var state_32054__$1 = state_32054;
if(inst_32011){
var statearr_32066_32115 = state_32054__$1;
(statearr_32066_32115[(1)] = (16));

} else {
var statearr_32067_32116 = state_32054__$1;
(statearr_32067_32116[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (22))){
var inst_32039 = (state_32054[(2)]);
var state_32054__$1 = state_32054;
if(cljs.core.truth_(inst_32039)){
var statearr_32068_32117 = state_32054__$1;
(statearr_32068_32117[(1)] = (23));

} else {
var statearr_32069_32118 = state_32054__$1;
(statearr_32069_32118[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (6))){
var inst_32035 = (state_32054[(11)]);
var inst_32033 = (state_32054[(7)]);
var inst_31985 = (state_32054[(8)]);
var inst_32033__$1 = topic_fn.call(null,inst_31985);
var inst_32034 = cljs.core.deref.call(null,mults);
var inst_32035__$1 = cljs.core.get.call(null,inst_32034,inst_32033__$1);
var state_32054__$1 = (function (){var statearr_32070 = state_32054;
(statearr_32070[(11)] = inst_32035__$1);

(statearr_32070[(7)] = inst_32033__$1);

return statearr_32070;
})();
if(cljs.core.truth_(inst_32035__$1)){
var statearr_32071_32119 = state_32054__$1;
(statearr_32071_32119[(1)] = (19));

} else {
var statearr_32072_32120 = state_32054__$1;
(statearr_32072_32120[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (25))){
var inst_32044 = (state_32054[(2)]);
var state_32054__$1 = state_32054;
var statearr_32073_32121 = state_32054__$1;
(statearr_32073_32121[(2)] = inst_32044);

(statearr_32073_32121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (17))){
var inst_32009 = (state_32054[(10)]);
var inst_32018 = cljs.core.first.call(null,inst_32009);
var inst_32019 = cljs.core.async.muxch_STAR_.call(null,inst_32018);
var inst_32020 = cljs.core.async.close_BANG_.call(null,inst_32019);
var inst_32021 = cljs.core.next.call(null,inst_32009);
var inst_31995 = inst_32021;
var inst_31996 = null;
var inst_31997 = (0);
var inst_31998 = (0);
var state_32054__$1 = (function (){var statearr_32074 = state_32054;
(statearr_32074[(12)] = inst_31997);

(statearr_32074[(13)] = inst_31996);

(statearr_32074[(14)] = inst_32020);

(statearr_32074[(15)] = inst_31995);

(statearr_32074[(16)] = inst_31998);

return statearr_32074;
})();
var statearr_32075_32122 = state_32054__$1;
(statearr_32075_32122[(2)] = null);

(statearr_32075_32122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (3))){
var inst_32052 = (state_32054[(2)]);
var state_32054__$1 = state_32054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32054__$1,inst_32052);
} else {
if((state_val_32055 === (12))){
var inst_32029 = (state_32054[(2)]);
var state_32054__$1 = state_32054;
var statearr_32076_32123 = state_32054__$1;
(statearr_32076_32123[(2)] = inst_32029);

(statearr_32076_32123[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (2))){
var state_32054__$1 = state_32054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32054__$1,(4),ch);
} else {
if((state_val_32055 === (23))){
var state_32054__$1 = state_32054;
var statearr_32077_32124 = state_32054__$1;
(statearr_32077_32124[(2)] = null);

(statearr_32077_32124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (19))){
var inst_32035 = (state_32054[(11)]);
var inst_31985 = (state_32054[(8)]);
var inst_32037 = cljs.core.async.muxch_STAR_.call(null,inst_32035);
var state_32054__$1 = state_32054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32054__$1,(22),inst_32037,inst_31985);
} else {
if((state_val_32055 === (11))){
var inst_32009 = (state_32054[(10)]);
var inst_31995 = (state_32054[(15)]);
var inst_32009__$1 = cljs.core.seq.call(null,inst_31995);
var state_32054__$1 = (function (){var statearr_32078 = state_32054;
(statearr_32078[(10)] = inst_32009__$1);

return statearr_32078;
})();
if(inst_32009__$1){
var statearr_32079_32125 = state_32054__$1;
(statearr_32079_32125[(1)] = (13));

} else {
var statearr_32080_32126 = state_32054__$1;
(statearr_32080_32126[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (9))){
var inst_32031 = (state_32054[(2)]);
var state_32054__$1 = state_32054;
var statearr_32081_32127 = state_32054__$1;
(statearr_32081_32127[(2)] = inst_32031);

(statearr_32081_32127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (5))){
var inst_31992 = cljs.core.deref.call(null,mults);
var inst_31993 = cljs.core.vals.call(null,inst_31992);
var inst_31994 = cljs.core.seq.call(null,inst_31993);
var inst_31995 = inst_31994;
var inst_31996 = null;
var inst_31997 = (0);
var inst_31998 = (0);
var state_32054__$1 = (function (){var statearr_32082 = state_32054;
(statearr_32082[(12)] = inst_31997);

(statearr_32082[(13)] = inst_31996);

(statearr_32082[(15)] = inst_31995);

(statearr_32082[(16)] = inst_31998);

return statearr_32082;
})();
var statearr_32083_32128 = state_32054__$1;
(statearr_32083_32128[(2)] = null);

(statearr_32083_32128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (14))){
var state_32054__$1 = state_32054;
var statearr_32087_32129 = state_32054__$1;
(statearr_32087_32129[(2)] = null);

(statearr_32087_32129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (16))){
var inst_32009 = (state_32054[(10)]);
var inst_32013 = cljs.core.chunk_first.call(null,inst_32009);
var inst_32014 = cljs.core.chunk_rest.call(null,inst_32009);
var inst_32015 = cljs.core.count.call(null,inst_32013);
var inst_31995 = inst_32014;
var inst_31996 = inst_32013;
var inst_31997 = inst_32015;
var inst_31998 = (0);
var state_32054__$1 = (function (){var statearr_32088 = state_32054;
(statearr_32088[(12)] = inst_31997);

(statearr_32088[(13)] = inst_31996);

(statearr_32088[(15)] = inst_31995);

(statearr_32088[(16)] = inst_31998);

return statearr_32088;
})();
var statearr_32089_32130 = state_32054__$1;
(statearr_32089_32130[(2)] = null);

(statearr_32089_32130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (10))){
var inst_31997 = (state_32054[(12)]);
var inst_31996 = (state_32054[(13)]);
var inst_31995 = (state_32054[(15)]);
var inst_31998 = (state_32054[(16)]);
var inst_32003 = cljs.core._nth.call(null,inst_31996,inst_31998);
var inst_32004 = cljs.core.async.muxch_STAR_.call(null,inst_32003);
var inst_32005 = cljs.core.async.close_BANG_.call(null,inst_32004);
var inst_32006 = (inst_31998 + (1));
var tmp32084 = inst_31997;
var tmp32085 = inst_31996;
var tmp32086 = inst_31995;
var inst_31995__$1 = tmp32086;
var inst_31996__$1 = tmp32085;
var inst_31997__$1 = tmp32084;
var inst_31998__$1 = inst_32006;
var state_32054__$1 = (function (){var statearr_32090 = state_32054;
(statearr_32090[(12)] = inst_31997__$1);

(statearr_32090[(13)] = inst_31996__$1);

(statearr_32090[(15)] = inst_31995__$1);

(statearr_32090[(16)] = inst_31998__$1);

(statearr_32090[(17)] = inst_32005);

return statearr_32090;
})();
var statearr_32091_32131 = state_32054__$1;
(statearr_32091_32131[(2)] = null);

(statearr_32091_32131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (18))){
var inst_32024 = (state_32054[(2)]);
var state_32054__$1 = state_32054;
var statearr_32092_32132 = state_32054__$1;
(statearr_32092_32132[(2)] = inst_32024);

(statearr_32092_32132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (8))){
var inst_31997 = (state_32054[(12)]);
var inst_31998 = (state_32054[(16)]);
var inst_32000 = (inst_31998 < inst_31997);
var inst_32001 = inst_32000;
var state_32054__$1 = state_32054;
if(cljs.core.truth_(inst_32001)){
var statearr_32093_32133 = state_32054__$1;
(statearr_32093_32133[(1)] = (10));

} else {
var statearr_32094_32134 = state_32054__$1;
(statearr_32094_32134[(1)] = (11));

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
}
}
}
}
}
}
}
});})(c__30187__auto___32106,mults,ensure_mult,p))
;
return ((function (switch__30075__auto__,c__30187__auto___32106,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30076__auto__ = null;
var cljs$core$async$state_machine__30076__auto____0 = (function (){
var statearr_32098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32098[(0)] = cljs$core$async$state_machine__30076__auto__);

(statearr_32098[(1)] = (1));

return statearr_32098;
});
var cljs$core$async$state_machine__30076__auto____1 = (function (state_32054){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_32054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e32099){if((e32099 instanceof Object)){
var ex__30079__auto__ = e32099;
var statearr_32100_32135 = state_32054;
(statearr_32100_32135[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32136 = state_32054;
state_32054 = G__32136;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$state_machine__30076__auto__ = function(state_32054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30076__auto____1.call(this,state_32054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30076__auto____0;
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30076__auto____1;
return cljs$core$async$state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___32106,mults,ensure_mult,p))
})();
var state__30189__auto__ = (function (){var statearr_32101 = f__30188__auto__.call(null);
(statearr_32101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___32106);

return statearr_32101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___32106,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32137 = [];
var len__27981__auto___32140 = arguments.length;
var i__27982__auto___32141 = (0);
while(true){
if((i__27982__auto___32141 < len__27981__auto___32140)){
args32137.push((arguments[i__27982__auto___32141]));

var G__32142 = (i__27982__auto___32141 + (1));
i__27982__auto___32141 = G__32142;
continue;
} else {
}
break;
}

var G__32139 = args32137.length;
switch (G__32139) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32137.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32144 = [];
var len__27981__auto___32147 = arguments.length;
var i__27982__auto___32148 = (0);
while(true){
if((i__27982__auto___32148 < len__27981__auto___32147)){
args32144.push((arguments[i__27982__auto___32148]));

var G__32149 = (i__27982__auto___32148 + (1));
i__27982__auto___32148 = G__32149;
continue;
} else {
}
break;
}

var G__32146 = args32144.length;
switch (G__32146) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32144.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args32151 = [];
var len__27981__auto___32222 = arguments.length;
var i__27982__auto___32223 = (0);
while(true){
if((i__27982__auto___32223 < len__27981__auto___32222)){
args32151.push((arguments[i__27982__auto___32223]));

var G__32224 = (i__27982__auto___32223 + (1));
i__27982__auto___32223 = G__32224;
continue;
} else {
}
break;
}

var G__32153 = args32151.length;
switch (G__32153) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32151.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30187__auto___32226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___32226,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___32226,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32192){
var state_val_32193 = (state_32192[(1)]);
if((state_val_32193 === (7))){
var state_32192__$1 = state_32192;
var statearr_32194_32227 = state_32192__$1;
(statearr_32194_32227[(2)] = null);

(statearr_32194_32227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (1))){
var state_32192__$1 = state_32192;
var statearr_32195_32228 = state_32192__$1;
(statearr_32195_32228[(2)] = null);

(statearr_32195_32228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (4))){
var inst_32156 = (state_32192[(7)]);
var inst_32158 = (inst_32156 < cnt);
var state_32192__$1 = state_32192;
if(cljs.core.truth_(inst_32158)){
var statearr_32196_32229 = state_32192__$1;
(statearr_32196_32229[(1)] = (6));

} else {
var statearr_32197_32230 = state_32192__$1;
(statearr_32197_32230[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (15))){
var inst_32188 = (state_32192[(2)]);
var state_32192__$1 = state_32192;
var statearr_32198_32231 = state_32192__$1;
(statearr_32198_32231[(2)] = inst_32188);

(statearr_32198_32231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (13))){
var inst_32181 = cljs.core.async.close_BANG_.call(null,out);
var state_32192__$1 = state_32192;
var statearr_32199_32232 = state_32192__$1;
(statearr_32199_32232[(2)] = inst_32181);

(statearr_32199_32232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (6))){
var state_32192__$1 = state_32192;
var statearr_32200_32233 = state_32192__$1;
(statearr_32200_32233[(2)] = null);

(statearr_32200_32233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (3))){
var inst_32190 = (state_32192[(2)]);
var state_32192__$1 = state_32192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32192__$1,inst_32190);
} else {
if((state_val_32193 === (12))){
var inst_32178 = (state_32192[(8)]);
var inst_32178__$1 = (state_32192[(2)]);
var inst_32179 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32178__$1);
var state_32192__$1 = (function (){var statearr_32201 = state_32192;
(statearr_32201[(8)] = inst_32178__$1);

return statearr_32201;
})();
if(cljs.core.truth_(inst_32179)){
var statearr_32202_32234 = state_32192__$1;
(statearr_32202_32234[(1)] = (13));

} else {
var statearr_32203_32235 = state_32192__$1;
(statearr_32203_32235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (2))){
var inst_32155 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32156 = (0);
var state_32192__$1 = (function (){var statearr_32204 = state_32192;
(statearr_32204[(7)] = inst_32156);

(statearr_32204[(9)] = inst_32155);

return statearr_32204;
})();
var statearr_32205_32236 = state_32192__$1;
(statearr_32205_32236[(2)] = null);

(statearr_32205_32236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (11))){
var inst_32156 = (state_32192[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32192,(10),Object,null,(9));
var inst_32165 = chs__$1.call(null,inst_32156);
var inst_32166 = done.call(null,inst_32156);
var inst_32167 = cljs.core.async.take_BANG_.call(null,inst_32165,inst_32166);
var state_32192__$1 = state_32192;
var statearr_32206_32237 = state_32192__$1;
(statearr_32206_32237[(2)] = inst_32167);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32192__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (9))){
var inst_32156 = (state_32192[(7)]);
var inst_32169 = (state_32192[(2)]);
var inst_32170 = (inst_32156 + (1));
var inst_32156__$1 = inst_32170;
var state_32192__$1 = (function (){var statearr_32207 = state_32192;
(statearr_32207[(7)] = inst_32156__$1);

(statearr_32207[(10)] = inst_32169);

return statearr_32207;
})();
var statearr_32208_32238 = state_32192__$1;
(statearr_32208_32238[(2)] = null);

(statearr_32208_32238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (5))){
var inst_32176 = (state_32192[(2)]);
var state_32192__$1 = (function (){var statearr_32209 = state_32192;
(statearr_32209[(11)] = inst_32176);

return statearr_32209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32192__$1,(12),dchan);
} else {
if((state_val_32193 === (14))){
var inst_32178 = (state_32192[(8)]);
var inst_32183 = cljs.core.apply.call(null,f,inst_32178);
var state_32192__$1 = state_32192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32192__$1,(16),out,inst_32183);
} else {
if((state_val_32193 === (16))){
var inst_32185 = (state_32192[(2)]);
var state_32192__$1 = (function (){var statearr_32210 = state_32192;
(statearr_32210[(12)] = inst_32185);

return statearr_32210;
})();
var statearr_32211_32239 = state_32192__$1;
(statearr_32211_32239[(2)] = null);

(statearr_32211_32239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (10))){
var inst_32160 = (state_32192[(2)]);
var inst_32161 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32192__$1 = (function (){var statearr_32212 = state_32192;
(statearr_32212[(13)] = inst_32160);

return statearr_32212;
})();
var statearr_32213_32240 = state_32192__$1;
(statearr_32213_32240[(2)] = inst_32161);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32192__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (8))){
var inst_32174 = (state_32192[(2)]);
var state_32192__$1 = state_32192;
var statearr_32214_32241 = state_32192__$1;
(statearr_32214_32241[(2)] = inst_32174);

(statearr_32214_32241[(1)] = (5));


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
});})(c__30187__auto___32226,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30075__auto__,c__30187__auto___32226,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30076__auto__ = null;
var cljs$core$async$state_machine__30076__auto____0 = (function (){
var statearr_32218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32218[(0)] = cljs$core$async$state_machine__30076__auto__);

(statearr_32218[(1)] = (1));

return statearr_32218;
});
var cljs$core$async$state_machine__30076__auto____1 = (function (state_32192){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_32192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e32219){if((e32219 instanceof Object)){
var ex__30079__auto__ = e32219;
var statearr_32220_32242 = state_32192;
(statearr_32220_32242[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32243 = state_32192;
state_32192 = G__32243;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$state_machine__30076__auto__ = function(state_32192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30076__auto____1.call(this,state_32192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30076__auto____0;
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30076__auto____1;
return cljs$core$async$state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___32226,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30189__auto__ = (function (){var statearr_32221 = f__30188__auto__.call(null);
(statearr_32221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___32226);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___32226,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32245 = [];
var len__27981__auto___32303 = arguments.length;
var i__27982__auto___32304 = (0);
while(true){
if((i__27982__auto___32304 < len__27981__auto___32303)){
args32245.push((arguments[i__27982__auto___32304]));

var G__32305 = (i__27982__auto___32304 + (1));
i__27982__auto___32304 = G__32305;
continue;
} else {
}
break;
}

var G__32247 = args32245.length;
switch (G__32247) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32245.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30187__auto___32307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___32307,out){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___32307,out){
return (function (state_32279){
var state_val_32280 = (state_32279[(1)]);
if((state_val_32280 === (7))){
var inst_32258 = (state_32279[(7)]);
var inst_32259 = (state_32279[(8)]);
var inst_32258__$1 = (state_32279[(2)]);
var inst_32259__$1 = cljs.core.nth.call(null,inst_32258__$1,(0),null);
var inst_32260 = cljs.core.nth.call(null,inst_32258__$1,(1),null);
var inst_32261 = (inst_32259__$1 == null);
var state_32279__$1 = (function (){var statearr_32281 = state_32279;
(statearr_32281[(7)] = inst_32258__$1);

(statearr_32281[(9)] = inst_32260);

(statearr_32281[(8)] = inst_32259__$1);

return statearr_32281;
})();
if(cljs.core.truth_(inst_32261)){
var statearr_32282_32308 = state_32279__$1;
(statearr_32282_32308[(1)] = (8));

} else {
var statearr_32283_32309 = state_32279__$1;
(statearr_32283_32309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (1))){
var inst_32248 = cljs.core.vec.call(null,chs);
var inst_32249 = inst_32248;
var state_32279__$1 = (function (){var statearr_32284 = state_32279;
(statearr_32284[(10)] = inst_32249);

return statearr_32284;
})();
var statearr_32285_32310 = state_32279__$1;
(statearr_32285_32310[(2)] = null);

(statearr_32285_32310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (4))){
var inst_32249 = (state_32279[(10)]);
var state_32279__$1 = state_32279;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32279__$1,(7),inst_32249);
} else {
if((state_val_32280 === (6))){
var inst_32275 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32286_32311 = state_32279__$1;
(statearr_32286_32311[(2)] = inst_32275);

(statearr_32286_32311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (3))){
var inst_32277 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32279__$1,inst_32277);
} else {
if((state_val_32280 === (2))){
var inst_32249 = (state_32279[(10)]);
var inst_32251 = cljs.core.count.call(null,inst_32249);
var inst_32252 = (inst_32251 > (0));
var state_32279__$1 = state_32279;
if(cljs.core.truth_(inst_32252)){
var statearr_32288_32312 = state_32279__$1;
(statearr_32288_32312[(1)] = (4));

} else {
var statearr_32289_32313 = state_32279__$1;
(statearr_32289_32313[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (11))){
var inst_32249 = (state_32279[(10)]);
var inst_32268 = (state_32279[(2)]);
var tmp32287 = inst_32249;
var inst_32249__$1 = tmp32287;
var state_32279__$1 = (function (){var statearr_32290 = state_32279;
(statearr_32290[(10)] = inst_32249__$1);

(statearr_32290[(11)] = inst_32268);

return statearr_32290;
})();
var statearr_32291_32314 = state_32279__$1;
(statearr_32291_32314[(2)] = null);

(statearr_32291_32314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (9))){
var inst_32259 = (state_32279[(8)]);
var state_32279__$1 = state_32279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32279__$1,(11),out,inst_32259);
} else {
if((state_val_32280 === (5))){
var inst_32273 = cljs.core.async.close_BANG_.call(null,out);
var state_32279__$1 = state_32279;
var statearr_32292_32315 = state_32279__$1;
(statearr_32292_32315[(2)] = inst_32273);

(statearr_32292_32315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (10))){
var inst_32271 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32293_32316 = state_32279__$1;
(statearr_32293_32316[(2)] = inst_32271);

(statearr_32293_32316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (8))){
var inst_32258 = (state_32279[(7)]);
var inst_32260 = (state_32279[(9)]);
var inst_32249 = (state_32279[(10)]);
var inst_32259 = (state_32279[(8)]);
var inst_32263 = (function (){var cs = inst_32249;
var vec__32254 = inst_32258;
var v = inst_32259;
var c = inst_32260;
return ((function (cs,vec__32254,v,c,inst_32258,inst_32260,inst_32249,inst_32259,state_val_32280,c__30187__auto___32307,out){
return (function (p1__32244_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32244_SHARP_);
});
;})(cs,vec__32254,v,c,inst_32258,inst_32260,inst_32249,inst_32259,state_val_32280,c__30187__auto___32307,out))
})();
var inst_32264 = cljs.core.filterv.call(null,inst_32263,inst_32249);
var inst_32249__$1 = inst_32264;
var state_32279__$1 = (function (){var statearr_32294 = state_32279;
(statearr_32294[(10)] = inst_32249__$1);

return statearr_32294;
})();
var statearr_32295_32317 = state_32279__$1;
(statearr_32295_32317[(2)] = null);

(statearr_32295_32317[(1)] = (2));


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
});})(c__30187__auto___32307,out))
;
return ((function (switch__30075__auto__,c__30187__auto___32307,out){
return (function() {
var cljs$core$async$state_machine__30076__auto__ = null;
var cljs$core$async$state_machine__30076__auto____0 = (function (){
var statearr_32299 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32299[(0)] = cljs$core$async$state_machine__30076__auto__);

(statearr_32299[(1)] = (1));

return statearr_32299;
});
var cljs$core$async$state_machine__30076__auto____1 = (function (state_32279){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_32279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e32300){if((e32300 instanceof Object)){
var ex__30079__auto__ = e32300;
var statearr_32301_32318 = state_32279;
(statearr_32301_32318[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32319 = state_32279;
state_32279 = G__32319;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$state_machine__30076__auto__ = function(state_32279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30076__auto____1.call(this,state_32279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30076__auto____0;
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30076__auto____1;
return cljs$core$async$state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___32307,out))
})();
var state__30189__auto__ = (function (){var statearr_32302 = f__30188__auto__.call(null);
(statearr_32302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___32307);

return statearr_32302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___32307,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32320 = [];
var len__27981__auto___32369 = arguments.length;
var i__27982__auto___32370 = (0);
while(true){
if((i__27982__auto___32370 < len__27981__auto___32369)){
args32320.push((arguments[i__27982__auto___32370]));

var G__32371 = (i__27982__auto___32370 + (1));
i__27982__auto___32370 = G__32371;
continue;
} else {
}
break;
}

var G__32322 = args32320.length;
switch (G__32322) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32320.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30187__auto___32373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___32373,out){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___32373,out){
return (function (state_32346){
var state_val_32347 = (state_32346[(1)]);
if((state_val_32347 === (7))){
var inst_32328 = (state_32346[(7)]);
var inst_32328__$1 = (state_32346[(2)]);
var inst_32329 = (inst_32328__$1 == null);
var inst_32330 = cljs.core.not.call(null,inst_32329);
var state_32346__$1 = (function (){var statearr_32348 = state_32346;
(statearr_32348[(7)] = inst_32328__$1);

return statearr_32348;
})();
if(inst_32330){
var statearr_32349_32374 = state_32346__$1;
(statearr_32349_32374[(1)] = (8));

} else {
var statearr_32350_32375 = state_32346__$1;
(statearr_32350_32375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32347 === (1))){
var inst_32323 = (0);
var state_32346__$1 = (function (){var statearr_32351 = state_32346;
(statearr_32351[(8)] = inst_32323);

return statearr_32351;
})();
var statearr_32352_32376 = state_32346__$1;
(statearr_32352_32376[(2)] = null);

(statearr_32352_32376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32347 === (4))){
var state_32346__$1 = state_32346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32346__$1,(7),ch);
} else {
if((state_val_32347 === (6))){
var inst_32341 = (state_32346[(2)]);
var state_32346__$1 = state_32346;
var statearr_32353_32377 = state_32346__$1;
(statearr_32353_32377[(2)] = inst_32341);

(statearr_32353_32377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32347 === (3))){
var inst_32343 = (state_32346[(2)]);
var inst_32344 = cljs.core.async.close_BANG_.call(null,out);
var state_32346__$1 = (function (){var statearr_32354 = state_32346;
(statearr_32354[(9)] = inst_32343);

return statearr_32354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32346__$1,inst_32344);
} else {
if((state_val_32347 === (2))){
var inst_32323 = (state_32346[(8)]);
var inst_32325 = (inst_32323 < n);
var state_32346__$1 = state_32346;
if(cljs.core.truth_(inst_32325)){
var statearr_32355_32378 = state_32346__$1;
(statearr_32355_32378[(1)] = (4));

} else {
var statearr_32356_32379 = state_32346__$1;
(statearr_32356_32379[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32347 === (11))){
var inst_32323 = (state_32346[(8)]);
var inst_32333 = (state_32346[(2)]);
var inst_32334 = (inst_32323 + (1));
var inst_32323__$1 = inst_32334;
var state_32346__$1 = (function (){var statearr_32357 = state_32346;
(statearr_32357[(10)] = inst_32333);

(statearr_32357[(8)] = inst_32323__$1);

return statearr_32357;
})();
var statearr_32358_32380 = state_32346__$1;
(statearr_32358_32380[(2)] = null);

(statearr_32358_32380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32347 === (9))){
var state_32346__$1 = state_32346;
var statearr_32359_32381 = state_32346__$1;
(statearr_32359_32381[(2)] = null);

(statearr_32359_32381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32347 === (5))){
var state_32346__$1 = state_32346;
var statearr_32360_32382 = state_32346__$1;
(statearr_32360_32382[(2)] = null);

(statearr_32360_32382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32347 === (10))){
var inst_32338 = (state_32346[(2)]);
var state_32346__$1 = state_32346;
var statearr_32361_32383 = state_32346__$1;
(statearr_32361_32383[(2)] = inst_32338);

(statearr_32361_32383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32347 === (8))){
var inst_32328 = (state_32346[(7)]);
var state_32346__$1 = state_32346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32346__$1,(11),out,inst_32328);
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
});})(c__30187__auto___32373,out))
;
return ((function (switch__30075__auto__,c__30187__auto___32373,out){
return (function() {
var cljs$core$async$state_machine__30076__auto__ = null;
var cljs$core$async$state_machine__30076__auto____0 = (function (){
var statearr_32365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32365[(0)] = cljs$core$async$state_machine__30076__auto__);

(statearr_32365[(1)] = (1));

return statearr_32365;
});
var cljs$core$async$state_machine__30076__auto____1 = (function (state_32346){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_32346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e32366){if((e32366 instanceof Object)){
var ex__30079__auto__ = e32366;
var statearr_32367_32384 = state_32346;
(statearr_32367_32384[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32385 = state_32346;
state_32346 = G__32385;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$state_machine__30076__auto__ = function(state_32346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30076__auto____1.call(this,state_32346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30076__auto____0;
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30076__auto____1;
return cljs$core$async$state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___32373,out))
})();
var state__30189__auto__ = (function (){var statearr_32368 = f__30188__auto__.call(null);
(statearr_32368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___32373);

return statearr_32368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___32373,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32393 = (function (map_LT_,f,ch,meta32394){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32394 = meta32394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32395,meta32394__$1){
var self__ = this;
var _32395__$1 = this;
return (new cljs.core.async.t_cljs$core$async32393(self__.map_LT_,self__.f,self__.ch,meta32394__$1));
});

cljs.core.async.t_cljs$core$async32393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32395){
var self__ = this;
var _32395__$1 = this;
return self__.meta32394;
});

cljs.core.async.t_cljs$core$async32393.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32393.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32393.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32396 = (function (map_LT_,f,ch,meta32394,_,fn1,meta32397){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32394 = meta32394;
this._ = _;
this.fn1 = fn1;
this.meta32397 = meta32397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32398,meta32397__$1){
var self__ = this;
var _32398__$1 = this;
return (new cljs.core.async.t_cljs$core$async32396(self__.map_LT_,self__.f,self__.ch,self__.meta32394,self__._,self__.fn1,meta32397__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32398){
var self__ = this;
var _32398__$1 = this;
return self__.meta32397;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32396.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32386_SHARP_){
return f1.call(null,(((p1__32386_SHARP_ == null))?null:self__.f.call(null,p1__32386_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32396.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32394","meta32394",1239547580,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32393","cljs.core.async/t_cljs$core$async32393",-1608545111,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32397","meta32397",1074915510,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32396";

cljs.core.async.t_cljs$core$async32396.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27512__auto__,writer__27513__auto__,opt__27514__auto__){
return cljs.core._write.call(null,writer__27513__auto__,"cljs.core.async/t_cljs$core$async32396");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32396 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32396(map_LT___$1,f__$1,ch__$1,meta32394__$1,___$2,fn1__$1,meta32397){
return (new cljs.core.async.t_cljs$core$async32396(map_LT___$1,f__$1,ch__$1,meta32394__$1,___$2,fn1__$1,meta32397));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32396(self__.map_LT_,self__.f,self__.ch,self__.meta32394,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26894__auto__ = ret;
if(cljs.core.truth_(and__26894__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26894__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32393.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32394","meta32394",1239547580,null)], null);
});

cljs.core.async.t_cljs$core$async32393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32393";

cljs.core.async.t_cljs$core$async32393.cljs$lang$ctorPrWriter = (function (this__27512__auto__,writer__27513__auto__,opt__27514__auto__){
return cljs.core._write.call(null,writer__27513__auto__,"cljs.core.async/t_cljs$core$async32393");
});

cljs.core.async.__GT_t_cljs$core$async32393 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32393(map_LT___$1,f__$1,ch__$1,meta32394){
return (new cljs.core.async.t_cljs$core$async32393(map_LT___$1,f__$1,ch__$1,meta32394));
});

}

return (new cljs.core.async.t_cljs$core$async32393(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32402 = (function (map_GT_,f,ch,meta32403){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32403 = meta32403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32404,meta32403__$1){
var self__ = this;
var _32404__$1 = this;
return (new cljs.core.async.t_cljs$core$async32402(self__.map_GT_,self__.f,self__.ch,meta32403__$1));
});

cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32404){
var self__ = this;
var _32404__$1 = this;
return self__.meta32403;
});

cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32403","meta32403",1836174721,null)], null);
});

cljs.core.async.t_cljs$core$async32402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32402";

cljs.core.async.t_cljs$core$async32402.cljs$lang$ctorPrWriter = (function (this__27512__auto__,writer__27513__auto__,opt__27514__auto__){
return cljs.core._write.call(null,writer__27513__auto__,"cljs.core.async/t_cljs$core$async32402");
});

cljs.core.async.__GT_t_cljs$core$async32402 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32402(map_GT___$1,f__$1,ch__$1,meta32403){
return (new cljs.core.async.t_cljs$core$async32402(map_GT___$1,f__$1,ch__$1,meta32403));
});

}

return (new cljs.core.async.t_cljs$core$async32402(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32408 = (function (filter_GT_,p,ch,meta32409){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32409 = meta32409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32410,meta32409__$1){
var self__ = this;
var _32410__$1 = this;
return (new cljs.core.async.t_cljs$core$async32408(self__.filter_GT_,self__.p,self__.ch,meta32409__$1));
});

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32410){
var self__ = this;
var _32410__$1 = this;
return self__.meta32409;
});

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32409","meta32409",1909839005,null)], null);
});

cljs.core.async.t_cljs$core$async32408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32408";

cljs.core.async.t_cljs$core$async32408.cljs$lang$ctorPrWriter = (function (this__27512__auto__,writer__27513__auto__,opt__27514__auto__){
return cljs.core._write.call(null,writer__27513__auto__,"cljs.core.async/t_cljs$core$async32408");
});

cljs.core.async.__GT_t_cljs$core$async32408 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32408(filter_GT___$1,p__$1,ch__$1,meta32409){
return (new cljs.core.async.t_cljs$core$async32408(filter_GT___$1,p__$1,ch__$1,meta32409));
});

}

return (new cljs.core.async.t_cljs$core$async32408(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32411 = [];
var len__27981__auto___32455 = arguments.length;
var i__27982__auto___32456 = (0);
while(true){
if((i__27982__auto___32456 < len__27981__auto___32455)){
args32411.push((arguments[i__27982__auto___32456]));

var G__32457 = (i__27982__auto___32456 + (1));
i__27982__auto___32456 = G__32457;
continue;
} else {
}
break;
}

var G__32413 = args32411.length;
switch (G__32413) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32411.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30187__auto___32459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___32459,out){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___32459,out){
return (function (state_32434){
var state_val_32435 = (state_32434[(1)]);
if((state_val_32435 === (7))){
var inst_32430 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
var statearr_32436_32460 = state_32434__$1;
(statearr_32436_32460[(2)] = inst_32430);

(statearr_32436_32460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (1))){
var state_32434__$1 = state_32434;
var statearr_32437_32461 = state_32434__$1;
(statearr_32437_32461[(2)] = null);

(statearr_32437_32461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (4))){
var inst_32416 = (state_32434[(7)]);
var inst_32416__$1 = (state_32434[(2)]);
var inst_32417 = (inst_32416__$1 == null);
var state_32434__$1 = (function (){var statearr_32438 = state_32434;
(statearr_32438[(7)] = inst_32416__$1);

return statearr_32438;
})();
if(cljs.core.truth_(inst_32417)){
var statearr_32439_32462 = state_32434__$1;
(statearr_32439_32462[(1)] = (5));

} else {
var statearr_32440_32463 = state_32434__$1;
(statearr_32440_32463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (6))){
var inst_32416 = (state_32434[(7)]);
var inst_32421 = p.call(null,inst_32416);
var state_32434__$1 = state_32434;
if(cljs.core.truth_(inst_32421)){
var statearr_32441_32464 = state_32434__$1;
(statearr_32441_32464[(1)] = (8));

} else {
var statearr_32442_32465 = state_32434__$1;
(statearr_32442_32465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (3))){
var inst_32432 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32434__$1,inst_32432);
} else {
if((state_val_32435 === (2))){
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32434__$1,(4),ch);
} else {
if((state_val_32435 === (11))){
var inst_32424 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
var statearr_32443_32466 = state_32434__$1;
(statearr_32443_32466[(2)] = inst_32424);

(statearr_32443_32466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (9))){
var state_32434__$1 = state_32434;
var statearr_32444_32467 = state_32434__$1;
(statearr_32444_32467[(2)] = null);

(statearr_32444_32467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (5))){
var inst_32419 = cljs.core.async.close_BANG_.call(null,out);
var state_32434__$1 = state_32434;
var statearr_32445_32468 = state_32434__$1;
(statearr_32445_32468[(2)] = inst_32419);

(statearr_32445_32468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (10))){
var inst_32427 = (state_32434[(2)]);
var state_32434__$1 = (function (){var statearr_32446 = state_32434;
(statearr_32446[(8)] = inst_32427);

return statearr_32446;
})();
var statearr_32447_32469 = state_32434__$1;
(statearr_32447_32469[(2)] = null);

(statearr_32447_32469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (8))){
var inst_32416 = (state_32434[(7)]);
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32434__$1,(11),out,inst_32416);
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
});})(c__30187__auto___32459,out))
;
return ((function (switch__30075__auto__,c__30187__auto___32459,out){
return (function() {
var cljs$core$async$state_machine__30076__auto__ = null;
var cljs$core$async$state_machine__30076__auto____0 = (function (){
var statearr_32451 = [null,null,null,null,null,null,null,null,null];
(statearr_32451[(0)] = cljs$core$async$state_machine__30076__auto__);

(statearr_32451[(1)] = (1));

return statearr_32451;
});
var cljs$core$async$state_machine__30076__auto____1 = (function (state_32434){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_32434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e32452){if((e32452 instanceof Object)){
var ex__30079__auto__ = e32452;
var statearr_32453_32470 = state_32434;
(statearr_32453_32470[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32471 = state_32434;
state_32434 = G__32471;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$state_machine__30076__auto__ = function(state_32434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30076__auto____1.call(this,state_32434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30076__auto____0;
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30076__auto____1;
return cljs$core$async$state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___32459,out))
})();
var state__30189__auto__ = (function (){var statearr_32454 = f__30188__auto__.call(null);
(statearr_32454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___32459);

return statearr_32454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___32459,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32472 = [];
var len__27981__auto___32475 = arguments.length;
var i__27982__auto___32476 = (0);
while(true){
if((i__27982__auto___32476 < len__27981__auto___32475)){
args32472.push((arguments[i__27982__auto___32476]));

var G__32477 = (i__27982__auto___32476 + (1));
i__27982__auto___32476 = G__32477;
continue;
} else {
}
break;
}

var G__32474 = args32472.length;
switch (G__32474) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32472.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto__){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto__){
return (function (state_32644){
var state_val_32645 = (state_32644[(1)]);
if((state_val_32645 === (7))){
var inst_32640 = (state_32644[(2)]);
var state_32644__$1 = state_32644;
var statearr_32646_32687 = state_32644__$1;
(statearr_32646_32687[(2)] = inst_32640);

(statearr_32646_32687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (20))){
var inst_32610 = (state_32644[(7)]);
var inst_32621 = (state_32644[(2)]);
var inst_32622 = cljs.core.next.call(null,inst_32610);
var inst_32596 = inst_32622;
var inst_32597 = null;
var inst_32598 = (0);
var inst_32599 = (0);
var state_32644__$1 = (function (){var statearr_32647 = state_32644;
(statearr_32647[(8)] = inst_32621);

(statearr_32647[(9)] = inst_32597);

(statearr_32647[(10)] = inst_32598);

(statearr_32647[(11)] = inst_32599);

(statearr_32647[(12)] = inst_32596);

return statearr_32647;
})();
var statearr_32648_32688 = state_32644__$1;
(statearr_32648_32688[(2)] = null);

(statearr_32648_32688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (1))){
var state_32644__$1 = state_32644;
var statearr_32649_32689 = state_32644__$1;
(statearr_32649_32689[(2)] = null);

(statearr_32649_32689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (4))){
var inst_32585 = (state_32644[(13)]);
var inst_32585__$1 = (state_32644[(2)]);
var inst_32586 = (inst_32585__$1 == null);
var state_32644__$1 = (function (){var statearr_32650 = state_32644;
(statearr_32650[(13)] = inst_32585__$1);

return statearr_32650;
})();
if(cljs.core.truth_(inst_32586)){
var statearr_32651_32690 = state_32644__$1;
(statearr_32651_32690[(1)] = (5));

} else {
var statearr_32652_32691 = state_32644__$1;
(statearr_32652_32691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (15))){
var state_32644__$1 = state_32644;
var statearr_32656_32692 = state_32644__$1;
(statearr_32656_32692[(2)] = null);

(statearr_32656_32692[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (21))){
var state_32644__$1 = state_32644;
var statearr_32657_32693 = state_32644__$1;
(statearr_32657_32693[(2)] = null);

(statearr_32657_32693[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (13))){
var inst_32597 = (state_32644[(9)]);
var inst_32598 = (state_32644[(10)]);
var inst_32599 = (state_32644[(11)]);
var inst_32596 = (state_32644[(12)]);
var inst_32606 = (state_32644[(2)]);
var inst_32607 = (inst_32599 + (1));
var tmp32653 = inst_32597;
var tmp32654 = inst_32598;
var tmp32655 = inst_32596;
var inst_32596__$1 = tmp32655;
var inst_32597__$1 = tmp32653;
var inst_32598__$1 = tmp32654;
var inst_32599__$1 = inst_32607;
var state_32644__$1 = (function (){var statearr_32658 = state_32644;
(statearr_32658[(9)] = inst_32597__$1);

(statearr_32658[(10)] = inst_32598__$1);

(statearr_32658[(11)] = inst_32599__$1);

(statearr_32658[(12)] = inst_32596__$1);

(statearr_32658[(14)] = inst_32606);

return statearr_32658;
})();
var statearr_32659_32694 = state_32644__$1;
(statearr_32659_32694[(2)] = null);

(statearr_32659_32694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (22))){
var state_32644__$1 = state_32644;
var statearr_32660_32695 = state_32644__$1;
(statearr_32660_32695[(2)] = null);

(statearr_32660_32695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (6))){
var inst_32585 = (state_32644[(13)]);
var inst_32594 = f.call(null,inst_32585);
var inst_32595 = cljs.core.seq.call(null,inst_32594);
var inst_32596 = inst_32595;
var inst_32597 = null;
var inst_32598 = (0);
var inst_32599 = (0);
var state_32644__$1 = (function (){var statearr_32661 = state_32644;
(statearr_32661[(9)] = inst_32597);

(statearr_32661[(10)] = inst_32598);

(statearr_32661[(11)] = inst_32599);

(statearr_32661[(12)] = inst_32596);

return statearr_32661;
})();
var statearr_32662_32696 = state_32644__$1;
(statearr_32662_32696[(2)] = null);

(statearr_32662_32696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (17))){
var inst_32610 = (state_32644[(7)]);
var inst_32614 = cljs.core.chunk_first.call(null,inst_32610);
var inst_32615 = cljs.core.chunk_rest.call(null,inst_32610);
var inst_32616 = cljs.core.count.call(null,inst_32614);
var inst_32596 = inst_32615;
var inst_32597 = inst_32614;
var inst_32598 = inst_32616;
var inst_32599 = (0);
var state_32644__$1 = (function (){var statearr_32663 = state_32644;
(statearr_32663[(9)] = inst_32597);

(statearr_32663[(10)] = inst_32598);

(statearr_32663[(11)] = inst_32599);

(statearr_32663[(12)] = inst_32596);

return statearr_32663;
})();
var statearr_32664_32697 = state_32644__$1;
(statearr_32664_32697[(2)] = null);

(statearr_32664_32697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (3))){
var inst_32642 = (state_32644[(2)]);
var state_32644__$1 = state_32644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32644__$1,inst_32642);
} else {
if((state_val_32645 === (12))){
var inst_32630 = (state_32644[(2)]);
var state_32644__$1 = state_32644;
var statearr_32665_32698 = state_32644__$1;
(statearr_32665_32698[(2)] = inst_32630);

(statearr_32665_32698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (2))){
var state_32644__$1 = state_32644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32644__$1,(4),in$);
} else {
if((state_val_32645 === (23))){
var inst_32638 = (state_32644[(2)]);
var state_32644__$1 = state_32644;
var statearr_32666_32699 = state_32644__$1;
(statearr_32666_32699[(2)] = inst_32638);

(statearr_32666_32699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (19))){
var inst_32625 = (state_32644[(2)]);
var state_32644__$1 = state_32644;
var statearr_32667_32700 = state_32644__$1;
(statearr_32667_32700[(2)] = inst_32625);

(statearr_32667_32700[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (11))){
var inst_32596 = (state_32644[(12)]);
var inst_32610 = (state_32644[(7)]);
var inst_32610__$1 = cljs.core.seq.call(null,inst_32596);
var state_32644__$1 = (function (){var statearr_32668 = state_32644;
(statearr_32668[(7)] = inst_32610__$1);

return statearr_32668;
})();
if(inst_32610__$1){
var statearr_32669_32701 = state_32644__$1;
(statearr_32669_32701[(1)] = (14));

} else {
var statearr_32670_32702 = state_32644__$1;
(statearr_32670_32702[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (9))){
var inst_32632 = (state_32644[(2)]);
var inst_32633 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32644__$1 = (function (){var statearr_32671 = state_32644;
(statearr_32671[(15)] = inst_32632);

return statearr_32671;
})();
if(cljs.core.truth_(inst_32633)){
var statearr_32672_32703 = state_32644__$1;
(statearr_32672_32703[(1)] = (21));

} else {
var statearr_32673_32704 = state_32644__$1;
(statearr_32673_32704[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (5))){
var inst_32588 = cljs.core.async.close_BANG_.call(null,out);
var state_32644__$1 = state_32644;
var statearr_32674_32705 = state_32644__$1;
(statearr_32674_32705[(2)] = inst_32588);

(statearr_32674_32705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (14))){
var inst_32610 = (state_32644[(7)]);
var inst_32612 = cljs.core.chunked_seq_QMARK_.call(null,inst_32610);
var state_32644__$1 = state_32644;
if(inst_32612){
var statearr_32675_32706 = state_32644__$1;
(statearr_32675_32706[(1)] = (17));

} else {
var statearr_32676_32707 = state_32644__$1;
(statearr_32676_32707[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (16))){
var inst_32628 = (state_32644[(2)]);
var state_32644__$1 = state_32644;
var statearr_32677_32708 = state_32644__$1;
(statearr_32677_32708[(2)] = inst_32628);

(statearr_32677_32708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (10))){
var inst_32597 = (state_32644[(9)]);
var inst_32599 = (state_32644[(11)]);
var inst_32604 = cljs.core._nth.call(null,inst_32597,inst_32599);
var state_32644__$1 = state_32644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32644__$1,(13),out,inst_32604);
} else {
if((state_val_32645 === (18))){
var inst_32610 = (state_32644[(7)]);
var inst_32619 = cljs.core.first.call(null,inst_32610);
var state_32644__$1 = state_32644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32644__$1,(20),out,inst_32619);
} else {
if((state_val_32645 === (8))){
var inst_32598 = (state_32644[(10)]);
var inst_32599 = (state_32644[(11)]);
var inst_32601 = (inst_32599 < inst_32598);
var inst_32602 = inst_32601;
var state_32644__$1 = state_32644;
if(cljs.core.truth_(inst_32602)){
var statearr_32678_32709 = state_32644__$1;
(statearr_32678_32709[(1)] = (10));

} else {
var statearr_32679_32710 = state_32644__$1;
(statearr_32679_32710[(1)] = (11));

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
}
}
}
}
}
});})(c__30187__auto__))
;
return ((function (switch__30075__auto__,c__30187__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30076__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30076__auto____0 = (function (){
var statearr_32683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32683[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30076__auto__);

(statearr_32683[(1)] = (1));

return statearr_32683;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30076__auto____1 = (function (state_32644){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_32644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e32684){if((e32684 instanceof Object)){
var ex__30079__auto__ = e32684;
var statearr_32685_32711 = state_32644;
(statearr_32685_32711[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32712 = state_32644;
state_32644 = G__32712;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30076__auto__ = function(state_32644){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30076__auto____1.call(this,state_32644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30076__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30076__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto__))
})();
var state__30189__auto__ = (function (){var statearr_32686 = f__30188__auto__.call(null);
(statearr_32686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto__);

return statearr_32686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto__))
);

return c__30187__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32713 = [];
var len__27981__auto___32716 = arguments.length;
var i__27982__auto___32717 = (0);
while(true){
if((i__27982__auto___32717 < len__27981__auto___32716)){
args32713.push((arguments[i__27982__auto___32717]));

var G__32718 = (i__27982__auto___32717 + (1));
i__27982__auto___32717 = G__32718;
continue;
} else {
}
break;
}

var G__32715 = args32713.length;
switch (G__32715) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32713.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32720 = [];
var len__27981__auto___32723 = arguments.length;
var i__27982__auto___32724 = (0);
while(true){
if((i__27982__auto___32724 < len__27981__auto___32723)){
args32720.push((arguments[i__27982__auto___32724]));

var G__32725 = (i__27982__auto___32724 + (1));
i__27982__auto___32724 = G__32725;
continue;
} else {
}
break;
}

var G__32722 = args32720.length;
switch (G__32722) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32720.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32727 = [];
var len__27981__auto___32778 = arguments.length;
var i__27982__auto___32779 = (0);
while(true){
if((i__27982__auto___32779 < len__27981__auto___32778)){
args32727.push((arguments[i__27982__auto___32779]));

var G__32780 = (i__27982__auto___32779 + (1));
i__27982__auto___32779 = G__32780;
continue;
} else {
}
break;
}

var G__32729 = args32727.length;
switch (G__32729) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32727.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30187__auto___32782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___32782,out){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___32782,out){
return (function (state_32753){
var state_val_32754 = (state_32753[(1)]);
if((state_val_32754 === (7))){
var inst_32748 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32755_32783 = state_32753__$1;
(statearr_32755_32783[(2)] = inst_32748);

(statearr_32755_32783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (1))){
var inst_32730 = null;
var state_32753__$1 = (function (){var statearr_32756 = state_32753;
(statearr_32756[(7)] = inst_32730);

return statearr_32756;
})();
var statearr_32757_32784 = state_32753__$1;
(statearr_32757_32784[(2)] = null);

(statearr_32757_32784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (4))){
var inst_32733 = (state_32753[(8)]);
var inst_32733__$1 = (state_32753[(2)]);
var inst_32734 = (inst_32733__$1 == null);
var inst_32735 = cljs.core.not.call(null,inst_32734);
var state_32753__$1 = (function (){var statearr_32758 = state_32753;
(statearr_32758[(8)] = inst_32733__$1);

return statearr_32758;
})();
if(inst_32735){
var statearr_32759_32785 = state_32753__$1;
(statearr_32759_32785[(1)] = (5));

} else {
var statearr_32760_32786 = state_32753__$1;
(statearr_32760_32786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (6))){
var state_32753__$1 = state_32753;
var statearr_32761_32787 = state_32753__$1;
(statearr_32761_32787[(2)] = null);

(statearr_32761_32787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (3))){
var inst_32750 = (state_32753[(2)]);
var inst_32751 = cljs.core.async.close_BANG_.call(null,out);
var state_32753__$1 = (function (){var statearr_32762 = state_32753;
(statearr_32762[(9)] = inst_32750);

return statearr_32762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32753__$1,inst_32751);
} else {
if((state_val_32754 === (2))){
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32753__$1,(4),ch);
} else {
if((state_val_32754 === (11))){
var inst_32733 = (state_32753[(8)]);
var inst_32742 = (state_32753[(2)]);
var inst_32730 = inst_32733;
var state_32753__$1 = (function (){var statearr_32763 = state_32753;
(statearr_32763[(10)] = inst_32742);

(statearr_32763[(7)] = inst_32730);

return statearr_32763;
})();
var statearr_32764_32788 = state_32753__$1;
(statearr_32764_32788[(2)] = null);

(statearr_32764_32788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (9))){
var inst_32733 = (state_32753[(8)]);
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32753__$1,(11),out,inst_32733);
} else {
if((state_val_32754 === (5))){
var inst_32730 = (state_32753[(7)]);
var inst_32733 = (state_32753[(8)]);
var inst_32737 = cljs.core._EQ_.call(null,inst_32733,inst_32730);
var state_32753__$1 = state_32753;
if(inst_32737){
var statearr_32766_32789 = state_32753__$1;
(statearr_32766_32789[(1)] = (8));

} else {
var statearr_32767_32790 = state_32753__$1;
(statearr_32767_32790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (10))){
var inst_32745 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32768_32791 = state_32753__$1;
(statearr_32768_32791[(2)] = inst_32745);

(statearr_32768_32791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (8))){
var inst_32730 = (state_32753[(7)]);
var tmp32765 = inst_32730;
var inst_32730__$1 = tmp32765;
var state_32753__$1 = (function (){var statearr_32769 = state_32753;
(statearr_32769[(7)] = inst_32730__$1);

return statearr_32769;
})();
var statearr_32770_32792 = state_32753__$1;
(statearr_32770_32792[(2)] = null);

(statearr_32770_32792[(1)] = (2));


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
});})(c__30187__auto___32782,out))
;
return ((function (switch__30075__auto__,c__30187__auto___32782,out){
return (function() {
var cljs$core$async$state_machine__30076__auto__ = null;
var cljs$core$async$state_machine__30076__auto____0 = (function (){
var statearr_32774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32774[(0)] = cljs$core$async$state_machine__30076__auto__);

(statearr_32774[(1)] = (1));

return statearr_32774;
});
var cljs$core$async$state_machine__30076__auto____1 = (function (state_32753){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_32753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e32775){if((e32775 instanceof Object)){
var ex__30079__auto__ = e32775;
var statearr_32776_32793 = state_32753;
(statearr_32776_32793[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32794 = state_32753;
state_32753 = G__32794;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$state_machine__30076__auto__ = function(state_32753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30076__auto____1.call(this,state_32753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30076__auto____0;
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30076__auto____1;
return cljs$core$async$state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___32782,out))
})();
var state__30189__auto__ = (function (){var statearr_32777 = f__30188__auto__.call(null);
(statearr_32777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___32782);

return statearr_32777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___32782,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32795 = [];
var len__27981__auto___32865 = arguments.length;
var i__27982__auto___32866 = (0);
while(true){
if((i__27982__auto___32866 < len__27981__auto___32865)){
args32795.push((arguments[i__27982__auto___32866]));

var G__32867 = (i__27982__auto___32866 + (1));
i__27982__auto___32866 = G__32867;
continue;
} else {
}
break;
}

var G__32797 = args32795.length;
switch (G__32797) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32795.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30187__auto___32869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___32869,out){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___32869,out){
return (function (state_32835){
var state_val_32836 = (state_32835[(1)]);
if((state_val_32836 === (7))){
var inst_32831 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
var statearr_32837_32870 = state_32835__$1;
(statearr_32837_32870[(2)] = inst_32831);

(statearr_32837_32870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (1))){
var inst_32798 = (new Array(n));
var inst_32799 = inst_32798;
var inst_32800 = (0);
var state_32835__$1 = (function (){var statearr_32838 = state_32835;
(statearr_32838[(7)] = inst_32799);

(statearr_32838[(8)] = inst_32800);

return statearr_32838;
})();
var statearr_32839_32871 = state_32835__$1;
(statearr_32839_32871[(2)] = null);

(statearr_32839_32871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (4))){
var inst_32803 = (state_32835[(9)]);
var inst_32803__$1 = (state_32835[(2)]);
var inst_32804 = (inst_32803__$1 == null);
var inst_32805 = cljs.core.not.call(null,inst_32804);
var state_32835__$1 = (function (){var statearr_32840 = state_32835;
(statearr_32840[(9)] = inst_32803__$1);

return statearr_32840;
})();
if(inst_32805){
var statearr_32841_32872 = state_32835__$1;
(statearr_32841_32872[(1)] = (5));

} else {
var statearr_32842_32873 = state_32835__$1;
(statearr_32842_32873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (15))){
var inst_32825 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
var statearr_32843_32874 = state_32835__$1;
(statearr_32843_32874[(2)] = inst_32825);

(statearr_32843_32874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (13))){
var state_32835__$1 = state_32835;
var statearr_32844_32875 = state_32835__$1;
(statearr_32844_32875[(2)] = null);

(statearr_32844_32875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (6))){
var inst_32800 = (state_32835[(8)]);
var inst_32821 = (inst_32800 > (0));
var state_32835__$1 = state_32835;
if(cljs.core.truth_(inst_32821)){
var statearr_32845_32876 = state_32835__$1;
(statearr_32845_32876[(1)] = (12));

} else {
var statearr_32846_32877 = state_32835__$1;
(statearr_32846_32877[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (3))){
var inst_32833 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32835__$1,inst_32833);
} else {
if((state_val_32836 === (12))){
var inst_32799 = (state_32835[(7)]);
var inst_32823 = cljs.core.vec.call(null,inst_32799);
var state_32835__$1 = state_32835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32835__$1,(15),out,inst_32823);
} else {
if((state_val_32836 === (2))){
var state_32835__$1 = state_32835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32835__$1,(4),ch);
} else {
if((state_val_32836 === (11))){
var inst_32815 = (state_32835[(2)]);
var inst_32816 = (new Array(n));
var inst_32799 = inst_32816;
var inst_32800 = (0);
var state_32835__$1 = (function (){var statearr_32847 = state_32835;
(statearr_32847[(10)] = inst_32815);

(statearr_32847[(7)] = inst_32799);

(statearr_32847[(8)] = inst_32800);

return statearr_32847;
})();
var statearr_32848_32878 = state_32835__$1;
(statearr_32848_32878[(2)] = null);

(statearr_32848_32878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (9))){
var inst_32799 = (state_32835[(7)]);
var inst_32813 = cljs.core.vec.call(null,inst_32799);
var state_32835__$1 = state_32835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32835__$1,(11),out,inst_32813);
} else {
if((state_val_32836 === (5))){
var inst_32803 = (state_32835[(9)]);
var inst_32799 = (state_32835[(7)]);
var inst_32808 = (state_32835[(11)]);
var inst_32800 = (state_32835[(8)]);
var inst_32807 = (inst_32799[inst_32800] = inst_32803);
var inst_32808__$1 = (inst_32800 + (1));
var inst_32809 = (inst_32808__$1 < n);
var state_32835__$1 = (function (){var statearr_32849 = state_32835;
(statearr_32849[(12)] = inst_32807);

(statearr_32849[(11)] = inst_32808__$1);

return statearr_32849;
})();
if(cljs.core.truth_(inst_32809)){
var statearr_32850_32879 = state_32835__$1;
(statearr_32850_32879[(1)] = (8));

} else {
var statearr_32851_32880 = state_32835__$1;
(statearr_32851_32880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (14))){
var inst_32828 = (state_32835[(2)]);
var inst_32829 = cljs.core.async.close_BANG_.call(null,out);
var state_32835__$1 = (function (){var statearr_32853 = state_32835;
(statearr_32853[(13)] = inst_32828);

return statearr_32853;
})();
var statearr_32854_32881 = state_32835__$1;
(statearr_32854_32881[(2)] = inst_32829);

(statearr_32854_32881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (10))){
var inst_32819 = (state_32835[(2)]);
var state_32835__$1 = state_32835;
var statearr_32855_32882 = state_32835__$1;
(statearr_32855_32882[(2)] = inst_32819);

(statearr_32855_32882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32836 === (8))){
var inst_32799 = (state_32835[(7)]);
var inst_32808 = (state_32835[(11)]);
var tmp32852 = inst_32799;
var inst_32799__$1 = tmp32852;
var inst_32800 = inst_32808;
var state_32835__$1 = (function (){var statearr_32856 = state_32835;
(statearr_32856[(7)] = inst_32799__$1);

(statearr_32856[(8)] = inst_32800);

return statearr_32856;
})();
var statearr_32857_32883 = state_32835__$1;
(statearr_32857_32883[(2)] = null);

(statearr_32857_32883[(1)] = (2));


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
});})(c__30187__auto___32869,out))
;
return ((function (switch__30075__auto__,c__30187__auto___32869,out){
return (function() {
var cljs$core$async$state_machine__30076__auto__ = null;
var cljs$core$async$state_machine__30076__auto____0 = (function (){
var statearr_32861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32861[(0)] = cljs$core$async$state_machine__30076__auto__);

(statearr_32861[(1)] = (1));

return statearr_32861;
});
var cljs$core$async$state_machine__30076__auto____1 = (function (state_32835){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_32835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e32862){if((e32862 instanceof Object)){
var ex__30079__auto__ = e32862;
var statearr_32863_32884 = state_32835;
(statearr_32863_32884[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32885 = state_32835;
state_32835 = G__32885;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$state_machine__30076__auto__ = function(state_32835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30076__auto____1.call(this,state_32835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30076__auto____0;
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30076__auto____1;
return cljs$core$async$state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___32869,out))
})();
var state__30189__auto__ = (function (){var statearr_32864 = f__30188__auto__.call(null);
(statearr_32864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___32869);

return statearr_32864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___32869,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32886 = [];
var len__27981__auto___32960 = arguments.length;
var i__27982__auto___32961 = (0);
while(true){
if((i__27982__auto___32961 < len__27981__auto___32960)){
args32886.push((arguments[i__27982__auto___32961]));

var G__32962 = (i__27982__auto___32961 + (1));
i__27982__auto___32961 = G__32962;
continue;
} else {
}
break;
}

var G__32888 = args32886.length;
switch (G__32888) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32886.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30187__auto___32964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___32964,out){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___32964,out){
return (function (state_32930){
var state_val_32931 = (state_32930[(1)]);
if((state_val_32931 === (7))){
var inst_32926 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32932_32965 = state_32930__$1;
(statearr_32932_32965[(2)] = inst_32926);

(statearr_32932_32965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (1))){
var inst_32889 = [];
var inst_32890 = inst_32889;
var inst_32891 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32930__$1 = (function (){var statearr_32933 = state_32930;
(statearr_32933[(7)] = inst_32890);

(statearr_32933[(8)] = inst_32891);

return statearr_32933;
})();
var statearr_32934_32966 = state_32930__$1;
(statearr_32934_32966[(2)] = null);

(statearr_32934_32966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (4))){
var inst_32894 = (state_32930[(9)]);
var inst_32894__$1 = (state_32930[(2)]);
var inst_32895 = (inst_32894__$1 == null);
var inst_32896 = cljs.core.not.call(null,inst_32895);
var state_32930__$1 = (function (){var statearr_32935 = state_32930;
(statearr_32935[(9)] = inst_32894__$1);

return statearr_32935;
})();
if(inst_32896){
var statearr_32936_32967 = state_32930__$1;
(statearr_32936_32967[(1)] = (5));

} else {
var statearr_32937_32968 = state_32930__$1;
(statearr_32937_32968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (15))){
var inst_32920 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32938_32969 = state_32930__$1;
(statearr_32938_32969[(2)] = inst_32920);

(statearr_32938_32969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (13))){
var state_32930__$1 = state_32930;
var statearr_32939_32970 = state_32930__$1;
(statearr_32939_32970[(2)] = null);

(statearr_32939_32970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (6))){
var inst_32890 = (state_32930[(7)]);
var inst_32915 = inst_32890.length;
var inst_32916 = (inst_32915 > (0));
var state_32930__$1 = state_32930;
if(cljs.core.truth_(inst_32916)){
var statearr_32940_32971 = state_32930__$1;
(statearr_32940_32971[(1)] = (12));

} else {
var statearr_32941_32972 = state_32930__$1;
(statearr_32941_32972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (3))){
var inst_32928 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32930__$1,inst_32928);
} else {
if((state_val_32931 === (12))){
var inst_32890 = (state_32930[(7)]);
var inst_32918 = cljs.core.vec.call(null,inst_32890);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32930__$1,(15),out,inst_32918);
} else {
if((state_val_32931 === (2))){
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32930__$1,(4),ch);
} else {
if((state_val_32931 === (11))){
var inst_32894 = (state_32930[(9)]);
var inst_32898 = (state_32930[(10)]);
var inst_32908 = (state_32930[(2)]);
var inst_32909 = [];
var inst_32910 = inst_32909.push(inst_32894);
var inst_32890 = inst_32909;
var inst_32891 = inst_32898;
var state_32930__$1 = (function (){var statearr_32942 = state_32930;
(statearr_32942[(7)] = inst_32890);

(statearr_32942[(11)] = inst_32908);

(statearr_32942[(12)] = inst_32910);

(statearr_32942[(8)] = inst_32891);

return statearr_32942;
})();
var statearr_32943_32973 = state_32930__$1;
(statearr_32943_32973[(2)] = null);

(statearr_32943_32973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (9))){
var inst_32890 = (state_32930[(7)]);
var inst_32906 = cljs.core.vec.call(null,inst_32890);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32930__$1,(11),out,inst_32906);
} else {
if((state_val_32931 === (5))){
var inst_32894 = (state_32930[(9)]);
var inst_32898 = (state_32930[(10)]);
var inst_32891 = (state_32930[(8)]);
var inst_32898__$1 = f.call(null,inst_32894);
var inst_32899 = cljs.core._EQ_.call(null,inst_32898__$1,inst_32891);
var inst_32900 = cljs.core.keyword_identical_QMARK_.call(null,inst_32891,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32901 = (inst_32899) || (inst_32900);
var state_32930__$1 = (function (){var statearr_32944 = state_32930;
(statearr_32944[(10)] = inst_32898__$1);

return statearr_32944;
})();
if(cljs.core.truth_(inst_32901)){
var statearr_32945_32974 = state_32930__$1;
(statearr_32945_32974[(1)] = (8));

} else {
var statearr_32946_32975 = state_32930__$1;
(statearr_32946_32975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (14))){
var inst_32923 = (state_32930[(2)]);
var inst_32924 = cljs.core.async.close_BANG_.call(null,out);
var state_32930__$1 = (function (){var statearr_32948 = state_32930;
(statearr_32948[(13)] = inst_32923);

return statearr_32948;
})();
var statearr_32949_32976 = state_32930__$1;
(statearr_32949_32976[(2)] = inst_32924);

(statearr_32949_32976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (10))){
var inst_32913 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32950_32977 = state_32930__$1;
(statearr_32950_32977[(2)] = inst_32913);

(statearr_32950_32977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (8))){
var inst_32890 = (state_32930[(7)]);
var inst_32894 = (state_32930[(9)]);
var inst_32898 = (state_32930[(10)]);
var inst_32903 = inst_32890.push(inst_32894);
var tmp32947 = inst_32890;
var inst_32890__$1 = tmp32947;
var inst_32891 = inst_32898;
var state_32930__$1 = (function (){var statearr_32951 = state_32930;
(statearr_32951[(7)] = inst_32890__$1);

(statearr_32951[(8)] = inst_32891);

(statearr_32951[(14)] = inst_32903);

return statearr_32951;
})();
var statearr_32952_32978 = state_32930__$1;
(statearr_32952_32978[(2)] = null);

(statearr_32952_32978[(1)] = (2));


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
});})(c__30187__auto___32964,out))
;
return ((function (switch__30075__auto__,c__30187__auto___32964,out){
return (function() {
var cljs$core$async$state_machine__30076__auto__ = null;
var cljs$core$async$state_machine__30076__auto____0 = (function (){
var statearr_32956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32956[(0)] = cljs$core$async$state_machine__30076__auto__);

(statearr_32956[(1)] = (1));

return statearr_32956;
});
var cljs$core$async$state_machine__30076__auto____1 = (function (state_32930){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_32930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e32957){if((e32957 instanceof Object)){
var ex__30079__auto__ = e32957;
var statearr_32958_32979 = state_32930;
(statearr_32958_32979[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32980 = state_32930;
state_32930 = G__32980;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
cljs$core$async$state_machine__30076__auto__ = function(state_32930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30076__auto____1.call(this,state_32930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30076__auto____0;
cljs$core$async$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30076__auto____1;
return cljs$core$async$state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___32964,out))
})();
var state__30189__auto__ = (function (){var statearr_32959 = f__30188__auto__.call(null);
(statearr_32959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___32964);

return statearr_32959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___32964,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1506566547529