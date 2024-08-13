# NASA Image of the Day Viewer

このアプリケーションは、NASAのAPIを利用して、指定した日付の天体画像を表示するWebアプリケーションです。ユーザーはブラウザ上で日付を入力し、その日付に対応する天体画像や説明を閲覧できます。

## 機能

- 指定した日付のNASAの天体画像を取得して表示
- APIリクエストの残り回数をコンソールに表示

## 必要な環境

- Node.js
- npm

## インストール手順

1. リポジトリをクローンします。

    ```bash
    git clone https://github.com/yourusername/nasa-image-viewer.git
    cd nasa-image-viewer
    ```

2. 必要なパッケージをインストールします。

    ```bash
    npm install
    ```

3. `.env`ファイルをプロジェクトルートに作成し、以下のようにNASAのAPIキーを設定します。APIキーは[https://api.nasa.gov/](https://api.nasa.gov/)で自身で作成したキーを使用してください。

    ```plaintext
    NASA_API_KEY=your_nasa_api_key_here
    ```

## 使い方

1. アプリケーションを起動します。

    ```bash
    node index.js
    ```

2. ブラウザで`http://localhost:3000`にアクセスします。

3. 表示されたページで、日付を選択して「Get Image」ボタンを押すと、その日付の天体画像と説明が表示されます。