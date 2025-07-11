# 🖥️ Terminal Portfolio

A retro-styled, terminal-inspired portfolio built with **HTML**, **CSS**, and **TypeScript**, mimicking a real shell interface to showcase your work, skills, and personality — one command at a time.

> Think of it as your `zsh` or `bash` prompt — but personal.

---

## 📂 Directory Structure

```bash
.
├── config.json             # Config file for command registration or shell info
├── index.html              # Entry point
├── LICENSE
├── node_modules/           # Dependencies managed via pnpm
├── package.json            # Project metadata & scripts
├── pnpm-lock.yaml
├── README.md               # You are here :)
├── res/
│   └── logo.png            # Branding/logo
├── src/
│   ├── commands/           # Command handlers
│   │   ├── about.ts
│   │   ├── banner.ts
│   │   ├── default.ts
│   │   ├── help.ts
│   │   ├── projects.ts
│   │   └── whoami.ts
│   ├── css/
│   │   ├── css-reset.css   # Normalize default styles
│   │   ├── font/           # IBM Plex Mono font
│   │   │   └── IBMPlexMono-Thin.ttf
│   │   └── style.css       # Terminal UI styles
│   ├── main.ts             # Entry script — bootstraps shell
│   └── styles.ts           # Style constants or theming
└── tsconfig.json
```

---

## 🚀 Features

- 🔱 **CLI-like interface** — Type commands like `about`, `projects`, `help`
- ⌨️ **Fast and minimal UI** — No frameworks, no bloat
- 💅 **Custom CSS & Fonts** — Retro aesthetic with IBM Plex Mono
- 🧠 **Modular Command System** — Easy to add/edit commands in `src/commands`
- ⚡ **Powered by TypeScript** — Type-safe and scalable
- 📦 **Built with Vite & pnpm** — Lightning fast bundling

---

## 🧪 Available Commands

| Command    | Description                  |
| ---------- | ---------------------------- |
| `about`    | Shows who you are            |
| `projects` | Lists your featured work     |
| `whoami`   | Your short bio / tagline     |
| `help`     | Shows all available commands |
| `clear`    | Clears the terminal screen   |

Add your own commands by creating new `.ts` files in `src/commands/`.

---

## 🛠️ Getting Started

```bash
# Install dependencies (pnpm)
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

> Requires Node.js and [pnpm](https://pnpm.io) installed globally.

---

## 🥉 Customization Tips

- **Logo**: Replace `res/logo.png` with your own icon
- **Fonts**: Use any monospace font via `src/css/font/`
- **Colors & Themes**: Tweak `style.css` or use `styles.ts` for dynamic styles
- **Commands**: Add new command files to `src/commands/` and register them in `main.ts`

---

## 🌐 Deployment

Since it’s a static site:

- **Vercel**, **Netlify**, **GitHub Pages**, or even **Firebase Hosting** will work perfectly.

---

## 👨‍💻 Author

Made with ⚡, 🎨, and a love for command-line aesthetics by
**Vedant Kesarwani** ([InventedSarawak](https://github.com/InventedSarawak))

---

## ⭐ Like This Project?

Give it a ⭐ on GitHub, fork it, and make your own terminal experience.
