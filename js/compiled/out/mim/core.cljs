(ns mim.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [mim.events]
            [mim.subs]
            [mim.ws :as ws]
            [mim.views :as views]
            [mim.config :as config]
            [mim.touch-stuff :as touch]))

(enable-console-print!)


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn delayed-init []
  ;;(views/set-ui "Delayed init.")
  (touch/init-canvas))


(defn ^:export init []
  ;(ws/start-ws)
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root)
  (js.setTimeout delayed-init 300))
