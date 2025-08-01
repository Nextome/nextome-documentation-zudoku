# iOS setting up

A full working example app is available on [this repository](https://github.com/Nextome/nextome-phoenix-iOS-whitelabel). Run to see Nextome Sdk in action. It also contains a seamless outdoor/indoor map integration using OpenStreetMap for outdoor and Nextome Flutter Map for indoor.

## Prerequisites

- Xcode 15.0
- Make sure that your project meets these requirements: 
    - Swift 5.7
    - Minimum deployment: iOS 13.2
- Have working credentials for our Artifactory repository;
- Have working credentials for start SDKs services;

:::note{title="Get credentials"}
    
    For **Artifactory credentials** refer here [Get our SDKs](/mobile/aboutmobilesdks/introduction#get-our-sdks) for more informations.

    For **SDK initializations** refer here [Work with our SDKs](/mobile/aboutmobilesdks/introduction#work-with-our-sdks) for more informations.

:::

:::warning
    The Nextome Localizaition is build with XCode command line **15.2** but can be integrated in an XCode 16+ project
:::

## How to include

### Cocoapods

Nextome Localization is distributed with [Cocoapods](https://guides.cocoapods.org/) using our Podspec repo. Be sure to have CocoaPods installed, or follow [this guide](https://guides.cocoapods.org/using/getting-started.html) to install it.

Then it is necessary to configure our Spec Repo.

1. Add credentials  in the netrc file

    ``` bash 
    nano ~/.netrc
    ```
    Copy this then close and save

    ```
    machine packages.nextome.dev
    login <USERNAME>
    password <PASSWORD>
    ```


    :::note
        If you get an error of this type: "Permission bits, should be 0600, but are 644"
        
        Run this command: 

        `chmod 0600 ~/.netrc`
    :::
     
2. Create a Podfile if you don't already have one. From the root of your project directory, run the following command

    ```bash
    pod init
    ```

6. To your Podfile, be sure that the platform is at least 13.2 then add the CocoaPods specs source and our Nextome source. Then add the NextomeLocalization pod

    ```
    platform :ios, '13.2'

    source 'https://github.com/CocoaPods/Specs.git'
    source 'https://github.com/Nextome/Specs'

    use_frameworks!

    target 'MyApp' do
        pod 'NextomeLocalization'
    end
    ```
    
    :::note
        If you want to use a specified SDK the version, explicitly it like this
        ```swift
            pod 'NextomeLocalization', '{latest_version}'
        ```
        See latest version at bottom of this page in the section **Latest version**
    :::

7. Install the pods, then open your .xcworkspace file to see the project in Xcode

    ```bash
    pod install
    ```

8. Open your `xcworkspace` file


## Setup

In order to work properly the SDK requires to setup some permissions and capabilities:

### Add Background capabilities
If your app needs to compute the position even if it is in background, it is required to add the background capability.

1. Select your project in Xcode’s Project navigator.
2. Select the app’s target in the Targets list.
3. Click the Signing & Capabilities tab in the project editor.
4. Add the background capability

    ![Add Capability](/assets/addCapabilities.png)

5. Add background processing and Location Updates

    ![Background capability](/assets/backroundCapability.png)

 
### Add permissions

Add these permissions in the `info.plist`:

1. Privacy - Location Always and When In Use Usage Description
2. Privacy - Location Always Usage Description
3. Privacy - Location When In Use Usage Description

## SDK Initialization
Firsty import the Nextome Localization SDK Module

<CustomCodeBlock 
language="swift"
code={`import NextomeLocalization`}/>


Then initialize the NextomeLocalizationSdk.

It requires the given `Client` and `Secret Key`.

<CustomCodeBlock 
language="swift"
code={`let nextomeSdk = NextomeLocalizationSdk.Builder(
    clientId: CLIENT_ID, 
    clientSecret: CLIENT_SECRET).build()`
}/>


:::note
    By default the SDK works with settings defined in the web portal.
    The NextomeLocalizationSdk.Builder allows to override some of those as described in the next sections.
    But please notice that this operation is extremely dangerous and should only be made in accordance with the Nextome Team because has an huge impact on the localization's performance.
:::

## Latest version

Latest available version is **3.0.2** released on May 14 2025

## Examples
A full working example app is available on [this repository](https://github.com/Nextome/nextome-phoenix-iOS-whitelabel).

## Next steps
- See [Start Localization](/mobile/localization/basic-features) to use Nextome SDK.
