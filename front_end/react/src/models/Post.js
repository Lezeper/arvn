export class Post {
    constructor(obj) {
        if (!obj) return null;

        this.title = obj.title;
        this.body = obj.body;
    }
}