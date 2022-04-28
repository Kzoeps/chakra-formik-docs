---
sidebar_position: 1
---
# Getting Started

## Installation

```bash
yarn add formik @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## Quick Start

```jsx
import React from "react";
import {ChakraProvider, Checkbox, Radio} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import {Input, Select, RadioGroup, FormControl, CheckboxGroup} from "chakra-formik";

export function App() {
	return (
		<ChakraProvider>
			<Formik
				initialValues={{
					name: "",
					age: "",
					gender: "2",
					character: ["naruto"],
				}}
				onSubmit={console.log}
			>
				<Form>
					<FormControl name={"name"}>
						<Input name={"name"}/>
					</FormControl>
					<FormControl name={"age"}>
						<Select placeholder="Please select option" name={"age"}>
							<option value={"1"}>1</option>
							<option value={"2"}>2</option>
							<option value={"3"}>3</option>
						</Select>
					</FormControl>
					<RadioGroup name={"gender"}>
						<Radio value="1">
							Male
						</Radio>
						<Radio value="2">
							Female
						</Radio>
					</RadioGroup>
					<CheckboxGroup name={"character"}>
						<Checkbox value="naruto">Naruto</Checkbox>
						<Checkbox value="sasuke">Sasuke</Checkbox>
					</CheckboxGroup>
					<button type={"submit"}>Submit</button>
				</Form>
			</Formik>
		</ChakraProvider>
	);
}

```
