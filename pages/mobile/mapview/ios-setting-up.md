# iOS setting up

## Prerequisites

- Xcode 15.3
- Make sure that your project meets these requirements:
   - Swift 5.7
   - Minimum deployment: iOS 13.2
- Have working credentials for our Artifactory repository

:::note{title="Get credentials"}
    
    For **Artifactory credentials** refer here [Get our SDKs](/mobile/aboutmobilesdks/introduction#get-our-sdks) for more informations.
 
:::

## How to include

NextomeMapView is distributed with [Cocoapods](https://guides.cocoapods.org/) and artifactory. Be sure to have CocoaPods installed, or follow [this guide](https://guides.cocoapods.org/using/getting-started.html) to install it.

Then it is necessary to configure our private Spec Repo.

1. Add artifactory credentials in the netrc file

    ``` bash 
    nano ~/.netrc
    ```
   Copy this then close and save

    ```
    machine packages.nextome.dev
    login <USERNAME>
    password <ENCRYPTED-PASSWORD>
    ```

    :::node
        If you get an error of this type: "Permission bits, should be 0600, but are 644"
        Run this command: `chmod 0600 ~/.netrc`
    :::

2. Create a Podfile if you don't already have one. From the root of your project directory, run the following command
    ``` bash 
    pod init
    ```

3. To your Podfile, be sure that the platform is at least 13.2 then add the CocoaPods specs source and our Nextome source. Then add the NextomeMapView_Environment pod where Environment can be can be Release or Debug.


    ```bash
    platform :ios, '13.2'

    source 'https://github.com/CocoaPods/Specs.git'
    source 'https://github.com/Nextome/Specs'

    use_frameworks!

    target 'MyApp' do
        pod 'NextomeMapView_Release', '{last_version}'
    end
    ```
    :::note
        See latest version at bottom of this page in the section **Latest version**
    :::

    :::warning
        The **Release** dependency will not work properly in the simulator. The app will compile but the map will not be visible
    :::

5. Install the pods, then open your .xcworkspace file to see the project in Xcode

    ```bash
    pod install
    ```

6. Open your `xcworkspace` file and start to use NextomeMapView

## Latest version

Latest available version is **2.0.23.1** released on Apr 09 2025

### Next steps

- See [Map-usage](/mobile/mapview/usage/controller) to use Nextome MapView component.