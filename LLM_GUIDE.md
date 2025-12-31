# LLM Developer Guide for Yoga/Pranayama/Aahar Backend

This project is a **Modular Monolith** built with **NestJS**. It is designed to be easily modified by LLMs and non-tech staff.

## Project Structure
All business logic is located in `src/modules/`.
- `categories`: Main navigation and grouping.
- `techniques`: Detailed yoga/pranayama practices.
- `blogs`: Educational content.
- `food`: Aahar (nutrition) and Dosha logic.
- `analytics`: User progress and streaks.
- `common`: Shared SDUI (Server-Driven UI) schemas and utilities.

## Rules for making changes (LLM Instructions)
1. **Modules must be self-contained**: Do not import services from one module to another directly. If you need shared logic, move it to `src/modules/common`.
2. **DTOs (Data Transfer Objects)**: Always use DTOs in `src/modules/<module>/dto` for request/response bodies. Add `@ApiProperty()` decorators for documentation.
3. **SDUI (Server-Driven UI)**: When adding UI elements, use the `ComponentSchema` from `src/modules/common`. This allows the frontend to render components dynamically without a code update.
4. **Mock Data**: If you add new techniques or blogs, update the `*.data.ts` files inside the respective module's `mock` directory.

## How to add a new Endpoint
1. Create a DTO for the response.
2. Add a method in the `Controller`.
3. Add the logic in the `Service`.
4. Run `npm run start:dev` to verify.

## Naming Conventions
- Controllers: `*.controller.ts`
- Services: `*.service.ts`
- Modules: `*.module.ts`
- Entities: `*.entity.ts` (for DB models)
