import arg from "arg";
import { IParsedArguments, IParsedOptions } from "./base-command.js";
import { IArgument, IOption, IOptionBoolean } from "./command.js";
export declare class Option {
    /**
     * Convert arguments
     */
    static convert(options: Array<IOption | IOptionBoolean>): any;
    /**
     * Parse only root command
     */
    static parseRoot(rawArgs: string[], options: Array<IOption | IOptionBoolean>): arg.Result<any>;
    /**
     * Parse command
     */
    static parse(rawArgs: string[], args: Array<IArgument>, options: Array<IOption | IOptionBoolean>): {
        args: IParsedArguments;
        opts: IParsedOptions;
    };
}
