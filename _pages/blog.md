---
layout: page
title: EnRoute 42
subtitle: My Blog
permalink: /blog/
---

<div class="pretty-links">
##### Papers Explained ...
<div class="lead lead-about"> My brief notes on the ideas presented in the papers below.
</div>
---

<div class="posts">
{% for post in site.posts %}
<div class="post">
<h3 class="post-title-list"> <a href="{{ post.url }}">{{ post.title }}</a></h3>
<span class="post-date">{{ post.date | date_to_string }}</span>

</div>
{% endfor %}
</div>
</div>

