# Website Integration Guide

## Overview
This guide will help you integrate the OIB website into your AI chatbot repository. The website is built with React + Vite, TypeScript, Tailwind CSS, and shadcn/ui components.

## Integration Options

### Option 1: Subdirectory Integration (Recommended)

#### Step 1: Prepare Your AI Chatbot Repository
```bash
# In your AI chatbot repository root
mkdir website
```

#### Step 2: Copy Website Files
```bash
# Copy all files from this website to your AI chatbot repo
cp -r /path/to/OIB-website-main-main/* /path/to/your-ai-chatbot-repo/website/
```

#### Step 3: Update Package.json
Update the website's `package.json` to reflect the new structure:

```json
{
  "name": "ai-chatbot-website",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  }
  // ... rest of dependencies remain the same
}
```

#### Step 4: Update Vite Configuration
Modify `vite.config.ts` to work within the subdirectory:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/website/", // Add this line
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

#### Step 5: Update Router Configuration
Modify `src/App.tsx` to handle the subdirectory routing:

```typescript
// Update the BrowserRouter to include basename
<BrowserRouter basename="/website">
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

### Option 2: Monorepo Integration

#### Step 1: Create Monorepo Structure
```
your-ai-chatbot-repo/
├── packages/
│   ├── website/          # This website
│   ├── chatbot-frontend/ # Your existing frontend
│   └── shared/           # Shared components/utils
├── package.json          # Root package.json
└── README.md
```

#### Step 2: Root Package.json
Create a root `package.json` with workspace configuration:

```json
{
  "name": "ai-chatbot-monorepo",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "dev:website": "cd packages/website && npm run dev",
    "dev:chatbot": "cd packages/chatbot-frontend && npm run dev",
    "build:website": "cd packages/website && npm run build",
    "build:chatbot": "cd packages/chatbot-frontend && npm run build",
    "build:all": "npm run build:website && npm run build:chatbot"
  }
}
```

### Option 3: Component Integration

#### Step 1: Extract Reusable Components
Move these components to your existing frontend:
- `src/components/ui/` - All UI components
- `src/components/sections/` - Section components
- `src/lib/utils.ts` - Utility functions
- `src/hooks/` - Custom hooks

#### Step 2: Install Dependencies
Add these to your existing frontend's `package.json`:

```json
{
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    // ... all other @radix-ui packages
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "framer-motion": "^12.23.12",
    "lucide-react": "^0.462.0"
  }
}
```

## Integration Steps (Recommended: Option 1)

### 1. Copy Files
```bash
# Navigate to your AI chatbot repository
cd /path/to/your-ai-chatbot-repo

# Create website directory
mkdir website

# Copy all files
cp -r /path/to/OIB-website-main-main/* website/
```

### 2. Update Configuration Files

#### Update website/package.json:
```json
{
  "name": "ai-chatbot-website",
  "private": true,
  "version": "1.0.0"
}
```

#### Update website/vite.config.ts:
```typescript
export default defineConfig(({ mode }) => ({
  base: "/website/", // Add this line
  // ... rest of config
}));
```

#### Update website/src/App.tsx:
```typescript
<BrowserRouter basename="/website">
  // ... routes
</BrowserRouter>
```

### 3. Update Your Main Application

#### Add Website Route to Your Main App:
```typescript
// In your main application's router
<Route path="/website/*" element={<WebsiteApp />} />
```

#### Create WebsiteApp Component:
```typescript
// Create a component that renders the website
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import all website components

const WebsiteApp = () => (
  <BrowserRouter basename="/website">
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
```

### 4. Build and Deploy

#### Build the Website:
```bash
cd website
npm install
npm run build
```

#### Serve the Website:
The built files will be in `website/dist/` and can be served as static files or integrated into your main application.

## Key Dependencies

### Core Dependencies:
- **React 18.3.1** - UI framework
- **Vite 5.4.19** - Build tool
- **TypeScript 5.8.3** - Type safety
- **Tailwind CSS 3.4.17** - Styling
- **React Router DOM 6.30.1** - Routing

### UI Components:
- **shadcn/ui** - Modern UI component library
- **Radix UI** - Headless UI primitives
- **Framer Motion 12.23.12** - Animations
- **Lucide React 0.462.0** - Icons

### Additional Features:
- **React Query 5.83.0** - Data fetching
- **React Hook Form 7.61.1** - Form handling
- **Zod 3.25.76** - Schema validation
- **AOS 2.3.4** - Scroll animations

## Next Steps

1. **Choose your integration approach** (I recommend Option 1)
2. **Copy the files** to your AI chatbot repository
3. **Update configuration** files as shown above
4. **Test the integration** by running the development server
5. **Customize the Chat page** to integrate with your AI chatbot backend
6. **Deploy** the integrated application

## Customization for AI Chatbot

The website already has a Chat page (`src/pages/Chat.tsx`) that you can customize to integrate with your AI chatbot:

```typescript
// Example integration in Chat.tsx
import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async (message) => {
    // Integrate with your AI chatbot API
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    
    const data = await response.json();
    setMessages(prev => [...prev, { user: message, ai: data.response }]);
  };

  return (
    <div className="chat-interface">
      {/* Your chat UI implementation */}
    </div>
  );
};
```

This integration will give you a professional website with a modern UI that can showcase your AI chatbot while providing a seamless user experience.
