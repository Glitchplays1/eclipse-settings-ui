# Eclipse Settings UI Prototype

Modern, dark-themed Settings screen for Eclipse OS / ePhone, modeled on the familiar Apple and Samsung pattern with Eclipse’s own personality.

## Features

- **Modern UI** — Dark Eclipse theme, rounded cards, purple accents, clean typography, and subtle interactions.
- **Easy Navigation** — Sticky search, large profile shortcut, back buttons on every sub-screen, and one-tap category rows.
- **Responsive Design** — Mobile-first layout that works on phones and scales cleanly on larger screens (max-width container).
- **Fully usable prototype** — All sections are interactive with toggles, status displays, search filtering, and navigation.
- **Built with** HTML, Tailwind CSS (CDN), and vanilla JavaScript.

## Sections implemented

- Main screen: search → profile card → divider → ordered list (Connections, Data, Personalize, Software, Phone, Profile, Apps, Assistant, Security and Privacy, About)
- Connections (Wi-Fi, Bluetooth, hotspot, airplane mode toggle, VPN with live status)
- Data (mobile data toggle, usage bar, limits)
- Personalize (signature options near the top)
- Software (factory reset with confirmation note, updates, backup, developer options)
- Phone (display/sound, date/time, language, shortcuts, power, updates)
- Profile (accounts, password options — password never shown)
- Apps (empty state with husky placeholder)
- Assistant (on/off, start methods, permissions, memory, voice, model)
- Security and Privacy (lock screen, Defender, dashboard)
- About (device info, credits, licenses)

## How to view

1. Open the repository on GitHub.
2. Click `index.html`.
3. Click the **Raw** button, or better: enable GitHub Pages (Settings → Pages → Deploy from branch `main` / root) for a live demo at `https://glitchplays1.github.io/eclipse-settings-ui/`.

No build step required. Just open in any modern browser.

## Notes

This is a visual and interaction prototype. Privileged app considerations, intent handling, and Android system-service integration are architectural. Factory reset, password flows, and the assistant body are stubbed with the required warnings and structure.

## Build order (from design)

1. Shell + search  
2. Connections, Data, Phone, Security, Software  
3. Personalize and signature screens  

## License

Prototype for Eclipse project use.