import express from "express";
import { getPosts, getPostById, createPost, updatePost, deletePost } from "../controller/mainController.js";

const router = express.Router();

router.get("/posts", getPosts);       // Get all posts
router.get("/post/:id", getPostById); // Get a post by ID
router.post("/posts", createPost);    // Create a new post
router.put("/post/:id", updatePost);  // Update a post by ID
router.delete("/post/:id", deletePost); // Delete a post by ID

export default router;
