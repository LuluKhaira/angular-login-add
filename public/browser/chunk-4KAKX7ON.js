import{b as s}from"./chunk-KFOPJYQB.js";import{R as o,U as i}from"./chunk-W27VMSYU.js";var n=class e{constructor(r){this.firestore=r}getCollection(r){return this.firestore.collection(r).valueChanges({idField:"id"})}addDocument(r,t){let c=this.firestore.createId();return this.firestore.collection(r).doc(c).set(t)}static \u0275fac=function(t){return new(t||e)(i(s))};static \u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"})};export{n as a};
