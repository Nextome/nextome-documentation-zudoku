# Android setting up

## Prerequisites
- Your project has min SDK version >= 24;
- Have working credentials for our Artifactory repository;

:::note{title="Get credentials"}
    
    For **Artifactory credentials** refer here [Get our SDKs](/mobile/aboutmobilesdks/introduction#get-our-sdks) for more informations.
 
:::

### How to include

1. Add our repositories in the Gradle Project Settings `settings.gradle.kts`:

   === "Groovy"
   ``` groovy title="settings.gradle"

        dependencyResolutionManagement {
            repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
            repositories {
                ...

                google()
                mavenCentral()
                maven { 
                    url "https://storage.googleapis.com/download.flutter.io"
                }
                maven {
                    url "https://packages.nextome.dev/artifactory/nextome-libs-prod/"

                    credentials {
                        username "USERNAME"
                        password "PASSWORD"
                    }
                }
            }
        }
        ```
   === "KTS"
   ``` kotlin title="settings.gradle.kts"

        dependencyResolutionManagement {
            repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
            repositories {
                ...

                google()
                mavenCentral()
                maven { 
                    url = uri("https://storage.googleapis.com/download.flutter.io") 
                }
                maven {
                    url = uri("https://packages.nextome.dev/artifactory/nextome-libs-prod/")

                    credentials {
                        username = "USERNAME"
                        password = "PASSWORD"
                    }
                }
            }
        }
        ```

2. In your module (app-level) Gradle file, add the dependency for the NextomeMapView:

   === "Groovy"

        ``` groovy title="project/build.gradle"
        implementation 'com.nextome.nextomemapview:nextomemapview:{last_version}'
        ```

   === "KTS"

        ``` kotlin title="project/build.gradle.kts"
        implementation ("com.nextome.nextomemapview:nextomemapview:{last_version}")
        ```
   Check latest released version [here](/docs/Nextome%20SDK/Android/changelog.md)

### Required permissions
To run, NextomeMapView requires the following permissions:
```xml title="AndroidManifest.xml"
    <!-- needed for map file usage -->
    <uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
```

### Next steps

- See [Map-usage](./Usage/initialize.md) to use Nextome MapView component.
