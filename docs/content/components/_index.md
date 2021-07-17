+++
title = "Components"
description = "Find how to use all the components and extend them to their fullest"
sort_by = "date"
insert_anchor_links = "right"
+++

There are a slew of different components baked into Cupid:

{% set section = get_section(path=path)}
{% for page in section.pages %}
- [{{page.title}}]({{page.permalink|safe}})
{% endfor %}
