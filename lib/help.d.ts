import { BaseCommand } from "./base-command.js";
import { IOption, IOptionBoolean, IArgument, Command } from "./command.js";
export declare class Help {
    static separatorLength: number;
    static outputRoot: string;
    static output: string;
    static rootHelp(command: Command, options: Array<IOption | IOptionBoolean>): void;
    static commandHelp(command: Command, currentCommand: BaseCommand): void;
    /**
     * Break line symbol
     */
    static br(count?: number): string;
    /**
     * Get the longest commands name length
     */
    static commandTermLength(commands: Array<BaseCommand>): number;
    /**
     * Get the longest command options length
     */
    static optionTermLength(options: Array<IOption | IOptionBoolean>): number;
    /**
     * Get the longest command arguments length
     */
    static argumentTermLength(args: Array<IArgument>): number;
}
