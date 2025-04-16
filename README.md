# eas.efoxconn.com

## 專案概述

EAS (E-Foxconn Application System) 是基於微前端架構的應用系統，採用 Module Federation 技術實現模組間的動態整合與加載。

---

## 系統架構

### Module Federation 架構說明

本專案採用 Webpack Module Federation 架構，包含：

- **一台 Host** - 作為系統唯一入口
- **多台 Remote** - 可動態擴展的功能模組

目前架構：
- Host: 主應用入口 (mf-host-portal, 端口 3000)
- Remote-01 (Survey): Storybook 組件庫，端口為3001（修改自預設的6006）

特點：
- Storybook 作為 Remote 服務自身同時也為 Host 提供組件
- 組件變更會同時反映在 Storybook 與 Host 應用中
- Remote 模組可按需擴展，無數量限制

### 架構圖

```
╭────────────────────────────────────────────────────────╮
│            EAS Micro-Frontend Architecture             │
│                                                        │
│    ╭───────────────╮          ╭───────────────╮        │
│    │               │   Share  │               │        │
│    │  Host Portal  │◄────────►│   Remote-01   │        │
│    │  Port: 3000   │   React  │   Survey      │        │
│    │               │          │   Port: 3001  │        │
│    ╰───────────────╯          ╰───────┬───────╯        │
│            ▲                          │                │
│            │                          │                │
│            │                          ▼                │
│            │                  ╭───────────────╮        │
│            │                  │               │        │
│            ╰──────────────────►   Storybook   │        │
│       Consume Components      │  Same Service │        │
│                               │               │        │
│                               ╰───────────────╯        │
│                                                        │
╰────────────────────────────────────────────────────────╯
```

通過檢查專案配置，確認當前架構如上圖所示：
1. **Host Portal**：運行於 3000 端口，作為應用入口
2. **Remote-01 (Survey)**：運行於 3001 端口，包含 Storybook
3. Remote-01 向 Host 提供組件 (如 button, previewSurvey)
4. 兩者共享核心依賴 (react, react-dom)

## 環境需求

- Node.js 20+
- Docker 與 Docker Compose

## 啟動說明

[WARNING]

```bash
#! 專案根目錄
ENV=dev && docker compose up --build -d
```

## 開發說明

### Step 1

開發前請確保已安裝所有依賴並正確配置環境變數。

### Step 2

開發新組件時，建議先在 Storybook 中進行設計和測試，確認無誤後再整合到 Host 應用。

### 開發模式

可通過以下URL訪問各個服務：

- Host 應用：http://localhost:3000
- Storybook：http://localhost:3001

## 擴展指南

新增 Remote 模組時，需要：

1. 在 compose.yml 中添加新服務配置
2. 更新 .env 文件中的相關環境變數
3. 在 Host 應用中配置新的 Remote 入口
4. 在新的 Remote 模組中使用 `exposes` 設定暴露的組件

## 相關文檔

- [Supabase 自託管指南](https://supabase.com/docs/guides/self-hosting/docker)
- [Module Federation 文檔](https://webpack.js.org/concepts/module-federation/)

## Learn more at https://firebase.google.com/docs/studio/customize-workspace

# EAS

## 啟動說明

[WARNING]

```bash
#! 專案根目錄
ENV=dev && docker compose up --build -d
```

## 開發說明

### Step 1

開發前請確保已安裝所有依賴並正確配置環境變數。

### Step 2

開發新組件時，建議先在 Storybook 中進行設計和測試，確認無誤後再整合到 Host 應用。

### 開發模式

可通過以下URL訪問各個服務：

- Host 應用：http://localhost:3000
- Storybook：http://localhost:3001

## 擴展指南

新增 Remote 模組時，需要：

1. 在 compose.yml 中添加新服務配置
2. 更新 .env 文件中的相關環境變數
3. 在 Host 應用中配置新的 Remote 入口

## 相關文檔

- [Supabase 自託管指南](https://supabase.com/docs/guides/self-hosting/docker)
- [Module Federation 文檔](https://webpack.js.org/concepts/module-federation/)

## Learn more at https://firebase.google.com/docs/studio/customize-workspace
