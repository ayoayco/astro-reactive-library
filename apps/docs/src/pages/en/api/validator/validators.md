---
title: Validators
type: class
package: "@astro-reactive/validators"
description: Validator package for @astro-reactive/forms package for providing validation to forms.
layout: ../../../../layouts/Layout.astro
---

The `Validators` class provides a set of built-in validators that can be used by form controls right out of the box.

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";
import { Validators } from "@astro-reactive/validator";

const form = new FormGroup([
	{
		name: "username",
		label: "Username",
		validators: [Validators.required],
	},
	{
		name: "password",
		label: "Password",
		validators: [Validators.required, Validators.minLength(8)],
	},
]);
---

<Form formGroups={form} />
```

_See the documentation for the [validators prop](#) here._

## Installation

```
npm i @astro-reactive/validator
```

## Usage

Simply import the `Validators` class from the `@astro-reactive/validator` package and use the validators as needed.

### `Validators.required`

The `Validators.required` validator is used to ensure that a form control has a non-empty value.

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";
import { Validators } from "@astro-reactive/validator";

const form = new FormGroup([
	{
		name: "username",
		label: "Username",
		validators: [Validators.required],
	},
]);
---

<Form formGroups={form} />
```

### `Validators.requiredChecked`

The `Validators.requiredChecked` validator is used to ensure that a checkbox is checked.

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";
import { Validators } from "@astro-reactive/validator";

const form = new FormGroup([
	{
		name: "terms",
		label: "Terms and Conditions",
		type: "checkbox",
		validators: [Validators.requiredChecked],
	},
]);
---

<Form formGroups={form} />
```

### `Validators.email`

The `Validators.email` validator is used to ensure that a form control has a valid email address. It uses a regular expression to validate the email address.

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";
import { Validators } from "@astro-reactive/validator";

const form = new FormGroup([
	{
		name: "email",
		label: "Email",
		validators: [Validators.email],
	},
]);
---

<Form formGroups={form} />
```

### `Validators.min`

The `Validators.min` validator is used to ensure that the numeric value of form control is greater than or equal to given value.

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";
import { Validators } from "@astro-reactive/validator";

const form = new FormGroup([
	{
		name: "price",
		label: "Price",
		type: "number",
		validators: [Validators.min(8)],
	},
]);
---

<Form formGroups={forms} />
```

### `Validators.max`

The `Validators.max` validator is used to ensure that the numeric value of form control is less than or equal to given value.

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";
import { Validators } from "@astro-reactive/validator";

const form = new FormGroup([
	{
		name: "price",
		label: "Price",
		type: "number",
		validators: [Validators.max(8)],
	},
]);
---

<Form formGroups={forms} />
```

### `Validators.minLength`

The `Validators.minLength` validator is used to ensure that the length of the value of form control is greater than or equal to given value.

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";
import { Validators } from "@astro-reactive/validator";

const form = new FormGroup([
	{
		name: "password",
		label: "Password",
		validators: [Validators.minLength(8)],
	},
]);
---

<Form formGroups={forms} />
```

### `Validators.maxLength`

The `Validators.maxLength` validator is used to ensure that the length of the value of form control is less than or equal to given value.

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";
import { Validators } from "@astro-reactive/validator";

const form = new FormGroup([
	{
		name: "password",
		label: "Password",
		validators: [Validators.maxLength(8)],
	},
]);
---

<Form formGroups={forms} />
```
