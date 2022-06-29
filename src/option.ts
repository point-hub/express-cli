/* eslint-disable @typescript-eslint/no-explicit-any */
import arg from "arg";
import { Argument } from "./argument.js";
import { IParsedArguments, IParsedOptions } from "./base-command.js";
import { IArgument, IOption, IOptionBoolean } from "./command.js";

export class Option {
  /**
   * Convert arguments
   */
  static convert(options: Array<IOption | IOptionBoolean>) {
    const parseArgs: any = {};
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      parseArgs[option.flag] = option.type === "boolean" ? Boolean : String;
      if (option.type == "boolean" && option.shorthand) {
        parseArgs[option.shorthand] = option.flag;
      }
    }

    return parseArgs;
  }

  /**
   * Parse only root command
   */
  static parseRoot(rawArgs: string[], options: Array<IOption | IOptionBoolean>) {
    try {
      const parseArgs = this.convert(options);
      return arg(parseArgs, {
        argv: rawArgs.slice(2),
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Parse command
   */
  static parse(rawArgs: string[], args: Array<IArgument>, options: Array<IOption | IOptionBoolean>) {
    try {
      const parseArgs = this.convert(options);
      const result = arg(parseArgs, {
        argv: rawArgs.slice(3),
      });

      const resultArgs: IParsedArguments = Argument.parse(result._, args);
      const resultOpts: IParsedOptions = result;

      return {
        args: resultArgs,
        opts: resultOpts,
      };
    } catch (error) {
      throw error;
    }
  }
}
