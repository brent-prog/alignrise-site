import test from "node:test";
import assert from "node:assert/strict";
import { appointmentAnnualRevenue } from "../src/lib/proposal-calculations.ts";
test("one location, five extra appointments", () => {
 assert.equal(appointmentAnnualRevenue({appointmentsPerWeek:5,averageValue:130,weeks:48,locations:1}),31200);
});
test("two locations scales independently", () => {
 assert.equal(appointmentAnnualRevenue({appointmentsPerWeek:5,averageValue:130,weeks:48,locations:2}),62400);
});
test("no extra bookings means zero additional revenue", () => {
 assert.equal(appointmentAnnualRevenue({appointmentsPerWeek:0,averageValue:130,weeks:48,locations:1}),0);
});
test("reject invalid inputs", () => {
 assert.throws(()=>appointmentAnnualRevenue({appointmentsPerWeek:-1,averageValue:130,weeks:48,locations:1}),RangeError);
 assert.throws(()=>appointmentAnnualRevenue({appointmentsPerWeek:NaN,averageValue:130,weeks:48,locations:1}),RangeError);
});
