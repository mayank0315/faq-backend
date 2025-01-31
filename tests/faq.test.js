const request = require("supertest");
const app = require("../server");
const FAQ = require("../models/faqModel");

describe("FAQ API", () => {
  it("should create an FAQ", async () => {
    const res = await request(app).post("/api/faqs").send({
      question: "What is Node.js?",
      answer: "Node.js is a JavaScript runtime.",
    });

    expect(res.status).toBe(201);
    expect(res.body.data).toHaveProperty("question", "What is Node.js?");
  });

  it("should fetch FAQs", async () => {
    const res = await request(app).get("/api/faqs?lang=hi");
    expect(res.status).toBe(200);
  });
});
