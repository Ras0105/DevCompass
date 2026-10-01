// [id, name, relevance, why, items]
var T=[
["found","Foundations","E","Every path below assumes these.",["Git and GitHub pull-request flow","HTML, CSS and JavaScript: DOM, async, modules","HTTP, REST, cookies, CORS","Terminal, Linux basics, SSH","Debugging and devtools","Reading docs and error messages"]],
["sql","Databases","E","The most reused skill across every backend.",["SQL joins, CTEs, window functions","Schema design, indexes, EXPLAIN","Transactions and migrations","PostgreSQL or MySQL in depth","MongoDB modeling and aggregation","Redis caching"]],
["prod","Production readiness","E","Turns a project into something a company can run.",["Docker and Compose","GitHub Actions CI/CD","Environment config and secrets","OWASP Top 10, CORS, rate limiting","Logging, Sentry, health checks","Deploy to a cloud or PaaS with TLS","Automated tests in the pipeline"]],
["ai","AI-era skills","E","AI tools are part of daily work; reviewing output matters most.",["Coding assistants and agents (Claude Code, Cursor, Copilot)","Review and test generated code","LLM APIs: streaming, tool use, structured output","RAG with embeddings and pgvector","Evals and guardrails"]],
["dsa","DSA and problem solving","H","Still the main filter in many interviews.",["Arrays, hashmaps, two pointers","Trees, graphs, BFS/DFS","Recursion and dynamic programming","Big-O analysis","Regular judge practice (LeetCode, Codeforces)"]],
["sys","System design","H","Needed for senior growth and many interviews.",["Monolith vs microservices","Queues and event-driven design","Caching, CDN, load balancing","Replicas and sharding","Idempotency, retries, consistency","Design docs"]],
["career","Career and portfolio","E","Gets you the interview.",["2-3 deployed projects with READMEs","Open source contributions","Internship or freelance work","Resume, LinkedIn, GitHub profile","Mock interviews"]],
["ui","UI craft, performance, accessibility","H","Teams expect polished, fast, accessible interfaces.",["Tailwind and component libraries (shadcn/ui, Radix)","Responsive design, tokens, dark mode","Core Web Vitals: LCP, CLS, INP","WCAG 2.2 and screen reader testing","Vitest, Testing Library, Playwright","Figma handoff"]],
["react","React + Vite (SPA)","E","Largest frontend ecosystem and job market.",["Hooks, components, composition","React Router and protected routes","TanStack Query for server state","Zustand or Redux Toolkit","React Hook Form with Zod","TypeScript with React","Suspense, error boundaries, lazy loading"]],
["next","Next.js","H","Standard for production React: SSR, SEO, full-stack routes.",["App Router, layouts, routing","SSR, SSG, ISR, caching","Server Components and Server Actions","Route handlers and middleware","Metadata, SEO, image optimization","Deploy on Vercel or self-host"]],
["vue","Vue 3 + Nuxt","S","Strong in agencies and parts of Asia and Europe.",["Composition API and reactivity","Pinia and Vue Router","Nuxt routing and SSR","Vitest and Vue Test Utils","TypeScript in Vue"]],
["ng","Angular","S","Common in enterprise and large organizations.",["Standalone components, dependency injection","RxJS and signals","Router, guards, reactive forms","NgRx or signal store","Angular CLI and testing"]],
["svelte","Svelte 5 + SvelteKit","S","Loved by developers, smaller job market.",["Runes and reactivity","SvelteKit routing and load functions","Forms and actions","Stores and context","Deployment adapters"]],
["astro","Astro","G","Fast content-heavy sites with little JavaScript.",["Islands architecture","Content collections and Markdown/MDX","Using React or Vue components inside Astro","SEO and image optimization","Deploy on Netlify, Vercel or Cloudflare"]],
["node","Node.js + Express / NestJS","E","One language across the stack, huge ecosystem.",["Event loop, streams, async patterns","Express or Fastify routing and middleware","NestJS modules and providers","Validation with Zod, layered structure","Auth middleware, rate limiting","Prisma, Drizzle or TypeORM","Jest or Vitest with Supertest"]],
["fastapi","FastAPI","H","Default for modern Python APIs and AI backends.",["Pydantic v2, routers, dependency injection","Async SQLAlchemy 2.0 and Alembic","JWT and OAuth2 auth, roles","Celery or ARQ with Redis","pytest with TestClient","Uvicorn/Gunicorn, Docker deploy"]],
["flask","Flask","S","Used in existing services, small APIs and ML serving; new projects lean FastAPI.",["App factory and blueprints","Flask-SQLAlchemy and Flask-Migrate","Flask-Login or JWT-Extended","Marshmallow or Pydantic validation","pytest and fixtures","Gunicorn and Docker deploy"]],
["django","Django","H","Batteries included; strong for products, admin tools and content apps.",["Models, ORM, migrations","Views, URLs, templates","Django REST Framework serializers and viewsets","Admin, auth, permissions","Celery, caching, Channels","Per-environment settings and deploy"]],
["java","Core Java","H","The base for Spring, Android and most enterprise backends.",["OOP, collections, generics","Streams, lambdas, records, modern Java","Concurrency: threads, executors, virtual threads","JVM memory model and garbage collection basics","Maven or Gradle","JUnit 5 testing","DSA practiced in Java"]],
["spring","Spring Boot","H","Dominant in enterprise, banking and large service companies.",["REST controllers and validation","Spring Data JPA, Hibernate, Flyway","Spring Security with JWT/OAuth2","Profiles, config, Actuator","JUnit, Mockito, Testcontainers","Docker image and deploy"]],
["spring_micro","Spring microservices","H","Large organizations split systems into services.",["Spring Cloud, API gateway","Messaging with Kafka or RabbitMQ","Resilience4j: retries, circuit breakers","WebClient or OpenFeign service calls","Micrometer and tracing","Kubernetes deployment"]],
["spring_r","Spring Boot + React","H","Common pairing in product and service companies.",["REST API with OpenAPI docs","React with TanStack Query","JWT or OAuth2 login flow","CORS and environment config","PostgreSQL with Flyway","Docker Compose and deploy"]],
["spring_ng","Spring Boot + Angular","H","Typical enterprise and banking stack.",["REST API and DTO design","Angular services, guards, reactive forms","Spring Security with JWT","Role-based access across UI and API","Integration tests and Cypress or Playwright","CI/CD build for both apps"]],
["kotlin","Kotlin (Ktor / Spring)","G","Modern JVM language, also the base for Android.",["Null safety, data classes, extension functions","Coroutines and Flow","Ktor or Spring Boot with Kotlin","Exposed or JPA","Testing with Kotest or JUnit"]],
["dotnet_r",".NET + React / Angular","H","Standard in Microsoft-centric companies.",["ASP.NET Core Web API with Swagger","React or Angular client","Identity and JWT","EF Core with SQL Server or PostgreSQL","Azure App Service and DevOps pipelines"]],
["nest","NestJS + PostgreSQL","H","Structured Node backend popular with larger TypeScript teams.",["Modules, controllers, providers","TypeORM or Prisma with Postgres","Guards, pipes, interceptors","Passport auth and JWT","OpenAPI, queues with BullMQ","Jest unit and e2e tests"]],
["mean","MEAN (MongoDB, Express, Angular, Node)","S","MERN with Angular, mostly in Angular-heavy shops.",["Express and MongoDB API","Angular front end with RxJS","JWT auth with guards","TypeScript across the stack","Deploy and CI"]],
["mevn","MEVN (MongoDB, Express, Vue, Node)","S","MERN with Vue, popular in small teams and agencies.",["Express and MongoDB API","Vue 3 with Pinia","Nuxt for SSR","JWT auth","Deploy and CI"]],
["rails","Ruby on Rails","S","Still used by many startups and established products.",["Ruby basics, Rails conventions","ActiveRecord and migrations","Hotwire: Turbo and Stimulus","Devise authentication","Sidekiq background jobs","RSpec tests and deploy"]],
["htmx","Django / Flask + HTMX","G","Server-rendered apps with little JavaScript.",["Templates, partials, HTMX attributes","Server-side forms and validation","Alpine.js for small interactions","Tailwind styling","Postgres, auth, deploy"]],
["go_r","Go + React","G","Lean services with a typed React client.",["Go REST API with Chi or Gin","PostgreSQL with sqlc","React with TanStack Query","JWT auth and CORS","Docker and deploy"]],
["android","Android (Kotlin + Compose)","S","Native Android development.",["Kotlin and coroutines","Jetpack Compose UI","ViewModel, Room, Retrofit","Dependency injection with Hilt","Play Store release"]],
["ios","iOS (Swift + SwiftUI)","S","Native iOS development.",["Swift fundamentals","SwiftUI layouts and state","Networking and Codable","Core Data or SwiftData","App Store release"]],
["devops","DevOps and cloud engineering","H","High demand for developers who own infrastructure.",["Linux administration and networking","Terraform or Pulumi","Kubernetes and Helm","AWS, GCP or Azure certifications path","CI/CD and GitOps","Prometheus, Grafana, alerting"]],
["aieng","AI application engineering","G","Building products on top of LLMs.",["Python or TypeScript with LLM APIs","RAG with vector databases","Tool use and agents, MCP","Evals and observability","Fine-tuning basics and model selection","Cost, latency, safety"]],
["dotnet","C# + ASP.NET Core","H","Strong in enterprise and Microsoft-centric companies.",["C# and LINQ","ASP.NET Core minimal APIs and controllers","Entity Framework Core","Identity and JWT auth","xUnit tests","Azure deployment"]],
["laravel","PHP + Laravel","S","Large base in agencies and startups.",["Routing, controllers, Blade","Eloquent ORM and migrations","Auth: Breeze or Sanctum","Queues and scheduling","Inertia with Vue or React","Pest or PHPUnit tests"]],
["go","Go","G","Popular for cloud services and high-throughput APIs.",["Syntax, goroutines, channels","net/http with Gin or Chi","Database access with sqlc or GORM","Testing and modules","Build a CLI and a small service"]],
["mern","MERN (MongoDB, Express, React, Node)","H","The most common bootcamp-to-job full-stack path.",["Express API and MongoDB with Mongoose","React front end with routing","JWT auth with refresh tokens","Zod validation and error middleware","TypeScript across the stack","File uploads, email, Socket.IO","Deploy: Vercel plus Render or Railway"]],
["pern","PERN (PostgreSQL, Express, React, Node)","H","MERN with a relational database, closer to what many companies run.",["Express API with PostgreSQL","Prisma or Drizzle with migrations","Joins, indexes, transactions","React front end with TanStack Query","JWT auth and role-based access","Connection pooling, Redis cache","Managed Postgres: Neon, Supabase, RDS"]],
["t3","Next.js full-stack (T3 style)","H","Typed end-to-end stack that is popular with startups.",["App Router with Server Actions","Prisma or Drizzle with Postgres","Auth.js or Clerk","tRPC or typed route handlers","Zod and Tailwind","Deploy: Vercel plus Neon or Supabase"]],
["fapi_r","FastAPI + React","H","Fits teams with Python backends and AI features.",["FastAPI REST API with OpenAPI docs","Typed client generated from OpenAPI","React with TanStack Query","JWT in cookies and CORS setup","Postgres with Alembic","Docker Compose for both services","Deploy front and back separately"]],
["dj_r","Django + React (DRF)","H","Common in product companies and consultancies.",["DRF API with auth and permissions","React SPA consuming the API","Session or JWT auth with CSRF handling","Celery for background work","Postgres and migrations","Docker Compose and deployment"]],
["fl_r","Flask + React","S","Seen in smaller teams and ML-backed apps.",["Flask API with blueprints","React front end and API client","Auth with Flask-JWT-Extended","SQLAlchemy and migrations","CORS and environment config","Deploy with Gunicorn and Nginx"]],
["pycore","Python for software developers","E","Scripting, automation, data and backend work all start here.",["Typing, dataclasses, decorators","asyncio, threading, multiprocessing","pytest and packaging with uv","CLI tools and automation scripts","Design patterns and clean code","Profiling and optimization"]],
["cpp","C / C++","S","Systems, embedded, games and competitive programming.",["Pointers, memory, RAII","STL containers and algorithms","Templates and modern C++","CMake and build systems","Concurrency basics","Debugging with gdb and sanitizers"]],
["rust","Rust","G","Growing in infrastructure and tooling, small hiring pool.",["Ownership and borrowing","Traits, enums, error handling","Axum or Actix web services","Async with Tokio","WebAssembly basics"]],
["mobile","Mobile apps","S","Useful when a team also ships an app.",["React Native with Expo or Flutter","Navigation and state","Calling APIs and offline storage","Push notifications","App store release basics"]],
["wp","WordPress + PHP","S","Powers a large share of sites, strong freelance demand.",["Block themes and child themes","Plugin development and hooks","WooCommerce","ACF and the WP REST API","Performance and security hardening"]],
["shopify","Shopify","S","Steady agency and freelance e-commerce work.",["Liquid theme development","Storefront and Admin APIs","Building Shopify apps","Hydrogen headless storefronts","Checkout extensions"]],
["cms","Headless CMS + Jamstack","G","Content sites with editor-friendly back ends.",["Sanity, Strapi or Contentful modeling","Static sites with Astro or Next.js","Forms, analytics, SEO","Image CDN and edge hosting","Netlify, Vercel or Cloudflare Pages"]]
];
// s = start here, p = stack paths, a = add-ons
var R=[
{id:"web",name:"Web developer",d:"Builds sites and web apps for clients and small teams: agencies, freelance, content and e-commerce.",s:"found",p:"wp shopify cms laravel mern mean mevn django flask htmx rails node",a:"ui sql prod ai career"},
{id:"fe",name:"Frontend developer",d:"Owns the interface: components, performance, accessibility and the browser.",s:"found ui",p:"react next vue ng svelte astro",a:"prod ai dsa career"},
{id:"sw",name:"Software developer",d:"Broader engineering role: languages, services, data structures, design and operations.",s:"found dsa sql",p:"pycore java spring spring_micro kotlin dotnet go cpp rust android ios mobile fastapi node aieng",a:"sys prod devops ai career"},
{id:"fs",name:"Full-stack developer",d:"Ships features end to end: UI, API, database and deployment. Pick one stack and go deep.",s:"found ui sql",p:"mern pern mean mevn t3 fapi_r dj_r fl_r spring_r spring_ng dotnet_r go_r htmx laravel rails",a:"prod sys ai dsa career"},
{id:"be",name:"Backend developer",d:"Builds APIs, data layers and background systems that the rest of the product depends on.",s:"found sql",p:"node nest fastapi flask django java spring spring_micro kotlin dotnet laravel rails go",a:"prod devops sys ai dsa career"}
];
var M={},KEY="dev-paths-v1",done={},cur=R[0].id,opened={};
T.forEach(function(t){M[t[0]]=t});
try{done=JSON.parse(localStorage.getItem(KEY)||"{}")||{}}catch(e){done={}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(done))}catch(e){}}
try{var h=location.hash.slice(1);if(R.some(function(r){return r.id===h}))cur=h}catch(e){}
var LB={E:"Essential",H:"High demand",G:"Growing",S:"Situational",N:"Niche"};
function role(){return R.filter(function(r){return r.id===cur})[0]}
function groups(r){return[["Start here","Foundations for this role",r.s.split(" ")],["Stack paths","Each is a separate path. Pick one to go deep, then add a second.",r.p.split(" ")],["Add-ons","Skills that apply to whichever path you choose",r.a.split(" ")]]}
function cnt(id){var d=0;M[id][4].forEach(function(_,i){if(done[id+"."+i])d++});return[d,M[id][4].length]}
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
function eachId(fn){groups(role()).forEach(function(g){g[2].forEach(fn)})}
function render(){
  var tabs=document.getElementById("tabs");tabs.innerHTML="";syncF();
  R.forEach(function(r){var b=el("button",null,r.name);b.setAttribute("role","tab");b.setAttribute("aria-selected",r.id===cur);
    b.onclick=function(){cur=r.id;try{history.replaceState(null,"","#"+cur)}catch(e){}render()};tabs.appendChild(b)});
  var r=role(),td=0,tt=0,v=document.getElementById("view");
  document.getElementById("intro").textContent=r.d;
  eachId(function(id){var c=cnt(id);td+=c[0];tt+=c[1]});
  document.getElementById("ptxt").textContent=td+" of "+tt+" done";
  document.getElementById("pbar").style.width=(tt?td/tt*100:0)+"%";
  v.innerHTML="";
  var shown=0,anyRel=Object.keys(relF).length>0;
  groups(r).forEach(function(g){
    if(secF!=="all"&&secF!==g[0])return;
    var list=g[2].filter(function(id){return !anyRel||relF[M[id][2]]});
    if(!list.length)return;
    shown+=list.length;
    v.appendChild(el("h2",null,g[0]));v.appendChild(el("p",null,g[1]));
    list.forEach(function(id){
      var t=M[id],c=cnt(id),d=el("details");
      if(opened[id])d.open=true;
      d.addEventListener("toggle",function(){opened[id]=d.open});
      var s=el("summary");s.appendChild(el("span","nm",t[1]));
      s.appendChild(el("span","chip "+t[2],LB[t[2]]));s.appendChild(el("span","cnt",c[0]+"/"+c[1]));
      d.appendChild(s);d.appendChild(el("p","why",t[3]));
      var box=el("div","items");
      t[4].forEach(function(txt,i){
        var k=id+"."+i,l=el("label"),cb=el("input");cb.type="checkbox";cb.checked=!!done[k];
        cb.onchange=function(){if(cb.checked)done[k]=1;else delete done[k];save();var y=window.scrollY;render();window.scrollTo(0,y)};
        l.appendChild(cb);l.appendChild(el("span",null,txt));box.appendChild(l)});
      d.appendChild(box);v.appendChild(d);
    });
  });
  if(!shown)v.appendChild(el("p","empty","No paths match these filters for this role. Reset the filters or choose another section."));
}
var relF={},secF="all";
function syncF(){
  document.querySelectorAll("[data-rel]").forEach(function(b){b.setAttribute("aria-pressed",!!relF[b.dataset.rel])});
  document.querySelectorAll("[data-sec]").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.sec===secF)});
}
document.querySelectorAll("[data-rel]").forEach(function(b){b.onclick=function(){var k=b.dataset.rel;if(relF[k])delete relF[k];else relF[k]=1;render()}});
document.querySelectorAll("[data-sec]").forEach(function(b){b.onclick=function(){secF=b.dataset.sec;render()}});
document.getElementById("rf").onclick=function(){relF={};secF="all";render()};
document.getElementById("exp").onclick=function(){eachId(function(i){opened[i]=true});render()};
document.getElementById("col").onclick=function(){opened={};render()};
document.getElementById("clr").onclick=function(){eachId(function(id){M[id][4].forEach(function(_,i){delete done[id+"."+i]})});save();render()};
render();
