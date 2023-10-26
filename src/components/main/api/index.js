import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";
PouchDB.plugin(PouchDBFind);
const db = new PouchDB("chat_history");

const baseUrl = "https://aitbck.com";
export async function generateModelResponse(apiKey, question) {
  try {
    const formData = new FormData();
    formData.append("question", question);
    const response = await fetch(`https://aitbck.com/chat`, {
      method: "POST",
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
      }),
    });
    if (!response.ok) {
      if (response.status === 500) {
        let errorMsg = `Server's whispering secrets to us, just a brief hush. Back shortly, so please stay tuned!`;
        return errorMsg;
      } else if (response.status === 400) {
        let errorMsg = `Invalid API Key`;
        return errorMsg
      }
    } else {
      const data = await response.json();
      console.log(data.response);
      return data.response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function generateQuestionResponse(apiKey, question) {
  try {
    const response = await fetch(`https://aitbck.com/chat`, {
      method: "POST",
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
      }),
    });
    if (!response.ok) {
      if (response.status === 500) {
        let errorMsg = `Server's whispering secrets to us, just a brief hush. Back shortly, so please stay tuned!`;
        return errorMsg;

      } else if (response.status === 400) {
        let errorMsg = `Invalid API Key`;
        return errorMsg
      }
    } else {
      const data = await response.json();
      console.log(data.response);
      return data.response;
    }

  } catch (error) {
    console.log(error);
  }
}

export function ChatHistoryService(uid, usermessage, botresponse, name) {
  const message = {
    _id: new Date().toISOString(),
    user: uid,
    message: usermessage,
    response: botresponse,
    model: name,
  };

  db.put(message)
    .then((response) => {
      console.log("Message saved successfully:", response);
    })
    .catch((error) => {
      console.error("Error saving message:", error);
    });
}



export async function GetHistory(uid, name) {
  const res = await db.find({
    selector: {
      user: uid,
    },
  });
  const data = res.docs;
  const filteredArray = data.filter((obj) => obj.model === name);
  return filteredArray;
}
