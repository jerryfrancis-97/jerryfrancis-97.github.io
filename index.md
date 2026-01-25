---
layout: home
title: Jerome Fncis
head_title: Home
subtitle: AjcjNSC
---

<div class="profile-section">
  <div class="profile-picture">
    {% if site.profile_picture %}
      <img src="{{ site.baseurl }}/assets/img/{{ site.profile_picture }}" alt="{{ site.title }}">
    {% else %}
      <img src="{{ site.baseurl }}/assets/img/jf.svg" alt="{{ site.title }}">
    {% endif %}
</div>
  
  <div class="profile-info">
<div class="lead lead-about">
Hi! I'm Jerome Francis, currently doing my Masters from Mila and University of Montreal. Previously worked as Data Scientist @ TCS. I'm interested in Deep Learning with a specific focus on Reinforcement Learning and Decision Making. 
</div>

    <p>I did my undergraduate from TKM College of Engineering, Kollam in Computer Science and Engineering with Honors.</p>
    
    <div class="contact-info">
      <p><strong>Email:</strong> {{ site.email }}</p>
      {% if site.address %}
      <p><strong>Address:</strong> {{ site.address }}</p>
      {% endif %}
</div>
</div>
</div>

## news

<table class="news-table">
  <thead>
    <tr>
      <th>Date</th>
      <th>News</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Now</td>
      <td>
        What I'm doing now:
        <ul>
          <li>Studying RL papers and implementing projects based on different concepts of RL.</li>
          <li>Reading "Godel, Escher, Bach: An Eternal Golden Braid" by Douglas Hofstadter</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## latest posts

<table class="posts-table">
  <thead>
    <tr>
      <th>Date</th>
      <th>Post</th>
    </tr>
  </thead>
  <tbody>
    {% for post in site.posts limit: 5 %}
    <tr>
      <td>{{ post.date | date: "%b %d, %Y" }}</td>
      <td><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></td>
    </tr>
    {% endfor %}
  </tbody>
</table>

## selected publications

<ol class="publications-list">
  <li>
    <div class="publication-title">A Novel approach for b value optimization in IVIM imaging using an LSTM based deep learning network on simulated data</div>
    <div class="publication-authors">Abin Shoby, <strong>Jerome Francis</strong>, Jini Raju, Ushadevi Amma C., Ansamma John</div>
    <div class="publication-venue"><em>International Journal of Medical Engineering and Informatics</em>, 2023</div>
    <div class="publication-links">
      {% if site.publications %}
        {% for pub in site.publications %}
          {% if pub.title == "IVIM" %}
            {% if pub.pdf %}<a href="{{ pub.pdf }}">PDF</a>{% endif %}
            {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}">DOI</a>{% endif %}
          {% endif %}
        {% endfor %}
      {% endif %}
    </div>
  </li>
</ol>
