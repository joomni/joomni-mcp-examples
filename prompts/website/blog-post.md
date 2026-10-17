# A blog post

**Needs:** `blogs:read`, `blogs:write` · **For:** online stores and websites

## Prompt

```
Write a blog post: "How to choose a lokta paper notebook". About 800 words, practical, in my brand voice, mentioning two of my notebooks with links to them. Add a search title and description. Save it as a draft.
```

## What happens

The app reads your brand voice and products, then calls `create_blog_post`. It's saved as a **draft**; publishing (`set_blog_post_status`) asks you first.
