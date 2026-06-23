// Stripe v22+ bundles its own types via exports conditions.
// This stub resolves the tsc --noEmit false positive when moduleResolution="bundler"
// doesn't pick them up. Next.js (SWC) has no issue at runtime.
declare module "stripe" {
  export { Stripe as default } from "./node_modules/stripe/cjs/stripe.cjs.node";
}
