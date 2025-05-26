module.exports.config = {
  name: "سؤال",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "يونو",
  description: "لعبة أسئلة عامة مع اختيار الإجابة الصحيحة",
  commandCategory: "ألعاب",
  usages: "أسئلة",
  cooldowns: 5
};

const questions = [
  { question: "ما هي عاصمة مصر؟", answers: ["القاهرة", "الإسكندرية", "الجيزة", "المنصورة"], correct: "القاهرة" },
  { question: "ما هو أكبر كوكب في النظام الشمسي؟", answers: ["المريخ", "الأرض", "المشتري", "زحل"], correct: "المشتري" },
  { question: "من هو مؤلف رواية 1984؟", answers: ["جورج أورويل", "إرنست همنغواي", "فيكتور هوغو", "تشارلز ديكنز"], correct: "جورج أورويل" },
  { question: "ما هو العنصر الكيميائي الذي رمزه O؟", answers: ["ذهب", "أكسجين", "حديد", "نيتروجين"], correct: "أكسجين" },
  { question: "في أي قارة تقع الأرجنتين؟", answers: ["أفريقيا", "آسيا", "أمريكا الجنوبية", "أوروبا"], correct: "أمريكا الجنوبية" },
  { question: "ما هو الحيوان الذي يُعرف باسم ملك الغابة؟", answers: ["النمر", "الأسد", "الفهد", "الدب"], correct: "الأسد" },
  { question: "ما هو أسرع طائر في العالم؟", answers: ["الصقر", "النسور", "النعام", "الببغاء"], correct: "الصقر" },
  { question: "ما هي العملة الرسمية في اليابان؟", answers: ["الين", "الدولار", "اليورو", "الروبل"], correct: "الين" },
  { question: "ما هو أطول نهر في العالم؟", answers: ["النيل", "الأمازون", "اليانغتسي", "الميسيسيبي"], correct: "النيل" },
  { question: "من هو العالم الذي اكتشف الجاذبية؟", answers: ["ألبرت أينشتاين", "نيوتن", "غاليليو", "تسلا"], correct: "نيوتن" },
  { question: "ما هو أكبر محيط على سطح الأرض؟", answers: ["المحيط الهندي", "المحيط الأطلسي", "المحيط الهادئ", "المحيط المتجمد الشمالي"], correct: "المحيط الهادئ" },
  { question: "ما هي اللغة الأكثر تحدثًا في العالم؟", answers: ["الإنجليزية", "الإسبانية", "الصينية", "العربية"], correct: "الصينية" },
  { question: "كم عدد الكواكب في النظام الشمسي؟", answers: ["7", "8", "9", "10"], correct: "8" },
  { question: "ما هي أكبر دولة في العالم من حيث المساحة؟", answers: ["الصين", "الولايات المتحدة", "روسيا", "كندا"], correct: "روسيا" },
  { question: "في أي سنة انتهت الحرب العالمية الثانية؟", answers: ["1945", "1939", "1918", "1965"], correct: "1945" },
  { question: "ما هو المعدن الأكثر وفرة في قشرة الأرض؟", answers: ["الحديد", "الألمنيوم", "السيليكون", "النحاس"], correct: "الألمنيوم" },
  { question: "من هو مؤسس شركة مايكروسوفت؟", answers: ["ستيف جوبز", "بيل غيتس", "مارك زوكربيرغ", "إيلون ماسك"], correct: "بيل غيتس" },
  { question: "ما هو أسرع حيوان بري؟", answers: ["الأسد", "الفهد", "الغزال", "الحصان"], correct: "الفهد" },
  { question: "ما هو اسم أكبر صحراء في العالم؟", answers: ["الصحراء الكبرى", "صحراء جوبي", "صحراء كالهاري", "صحراء أتاكاما"], correct: "الصحراء الكبرى" },
  { question: "ما هي عاصمة فرنسا؟", answers: ["باريس", "مدريد", "روما", "برلين"], correct: "باريس" },
  { question: "ما هو اسم أطول جبل في العالم؟", answers: ["إيفرست", "كليمنجارو", "أكونكاجوا", "دينالي"], correct: "إيفرست" },
  { question: "ما هو العضو المسؤول عن ضخ الدم في الجسم؟", answers: ["الرئتين", "الكبد", "القلب", "الكلى"], correct: "القلب" },
  { question: "كم عدد أضلاع المربع؟", answers: ["3", "4", "5", "6"], correct: "4" },
  { question: "ما هي العملة الرسمية في بريطانيا؟", answers: ["اليورو", "الجنيه الإسترليني", "الدولار", "الين"], correct: "الجنيه الإسترليني" },
  { question: "ما هو الحيوان الذي يطلق عليه اسم 'صديق الإنسان'؟", answers: ["القطة", "الطائر", "الكلب", "الحصان"], correct: "الكلب" },
  { question: "أي دولة تُعرف بأرض الفراعنة؟", answers: ["مصر", "اليونان", "روما", "تركيا"], correct: "مصر" },
  { question: "ما هو العنصر الذي يرمز له بالرمز Fe؟", answers: ["النحاس", "الحديد", "الفضة", "الذهب"], correct: "الحديد" },
  { question: "في أي عام أُسست الأمم المتحدة؟", answers: ["1945", "1919", "1950", "1939"], correct: "1945" },
  { question: "ما هو الحيوان الذي لا يستطيع القفز؟", answers: ["الفيل", "الحصان", "الضفدع", "الكنغر"], correct: "الفيل" },
  { question: "ما هي لغة البرازيل الرسمية؟", answers: ["البرتغالية", "الإسبانية", "الإنجليزية", "الفرنسية"], correct: "البرتغالية" },
  { question: "ما هو رمز الماء الكيميائي؟", answers: ["H2O", "CO2", "O2", "NaCl"], correct: "H2O" }
];

let currentQuestion = null;

module.exports.run = async function({ api, event }) {
  const { threadID, messageID } = event;
  const randomIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[randomIndex];

  const answersText = currentQuestion.answers
    .map((ans, i) => `${i + 1}. ${ans}`)
    .join("\n");

  api.sendMessage(
    `❓ السؤال:\n${currentQuestion.question}\n\nاختر رقم الإجابة الصحيحة:\n${answersText}`,
    threadID,
    (err, info) => {
      global.client.handleReply.push({
        name: module.exports.config.name,
        messageID: info.messageID,
        author: event.senderID,
        threadID,
        type: "quiz"
      });
    }
  );
};

module.exports.handleReply = function({ api, event, handleReply }) {
  const { body, threadID } = event;

  if (handleReply.type === "quiz") {
    if (!currentQuestion) return;

    const userChoice = parseInt(body.trim());
    if (isNaN(userChoice) || userChoice < 1 || userChoice > currentQuestion.answers.length) {
      return api.sendMessage("❌ رجاءً اختر رقم من الخيارات فقط.", threadID);
    }

    const chosenAnswer = currentQuestion.answers[userChoice - 1];
    if (chosenAnswer === currentQuestion.correct) {
      api.sendMessage(`✅ إجابة صحيحة! الإجابة هي: ${chosenAnswer}\nمبروك!`, threadID);
    } else {
      api.sendMessage(`❌ إجابة خاطئة! الإجابة الصحيحة هي: ${currentQuestion.correct}`, threadID);
    }

    currentQuestion = null;
  }
};
