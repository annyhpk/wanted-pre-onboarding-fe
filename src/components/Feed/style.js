import styled from 'styled-components';

export const FeedsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;

export const FeedWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  max-width: 29.5rem;
  border: #dbdbdb solid 1px;
  margin: 0px -1px 15px -1px;
  flex-direction: column;
  font-size: 14px;
  color: #262626;

  @media (max-width: 480px) {
    max-width: 22.5rem;
  }
`;

export const FeedTop = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin: 0 12px 0 12px;

  .publisher {
    font-size: 14px;
    font-weight: 600;
    margin: auto 12px;
  }

  .user-info {
    display: inline-flex;
    margin: 12px 0;
    width: 100%;
  }

  .user-info > img {
    border-radius: 50%;
    width: 32px;
  }
`;

export const FeedMiddle = styled.div`
  justify-content: center;
  border-left: #dbdbdb solid 1px;
  border-right: #dbdbdb solid 1px;

  img {
    width: 100%;
    max-height: 36.7rem;
  }
`;

export const FeedBottom = styled.div`
  display: flex;
  margin: 12px;
  flex-direction: column;
  gap: 8px;

  .chat {
    transform: scaleX(-1);
  }

  .likes {
    font-weight: bold;
  }

  .icon-bar {
    display: flex;
    justify-content: space-between;
  }

  .left-icons {
    display: flex;
    gap: 16px;
    margin: auto 0;
  }

  .article-box {
    display: inline-flex;
  }
  button {
    background: white;
    color: gray;
    text-align: left;
    padding: 0;
    font-size: 14px;
    margin-top: -2px;
  }
  .article {
    white-space: nowrap;
    width: 20rem;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 5px;
  }
  .publisher {
    font-weight: bold;
    margin-right: 5px;
  }

  .createAt {
    font-size: 8px;
    color: gray;
  }
`;

export const CommentSection = styled.section`
  border-top: #dbdbdb solid 1px;
  padding: 4px 12px;

  .comments-box {
    display: flex;
    align-items: center;
    font-weight: 400;
  }

  .comments-box > textarea {
    display: flex;
    font-size: 14px;
    font-family: inherit;
    height: 18px;
    max-height: 80px;
    width: 85%;
    padding: 0;
    line-height: 18px;
    resize: none;
  }

  button {
    background: white;
    padding: 0;
  }

  .emoji {
    padding: 8px 12px 8px 0;
  }

  .submit {
    width: 28px;
    height: 18px;
    color: dodgerblue;
  }
`;
