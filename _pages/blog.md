---
layout: page
title: EnRoute 42
subtitle: My Blog
permalink: /blog/
---

<div class="pretty-links">
<div class="lead lead-about"> Papers Explained : My brief notes on the ideas presented in the papers. More such notes can be found <a href='https://github.com/jerryfrancis-97/spinning-up-papers'>here</a>.
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

