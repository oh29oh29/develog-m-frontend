import MockAdapter from "axios-mock-adapter";
import { categories } from "./responseData/categories";
import { totalPosts } from "./responseData/posts";
import { title1Posts } from "./responseData/posts";
import { title2Posts } from "./responseData/posts";
import { title3Posts } from "./responseData/posts";
import { title4Posts } from "./responseData/posts";

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
        this.mock.onGet('/title1').reply(200, title1Posts);
        this.mock.onGet('/title2').reply(200, title2Posts);
        this.mock.onGet('/title3').reply(200, title3Posts);
        this.mock.onGet('/title4').reply(200, title4Posts);
        this.mock.onGet(new RegExp(`/*`)).reply(200, totalPosts);
    }
}
