import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { QuestionsDTO } from "../models/QuestionariesGet/questionsDTO.model";
import { UserAnswersSelectionDTO } from "../models/QuestionaryAdd/UserAnswersSelectionDTO.model";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

const apiQuestionaryUrl = "https://localhost:44359/Questionary/Api";

@Injectable({
  providedIn: "root",
})
export class QuestionaryService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private http: HttpClient) {}

  getAllQuestionaries(): Observable<QuestionsDTO[]> {
    return this.http.get<QuestionsDTO[]>(
      apiQuestionaryUrl + "/GetAllQuestionaries/"
    );
  }

  create(userAnswersSelectionDTO): Observable<UserAnswersSelectionDTO> {
    return this.http
      .post<UserAnswersSelectionDTO>(
        apiQuestionaryUrl + "/AddQuestionary/",
        JSON.stringify(userAnswersSelectionDTO),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  isDuplicateUserName(userName): Observable<boolean> {
    return this.http.get<boolean>(
      apiQuestionaryUrl + "/isDuplicateUserName" + `/${userName}`
    );
  }

  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
