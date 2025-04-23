# The MapView controller

The controller is the interface that the developer see to manage the Nextome Map View.
With the controller tha developer can add, modify and remove layers and markers. Can also manage the visibility of the tiles,
can navigate programatically on the map and can hande the incoming events like taps.

## Declaration

:::note
    The whole declaration process is described into [Initialize](./Usage/initialize.md) section of NextomeMapView documentation.
:::
<br/>

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `  // Declare an instance of NextomeMapViewHandler
    val mapview: NextomeMapViewHandler = NextomeMapViewHandler()`
  },
  {
    language: "swift",
    code: `  // Access to the shared instance of NextomeMapViewHandler
    NextomeMapViewHandler.instance.initialize(onReady: ...)`
  }
]
}/>

## Initialize

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `  // Initialize and return the fragment
    fun initialize(
        fragmentManager: FragmentManager,
        @IdRes viewId :Int,
        context: Context,
    ): Fragment`
  },
  {
    language: "swift",
    code: `  // Initialize the engine
    public func initialize()
    // Get the flutter view controller
    public func initializeFlutterViewController() -> FlutterViewController`
  }
]
}/>

## Important! the APPLY method

A very important thing to know about the controller is that to apply a change to the internal state of the map, is mandatory to call the `apply()` method. For example if you need to add a marker, or turn-off a layer you must call `apply()` method to see this changes. Also you can do collect actions like add, modifying, removing, turn-off/on and so on, but at the end you must to call `apply()` method to see all this change applied. If you don't call the `apply()` method after your changes, internally the changes are applied but nothing appen to on the screen.

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun apply()`
  },
  {
    language: "swift",
    code: `public func apply()`
  }
]
}/>

## Set resources

Set the resources to initialize the map. In the specific:

- A list of tiles
- The zoom level intendeed as the folder depth of provided zip
- The width and the height of the map related to the size in pixel of the map
- A flag useMockView that allow to use the map without pass any tile, just for test
- A flag isLatLng that specify if the coordinate system used will be pixel or latitude-longitude

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun setResources(
        tiles: List<NMTile>, 
        zoom: Int, 
        width: Int, 
        height: Int, 
        useMockView: Boolean = false, 
        isLatLng: Boolean = false)`
  },
  {
    language: "swift",
    code: `public func setResources(
        tiles: [NMTile], 
        zoom: Int, 
        width: Int, 
        height: Int, 
        useMockView: Bool = false, 
        isLatLng: Bool = false) -> Void`
  }
]
}/>

## Manage Tiles

### Show-hide Tiles

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun setTileVisibility(tileId: String, show: Boolean)`
  },
  {
    language: "swift",
    code: `public func setTileVisibility(tileId: String, show: Bool)`
  }
]
}/>

## Manage Layers

### Add Layer

To add a new laye:

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun addLayer(layerId: String)`
  },
  {
    language: "swift",
    code: `public func addLayer(layerId: String)`
  }
]
}/>

### Show-hide Layer

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun setLayerVisibility(layerId: String, show: Boolean)`
  },
  {
    language: "swift",
    code: `public func setLayerVisibility(layerId: String, show: Bool)`
  }
]
}/>

### Clear Layer

Remove all marker from a specific layer

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun clearLayer(layerId: String)`
  },
  {
    language: "swift",
    code: `public func clearLayer(layerId: String)`
  }
]
}/>

To remove all marker from all layers

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun clearAll()`
  },
  {
    language: "swift",
    code: `public func clearAll()`
  }
]
}/>

## Manage Markers (Marker, Path, Shape)

### Add Marker
To add a marker, path or shape to a layer

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun addMarker(layerId: String, marker: NMMarker)
fun addPath(layerId: String, path: NMPath)
fun addShape(layerId: String, shape: NMShape)`
  },
  {
    language: "swift",
    code: `public func addMarker(layerId: String, marker: NMMarker)
public func addPath(layerId: String, path: NMPath)
public func addShape(layerId: String, shape: NMShape)`
  }
]
}/>

### Update Marker

Update a marker, a path or a shape.

:::info{title="Important!"}
    The marker, the path or the shape must be added to the layerId.
:::
<br/>

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun updateMarker(layerId: String, marker: NMMarker)
fun updatePath(layerId: String, path: NMPath)
fun updateShape(layerId: String, shape: NMShape)`
  },
  {
    language: "swift",
    code: `public func updateMarker(layerId: String, marker: NMMarker)
public func updatePath(layerId: String, path: NMPath)
public func updateShape(layerId: String, shape: NMShape)`
  }
]
}/>

<!-- NOT IMPLEMENTED YET FOR ANDROID AND IOS
### Get Marker

To get a marker, call:

=== "Dart"
    ```Dart 
    NMMarker? getMarker(String layerId, String markerId);
    NMWidgetMarker? getWidgetMarker(String layerId, String markerId);
    NMPath? getPath(String layerId, String pathId);
    NMShape? getShape(String  layerId, String shapeId);
    ```
=== "Android"
    ```kotlin
    TODO
    ```
=== "iOS"
    ```swift
    TODO
    ```
-->

## Map behaviour control

### Go to point

Move on a specific point. Note that the point must match the coordinates system choose during initialization.
You can pass pixel coordinates or lat-long coordinates.

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun goToPosition(x: Double, y: Double)`
  },
  {
    language: "swift",
    code: `public func goToPosition(x: Double, y: Double)`
  }
]
}/>


### Set Zoom

Set the zoom

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun setZoom(zoom: Double)`
  },
  {
    language: "swift",
    code: `public func setZoom(zoom: Double)`
  }
]
}/>

<!--- ### Set

Show a default map scale-bar
=== "Dart"
    ```Dart 
    void showScaleBar(bool show);  // NOT IMPLEMENTED YET
    ```
=== "Android"
    ```kotlin
    TODO
    ```
=== "iOS"
    ```swift
    TODO
    ```
    void startCompass()
-->

### Enable/Disable the map orientation using device compass

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun useCompass(use: Boolean)`
  },
  {
    language: "swift",
    code: `public func useCompass(use: Bool)`
  }
]
}/>

## Manage Events

### Map Ready

Called when all tiles are loaded and showed

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun setOnMapReady( callback: () -> Unit){ this.onMapReady = callback }`
  },
  {
    language: "swift",
    code: `private var onMapReady: (() -> Void)? = nil`
  }
]
}/>

### Map Tap Events

When an empty point on the map is tapped or is pressed for a long time

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun setOnMapTap(callback: (Double, Double) -> Unit){ this.onMapTap = callback }
    fun setOnMapLongPress(callback: (Double, Double) -> Unit){ this.onMapLongPress = callback }`
  },
  {
    language: "swift",
    code: `private var onMapTap: ((Double, Double) -> Void)? = nil
    private var onMapLongPress: ((Double, Double) -> Void)? = nil`
  }
]
}/>

### Marker Events

Called when a marker (just NMMarker object, not NMPath and NMShape) is tapped

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `fun setOnMarkerTap(callback: (NMMarker) -> Unit){ this.onMarkerTap = callback }`
  },
  {
    language: "swift",
    code: `private var onMarkerTap: ((NMMarker) -> Void)? = nil`
  }
]
}/>