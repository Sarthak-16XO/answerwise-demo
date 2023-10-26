import { AnswerWise } from "./main";

  const float = () => {
      const questions = ["Question 1?", "Question 2", "Question 3"];
      const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzYW5kZWVwLnZhcm1hQGFpdGl1bWluYy5jb20iLCJwcm9qZWN0bmFtZSI6Ikx1Y2lkIn0.nO8bfq2k5FXT11mydoDsF4rZeHnnFd7rWSgjpprHUK0";
      return (
          <div className="App">
              <AnswerWise apiKey={key} theme='default' color="#8B5CF6" questions={questions} />
          </div>
      );
  }
                    
  export default float;