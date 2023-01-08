---
title: Getting Started
description: Library homepage
layout: ../../../layouts/Layout.astro
---

Consider the following code:


``` astro
---
import Form { FormGroup } from '@astro-reactive/form';
import { Validators  } from '@astro-reactive/validator';

const form = new FormGroup([
  {
    name: 'username',
    label: 'Username',
    validators: [Validators.required]
  },
  {
    name: 'password',
    label: 'Password',
    validators: [Validators.required, Validators.minLength(8)]
  },
]);
---

<Form formGroups={form} />

```
