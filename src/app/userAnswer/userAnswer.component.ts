import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Router } from "@angular/router";

import { QuestionsDTO } from "../models/QuestionariesGet/questionsDTO.model";
import { UserAnswersDTO } from "../models/QuestionaryAdd/UserAnswersDTO.model";
import { QuestionaryService } from "../services/questionary.service";

@Component({
  selector: "user-answer",
  templateUrl: "./userAnswer.component.html",
})
export class UserAnswerComponent implements OnInit {
  questionsList: QuestionsDTO[] = [];
  userAnswersList: UserAnswersDTO[] = [];
  selectedAnswersIds: number[] = [];
  userName: string;
  questionIds: number[] = [];
  IsUserNameAvailable: boolean;
  constructor(
    public questionaryService: QuestionaryService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.getAllQuestionaries();
  }

  getAllQuestionaries() {
    this.questionaryService
      .getAllQuestionaries()
      .subscribe((data: QuestionsDTO[]) => {
        this.questionsList = data;
        let indexer = 0;

        this.questionsList.forEach((element) => {
          let useranswer = new UserAnswersDTO();
          useranswer.questionId = this.questionsList[indexer].questionId;
          indexer += 1;
          this.questionIds.push(useranswer.questionId);
        });
      });
  }

  Saveuestionary() {
    if (this.IsUserNameAvailable == true) return "User already exists!";
    let indexer = 0;
    this.userAnswersList = [];
    this.selectedAnswersIds.forEach((element) => {
      let useranswer = new UserAnswersDTO();
      useranswer.answerId = element;
      useranswer.questionId = this.questionsList[indexer].questionId;
      useranswer.userName = this.userName;
      this.userAnswersList.push(useranswer);
      indexer = indexer + 1;
    });
    this.questionaryService.create(this.userAnswersList).subscribe((res) => {
      if (!res) {
        return;
      }
    });
  }

  refresh() {
    this.document.location.reload();
  }

  isDuplicateUserName() {
    this.questionaryService
      .isDuplicateUserName(this.userName)
      .subscribe((result) => {
        this.IsUserNameAvailable = result;
      });
  }
}
