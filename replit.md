# Velaro Single-Page Website

## Overview

This is a modern single-page marketing website for Velaro, a Microsoft Dynamics 365 Business Central extension that provides customer and vendor portal functionality. The site serves as a portable informational and support platform targeting both Business Central administrators and small business owners.

The application is built as a React-based single-page application with a clean, professional design that emphasizes Velaro's brand identity (blue color scheme with white "V" arrow logo) and provides comprehensive information about the product's features, setup instructions, and legal documentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing in a single-page application
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design tokens for Velaro branding (primary blue: `hsl(220, 91%, 58%)`)
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints (minimal backend, primarily for future extensibility)
- **Development Setup**: Custom Vite integration for seamless full-stack development
- **Static Serving**: Configured for static site deployment with no runtime dependencies
- **Storage Interface**: Modular storage abstraction with in-memory implementation (prepared for database integration)

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema**: User management schema with username/password authentication structure
- **Migration System**: Drizzle Kit for database schema migrations and management
- **Connection**: Neon Database serverless PostgreSQL integration

### Component Structure
- **Navigation**: Fixed header with smooth scroll navigation to page sections
- **Hero Section**: Prominent Velaro logo display with call-to-action
- **Marketing Overview**: Feature benefits with icon-based cards
- **FAQ Section**: Collapsible accordion for setup and portal configuration instructions
- **Legal Sections**: Privacy Policy and EULA with structured content cards
- **Footer**: Brand reinforcement with quick navigation links

### Design System
- **Typography**: Inter font family for clean, professional appearance
- **Color Scheme**: Neutral base with Velaro blue accent colors and CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Semantic HTML, proper ARIA labels, and sufficient color contrast
- **Dark Mode**: CSS custom properties prepared for theme switching

## External Dependencies

### Core Frontend Libraries
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **UI Components**: Radix UI primitives (@radix-ui/*) for accessible component foundations
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography throughout the interface
- **Date Handling**: date-fns for any date formatting requirements

### Backend Dependencies
- **Server Framework**: Express.js for API routing and middleware
- **Database**: Neon Database serverless PostgreSQL with connection pooling
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Build Tools**: esbuild for production server bundling

### Development Tools
- **Build System**: Vite with React plugin and custom configuration
- **TypeScript**: Full TypeScript configuration with path mapping
- **Development**: tsx for TypeScript execution in development
- **Replit Integration**: Custom plugins for Replit environment compatibility

### Deployment Configuration
- **Static Generation**: Vite build system produces static assets for CDN deployment
- **Server Bundle**: esbuild creates optimized server bundle for production
- **Environment Variables**: Database URL and other configurations via environment
- **Asset Management**: Vite asset handling with proper path resolution for images

The architecture prioritizes portability, performance, and maintainability while providing a solid foundation for potential future enhancements like user authentication, content management, or integration with Business Central APIs.