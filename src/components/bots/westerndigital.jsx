import { AnswerWise } from "../main";

  const App = () => {
      const questions = ["Question 1?", "Question 2", "Question 3"];
      const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzYW5kZWVwLnZhcm1hQGFpdGl1bWluYy5jb20iLCJwcm9qZWN0bmFtZSI6Ildlc3Rlcm4gRGlnaXRhbCJ9.wSj4Rws0Xp3aOtL9rffWnK_lZEqwLavtxNs4bKe8PO4";
      return (
          <div className="App">
              <AnswerWise apiKey={key} theme='default' color="#8B5CF6" questions={questions} />
          </div>
      );
  }
                    
  export default App