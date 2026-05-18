/**
 * @amlplugins/google-cloud-dataflow
 *
 * Thin namespaced re-export of the native @google-cloud/dataflow SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Dataflow.
 */

import * as _sdk from "@google-cloud/dataflow";
export * from "@google-cloud/dataflow";
export { _sdk as sdk };
export default _sdk;
