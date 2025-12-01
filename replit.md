# Overview

This is a personal portfolio website for Edison Espinosa, a Senior Product Manager, AI Product Specialist, and iOS Engineer. The application serves as a professional showcase highlighting Edison's work in product management, AI solutions, mobile app development, and his ecosystem of applications. The site features a modern, visually striking design with smooth animations and an emphasis on clean, minimalist aesthetics.

The project is built as a full-stack TypeScript application with a React frontend and Express backend, though the current implementation focuses primarily on the frontend presentation layer. The portfolio showcases Edison's professional identity, case studies, and a collection of mobile applications he has built.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server. The application uses a component-based architecture with functional components and React hooks.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. The application currently has a single-page structure (home page) with planned expansion for additional routes.

**UI Component Library**: Extensive use of Radix UI primitives (accordion, dialog, dropdown, etc.) combined with custom-styled components. The design system is built on shadcn/ui architecture with the "new-york" style variant.

**Styling System**: 
- Tailwind CSS v4 (using the new CSS-first approach with @import directives)
- Custom design tokens defined in index.css using CSS custom properties
- Typography: Three-font system (Inter for body, Outfit for display/headings, JetBrains Mono for code)
- Color scheme: "Swiss Gallery" light theme with neutral base colors
- Animation: Framer Motion for complex animations and transitions

**State Management**: 
- React Query (TanStack Query) for server state management
- React Hook Form with Zod validation for form handling
- Local component state with useState/useEffect hooks

**Design Patterns**:
- Composition pattern for UI components
- Custom hooks for reusable logic (useIsMobile, useToast)
- Context providers for theme and query client
- Slot pattern from Radix UI for flexible component composition

## Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript

**Architecture Pattern**: Minimal backend setup with a storage interface pattern. The current implementation uses an in-memory storage system (MemStorage class) that can be swapped for database persistence.

**API Structure**: RESTful API design with routes prefixed with `/api`. The routes are registered through a centralized `registerRoutes` function that accepts the HTTP server and Express app.

**Development Setup**: 
- Vite dev server runs in middleware mode during development
- Express serves the Vite-processed files
- Hot Module Replacement (HMR) enabled via WebSocket on `/vite-hmr` path
- Production build serves static files from the `dist/public` directory

**Build Process**: Custom build script using esbuild for server bundling and Vite for client bundling. Selected dependencies are bundled with the server to reduce cold start times (reduces openat syscalls).

## Data Storage Solutions

**Current Implementation**: In-memory storage using JavaScript Map data structure (MemStorage class)

**Database Schema**: Drizzle ORM schema defined for PostgreSQL with a users table containing:
- id (UUID, auto-generated)
- username (unique text)
- password (text)

**Migration Strategy**: Drizzle Kit configured for schema migrations with files output to `./migrations` directory

**Database Configuration**: Configured for PostgreSQL via Neon serverless driver, though not currently active in the codebase. The DATABASE_URL environment variable is required by the Drizzle config but database functionality is not implemented in the current storage layer.

**Rationale**: The in-memory storage provides a lightweight starting point that can easily be replaced with the PostgreSQL implementation when persistence is needed. The IStorage interface ensures swappable implementations.

## Authentication and Authorization

**Current State**: No authentication implemented. The schema and storage interface include user-related methods (getUser, getUserByUsername, createUser) but no routes or middleware utilize them.

**Planned Approach**: Based on dependencies, the intended auth system would use:
- Passport.js with local strategy
- Express sessions with PostgreSQL session store (connect-pg-simple)
- Password hashing (implementation details not visible in codebase)
- JWT tokens for API authentication

## External Dependencies

**UI Framework Dependencies**:
- @radix-ui/* (27+ packages): Accessible UI primitives
- framer-motion: Animation library
- lucide-react: Icon library
- class-variance-authority: Type-safe variant styling
- tailwindcss: Utility-first CSS framework

**Form Handling**:
- react-hook-form: Form state management
- @hookform/resolvers: Validation resolvers
- zod: Schema validation
- drizzle-zod: Database schema to Zod schema conversion

**Data Fetching**:
- @tanstack/react-query: Async state management
- Native fetch API: HTTP requests

**Database & ORM**:
- drizzle-orm: TypeScript ORM
- drizzle-kit: Migration toolkit
- @neondatabase/serverless: Neon PostgreSQL driver

**Development Tools**:
- @replit/vite-plugin-* : Replit-specific development plugins (runtime error modal, cartographer, dev banner)
- Custom vite-plugin-meta-images: Updates OpenGraph meta tags for Replit deployments

**Build Tools**:
- vite: Frontend build tool
- esbuild: Server bundling
- tsx: TypeScript execution
- tailwindcss: CSS processing

**Fonts**: Google Fonts CDN (Outfit, Inter, JetBrains Mono)

**Asset Management**: Generated images stored in `attached_assets/generated_images/` directory, imported via Vite's asset handling with TypeScript path aliases (@assets)

**Deployment Context**: Configured for Replit deployment with special handling for:
- Dynamic domain detection (REPL_SLUG, REPLIT_DEV_DOMAIN environment variables)
- OpenGraph image URL updates based on deployment domain
- Development-only plugins excluded in production builds