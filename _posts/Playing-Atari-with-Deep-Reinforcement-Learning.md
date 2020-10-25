---
layout: post
title: Playing Atari with Deep Reinforcement Learning
---

- - Using Q-learning with deep learning techniques (neural networks) on ATARI games

  - Most similar previous work was NFQ (neural fitted Q-learning)

  - - NFQ optimizes the sequence of loss functions in Equation 2, using the RPROP algorithm to update the parameters of the Q-network. However, it uses a batch update that has a computational cost per iteration that is proportional to the size of the data set, whereas we consider stochastic gradient updates that have a low constant cost per iteration and scale to large data-sets. 
    - NFQ has also been successfully applied to simple real-world control tasks using purely visual input, by first using deep autoencoders to learn a low dimensional representation of the task, and then applying NFQ to this representation.
    - Other work that was applied on Atari games were evolutionary algorithms Hyper NEAT

  - Metric used for evaluation was average total reward and average of maximized state-action values or Q-values. These Q-values showed the situations where agent reacted to presence /absence of enemy. 

  - ***Techniques used in DQN\***

  - - **Clipping of rewards** from actual scores to +1/-1 rewards :: It limits the scale of the error derivatives and makes it easier to use the same learning rate across multiple games. But, it could affect the performance of our agent since it cannot differentiate between rewards of different magnitude.

    - **Simple frame-skipping technique** :: The agent sees and selects actions on every kth frame instead of every frame, and its last action is repeated on skipped frames.

    - **Experience replay** : TO construct a set of recent experiences from the episodes received, and then random sample a batch of it to train the neural network for learning actions which give target rewards (near to expected return values).

    - Benefits are :

    - 1. Breaks correlation between states : Does not learn to mirror the following states as experienced during the episodes, but chooses the best action wrt. the given state.

      2. To stop changes in training data, which can oscillate by producing more episode (and more data) according to the best posssible action at a given training time. 

         Quote:

         *"When learning on-policy, the current parameters determine the next data sample that the parameters are trained on. For example, if the maximizing action is to move left then the training samples will be dominated by samples from the left-hand side; if the maximizing action then switches to the right then the training distribution will also switch. It is easy to see how unwanted feedback loops may arise and the parameters could get stuck in a poor local minimum, or even diverge catastrophically"*

      3. Each step of experience is potentially used in many weight updates, which allows for greater data efficiency.

  - **Clarifications and Keywords**:

  - - *No op actions* : These mean that at the start of the game the agent will do nothing. This is used to break the correlation of repeating starting states and learning of the agent. For example, in Ping Pong, the agent should be able to move left if the ball will come to left, and this should be present for different positions of ball reaching the agent's side (states are like when ball is moving leftwards in the beginning of movement, and the same ball has entered the agent-half of the game window).