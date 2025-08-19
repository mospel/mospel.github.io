---
layout: archive
title: "Curriculum vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
------
* Ph.D. in Acoustics, University of Rostock, 2023 <br>
  Thesis on the active global control of time-harmonic sound waves
* Master in Acoustics, University of Stuttgart, 2020 <br>
  Thesis on the investigation of ultrasonic scattering for object classification
* Bachelor of Science, Middlesex University, 2017 <br>
  Thesis on the comparative study of spherical and cubic Helmholtz resonators
  
Work experience
------
* Spring 2023 - present: Staff Scientist <br>
  French-German Research Institute of Saint-Louis <br>
  Acoustics and Shock Waves Group
* Spring 2020 - Spring 2023: Doctoral Researcher <br>
  University of Rostock <br>
  Acoustics Group (Supervision: Prof. Dr.-Ing. F.-H. Wurm, Dr.-Ing. M. Witte)
* Winter 2019 - Spring 2020: Research Internship <br>
  Robert Bosch Center for Research and Development Renningen <br>
  Structual Dynamics and Acoustics Group (Supervision: Prof. Dr.-Ing. P. Leistner, Dr.-Ing. A. Gerlach)
  
Skills
------
* Languages: German (native), English (proficient), French (basic)  
* Programming: Extensive experience in Python and MATLAB; proficient in C++
* Technical expertise: Numerical modeling of sound and shock waves, signal processing, inverse acoustic problems

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
