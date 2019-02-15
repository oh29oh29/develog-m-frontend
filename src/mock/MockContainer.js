import MockAdapter from "axios-mock-adapter";
import { categories } from "./responseData/categories";
import { posts } from "./responseData/posts";

export class MockContainer {
    constructor (axios) {
        this.mock = new MockAdapter(axios)
        this.createResponse();
    }

    createResponse () {
        this.mock.onGet('/category').reply(200, categories);
        this.mock.onPost('/category').reply(200);
        this.mock.onPatch('/category').reply(200);
        this.mock.onDelete('/category').reply(200);
        this.mock.onGet('/post').reply(200, posts);
    }
}
