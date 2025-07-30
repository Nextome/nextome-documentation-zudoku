# Destroy the Map View

With this operation you can dispose all resources of the NextomeMapView.
This operation kill the Flutter Engine too.

When use this?
- When you need to change map resources such us different tiles
- When you no longer need to use the map in your application

:::danger
The destroy operation is a delicate operation that can compromise the stability of the application causing unexpected crashes. 
Be careful how you destroy and create resources. 
:::

## Android

<CustomCodeBlock 
language="kotlin"
code={`
// Declare the map fragment at the top of you script
private var mapFragment: Fragment? = null

...

// During the map initialization, save the fragment instance 
mapFragment = viewModel.mapManager.flutterMap.initialize(
        fragmentManager = supportFragmentManager,
        viewId = R.id.indoor_map,
        context = this
    )

...

// When you want to destroy it, run this
if(mapFragment != null) {
    supportFragmentManager.beginTransaction().remove(mapFragment!!).commit()
    mapFragment = null
}
    

`}/>

## iOS

<CustomCodeBlock 
language="swift"
code={`  // The creation and initialization of the MapView
    NextomeMapViewHandler.instance.initialize(onReady: {
        var vc = NextomeMapViewHandler.instance.initializeFlutterViewController()
        self.present(vc, animated: true)
        ...
    })
    
    // To destroy just call this
    // The parameter "vc: self" if the controller where the MapView has been created. 
    NextomeMapViewHandler.instance.destry(vc: self, onDestroyed: {
        // All resources has been destoryed. You can re-initialize map view here.
    })
    
    `}/>