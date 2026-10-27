# Eclipse Settings — Android APK

This folder contains a minimal Android project that wraps the Settings UI in a WebView so it runs as a real app on phones.

## Features
- Fullscreen immersive mode (feels like a system settings app)
- Back button navigates inside the settings screens
- Loads the HTML/CSS/JS from assets

## How to build the APK

1. Install **Android Studio** (free from developer.android.com).
2. Copy the entire `android/` folder into a new Android Studio project, **or** create a new Empty Activity project and replace the files:
   - `app/src/main/java/com/eclipse/settings/MainActivity.java`
   - `app/src/main/AndroidManifest.xml`
3. Put these files into `app/src/main/assets/`:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `logo.jpg` (if you have it)
4. Open the project in Android Studio.
5. Build → Build Bundle(s) / APK(s) → Build APK(s).
6. The APK appears in `app/build/outputs/apk/debug/`.

## Notes
- This is a regular app, not a privileged system Settings replacement. For a true system Settings app you need a platform-signed privileged app (custom ROM or root).
- For a production feel, add a proper app icon and sign the release APK.
- Internet permission is included so Tailwind/Font Awesome CDNs load. You can also vendor those files locally.

## Quick test
After installing the APK, open **Eclipse Settings**. It should look and behave like the web prototype, with phone-style back navigation.