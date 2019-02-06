import React from "react";
import Test from "../components/test";

const str = "variables";

const textTest = `text that can contain ${str}`;

const ApiTest = () => <Test title="Title test" text={textTest} />;

export default ApiTest;
