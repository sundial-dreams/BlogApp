import App from "./app";
import { router } from "./routerConfig";

App.configRouter(router);
App.listen(8000, () => console.log("listen in 8000"));

