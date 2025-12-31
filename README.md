# 🧘‍♀️ Yoga & Aahar Backend

Guide for managing content and updating application entities.

## 🚀 Quick Links
- **API Docs**: [http://localhost:8080/docs](http://localhost:8080/docs)

---

## 🛠️ Content Management (Admin)

You now have two ways to manage your application's content:

### 1. Admin API (Recommended)
Use the dedicated Admin endpoints for safe, validated, and feature-rich content management (includes video processing).
- **URL**: [http://localhost:8080/docs](http://localhost:8080/docs)
- **Tag**: Look for `Admin / ...` tags in Swagger.
- **Features**:
  - Handles multipart video uploads.
  - Automatically formats arrays (steps, benefits, tags).
  - Validation of data types.

### 2. Prisma Studio (Direct DB Access)
Use this for raw database viewing or manual data correction.
- **Command**: `npx prisma studio --port 5566`
- **URL**: [http://localhost:5566](http://localhost:5566)

---

## 🚀 Getting Started

### Updating the Database Schema
If you need to add new fields or change the architecture:
1. Open `prisma/schema.prisma`.
2. Update the model definition.
3. Run the migration command:
   ```bash
   npx prisma migrate dev --name your_migration_name
   ```

---

## 📁 Media Management
All videos are stored locally in the `/uploads/videos` folder. They are served publicly at:
`http://localhost:8080/public/videos/[filename].mp4`

---

## 🛠️ Development
```bash
# Start server in watch mode
npm run start:dev

# Start Admin Board
npx prisma studio --port 5566
```
