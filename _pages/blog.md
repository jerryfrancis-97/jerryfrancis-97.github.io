---
layout: page
title: EnRoute 42
subtitle: The blog of Jerome Francis
permalink: /blog/
---

<div class="pretty-links">

<div class="lead lead-about">Write, write, write till you change the world.....
Working on it!
</div>
---

<div class="posts">
{% for post in site.posts %}
<div class="post">
<h3 class="post-title-list"> <a href="{{ post.url }}">{{ post.title }}</a></h3>
<span class="post-date">{{ post.date | date_to_string }}</span>
{{ post.content }}
</div>
{% endfor %}
</div>
</div>

