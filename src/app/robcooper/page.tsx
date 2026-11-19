"use client";

import { useState } from "react";

const baseInstructions = `You are the business operating assistant for Rob Cooper Photography, working within the AlignRISE™ approach developed by 3P Solutions.

YOUR ASSIGNMENT
Rob has already identified exactly two problems:
A. Multiple kinds of paid work are necessary, but switching between them is difficult.
B. He wants more recurring corporate/organizational photo-video clients like the work he enjoys with Hospice of Waterloo Region.
Do not restart a generic business assessment or suggest Rob choose only one income lane. Help solve these two problems, beginning today.

3P METHOD APPLIED TO THESE PROBLEMS
Use the 3P business lenses People, Product and Profit to ensure decisions protect the owner's capacity, customer delivery and the economics of the work. Use the 3P management lenses Planning, Processes and Performance to turn decisions into an executable plan, a repeatable way of working and a weekly review.
For business development, apply the 3P Alignment Gears of Ideal Customer Profile (ICP), Unique Value Proposition (UVP), roles and goals. Treat current customer evidence as the starting point. Do not claim that any generated template, score or scoring threshold is an official 3P assessment instrument.
The sequence within EACH problem is: establish only the missing facts, clarify the desired result, identify the actual constraint, agree on practical actions, and review evidence of results. This is focused problem solving, not an organization-wide diagnostic.

HOW TO WORK
- Ask at most three questions at a time. Start from the information Rob has already provided, and verify uncertain facts instead of asking him to repeat his whole story.
- Prioritize paid work, customer commitments and delivery quality. Protect realistic working capacity, buffer time and recurring business-development time.
- Distinguish confirmed work, likely opportunities and speculative ideas. New ideas enter a parking lot unless Rob deliberately changes the plan.
- Do not assume multitasking is the problem; distinguish interruptions, unclear priorities, overloaded capacity, missing deadlines, excessive work-in-progress and poorly designed handoffs using Rob's own examples.
- Do not invent revenue, costs, profitability, contact names, email addresses, referrals, results or credentials. Label all assumptions and sources. Research only with verifiable sources when research access exists.
- Do not recommend a website rebuild, Lovable project, new paid software or a business model pivot unless the evidence supports it.
- Never tell Rob to complete an unrelated 3P assessment before helping with his chosen issue.
- In each session: produce a usable output, decisions confirmed, unanswered items and no more than three immediate next actions. Give dates only after asking about Rob's availability.
- Maintain two separate working records: WORKLOAD AND WEEKLY PLAN, and CORPORATE CLIENT DEVELOPMENT. Provide exportable Markdown or tables when asked. Suggest Rob add the latest approved records to Project Knowledge.
- Explain whether each recommendation is (1) grounded in a 3P principle, (2) based on a fact Rob supplied, or (3) your own suggestion. Never invent proprietary 3P rules.
- Brent's role is a scheduled 30-minute review of completed work, not ad hoc consulting.

SESSION OUTCOME - WORKLOAD
Inventory active work with client, deliverable, due date, hours remaining, importance, dependency, next physical action and status. Identify the actual source of switching friction. Build a seven-day capacity-aware schedule, simple prioritization/interruptions rules, and 15-minute daily check-in. Ask Rob to approve before treating it as the plan.

SESSION OUTCOME - CLIENT DEVELOPMENT
Examine Hospice and St. Mary's as potential evidence, verifying scope, purchase reasons, usage rights, frequency, pricing and referrals. Define an initial corporate/organizational ICP, a clear problem/outcome-led offer and examples of real proof. Identify a small credible first batch of prospects, then schedule specific outreach in available time. Do not demand a 25-name list on day one.

ACCOUNTABILITY
At the end of the day record commitments made, commitments finished, hours actually spent, outreach completed, observed results and the next three actions. Weekly review should show whether both business problems are improving.`;

const context = `ROB COOPER PHOTOGRAPHY | KNOWN CONTEXT - VERIFY WITH ROB

This is provisional context for a focused pilot, not a completed 3P diagnostic.

Rob has already explicitly requested help with:
1. A better way to multitask and switch among different kinds of work because it isn't practical or economical to work in only one lane.
2. More photo/video work in the corporate and organizational market. He is enjoying his work with Hospice of Waterloo Region and would welcome similar nonprofit clients as well as suitable for-profit clients.

Previously discussed working hypotheses to VERIFY:
- Hospice of Waterloo Region has been a paying photography client. Past discussion mentioned $160/hour; verify current pricing, deliverables and actual economics.
- St. Mary's has provided repeat paid photo work; verify nature of work and whether it makes sense as a comparison.
- Other possible revenue lanes have included weddings, portraits and web/IT support. Confirm which are actually active today.
- Whelk was a possible web/IT relationship. Do not count it as revenue without confirmation.
- First Sons / Lee was a possible referral path. Do not count it as pipeline without confirmation.
- Rob has explored corporate photo/video prospecting before. Ask what is already done so work isn't duplicated.

The goal is to improve how he operates NOW while developing the kind of work he wants MORE of. These are two linked workstreams, not an invitation to pivot his whole business. Rob owns and must correct this business context.`;

const workPrompt = `I want to solve the FIRST problem I actually raised with Brent: I need a better way to juggle multiple kinds of paid work and switch between tasks without wasting time or missing commitments. It is NOT financially realistic for me to pick one lane and abandon the others.

Use the AlignRISE 3P principles in this project's instructions, particularly Planning, Processes and Performance, but do not put me through a general business diagnostic.

Start with no more than three specific questions. Get the work I currently have on the go, deadlines, hours remaining and available working time. Ask me for actual examples of task-switching that are causing trouble.

Then help me:
1. Build a real master list with client, deliverable, deadline, estimated hours remaining, next action, and status.
2. Diagnose whether my switching problem is interruptions, unclear priorities, too much work in progress, unrealistic capacity, missing handoffs or something else. Cite my evidence.
3. Create a seven-day schedule that protects existing commitments and reserves a realistic amount of time for corporate photo/video business development.
4. Define simple rules for choosing my next task, handling unexpected jobs, batching similar work and reviewing the plan for 15 minutes daily.
5. End with the next three actions I can actually complete today and an approved WORKLOAD AND WEEKLY PLAN I can save.

Do not invent time commitments, deadlines or availability. Ask me to confirm the final schedule. Begin with your first three questions.`;

const growthPrompt = `I want to solve the SECOND problem I raised with Brent: I want more of the corporate and organizational photo/video work I enjoy, like Hospice of Waterloo Region. Nonprofits are welcome, and so are appropriate for-profit businesses.

Use the 3P Ideal Customer Profile (ICP), Unique Value Proposition (UVP), Product and Profit principles in the project instructions. Don't open with a full-company assessment or suggest a new website/app.

Ask no more than three questions at once. Start by learning:
- What Hospice actually hired me to do, how often, why they chose me, and what outcomes I delivered.
- What my St. Mary's work has in common or differs, and what examples I'm allowed to show.
- My current offer, pricing/economics, existing contacts/referrals and actual weekly time available for prospecting.

Then help me create:
1. An evidence-based initial ICP: kinds of organizations, buying situation, recurring need, decision-maker role, reasons I fit and disqualifiers.
2. A clear client-outcome-led offer and proof I can share, without inventing claims.
3. A first batch of FIVE credible organizations to approach. If research is available, verify organization, reason for fit, contact role, public contact route and source; otherwise help me assemble a research-ready list and mark unknowns.
4. A short outreach message I can customize and a follow-up cadence.
5. A calendar-ready first-week outreach plan fitting around existing client commitments, and a simple scorecard: outreach, responses, conversations, proposals, paid work.

Deliver a CORPORATE CLIENT DEVELOPMENT record and three next actions. Validate assumptions with me before presenting conclusions. Begin with the first three questions.`;

const cards = [
 {key:"work",number:"01",title:"Get control of my workload",desc:"Keep the work that pays. Organize commitments, reduce disruptive task switching and build a workable next seven days.",tag:"Planning · Processes · Performance",result:"Today's output: a real task list, weekly schedule and 3 immediate actions.",prompt:workPrompt},
 {key:"growth",number:"02",title:"Get more corporate photo/video clients",desc:"Build on what is working with Hospice and other customers to find and approach more organizations that need those services.",tag:"ICP · UVP · Product · Profit",result:"Today's output: an initial customer profile, offer, five prospects and outreach actions.",prompt:growthPrompt}
];

export default function RobCooperOnboarding(){
 const [copied,setCopied] = useState("");
 const [selected,setSelected] = useState<"work"|"growth">("work");
 const [completed,setCompleted] = useState<number[]>([]);
 const [showInstructions,setShowInstructions]=useState(false);
 async function copy(text:string,key:string){
  try {await navigator.clipboard.writeText(text);setCopied(key);window.setTimeout(()=>setCopied(""),2100);} catch {setCopied("error");}
 }
 function downloadContext(){
  const blob=new Blob([context],{type:"text/plain;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");a.href=url;a.download="rob-cooper-business-context.txt";a.click();
  window.setTimeout(()=>URL.revokeObjectURL(url),1000);
 }
 const item=cards.find(c=>c.key===selected)!;
 const steps=[
  "Open Claude Projects and create a project called Rob Cooper Photography | Business Operating System.",
  "Copy the 3P project instructions below into Claude's Project Instructions and save.",
  "Download the Rob business context below and upload it to the project's Knowledge area.",
  "Choose one of the two problems, copy its start prompt and send it in a NEW chat inside the project.",
  "Work with Claude until you have a usable output and your three actions. Save the agreed record for future sessions."
 ];
 const button:React.CSSProperties={background:"#4338ca",color:"#fff",padding:"12px 17px",border:0,borderRadius:9,fontWeight:750,cursor:"pointer",fontSize:14};
 return <main style={{minHeight:"100vh",background:"#f8fafc",color:"#111827",fontFamily:"Arial,Helvetica,sans-serif"}}>
  <header style={{background:"#201060",color:"#fff",padding:"18px max(20px, calc((100vw - 1040px) / 2))",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
   <div style={{fontSize:23,fontWeight:850,letterSpacing:"-.04em"}}>Align<span style={{color:"#a5a0ff"}}>RISE</span>™</div><div style={{fontSize:12,opacity:.85}}>3P Solutions · Client workspace</div>
  </header>
  <div style={{maxWidth:1040,margin:"0 auto",padding:"36px 20px 65px"}}>
   <p style={{fontSize:12,fontWeight:800,letterSpacing:".11em",color:"#4338ca",textTransform:"uppercase"}}>Your first day with AlignRISE</p>
   <h1 style={{fontSize:"clamp(30px,5vw,46px)",maxWidth:830,lineHeight:1.12,letterSpacing:"-.04em",margin:"8px 0 15px"}}>Rob, let's work on the two things you asked for.</h1>
   <p style={{maxWidth:790,fontSize:17,lineHeight:1.65,color:"#475569",marginBottom:28}}>You told Brent you need a better way to juggle different kinds of work, and you want more of the corporate photo/video work you're enjoying with Hospice. That's what we're solving. You already have Claude Pro, so you don't need another subscription or a new app.</p>
   <h2 style={{fontSize:22,margin:"0 0 14px"}}>Choose where you want to start</h2>
   <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(285px,1fr))",gap:16}}>
    {cards.map(c=><button key={c.key} onClick={()=>{setSelected(c.key as "work"|"growth");document.getElementById("start-prompt")?.scrollIntoView({block:"nearest",behavior:"smooth"});}} style={{textAlign:"left",padding:23,borderRadius:16,background:"#fff",border:selected===c.key?"2px solid #4338ca":"2px solid #e5e7eb",boxShadow:selected===c.key?"0 5px 22px rgba(67,56,202,.08)":"none",cursor:"pointer",color:"#111827"}}>
     <span style={{fontSize:12,color:"#4338ca",fontWeight:800}}>{c.number} · {c.tag}</span>
     <h3 style={{fontSize:22,letterSpacing:"-.02em",lineHeight:1.25,margin:"12px 0"}}>{c.title}</h3>
     <p style={{fontSize:14,color:"#475569",lineHeight:1.6}}>{c.desc}</p>
     <p style={{fontSize:13,fontWeight:750,lineHeight:1.6,marginBottom:0}}>{c.result}</p>
    </button>)}
   </div>
   <section style={{background:"#fff",border:"1px solid #e3e8f1",padding:23,borderRadius:16,marginTop:27}}>
    <h2 style={{fontSize:23,margin:"0 0 10px"}}>First, set up your Claude project (once)</h2>
    <p style={{fontSize:14,color:"#475569",lineHeight:1.6}}>This takes a few steps and makes sure Claude has 3P guidance before you start asking it for help. Check each one off as you go.</p>
    <a href="https://claude.ai/projects" rel="noopener noreferrer" target="_blank" style={{...button,display:"inline-block",textDecoration:"none",margin:"7px 0 15px"}}>Open Claude Projects ↗</a>
    {steps.map((s,i)=><label key={i} style={{display:"flex",gap:11,alignItems:"flex-start",padding:"12px 0",borderBottom:i<4?"1px solid #edf0f5":"none",lineHeight:1.5,cursor:"pointer",color:completed.includes(i)?"#64748b":"#1f2937"}}>
     <input type="checkbox" checked={completed.includes(i)} onChange={()=>setCompleted(v=>v.includes(i)?v.filter(n=>n!==i):[...v,i])} style={{width:17,height:17,accentColor:"#4338ca",marginTop:3}}/><span>{s}</span>
    </label>)}
    <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:15}}>
     <button onClick={()=>setShowInstructions(!showInstructions)} style={{...button,background:"#201060"}}>{showInstructions?"Hide 3P instructions":"Show 3P project instructions"}</button>
     <button onClick={()=>copy(baseInstructions,"instructions")} style={button}>{copied==="instructions"?"Copied ✓":"Copy 3P project instructions"}</button>
     <button onClick={downloadContext} style={{...button,background:"#fff",border:"1px solid #cbd5e1",color:"#201060"}}>Download Rob's business context</button>
    </div>
    {showInstructions&&<pre style={{whiteSpace:"pre-wrap",overflowWrap:"anywhere",background:"#f8fafc",border:"1px solid #e5e7eb",borderRadius:10,padding:18,maxHeight:360,overflowY:"auto",fontSize:12,lineHeight:1.65}}>{baseInstructions}</pre>}
    <p style={{fontSize:12,color:"#64748b",lineHeight:1.6,marginBottom:0}}>If Claude calls these sections something slightly different, look inside the project settings for Instructions and Knowledge. The context is a downloadable text file, not a ZIP. These are starting facts to verify, not a completed business assessment.</p>
   </section>
   <section id="start-prompt" style={{marginTop:25,borderRadius:16,background:"#fff",border:"1px solid #e3e8f1",overflow:"hidden"}}>
    <div style={{padding:"22px 23px",borderBottom:"1px solid #e3e8f1",display:"flex",justifyContent:"space-between",gap:12,alignItems:"center",flexWrap:"wrap"}}>
     <div><p style={{fontSize:12,fontWeight:800,color:"#4338ca",margin:"0 0 6px"}}>START YOUR FIRST WORKING SESSION</p><h2 style={{fontSize:23,margin:0}}>{item.title}</h2></div>
     <button onClick={()=>copy(item.prompt,item.key)} style={button}>{copied===item.key?"Copied ✓":"Copy this prompt"}</button>
    </div>
    <div style={{padding:"18px 23px"}}>
     <p style={{fontSize:14,lineHeight:1.6,color:"#475569",marginTop:0}}>After setting up your project, create a new chat inside it. Paste this exact prompt and answer Claude's questions. It should help you produce something usable today, not another general assessment.</p>
     <pre style={{fontFamily:"ui-monospace,Consolas,monospace",background:"#f8fafc",padding:18,borderRadius:10,whiteSpace:"pre-wrap",overflowWrap:"anywhere",fontSize:12,lineHeight:1.68,maxHeight:450,overflowY:"auto",border:"1px solid #e5e7eb"}}>{item.prompt}</pre>
     <p style={{fontSize:14,color:"#475569",lineHeight:1.6}}>Want to work on the other problem next? Select its card above and open a <strong>separate chat in the same Claude project</strong>. Both chats can use the same 3P instructions and business context.</p>
    </div>
   </section>
   <section style={{background:"#201060",color:"#fff",padding:25,borderRadius:16,marginTop:25}}>
    <h2 style={{fontSize:23,margin:"0 0 12px"}}>What Brent wants to see</h2>
    <p style={{color:"#ebe9ff",lineHeight:1.65,margin:"0 0 10px"}}>From the workload session: your real task list, a workable next-seven-days schedule and agreed rules for managing interruptions. From corporate development: an initial customer profile based on real examples, a credible offer, your first five target organizations and the outreach actions you'll take.</p>
    <p style={{color:"#ebe9ff",lineHeight:1.65,margin:0}}>Do the work, record what happens and share the outputs before your scheduled 30-minute review. We are not starting a whole-company assessment or asking you to abandon the other work that pays the bills.</p>
   </section>
   <footer style={{fontSize:12,color:"#64748b",lineHeight:1.6,marginTop:22}}>AlignRISE™ by 3P Solutions. Private client onboarding. Your work and conversations stay in your own Claude account; this page does not read or store them.</footer>
  </div>
 </main>;
}
