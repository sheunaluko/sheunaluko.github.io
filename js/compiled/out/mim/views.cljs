(ns mim.views
  (:require [re-frame.core :as re-frame]
            [mim.ws :as ws]
            [re-com.core :as re-com]))




(defn log [& args]
  (let [msg (apply str (interpose " " args))]
    (js.console.log msg)))


(defn set-ui [msg]
  (let [ui (.getElementById js.document "console_ui")]
    (aset ui "innerText" msg)))


(defn title []
  [re-com/title
   :label "Svg | Touch | Animation"
   :level :level1 ])

(defn my-canvas []
  [re-com/box
   :size "auto"
   :height "100%"
   :width "100%"
   :attr {:id "svgContainer"}
   :child [:svg {:id "svg"}]])


(defn main-area []
  [re-com/box
   :size "auto"
   :width "100%"
   :height "100%"
   :style {:margin-top "10px"}
   :child [my-canvas]])

     

(defn my-button [label click]
  [re-com/box
   :style {:margin-left "20px"}
   :child [re-com/button
           :label label
           :on-click click]])


;;[my-button "<=" #(set-ui "LEFT CLICKED")]
;;[my-button "=>" #(set-ui "RIGHT CLICKED")]

(defn bottom-panel []
  [re-com/box
   :justify :center
   :style {:margin-bottom "10px"
           :margin-top "10px"}
   :child [re-com/box
           :size "auto"
           :child [re-com/title
                   :label "alukosheun@gmail.com"
                   :level :level3]]])


;; (defn main-panel []
;;   (fn []
;;     [re-com/v-box
;;      :width "100%"
;;      :height"100%"
;;      :style {:padding-left "10px"
;;              :padding-right "10px"
;;              :background-color "cornsilk"}
;;      :children [[re-com/h-box
;;                  :size "auto"
;;                  :children [[title]
;;                             [re-com/box
;;                              :size "auto"
;;                              :child [re-com/title
;;                                      :level :level3
;;                                      :label "console messages"
;;                                      :attr {:id "console_ui"}]]]]
;;                 [re-com/line
;;                  :size "1px"
;;                  :color "black"]
;;                 [re-com/box
;;                  :width "100%"
;;                  :height "80%"
;;                  :style {:margin-bottom "20px"}
;;                  :child [main-area]]
;;                 [re-com/line
;;                  :size "1px"
;;                  :color "black"]
;;                 [bottom-panel] ]]))

(defn main-panel []
  (fn []
    [re-com/v-box
     :width "100%"
     :height"100%"
     :style {:padding-left "10px"
             :padding-right "10px"
             :background-color "cornsilk"}
     :children [[re-com/h-box
                 :size "auto"
                 :children [[title]]]
                [re-com/line
                 :size "1px"
                 :color "black"]
                [re-com/box
                 :width "100%"
                 :height "78%"
                 :style {:margin-bottom "20px"}
                 :child [main-area]]
                [re-com/line
                 :size "1px"
                 :color "black"]
                [bottom-panel]]]))

