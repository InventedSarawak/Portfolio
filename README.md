# 🖥️ Terminal Portfolio

A retro-styled, terminal-inspired portfolio built with **HTML**, **CSS**, and **TypeScript**, mimicking a real shell interface to showcase your work, skills, and personality — one command at a time.

> Think of it as your `zsh` or `bash` prompt — but personal.

---

## 📂 Directory Structure

```bash
.
├── config.json             # Config file for shell info
├── index.html              # Entry point with OG metadata
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── README.md               # You are here :)
├── res/
│   └── logo.png            # Branding/logo
├── src/
│   ├── commands/           # Command handlers
│   │   ├── about.ts
│   │   ├── achievements.ts
│   │   ├── banner.ts
│   │   ├── default.ts
│   │   ├── gitlog.ts
│   │   ├── help.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── whoami.ts
│   ├── css/
│   │   ├── css-reset.css   # Normalize default styles
│   │   ├── font/
│   │   │   └── IBMPlexMono-Thin.ttf
│   │   └── style.css       # Terminal UI styles
│   ├── main.ts             # Entry script — bootstraps shell
│   └── styles.ts           # Style constants or theming
└── tsconfig.json
```

---

## 🚀 Features

- ⌨️ **CLI-like interface** — Type commands like `about`, `projects`, `help`
- 🧠 **Custom Commands** — Modular TypeScript command files
- 🎨 **Retro Styling** — Monospace fonts and terminal colors
- ⚡ **Fast and lightweight** — No frameworks, pure HTML/CSS/TS
- 📦 **Built with Vite & pnpm** — Blazing fast dev experience

---

## 🧪 Available Commands

| Command        | Description                    |
| -------------- | ------------------------------ |
| `about`        | Shows who you are              |
| `achievements` | Your accomplishments           |
| `banner`       | Intro terminal header          |
| `gitlog`       | Simulated Git commit history   |
| `projects`     | Highlights from your portfolio |
| `skills`       | Technologies and tools you use |
| `whoami`       | Short tagline or intro         |
| `help`         | Lists all available commands   |
| `clear`        | Clears the terminal screen     |

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

## ✏️ Customization Tips

- **Logo**: Replace `res/logo.png` with your own icon
- **Fonts**: Add new fonts to `src/css/font/`
- **Colors & Layout**: Update `style.css` or `styles.ts`
- **New Commands**: Create a new `.ts` file in `src/commands/`

---

## 🌐 Deployment

You can deploy this project on:

- **Vercel** (recommended)
- **Netlify** / **GitHub Pages**
- Any static host

Make sure OG tags are present in `index.html` for rich previews.

---

## 👨‍💻 Author

Built with ⚡ and ❤️ by **Vedant Kesarwani**
GitHub: [@InventedSarawak](https://github.com/InventedSarawak)

---

## ⭐ Like This Project?

Star the repo, fork it, and build your own terminal experience!
