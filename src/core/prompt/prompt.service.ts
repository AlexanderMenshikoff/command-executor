import inquirer from "inquirer";
import { promptType } from "./prompt.type";

export class PromptService {
  public async input<T>(message: string, type: promptType) {
    const { result } = await inquirer.prompt<{ result: T }>([
      {
        type,
        name: "result",
        message,
      },
    ]);
    return result;
  }
}
