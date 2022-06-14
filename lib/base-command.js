import { Command } from "commander";
export class BaseCommand extends Command {
    constructor(program) {
        var _a, _b, _c, _d;
        super();
        this.program = program;
        const command = this.program.command(this.cmdName());
        command.description(this.cmdDescription());
        command.summary(this.cmdSummary());
        for (let index = 0; index < this.cmdArguments().length; index++) {
            command.argument(this.cmdArguments()[index].name, (_a = this.cmdArguments()[index]) === null || _a === void 0 ? void 0 : _a.description, (_b = this.cmdArguments()[index]) === null || _b === void 0 ? void 0 : _b.default);
        }
        for (let index = 0; index < this.cmdOptions().length; index++) {
            command.option(this.cmdOptions()[index].flags, (_c = this.cmdOptions()[index]) === null || _c === void 0 ? void 0 : _c.description, (_d = this.cmdOptions()[index]) === null || _d === void 0 ? void 0 : _d.default);
        }
        command.action(this.handle);
    }
}
