// Compiled by ClojureScript 1.9.229 {}
goog.provide('mim.ws');
goog.require('cljs.core');
mim.ws.set_ui = (function mim$ws$set_ui(msg){
var ui = document.getElementById("console_ui");
return (ui["innerText"] = msg);
});
mim.ws.ws_chan = cljs.core.atom.call(null,null);
mim.ws.receive_msg_BANG_ = (function mim$ws$receive_msg_BANG_(update_fn){
return (function (msg){
return update_fn.call(null,msg.data);
});
});
mim.ws.send_msg_BANG_ = (function mim$ws$send_msg_BANG_(msg){
if(cljs.core.truth_(cljs.core.deref.call(null,mim.ws.ws_chan))){
return cljs.core.deref.call(null,mim.ws.ws_chan).send([cljs.core.str(msg)].join(''));
} else {
throw (new Error("Websocket is not available!"));
}
});
mim.ws.log = (function mim$ws$log(var_args){
var args__27989__auto__ = [];
var len__27982__auto___38157 = arguments.length;
var i__27983__auto___38158 = (0);
while(true){
if((i__27983__auto___38158 < len__27982__auto___38157)){
args__27989__auto__.push((arguments[i__27983__auto___38158]));

var G__38159 = (i__27983__auto___38158 + (1));
i__27983__auto___38158 = G__38159;
continue;
} else {
}
break;
}

var argseq__27990__auto__ = ((((0) < args__27989__auto__.length))?(new cljs.core.IndexedSeq(args__27989__auto__.slice((0)),(0),null)):null);
return mim.ws.log.cljs$core$IFn$_invoke$arity$variadic(argseq__27990__auto__);
});

mim.ws.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",args));
return console.log(msg);
});

mim.ws.log.cljs$lang$maxFixedArity = (0);

mim.ws.log.cljs$lang$applyTo = (function (seq38156){
return mim.ws.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38156));
});

mim.ws.receive_handler = (function mim$ws$receive_handler(stuff){
mim.ws.log.call(null,"Incoming message...");

var msg = cljs.reader.read_string.call(null,stuff);
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(msg))){
mim.ws.log.call(null,"Received a message from server: ",msg);
} else {
}

mim.ws.set_ui.call(null,[cljs.core.str("Received msg of type |  "),cljs.core.str(type)].join(''));

var G__38161 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38161) {
case "hello":
return mim.ws.log.call(null,"Received hello message from server!");

break;
default:
return mim.ws.log.call(null,"Unable to parse type of message from server");

}
});
mim.ws.make_websocket_BANG_ = (function mim$ws$make_websocket_BANG_(url,receive_handler){
mim.ws.set_ui.call(null,"Attempting connection...");

console.log("attempting to connect websocket");

var temp__4655__auto__ = (new WebSocket(url));
if(cljs.core.truth_(temp__4655__auto__)){
var chan = temp__4655__auto__;
chan.onmessage = mim.ws.receive_msg_BANG_.call(null,receive_handler);

cljs.core.reset_BANG_.call(null,mim.ws.ws_chan,chan);

return console.log("Websocket connection established with: ",url);
} else {
return null;
}
});
mim.ws.ws_ip_port = "10.30.147.96:3000";
mim.ws.start_ws = (function mim$ws$start_ws(){
return setTimeout((function (){
return mim.ws.make_websocket_BANG_.call(null,[cljs.core.str("ws://"),cljs.core.str(mim.ws.ws_ip_port),cljs.core.str("/ws")].join(''),mim.ws.receive_handler);
}),(100));
});

//# sourceMappingURL=ws.js.map?rel=1506754282867