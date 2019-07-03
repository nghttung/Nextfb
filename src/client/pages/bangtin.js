import React, { Component } from "react";
import App from "../components/App";
import Bangtin from "../components/Bangtin";
import BangtinId from "../components/BangtinId";
import BangtinIdSlug from "../components/BangtinIdSlug";

export default class extends Component {
  static getInitialProps({ query: { datatest } }) {
    return { datatest };
  }

  render() {
    const postId = this.props.datatest.id;
    const slug = this.props.datatest.slug;
    return (
      <App>
        {postId && slug ? (
          <BangtinIdSlug postId={postId} slug={slug} />
        ) : postId ? (
          <BangtinId postId={postId} />
        ) : (
          <Bangtin />
        )}
      </App>
    );
  }
}
