async function GetChatBotAnswer() {
  const queryRef = document.getElementById("query");
  const query = queryRef.value;

  const chatbotresponse = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent",
    {
      method: "POST",
      headers: {
        "x-goog-api-key":
          "AQ.Ab8RN6JPr5UMbqDRqjJb8HDrf9KwGT0NBfB8VwH12cn9BhePyw",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: query,
              },
            ],
          },
        ],
      }),
    },
  );
  const chatbotresponseJson = await chatbotresponse.json();
const aiReply= chatbotresponseJson.candidates[0].content.parts[0].text;
  const answerRef = document.getElementById("chatbot-response");
  answerRef.innerHTML = aiReply;
}
// we always have to create .catch so we can handle any error
// function getTalal(){
//   try{
//     console.(
//       "Talal get in"
//     );
//   } catch(err){
//     console.log(err)
//     alert("Talal is not getting in");
//   }
// }
// getTalal();
