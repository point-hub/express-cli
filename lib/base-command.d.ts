import { Command } from "commander";
export interface IGenericClass {
    new (program: Command): void;
}
export interface IArgument {
    name: string;
    description?: string;
    default?: unknown;
}
export interface IOption {
    flags: string;
    description?: string;
    default?: string;
}
export interface IAttribute {
    name: string;
    description: string;
    summary: string;
    arguments: Array<IArgument>;
    options: Array<IOption>;
}
export declare abstract class BaseCommand extends Command {
    private program;
    constructor(program: Command);
    abstract attribute(): IAttribute;
    abstract handle(...params: Array<unknown>): void | Promise<void>;
}
