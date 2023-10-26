import { AnswerWise } from "../main";

  const App = () => {
      const questions = ["Question 1?", "Question 2", "Question 3"];
      const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzYW5kZWVwLnZhcm1hQGFpdGl1bWluYy5jb20iLCJwcm9qZWN0bmFtZSI6IlRpYWEifQ.671Ix24bAsy2L63QH-VeDEeuV46HuZEjtM2qkAf0S4I";
      return (
          <div className="App">
              <AnswerWise apiKey={key} theme='default' color="#8B5CF6" questions={questions} />
          </div>
      );
  }
                    
  export default App