# Eclipse Settings UI Prototype

Modern, dark-themed Settings screen for Eclipse OS / ePhone, modeled on the familiar Apple and Samsung pattern with Eclipse’s own personality.

## File structure

- `index.html` — Main markup and screen structure
- `styles.css` — Custom styles (toggles, transitions, husky sizing, etc.)
- `script.js` — All navigation, search filtering, and interactive logic

Built with HTML, Tailwind CSS (CDN), and vanilla JavaScript. No build step required.

## Features

- **Modern UI** — Dark Eclipse theme, rounded cards, purple accents, clean typography, and subtle interactions.
- **Easy Navigation** — Sticky search, large profile shortcut, back buttons on every sub-screen, and one-tap category rows.
- **Responsive Design** — Mobile-first layout that works on phones and scales cleanly on larger screens (max-width container).
- **Fully usable prototype** — All sections are interactive with toggles, status displays, search filtering, and navigation.

## Sections implemented

- Main screen: search → profile card → divider → ordered list (Connections, Data, Personalize, Software, Phone, Profile, Apps, Assistant, Security and Privacy, About)
- Connections (Wi-Fi with networks, Bluetooth, Hotspot, Airplane Mode, VPN)
- Data (usage bar + per-app list)
- Personalize (themes and signature options)
- Software, Phone, Profile, Apps, Assistant (with permissions), Security and Privacy, About

## How to view

1. Open the repository on GitHub.
2. Click `index.html`.
3. Click the **Raw** button, or better: enable GitHub Pages (Settings → Pages → Deploy from branch `main` / root) for a live demo at `https://glitchplays1.github.io/eclipse-settings-ui/`.

## Notes

This is a visual and interaction prototype. Privileged app considerations, intent handling, and Android system-service integration are architectural. Factory reset, password flows, and the assistant body are stubbed with the required warnings and structure.

## Build order (from design)

1. Shell + search  
2. Connections, Data, Phone, Security, Software  
3. Personalize and signature screens  

## License

Prototype for Eclipse project use.