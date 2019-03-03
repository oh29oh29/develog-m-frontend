import MockAdapter from "axios-mock-adapter";
import { categories } from "./data/categories";
import { postMockData } from "./data/posts";
import { commentMockData } from "./data/comments";

export class MockContainer {
  constructor (axios) {
    this.mock = new MockAdapter(axios);
    this.createResponse();
  }

  createResponse () {
    this.mock.onGet('/category').reply(200, categories);
    this.mock.onPost('/category').reply(200);
    this.mock.onPatch('/category').reply(200);
    this.mock.onDelete('/category').reply(200);
    this.mock.onGet('/JAVA/1').reply(200, {
      posts: postMockData.postMockData1[0],
      page: {
        total: postMockData.postMockData1.length,
        start: 1,
        end: postMockData.postMockData1.length < 6 ? postMockData.postMockData1.length : 5,
        target: 1
      }
    });
    this.mock.onGet('/JAVA/2').reply(200, {
      posts: postMockData.postMockData1[1],
      page: {
        total: postMockData.postMockData1.length,
        start: 1,
        end: postMockData.postMockData1.length < 6 ? postMockData.postMockData1.length : 5,
        target: 2
      }
    });
    this.mock.onGet('/JAVA/3').reply(200, {
      posts: postMockData.postMockData1[2],
      page: {
        total: postMockData.postMockData1.length,
        start: 1,
        end: postMockData.postMockData1.length < 6 ? postMockData.postMockData1.length : 5,
        target: 3
      }
    });
    this.mock.onGet('/JAVA/4').reply(200, {
      posts: postMockData.postMockData1[3],
      page: {
        total: postMockData.postMockData1.length,
        start: 1,
        end: postMockData.postMockData1.length < 6 ? postMockData.postMockData1.length : 5,
        target: 4
      }
    });
    this.mock.onGet('/JAVA/5').reply(200, {
      posts: postMockData.postMockData1[4],
      page: {
        total: postMockData.postMockData1.length,
        start: 1,
        end: postMockData.postMockData1.length < 6 ? postMockData.postMockData1.length : 5,
        target: 5
      }
    });
    this.mock.onGet('/JAVA/6').reply(200, {
      posts: postMockData.postMockData1[5],
      page: {
        total: postMockData.postMockData1.length,
        start: 6,
        end: postMockData.postMockData1.length < 10 ? postMockData.postMockData1.length : 10,
        target: 6
      }
    });
    this.mock.onGet('/Spring 프레임워크/1').reply(200, postMockData.postMockData2);
    this.mock.onGet('/JavaScript/1').reply(200, postMockData.postMockData3);
    this.mock.onGet('/Vuejs/1').reply(200, postMockData.postMockData4);
    this.mock.onGet('/Tomcat/1').reply(200, postMockData.postEmptyMockData);
    this.mock.onGet('/JAVA/카테고리1의 포스트1').reply(200, {
      post: postMockData.postMockData1[0][0],
      comments: commentMockData.commentMockData1
    });
    this.mock.onGet('/JAVA/카테고리1의 포스트2').reply(200, {
      post: postMockData.postMockData1[0][1],
      comments: commentMockData.commentEmptyMockData
    });
    this.mock.onGet(new RegExp(`/*`)).reply(200);
  }
}
