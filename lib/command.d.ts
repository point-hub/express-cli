import { BaseCommand } from "./base-command";
export interface ICommand {
    name: string;
    alias?: string[];
    summary: string;
    description: string;
    arguments: Array<IArgument>;
    options: Array<IOption | IOptionBoolean>;
}
export interface IArgument {
    name: string;
    description: string;
}
export interface IOption {
    type: "string";
    flag: string;
    description: string;
    default?: string;
}
export interface IOptionBoolean {
    type: "boolean";
    flag: string;
    shorthand?: string;
    description: string;
    default?: boolean;
}
export declare class Command {
    name: string;
    private commands;
    constructor(name: string);
    getCommands(): BaseCommand[];
    getCommand(name: string): BaseCommand | undefined;
    createCommand(cmd: BaseCommand): void;
    findDuplicate(): {
        isDuplicate: boolean;
        commands: string[];
        arguments: {
            command: string;
            arguments: string[];
        }[];
        options: {
            command: string;
            options: string[];
        }[];
    };
    private addHelpFlag;
}
