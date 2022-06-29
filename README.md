# Express Cli

> This is an Express ESM-only module library - you are not able to import it with `require()`.

## Install

```bash
npm install @point-hub/express-cli
```

## Directory Example

```
•
├── bin
│   └── cli.js
├── lib
└── src
    ├── commands
    │   └── example-command.ts
    └── index.ts
```

## Usage Example

1. create command file `src/commands/greet-command.ts`

```ts
import { BaseCommand } from "@point-hub/express-cli";

export class GreetCommand extends BaseCommand {
  constructor() {
    super({
      name: "greet",
      summary: "Welcome someone",
      description: "Welcome someone with particular words",
      alias: ["gret", "say"],
      arguments: [
        {
          name: "name",
          description: "Your name",
        },
      ],
      options: [
        {
          type: "boolean",
          flag: "--smile",
          shorthand: "-s",
          description: "Add smiley :)",
        },
      ],
    });
  }
  handle() {
    // handle command here
  }
}

```

2. create an entry point file `src/ìndex.ts`

```ts
import { ExpressCli } from "@point-hub/express-cli";
import { GreetCommand } from "./commands/greet.command.js";

/**
 * Register the commands for the application.
 *
 * @example
 * command.register(ExampleCommand);
 */
export function commands(command: ExpressCli): void {
  command.register(new GreetCommand());
}
```

3. compile typescript to `"lib"` directory

4. create an executeable file `bin/cli.js` and make it executeable `chmod +x bin/cli.js`

```js
#!/usr/bin/env node

import { commands } from "../lib/index.js";
import { ExpressCli } from "@point-hub/express-cli";

const cli = new ExpressCli("cli");
commands(cli);
cli.run(process.argv);
```

5. try your command using `node bin/cli.js greet John`

## Known Issues

-  [jest-resolve cannot find module #ansi-styles](https://github.com/chalk/chalk/issues/532)

Workaround:

Using "moduleNameMapper" in your jest configuration will make test-resolve work as expected
```
"jest": {
  "moduleNameMapper": {
    "#(.*)": "<rootDir>/node_modules/$1"
  }
}
```