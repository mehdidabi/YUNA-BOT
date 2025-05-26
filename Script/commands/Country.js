module.exports.config = {
  name: "اعلام",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "لعبة تخمين اسم الدولة من العلم",
  commandCategory: "ألعاب",
  usages: "اعلام",
  cooldowns: 5
};

const flagsList = [
  { emoji: "🇸🇦", name: "السعودية" },
  { emoji: "🇪🇬", name: "مصر" },
  { emoji: "🇸🇾", name: "سوريا" },
  { emoji: "🇮🇶", name: "العراق" },
  { emoji: "🇱🇧", name: "لبنان" },
  { emoji: "🇲🇦", name: "المغرب" },
  { emoji: "🇩🇿", name: "الجزائر" },
  { emoji: "🇹🇳", name: "تونس" },
  { emoji: "🇰🇼", name: "الكويت" },
  { emoji: "🇶🇦", name: "قطر" },
  { emoji: "🇦🇪", name: "الإمارات" },
  { emoji: "🇴🇲", name: "عمان" },
  { emoji: "🇾🇪", name: "اليمن" },
  { emoji: "🇯🇴", name: "الأردن" },
  { emoji: "🇹🇷", name: "تركيا" },
  { emoji: "🇵🇸", name: "فلسطين" },
  { emoji: "🇯🇵", name: "اليابان" },
  { emoji: "🇨🇳", name: "الصين" },
  { emoji: "🇺🇸", name: "أمريكا" },
  { emoji: "🇬🇧", name: "بريطانيا" },
  { emoji: "🇫🇷", name: "فرنسا" },
  { emoji: "🇧🇷", name: "البرازيل" },
  { emoji: "🇷🇺", name: "روسيا" },
  { emoji: "🇮🇳", name: "الهند" },
  { emoji: "🇰🇷", name: "كوريا الجنوبية" }
];

let currentAnswer = null;

module.exports.run = async function({ api, event }) {
  const { threadID, messageID } = event;
  const randomFlag = flagsList[Math.floor(Math.random() * flagsList.length)];
  currentAnswer = randomFlag.name;

  api.sendMessage(
    `🌍 خمن اسم الدولة من العلم التالي:\n${randomFlag.emoji}`,
    threadID,
    (err, info) => {
      global.client.handleReply.push({
        name: module.exports.config.name,
        messageID: info.messageID,
        author: event.senderID,
        threadID,
        type: "guess"
      });
    }
  );
};

module.exports.handleReply = function({ api, event, handleReply }) {
  const { body, threadID } = event;

  if (handleReply.type === "guess") {
    if (!currentAnswer) return;

    if (body.trim() === currentAnswer) {
      api.sendMessage(
        `✅ صحيح! ${body} هي الإجابة!\nالفائز: ${event.senderID}`,
        threadID
      );
      currentAnswer = null;
    }
  }
};
