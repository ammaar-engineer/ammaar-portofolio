# INIT_AGENT.md

> Auto-generated oleh Explorer Agent
> Tanggal: 2026-10-04 19:10:47
> Root: /home/quanta/Documents/ammaar-portofolio

## 1. Ringkasan Project

**Nama project:** `portofolio_web_app` (v0.1.0, private)

Website portofolio pribadi milik Mochammad Ammaar Fauzaan (Backend Developer) yang dibangun dengan Next.js 16 (App Router) + React 19 + TypeScript, memakai Tailwind CSS v4 dan komponen shadcn/ui. Halaman disusun modular per-section (Hero, Knowledge, Projects, Experience, Profile) dengan latar grid 3D interaktif memanfaatkan Three.js / react-three-fiber.

## 2. Struktur Folder

```
.
|-- components.json
|-- eslint.config.mjs
|-- .git
|   |-- config
|   |-- description
|   |-- HEAD
|   |-- hooks
|   |   |-- applypatch-msg.sample
|   |   |-- commit-msg.sample
|   |   |-- fsmonitor-watchman.sample
|   |   |-- post-update.sample
|   |   |-- pre-applypatch.sample
|   |   |-- pre-commit.sample
|   |   |-- pre-merge-commit.sample
|   |   |-- prepare-commit-msg.sample
|   |   |-- pre-push.sample
|   |   |-- pre-rebase.sample
|   |   |-- pre-receive.sample
|   |   |-- push-to-checkout.sample
|   |   |-- sendemail-validate.sample
|   |   `-- update.sample
|   |-- index
|   |-- info
|   |   `-- exclude
|   |-- logs
|   |   |-- HEAD
|   |   `-- refs
|   |       |-- heads
|   |       |   `-- main
|   |       `-- remotes
|   |           `-- origin
|   |               `-- HEAD
|   |-- objects
|   |   |-- info
|   |   `-- pack
|   |       |-- pack-43a64fb118c54b7bdbd521b7d76f0a792f5a8f72.idx
|   |       |-- pack-43a64fb118c54b7bdbd521b7d76f0a792f5a8f72.pack
|   |       `-- pack-43a64fb118c54b7bdbd521b7d76f0a792f5a8f72.rev
|   |-- packed-refs
|   `-- refs
|       |-- heads
|       |   `-- main
|       |-- remotes
|       |   `-- origin
|       |       `-- HEAD
|       `-- tags
|-- .gitignore
|-- .next
|   `-- dev
|       |-- build
|       |   |-- 56416d4ae4ce586f.js
|       |   |-- 56416d4ae4ce586f.js.map
|       |   |-- cf208e1b0e4c4caf.js
|       |   |-- cf208e1b0e4c4caf.js.map
|       |   |-- chunks
|       |   |   |-- node_modules_20v-8wl._.js
|       |   |   |-- node_modules_20v-8wl._.js.map
|       |   |   |-- [root-of-the-server]__0oj80bi._.js
|       |   |   |-- [root-of-the-server]__0oj80bi._.js.map
|       |   |   |-- [root-of-the-server]__0x8m--0._.js
|       |   |   |-- [root-of-the-server]__0x8m--0._.js.map
|       |   |   |-- [root-of-the-server]__1f933tp._.js
|       |   |   |-- [root-of-the-server]__1f933tp._.js.map
|       |   |   |-- [root-of-the-server]__1nvwxt6._.js
|       |   |   |-- [root-of-the-server]__1nvwxt6._.js.map
|       |   |   |-- [turbopack-node]_transforms_postcss_ts_0b7xl6g._.js
|       |   |   |-- [turbopack-node]_transforms_postcss_ts_0b7xl6g._.js.map
|       |   |   |-- [turbopack-node]_transforms_webpack-loaders_ts_1nw9y6m._.js
|       |   |   |-- [turbopack-node]_transforms_webpack-loaders_ts_1nw9y6m._.js.map
|       |   |   |-- [turbopack]_runtime.js
|       |   |   `-- [turbopack]_runtime.js.map
|       |   `-- package.json
|       |-- build-manifest.json
|       |-- cache
|       |   |-- next-devtools-config.json
|       |   |-- .rscinfo
|       |   `-- turbopack
|       |       `-- v16.2.12
|       |           |-- 00000001.sst
|       |           |-- 00000002.sst
|       |           |-- 00000003.sst
|       |           |-- 00000004.sst
|       |           |-- 00000005.meta
|       |           |-- 00000006.meta
|       |           |-- 00000007.meta
|       |           |-- 00000008.meta
|       |           |-- 00000009.sst
|       |           |-- 00000010.sst
|       |           |-- 00000011.sst
|       |           |-- 00000012.sst
|       |           |-- 00000013.sst
|       |           |-- 00000014.sst
|       |           |-- 00000015.sst
|       |           |-- 00000016.meta
|       |           |-- 00000017.meta
|       |           |-- 00000018.meta
|       |           |-- 00000019.meta
|       |           |-- 00000020.sst
|       |           |-- 00000021.sst
|       |           |-- 00000022.sst
|       |           |-- 00000023.sst
|       |           |-- 00000024.meta
|       |           |-- 00000025.meta
|       |           |-- 00000026.meta
|       |           |-- 00000027.meta
|       |           |-- 00000028.sst
|       |           |-- 00000029.sst
|       |           |-- 00000030.sst
|       |           |-- 00000031.meta
|       |           |-- 00000032.meta
|       |           |-- 00000033.meta
|       |           |-- 00000034.sst
|       |           |-- 00000035.sst
|       |           |-- 00000036.sst
|       |           |-- 00000037.meta
|       |           |-- 00000038.meta
|       |           |-- 00000039.meta
|       |           |-- 00000040.sst
|       |           |-- 00000041.sst
|       |           |-- 00000042.sst
|       |           |-- 00000043.meta
|       |           |-- 00000044.meta
|       |           |-- 00000045.meta
|       |           |-- CURRENT
|       |           `-- LOG
|       |-- fallback-build-manifest.json
|       |-- lock
|       |-- logs
|       |   `-- next-development.log
|       |-- package.json
|       |-- prerender-manifest.json
|       |-- routes-manifest.json
|       |-- server
|       |   |-- app
|       |   |   |-- page
|       |   |   |   |-- app-paths-manifest.json
|       |   |   |   |-- build-manifest.json
|       |   |   |   |-- next-font-manifest.json
|       |   |   |   |-- react-loadable-manifest.json
|       |   |   |   `-- server-reference-manifest.json
|       |   |   |-- page_client-reference-manifest.js
|       |   |   |-- page.js
|       |   |   `-- page.js.map
|       |   |-- app-paths-manifest.json
|       |   |-- chunks
|       |   |   `-- ssr
|       |   |       |-- [externals]__12if52y._.js
|       |   |       |-- [externals]__12if52y._.js.map
|       |   |       |-- _next-internal_server_app_page_actions_0hhsz1j.js
|       |   |       |-- _next-internal_server_app_page_actions_0hhsz1j.js.map
|       |   |       |-- node_modules_0h91jdk._.js
|       |   |       |-- node_modules_0h91jdk._.js.map
|       |   |       |-- node_modules_0lmy3l8._.js
|       |   |       |-- node_modules_0lmy3l8._.js.map
|       |   |       |-- node_modules_189hmcg._.js
|       |   |       |-- node_modules_189hmcg._.js.map
|       |   |       |-- node_modules_20p6cdk._.js
|       |   |       |-- node_modules_20p6cdk._.js.map
|       |   |       |-- node_modules_next_dist_0q0aagl._.js
|       |   |       |-- node_modules_next_dist_0q0aagl._.js.map
|       |   |       |-- node_modules_next_dist_client_components_0wpq8j3._.js
|       |   |       |-- node_modules_next_dist_client_components_0wpq8j3._.js.map
|       |   |       |-- node_modules_next_dist_client_components_builtin_forbidden_0symwr9.js
|       |   |       |-- node_modules_next_dist_client_components_builtin_forbidden_0symwr9.js.map
|       |   |       |-- node_modules_next_dist_client_components_builtin_global-error_0-o-goa.js
|       |   |       |-- node_modules_next_dist_client_components_builtin_global-error_0-o-goa.js.map
|       |   |       |-- node_modules_next_dist_client_components_builtin_unauthorized_0l_sp0x.js
|       |   |       |-- node_modules_next_dist_client_components_builtin_unauthorized_0l_sp0x.js.map
|       |   |       |-- node_modules_next_dist_compiled_0d323sd._.js
|       |   |       |-- node_modules_next_dist_compiled_0d323sd._.js.map
|       |   |       |-- node_modules_next_dist_esm_0qxuhvo._.js
|       |   |       |-- node_modules_next_dist_esm_0qxuhvo._.js.map
|       |   |       |-- node_modules_next_dist_esm_1mdgmmj._.js
|       |   |       |-- node_modules_next_dist_esm_1mdgmmj._.js.map
|       |   |       |-- node_modules_next_dist_server_route-modules_app-page_0qo_rmc._.js
|       |   |       |-- node_modules_next_dist_server_route-modules_app-page_0qo_rmc._.js.map
|       |   |       |-- node_modules_tailwind-merge_dist_bundle-mjs_mjs_03i664l._.js
|       |   |       |-- node_modules_tailwind-merge_dist_bundle-mjs_mjs_03i664l._.js.map
|       |   |       |-- [root-of-the-server]__0fg6eo9._.js
|       |   |       |-- [root-of-the-server]__0fg6eo9._.js.map
|       |   |       |-- [root-of-the-server]__19tybm-._.js
|       |   |       |-- [root-of-the-server]__19tybm-._.js.map
|       |   |       |-- src_0_jdamy._.js
|       |   |       |-- src_0_jdamy._.js.map
|       |   |       |-- src_1zb5666._.js
|       |   |       |-- src_1zb5666._.js.map
|       |   |       |-- [turbopack]_runtime.js
|       |   |       `-- [turbopack]_runtime.js.map
|       |   |-- interception-route-rewrite-manifest.js
|       |   |-- middleware-build-manifest.js
|       |   |-- middleware-manifest.json
|       |   |-- next-font-manifest.js
|       |   |-- next-font-manifest.json
|       |   |-- pages-manifest.json
|       |   |-- server-reference-manifest.js
|       |   `-- server-reference-manifest.json
|       |-- static
|       |   |-- chunks
|       |   |   |-- _01_ro95._.js.map
|       |   |   |-- _1anvha4._.js
|       |   |   |-- node_modules_033dui2._.js
|       |   |   |-- node_modules_033dui2._.js.map
|       |   |   |-- node_modules_17s8hbw._.js
|       |   |   |-- node_modules_17s8hbw._.js.map
|       |   |   |-- node_modules_next_dist_1ybzpk2._.js
|       |   |   |-- node_modules_next_dist_1ybzpk2._.js.map
|       |   |   |-- node_modules_next_dist_build_polyfills_polyfill-nomodule.js
|       |   |   |-- node_modules_next_dist_build_polyfills_polyfill-nomodule.js.map
|       |   |   |-- node_modules_next_dist_client_0r5nbpw._.js
|       |   |   |-- node_modules_next_dist_client_0r5nbpw._.js.map
|       |   |   |-- node_modules_next_dist_client_components_builtin_global-error_0rnnvjv.js
|       |   |   |-- node_modules_next_dist_compiled_1amofcm._.js
|       |   |   |-- node_modules_next_dist_compiled_1amofcm._.js.map
|       |   |   |-- node_modules_next_dist_compiled_next-devtools_index_090k2jm.js
|       |   |   |-- node_modules_next_dist_compiled_next-devtools_index_090k2jm.js.map
|       |   |   |-- node_modules_next_dist_compiled_react-dom_096_9a-._.js
|       |   |   |-- node_modules_next_dist_compiled_react-dom_096_9a-._.js.map
|       |   |   |-- node_modules_next_dist_compiled_react-server-dom-turbopack_164kp-6._.js
|       |   |   |-- node_modules_next_dist_compiled_react-server-dom-turbopack_164kp-6._.js.map
|       |   |   |-- node_modules_@swc_helpers_cjs_1r9vbqw._.js
|       |   |   |-- node_modules_@swc_helpers_cjs_1r9vbqw._.js.map
|       |   |   |-- src_04p449p._.js
|       |   |   |-- src_04p449p._.js.map
|       |   |   |-- src_1psk39m._.js
|       |   |   |-- src_1psk39m._.js.map
|       |   |   |-- src_app_0c5w_g_._.css
|       |   |   |-- src_app_0c5w_g_._.css.map
|       |   |   |-- src_app_globals_css_1igg3k2._.single.css
|       |   |   |-- src_app_globals_css_1igg3k2._.single.css.map
|       |   |   |-- src_app_layout_tsx_007e4b2._.js
|       |   |   |-- src_app_page_tsx_0rnnvjv._.js
|       |   |   |-- src_app_pixelfont_3fd03e86_module_css_1igg3k2._.single.css
|       |   |   |-- src_app_pixelfont_3fd03e86_module_css_1igg3k2._.single.css.map
|       |   |   |-- turbopack-_01_ro95._.js
|       |   |   |-- [turbopack]_browser_dev_hmr-client_hmr-client_ts_1mojsay._.js
|       |   |   |-- [turbopack]_browser_dev_hmr-client_hmr-client_ts_1mojsay._.js.map
|       |   |   |-- [turbopack]_browser_dev_hmr-client_hmr-client_ts_1xch-cm._.js
|       |   |   |-- [turbopack]_browser_dev_hmr-client_hmr-client_ts_1xx01vv._.js
|       |   |   `-- [turbopack]_browser_dev_hmr-client_hmr-client_ts_1xx01vv._.js.map
|       |   |-- development
|       |   |   |-- _buildManifest.js
|       |   |   |-- _clientMiddlewareManifest.js
|       |   |   `-- _ssgManifest.js
|       |   `-- media
|       |       `-- Pixeled-s.p.20t-j76v9qsfh.ttf
|       |-- trace
|       `-- types
|           |-- cache-life.d.ts
|           |-- routes.d.ts
|           `-- validator.ts
|-- next.config.ts
|-- next-env.d.ts
|-- package.json
|-- package-lock.json
|-- postcss.config.mjs
|-- README.md
|-- src
|   |-- app
|   |   |-- fonts
|   |   |   `-- Pixeled.ttf
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- components
|   |   |-- grid.tsx
|   |   |-- navbar.tsx
|   |   |-- ShapeGrid.tsx
|   |   `-- ui
|   |       |-- accordion.tsx
|   |       |-- avatar.tsx
|   |       |-- badge.tsx
|   |       |-- button.tsx
|   |       |-- card.tsx
|   |       |-- dialog.tsx
|   |       |-- input.tsx
|   |       |-- label.tsx
|   |       |-- navigation-menu.tsx
|   |       |-- scroll-area.tsx
|   |       |-- separator.tsx
|   |       |-- sheet.tsx
|   |       |-- skeleton.tsx
|   |       |-- tabs.tsx
|   |       |-- textarea.tsx
|   |       `-- tooltip.tsx
|   |-- lib
|   |   `-- utils.ts
|   |-- sections
|   |   |-- experience
|   |   |   `-- page.tsx
|   |   |-- hero
|   |   |   `-- page.tsx
|   |   |-- knowledge
|   |   |   |-- components
|   |   |   |   |-- data.ts
|   |   |   |   |-- stack.tsx
|   |   |   |   `-- wiki-card.tsx
|   |   |   `-- page.tsx
|   |   |-- profile
|   |   |   `-- page.tsx
|   |   `-- projects
|   |       |-- components
|   |       |   |-- data.ts
|   |       |   `-- project-card.tsx
|   |       `-- page.tsx
|   `-- types
|       `-- index.ts
|-- STRUCUTURE.md
`-- tsconfig.json

50 directories, 259 files
```

## 3. Penjelasan Folder

| Folder | Deskripsi |
|---|---|
| `src/` | Sumber kode utama aplikasi (App Router, komponen, section, tipe). |
| `src/app/` | Next.js App Router: `layout.tsx` (root layout + font & metadata), `page.tsx` (rakitan semua section), `globals.css`, dan `fonts/`. |
| `src/app/fonts/` | Font lokal `Pixeled.ttf` yang di-load via `next/font/local` sebagai `--font-pixel`. |
| `src/components/` | Komponen global non-section: `navbar.tsx`, `grid.tsx`, dan `ShapeGrid.tsx` (grid 3D interaktif latar). |
| `src/components/ui/` | Kumpulan komponen shadcn/ui (accordion, button, card, dialog, tabs, dll) — generated dari CLI shadcn. |
| `src/lib/` | Utility bersama (`utils.ts` → helper `cn` untuk merge class Tailwind). |
| `src/sections/` | Bagian-bagian halaman, satu folder per section (hero, knowledge, projects, experience, profile). |
| `src/sections/hero/` | Section pembuka/landing. |
| `src/sections/knowledge/` | Section "knowledge/wiki", berisi `components/` lokal (`data.ts`, `stack.tsx`, `wiki-card.tsx`). |
| `src/sections/projects/` | Section daftar project, berisi `components/` lokal (`data.ts`, `project-card.tsx`). |
| `src/sections/experience/` | Section pengalaman kerja. |
| `src/sections/profile/` | Section profil/about. |
| `src/types/` | Definisi tipe TypeScript bersama (`Project`, `Wiki`, `SocialLinks`). |
| `.git/` | *repo internal git, generated* |
| `.next/` | *output build & cache dev Next.js (Turbopack), generated* |

## 4. Dependencies

**Package manager:** npm (`package-lock.json`)

### Runtime (`dependencies`)
- `@react-three/fiber` — ^9.6.1 — React renderer untuk Three.js (scene 3D deklaratif).
- `@react-three/postprocessing` — ^3.0.4 — Efek post-processing untuk react-three-fiber.
- `class-variance-authority` — ^0.7.1 — Utility pembuat varian class untuk komponen.
- `clsx` — ^2.1.1 — Penggabung className secara kondisional.
- `lucide-react` — ^1.27.0 — Set ikon React (Lucide).
- `motion` — ^12.43.0 — Library animasi (Motion / Framer Motion).
- `next` — 16.2.12 — Framework React (SSR, routing, App Router).
- `postprocessing` — ^6.39.4 — Library efek post-processing WebGL.
- `radix-ui` — ^1.6.7 — Primitives UI headless (dasar komponen shadcn).
- `react` — 19.2.4 — Library UI.
- `react-dom` — 19.2.4 — Renderer React untuk DOM.
- `shadcn` — ^4.16.0 — CLI/registry komponen shadcn.
- `tailwind-merge` — ^3.6.0 — Merge class Tailwind tanpa konflik.
- `three` — ^0.185.1 — Library 3D WebGL.
- `tw-animate-css` — ^1.4.0 — Utility animasi CSS untuk Tailwind.

### Dev (`devDependencies`)
- `@tailwindcss/postcss` — ^4 — Plugin PostCSS untuk Tailwind CSS v4.
- `@types/node` — ^20 — Tipe untuk Node.js.
- `@types/react` — ^19 — Tipe untuk React.
- `@types/react-dom` — ^19 — Tipe untuk React DOM.
- `babel-plugin-react-compiler` — 1.0.0 — Plugin Babel untuk React Compiler.
- `eslint` — ^9 — Linter JavaScript/TypeScript.
- `eslint-config-next` — 16.2.12 — Konfigurasi ESLint resmi Next.js.
- `tailwindcss` — ^4 — Framework CSS utility-first.
- `typescript` — ^5 — Bahasa TypeScript.

### Scripts
- `npm run dev` — `next dev` (jalankan development server).
- `npm run build` — `next build` (build produksi).
- `npm run start` — `next start` (jalankan hasil build produksi).
- `npm run lint` — `eslint` (menjalankan linter).

## 5. Catatan

- Perintah `tree -I node_modules --charset=ascii` tersedia di `/usr/bin/tree`; output mentah dipakai apa adanya (termasuk folder generated `.git/` dan `.next/`).
- `package.json` tidak memuat field `description`; ringkasan diambil dari `name` dan `metadata` di `src/app/layout.tsx`.
- Terdapat file `STRUCUTURE.md` (typo dari "STRUCTURE") yang berisi patokan struktur project: tiap section idealnya punya `state`, `components`, dan `page.tsx`. Saat ini folder `state/` belum ada — baru `components/` dan `page.tsx` yang terwujud.
- Direktori `src/hooks/` direferensikan di `components.json` (alias `@/hooks`) namun belum ada di project.
- Konfigurasi shadcn memakai style `radix-lyra`, base color `zinc`, Tailwind v4 (`tailwind.config` kosong), dan registry tambahan `@react-bits`.
