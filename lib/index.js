/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRequire } from "module";
import { Argument } from "./argument.js";
import { BaseCommand } from "./base-command.js";
import { Color } from "./color.js";
import { Command } from "./command.js";
import { Help } from "./help.js";
import { Option } from "./option.js";
export { Prompt } from "./prompt.js";
export { Color } from "./color.js";
export { Table, DefaultTable } from "./table.js";
export { Argument, BaseCommand, Command, Help, Option };
export class ExpressCli {
    constructor(name, version) {
        if (version) {
            this.version = version;
        }
        else {
            this.version = this.packageVersion();
        }
        this.command = new Command(name);
    }
    /**
     * Set cli version from package.json version
     */
    packageVersion() {
        const require = createRequire(import.meta.url);
        const { version } = require("../package.json");
        return version;
    }
    /**
     * Register commands
     */
    register(cmd) {
        this.command.createCommand(cmd);
    }
    /**
     * Run CLI application
     */
    run(args) {
        try {
            /**
             * Check duplicate commands, arguments, and options
             */
            const duplicate = this.command.findDuplicate();
            if (duplicate.isDuplicate) {
                if (duplicate.commands.length) {
                    console.error(Color.red("[ERROR] Duplicate commands"));
                    console.error(duplicate.commands);
                }
                if (duplicate.arguments.length) {
                    console.error(Color.red("[ERROR] Duplicate arguments"));
                    console.error(duplicate.arguments);
                }
                if (duplicate.options.length) {
                    console.error(Color.red("[ERROR] Duplicate options"));
                    console.error(duplicate.options);
                }
                return;
            }
            /**
             * Return root help if don't have any arguments / options
             */
            const argumentList = Argument.list(args);
            if (argumentList.length === 0) {
                const options = [
                    {
                        type: "boolean",
                        flag: "--version",
                        shorthand: "-v",
                        description: "Display version",
                    },
                    {
                        type: "boolean",
                        flag: "--help",
                        shorthand: "-h",
                        description: "Display help",
                    },
                ];
                const flags = Option.parseRoot(args, options);
                if (flags["--version"]) {
                    return console.log(this.version);
                }
                return Help.rootHelp(this.command, options);
            }
            /**
             * Check if command available
             */
            let currentCommand = this.command.getCommand(args[2]);
            if (!currentCommand) {
                currentCommand = this.command.getCommand("");
            }
            if (!currentCommand) {
                throw new Error("Command not found");
            }
            /**
             * Parse options and arguments from console into object
             */
            const parsed = Option.parse(args, currentCommand.arguments, currentCommand.options);
            currentCommand.args = parsed.args;
            currentCommand.opts = parsed.opts;
            /**
             * If help flag is found, show help instead
             */
            if (currentCommand.opts["--help"]) {
                return Help.commandHelp(this.command, currentCommand);
            }
            /**
             * Argument should not undefined
             */
            Argument.requireArguments(currentCommand.args);
            /**
             * Handle command
             */
            currentCommand.handle();
        }
        catch (error) {
            if (error instanceof Error) {
                return console.error(Color.red(`[ERROR] ${error.message}`));
            }
            return console.error(error);
        }
    }
}
