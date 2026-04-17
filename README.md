# MemeVault AI

BSC Live Scanner
Flap + Four.meme Signals
Treasury Rotation System
模因金库
MemeVault AI
$MVAI
BNB Chain
AI 扫描→金库轮动→利润分配.

BSC 上的实时模因金库系统。AI 持续扫描 Flap 与 Four.meme 的新池与热点, 金库基于动量与风险信号在筛选标的之间主动轮动, 实现的利润周期性回流给持有者。
持有 MVAI, 不是持有一个 meme — 是持有一个会扫描、会轮动、会分配利润的金库。

<a href="https://freeimage.host/"><img src="https://iili.io/BUFcKb9.png" alt="BUFcKb9.png" border="0" /></a>

The deployed project is branded as **MemeVault AI** and positioned around **AI-driven hotspot scanning plus treasury rotation for profit capture**, based on the live project page title. citeturn171927view0


Meme coins move fast.
Most people react late.

MemeVault AI is built to scan momentum early, simulate treasury rotations, and surface the strongest opportunities before the crowd catches up.

This is not just a dashboard.
It’s a live simulation, a product demo, and an architecture-ready scanner prototype for AI-driven capital rotation.

Signals. Rotation. Distribution logic.
All in one terminal.

MemeVault AI explores a simple protocol idea:

> A treasury should not remain idle.
> It should continuously scan for meme coin momentum, evaluate risk, rotate into top candidates, secure profits, and expose a transparent distribution logic.

The current implementation focuses on **clarity, architecture, and demo realism**:

- live-style token scanner panels
- treasury allocation and rotation views
- PnL and reserve summaries
- simulated distribution cycles
- event feed and protocol documentation
- modular logic that can later be connected to real APIs

## Main surfaces
Everyone watches memes.
Very few know how to rotate treasury into them with structure.

**MemeVault AI** changes that.

A premium terminal concept for:
⚡ live scanner signals
🧠 AI-based ranking
💰 treasury rotation simulation
📡 event feed + distribution logic

Not just another landing page.
A full protocol-style demo of what AI-native meme infrastructure can look like.

### `/`
Landing page with the full product framing:
- hero section
- protocol overview
- scanner highlights
- treasury preview
- distribution preview
- docs preview
- live feed snapshot

### `/bot-live`
Scanner terminal simulation:
- token table
- filters
- score and risk display
- scanner status bar
- momentum visualization

### `/treasury`
Treasury rotation view:
- active positions
- reserve overview
- PnL summary
- cycle cards
- allocation charts

### `/distributions`
Distribution simulation:
- next cycle countdown
- reserve/distribution panel
- payout history
- cycle logic preview

### `/docs`
Internal protocol-style documentation:
- architecture notes
- product thesis
- scanner logic
- treasury logic
- roadmap

## Architecture

The app is organized into four main layers:

### 1. Presentation layer
Built with **Next.js App Router**, reusable React components, Tailwind styling, and a terminal-inspired UI.

### 2. State layer
Lightweight client state is handled with **Zustand** stores for app, scanner, treasury, and wallet state.

### 3. Engine layer
Core simulation logic lives in `lib/`:
- `scanner/` for ranking and classifying tokens
- `treasury/` for rotations, PnL, and distribution calculations
- `feed/` for event generation
- `mock/` for realistic seeded demo content

### 4. API layer
Mock API routes return JSON from the simulation engine:
- `/api/scanner`
- `/api/treasury`
- `/api/feed`
- `/api/distributions`

This keeps the project **integration-ready** without requiring live market or on-chain execution.

## How the simulation works

### Scanner engine
Tokens are ranked using a simplified scoring model that blends:
- momentum
- liquidity / activity
- buy vs sell balance
- holder stability
- risk level

The scanner then classifies candidates into more readable states such as stronger setups or higher-risk assets.

### Treasury rotation engine
The treasury module simulates how capital could rotate into top-ranked candidates instead of staying static. The prototype emphasizes:
- staged rotation logic
- readable allocation changes
- reserve visibility
- closed-position tracking
- basic PnL summaries

### Distribution engine
The distribution layer simulates periodic distribution cycles from treasury performance and reserve accounting. It is intentionally framed as a **prototype**, not a live on-chain payout system.

## Tech stack

- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Zustand**
- **Recharts**
- **Lucide React**

## Project structure

```bash
memevault-ai/
├── app/
├── components/
├── data/
├── docs/
├── hooks/
├── lib/
├── public/
├── store/
├── README.md
└── package.json
```

### Important directories

- `app/` → routes, layouts, API endpoints
- `components/` → UI building blocks and feature modules
- `data/` → mock datasets for tokens, treasury, distributions, feed, docs
- `lib/` → scoring, treasury, distribution, mock seed, and utility logic
- `store/` → Zustand stores
- `docs/` → markdown product notes and architecture docs

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Open the app

```bash
http://localhost:3000
```

### 4. Production build

```bash
npm run build
npm run start
```

## Current API endpoints

These routes currently return mock JSON for the UI:

- `GET /api/scanner`
- `GET /api/treasury`
- `GET /api/feed`
- `GET /api/distributions`

They are designed so real market, wallet, and treasury services can later replace the mock layer with minimal UI changes.

## Turning this into a real product

A production version could connect:

- market data providers
- social / sentiment sources
- wallet intelligence
- holder analytics
- treasury accounting services
- execution policies
- on-chain reserve and distribution contracts

The next generation of meme scanning won’t be manual.

**MemeVault AI** is designed as an AI-powered scanner + treasury rotation engine:

* detect hotspots
* rank candidates
* simulate treasury allocation
* track distribution cycles
* stream live event logic

Built as a **product demo**.
Presented like a **real protocol terminal**.

This is where meme velocity meets treasury intelligence.

## Disclaimer

This software is for **product demonstration and simulation purposes only**.
It should not be interpreted as financial advice, trading automation, custody infrastructure, or production-ready treasury software.
