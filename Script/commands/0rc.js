module.exports.config = {
  name: "تفاعل",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "يونو",
  description: " مالك دخل😗 ",
  commandCategory: "خدمات",
  usages: "",
  cooldowns: 0
};

module.exports.handleEvent = async function({ api, event }) {
  const { senderID, body, messageID, threadID } = event;

  // تفاعل بقلب مع رسائل ID معين
  if (senderID === "100084485225595") {
    try {
      api.setMessageReaction("❤️", messageID, (err) => {}, true);
    } catch (err) {
      console.error("فشل في وضع التفاعل:", err);
    }
  }

  // كلمات الرد
  const targetWords = ["يونو", "المطور", "仒. Yuno あ", "@仒. Yuno あ", "yuno"];
  const content = body?.toLowerCase();

  if (content && targetWords.some(word => content.includes(word.toLowerCase()))) {
    return api.sendMessage(" لا تنادي عليه هو مش فاضي لك 😒"), threadID, messageID);
  }
};

module.exports.run = () => {};
