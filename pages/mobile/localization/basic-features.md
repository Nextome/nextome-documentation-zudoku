# Basic Features

In this section you can find some basic use of the Localization SDK such as:
- Start localization
- Stop localization
- Observe the SDK status
- Observe the user position
- Observe the downloaded data
- Observe errors

## Start localization
To start localization, call:

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `nextomeSdk.start()`
  },
  {
    language: "swift",
    code: `nextomeSdk.start()`
  }
]
}/>

:::tip{title="Background Mode (Android only)"}
    On Android, Nextome can also keep track of user indoor position while the phone screen is off or the app is in background. For more info, explore the corresponding section [here](Android/background-service.md).
:::


## Stop localization
When you've done, stop the localization by calling:

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `nextomeSdk.stop()`
  },
  {
    language: "swift",
    code: `nextomeSdk.stop()`
  }
]
}/>

## Observe SDK status
It's possible to observe the current state the Nextome SDK.

You can use this data to start initializing the map or showing messages to the users and update your UI accordingly.

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `val state: Flow<NextomeSdkState> = nextomeSdk.getStateObservable()
        state.asLiveData().observe(this){ state -> 
            // Manage states
    }`
  },
  {
    language: "swift",
    code: `let observer = nextomeSdk.getStateObservable().watch { state in
        // Manage stetes
    }`
  }
]
}/>

    :::warning{title="Stop observing (iOS only)"}
        When you are no longer interested in observing the events, you must detach your listener so that your event callbacks stop getting called.
        ```swift
        observer.close()
        ```
    :::
         

### Nextome SDK State
`NextomeSdkState` is a simple state machine that can have different states:
<CenteredImage src={"/assets/flussoSDK.jpeg"} caption={"Figure 1: States flow"} />

#### IdleState
Nextome SDK has been initialized but there is no active localization service running.

#### StartedState
Nextome has been correctly initialized and started, it's ready to scan beacons;

<div style={{backgroundColor:"transparent", padding:"12px", border: "1px solid #aaaaaa", borderRadius: "12px"}}>
<Tabs defaultValue="Android">
  <TabsList>
    <TabsTrigger value="Android">Android</TabsTrigger>
    <TabsTrigger value="iOS">iOS</TabsTrigger>
  </TabsList>
  <TabsContent value="Android">
    | Property          | Description                         |
    |:------------------|:------------------------------------|
    | `isOutdoor: Bool` | Will always be `true` in this state |
  </TabsContent>
  <TabsContent value="iOS">
    | Property          | Description                         |
    |:------------------|:------------------------------------|
    | `isOutdoor: Bool` | Will always be `true` in this state |
  </TabsContent>
</Tabs>
</div>


#### SearchVenueState
Nextome is currently scanning nearby beacons to determine in which venue the user is; If the SDK is stuck here, you're probably outdoor.

<div style={{backgroundColor:"transparent", padding:"12px", border: "1px solid #aaaaaa", borderRadius: "12px"}}>
<Tabs defaultValue="Android">
  <TabsList>
    <TabsTrigger value="Android">Android</TabsTrigger>
    <TabsTrigger value="iOS">iOS</TabsTrigger>
  </TabsList>
  <TabsContent value="Android">
    | Property          | Description                         |
    |:------------------|:------------------------------------|
    | `isOutdoor: Bool` | Will always be `true` in this state |
  </TabsContent>
  <TabsContent value="iOS">
    | Property          | Description                         |
    |:------------------|:------------------------------------|
    | `isOutdoor: Bool` | Will always be `true` in this state |
  </TabsContent>
</Tabs>
</div>

#### GetPacketState
Nextome knows the venue of the user and it's downloading from the server the associated resources (Maps, POIs, Patches...);

<div style={{backgroundColor:"transparent", padding:"12px", border: "1px solid #aaaaaa", borderRadius: "12px"}}>
<Tabs defaultValue="Android">
  <TabsList>
    <TabsTrigger value="Android">Android</TabsTrigger>
    <TabsTrigger value="iOS">iOS</TabsTrigger>
  </TabsList>
  <TabsContent value="Android">
    | Property          | Description                          |
    |:------------------|:-------------------------------------|
    | `isOutdoor: Bool` | Will always be `false` in this state |
    | `venueId: Int`    | The venueId of the venue found       |
  </TabsContent>
  <TabsContent value="iOS">
    | Property          | Description                       |
    |:------------------|:----------------------------------|
    | `isOutdoor: Bool` | Will always be `false` in this state |
    | `venueId: Int32`  | The venueId of the venue found    |
  </TabsContent>
</Tabs>
</div>

#### FindFloorState
All the venue resources have been downloaded. Nextome is now computing in which floor the user is;


<div style={{backgroundColor:"transparent", padding:"12px", border: "1px solid #aaaaaa", borderRadius: "12px"}}>
<Tabs defaultValue="Android">
  <TabsList>
    <TabsTrigger value="Android">Android</TabsTrigger>
    <TabsTrigger value="iOS">iOS</TabsTrigger>
  </TabsList>
  <TabsContent value="Android">
    | Property                       | Description                                                                                                                                       |
    |:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
    | `isOutdoor: Bool`              | Will always be `false` in this state                                                                                                              |
    | `venueId: Int`                 | The venueId of the venue found                                                                                                                    |
    | `venueData: NextomeVenueData`  | Contains all the resources (beacons, pois, maps, events, path and settings) for a specific venue.                                                 |
  </TabsContent>
  <TabsContent value="iOS">
    | Property                       | Description                                                                                                                                       |
    |:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
    | `isOutdoor: Bool`              | Will always be `false` in this state                                                                                                              |
    | `venueId: Int`                 | The venueId of the venue found                                                                                                                    |
    | `venueData: NextomeVenueData`  | Contains all the resources (beacons, pois, maps, events, path and settings) for a specific venue.                                                 |
  </TabsContent>
</Tabs>
</div>



#### LocalizationRunningState

Nextome SDK is computing user positions. You can observe live user location using the observer `nextomeSdk.locationLiveData`;

<div style={{backgroundColor:"transparent", padding:"12px", border: "1px solid #aaaaaa", borderRadius: "12px"}}>
<Tabs defaultValue="Android">
  <TabsList>
    <TabsTrigger value="Android">Android</TabsTrigger>
    <TabsTrigger value="iOS">iOS</TabsTrigger>
  </TabsList>
  <TabsContent value="Android">
    | Property                      | Description                                                                                                                              |
    |:------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
    | `isOutdoor: Bool`             | Will always be `false` in this state                                                                                                     |
    | `venueId: Int`                | The venueId of the venue found                                                                                                           |
    | `venueData: NextomeVenueData` | Contains all the resources(beacons, pois, maps, events, path and settings) for a specific venue.                                         |
    | `mapId: Int`                  | Id of the map (floor) in which the user was localized                                                                                    |
    | `tileZipPath: String`         | The local path of the zip file which contains the tiles for the current map                                                              |
    | `mapHeight: Int`              | The height in pixel of the map                                                                                                           |
    | `mapWidth: Int`               | The width in pixel of the map                                                                                                            |
  </TabsContent>
  <TabsContent value="iOS">
    | Property                        | Description                                                                                                                              |
    |:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
    | `isOutdoor: Bool`               | Will always be `false` in this state                                                                                                     |
    | `venueId: Int32`                | The venueId of the venue found                                                                                                           |
    | `venueData: NextomeVenueData`   | Contains all the resources(beacons, pois, maps, events, path and settings) for a specific venue.                                         |
    | `mapId: Int32`                  | Id of the map (floor) in which the user was localized                                                                                    |
    | `tileZipPath: String`           | The local path of the zip file which contains the tiles for the current map                                                              |
    | `mapHeight: Int32`              | The height in pixel of the map                                                                                                           |
    | `mapWidth: Int32`               | The width in pixel of the map                                                                                                            |
  </TabsContent>
</Tabs>
</div>


It is possible to use `tileZipPath`, `mapHeight` and `mapWidth` to show the user a live map of the current floor.
See more on [Nextome Map integration docs](nextome-map-integration.md).

:::note
- If the user **changes floor**, the SDK will resume from `FIND_FLOOR` state.
- If the user goes **outdoor**, the SDK will switch to `SEARCH_VENUE` state until a new indoor beacon is detected.
:::

### Complete example


<MultilangCodeTab content={
[
  {
    filename: "Example: getStateObservable()",
    language: "kotlin",
    code: `nextomeSdk.getStateObservable().collect { state ->
        when (state) {
            is IdleState -> {
                showOpenStreetMap()
                updateState("Sdk is Idle")
            }
            is StartedState -> {
                showOpenStreetMap()
                updateState("Sdk Started")
            }

            is SearchVenueState -> {
                showOpenStreetMap()
                updateState("Searching Venue...")
            }

            is GetPacketState -> {
                showOpenStreetMap()
                updateState("Downloading venue \${state.venueId}...")
            }

            is FindFloorState -> {
                showOpenStreetMap()
                updateState("Finding current Floor on venue \${state.venueId}...")
            }

            is LocalizationRunningState -> {
                updateState("Showing map of floor \${state.mapId}...")
                showIndoorMap()
                setIndoorMap(state.tilesZipPath,
                    state.mapHeight,
                    state.mapWidth,
                    state.venuePackage.getPoisByMapId(state.mapId)
                )
                poiList = state.venuePackage.allPois
            }

            is ErrorState -> {
                handleError(state.exception)
            }
        }
    }`
  },
  {
    filename: "Example: getStateObservable()",
    language: "swift",
    code: `let watcher = nextomeSdk.getStateObservable().watch(){state in
        guard let state = state else {return }

        if state is IdleState{

            self.showOpenStreetMap()
            self.updateState(value: "Sdk is in Idle")

        }else if state is StartedState{

            self.showOpenStreetMap()
            self.updateState(value: "Sdk is Started")

        }else if state is SearchVenueState{

            self.showOpenStreetMap()
            self.updateState(value: "Sdk is searching for a venue")

        }else if let getPacketState = state as? GetPacketState{

            self.showOpenStreetMap()
            self.updateState(value: "Downloading venue \(getPacketState.venueId)...")

        }else if let findFloorState = state as? FindFloorState{

            self.showOpenStreetMap()
            self.updateState(value: "Finding current Floor on venue \(findFloorState.venueId)...")

        }else if let runningState = state as? LocalizationRunningState{

            self.showIndoorMap()

            var mapPois = runningState.venuePackage.getPoisByMapId(mapId: runningState.mapId)
            self.setIndoorMap(runningState.tilesZipPath,
                                runningState.mapHeight,
                                runningState.mapWidth,
                                mapPois)

            var allPois = runningState.venuePackage.allPois

        }

    }`
  }
]
}/>
    
## Observe the user position
Nextome SDK offers an observable to listen to user position updates:

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `nextomeSdk.getLocalizationObservable().collect { 
       log("Localized at (\${it.x}, \${it.y}), on venue \${it.venueId} on map \${it.mapId})") 
    }`
  },
  {
    language: "swift",
    code: `let observer = nextomeSdk.getLocalizationObservable().watch() {position in
        guard let position = position else {return}
        print("Got indoor position \(position.label ?? "-") (\(position.x), \(position.y), on map \(position.mapId) in venue \(position.venueId)")
    }`
  }
]
}/>

    :::warning{title="Closing observer (iOS only)"}
        When you are no longer interested in observing the events, you must detach your listener so that your event callbacks stop getting called.
        ```swift
        observer.close()
        ```
    :::


#### NextomePosition

<div style={{backgroundColor:"transparent", padding:"12px", border: "1px solid #aaaaaa", borderRadius: "12px"}}>
<Tabs defaultValue="Android">
  <TabsList>
    <TabsTrigger value="Android">Android</TabsTrigger>
    <TabsTrigger value="iOS">iOS</TabsTrigger>
  </TabsList>
  <TabsContent value="Android">
    | Property         | Description                                                                  |
    |:-----------------|:-----------------------------------------------------------------------------|
    | `x: Double`      | The x coordinates of the computed position.                                  |
    | `y: Double`      | The y coordinates of the computed position.                                  |
    | `venueId: Int`   | The venueId of the venue found.                                              |
    | `mapId: Int`     | The mapId (floor) of the computed position.                                  |
    | `label: String?` | A label associated with the position (see [label in additional features]()). |
  </TabsContent>
  <TabsContent value="iOS">
    | Property           | Description                                                                  |
    |:-------------------|:-----------------------------------------------------------------------------|
    | `x: Double`        | The x coordinates of the computed position.                                  |
    | `y: Double`        | The y coordinates of the computed position.                                  |
    | `venueId: Int32`   | The venueId of the venue found.                                              |
    | `mapId: Int32`     | The mapId (floor) of the computed position.                                  |
    | `label: String?`   | A label associated with the position (see [label in additional features]()). |
  </TabsContent>
</Tabs>
</div>

## Observe the downloaded data
Nextome SDK offers an observable to listen when venue data has been downloaded.
In same scenario you are located far from the beacons and the indoor localization can't be done, but you need to know the venue data.
If indoor localization is running, the venue data is provided by LocalizationRunningState, while outdoor instead, GPS scanner is running and searching for nearest venue.
When nearest venue is found, it download the venue data the observer return the results.

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `lifecycleScope.launch {
    viewModel.nextomeSdk.getDownloadedVenueDataObservable().collect {
      Log.i(TAG, "Downloaded data \${it}")
    }
  }`
  },
  {
    language: "swift",
    code: `nextomeSdk.getDownloadedVenueDataObservable().watch(block: { venueData in
    print("Downloaded data is \(venueData)")
  })`
  }
]
}/>

    :::warning{title="Downloaded data"}
      The downloaded data is based on the GPS position. If indoor localization is determined first, the downloaded data observer will not be triggered, as a venue has already been found.
      If beacon-based localization is lost, the system will resume scanning for nearby venues using both beacon detection and GPS.
      Once a venue is found via GPS, the GPS search is paused until the localization state returns to SearchVenueState.
    :::

## Observe errors
Nextome SDK uses different types of exceptions to report errors:

| Exception Type               | Description                                                                                                                  |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| `GenericException`           | A generic error happened. The SDK will continue to work normally.                                                            |
| `InvalidCredentialException` | Nextome SDK was started with invalid credentials. Create a new instance of Nextome SDK with valid credentials and try again. |
| `Critical Exception`         | Nextome encountered a critical exception. It is necessary to start a new session to start localization again.                |

It is possible to observe errors using `getErrorsObservable()`:

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `nextomeSdk.getErrorsObservable().collect { error ->
        Log.e(TAG, "New error received: \${error.message}")

        when (error) {
            is NextomeException.GenericException -> {
                showMessageEvent(message = error.message)
            }

            is NextomeException.InvalidCredentialException -> {
                logOutAndShowLoginScreen()
            }

            is NextomeException.CriticalException -> {
                showMessageEvent(message = error.message)
                // Need to restart sdk
            }
        }
    }`
  },
  {
    language: "swift",
    code: `let errorWatcher = nextomeSdk.getErrorsObservable().watch(block: {error in
        guard let error = error else{
            return
        }
        if error is InvalidCredentialException{
            self.logoutAndShowLoginScreen()
        }else if error is CriticalException{
            self.showMessageEvent(message: error.message)
            //Need to restart sdk
        }else if error is GenericException {
            self.showMessageEvent(message: error.message)
        }
    })
    watchers.append(errorWatcher)`
  }
]
}/>

## Next steps

- Visit [Background-service](Android/background-service.md) to learn how to use the SDK even when the app is not opened in the foreground.

- Visit [Nextome map integration](nextome-map-integration.md) if you want to use our library to display the indoor map.

## Examples

A full working example app is available on [iOS](https://github.com/Nextome/nextome-phoenix-iOS-whitelabel) and [android](https://github.com/Nextome/nextome-phoenix-android-whitelabel).
Run the `MapActivity` to see Nextome Sdk in action. It also contains a seamless outdoor/indoor map integration using *OpenStreetMap* for outdoor and *Nextome Flutter Map* for indoor.