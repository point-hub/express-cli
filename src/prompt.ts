import inquirer, { QuestionCollection } from "inquirer";
export class Prompt {
  static async prompt<T>(questions: QuestionCollection<T>, initialAnswers?: Partial<T>) {
    return await inquirer.prompt(questions, initialAnswers);
  }

  static separator() {
    return new inquirer.Separator();
  }
}
