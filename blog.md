---
layout: blog
title: Blog
permalink: /blog/
---
<div id="blog" class="container">
  <div class="post-list-header">
  Posts
  </div>
  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <div class="post-item">
          <p>
            <a href="{{ post.url }}">{{ post.title }}</a>
            by <span>{{ post.author }}</span>
          </p>
        </div>
      </li>
    {% endfor %}
  </ul>
</div>

