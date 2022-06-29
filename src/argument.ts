/* eslint-disable @typescript-eslint/no-explicit-any */
import arg from "arg";
import { IParsedArguments } from "./base-command.js";
import { IArgument } from "./command.js";

export class Argument {
  static list(args: string[]) {
    const result = arg(
      {},
      {
        argv: args.slice(2),
        permissive: true,
      }
    );
    return result._.filter((el) => {
      return el.substring(0, 1) !== "-";
    });
  }
  static parse(args: string[], cmdArguments: IArgument[]) {
    // Check args have too many arguments
    if (args.length > cmdArguments.length) {
      throw new Error("Too many arguments");
    }

    // parsing argument into object with key name
    const parseArgs: any = {};
    for (let i = 0; i < cmdArguments.length; i++) {
      const cmdArgument = cmdArguments[i];
      parseArgs[cmdArgument.name] = args[i];
    }
    try {
      return parseArgs;
    } catch (error) {
      throw error;
    }
  }
  static requireArguments(args: IParsedArguments) {
    let requiredArgs = "";
    const keys = Object.keys(args);
    keys.forEach((key, index, array) => {
      if (args[key] === undefined) {
        requiredArgs += key;
        if (index < array.length - 1) {
          requiredArgs += ", ";
        }
      }
    });

    if (requiredArgs !== "") {
      throw new Error(`Argument ${requiredArgs} is required`);
    }
  }
}
