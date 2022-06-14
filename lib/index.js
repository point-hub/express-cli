import chalk from "chalk";
import { createCommand } from "commander";
export { BaseCommand } from "./base-command.js";
export class ExpressCli {
    constructor(name, version) {
        this.program = createCommand();
        this.program.name(name);
        this.program.version(version);
        this.program.configureHelp({
            sortSubcommands: true,
            sortOptions: true,
            subcommandTerm: (cmd) => chalk.green(cmd.name()),
        });
    }
    register(NewCommand) {
        new NewCommand(this.program);
    }
    build() {
        this.program.parseAsync(process.argv);
    }
}
