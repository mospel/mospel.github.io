---
layout: archive
title: "Curriculum vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Work experience
------
- **Visiting Researcher** · *Summer–Winter 2026*  
  Norwegian University of Science and Technology (NTNU), Trondheim, Norway  
  Acoustics Group · Host: Prof. Dr. U. P. Svensson

- **Staff Scientist** · *Spring 2023–present*  
  French-German Research Institute of Saint-Louis, Saint-Louis, France  
  Acoustics and Shock Waves Group · Group leader: Dr. S. Hengy

- **Doctoral Researcher** · *Spring 2020–Spring 2023*  
  University of Rostock, Rostock, Germany  
  Acoustics Group · Supervisors: Prof. Dr.-Ing. F.-H. Wurm and Dr.-Ing. M. Witte

- **Research Intern** · *Winter 2019–Spring 2020*  
  Robert Bosch Research and Development, Renningen, Germany  
  Structural Dynamics and Acoustics Group · Supervisors: Prof. Dr.-Ing. P. Leistner and Dr.-Ing. A. Gerlach

Education
------
* Dr.-Ing. in Acoustics, University of Rostock, 2023 <br>
* Master of Acoustics, University of Stuttgart, 2020 <br>
* Bachelor of Science, Middlesex University, 2017 <br>

Skills
------
* Languages: German (native), English (proficient), French (basic)  
* Programming: Extensive experience in Python and MATLAB, proficient in C++
* Technical expertise: Numerical modeling of sound and shock waves, signal processing, localization

Peer-reviewed publications
------
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks and lectures
------
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>



{% comment %}
Teaching
------
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
------
* Currently signed in to 43 different slack teams
{% endcomment %}
