// import { client } from "@gradio/client";
import { client } from "https://cdn.jsdelivr.net/npm/@gradio/client@0.10.1/dist/index.min.js";
const quizQuestions = {
  que1: "1. ⁠How do you feel right now?",
  que2: "2. On a scale from 1 to 10, how would you rate your stress level right now?",
  que3: "3.How has your sleep been affected by stress/depression recently?",
  que4: "4. Are there any coping mechanisms you currently use to manage stress?",
  que5: "5. Have there been any recent changes in your life that may contribute to increased stress?",
  que6: "6. Do you experience physical symptoms like headaches or muscle tension when stressed?",
  que7: "7. How would you describe your overall mood in the past week?",
  que8: "8. Have you noticed any changes in your appetite, either an increase or decrease, during stressful periods?",
  que9: "9. Are you finding it challenging to balance work, family, and personal life?",
  que10:
    "10. Do you feel overwhelmed or have difficulty concentrating due to stress?",
};

var form = document.getElementById("survey-form");
var textarea = document.querySelector("textarea");
console.log(textarea,'value')

form.addEventListener("submit", (e) => submitHandler(e));

async function submitHandler(e) {
  e.preventDefault();
  console.log("some");
  const valueQues1 = form.querySelector('input[name="ques1"]')?.value;
  const valueQues2 = form.querySelector('input[name="ques2"]')?.value;
  const valueQues3 = form.querySelector('input[name="ques3"]')?.value;
  const valueQues4 = form.querySelector('input[name="ques4"]')?.value;
  const valueQues5 = form.querySelector('input[name="ques5"]')?.value;
  const valueQues6 = form.querySelector('input[name="ques6"]')?.value;
  const valueQues7 = form.querySelector('input[name="ques7"]')?.value;
  const valueQues8 = form.querySelector('input[name="ques8"]')?.value;
  const valueQues9 = form.querySelector('input[name="ques9"]:checked')?.value;
  const valueQues10 = form.querySelector('input[name="ques10"]:checked')?.value;

  const quizAns = [
    {
      question: quizQuestions?.que1,
      answer: valueQues1,
    },
    {
      question: quizQuestions?.que2,
      answer: valueQues2,
    },
    {
      question: quizQuestions?.que3,
      answer: valueQues3,
    },
    {
      question: quizQuestions?.que4,
      answer: valueQues4,
    },
    {
      question: quizQuestions?.que5,
      answer: valueQues5,
    },
    {
      question: quizQuestions?.que6,
      answer: valueQues6,
    },
    {
      question: quizQuestions?.que7,
      answer: valueQues7,
    },
    {
      question: quizQuestions?.que8,
      answer: valueQues8,
    },
    {
      question: quizQuestions?.que9,
      answer: valueQues9,
    },
    {
      question: quizQuestions?.que10,
      answer: valueQues10,
    },
  ].toString();

  try {
    const app = await client(
      "https://givyboy-mental-health-chatbot.hf.space/--replicas/04p3w/"
    );

    const result = await app.predict("/chat", [
      "Here is a quiz response with question and answers of a patient, analyze it and just give advice according to it, dont state the question and answer again, be very specific to the case, but dont repeat question and answers in response",
    ]);


    // const response = await fetch("https://bmhchat-mentalhealth-llama-chat.hf.space/run/predict", {
    //     method: "POST",
    //     mode: 'no-cors',
    //     headers: {
    //         "Content-Type": "application/json",
    //         // "Authorization": `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_TOKEN}`,
    //     },
    //     body: JSON.stringify({ data: ["Here is a quiz response with question and answers of a patient, analyze it and just give advice according to it, dont state the question and answer again, be very specific to the case, but dont repeat question and answers in response"+quizAns] }),
    // });


    console.log(result,'result');

    console.log(quizAns, "quizAns");
  } catch (error) {
    console.log("Error:", error);
  }
}
