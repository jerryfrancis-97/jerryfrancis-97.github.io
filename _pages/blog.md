---
layout: page
title: Blog
subtitle: My Writing
permalink: /blog/
---

<div class="pretty-links">
<div class="lead lead-about">
Papers Explained: My brief notes on the ideas presented in the papers. More such notes can be found <a href='https://github.com/jerryfrancis-97/spinning-up-papers'>here</a>.
</div>

<div class="posts">
{% for post in site.posts %}
<div class="post card">
  <h3 class="post-title-list">
    <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </h3>
  <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
  {% if post.excerpt %}
    <div class="post-excerpt">{{ post.excerpt }}</div>
  {% endif %}
  {% if post.tags %}
    <div class="post-tags">
      {% for tag in post.tags %}
        <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
  {% endif %}
</div>
{% endfor %}
</div>
</div>
