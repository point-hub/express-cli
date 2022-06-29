import { Argument } from "./argument.js";
import { BaseCommand } from "./base-command.js";
import { Command } from "./command.js";
import { Help } from "./help.js";
import { Option } from "./option.js";
export { Prompt } from "./prompt.js";
export { Color } from "./color.js";
export { Table, DefaultTable } from "./table.js";
export { Argument, BaseCommand, Command, Help, Option };
export declare class ExpressCli {
    private command;
    version: string;
    constructor(name: string, version?: string);
    /**
     * Set cli version from package.json version
     */
    private packageVersion;
    /**
     * Register commands
     */
    register(cmd: BaseCommand): void;
    /**
     * Run CLI application
     */
    run(args: string[]): void;
}
