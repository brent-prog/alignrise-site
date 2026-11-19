"use client";

import { useState } from "react";
import Image from "next/image";

const baseInstructions = "You are Rob Cooper Photography's AlignRISE™ business operating assistant, working under 3P Solutions.\nFIRST READ the Project Knowledge files \"3P-Focused-Working-Guide.txt\" and \"rob-cooper-business-context.txt\". If either is missing, STOP and ask for it. Never pretend you have read missing files.\nRob has already named two problems: (1) managing several necessary types of paying work and task switching; (2) finding repeat corporate/organizational photo-video work similar to Hospice of Waterloo Region. Stay with the problem he selects, not a broad business assessment.\nFollow the exact 3P definitions and criteria in the 3P Focused Working Guide: People, Product, Profit; Planning, Process, Performance; customer ICP and UVP; repeatable fulfilment and sales processes; scorecard and Weekly Business Review action tracking. Do NOT fabricate other proprietary 3P doctrines, scores or thresholds.\nINTERVIEW EXPERIENCE: Ask exactly ONE short, easy-to-answer conversational question per turn, never a long set of multipart questions. Do not ask Rob to format a list, fill a form, or answer multiple fields. He can answer casually or dictate; you organize his words into the work register. Capture one job at a time, then gather missing details individually. Summarize briefly, pause for his answer, and only present large tables when appropriate. This requirement supersedes any 'up to 3 questions' instruction in other material. Identify root causes using evidence and develop a practical working deliverable TODAY. Separate [Rob fact], [3P source criterion], [AI hypothesis] and [recommendation]. Protect existing paid work and customer commitments.\nDo not invent financials, client outcomes, names or contact details, buying needs or permissions to share clients' work. Don't recommend software, Lovable, website overhauls or dropping all but one revenue lane without verified need.\nMaintain two distinct approved output records: Work Register and Weekly Plan; Corporate Client Development and Prospect Log. After each session provide a usable record, a small measurable scorecard, and three concrete next actions with due dates only after confirming availability. Tell Rob to save the approved record to Project Knowledge. Never claim to have saved or sent anything you didn't. Brent reviews completed work in scheduled sessions.\n\nCLIENT CONTEXT BOUNDARY: This project is for Rob Cooper Photography, not the ChatGPT/Claude account owner or any other company. Use only this project's instructions, uploaded 3P guide, Rob business context, and information supplied in this project's chats. Ignore unrelated personal memory, global preferences, prior conversations, integrations or account-connected apps (including PRG, Zoho, or other clients). Do not mention or use those sources. If access to account-level context cannot be reliably isolated, disclose that limitation briefly during testing; do not claim project isolation is guaranteed. Do not access external tools or accounts unless Rob specifically authorizes a relevant action.\n\nONBOARDING VERIFICATION: Verification is an installation check, not an interview or 3P audit. READY requires readable Project Instructions and BOTH knowledge files, with contents matching the Rob/3P purpose. Missing saved work registers, baseline measures, prospect lists, review appointments and original 3P source workbook are EXPECTED and never block READY. Never ask who is speaking just because unrelated account memory exists: treat this as a Rob client project and exclude outside memory. If the user explicitly identifies as Brent testing the project, still simulate Rob using project-only information. Reply with a short READY or NOT READY status, confirm the three materials and two problems in 2-4 brief sentences, then ask which problem to begin. Do not dump definitions or list every rubric. Do not start actual business interviews until Rob chooses a problem.\n\nALIGNRISE OPERATING ARCHITECTURE: The 3P Alignment Engine (Purpose, Vision, Mission, Values, ICP, UVP, Roles & Goals) provides strategic direction across the TEN standard business functions. The 3P Focused Working Guide contains the exact names, definitions, alignment checks and function-tagging rules. Apply them to real tasks without demanding a complete Alignment Engine or 10-function assessment. Rob can begin today using his two stated goals as a provisional direction; build the longer-term engine incrementally from verified facts.\n\nFUNCTIONAL ACCOUNTABILITY: For each task/action in working records, Claude—not Rob—assigns a primary business function from the ten in the guide and notes meaningful dependencies when needed. Tie important priorities to the immediate business objective and People/Product/Profit outcomes. Don't mechanically explain function tags in every conversational response or make Rob complete a taxonomy survey.\n\nPROGRESSIVE ALIGNMENT: When actual evidence reveals something about target customers, value, purpose, priorities, values or roles/goals, capture it in an optional Alignment Insights area with its confirmed/provisional status. Ask at most one small alignment question when it changes the decision being made; otherwise save it for later. Never block workload organization or prospecting on a formal mission, vision, values, ICP or UVP exercise.";

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

ALIGNMENT MATURITY AT ONBOARDING
- Rob's two stated priorities are currently the directional anchor. They are not a complete Purpose, Mission, Vision, Values, ICP, UVP or Roles & Goals.
- The 3P Alignment Engine has not been established or validated for this business. Do not invent missing components and do not make completing them prerequisite homework.
- Claude should progressively capture verified insights about desired clients, customer value, business goals and capacity while solving the two stated problems.
- Tag work and actions by the relevant 3P business function as described in the 3P Focused Working Guide, without asking Rob to categorize it himself.

The goal is to improve how he operates NOW while developing the kind of work he wants MORE of. These are two linked workstreams, not an invitation to pivot his whole business. Rob owns and must correct this business context.`;

const workPrompt = `Before we start, confirm you can read the 3P-Focused-Working-Guide.txt and rob-cooper-business-context.txt in Project Knowledge. If either is missing, STOP and ask me to upload it. Name the exact 3P management criteria applicable to this issue.\n\nI want to solve the FIRST problem I actually raised with Brent: I need a better way to juggle multiple kinds of paid work and switch between tasks without wasting time or missing commitments. It is NOT financially realistic for me to pick one lane and abandon the others.

Use the AlignRISE 3P principles in this project's instructions, particularly Planning, Processes and Performance, but do not put me through a general business diagnostic.

Use the one-question-at-a-time interview rule in the 3P guide. DO NOT ask me to list all work and five fields per job. Start with EXACTLY one small question: "What's ONE paid job or client commitment you need to work on this week? Just tell me the client and what you owe them." Stop and wait. Capture the reply, then ask the next short follow-up in a separate turn. Build the work register gradually. Only later, after capturing my commitments, ask about available time and examples of switching friction. Never display a questionnaire.

Then help me:
1. Build a real master list with client, deliverable, deadline, estimated hours remaining, next action, status, and the primary one of the ten 3P business functions that the work supports. You assign the function; don't ask me to classify it.
2. Diagnose whether my switching problem is interruptions, unclear priorities, too much work in progress, unrealistic capacity, missing handoffs or something else. Cite my evidence. Assess the impact across functions and whether priorities support my two immediate business goals and People/Product/Profit, without requiring a formal Alignment Engine.
3. Create a seven-day schedule that protects existing commitments and reserves a realistic amount of time for corporate photo/video business development.
4. Define simple rules for choosing my next task, handling unexpected jobs, batching similar work and reviewing the plan for 15 minutes daily.
5. End with the next three actions I can actually complete today and an approved WORKLOAD AND WEEKLY PLAN I can save.

Do not invent time commitments, deadlines or availability. Ask me to confirm the final schedule. Begin with your first three questions.`;

const growthPrompt = `Before we start, confirm you can read the 3P-Focused-Working-Guide.txt and rob-cooper-business-context.txt in Project Knowledge. If either is missing, STOP and ask me to upload it. Name the exact 3P ICP/UVP and sales criteria applicable to this issue.\n\nI want to solve the SECOND problem I raised with Brent: I want more of the corporate and organizational photo/video work I enjoy, like Hospice of Waterloo Region. Nonprofits are welcome, and so are appropriate for-profit businesses.

Use the 3P Ideal Customer Profile (ICP), Unique Value Proposition (UVP), Product and Profit principles in the project instructions. Don't open with a full-company assessment or suggest a new website/app.

Ask EXACTLY ONE simple conversational question per assistant response. Start with: "What's one photo or video assignment you completed for Hospice that you'd love to do more of?" Stop and wait. Then, one question at a time, learn:
- What Hospice actually hired me to do, how often, why they chose me, and what outcomes I delivered.
- What my St. Mary's work has in common or differs, and what examples I'm allowed to show.
- My current offer, pricing/economics, existing contacts/referrals and actual weekly time available for prospecting.

Then help me create:
1. An evidence-based initial ICP: kinds of organizations, buying situation, recurring need, decision-maker role, reasons I fit and disqualifiers. Treat this as a PROVISIONAL Alignment Engine component based on real evidence, not a completed company-wide strategic plan.
2. A clear client-outcome-led offer and proof I can share, without inventing claims.
3. A first batch of FIVE credible organizations to approach. If research is available, verify organization, reason for fit, contact role, public contact route and source; otherwise help me assemble a research-ready list and mark unknowns.
4. A short outreach message I can customize and a follow-up cadence.
5. A calendar-ready first-week outreach plan fitting around existing client commitments, and a simple scorecard: outreach, responses, conversations, proposals, paid work. Tag each significant action by its primary business function (e.g., Marketing, Sales, Customer Experience / Success), and record useful alignment insights from actual results.

Deliver a CORPORATE CLIENT DEVELOPMENT record and three next actions. Validate assumptions with me before presenting conclusions. Begin with the first three questions.`;

const verificationPrompt = "Please verify that my AlignRISE project is ready to use. This is a short INSTALLATION CHECK, not a business assessment or methodology report.\n\nUse only this project's instructions and knowledge files. Ignore unrelated account memory, personal preferences, past chats and connected tools. This is the Rob Cooper Photography project; do not introduce other businesses. If the account itself is not isolated, say so briefly without importing details from other contexts.\n\nCheck that you can actually access all three items:\n- Project Instructions for Rob Cooper Photography\n- 3P-Focused-Working-Guide.txt\n- rob-cooper-business-context.txt\n\nVerify by referring to the actual content, not just filenames. Do NOT request the original source workbook, an existing Work Register, a prospect list or a scheduled Brent review: none are required to begin. Don't ask who I am based on account-level memory.\n\nUse exactly this short response structure:\nSTATUS: READY or NOT READY\nMATERIALS: Say which of the three are readable; identify any genuinely missing item.\nFOCUS: One sentence naming Rob's two problems and noting that the 3P guide includes the ten business functions and progressive alignment principles.\nNEXT: If READY, ask \"Which would you like to work on first: getting control of your workload or finding more corporate photo/video clients?\" If NOT READY, give only the specific correction needed.\n\nLimit your reply to 120 words. Do not list all ten functions, demand the full Alignment Engine or start an assessment. No tables, long lists, methodology recital, implementation plan or unrelated setup decisions. Do not begin the business interview yet.";

const cards = [
 {key:"work",number:"01",title:"Get control of my workload",desc:"Keep the work that pays. Organize commitments, reduce disruptive task switching and build a workable next seven days.",tag:"Planning · Processes · Performance",result:"Today's output: a real task list, weekly schedule and 3 immediate actions.",prompt:workPrompt},
 {key:"growth",number:"02",title:"Get more corporate photo/video clients",desc:"Build on what is working with Hospice and other customers to find and approach more organizations that need those services.",tag:"ICP · UVP · Product · Profit",result:"Today's output: an initial customer profile, offer, five prospects and outreach actions.",prompt:growthPrompt}
];

export default function RobCooperOnboarding(){
 const [copied,setCopied] = useState("");
 const [selected,setSelected] = useState<"work"|"growth">("work");
 const [completed,setCompleted] = useState<number[]>([]);
 const [showInstructions,setShowInstructions]=useState(false);
 const [showVerification,setShowVerification]=useState(false);
 const [showSessionPrompt,setShowSessionPrompt]=useState(false);

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
  "Download the 3P Working Guide and Rob Business Context and upload BOTH files to Claude Project Knowledge.",
  "Run the setup verification prompt below inside Claude. Review its evidence and check this item only if it reports READY.",
  "Choose one of the two problems below, copy its working prompt and use a separate chat in the same Claude project."
 ];
 const button:React.CSSProperties={background:"#4338ca",color:"#fff",padding:"12px 17px",border:0,borderRadius:9,fontWeight:750,cursor:"pointer",fontSize:14};
 return <main style={{minHeight:"100vh",background:"#f8fafc",color:"#111827",fontFamily:"Arial,Helvetica,sans-serif"}}>
  <header style={{background:"#201060",color:"#fff",padding:"18px max(20px, calc((100vw - 1040px) / 2))",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
   <a href="https://alignrise.ca" target="_blank" rel="noopener noreferrer" aria-label="AlignRISE website" style={{display:"inline-flex",alignItems:"center",flexShrink:0}}><Image src="/alignrise-logo.svg" alt="AlignRISE™" width={112} height={112} priority style={{display:"block",width:"clamp(88px,11vw,112px)",height:"auto"}} /></a><div style={{fontSize:12,opacity:.85}}>3P Solutions · Client workspace</div>
  </header>
  <nav aria-label="Onboarding navigation" style={{position:"sticky",top:0,zIndex:20,display:"flex",gap:20,flexWrap:"wrap",background:"white",borderBottom:"1px solid #e5e7eb",padding:"12px max(20px, calc((100vw - 1040px)/2))",fontSize:13,fontWeight:700}}><a href="#setup">1. Set up Claude</a><a href="#choices">2. Choose problem</a><a href="#start-prompt">3. Start session</a><a href="#review">4. Review</a></nav>
  <div style={{maxWidth:1040,margin:"0 auto",padding:"36px 20px 65px"}}>
   <p style={{fontSize:12,fontWeight:800,letterSpacing:".11em",color:"#4338ca",textTransform:"uppercase"}}>Your first day with AlignRISE</p>
   <h1 style={{fontSize:"clamp(30px,5vw,46px)",maxWidth:830,lineHeight:1.12,letterSpacing:"-.04em",margin:"8px 0 15px"}}>Rob, let's work on the two things you asked for.</h1>
   <p style={{maxWidth:790,fontSize:17,lineHeight:1.65,color:"#475569",marginBottom:28}}>You told Brent you need a better way to juggle different kinds of work, and you want more of the corporate photo/video work you're enjoying with Hospice. That's what we're solving. You already have Claude Pro, so you don't need another subscription or a new app.</p>
   <section id="setup" style={{background:"#fff",border:"1px solid #e3e8f1",padding:23,borderRadius:16,marginTop:27,scrollMarginTop:90}}>
    <h2 style={{fontSize:23,margin:"0 0 10px"}}>First, set up your Claude project (once)</h2>
    <p style={{fontSize:14,color:"#475569",lineHeight:1.6}}>Complete the first three setup steps, then run the verification prompt. Confirm Claude reports READY before starting a working session. The checklist is for your reference and does not lock the prompts.</p>
    <a href="https://claude.ai/projects" rel="noopener noreferrer" target="_blank" style={{...button,display:"inline-block",textDecoration:"none",margin:"7px 0 15px"}}>Open Claude Projects ↗</a>
    {steps.map((s,i)=><label key={i} style={{display:"flex",gap:11,alignItems:"flex-start",padding:"12px 0",borderBottom:i<steps.length-1?"1px solid #edf0f5":"none",lineHeight:1.5,cursor:"pointer",color:completed.includes(i)?"#64748b":"#1f2937"}}>
     <input type="checkbox" checked={completed.includes(i)} onChange={()=>setCompleted(v=>v.includes(i)?v.filter(n=>n!==i):[...v,i])} style={{width:17,height:17,accentColor:"#4338ca",marginTop:3}}/><span>{s}</span>
    </label>)}
    <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:15}}>
     <button onClick={()=>setShowInstructions(!showInstructions)} style={{...button,background:"#201060"}}>{showInstructions?"Hide 3P instructions":"Show 3P project instructions"}</button>
     <button onClick={()=>copy(baseInstructions,"instructions")} style={button}>{copied==="instructions"?"Copied ✓":"Copy 3P project instructions"}</button>
     <a href="/robcooper/3P-Focused-Working-Guide.txt" download="3P-Focused-Working-Guide.txt" style={{...button,background:"#0f766e",textDecoration:"none",display:"inline-block"}}>Download 3P working guide</a><button onClick={downloadContext} style={{...button,background:"#fff",border:"1px solid #cbd5e1",color:"#201060"}}>Download Rob business context</button>
    </div>
    <div id="verify" style={{background:"#eef2ff",border:"1px solid #c7d2fe",padding:18,borderRadius:12,marginTop:22,scrollMarginTop:90}}><h3 style={{fontSize:19,margin:"0 0 8px"}}>Required first Claude message: Verify setup</h3><p style={{fontSize:14,lineHeight:1.55,color:"#334155"}}>After uploading both files, open your first chat inside the Claude project. Copy this verification prompt and send it. Claude must report READY and demonstrate that it read the actual 3P guide and Rob's context. Only then check item 4 above.</p><div style={{display:"flex",gap:10,flexWrap:"wrap"}}><button onClick={()=>copy(verificationPrompt,"verify")} style={button}>{copied==="verify"?"Copied ✓":"Copy prompt"}</button><button onClick={()=>setShowVerification(v=>!v)} aria-expanded={showVerification} aria-controls="verification-prompt-details" style={{...button,background:"#fff",border:"1px solid #c7d2fe",color:"#201060"}}>{showVerification?"Hide prompt details":"Show prompt details"}</button></div>{showVerification&&<pre id="verification-prompt-details" style={{whiteSpace:"pre-wrap",overflowWrap:"anywhere",marginTop:14,padding:15,background:"#fff",borderRadius:8,maxHeight:320,overflowY:"auto",fontSize:12,lineHeight:1.65}}>{verificationPrompt}</pre>}</div>
    {showInstructions&&<pre style={{whiteSpace:"pre-wrap",overflowWrap:"anywhere",background:"#f8fafc",border:"1px solid #e5e7eb",borderRadius:10,padding:18,maxHeight:360,overflowY:"auto",fontSize:12,lineHeight:1.65}}>{baseInstructions}</pre>}
    <p style={{fontSize:12,color:"#64748b",lineHeight:1.6,marginBottom:0}}>If Claude calls these sections something slightly different, look inside the project settings for Instructions and Knowledge. The 3P guide and Rob business context are two separate downloadable text files, not a ZIP. Upload BOTH files to Project Knowledge. These are starting facts to verify, not a completed business assessment.</p>
   </section>
   <h2 id="choices" style={{fontSize:22,margin:"24px 0 14px",scrollMarginTop:90}}>Choose which of your two problems to solve</h2>
   <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(285px,1fr))",gap:16}}>
    {cards.map(c=><button key={c.key} onClick={()=>{setSelected(c.key as "work"|"growth");document.getElementById("start-prompt")?.scrollIntoView({block:"start",behavior:"smooth"});}} style={{textAlign:"left",padding:23,borderRadius:16,background:"#fff",border:selected===c.key?"2px solid #4338ca":"2px solid #e5e7eb",boxShadow:selected===c.key?"0 5px 22px rgba(67,56,202,.08)":"none",cursor:"pointer",color:"#111827"}}>
     <span style={{fontSize:12,color:"#4338ca",fontWeight:800}}>{c.number} · {c.tag}</span>
     <h3 style={{fontSize:22,letterSpacing:"-.02em",lineHeight:1.25,margin:"12px 0"}}>{c.title}</h3>
     <p style={{fontSize:14,color:"#475569",lineHeight:1.6}}>{c.desc}</p>
     <p style={{fontSize:13,fontWeight:750,lineHeight:1.6,marginBottom:0}}>{c.result}</p>
    </button>)}
   </div>
   <section id="start-prompt" style={{marginTop:25,borderRadius:16,background:"#fff",border:"1px solid #e3e8f1",overflow:"hidden",scrollMarginTop:90}}>
    <div style={{padding:"22px 23px",borderBottom:"1px solid #e3e8f1",display:"flex",justifyContent:"space-between",gap:12,alignItems:"center",flexWrap:"wrap"}}>
     <div><p style={{fontSize:12,fontWeight:800,color:"#4338ca",margin:"0 0 6px"}}>START YOUR FIRST WORKING SESSION</p><h2 style={{fontSize:23,margin:0}}>{item.title}</h2></div>
     <div style={{display:"flex",gap:9,flexWrap:"wrap"}}><button onClick={()=>copy(item.prompt,item.key)} style={button}>{copied===item.key?"Copied ✓":"Copy prompt"}</button><button onClick={()=>setShowSessionPrompt(v=>!v)} aria-expanded={showSessionPrompt} aria-controls="session-prompt-details" style={{...button,background:"#fff",border:"1px solid #cbd5e1",color:"#201060"}}>{showSessionPrompt?"Hide prompt details":"Show prompt details"}</button></div>
    </div>
    <div style={{padding:"18px 23px"}}><p style={{background:"#eef2ff",color:"#3730a3",padding:12,borderRadius:9,fontSize:13,lineHeight:1.55}}>Before starting this session, complete Claude setup and get a READY verification. You can always view and copy the prompt here; the checklist is just a reminder and does not block navigation.</p>
     <p style={{fontSize:14,lineHeight:1.6,color:"#475569",marginTop:0}}>After setting up your project, create a new chat inside it. Paste this exact prompt and answer Claude's questions. It should help you produce something usable today, not another general assessment.</p>
     {showSessionPrompt&&<pre id="session-prompt-details" style={{fontFamily:"ui-monospace,Consolas,monospace",background:"#f8fafc",padding:18,borderRadius:10,whiteSpace:"pre-wrap",overflowWrap:"anywhere",fontSize:12,lineHeight:1.68,maxHeight:450,overflowY:"auto",border:"1px solid #e5e7eb"}}>{item.prompt}</pre>}
     <p style={{fontSize:14,color:"#475569",lineHeight:1.6}}>Want to work on the other problem next? Select its card above and open a <strong>separate chat in the same Claude project</strong>. Both chats can use the same 3P instructions and business context.</p>
    </div>
   </section>
   <section id="review" style={{background:"#201060",color:"#fff",padding:25,borderRadius:16,marginTop:25,scrollMarginTop:90}}>
    <h2 style={{fontSize:23,margin:"0 0 12px"}}>What Brent wants to see</h2>
    <p style={{color:"#ebe9ff",lineHeight:1.65,margin:"0 0 10px"}}>From the workload session: your real task list, a workable next-seven-days schedule and agreed rules for managing interruptions. From corporate development: an initial customer profile based on real examples, a credible offer, your first five target organizations and the outreach actions you'll take.</p>
    <p style={{color:"#ebe9ff",lineHeight:1.65,margin:0}}>Do the work, record what happens and share the outputs before your scheduled 30-minute review. We are not starting a whole-company assessment or asking you to abandon the other work that pays the bills.</p>
   </section>
   <footer style={{fontSize:12,color:"#64748b",lineHeight:1.6,marginTop:22}}>AlignRISE™ by 3P Solutions. Private client onboarding. Your work and conversations stay in your own Claude account; this page does not read or store them.</footer>
  </div>
 </main>;
}
