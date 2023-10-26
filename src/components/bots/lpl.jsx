import { AnswerWise } from "answerwise-rbot";

  const App = () => {
      const questions = ["Question 1?", "Question 2", "Question 3"];
      const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzYW5kZWVwLnZhcm1hQGFpdGl1bWluYy5jb20iLCJwcm9qZWN0bmFtZSI6IkxQTCBGaW5hbmNpYWwifQ.BMduNkndE6N8os-iOXekrEVnWX_oKQaKtZ38TwiyoUI";
      return (
          <div className="App">
              <AnswerWise apiKey={key} theme='steve-ai' color="#8B5CF6" questions={questions} />
          </div>
      );
  }
                    
  export default App