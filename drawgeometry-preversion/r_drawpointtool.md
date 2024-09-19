### mm.DrawPointTool

#### Methods

* [enable](#enable)
* [disable](#disable)

***

##### enable   
`enable() : void`

Enables the tool. Disables all other tools, that are set to singleActive.

***

##### disable   
`disable() : void`

Disables the tool.

***

#### Options

|option|default|description|
|:----|:----|:----|
|cbobject|this|The Object from which the callback should be called. By default the Caller will be the Tool itself (this).|
|layerstyle|{"pointsize":6,"pointcolor":[1,0,0,1]}|Object of type [mm.FeatureStyle](r_featurestyle.html)|
|highlightlayerstyle|{"pointsize":6,"pointcolor":[1,1,0,0.5]}|Object of type [mm.FeatureStyle](r_featurestyle.html)|
|finishedcbf|null|Called on finished drawing a point.Returns: {"pointfeature": mm.Feature }|
|errorcbf|null|Called on error, eg. measurement without depth data. Returns: Reason as a text-string|
|enablecbf|null|Called on enabling the tool.|
|disablecbf|null|Called on disabling the tool.|
|finishinput|mm.USERINPUTTYPE["RIGHTCLICK"]|The user input for the finish command. See mmUserInput for possible values.|
|resetinput|mm.USERINPUTTYPE["KEY_ESC"]|The user input for the reset command. See mmUserInput for possible values.|
|resetcbf|null|Called on resetting the tool.|
|activecursor|'crosshair'|Cursor type. See JavaScript reference for possible values.|
|continousdraw|true|Option to continuously draw the feature on mouse move.|
|continousdrawcbf|null|Called on drawing and mouse move. Returns: {"mx":mx,"my":my,"pos":mm.MeasurePoint}|
|maxdist|20|The maximal distance in m from the camera (point of view) where a point can be measured without warning. If the users measurement exceeds the maximal distance the errorcbf is released with a meassage: "Position too far from projection center"|
|modifycursor|true|Whether or not to change the Cursor appearance. Useful if you want to use the tool hidden (for example to get on the quality values).|
|snaplayer|null|A mm.FeatureCollection-Object (single Object or Array).While measuring/drawing the mouse will snap on the vertices/points of the specified featureCollection(s). The snapping can be deactivated interactively by pressing the ALT-Key.|

***