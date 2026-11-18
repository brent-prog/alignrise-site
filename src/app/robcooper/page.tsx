"use client";

import { useState } from "react";

const instructions = `You are Rob Cooper's structured business operating assistant, using the AlignRISE methodology developed by 3P Solutions.

PURPOSE
Help Rob organize competing paid commitments and grow recurring corporate/organizational photo and video work. Be a critical thinking partner, not a cheerleader. Avoid making Rob dependent on Brent for routine planning.

METHOD: ASSESS > ALIGN > ACTION > REVIEW
ASSESS: Interview Rob about current clients, income types, work in progress, deadlines, capacity, and goals. Ask no more than 3 questions at a time. Separate facts, estimates, assumptions, and unknowns. Produce a current-state assessment and ask Rob to approve it before proceeding.
ALIGN: Differentiate (1) work already sold, (2) strategic growth, (3) supplementary revenue, (4) referral opportunities, and (5) speculative ideas. Pick one strategic growth focus for the next 30 days without insisting Rob abandon other income. Clarify who buys, why, and what proof exists. Get approval.
ACTION: Build a complete master task list, a realistic weekly schedule with buffer and dedicated business-development time, a customer profile, relevant proof of work, a researched prospect list, outreach steps, and a measurable weekly scorecard.
REVIEW: Compare commitments with actual progress every week. Record results, one practical adjustment, three next actions, and a brief update Rob can share with Brent.

BUSINESS FRAMEWORK
People, Product, Profit. Planning, Processes, Performance. Use the structure to find practical problems and prioritize, not to generate business jargon.

NON-NEGOTIABLES
- Confirm facts and ask for dates, numbers, and evidence. Do not invent revenue, contacts, pricing, commitments, or testimonials.
- Protect paid commitments and realistic available hours. Help Rob manage task-switching rather than unrealistically insisting he do only one type of work.
- Distinguish a paid client, an ICP segment, a service offering, a partner/referral source, and a speculative idea. Don't count promises as pipeline.
- Put interesting new directions in an opportunity parking lot unless evidence justifies changing the plan.
- Do not recommend a website overhaul, new app or more tools without a validated requirement.
- Prefer actual action lists, dates, named owners, and measures over polished plans.
- Research prospects with public verifiable business contacts when tools are available; mark unverified and missing details.
- Ask for examples and permissions before suggesting public use of client work or testimonials.
- Never claim to have saved a file or updated an external system unless that action actually happened.
- Before moving between stages, summarize what was decided and ask Rob to confirm.
- Keep all important outputs in documents Rob can save and reupload to the project Knowledge section. Chats alone are not a durable operating record.
- Brent provides scheduled advisory review, not unlimited ad hoc consulting.
- Use plain English and direct, practical advice. Challenge avoidable drift politely.
`;

const context = `ROB COOPER PHOTOGRAPHY - PROVISIONAL BUSINESS CONTEXT
Provided as a starting point, not a verified assessment. Rob must correct and update every important fact.

Rob operates a photography/video business in Southern Ontario and has considered photography, video, wedding and portrait work, real estate, and web/IT support. He has described difficulty switching among live paid jobs and prospective opportunities.

ROB'S TWO CURRENT PRIORITIES
1. Handle multiple paid assignments and task switching without missing commitments.
2. Build more repeat corporate/organizational photo-video client work.

KNOWN EXAMPLES TO VERIFY
- Hospice of Waterloo Region: Rob has described repeat paid photography work that he enjoys. Ask about scope, current pricing, frequency, profit, client outcomes, and proof he can share.
- St. Mary's: Rob previously described ongoing photo and editing work. Confirm current scope and value.
- Whelk: Possible supplementary web/IT income or partnership. Confirm any actual signed work, scope and hours.
- First Sons / Lee: Historically a possible referral source, not a confirmed source of paid clients. Ask what has actually materialized.

PREVIOUS WORK
Rob previously evaluated several business lanes. Corporate photo/video appeared attractive. He was asked to identify 25 organizations resembling his successful clients, including fit, likely contact person, public professional email/phone, and a warm path in. Check what he has done rather than assuming completion.

Do not suggest abandoning other paid lines. Do not invent contracts, profitability, contact details or commitments. Start by asking Rob what has changed.
`;

const opening = `Let's start the ASSESS stage for my business. Read my project instructions and the business context in Project Knowledge first. Both contain working hypotheses, so challenge and verify them with me.

My two priorities are:
1. Manage the paid jobs, deadlines and task switching already on my plate.
2. Find more recurring corporate/organizational photo and video clients like my successful customers.

Start by asking me no more than three questions about my current client commitments, deadlines, available hours, and how I decide what to work on. Work with my actual information, not generic business examples.

When you have enough facts, produce a Current-State Assessment separating confirmed information from estimates and unknowns. Ask me to approve it before moving to ALIGN. Then help me create a realistic seven-day operating plan and a 30-day client-acquisition test.

By the end of our first working session, I want three concrete next actions and a list of files to save so future Claude chats have the agreed context. Begin with your first three questions.`;

const sections = [
 {id:"instructions",title:"Project instructions",note:"Copy once into Claude's Project Instructions",body:instructions},
 {id:"context",title:"Business context",note:"Copy into a local text file or upload as Project Knowledge",body:context},
 {id:"opening",title:"Start assessment",note:"Paste as the first message in a new chat inside your project",body:opening}
];

export default function RobCooperOnboarding(){
 const [copied,setCopied]=useState("");
 const [active,setActive]=useState(0);
 const [done,setDone]=useState<number[]>([]);
 async function copy(value:string,key:string){try{await navigator.clipboard.writeText(value);setCopied(key);setTimeout(()=>setCopied(""),2200);}catch{setCopied("failed");}}
 function toggle(i:number){setDone(s=>s.includes(i)?s.filter(x=>x!==i):[...s,i]);}
 const steps=[
  "Open Claude Projects in your existing Claude Pro account.",
  "Select New Project and name it Rob Cooper Photography | Business Operating System.",
  "Find the Project Instructions area. Copy the instructions in Step 2, paste them there and save.",
  "Copy the Business Context in Step 3. Paste it into a plain-text file named business-context.txt and upload it in the project's Knowledge area.",
  "Create a new chat inside the project. Copy the assessment starter in Step 4 and send it as your first message.",
  "Answer Claude's questions with real client and workload information. Confirm the assessment before starting the action plan.",
  "Save your approved assessment and action plan as files, and upload those to Project Knowledge for continuity.",
  "Share your completed outputs with Brent before your scheduled 30-minute review."
 ];
 return <main style={{minHeight:"100vh",background:"#f8fafc",color:"#171b2d",fontFamily:"Inter,Arial,sans-serif"}}>
 <div style={{background:"#201060",color:"#fff",padding:"22px max(24px,calc((100vw - 1040px)/2))",display:"flex",justifyContent:"space-between",gap:16,alignItems:"center",flexWrap:"wrap"}}>
 <div style={{fontWeight:850,fontSize:23,letterSpacing:"-.045em"}}>Align<span style={{color:"#9f9bff"}}>RISE</span><span style={{fontSize:10,verticalAlign:"top",marginLeft:3}}>™</span></div><div style={{fontSize:12,opacity:.8,letterSpacing:".08em",textTransform:"uppercase"}}>Client onboarding | 3P Solutions</div></div>
 <div style={{maxWidth:1040,margin:"0 auto",padding:"46px 24px 70px"}}>
 <p style={{fontSize:12,fontWeight:750,letterSpacing:".13em",color:"#4840e0",textTransform:"uppercase",marginBottom:12}}>Your business operating system</p>
 <h1 style={{fontSize:"clamp(30px,5vw,49px)",lineHeight:1.12,letterSpacing:"-.045em",maxWidth:770,margin:"0 0 17px"}}>Rob, let's put Claude to work on your business.</h1>
 <p style={{fontSize:18,lineHeight:1.65,color:"#475569",maxWidth:770}}>You already have Claude Pro. This guide sets up one dedicated project that helps you manage the paid work you're juggling and build more repeat corporate photo/video business. No upgrade, new app or ZIP extraction required.</p>
 <div style={{display:"flex",flexWrap:"wrap",gap:12,margin:"23px 0 38px"}}><a href="https://claude.ai/projects" target="_blank" rel="noopener noreferrer" style={{background:"#4840e0",color:"white",padding:"13px 19px",borderRadius:9,fontWeight:750,textDecoration:"none"}}>Open Claude Projects ↗</a><a href="#setup" style={{background:"#fff",border:"1px solid #dbe1ec",padding:"13px 19px",borderRadius:9,fontWeight:700,color:"#201060",textDecoration:"none"}}>Follow the steps ↓</a></div>
 <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:14,marginBottom:44}}>
 {[["01","Assess","Get a factual picture of your current work, capacity and clients."],["02","Align","Choose the growth direction while protecting work that pays."],["03","Action","Build a realistic weekly schedule and prospecting plan."]].map(x=><div key={x[0]} style={{background:"#fff",border:"1px solid #e3e8f1",borderRadius:14,padding:21}}><div style={{color:"#4840e0",fontWeight:850,fontSize:14}}>{x[0]}</div><h2 style={{fontSize:20,margin:"11px 0 6px"}}>{x[1]}</h2><p style={{fontSize:14,lineHeight:1.6,color:"#475569",margin:0}}>{x[2]}</p></div>)}</div>
 <section id="setup"><h2 style={{fontSize:27,letterSpacing:"-.03em"}}>1. Set up your Claude project</h2><p style={{lineHeight:1.65,color:"#475569"}}>Work through the checklist in order. You'll only need to create the project and set the instructions once.</p>
 <div style={{background:"#fff",border:"1px solid #e3e8f1",borderRadius:14,padding:19}}>
 {steps.map((s,i)=><label key={i} style={{display:"flex",alignItems:"flex-start",gap:13,padding:"12px 4px",borderBottom:i===steps.length-1?"none":"1px solid #edf0f5",cursor:"pointer",lineHeight:1.5}}><input type="checkbox" checked={done.includes(i)} onChange={()=>toggle(i)} style={{marginTop:4,width:17,height:17,accentColor:"#4840e0"}}/><span style={{color:done.includes(i)?"#64748b":"#111827",textDecoration:done.includes(i)?"line-through":"none"}}>{s}</span></label>)}
 <p style={{color:"#4840e0",fontSize:13,fontWeight:700,margin:"15px 2px 0"}}>{done.length} of {steps.length} completed</p></div></section>
 <section style={{marginTop:42}}><h2 style={{fontSize:27,letterSpacing:"-.03em"}}>2–4. Copy the three setup items</h2><p style={{lineHeight:1.65,color:"#475569"}}>Choose each tab and use Copy. There is no need to download or extract files. For Business Context, save the copied text in Notepad or TextEdit as <code>business-context.txt</code> before uploading it to Project Knowledge.</p>
 <div style={{display:"flex",gap:8,flexWrap:"wrap",margin:"18px 0"}}>{sections.map((s,i)=><button key={s.id} onClick={()=>setActive(i)} style={{border:active===i?"1px solid #4840e0":"1px solid #d7deeb",background:active===i?"#4840e0":"white",color:active===i?"#fff":"#201060",borderRadius:9,padding:"11px 14px",fontWeight:700,cursor:"pointer"}}>{i+2}. {s.title}</button>)}</div>
 <div style={{background:"#fff",border:"1px solid #e3e8f1",borderRadius:14,overflow:"hidden"}}>
 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:19,gap:12,flexWrap:"wrap",borderBottom:"1px solid #e3e8f1"}}><div><strong style={{fontSize:17}}>{sections[active].title}</strong><p style={{fontSize:13,color:"#64748b",margin:"6px 0 0"}}>{sections[active].note}</p></div><button onClick={()=>copy(sections[active].body,sections[active].id)} style={{background:"#201060",border:0,borderRadius:8,color:"#fff",padding:"11px 16px",fontWeight:800,cursor:"pointer"}}>{copied===sections[active].id?"✓ Copied":copied==="failed"?"Select text to copy":"Copy all text"}</button></div>
 <pre style={{whiteSpace:"pre-wrap",overflowWrap:"anywhere",fontFamily:"ui-monospace,SFMono-Regular,Consolas,monospace",fontSize:12.5,lineHeight:1.65,background:"#fbfcff",padding:22,margin:0,maxHeight:540,overflowY:"auto"}}>{sections[active].body}</pre></div>
 <p style={{color:"#64748b",fontSize:13,marginTop:10}}>Tip: Claude's interface may label the instructions or knowledge sections slightly differently. Both belong inside the project, not in a standalone chat.</p></section>
 <section style={{background:"#201060",borderRadius:15,padding:"25px 26px",color:"white",marginTop:38}}><h2 style={{fontSize:24,margin:"0 0 10px"}}>5. What to have ready for your review with Brent</h2><p style={{lineHeight:1.7,color:"#edeafd",marginTop:0}}>Complete the interview and confirm your current-state assessment. Bring a master task list, next week's actual schedule, examples of your corporate/organizational work and the first ten researched target organizations. Don't make up numbers or spend the week polishing your website.</p><p style={{lineHeight:1.7,color:"#edeafd",marginBottom:0}}>Send your outputs before the scheduled 30-minute review. We'll look at what you did, what worked and what needs changing. The goal is a practical operating rhythm, not more brainstorming.</p></section>
 <div style={{marginTop:25,fontSize:13,color:"#64748b"}}>Prepared for Rob Cooper Photography · AlignRISE™ by 3P Solutions · This setup page does not connect to or access your Claude account.</div>
 </div></main>;
}
