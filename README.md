## install

yarn hf-seo

## component

```javascript
<SEO>
```

## feature

- 支援 meta title : title 分割成系列，商品，公司。
- 支援 meta facebook。

## API

- company : 公司名稱
- collection: 系列名稱
- product: 產品名稱
- description: 產品描述
- shareImg: 給 facebook 的 share image。

## Usage

- 直接叫用即可

## Demo

```javascript
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SEO from "./SEO";

const details = {
  collectionName: "Cosmos",
  productName: "18K黃金石英-硬玉戒指",
  companyName: "點睛品(Chow Sang Sang Jewellery)官方網上珠寶店",
  description:
    "紫石英硬玉/ 紅紋石戒指能與系列其他半寶石戒指疊戴拼湊，Mix & Match好玩多變，為每日穿搭增添打造出有如浩瀚星宿的閃亮魅力。紫石英硬玉象徵意義:平安和順; 紅紋石象徵意義:熱烈的愛情",
  shareImg: "../img/share.jpg"
};

function App() {
  return (
    <div className="App">
      <SEO
        company={details.companyName}
        collection={details.collectionName}
        product={details.productName}
        description={details.description}
        shareImg={details.shareImg}
      />
    </div>
  );
}

export default App;
```
