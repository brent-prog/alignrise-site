"use client";
import { useState } from "react";
export type ScenarioCalculatorProps = { defaultAppointments?: number; defaultValue?: number; weeks?: number; showLocations?: boolean; maxLocations?: number; defaultLocations?: number };
const cad = (n: number) => new Intl.NumberFormat("en-CA", {style:"currency",currency:"CAD",maximumFractionDigits:0}).format(n);
function ScenarioInput({label,value,setValue,min,max,step}: {label:string;value:number;setValue:(n:number)=>void;min:number;max:number;step:number}) {
  const update = (n:number) => {if(Number.isFinite(n)) setValue(Math.max(0,Math.min(1000000,n)));};
  return <div className="proposal-scenario-control">
    <label><span>{label}</span><input aria-label={label} type="number" inputMode="decimal" min="0" max="1000000"
      value={value} onChange={e=>update(Number(e.target.value))} /></label>
    <input type="range" aria-label={label+" slider"} min={min} max={max} step={step}
      value={Math.min(max,Math.max(min,value))} onChange={e=>update(Number(e.target.value))} />
    <div className="proposal-range-limits"><span>{min}</span><span>{max}{value>max ? " (typed value exceeds slider)" : ""}</span></div>
  </div>;
}
export default function ScenarioCalculator({defaultAppointments=5,defaultValue=130,weeks=48,showLocations=true,maxLocations=2,defaultLocations=1}:ScenarioCalculatorProps) {
  const [appointments,setAppointments] = useState(defaultAppointments);
  const [averageValue,setAverageValue] = useState(defaultValue);
  const [locations,setLocations] = useState(defaultLocations);
  const annual = appointments * averageValue * weeks * locations;
  return <section className="proposal-calc" aria-label="Illustrative revenue scenario">
    <div className="proposal-calc-inputs">
      <ScenarioInput label="Extra completed appointments per week, per location" value={appointments} setValue={setAppointments} min={0} max={30} step={1}/>
      <ScenarioInput label="Average appointment value ($)" value={averageValue} setValue={setAverageValue} min={80} max={200} step={5}/>
      {showLocations && <label className="proposal-location-label">Locations included
        <select value={locations} onChange={e=>setLocations(Number(e.target.value))}><option value={1}>One location</option>{maxLocations >= 2 && <option value={2}>Both locations</option>}</select></label>}
    </div>
    <div className="proposal-calc-result" aria-live="polite">
      <span>Illustrative additional annual service revenue</span>
      <strong data-testid="annual-revenue">{cad(annual)}</strong>
      <small>Based on {weeks} weeks annually. Before expenses, discounts and taxes; not profit, a forecast, or guaranteed results.</small>
    </div>
  </section>;
}
