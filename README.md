# Retail Support Agent — Next.js + Gemini

A polished end-to-end customer-support agent demo based on the provided assignment brief. It verifies customers, looks up orders, simulates refunds, updates tickets, enforces refund approval limits in server-side code, logs tool calls, and includes a five-case evaluation suite.

## Stack
- Next.js App Router + TypeScript
- Google Gemini via the official `@google/genai` SDK
- Server-side mock tools (no real customer data or money movement)
- Vercel deployment-ready

## Run locally
1. Install Node.js 20+.
2. `npm install`
3. Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY`.
4. `npm run dev` and open http://localhost:3000

Without a Gemini key, the interface still loads, but chat requests will return a clear configuration error.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import it in Vercel as a Next.js project.
3. In **Project → Settings → Environment Variables**, add `GEMINI_API_KEY` and optionally `GEMINI_MODEL`.
4. Deploy. Never expose the API key through a `NEXT_PUBLIC_` variable.

## Safety design
- Refunds above ₹5,000 are blocked by server-side policy and require human approval.
- The model is not trusted to enforce policy: the server validates tool calls and arguments.
- Customer identity must be verified before order lookup/refund actions.
- Prompt-injection attempts are treated as untrusted user content.
- This is a demo with mock records. It does not issue real refunds or connect to a real ticketing system.

## Evaluation
Run `npm run dev`, then use the **Evaluation lab** button in the UI to execute the five scenarios. Or call `POST /api/evaluate`. The evaluation checks: verified order lookup, low-value mock refund, high-value refund approval gate, unclear-request clarification, and a prompt-injection/manipulation attempt.

## Project structure
- `src/app/page.tsx` — main dashboard and chat UI
- `src/app/api/chat/route.ts` — Gemini agent loop and server-side tool enforcement
- `src/app/api/evaluate/route.ts` — deterministic scenario evaluation
- `src/lib/support.ts` — mock customer/order/ticket tools and policy
