import { listen } from "@proxtx/framework";
import config from "@proxtx/config";
import { setConfig } from "@proxtx/framework/static.js";

setConfig({ ignoreParseHtml: ["/components"] });

let result = await listen(config.port);
console.log(`Server Running. Port: ${config.port}`);
