const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: {
    en: { type: String, required: true },
    hi: { type: String },
    bn: { type: String },
  },
});

faqSchema.methods.getTranslation = function (lang) {
  return this.translations[lang] || this.translations.en;
};

const FAQ = mongoose.model("FAQ", faqSchema);
module.exports = FAQ;
