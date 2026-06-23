---
layout: page
title: Writings
permalink: /writings/
---

<div class="page-header">
  <h1 class="page-title">Writings</h1>
  <p class="page-subtitle">Notes on research, things I'm reading, and ideas I'm still working out.</p>
</div>

<div class="filter-tabs">
  <button class="filter-tab active" data-filter="all">All</button>
  <button class="filter-tab" data-filter="reinforcement-learning">Reinforcement Learning</button>
  <button class="filter-tab" data-filter="misc">Misc</button>
</div>

<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-item" data-tag="{{ post.tags | first | downcase | replace: ' ', '-' }}">
    <div class="post-item-main">
      <a href="{{ post.url | relative_url }}" class="post-item-title">{{ post.title }}</a>
      {% if post.description %}<span class="post-item-desc">{{ post.description }}</span>{% endif %}
    </div>
    <time class="post-item-date">{{ post.date | date: "%-d %b %Y" }}</time>
  </li>
  {% endfor %}
</ul>
