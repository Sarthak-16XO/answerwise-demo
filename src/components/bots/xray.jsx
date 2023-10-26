import { AnswerWise } from "../main";

  const App = () => {
      const questions = ["Question 1?", "Question 2", "Question 3"];
      const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzYW5kZWVwLnZhcm1hQGFpdGl1bWluYy5jb20iLCJwcm9qZWN0bmFtZSI6InhyYXkifQ.FdJ-jf7IFVJlFKKXbyDGS7xOCD1ptl2JIfJ-R7OQ4fE";
      return (
          <div className="App">
              <AnswerWise apiKey={key} theme='default' color="#8B5CF6" questions={questions} />
          </div>
      );
  }
                    
  export default App