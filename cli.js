#!/usr/bin/env node

import { commands } from "./lib-dev/example/index.js";
import { ExpressCli } from "./lib-dev/index.js";

const cli = new ExpressCli("node cli");
commands(cli);
cli.run(process.argv);
