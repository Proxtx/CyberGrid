import { listen } from "@proxtx/framework";
import config from "@proxtx/config";

let result = await listen(config.port);
