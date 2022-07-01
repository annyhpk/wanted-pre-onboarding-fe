import React, { memo, Suspense, lazy } from 'react';
import {
  FeedWrapper,
  FeedTop,
  FeedMiddle,
  FeedBottom,
  CommentSection,
} from './style';
import { ThreeDots } from '@styled-icons/bootstrap/ThreeDots';
import { Heart } from '@styled-icons/bootstrap/Heart';
import { Chat } from '@styled-icons/bootstrap/Chat';
import { PaperPlane } from '@styled-icons/ionicons-outline/PaperPlane';
import { Bookmark } from '@styled-icons/bootstrap/Bookmark';
import { EmojiSmile } from '@styled-icons/bootstrap/EmojiSmile';

import TextareaAutosize from 'react-textarea-autosize';

import Spinner from '../Spiner';
const FeedImage = lazy(() => import('../FeedImage'));

const Feed = ({ feedData }) => {
  return (
    <FeedWrapper>
      <FeedTop>
        <div className="user-info">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="avatar"
          />
          <p className="publisher">{feedData.publisher}</p>
        </div>
        <ThreeDots size="18" />
      </FeedTop>
      <FeedMiddle>
        <Suspense fallback={<Spinner />}>
          <FeedImage src={feedData?.image} id={feedData?.id} />
        </Suspense>
      </FeedMiddle>
      <FeedBottom>
        <div className="icon-bar">
          <div className="left-icons">
            <Heart size="24" />
            <Chat className="chat" size="24" />
            <PaperPlane size="24" />
          </div>
          <Bookmark size="24" />
        </div>
        <div className="likes">
          <p>좋아요 {feedData.likes.length}개</p>
        </div>
        <div className="article-box">
          <p className="publisher">{feedData.publisher}</p>
          <p className="article">{feedData.article}</p>
          <button>더 보기</button>
        </div>
        <button>댓글 {feedData.comments.length}개 모두 보기</button>
        <p className="createAt">
          {Math.floor((new Date() - new Date(feedData.createdAt)) / 86400000)}일
          전
        </p>
      </FeedBottom>
      <CommentSection>
        <form className="comments-box">
          <button className="emoji">
            <EmojiSmile size="24" />
          </button>
          <TextareaAutosize placeholder="댓글 달기..." />
          <button className="submit" type="submit">
            게시
          </button>
        </form>
      </CommentSection>
    </FeedWrapper>
  );
};

export default memo(Feed);
