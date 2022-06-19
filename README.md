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

1. create command file `src/commands/example-command.ts`

```ts
import { BaseCommand, IAttribute, IArgument, IOption } from "@point-hub/express-cli";

export class ExampleCommand extends BaseCommand {
  attribute(): IAttribute {
    return {
      name: "example",
      description: "description",
      summary: "summary",
      arguments: [
        {
          name: "<name>",
          description: "Example Argument",
        },
      ],
      options: [
        {
          flags: "-g, --greet <value>",
          description: "Example Option",
          default: "Hello",
        },
      ]
    };
  }
  async handle(): Promise<void> {
    setTimeout(() => {
      console.log("options", this.opts());
    }, 1000);
    console.log("arguments", this.args);
  }
}
```

2. create an entry point file `src/ìndex.ts`

```ts
import { createRequire } from "module";
import { ExpressCli } from "@point-hub/express-cli";
// Import commands
import { ExampleCommand } from "./commands/example-command.js";

const require = createRequire(import.meta.url);
const { version } = require("./package.json");

const expressCli = new ExpressCli("cli", version);
// Register commands
expressCli.register(ExampleCommand);
// Publish CLI
expressCli.build();
```

3. compile typescript to `"lib"` directory

4. create an executeable file `bin/cli.js` and make it executeable `chmod +x bin/cli.js`

```js
#!/usr/bin/env node

import "../lib/index.js";
```

5. try your command using `node bin/cli.js example --greet=Hello`

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