# FAQ Backend System

This is a multilingual FAQ system with caching support using Redis. The API allows fetching and storing FAQs in different languages.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/faq-backend.git
   ```
2. Navigate to the project folder:
   ```bash
   cd faq-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Set environment variables:
   Create a `.env` file and add:
   ```bash
   MONGO_URI=your_mongo_connection_url
   REDIS_URL=your_redis_url
   GOOGLE_TRANSLATE_API_KEY=your_google_translate_api_key
   ```

5. Run the server:
   ```bash
   npm start
   ```

## API Usage

- `GET /api/faqs` - Get all FAQs (supports multilingual).
- `POST /api/faqs` - Add a new FAQ (supports multilingual).
- `GET /api/faqs/:id` - Get a specific FAQ by ID.

## Contribution

- Fork the repository and create a new branch.
- Submit a Pull Request once your changes are ready.
