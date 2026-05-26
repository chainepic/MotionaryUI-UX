<div align="center">

# Motionary UI/UX

**The Ultimate Interactive Encyclopedia of Motion Design**

**交互式动效设计百科全书 · 1000+ 可复制的 React 动效组件**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chainepic/MotionaryUI-UX?style=for-the-badge&logo=github)](https://github.com/chainepic/MotionaryUI-UX)

[English](#highlights--项目亮点) · [中文](#highlights--项目亮点) · [Live Demo](#-live-demo--在线预览) · [Quick Start](#-quick-start--快速开始)

<br />

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:030303,50:7000ff,100:00f3ff&height=120&section=footer" width="100%" />

</div>

---

## ✨ Highlights · 项目亮点

<table>
<tr>
<td width="50%">

### English

- **1000+ motion variants** across buttons, cards, nav, loaders, and more
- **Deep Void theme** — immersive dark UI with neon accents
- **Live playground** — every animation responds to user input
- **Multi-dimensional filters** — search by trigger, style, and component type
- **Copy-paste ready** — grab source code or AI prompts in one click
- **Design Wizard** — visually compose a cohesive design system
- **Storybook support** — isolated component development
- **Static export** — deploy anywhere (GitHub Pages, Vercel, etc.)

</td>
<td width="50%">

### 中文

- **1000+ 动效变体**，覆盖按钮、卡片、导航、加载器等 20+ 分类
- **Deep Void 深色主题**，霓虹点缀，沉浸式浏览体验
- **实时交互预览**，每个动效均可直接体验
- **多维筛选**，按触发方式、风格标签、组件类型快速定位
- **一键复制代码**或 AI Prompt，即拿即用
- **设计向导（Wizard）**，可视化组合完整设计系统
- **Storybook 支持**，便于组件隔离开发与文档化
- **静态导出**，可部署到 GitHub Pages、Vercel 等任意平台

</td>
</tr>
</table>

---

## 🌐 Live Demo · 在线预览

> Deploy your own copy via GitHub Pages or Vercel after cloning.

| Platform | Link |
|----------|------|
| GitHub Pages | `https://chainepic.github.io/MotionaryUI-UX/` |
| Local Dev | `http://localhost:3000` |

---

## 🚀 Quick Start · 快速开始

### Prerequisites · 环境要求

- Node.js 18+
- npm / yarn / pnpm

### Installation · 安装

```bash
# Clone · 克隆仓库
git clone https://github.com/chainepic/MotionaryUI-UX.git
cd MotionaryUI-UX

# Install · 安装依赖
npm install

# Dev server · 启动开发服务器
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006).

### Build · 构建

```bash
npm run build    # Static export to ./out
npm run lint     # ESLint
```

---

## 📦 Categories · 组件分类

<details>
<summary><strong>Click to expand · 点击展开完整分类</strong></summary>

| # | Category 分类 | Description 说明 |
|---|---------------|------------------|
| 1 | Buttons 按钮 | Magnetic, Liquid, Neon, Glitch, 3D Tilt… |
| 2 | Cards 卡片 | 3D Flip, Glassmorphism, Parallax, Border Beam… |
| 3 | Typography 文字 | Kinetic, Typewriter, Scramble, Gradient… |
| 4 | Navigation 导航 | Dock, Circular Menu, Mega Menu, Breadcrumb… |
| 5 | Backgrounds 背景 | Aurora, Starfield, Mesh Gradient, Cyber Grid… |
| 6 | Data 数据可视化 | Charts, Gauges, Heatmaps, Progress… |
| 7 | Feedback 反馈 | Toast, Modal, Confetti, Skeleton… |
| 8 | Social 社交 | Heart Burst, Avatar Stack, Story Ring… |
| 9 | E-commerce 电商 | Add to Cart, Wishlist, Price Flip… |
| 10 | Inputs 输入 | Floating Label, OTP, Tag Input, File Drop… |
| 11 | Loaders 加载 | Spinner, Orbit, DNA, Glitch, Hourglass… |
| 12 | Images 图片 | Zoom, Ken Burns, Before/After, Lens Flare… |
| 13 | Gamification 游戏化 | XP Bar, Badge, Loot Box, Streak Flame… |
| 14 | Media 媒体 | Waveform, Vinyl, Volume Knob, Lyrics… |
| 15 | Device UI 设备 | Dynamic Island, Face ID, Lock Screen… |
| 16 | Transitions 过渡 | Fade, Wipe, Circle Mask, Cube Rotate… |
| 17 | Micro 微交互 | Toggle, Star Rating, Share Fan… |
| 18+ | Blocks / Modals / Wizard… | Layout blocks, onboarding, skeletons, and more |

</details>

---

## 🛠️ Tech Stack · 技术栈

```
Next.js 16  ·  TypeScript  ·  Tailwind CSS v4  ·  Framer Motion
GSAP  ·  React Three Fiber  ·  Zustand  ·  Storybook  ·  Lucide
```

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | App Router + static export |
| **Framer Motion** | Declarative animations & gestures |
| **GSAP** | Scroll-triggered & complex timelines |
| **React Three Fiber** | 3D / WebGL effects |
| **Zustand** | Global filter & wizard state |
| **Storybook** | Component docs & isolation |

---

## 📁 Project Structure · 项目结构

```
MotionaryUI-UX/
├── .github/              # CI/CD workflows
├── .storybook/           # Storybook config
├── src/
│   ├── app/              # Next.js pages (per category)
│   ├── components/
│   │   ├── motionary/    # All motion variants
│   │   └── system/       # Layout, sidebar, cards
│   ├── data/             # Category metadata
│   └── store/            # Zustand stores
├── public/
├── scripts/              # Build & codegen utilities
└── package.json
```

---

## 🎨 Customization · 自定义主题

Edit `src/app/globals.css`:

```css
@theme {
  --color-primary: #00f3ff;
  --color-secondary: #7000ff;
  --color-accent: #ff00ff;
  --color-background: #030303;
}
```

### Add a new variant · 添加新动效

1. Create component in `src/components/motionary/atomic/YourVariants.tsx`
2. Register it on the matching category page under `src/app/`
3. Wrap with `<PlaygroundCard />` for filters & copy-code support

---

## 🤝 Contributing · 参与贡献

Contributions are welcome! 欢迎提交 PR！

1. Fork the repo
2. `git checkout -b feature/amazing-effect`
3. Commit & push
4. Open a Pull Request

**Guidelines · 贡献规范**

- Keep each variant self-contained and reusable
- Use TypeScript with proper types
- Test across major browsers
- Update README for new categories

---

## 📝 License

[MIT](LICENSE) © [chainepic](https://github.com/chainepic)

---

<div align="center">

**Made with ❤️ for the motion design community**

**为动效设计社区而生**

<br />

[![Star on GitHub](https://img.shields.io/github/stars/chainepic/MotionaryUI-UX?style=social)](https://github.com/chainepic/MotionaryUI-UX)

<sub>Next.js · Framer Motion · Tailwind CSS</sub>

</div>
