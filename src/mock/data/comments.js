const commentMockData1 = [
  { id: '101', postId: '1', memberId: 'oh29oh29', children: [], contents: '카테고리1의 포스트1의 댓글1', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '1'},
  { id: '102', postId: '1', memberId: 'oh29oh29', children: [], contents: '카테고리1의 포스트1의 댓글2', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '0'},
  { id: '103', postId: '1', memberId: 'oh29oh29', children: [
      { id: '1031', postId: '1', memberId: 'oh29oh29', contents: '카테고리1의 포스트1의 댓글3의 댓글1', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '1'},
      { id: '1032', postId: '1', memberId: 'oh29oh29', contents: '카테고리1의 포스트1의 댓글3의 댓글2', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '0'},
    ], contents: '카테고리1의 포스트1의 댓글3', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '0'},
  { id: '104', postId: '1', memberId: 'test', children: [], contents: '카테고리1의 포스트1의 댓글4', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '1'},
  { id: '105', postId: '1', memberId: 'test', children: [], contents: '카테고리1의 포스트1의 댓글5', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '1'},
  { id: '106', postId: '1', memberId: 'test', children: [], contents: '카테고리1의 포스트1의 댓글6', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '0'},
  { id: '107', postId: '1', memberId: 'oh29oh29', children: [], contents: '카테고리1의 포스트1의 댓글7', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '0'},
  { id: '108', postId: '1', memberId: 'oh29oh29', children: [], contents: '카테고리1의 포스트1의 댓글8', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '0'},
  { id: '109', postId: '1', memberId: 'oh29oh29', children: [], contents: '카테고리1의 포스트1의 댓글9', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '0'},
  { id: '110', postId: '1', memberId: 'oh29oh29', children: [], contents: '카테고리1의 포스트1의 댓글10', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '0'},
  { id: '111', postId: '1', memberId: 'oh29oh29', children: [], contents: '카테고리1의 포스트1의 댓글11', regDate: '20190131100000', lastUpdateDate: '20190201', isDeleted: '0'}
];

const commentEmptyMockData = [];

export const commentMockData = {
  commentMockData1, commentEmptyMockData
};
