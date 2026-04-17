# responsive-design

レスポンシブ対応のランディングページを React + TypeScript + Vite で実装したサンプルプロジェクトです。

## 技術スタック

- React 19
- TypeScript
- Vite
- ESLint

## 構成

```
src/
├── App.tsx              # ページ全体のレイアウト
├── main.tsx             # エントリーポイント
├── index.css            # グローバルスタイル
├── App.css              # レイアウト用スタイル
├── assets/              # 画像アセット
└── components/
    ├── Header.tsx       # ヘッダー
    ├── StatsBar.tsx     # 統計情報バー
    ├── CardGrid.tsx     # カードグリッド
    └── Footer.tsx       # フッター
```

## セットアップ

```bash
npm install
```

## スクリプト

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番ビルドを生成 |
| `npm run preview` | ビルド結果をプレビュー |
| `npm run lint` | ESLint でコードを検査 |
