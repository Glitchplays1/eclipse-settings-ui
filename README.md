# Eclipse Settings UI Prototype

Modern, dark-themed Settings screen for Eclipse OS / ePhone, modeled on the familiar Apple and Samsung pattern with Eclipse’s own personality.

## Features

- **Modern UI** — Dark Eclipse theme, rounded cards, purple accents, clean typography, and subtle interactions.
- **Easy Navigation** — Sticky search, large profile shortcut, back buttons on every sub-screen, and one-tap category rows.
- **Responsive Design** — Mobile-first layout that works on phones and scales cleanly on larger screens (max-width container).
- **Built with** HTML, Tailwind CSS (CDN), and vanilla JavaScript.

## Sections implemented

- Main screen: search → profile card → divider → ordered list (Connections, Data, Personalize, Software, Phone, Profile, Apps, Assistant, Security and Privacy, About)
- Connections (status rows)
- Data (usage + toggles)
- Personalize (signature Eclipse options near the top)
- Software, Phone, Profile, Apps, Assistant, Security and Privacy, About
- Husky illustration on empty states
- Interactive toggles and basic search filtering

## Notes

- Privileged app considerations, intent handling, and Android system-service integration are architectural (see design brief). This is the visual and interaction prototype.
- Factory reset, password flows, and assistant body are stubbed with the required warnings and structure.
- Profile image and husky empty-state art are generated for the prototype.

## How to view

Open `index.html` in any modern browser. No build step required.

## Build order (from design)

1. Shell + search  
2. Connections, Data, Phone, Security, Software  
3. Personalize and signature screens  

## License

Prototype for Eclipse project use.
