(ns mim.ws)


(defn set-ui [msg]
  (let [ui (.getElementById js.document "console_ui")]
    (aset ui "innerText" msg)))


;; web socket fundamentals 
(def ws-chan (atom nil))

(defn receive-msg!
 [update-fn]
 (fn [msg]
   (update-fn 
    (->> msg .-data ))))

(defn send-msg!
 [msg]
 (if @ws-chan
   (.send @ws-chan (str msg))
   (throw (js/Error. "Websocket is not available!"))))    


(defn log [& args]
  (let [msg (apply str (interpose " " args))]
    (js.console.log msg)))



(defn receive-handler [stuff]
  (log "Incoming message...")
  (let [msg (cljs.reader/read-string stuff)
        type (:type msg)]
    (when (:debug msg)
      (log "Received a message from server: " msg))
    (set-ui (str "Received msg of type |  " type))
    (case type
      :hello (log "Received hello message from server!")
      (log "Unable to parse type of message from server"))))
  
(defn make-websocket! [url receive-handler]
 (set-ui "Attempting connection...")
 (js.console.log "attempting to connect websocket")
 (if-let [chan (js/WebSocket. url)]
   (do
     (set! (.-onmessage chan) (receive-msg! receive-handler))
     (reset! ws-chan chan)
     (js.console.log  "Websocket connection established with: " url))
   nil))


(def ws-ip-port "10.30.147.96:3000")

(defn start-ws []
  ;;WWWWWWWOOOOOOOOOWWWWWW! what a rookie mistake I just made
  ;;I could not figure out for so long why the web socket was not connecting
  ;;when I used my tablet -- thinking it had to do with netork issues and what not
  ;;However, I am pretty sure now (have not tested yet) that the problem was that
  ;;the tablet was trying to connect to localhost! LOL
  
  (js.setTimeout #(make-websocket! (str "ws://" ws-ip-port "/ws") receive-handler)
                 100))
