# Basic Features

In this section you can find some basic use of the Priximity SDK such as:
- Start proximity service
- Stop proximity service
- Observe triggered interaction events
- Get observed venues

## Start proximity service
To start Proximity, call:

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `val venues: List<Int> = listOf(YOUR_VENUE_ID_1, YOUR_VENUE_ID_2)
    NextomeProximitySdk.instance.startService(venues) {
        // Service started
    }`
  },
  {
    language: "swift",
    code: `let venues: [KotlinInt] = [YOUR_VENUE_ID_1, YOUR_VENUE_ID_2] 
    NextomeProximitySdk.shared.instance.startService(venues: venues){
        // Service started
    }`
  }
]
}/>

The  ```startService ``` method accept a list of integers that represent the venues id where you want to start the proximity service. After service is started, a callback will be returned. 

:::warning{title="Background Mode"}
    The proximity service *start* process must be called when application is in foreground mode.
:::

## Stop proximity
When you want to stop proximity service, call:

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `NextomeProximitySdk.instance.stopService {
        // Service stopped
    }`
  },
  {
    language: "swift",
    code: `NextomeProximitySdk.shared.instance.stopService(){
        // Service stopped
    }`
  }
]
}/>

    :::warning{title="Background Mode"}
        The proximity service will be stopped on all venues where proximity services has been started.
    :::

## Observe for interaction trigger event
It's possible to observe when an interaction has been fired by the Proximity SDK.
Visit [Interaction](./interaction.md) to know more about interaction object.

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `val state: Flow<NextomeSdkState> = nextomeSdk.getStateObservable()
    yourScope.launch {
        NextomeProximitySdk.instance.getInteractionsObservables()?.collect {
            // The interaction is fired by the SDK. Do something.      
            var interaction: NextomeInteraction = it          
        }
    }`
  },
  {
    language: "swift",
    code: `NextomeProximitySdk.shared.instance.getInteractionsObservables().watch(block: { interaction in
        // The interaction is fired by the SDK. Do something. 
    })`
  }
]
}/>

    :::tip{title="Observeble into a scope (Android only)"}
        To avoid concurrency problem, ```getInteractionsObservables``` method need to live inside a coroutine scope.
    :::

    :::warning{title="Observeble at application start (Android only)"}
        Is strongly recommanded to call this method at **Application.onCreate** method as shown at [Getting Started](/mobile/proximity/android-setting-up#sdk-initialization) section to be sure that a Enter/Exit region event can be correctly dispatched by operative system to the application.
    :::


## Get observed venues
It's possible get a list of venues id where proximity service is on. That's is hopeful when you open the application again after service has been started. This method allow you to know which venues, so which interactions, the application is listening for.

<MultilangCodeTab content={
[
  {
    language: "kotlin",
    code: `val observed: List<Int> = NextomeProximitySdk.instance.getObservedVenues()`
  },
  {
    language: "swift",
    code: `var observed: [Int] = []
    NextomeProximitySdk.shared.instance.getObservedVenues().forEach{ venueId in
        observed.append(venueId.intValue)
    }`
  }
]
}/>