---
layout: post
title: Duelling Architecture for DQNs
---

- - Based on Advantage functions other than Q-learning, it separates the representation of state values and (state-dependent) action advantages.
  - This architecture can learn which states are valuable or not, without knowing or learning the effect of an action on such a state. It is useful to determine the state where its actions don't affect the environment in a relevant way.
  - Previous works by Baird and Harmon (1995) : Advantage learning algo. and advantage updating algo. were introduced.
  - Advantage Learning : It is a form of reinforcement learning similar to Q-learning except that it uses *advantages* rather than *Q-values*. For a state *x* and action *u*, the advantage for that state-action pair *A(x,u)* is related to the Q value *Q(x,u)* as:

​    A(x,u)=max(Q(x,u')) + (Q(x,u) - max(Q(x,u'))) * k/dt

- - - In advantage updating requires storing a value function *V(x)* in addition to the advantage function. Advantage learning is a more recent algorithm that supercedes advantage updatingNo, and requires only that the A(x,u) advantages be stored. The two algorithms have essentially identical behavior, but the later algorithm requires less information to be stored, and is a simpler algorithm, so it is generally recommended. Refer [here](http://www.cs.cmu.edu/afs/cs.cmu.edu/project/learn-43/lib/photoz/.g/web/glossary/advantage.html).

  - Note, value function V tells how **good** is it to be in a particular state. Q-value function tells which **actions are good to be taken** from a state (value denotes the choosing of an action). Advantage, which simply,  ***A = Q - V\***, shows us the **importance of an action**.

  - - The above equation is valid but not useful to identify V and A separately. This can be shown by the following steps :

    - - Adding a constant to V & subtracting the same from A, doesn't help to identify V and A.
      - Making the advantage (A) to zero for an action is also not useful. Same is with using max operator on A

    - However, replacing the max operator with average gives stability to the model, even if the above equation's meaning is lost due to this factor. (**Reason ?**)

  - **Advantages over single-stream architecture:**

  - - Effective learning of state-value function
    - Value stream also gets updated frequently with every update of Q-value
    - Separate advantage stream is robust to noise in the updates, while single stream is sensitive.