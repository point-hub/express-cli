import { BaseCommand } from "../../base-command.js";
import { Prompt } from "../../prompt.js";

export class GreetCommand extends BaseCommand {
  constructor() {
    super({
      name: "greet",
      summary: "Welcome someone",
      description: "Welcome someone with particular words",
      alias: ["gret", "say"],
      arguments: [
        {
          name: "name",
          description: "Your name",
        },
      ],
      options: [
        {
          type: "boolean",
          flag: "--smile",
          shorthand: "-s",
          description: "Add smiley :)",
        },
      ],
    });
  }
  async handle() {
    const prompt = await Prompt.ask([
      {
        type: "confirm",
        name: "print",
        message: "Do you want to print greeting ?",
      },
    ]);

    if (prompt.print) {
      let output = "";
      output += "Hello, " + this.args.name;

      if (this.opts["--smile"]) {
        output += " :)";
      }

      console.log(output);
    }
  }
}
