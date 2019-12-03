import React, { Component } from "react";
import { Helmet } from "react-helmet";

class SEO extends Component {
  get title() {
    const { company, collection, product } = this.props;
    const _subTitle =
      (collection ? collection : "") + " " + (product ? product : "");

    //沒有公司名稱只要返回系列名稱及商品名稱。
    if (company === undefined) {
      return _subTitle;
    }
    //沒有系列及商品名稱只要返回公司名稱。
    if (_subTitle.length <= 1) {
      return company;
    }
    //返回所有名稱。
    return _subTitle + " | " + company;
  }
  render() {
    const { description, company, shareImg } = this.props;
    return (
      <Helmet>
        {/* SEO */}
        <title>{this.title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={window.location.href} />

        {/* 給facebook */}
        <meta property="og:title" content={company} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={window.location.href}></meta>
        <meta property="og:image" content={shareImg} />
      </Helmet>
    );
  }
}

export default SEO;
