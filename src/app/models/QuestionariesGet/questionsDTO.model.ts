import { AnswersDTO } from "./AnswersDTO.model";

export interface  QuestionsDTO {
  questionName: string;
  questionId: number;
  answers: AnswersDTO[];
}
