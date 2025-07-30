# Android setting up

:::danger
    TODO Creare ed aggiungere una white label
:::

## Prerequisites
- Your project has min SDK version >= 24;
- Have working credentials for our Artifactory repository;
- Have working credentials for start SDKs services;

:::note{title="Get credentials"}
    
    For **Artifactory credentials** refer here [Get our SDKs](/mobile/aboutmobilesdks/introduction#get-our-sdks) for more informations.

    For **SDK initializations** refer here [Work with our SDKs](/mobile/aboutmobilesdks/introduction#work-with-our-sdks) for more informations.
    
:::

## How to include

1. Add our repositories in the Gradle Project Settings `settings.gradle.kts`:

<MultilangCodeTab content={
[
  {
    filename: "settings.gradle.kts",
    language: "gradle-kotlin",
    code: `dependencyResolutionManagement {
            repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
            repositories {
                ...

                google()
                mavenCentral()
                maven {
                    url "https://packages.nextome.dev/artifactory/nextome-sdk-experimental-android-local/"

                    credentials {
                        username = "USERNAME"
                        password = "PASSWORD"
                    }
                }
            }
        }`
  },
  {
    filename: "settings.gradle",
    language: "gradle-groovy",
    code: `dependencyResolutionManagement {
            repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
            repositories {
                ...

                google()
                mavenCentral()
                maven {
                    url "https://packages.nextome.dev/artifactory/nextome-sdk-experimental-android-local/"

                    credentials {
                        username "USERNAME"
                        password "PASSWORD"
                    }
                }
            }
        }`
  }
]
}/>


2. In your module (app-level) Gradle file, add the dependency for the SDK:

<MultilangCodeTab content={
[
  {
    filename: "build.gadle",
    language: "gradle-kotlin",
    code: `implementation ("com.nextome:nextome_proximity:{last_version}")`
  },
  {
    filename: "build.gradle",
    language: "gradle-groovy",
    code: `implementation 'com.nextome:nextome_proximity:{last_version}'`
  }
]
}/>

    :::note
        See latest version at bottom of this page in the section **Latest version**
    :::

## Required permissions
To run, Nextome SDK requires the following permissions:

<CustomCodeBlock 
filename="AndroidManifest.kt"
language="xml"
code={`
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <!-- needed to scan and connect to beacons -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADVERTISE" />
    <uses-permission android:name="android.permission.BLUETOOTH" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />

    <!-- needed for background monitoring -->
    <uses-permission android:name="android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS" />
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_LOCATION" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_DATA_SYNC" />`
}/>

:::note 
    The app integrating Nextome needs to ask the appropriate permissions and make sure they are accepted by the user.
    If permissions are not granted, the SDK will not works properly.
:::

## SDK Initialization
It is possible to access all the methods of Nextome using the class `NextomeProximitySdk`.
It requires the `application context`, the given `Client` and `Secret Key`.

:::note
    It is possible to generate or invalidate a given Client and Secret Key using our [web frontend](#retreive-client-and-secret-key).
:::

Initialize the Nextome Proximity SDK inside ```onCreate``` method on your **Application** class like below.
Do that inside ```onCreate``` method of Application allows the application to register correctly the listener of beacons and call deletage methods on the wake up of the application
if it has been killed.

:::note{title="AndoidManifest.xml"}
    It is very important to initialize the SDK inside **onCreate** method of the **Application** extended class and not in an Activity or an AppCompatActivity extension.
    Also assign if not is assigned yet, the attribe **android:name** at application tag of your AndroidManifest.xml with your application name.
    ```xml
        <application
            ...
            android:name=".DemoProximityApplication"
            ...
    ```
:::

<CustomCodeBlock 
language="kotlin"
code={`...
import com.nextome.proximity.NextomeProximitySdk
import com.nextome.sdk.androidproximityapp.DiModules.appModule
...

class DemoProximityApplication: Application() {
    override fun onCreate(){
        ...
        NextomeProximitySdk.instance.initialize(CLIENT_ID, CLIENT_SECRET)
        GlobalScope.launch {
            NextomeProximitySdk.instance.getInteractionsObservables()?.collect {
                var interaction: NextomeInteraction = it
                // Do something with interaction like sending an in-app notification to the user with interaction data
            }
        }
        ...
    }
}`
}/>

## Latest version

Latest available version is **1.0.3** released on May 14 2025

## Next steps

- See [Start Proximity](/mobile/proximity/basic-features) to use Nextome Proximity SDK.
