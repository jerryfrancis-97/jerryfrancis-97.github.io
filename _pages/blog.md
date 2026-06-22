---
layout: page
title: Writings
subtitle: Notes on papers and ideas
permalink: /blog/
---

<div class="pretty-links">
  <p class="lead lead-about">Short notes on papers and related ideas. More notes live <a href="https://github.com/jerryfrancis-97/spinning-up-papers">here</a>.</p>

  <div class="writings-list">
    {% for post in site.posts %}
      <article class="writings-item">
        <h2 class="writings-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <time class="writings-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
        <p class="writings-excerpt">{{ post.summary | default: post.excerpt | strip_html | strip_newlines | truncatewords: 34 }}</p>
        <a class="writings-link" href="{{ post.url }}">Read full post</a>
      </article>
    {% endfor %}
  </div>
</div>
