import React, { Component } from "react";
import Layout from "../components/Layout";
import Bangtin from "../components/Bangtin";
import BangtinId from "../components/BangtinId";
import BangtinIdSlug from "../components/BangtinIdSlug";

export default class extends Component {
  static async getInitialProps({ query: { datatest } }) {
    return { datatest };
  }

  render() {
    const postId = this.props.datatest.id;
    const slug = this.props.datatest.slug;
    return (
      <Layout  title="Bang tin">
        {postId && slug ? (
          <BangtinIdSlug postId={postId} slug={slug} />
        ) : postId ? (
          <BangtinId postId={postId} />
        ) : (
          <Bangtin />
        )}
      </Layout>
    );
  }
}
