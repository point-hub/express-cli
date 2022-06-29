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

export class Command {
  public name: string;
  private commands: BaseCommand[] = [];

  constructor(name: string) {
    this.name = name;
  }

  getCommands() {
    return this.commands.filter((el) => el.name !== "");
  }

  getCommand(name: string) {
    return this.commands.find((el) => el.name === name) ?? this.commands.find((el) => el.alias.includes(name));
  }

  createCommand(cmd: BaseCommand) {
    this.addHelpFlag(cmd);
    this.commands.push(cmd);
  }

  findDuplicate() {
    const seenCommands = new Set();

    const duplicateCommands: Array<string> = [];
    const duplicateArguments: Array<{ command: string; arguments: string[] }> = [];
    const duplicateOptions: Array<{ command: string; options: string[] }> = [];

    this.commands.forEach((el) => {
      // Duplicate commands
      if (seenCommands.size === seenCommands.add(el.name).size) {
        duplicateCommands.push(el.name);
      }

      // Duplicate arguments
      const args: string[] = [];
      const seenArguments = new Set();
      el.arguments.forEach((arg) => {
        if (seenArguments.size === seenArguments.add(arg.name).size) {
          args.push(arg.name);
        }
      });

      if (args.length > 0) {
        duplicateArguments.push({
          command: el.name,
          arguments: args,
        });
      }

      // Duplicate options
      const opts: string[] = [];
      const seenOptions = new Set();
      el.options.forEach((option) => {
        if (seenOptions.size === seenOptions.add(option.flag).size) {
          opts.push(option.flag);
        }
        if (
          option.type === "boolean" &&
          option.shorthand &&
          seenOptions.size === seenOptions.add(option.shorthand).size
        ) {
          opts.push(option.shorthand);
        }
      });

      if (opts.length > 0) {
        duplicateOptions.push({
          command: el.name,
          options: opts,
        });
      }
    });

    return {
      isDuplicate: duplicateCommands.length > 0 || duplicateArguments.length > 0 || duplicateOptions.length > 0,
      commands: duplicateCommands,
      arguments: duplicateArguments,
      options: duplicateOptions,
    };
  }

  private addHelpFlag(cmd: BaseCommand) {
    cmd.options.push({
      type: "boolean",
      flag: "--help",
      shorthand: "-h",
      description: "Display help",
    });
  }
}
