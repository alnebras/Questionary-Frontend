import { UserAnswersDTO } from "./UserAnswersDTO.model";

export class UserAnswersSelectionDTO {
  userName: string;
  submissionDate: Date;
  questionId: number;
  userAnswers: UserAnswersDTO[] = [];
}
