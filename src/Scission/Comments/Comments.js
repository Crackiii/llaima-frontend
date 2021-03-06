import React from "react";
import { DiscussionEmbed } from "disqus-react";
import styles from "./styles.module.scss";
import { Container } from "react-bootstrap";

const Comments = (props) => {
  return (
    <Container className={styles.comments} id="comments">
      <div className={styles.head}>Comments</div>
      {/* <DiscussionEmbed
        shortname="scission"
        config={{
          url: "http://localhost:3000",
          identifier: "scission-post-id",
          title: "Title of Your Article",
          //   language: "zh_TW", //e.g. for Traditional Chinese (Taiwan)
        }}
      /> */}
      <div
        className="fb-comments"
        data-href="https://www.facebook.com/llaimagames"
        data-numposts="10"
        data-width="100%"
      ></div>
    </Container>
  );
};

export default Comments;
