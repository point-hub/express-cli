#!/usr/bin/env node

import { commands } from "./dist/example/index.js";
import { ExpressCli } from "./dist/index.js";

const cli = new ExpressCli("node cli");
commands(cli);
cli.run(process.argv);
