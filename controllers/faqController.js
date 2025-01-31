const FAQ = require("../models/faqModel");
const client = require("../config/redis");
const translate = require("google-translate-api");

exports.createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    
    // Automatic translation
    const hiTranslation = await translate(question, { to: "hi" });
    const bnTranslation = await translate(question, { to: "bn" });

    const faq = await FAQ.create({
      question,
      answer,
      translations: {
        en: question,
        hi: hiTranslation.text,
        bn: bnTranslation.text,
      },
    });

    res.status(201).json({ success: true, data: faq });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getFAQs = async (req, res) => {
  const lang = req.query.lang || "en";

  // Check cache
  const cachedFAQs = await client.get(`faqs:${lang}`);
  if (cachedFAQs) {
    return res.json(JSON.parse(cachedFAQs));
  }

  const faqs = await FAQ.find();
  const translatedFAQs = faqs.map((faq) => ({
    id: faq._id,
    question: faq.getTranslation(lang),
    answer: faq.answer,
  }));

  // Store in cache
  await client.set(`faqs:${lang}`, JSON.stringify(translatedFAQs), "EX", 3600);

  res.json(translatedFAQs);
};
