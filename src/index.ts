/**
 * Validate — Tissue Layer
 * Composes cells per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: tissue → depends on → cell
 */

import { ValidateExecComposition } from "@webwaka/cell-validate-exec";
import { PolicyEvalComposition } from "@webwaka/cell-policy-eval";

export { ValidateExecComposition } from '@webwaka/cell-validate-exec';
export { PolicyEvalComposition } from '@webwaka/cell-policy-eval';

/**
 * Validate Composition
 * Assembles cell-layer components into a cohesive tissue-layer capability.
 */
export class ValidateComposition {
  private validateExecComposition: ValidateExecComposition;
  private policyEvalComposition: PolicyEvalComposition;

  constructor() {
    this.validateExecComposition = new ValidateExecComposition();
    this.policyEvalComposition = new PolicyEvalComposition();
  }
}

export * from "./types";
