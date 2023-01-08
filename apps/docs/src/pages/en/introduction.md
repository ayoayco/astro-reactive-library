---
title: Hi, explorer!
description: Astro Reactive Library Docs
layout: ../../layouts/Layout.astro
---

Thanks for checking out the Astro Reactive Library! Welcome to a new adventure.

This project aims to be a new library of components and utilities for building reactive user interfaces with [Astro](https://astro.build).

We will update this documentation with a fun and easy tutorial so you can start building reactive UIs with Astro from scratch using our packages.

> **📝 Note:** See our [API Docs](/en/api) for example usage.

## Reactive what?

We are in pursuit of an easy developer experience for implementing reactive UIs in an Astro app. By this we mean components that are able to emit and listen to events, and a huge part of the challenge is "hibernating" the state after server-rendering and "waking" it up on the browser.

This will be released as a core package of the library to support reactivity across our packages, and hopefully as a utility to use for your own components.

As of now this is still a _goal_. In other words, we see this as researching the [hyperdrive](https://starwars.fandom.com/wiki/Hyperdrive/Legends) engine to explore new frontiers with Astro.

And we're having fun.

_👉 [Join us!](https://github.com/astro-reactive/astro-reactive/blob/main/CONTRIBUTING.md#readme)_

## Project Motivation

When you build a page with Astro right now, you have to keep in mind that everything is built into HTML with very minimal, and even zero, JS.

This is what makes astro great for content-focused web applications.

However we also see that Astro has given us a good baseline framework to potentially build more complex interactions.

The challenge right now is that there is no opinionated way to "resume" what your components did from the server to the browser. So I thought: What if there is a library of components and utilities to help us do this?

In this project, our motivation is to get to this future. This is our _next frontier 🚀_

## Some Tradeoffs

The Astro framework is very clear and focused on what they provide: top-tier performance for content-focused websites. In doing so, it has introduced a new world of architecture to a lot of developers.

Once we take off in pursuit of our project goals, we are aware of some tradeoffs that will be made.

As we build, we aim to minimize the performance hit to your applications.

We will also make this clear in our library documentation as we see them.

## Packages

| Package                                                                                              | Release notes                                                                                     | Description                                              |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [form](/en/api/form/form-component)                                                                  | [![npm](https://img.shields.io/npm/v/@astro-reactive/form)](https://github.com/astro-reactive/astro-reactive/blob/main/packages/form/RELEASE.md)           | a dynamic form which can be modified programmatically    |
| [validator](https://github.com/astro-reactive/astro-reactive/blob/main/packages/validator/README.md) | [![npm](https://img.shields.io/npm/v/@astro-reactive/validator)](https://github.com/astro-reactive/astro-reactive/blob/main/packages/validator/RELEASE.md) | validators for editable fields                           |
| data-grid                                                                                            | 🛠                                                                                                 | a dynamic data grid of values                            |
| themes                                                                                               | 🛠                                                                                                 | easy-to-use, accessible, consistent cross-browser styles |
| viz                                                                                                  | 🛠                                                                                                 | data visualization that emits and responds to events     |

