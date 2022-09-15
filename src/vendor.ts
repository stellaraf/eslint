import type { Linter } from "eslint";
// @ts-expect-error
import _airBnbBase from "eslint-config-airbnb-base";
// @ts-expect-error
import _airBnbTypeScript from "eslint-config-airbnb-typescript";
// @ts-expect-error
import _prettier from "eslint-config-prettier";

const airBnbBase = _airBnbBase as Linter.Config;
const airBnbTypeScript = _airBnbTypeScript as Linter.Config;
const prettier = _prettier as Linter.Config;

export const vendor: Linter.Config = { ...airBnbBase, ...airBnbTypeScript, ...prettier };
