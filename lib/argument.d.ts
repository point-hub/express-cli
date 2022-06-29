import { IParsedArguments } from "./base-command.js";
import { IArgument } from "./command.js";
export declare class Argument {
    static list(args: string[]): string[];
    static parse(args: string[], cmdArguments: IArgument[]): any;
    static requireArguments(args: IParsedArguments): void;
}
