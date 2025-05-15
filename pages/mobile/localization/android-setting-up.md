# Android setting up

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
                url = uri("https://packages.nextome.dev/artifactory/nextome-libs-prod/")
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
                url "https://packages.nextome.dev/artifactory/nextome-libs-prod/"
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
    filename: "build.gradle",
    language: "gradle-kotlin",
    code: `implementation ("com.nextome.localization:nextome_localization:{last_version}")`
  },
  {
    filename: "build.gradle",
    language: "gradle-groovy",
    code: `implementation 'com.nextome.localization:nextome_localization:{last_version}'`
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
    
    <!-- needed to retrieve GPS position when outdoor -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    
    <!-- needed to scan and connect to beacons -->
    <uses-permission android:name="android.permission.BLUETOOTH"
                     android:maxSdkVersion="30" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"
                     android:maxSdkVersion="30" />
    
    <uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADVERTISE" />
    
    <!-- needed for background localization -->
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />`
}/>

:::note 
    The app integrating Nextome needs to ask the appropriate permissions and make sure they are accepted by the user.
:::

## SDK Initialization
It is possible to access all the methods of Nextome using the class `NextomeLocalizationSdk`.
It requires the `application context`, the given `Client` and `Secret Key`.

:::note
    It is possible to generate or invalidate a given Client and Secret Key using our [web frontend](#retreive-client-and-secret-key).
:::

<CustomCodeBlock 
language="kotlin"
code={`nextomeSdk = NextomeLocalizationSdk(
    clientId = CLIENT_ID,
    clientSecret = CLIENT_SECRET
)`}/>

:::warning
    By default the SDK works with settings defined on the web frontend.<br></br>
    If you know what you are doing, you can override those settings as described [here](Android/settings.md).
    However, we strongly suggest to consult Nextome team before, since they can
    degrade sdk performances and cause phone battery drain.
:::

## Latest version

Latest available version is **3.0.2** released on May 14 2025

## Next steps

- See [Start Localization](/mobile/localization/basic-features) to use Nextome SDK.

## Examples

:::danger
    TODO - Le white label utilizzando ancora la vecchia implementazione della mapview. Bisogna aggiornale a quella nuova.
:::

A full working example app is available on [this repository](https://github.com/Nextome/nextome-phoenix-android-whitelabel).
Run the `MapActivity` to see Nextome Sdk in action. It also contains a seamless outdoor/indoor map integration using *OpenStreetMap* for outdoor and *Nextome Flutter Map* for indoor.
