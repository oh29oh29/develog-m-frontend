const commentMockData1 = [
  { id: '101', postId: '1', memberId: 'oh29oh29', parentCommentId: null, contents: '카테고리1의 포스트1의 댓글1', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: true},
  { id: '102', postId: '1', memberId: 'oh29oh29', parentCommentId: null, contents: '카테고리1의 포스트1의 댓글2', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: false},
  { id: '103', postId: '1', memberId: 'oh29oh29', parentCommentId: null, contents: '카테고리1의 포스트1의 댓글3', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: false},
  { id: '1031', postId: '1', memberId: 'oh29oh29', parentCommentId: '103', contents: '카테고리1의 포스트1의 댓글3의 댓글1', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: false},
  { id: '1032', postId: '1', memberId: 'oh29oh29', parentCommentId: '103', contents: '카테고리1의 포스트1의 댓글3의 댓글2', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: false},
  { id: '104', postId: '1', memberId: 'test', parentCommentId: null, contents: '카테고리1의 포스트1의 댓글4', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: false},
  { id: '105', postId: '1', memberId: 'test', parentCommentId: null, contents: '카테고리1의 포스트1의 댓글5', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: false},
  { id: '106', postId: '1', memberId: 'test', parentCommentId: null, contents: '카테고리1의 포스트1의 댓글6', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: false},
  { id: '107', postId: '1', memberId: 'oh29oh29', parentCommentId: null, contents: '카테고리1의 포스트1의 댓글7', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: false},
  { id: '108', postId: '1', memberId: 'oh29oh29', parentCommentId: null, contents: '카테고리1의 포스트1의 댓글8', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: false},
  { id: '109', postId: '1', memberId: 'oh29oh29', parentCommentId: null, contents: '카테고리1의 포스트1의 댓글9', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: false},
  { id: '110', postId: '1', memberId: 'oh29oh29', parentCommentId: null, contents: '카테고리1의 포스트1의 댓글10', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: false},
  { id: '111', postId: '1', memberId: 'oh29oh29', parentCommentId: null, contents: '카테고리1의 포스트1의 댓글11', regDate: '2019.01.31 10:00', lastUpdateDate: '2019.02.01 10:00', isDeleted: false}
];

const commentEmptyMockData = [];

export const commentMockData = {
  commentMockData1, commentEmptyMockData
};
