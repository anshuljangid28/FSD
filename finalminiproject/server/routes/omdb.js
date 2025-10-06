import express from "express";
import fetch from "node-fetch";

const router = express.Router();
const API_KEY = process.env.OMDB_API_KEY;

// Search movies
router.get("/search", async (req, res) => {
  try {
    const { q, page } = req.query;
    if (!q) return res.status(400).json({ error: "missing q" });

    const url = `http://www.omdbapi.com/?apikey=81f07a9a&s=${encodeURIComponent(q)}&page=${page || 1}`;
    const r = await fetch(url);
    const json = await r.json();
    res.json(json);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
});

// Movie details
router.get("/movie/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const url = `http://www.omdbapi.com/?apikey=81f07a9a&i=${encodeURIComponent(id)}&plot=full`;
    const r = await fetch(url);
    const json = await r.json();
    res.json(json);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
});

// Image proxy to handle CORS issues
router.get("/image", async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: "missing url parameter" });
    }

    // Validate that it's an Amazon CDN URL for security
    if (!url.includes('m.media-amazon.com') && !url.includes('ia.media-imdb.com')) {
      return res.status(400).json({ error: "invalid image source" });
    }

    const response = await fetch(url);
    if (!response.ok) {
      return res.status(404).json({ error: "image not found" });
    }

    const imageBuffer = await response.buffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    res.set({
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      'Access-Control-Allow-Origin': '*'
    });
    
    res.send(imageBuffer);
  } catch (err) {
    console.error('Image proxy error:', err);
    res.status(500).json({ error: "server error" });
  }
});

export default router;
