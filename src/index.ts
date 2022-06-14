import chalk from "chalk";
import { createCommand } from "commander";
import { IGenericClass } from "./base-command.js";

export { BaseCommand, IGenericClass, IArgument, IOption } from "./base-command.js";

export class ExpressCli {
  program = createCommand();

  constructor(name: string, version: string) {
    this.program.name(name);
    this.program.version(version);

    this.program.configureHelp({
      sortSubcommands: true,
      sortOptions: true,
      subcommandTerm: (cmd) => chalk.green(cmd.name()),
    });
  }

  register(NewCommand: IGenericClass) {
    new NewCommand(this.program);
  }

  build() {
    this.program.parseAsync(process.argv);
  }
}
