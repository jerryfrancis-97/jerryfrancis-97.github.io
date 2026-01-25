# Content Management Guide

This guide explains how to add new pages and blog posts to your portfolio website.

## Adding a New Blog Post

1. **Create a new file** in the `_posts/` directory
2. **Name the file** using the format: `YYYY-MM-DD-post-title.md`
   - Example: `2024-01-15-my-new-post.md`
3. **Add front matter** at the top of the file:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2024-01-15
   tags: [tag1, tag2, tag3]
   ---
   ```
4. **Write your content** in Markdown below the front matter
5. **Save the file** - Jekyll will automatically include it in the blog listing

The post will appear on:
- The homepage in the "latest posts" section
- The `/blog/` page in the blog listing

## Adding a New Page

1. **Create a new file** in the `_pages/` directory
2. **Name the file**: `page-name.md`
   - Example: `about.md` or `projects.md`
3. **Add front matter** at the top:
   ```yaml
   ---
   layout: page
   title: "Page Title"
   permalink: /page-name/
   ---
   ```
4. **Write your content** in Markdown
5. **Add to navigation** (optional):
   - Edit `_data/navigation.yml`
   - Add an entry:
     ```yaml
     - title: Page Name
       url: /page-name/
       desc: Description of the page
     ```
6. **Save the file** - The page will be accessible at `/page-name/`

## Updating the Homepage

Edit `index.md` to update:
- Profile picture (set `profile_picture` in `_config.yml` or use default)
- Biography text
- News items (edit the news table)
- Publications (edit the publications list)

## Updating Navigation

Edit `_data/navigation.yml` to add, remove, or reorder navigation items.

## Profile Picture

To add a profile picture:
1. Place your image in `assets/img/` directory
2. Update `_config.yml`:
   ```yaml
   profile_picture: your-image.jpg
   ```
   Or use the default logo by leaving it unset.

## Publications

Publications are currently listed in `index.md`. You can:
- Add more publications to the list
- Format them consistently with the existing style
- Add links to PDFs, DOIs, etc.

## Dark/Light Mode

The theme toggle is automatically included in the navigation. Users can click the sun/moon icon to switch themes. The preference is saved in localStorage.

## Search Functionality

Search (Ctrl+K) automatically indexes:
- All blog posts
- All pages (except excluded ones)

The search works by matching titles and content.
