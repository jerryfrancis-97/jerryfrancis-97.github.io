---
layout: page
title: Jerome Francis
head_title: Home
page_class: home
---

<div class="home pretty-links">

I'm a master's student at Mila and the University of Montreal, interested in deep learning with a focus on reinforcement learning and decision making. Previously I worked as a data scientist at TCS.

I studied computer science and engineering at TKM College of Engineering, Kollam. Outside work, I read science and philosophy fiction, cycle when the weather cooperates, and listen to film scores — lately [Aggressive Expansion](https://www.youtube.com/watch?v=gEXZmoai-OI), the [Iron Man 3 theme](https://www.youtube.com/watch?v=wL6jh9thk8Q), and [Love & Work](https://www.youtube.com/watch?v=3Xqqs5bCHpY).

## Now

- Studying RL papers and implementing projects based on different concepts of RL.
- Reading *Gödel, Escher, Bach: An Eternal Golden Braid* by Douglas Hofstadter.

## Latest writing

{% assign latest = site.posts | first %}
**[{{ latest.title }}]({{ latest.url }})** · {{ latest.date | date: "%B %Y" }}

{{ latest.content | strip_html | truncatewords: 35 }}

[More writing →](/blog/)

## Publications

Abin Shoby, ***Jerome Francis***, Jini Raju, Ushadevi Amma C., Ansamma John. A Novel approach for b value optimization in IVIM imaging using an LSTM based deep learning network on simulated data, **International Journal of Medical Engineering and Informatics, 2023**

## Selected projects

### RL + IL in Minecraft

Used imitation learning along with RL to obtain a Diamond in the **MineRLObtainDiamond-v0** environment. The agent reached stone pickaxe and several iron pickaxes; careful dataset mixing from TreeChop-v0, Navigate-v0, and ObtainIronPickaxe-v0 improved sequential task execution.

### Improving IVIM imaging

Senior-year work on **Intra-Voxel Incoherent Motion (IVIM)** MRI with Dr. Ansamma John — data augmentation, scan reconstruction with learned visual representations, and b-value optimization using deep learning.

### Video-based rail gap measurement

Semantic segmentation to measure rail track width in video frames for the **Rail Defect Detection** product at Ignitarium Technologies (2019). [Demo](https://youtu.be/DhvYU9aXquY?t=32)

### RailSathi

Three-person design-course app for connecting-train booking, sanitation ratings, seat exchange, and coach chat rooms. Presented at Ideafest, Kerala Startup Mission.

### Smart waste management

Time-series forecasting (SARIMA, ARIMA) for IoT smart-bin waste collection as part of TEKCON'19. [Code](https://github.com/jerryfrancis-97/Waste-prediction-model)

### Q-Learning for the Taxi environment

Tabular Q-learning with temporal-difference updates on Gym's taxi task. [Notebook](https://github.com/jerryfrancis-97/Reinforcement_learning/blob/master/RL_taxi_task.ipynb)

### Jazz generation with LSTM

Learns jazz composition patterns and samples new tones in learned style; Coursera *Sequences and Models* assignment. [Code](https://github.com/jerryfrancis-97/Jazz-music-generation-using-LSTM)

</div>
