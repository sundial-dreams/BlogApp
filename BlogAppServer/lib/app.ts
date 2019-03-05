import * as Express from "express";

class App {
    private readonly app: Express.Application;

    public constructor () {
        this.app = Express();
    }

    public use (middleware?: Array<Express.RequestHandler>): App {
        this.app.use(...middleware);
        return this;
    }

    public configRouter (router: Array<{ path: string, router: Express.Router }>) {
        router.forEach(({ path, router }) => {
            this.app.use(path, router)
        });
        return this;
    }

    public listen (port, ...callbacks: Array<Function>): void {
        this.app.listen(port, ...callbacks)
    }

    public getapp (): Express.Application {
        return this.app;
    }

}

export default new App();




