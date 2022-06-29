import { IArgument, ICommand, IOption, IOptionBoolean } from "./command.js";
export interface IParsedOptions {
    [key: string]: string | boolean;
}
export interface IParsedArguments {
    [key: string]: string;
}
export declare abstract class BaseCommand {
    opts: IParsedOptions;
    args: IParsedArguments;
    name: string;
    alias: string[];
    description: string;
    summary: string;
    arguments: Array<IArgument>;
    options: Array<IOption | IOptionBoolean>;
    constructor(command: ICommand);
    abstract handle(): void | Promise<void>;
}
