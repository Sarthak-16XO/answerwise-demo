import React, { useEffect, useRef, useState } from "react";
import { generateModelResponse, generateQuestionResponse } from "../api/index";
import { RxReset } from "react-icons/rx"
import { AiFillCloseCircle } from "react-icons/ai"
import { Comment } from "react-loader-spinner";
import { BiSolidUser } from "react-icons/bi"
import { FaRobot } from "react-icons/fa";

function Sender({ text, color }) {
  const [displayText, setDisplayText] = useState('');
  const typingDelay = 30;

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        currentText += text[currentIndex];
        setDisplayText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingDelay);

    return () => clearInterval(typingInterval);
  }, [text]);


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);


  const commonStyles = {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    maxWidth: '40rem',
  };

  const desktopStyles = {
    ...commonStyles,
    fontSize: '1rem',
    width: '25rem',
  };

  const mobileStyles = {
    ...commonStyles,
    fontSize: '1rem',
    width: '15rem',
  };


  return (
    <div
      className="flex space-x-3"
      style={{
        display: 'flex',
        width: '100%',
        columnGap: '0.05rem',
        maxWidth: '20rem',
      }}
    >
      <div
        style={{
          height: '3rem',
          width: '3rem',
          marginRight: '0.5rem',
          borderRadius: '50%',
          backgroundColor: 'white',
        }}
      >
        <FaRobot
          style={{
            color: color,
            padding: '0.5rem',
            width: '3rem',
            height: '3rem',
          }}
        />
      </div>
      <div className="shadow-lg">
        <div style={isMobile ? mobileStyles : desktopStyles}>
          <p className="text-slate-900">{displayText}</p>
        </div>
      </div>
    </div>
  );
}

function Reciever({ text, color }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "5px",
        columnGap: "0.75rem",
        maxWidth: "20rem",
        marginLeft: "auto",
        justifyContent: "flex-end",
        marginBottom: "1rem"
      }}
    >
      <div>
        <div
          style={{
            backgroundColor: color,
            color: "#fff",
            padding: "0.75rem",
            borderRadius: "0.5rem 0 0.5rem 0.5rem",
            marginTop: "0.5em",
            marginBottom: "0.5em"
          }}
        >
          <p style={{ fontSize: "0.875rem" }}>{text}</p>
        </div>
      </div>
      <div
        style={{
          height: "3rem",
          width: "3rem",
          marginRight: "0.5rem",
          borderRadius: "50%",
          backgroundColor: "white"
        }}
      >
        <BiSolidUser style={{
          color: color,
          padding: "0.5rem",
          width: "3rem",
          height: "3rem"
        }} />
      </div>
    </div>
  );
}

function Chat({ setPrompt, apiKey, prompt, chats, setChats, loading, setIsLoading, color, questions, onClickSend }) {
  const messagesEndRef = useRef(null);
  const [response, setResponse] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isResponseDisplayed, setIsResponseDisplayed] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats, loading]);

  useEffect(() => {
    scrollToBottom();
  }, [isResponseDisplayed]);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

  const commonStyles = {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    backgroundColor: "transparent",
    borderRadius: "0.5rem",
    overflow: "hidden",
    marginTop: "1rem"
  };

  const desktopStyles = {
    ...commonStyles,
    width: "98%",
    maxWidth: "50rem",
  };

  const mobileStyles = {
    ...commonStyles,
    width: "22rem",
    maxWidth: "22rem",
  };

  const desktopQuestionStyles = {
    position: "relative",
    display: "flex",
    justifyContent: 'space-between',
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: "15px",
    flexDirection: 'column',
    marginLeft: '3.25rem',
    width: '60%'
  };

  const mobileQuestionStyles = {
    position: "relative",
    display: "flex",
    justifyContent: 'space-between',
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: "15px",
    flexDirection: 'column',
    marginLeft: '0',
  };

  const handleQuestionClick = async (question) => {
    onClickSend(question);
    setIsLoading(true);

    try {
      const generatedResponse = await generateQuestionResponse(apiKey, question);
      setResponse(generatedResponse);
      // Add the question and response to chats
      setChats((prevChats) => [
        ...prevChats,
        { message: question, response: generatedResponse },
      ]);
      scrollToBottom(); // Call scrollToBottom after adding the chat entry
    } catch (error) {
      // Handle any errors that might occur during response generation
      console.error('Error generating response:', error);
    } finally {
      // Set isLoading back to false after the response is received
      setIsLoading(false);
    }
  };
  return (
    <div style={isMobile ? mobileStyles : desktopStyles}>
      <div
        className=""
        id="style-4"
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: "38rem",
          maxHeight: "40rem",
          overflow: "auto"
        }}
      >
        <Sender className="text-slate-800" text={"Hi there! I'm your virtual assistant. How can I assist you today?"} color={color} />
        {chats.map((chat, index) => (
          <div key={index}
          >
            <Reciever text={chat.message} color={color} />
            <Sender text={chat.response} color={color} />
          </div>
        ))}
        {loading && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Comment
              visible={true}
              height={60}
              width={60}
              ariaLabel="comment-loading"
              wrapperStyle={{}}
              wrapperClass="comment-wrapper"
              color="#fff"
              backgroundColor={color}
            />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "0.5rem",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
          width: "100%",
        }}
      >
        <input
          className="inline p-3 border-0 rounded-md mr-2"
          style={{
            backgroundColor: "#f9fafb",
            border: "1px solid #d1d5db",
            color: "#1f2937",
            fontSize: "0.875rem",
            borderRadius: "0.375rem",
            focusRing: "0 0 0 2px rgba(59, 130, 246, 0.5)",
            padding: "0.5rem",
            flex: "1 0 60%", // Let the input take 60% of the available space
            minWidth: "0", // Set minWidth to 0 to allow the input to shrink below its default width
          }}
          type="text"
          placeholder="Type your message…"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="bg-purple-600 relative  h-10 text-white rounded-lg border-0 font-medium text-md"
          style={{
            marginRight: "1rem",
            flex: "0 0 25%",
            minWidth: "0",
          }}
          type="button"
          onClick={onClickSend}
        >
          <p className="">Send</p>
        </button>
      </div>
    </div>
  );
}

function Preview({ apiKey, color, questions, handleCloseContainer, iconColor }) {
  const [prompt, setPrompt] = useState("");
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  const resetChat = () => {
    setChats([]);
  };

  const getData2 = async () => {
    if (prompt !== "" && res) {
      const temp = chats;
      temp.push({ message: prompt, response: res });
      setChats(temp);
      setRes(null);
      setPrompt("");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData2();
  }, [res]);

  const handleClick = async () => {
    if (prompt !== "" && apiKey) {
      setLoading(true);
      const ress = await generateModelResponse(apiKey, prompt);
      setRes(ress);
    }
  };
  useEffect(() => {
    // Function to check if the screen is in mobile view
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Call the function on initial render
    checkMobileView();
    // Add event listener to check on window resize
    window.addEventListener('resize', checkMobileView);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

  const commonStyles = {
    padding: "0.25rem",
    borderRadius: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  const desktopStyles = {
    ...commonStyles,
    height: "35rem",
    width: "48rem",
    maxWidth: "50rem",
  };

  const mobileStyles = {
    ...commonStyles,
    height: "90vh",
    width: "100%",
    maxWidth: "24rem",
  };
  const desktopMenuStyles = {
    width: "46rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    zIndex: "9999"
  }
  const mobileMenuStyles = {
    width: "22rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: "9999"
  }

  const [isMobile, setIsMobile] = useState(false);
  return (
    <div style={isMobile ? mobileStyles : desktopStyles}>
      <div style={isMobile ? mobileMenuStyles : desktopMenuStyles}>
        <button
          className=" shadow-xl"
          style={{
            color: "white",
            borderRadius: "1rem",
            width: "7rem",
            height: "2.5rem",
            margin: "0",
            backgroundColor: "rgba(1,1,1,0.3)",
          }}
          onClick={resetChat}
        >
          <div style={{ display: 'flex', gap: "4px", alignItems: 'center', color: iconColor }}>
            <RxReset className="ml-1" />
            <p className="ml-1">Reset Chat</p>
          </div>
        </button>
        <button
          style={{
            color: "red",
            borderRadius: "50%",
          }}
          onClick={handleCloseContainer}
        >
          <AiFillCloseCircle style={{ fontSize: "2rem", marginLeft: "1rem", marginRight: "0.5rem" }} />
        </button>

      </div>
      <Chat
        className="h-[85%] lg:h-[35rem]"
        prompt={prompt}
        setPrompt={setPrompt}
        setChats={setChats}
        apiKey={apiKey}
        chats={chats}
        loading={loading}
        setIsLoading={setLoading}
        color={color}
        questions={questions}
        onClickSend={handleClick}
      />
    </div>
  );
}

export default Preview;