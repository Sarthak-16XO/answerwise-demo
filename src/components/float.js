import { AnswerWise } from "answerwise-rbot";

  const float = () => {
      const questions = ["Question 1?", "Question 2", "Question 3"];
      const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJpbnNpbmV4OTFAZ21haWwuY29tIiwicHJvamVjdG5hbWUiOiJhaWl0dW13ZWIifQ.tW6CNNtb2cPpReB2H8-zSCdaVl5lfoQgBDuuOZjCpwM";
      return (
          <div className="App">
              <AnswerWise apiKey={key} theme='steve-ai' color="#8B5CF6" questions={questions} />
          </div>
      );
  }
                    
  export default float;