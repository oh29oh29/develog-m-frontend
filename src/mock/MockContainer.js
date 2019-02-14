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
        this.mock.onPost('/category').reply(config => {
            console.log(JSON.parse(config.data))
            console.log(JSON.parse(config.data).params)
            return [200]
        });
        this.mock.onGet('/post').reply(200, posts);
    }
}
