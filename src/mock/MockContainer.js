import MockAdapter from "axios-mock-adapter";
import { categories } from "./responseData/categories";
import { postMockData } from "./responseData/posts";

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
    this.mock.onGet('/JAVA/1').reply(200, postMockData.postMockData1);
    this.mock.onGet('/JAVA/2').reply(200, postMockData.postMockData2);
    this.mock.onGet('/Spring 프레임워크').reply(200, postMockData.postMockData2);
    this.mock.onGet('/JavaScript').reply(200, postMockData.postMockData3);
    this.mock.onGet('/Vuejs').reply(200, postMockData.postMockData4);
    this.mock.onGet('/Tomcat').reply(200, postMockData.postMockData5);
    this.mock.onGet('/JAVA/101').reply(200, postMockData.postMockData1[0]);
    this.mock.onGet(new RegExp(`/*`)).reply(200, postMockData.postTotalMockData);
  }
}
