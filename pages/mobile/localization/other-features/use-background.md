# Background service (Android only)

:::warning
    This is available on **Android only**, using Foreground Services. **The iOS SDK not provide a background functionality**. 
:::

On Android, it is possible to run Nextome SDK as a foreground service.
Nextome SDK will continue running even if the hosting app is in background or closed.

## Start foreground service
To start Nextome SDK with a Foreground Service, use the following code **instead of** `nextomeSdk.start()`

<CustomCodeBlock 
language="kotlin"
code={`nextomeSdk.startWithBackgroundService(serviceCode, NMNotification())`}/>

### Customize ongoing notification
Android requires an ongoing notification to notify the user of running foreground services.
It is possible to customize Nextome's notification calling `startWithBackgroundService` with a custom `NMNotification`

<CustomCodeBlock 
language="kotlin"
code={`val notification = NMNotification(
            title = "Scanning for Beacons",
            description = "Nextome Service is running...",
            icon = R.drawable.ic_outline_location_on_24,
            channelId = "com.nextome.localization.service",
            channelName = "Localization Notifications")

    nextomeSdk.startWithBackgroundService(42, notification)`}/>

<CenteredImage src={"/assets/foreground_service_notification.png"} caption={"Figure 1: Foreground notification"} />

## Stop foreground service
To stop Nextome's foreground service, use

<CustomCodeBlock 
language="kotlin"
code={`nextomeSdk.stopBackgroundService(context)`}/>

## Get service state
It is possible to query or observe Nextome service state to be notified when the service starts or stops.

### Query state
Will return true if Nextome is running either in normal mode or with a foreground service.

<CustomCodeBlock 
language="kotlin"
code={`val isServiceRunning = NextomeLocalizationSdk.isRunning()`}/>

### Observe state
Will emit true **only** if Nextome is running with a foreground service.
It this emits false, Nextome could be still running if started in normal mode with `nextomeSdk.start()`.

<CustomCodeBlock 
language="kotlin"
code={`NextomeLocalizationSdk.isBackgroundServiceRunningObservable(context).collect { running ->
        Log.e(TAG, "Nextome running in background: $running")
    }`}/>

### Example
For example, if at app start Nextome is already running in background, it is possible to skip calling `start()`.
It is in fact safe to reattach all the observers and start receiving localization data again from the service.

In this case, if Nextome is already running in background, the app will receive positions as soon as it is started,
because Nextome SDK will skip the initial state machine phases (Searching venue, getting packet, finding floor...).

<CustomCodeBlock 
language="kotlin"
code={`override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

        if (!NextomeLocalizationSdk.isRunning()) {
            // Nextome needs to start from the beginning.
            // Emitted states will be SEARCHING -> GET_PACKET -> FINDING_FLOOR ...
            startNextomeSdk()
        } else {
            // Nextome is already in LOCALIZATION state and ready to emit positions.
            // No need to start from the beginning
        }

        
        nextomeSdk.getLocalizationObservable().collect {
            lastPosition = it
        }
    }`}/>