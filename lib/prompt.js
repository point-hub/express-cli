import inquirer from "inquirer";
export class Prompt {
    static async prompt(questions, initialAnswers) {
        return await inquirer.prompt(questions, initialAnswers);
    }
    static separator() {
        return new inquirer.Separator();
    }
}
