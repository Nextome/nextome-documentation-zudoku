# The two solutions and the tools

:::warning{title="Prerequisites"}
    It is recommended to read this document before the others to get an overview of the main Nextome technologies and choose the one that best suits your use case.
:::
## The two solutions
The Nextome Indoor localization system is based on **Bluetooth technology** and consist of **two main solutions**:

- **Smartphone tracking** --> which allows the localization of the smartphone on which an application is installed.
- **Tag tracking** --> which enables the localization of small battery-powered tags.

### Smartphone tracking
<SmartphoneTrackingPill/>

To calculate the position of a smartphone, it's necessary to install a mobile app on it that integrates the Nextome localization **SDK**. Thanks to this SDK, the smartphone can calculate its own position by processing the Bluetooth signals present in the environment. The signals considered by the localization app will only be those coming from the Beacons installed in the environment and registered within the Nextome Hub as **reference anchor Beacons**.

<CenteredImage src={"/assets/Technologies and tools/1.png"} caption={"Figure 1: Smartphone tracking architecture"} />

### Tag tracking
<TagTrackingPill/>

To calculate the position of an object or a person, it's possible to associate a battery-powered Bluetooth **tag** with it. The Bluetooth signals transmitted by the tag will be detected by Bluetooth antennas (**gateways**) installed in the environment. These signals will be processed by the server to determine the position of the tag relative to the map of the environment it is in. The signals considered by the calculation engine will only be those transmitted and detected by the tags and gateways registered within the Nextome Hub.

<CenteredImage src={"/assets/Technologies and tools/2.png"} caption={"Figure 2: Tag tracking architecture"} />

## The tools 
This section will introduce the tools that allow interfacing with the Nextome Hub, providing the ability to utilize the solutions described above.

<CenteredImage src={"/assets/Technologies and tools/3.png"} caption={"Figure 3: Overview tools"} />

### Nextome Hub
<SmartphoneTrackingPill/><TagTrackingPill/>

The Nextome Hub is the core of the Nextome system, housing the localization engine, all the necessary information for calculation, and the history of calculated data where required.

### The interfaces
To interface with the Nextome Hub, you can use the Nextome Hub Web and the Venue Configurator App. These have been developed with a user-friendly interface by the Nextome team. Alternatively, you can directly use the Hub API calls that allow integrating all functionalities into other systems.

#### Nextome Hub web
<SmartphoneTrackingPill/><TagTrackingPill/>

The Nextome Hub Web is a web portal that allows:

- Management of maps and all the resources necessary for the operation of the solutions.
- Monitoring the status of the hardware installed in the environment.
- Visualization of calculated positions.

#### Venue Configurator App
<SmartphoneTrackingPill/><TagTrackingPill/>

The Venue Configurator is a smartphone app that allows for the easy registration of hardware installed in the environment. It is also possible to register hardware through the Nextome Hub Web. However, the Venue Configurator simplifies and expedites the process, offering additional installation verification capabilities by leveraging the smartphone's scanner functionality.

#### Hub APIs
<SmartphoneTrackingPill/><TagTrackingPill/>

REST APIs that allow you to perform all the necessary configuration operations to make the solutions work and to download calculated positions (functionalities also available in the Nextome Hub Web and the Venue Configurator App).

### The services

#### White label mobile App
<SmartphoneTrackingPill/>

The white label mobile app 'Nextome Indoor Positioning app' is available on both the Android and Apple stores and is ready for use. This app allows users to visualize their position on a map and utilize all the associated services, such as navigating to points of interest or receiving notifications when approaching specific geo-fenced areas. Prior to using the app, it's necessary to activate a license with Nextome, upload the map to the Nextome Hub Web to configure the system, and install and register the Beacons.

This mobile app contains the Nextome SDK and the Map View component, both of which can be integrated by third parties into other mobile apps.

##### SDK
Nextome provides an SDK that can be integrated into native applications (Android, iOS), enabling the functionality of smartphone localization for devices where it's installed.


##### Map view

The Map View is an integrable component for native applications (Android, iOS) that provides the capability to display two-dimensional environment represented by maps, such as floor plans. On these maps, it's possible to visualize "customizable" additional information like markers, paths, and polygons (or shapes). Specifically, markers are images uploaded by the user that can represent specific point-based information, such as a Point of Interest (POI).





