# Lähimatkailu

Source repository of Lähimatkailu project. License is MIT.

### Build and install project:

To install you need to have Node installed (https://nodejs.org). This project was built with 8.9.4. LTS. In addition, installation will not succeed with npm version 5.X.X Instead, you need to have version 4.X.X installed. If you need to downgrade the version, use the following command:

$ npm install -g npm@4

Install the React Native command line interface:

npm install -g react-native-cli

#### Install project:

$ git clone https://github.com/marklaatikainen/lahimatkailu.git

$ cd lahimatkailu

$ npm install

#### Installing and running the app on a phone or emulator

To run the app (install it on a phone or emulator), you will need to have the Android SDK installed. You can either install Android Studio (that comes with the SDK and is also equipped with an emulator) or install the SDK separately (see https://www.androidauthority.com/how-to-install-android-sdk-software-development-kit-21137/). If you install Android Studio, you will also need to run it in order to install the SDK (Android Studio will run a setup the first time you run it). You will also need to accept licenses for Android SDK Platform and Build-Tools. This can be done with the sdkmanager (which is typically in a directory like C:\Users\Username\AppData\Local\Android\sdk\tools\bin) by running the sdkmanager with the option --licences: 

$ sdkmanager --licenses.

Note that, in Windows, you may need to specify the location of the SDK with an environment variable. Add the environment variable ANDROID_HOME with the value of the path where the SDK is located (the default path is usually C:\Users\Username\AppData\Local\Android\Sdk). 

To install and run a debug version of the app on a phone or an emulator (see https://facebook.github.io/react-native/docs/getting-started.html for installing the emulator), use: 

$ react-native run-android

Note that when installing on a phone, the phone has to be connected by USB, and USB-debugging needs to be enabled in the phone's developer options.

For installing a release version use:

$ react-native run-android --variant=release

##### Troubleshooting

You may get some errors when trying to install the app. You may need to clean the android build directory by issuing the following command:

$ cd android && gradlew clean && cd ..

You may also need to reset the npm cache by using:

$ npm start -- --reset-cache

If your device is not found, you may need to add the location of Android Debug Bridge (adb) in the PATH environment variable (..\Android-Sdk-directory\platform-tools). In addition, you might need to install an Android USB Device Driver on your OS (see e.g.  https://software.intel.com/en-us/xdk/docs/installing-android-debug-bridge-adb-usb-driver-on-windows for installing it on Windows. The Intel driver works also on non-Intel phones).

Note that you may also need to restart your terminal and/or your OS before some of the above mentioned changes take effect.
