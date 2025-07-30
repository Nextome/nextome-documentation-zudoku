# Tiles

The Tile is the background component used to show the map. 
The tile declaration is mandatory to get MapView initialized. 
Can be possibile managed the tile behaviour like visibility but can't be possibile to add a new tile or remove an existing tile. The only way is re-assign the whole resources like the initialization phase.

The map graphics will be imported as `zip` file where the tiles images and folder need to be structured usind `Deep Zoom` criteria and need to match the pattern `/{z}/{x}/{y}` where
- `{x}`: x axis coordinate
- `{y}`: y axis coordinate
- `{z}`: zoom level
<!--- more https://docs.fleaflet.dev/layers/tile-layer -->

## Class description

The `NMTile` class is described below

<!--- === "Dart"
    | Property             | Description                          | Default |
    | :--------------------| :----------------------------------- | :-------
    | `name: String`   | The name assigned the tile   | null |
    | `id: String`   | The identification assigned to the tile   | null |
    | `source: String`  | The source path of the zip  | null |
    | `zindex: Int`   | The sorting rendering index | 0 |
    | `visible: Bool`| Set if the tile is visible or not | true |  
-->

=== "Android"

    | Property             | Description                          | Default |
    | :--------------------| :----------------------------------- | :-------
    | `name: String?`   | The name assigned the to tile   | null |
    | `id: String?`   | The identification assigned to the tile   | null |
    | `source: String?`  | The source path of the zip  | null |
    | `zindex: Int`   | The sorting rendering index | 0 |
    | `visible: Bool`| Set if the tile is visible or not | true | 

=== "iOS"

    | Property             | Description                          | Default |
    | :--------------------| :----------------------------------- | :-------
    | `name: String?`   | The name assigned to the tile   | nil |
    | `id: String?`   | The identification assigned to the tile   | nil |
    | `source: String?`  | The source path of the zip  | nil |
    | `zindex: Int`   | The sorting rendering index | 0 |
    | `visible: Bool`| Set if the tile is visible or not | true | 


## Create and set Tile

<!--- === "Dart"
    ```Dart 
    NMTile tile = NMTile(
        name: 'Tile Name',
        id: 'Tile Id',
        zindex: 0,
        source: 'assets/tile_package.zip',
    );
    ``` --> 

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `var tile: NMTile = NMTile()
    tile.show = true
    tile.name = "Tile1"
    tile.id = "2314"
    tile.source = "PATH TO ZIP FILE"

    mapview.setResources(tiles = listOf(tile), zoom = 1, width = 2000, height = 1000)`
  },
  {
    language: "swift",
    code: `var tile: NMTile = NMTile(
        name: "Tile1", 
        id: "1234", 
        source:  "PATH TO ZIP FILE")

    NextomeMapViewHandler.instance.setResources(tiles: [tile], zoom: 1, width: 2000, height: 1000)`
  }
]
}/>

## Show/hide an existing Tile

<!--- === "Dart"
    ```Dart 
    NOT IMPLEMENTED IN ANDROID AND IOS
    ```
-->

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `mapview.setTileVisibility(tileId: String, show: Boolean)
mapview.apply()`
  },
  {
    language: "swift",
    code: `NextomeMapViewHandler.instance.setTileVisibility(tileId: String, show: Bool)
NextomeMapViewHandler.instance.apply()`
  }
]
}/>