import "dotenv/config";
import express from "express";
import cors from "cors";
import compression from "compression";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Performance: Enable gzip/brotli compression for all responses
  // Reduces HTML/CSS/JS size by 60-80%
  app.use(compression({
    level: 6, // Balance between speed and compression ratio
    threshold: 1024, // Only compress responses > 1KB
    filter: (req, res) => {
      // Don't compress if client doesn't support it
      if (req.headers['x-no-compression']) {
        return false;
      }
      // Use compression for all text-based responses
      return compression.filter(req, res);
    },
  }));

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check endpoint
  app.get("/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  return app;
}
