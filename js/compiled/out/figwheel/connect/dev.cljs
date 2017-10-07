(ns figwheel.connect.dev (:require [mim.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/mim.core.mount-root (apply js/mim.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'mim.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

