const redis = require("redis");

const client = redis.createClient({
  url: process.env.REDIS_URL || "rediss://127.0.0.1:6379",  
});

client.on("error", (err) => console.error("Redis Error:", err));
client.connect();

module.exports = client;

