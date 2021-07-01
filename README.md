### 初めに

npm install

### ローカルで開発する場合

1. **環境変数を設定する**
   `App.js`内の下記コメントアウトを外す。

```js
require('dotenv').config()
```

Discord の Bot を起動するためには.env ファイルに TOKEN の記載が必要になります。

2. **Let's start!!**

```shell
npm run start
```

3. **終わったら deploy をする**

```shell
npm run deploy
```
