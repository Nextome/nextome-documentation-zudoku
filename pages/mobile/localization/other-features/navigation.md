# Navigation

:::note
    A path with the map graph should be defined using Nextome Web Frontend before using this feature.
:::

Nextome Sdk is able to calculate the shortest path between two points of the same venue.

The function takes (x, y) coordinates and map of the starting point and (x, y) coordinates and map of the destination point.

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `val path = nextomeSdk.findPath(
            startX.toInt(), startY.toInt(), startMapId,
            targetX.toInt(), targetY.toInt(), targetMapId)`
  },
  {
    language: "swift",
    code: `nextomeSdk.findPath(venueId: venueId, sourceX: startX,
            sourceY: startY, sourceMap: startMapId,
            destX: targetX, destY: targetY, destMap: targetMapId,
            completionHandler: {path, error in
                guard error == nil else { return }
                guard let path = path else{ return }
            })`
  }
]
}/>

The returned path is a list of ordered Vertex, that, for example, can be passed to the Flutter Map Module and displayed to the user (see the methods written below).

<CenteredImage src={"/assets/navigation_android.png"} caption={"Figure 1: Navigation Example"} />