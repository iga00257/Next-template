# Next.js Template Project

基於 Next.js 的專案模板，整合了現代前端開發所需的各種工具和最佳實踐。

## 技術架構

- **框架**: Next.js 15.3.1
- **程式語言**: TypeScript
- **套件管理**: pnpm 9.4.0
- **Node 版本**: v20.15.0
- **樣式**: SASS
- **多國語系**: next-i18next
- **程式碼規範**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## 專案說明

- 🌐 多語系支援
  - 支援多語言切換（zh-TW、en 等）
  - URL 語系參數優先
  - i18next 整合

- 🎨 樣式解決方案
  - SASS 預處理器
  - CSS Modules
  - 全域變數和 Mixins

- 📦 Inline svg for icon
  - SVG 元件化支援
  - 靜態資源最佳化
  - 字型最佳化

- 🛠 開發工具鏈
  - TypeScript 型別檢查
  - ESLint 程式碼檢查
  - Prettier 程式碼格式化
  - Husky Git hooks
  - lint-staged 提交檢查

- 💻 VSCode 擴展支援
  - ESLint 即時程式碼檢查
  - Prettier 自動格式化
  - i18n-ally 多語系開發
  - Todo Tree 任務標記
  - Code Spell Checker 拼寫檢查

## 目錄結構

```
src/
├── api/          # API 相關服務
├── assets/       # 靜態資源
├── components/   # React 元件
├── constants/    # 常數定義
├── pages/        # 頁面檔案
├── styles/       # 全域樣式
├── types/        # TypeScript 型別定義
└── utils/        # 通用工具函式
```

## 開發指南

### 環境需求

- Node.js >= 20.15.0
- pnpm >= 9.4.0

### 安裝套件

```bash
pnpm install
```

### 開發伺服器

```bash
pnpm dev
```

### 建置正式版本

```bash
pnpm build
```

### 程式碼檢查

```bash
pnpm lint
```

## 多國語系

專案使用 next-i18next 進行多國語系管理：

- 翻譯檔案位於 `/public/locales/`
- 支援的語系：zh-TW、en 等
- URL 格式：`/[locale]/path` 或 `?locale=zh-tw`

## Git 提交規範

使用 conventional commits 規範：

- feat: 新功能
- fix: 錯誤修復
- docs: 文件更新
- style: 程式碼格式（不影響程式碼運行的變動）
- refactor: 重構
- test: 測試相關
- chore: 建置過程或輔助工具的變動

reference: https://medium.com/@mujan5427/how-to-write-better-git-commit-messages-and-their-benefits-2c532529b30c

## 環境變數

- `NEXT_PUBLIC_DEPLOY_ENV`: 部署環境（development/production）

## 注意事項

- 確保使用正確的 Node.js 版本（建議使用 nvm）
- 遵循程式碼規範和提交規範
- 保持翻譯檔案的同步更新
