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
    this.mock.onGet('/post').reply(config => {
      const params = config.params;
      const categoryName = params.categoryName;
      const page = params.page;
      let response;

      if (categoryName === 'JAVA') {
        response = {
          posts: postMockData.postMockData1[parseInt(page) - 1],
          page: {
            total: postMockData.postMockData1.length,
            start: 1,
            end: postMockData.postMockData1.length < 6 ? postMockData.postMockData1.length : 5,
            target: parseInt(page)
          }
        }
      } else if (categoryName === 'Spring 프레임워크') {
        response = {
          posts: postMockData.postMockData2[parseInt(page) - 1],
          page: {
            total: postMockData.postMockData2.length,
            start: 1,
            end: postMockData.postMockData2.length < 6 ? postMockData.postMockData2.length : 5,
            target: parseInt(page)
          }
        }
      } else if (categoryName === 'JavaScript') {
        response = {
          posts: postMockData.postMockData3[parseInt(page) - 1],
          page: {
            total: postMockData.postMockData3.length,
            start: 1,
            end: postMockData.postMockData3.length < 6 ? postMockData.postMockData3.length : 5,
            target: parseInt(page)
          }
        }
      } else if (categoryName === 'Vuejs') {
        response = {
          posts: postMockData.postMockData4[parseInt(page) - 1],
          page: {
            total: postMockData.postMockData4.length,
            start: 1,
            end: postMockData.postMockData4.length < 6 ? postMockData.postMockData4.length : 5,
            target: parseInt(page)
          }
        }
      } else if (categoryName === 'Tomcat') {
        response = {
          posts: postMockData.postEmptyMockData
        }
      } else {
        return [404];
      }

      return [200, response];
    });
    this.mock.onGet('/JAVA/c1p1').reply(200, {
      post: postMockData.postMockData1[0][0],
      comments: commentMockData.commentMockData1
    });
    this.mock.onGet('/JAVA/c1p2').reply(200, {
      post: postMockData.postMockData1[0][1],
      comments: commentMockData.commentEmptyMockData
    });
    this.mock.onGet('/JAVA/c1p3').reply(200, {
      post: postMockData.postMockData1[0][2],
      comments: commentMockData.commentEmptyMockData
    });
    this.mock.onGet('/sign-in').reply(config => {
      const data = JSON.parse(config.data);
      return [200, {
        id: data.id,
        name: '권혁재',
        role: 'ADMIN',
        accessToken: 'THIS_IS_ACCESS_TOKEN'
      }]
    });
    this.mock.onGet('/sign-out').reply(200);
    this.mock.onPost('/post').reply(config => {
      console.log(config);
      return [200, {
        categoryName: 'JAVA'
      }];
    });
    this.mock.onGet(new RegExp(`/*`)).reply(200);
  }
}
