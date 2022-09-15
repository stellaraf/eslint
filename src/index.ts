import { vendor } from "./vendor";
import { custom } from "./custom";

import type { Linter } from "eslint";

export default { ...vendor, ...custom } as Linter.Config;
