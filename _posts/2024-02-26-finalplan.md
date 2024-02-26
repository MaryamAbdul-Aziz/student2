---
layout: post
title: 'Final: Level 4 (Plan)'
type: collab
comments: true
courses: {'compsci': {'week': 19}}
---

# Level 4: Magic Realm

- Add new Game Level to list

- Change all assets in level to make custom level
    - Player
    - Enemy
    - Background
    - Platform
    - Jump platform
    - Tube

- Modify/add sounds to make a customized experience
    - Added tube sound for traveling within tube
    - Changed player jump sound (video-game jump sound -> more realistic 'grunt')
    - Changed player death sound (video-game death sound -> more 'magical' restart)
    - Changed enemy death sound (video-game sound -> snake hiss)
    - Changed tube sound (mario tube sound -> magical portal sound)

- Modified code to accomodate different sound based on level using `GameEnv.currentLevel.tag` and `if` statements

- Modified portal to disappear player after collision to give the effect of being transported

- Fixed issues with sprites
    - Moved and modified portal size and position
    - Fixed issue with player and enemy spritesheet (no left-hand movement) by flipping sprite