### mm.ToolHandler

#### Methods

* [disableAllTools](#disablealltools)
* [createDrawPointTool](#createdrawpointtool)
* [createDrawLineStringTool](#createdrawlinestringtool)
* [createDrawPolygonTool](#createdrawpolygontool)
* [createDrawLRPointTool](#createdrawlrpointtool)
* [createCursor3d](#createcursor3d)
* [createSnapShotTool](#createsnapshottool)
* [createProfileTool](#createprofiletool)
* [createElevationTool](#createelevationtool)
* [createEditFeatureTool](#createeditfeaturetool)
* [createOrthogonalMeasurementTool](#createorthogonalmeasurementtool)
* [createGridTool](#creategridtool)

***

##### disableAllTools  
`disableAllTools() : void`

Deactivates all active Tools. Except all Tools that can be activated together with other Tools.

***

##### createDrawPointTool  
`createDrawPointTool(options) : `[`mm.DrawPointTool`](r_drawpointtool.html)

Creates a tool to draw point features in the scene.

Parameters:
* `options : object`

  See [mm.DrawPointTool](r_drawpointtool.html) for possible options.
   
Returns:
* [`mm.DrawPointTool`](r_drawpointtool.html)

***

##### createDrawLineStringTool  
`createDrawLineStringTool(options) : `[`mm.DrawLineStringTool`](r_drawlinestringtool.html)

Creates a tool to draw linestring features in the scene.

Parameters:
* `options : object`

  See [mm.DrawLineStringTool](r_drawlinestringtool.html) for possible options.
   
Returns:
* [`mm.DrawLineStringTool`](r_drawlinestringtool.html)

***

##### createDrawPolygonTool  
`createDrawPolygonTool(options) : `[`mm.DrawPolygonTool`](r_drawpolygontool.html)

Creates a tool to draw polygon features in the scene.

Parameters:
* `options : object`

  See [mm.DrawPolygonTool](r_drawpolygontool.html) for possible options.
   
Returns:
* [`mm.DrawPolygonTool`](r_drawpolygontool.html)

***

##### createDrawLRPointTool  
`createDrawLRPointTool(options) : `[`mm.DrawLRPointTool`](r_drawlrpointtool.html)

Creates a tool to draw linear referenced point features in the scene.

Parameters:
* `options : object`

  See [mm.DrawLRPointTool](r_drawlrpointtool.html) for possible options.
   
Returns:
* [`mm.DrawLRPointTool`](r_drawlrpointtool.html)

***

##### createCursor3d  
`createCursor3d(options) : `[`mm.Cursor3d`](r_cursor3d.html)

Creates a tool to draw a 3D-Cursor in the scene.

Parameters:
* `options : object`

  See [mm.Cursor3d](r_cursor3d.html) for possible options.
   
Returns:
* [`mm.Cursor3d`](r_cursor3d.html)

***

##### createSnapShotTool   
`createSnapShotTool(options) : `[`mm.SnapShotTool`](r_snapshottool.html)

Creates a tool to create a snap shot from the scene.

Parameters:
* `options : object`

  See [mm.SnapShotTool](r_snapshottool.html) for possible options.
   
Returns:
* [`mm.SnapShotTool`](r_snapshottool.html)

***

##### createProfileTool   
`createProfileTool(options) : `[`mm.ProfileTool`](r_profiletool.html)

Creates a tool to create a profile from the scene.

Parameters:
* `options : object`

  See [mm.ProfileTool](r_profiletool.html) for possible options.
   
Returns:
* [`mm.ProfileTool`](r_profiletool.html)

***

##### createElevationTool   
`createElevationTool(options) : `[`mm.ElevationTool`](r_elevationtool.html)

Creates a tool to measure elevations in the scene.

Parameters:
* `options : object`

  See [mm.ElevationTool](r_elevationtool.html) for possible options.
   
Returns:
* [`mm.ElevationTool`](r_elevationtool.html)

***

##### createEditFeatureTool   
`createEditFeatureTool(options) : `[`mm.EditFeatureTool`](r_editfeaturetool.html)

Creates a tool to select and edit a feature.

Parameters:
* `options : object`

  See [mm.EditFeatureTool](r_editfeaturetool.html) for possible options.
   
Returns:
* [`mm.EditFeatureTool`](r_editfeaturetool.html)

***

##### createOrthogonalMeasurementTool    
`createOrthogonalMeasurementTool(options) : `[`mm.OrthogonalMeasurementTool`](r_orthogonalmeasurementtool.html)

Creates a tool which visually detects Edges in the image and allows you to measure orthogonal to these Edges.

Parameters:
* `options : object`

  See [mm.OrthogonalMeasurementTool](r_orthogonalmeasurementtool.html) for possible options.
   
Returns:
* [`mm.OrthogonalMeasurementTool`](r_orthogonalmeasurementtool.html)

***

##### createGridTool    
`createGridTool(options) : `[`mm.GridTool`](r_gridtool.html)

Creates a tool to overlay a meter-grid. The grid is planar and represents an estimated road surface that is defined 
with the parameters 'tilt' and 'height' of [mm.Stream](r_stream.html).

Parameters:
* `options : object`

  See [mm.GridTool](r_gridtool.html) for possible options.
   
Returns:
* [`mm.GridTool`](r_gridtool.html)

***

#### Properties

|name|description|
|:---|:----|
|parentScene|Parent object of type [mm.Scene](r_scene.html)|

***
