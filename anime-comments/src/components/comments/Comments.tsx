import React from "react";
import "./Comments.scss";
import { USERS_TABLE } from "../temp/MockDatabase";

interface User {
  id?: number;
  nick: string;
  avatar: string;
  name?: string;
  surname?: string;
  age?: number;
  registeredAt?: any;
}

const Comments = (): JSX.Element => {
  const loggedInUser: any = USERS_TABLE.find((user) => user.id === 1);

  const userInfoBlock = <T extends User>(arg: T): JSX.Element => (
    <div className="userCommentInput__wrapper-user col-3">
      <img
        src={arg?.avatar}
        alt="user avatar"
        className="userCommentInput__wrapper-user--avatar"
      />
      <span className="userCommentInput__wrapper-user--nick">{arg?.nick}</span>
    </div>
  );

  const userCommentInput: JSX.Element = (
    <div className="userCommentInput__wrapper">
      {userInfoBlock(loggedInUser)}
      <div className="userCommentInput__wrapper-input col-8">
        <textarea
          className="form-control"
          aria-label="With textarea"
          placeholder="Write a comment now!"
        ></textarea>
      </div>
    </div>
  );

  const otherComments: JSX.Element = (
    <div className="otherComments__wrapper">
      {USERS_TABLE.slice(1, 4).map((comment, idx: number) => (
        <div className="otherComments__wrapper-each" key={idx}>
          {userInfoBlock(comment)}
          <span>User's comment will be here.</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="comments__wrapper">
      <div className="comments__content">
        {userCommentInput}
        {otherComments}
      </div>
    </div>
  );
};

export default Comments;
