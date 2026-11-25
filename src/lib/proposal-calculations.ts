export type AppointmentScenario = { appointmentsPerWeek: number; averageValue: number; weeks: number; locations: number };
export function appointmentAnnualRevenue({ appointmentsPerWeek, averageValue, weeks, locations }: AppointmentScenario): number {
  const inputs = [appointmentsPerWeek, averageValue, weeks, locations];
  if (inputs.some(x => !Number.isFinite(x) || x < 0)) throw new RangeError("Scenario inputs must be finite non-negative numbers");
  return appointmentsPerWeek * averageValue * weeks * locations;
}
