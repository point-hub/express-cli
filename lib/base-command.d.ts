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
export declare abstract class BaseCommand extends Command {
    private program;
    constructor(program: Command);
    abstract cmdName(): string;
    abstract cmdDescription(): string;
    abstract cmdSummary(): string;
    abstract cmdArguments(): Array<IArgument>;
    abstract cmdOptions(): Array<IOption>;
    abstract handle(...params: Array<unknown>): unknown | Promise<unknown>;
}
