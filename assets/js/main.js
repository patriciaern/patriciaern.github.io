      const translations = {
        pt: {
          "nav.about": "Sobre",
          "nav.skills": "Competências",
          "nav.experience": "Experiência",
          "nav.contact": "Contato",
          "hero.tagline":
            "Mais de 5 anos transformando dados em decisões — modelagem, ETL, governança e BI em ambientes de crédito e serviços financeiros.",
          "about.label": "Sobre",
          "about.title": "Resumo profissional",
          "about.p1":
            "Profissional com mais de 5 anos de experiência em dados, atuando nos segmentos de tecnologia, crédito e serviços financeiros. Experiência em construção de soluções analíticas, modelagem de dados, processos ETL, governança de dados e suporte à tomada de decisão.",
          "about.p2":
            "Perfil analítico, com capacidade de traduzir necessidades de negócio em soluções baseadas em dados, garantindo qualidade e confiabilidade das informações. Objetivo profissional: atuar como Analytics Engineer.",
          "skills.label": "Competências",
          "skills.title": "Habilidades & Tecnologias",
          "skills.data": "Dados & ETL",
          "skills.bi": "Business Intelligence",
          "skills.auto": "Automação & Versionamento",
          "skills.found": "Fundamentos",
          "skills.f1": "Modelagem de dados",
          "skills.f2": "Governança de dados",
          "skills.f3": "Machine Learning",
          "skills.f4": "Pensamento crítico",
          "skills.lang": "Idiomas",
          "skills.langpt": "Português — nativo",
          "skills.langen": "Inglês — avançado (C1)",
          "exp.label": "Experiência",
          "exp.title": "Trajetória profissional",
          "exp.present": "atual",
          "exp.v1":
            "Análise, transformação e disponibilização de dados de carteira de crédito, risco e comportamento de cooperados em ambiente Databricks.",
          "exp.v2":
            "Desenvolvimento e otimização de fontes Python, consultas SQL e processos ETL integrando múltiplas fontes corporativas.",
          "exp.v3":
            "Criação e manutenção de dashboards no Power BI (DAX e Power Query) para KPIs e indicadores de risco.",
          "exp.v4":
            "Apoio na construção de modelos preditivos de risco de crédito com Machine Learning.",
          "exp.s1":
            "Consultas e análises em grandes volumes de dados com DBeaver, AWS Athena, Oracle SQL e PySpark.",
          "exp.s2":
            "Implementação de práticas de governança e gestão de dados no contexto de Recursos Humanos.",
          "exp.s3":
            "Estruturação de bases analíticas e análises de remuneração e carreira para mais de 2.400 colaboradores.",
          "exp.s4":
            "Automação de processos com Power Automate, reduzindo atividades manuais e erros operacionais.",
          "exp.t1": "Desenvolvimento de visões no Power BI para tomada de decisão estratégica.",
          "exp.t2":
            "Construção de um sistema completo de gestão de dados e projetos de melhoria, com dashboards e gamificação.",
          "exp.t3":
            "Liderança e mentoria de mais de 12 equipes em iniciativas Lean, com ganhos de produtividade superiores a 110%.",
          "hl.label": "Resultados",
          "hl.title": "Principais resultados",
          "hl.m1": "Colaboradores analisados em projetos de remuneração e carreira",
          "hl.m2": "Ganhos de produtividade em iniciativas de melhoria contínua",
          "hl.m3": "Equipes mentoradas em metodologia Lean",
          "pipe.label": "Pipeline",
          "pipe.title": "Como eu construo um pipeline de dados",
          "pipe.intro":
            "Um pipeline ETL sobre a inadimplência do crédito público (série 13667 do Banco Central) — clique em cada etapa para ver o código. O fluxo de dados anima da extração até a entrega.",
          "pipe.s0name": "Extract",
          "pipe.s0desc": "Lê a série 13667 (inadimplência) do data lake.",
          "pipe.s1name": "Transform",
          "pipe.s1desc": "Calcula média móvel de 3 meses e variação mensal.",
          "pipe.s2name": "Load",
          "pipe.s2desc": "Persiste a série curada e agenda a execução mensal.",
          "pipe.note":
            "Exemplo baseado na série 13667 (inadimplência do crédito público). Clique nas etapas para navegar.",
          "pipe.source": "Fonte: Banco Central do Brasil — Dados Abertos (SGS 13667)",
          "etl.title": "Antes e depois do ETL",
          "etl.intro":
            "Os mesmos registros antes e depois da transformação: tipos corrigidos, datas padronizadas e colunas derivadas calculadas.",
          "etl.before": "Antes · raw.bcb_sgs",
          "etl.after": "Depois · analytics.inadimplencia_credito_publico",
          "etl.dropped": "* registros com valor nulo são descartados na limpeza.",
          "etl.typed": "* valores tipados (numéricos) e colunas derivadas no Transform.",
          "dash.title": "Dashboard — inadimplência do crédito público",
          "dash.intro":
            "A série curada, pronta para análise — métricas-chave e tendência dos últimos 12 meses.",
          "dash.latest": "Inadimplência atual",
          "dash.avg": "Média móvel (3 meses)",
          "dash.change": "Variação no mês (p.p.)",
          "dash.chart": "Inadimplência (% a.a.) · 12 meses",
          "edu.label": "Formação",
          "edu.title": "Formação acadêmica",
          "edu.degree": "Bacharelado em Engenharia Mecânica",
          "contact.title": "Vamos conversar",
          "contact.text": "Aberta a oportunidades como Analytics Engineer. Conecte-se comigo.",
        },
        en: {
          "nav.about": "About",
          "nav.skills": "Skills",
          "nav.experience": "Experience",
          "nav.contact": "Contact",
          "hero.tagline":
            "5+ years turning data into decisions — modeling, ETL, governance, and BI across credit and financial services.",
          "about.label": "About",
          "about.title": "Professional summary",
          "about.p1":
            "Data professional with 5+ years of experience across technology, credit, and financial services. Skilled in building analytical solutions, data modeling, ETL processes, data governance, and decision support.",
          "about.p2":
            "Analytical profile with the ability to translate business needs into data-driven solutions, ensuring quality and reliability of information. Career objective: working as an Analytics Engineer.",
          "skills.label": "Skills",
          "skills.title": "Skills & Technologies",
          "skills.data": "Data & ETL",
          "skills.bi": "Business Intelligence",
          "skills.auto": "Automation & Versioning",
          "skills.found": "Foundations",
          "skills.f1": "Data modeling",
          "skills.f2": "Data governance",
          "skills.f3": "Machine Learning",
          "skills.f4": "Critical thinking",
          "skills.lang": "Languages",
          "skills.langpt": "Portuguese — native",
          "skills.langen": "English — advanced (C1)",
          "exp.label": "Experience",
          "exp.title": "Career timeline",
          "exp.present": "present",
          "exp.v1":
            "Analysis, transformation, and delivery of credit portfolio, risk, and member-behavior data in a Databricks environment.",
          "exp.v2":
            "Development and optimization of Python sources, SQL queries, and ETL processes integrating multiple corporate data sources.",
          "exp.v3":
            "Built and maintained Power BI dashboards (DAX and Power Query) for KPIs and risk indicators.",
          "exp.v4":
            "Supported the development of predictive credit-risk models using Machine Learning.",
          "exp.s1":
            "Queries and analysis on large data volumes using DBeaver, AWS Athena, Oracle SQL, and PySpark.",
          "exp.s2":
            "Implemented data governance and management practices within Human Resources.",
          "exp.s3":
            "Structured analytical bases and compensation/career analyses for 2,400+ employees.",
          "exp.s4":
            "Process automation with Power Automate, reducing manual work and operational errors.",
          "exp.t1": "Developed Power BI views to support strategic decision-making.",
          "exp.t2":
            "Built a complete data and project management system for improvement initiatives, with dashboards and gamification.",
          "exp.t3":
            "Led and mentored 12+ teams in Lean initiatives, achieving productivity gains above 110%.",
          "hl.label": "Results",
          "hl.title": "Key results",
          "hl.m1": "Employees analyzed in compensation and career projects",
          "hl.m2": "Productivity gains in continuous improvement initiatives",
          "hl.m3": "Teams mentored in Lean methodology",
          "pipe.label": "Pipeline",
          "pipe.title": "How I build a data pipeline",
          "pipe.intro":
            "An ETL pipeline over the public-credit default rate (Central Bank series 13667) — click each stage to see the code. Data flows from extraction through to delivery.",
          "pipe.s0name": "Extract",
          "pipe.s0desc": "Reads series 13667 (default rate) from the data lake.",
          "pipe.s1name": "Transform",
          "pipe.s1desc": "Computes a 3-month moving average and monthly change.",
          "pipe.s2name": "Load",
          "pipe.s2desc": "Persists the curated series and schedules the monthly run.",
          "pipe.note":
            "Example based on series 13667 (public-credit default rate). Click the stages to navigate.",
          "pipe.source": "Source: Central Bank of Brazil — Open Data (SGS 13667)",
          "etl.title": "Before and after ETL",
          "etl.intro":
            "The same records before and after transformation: types fixed, dates standardized, and derived columns computed.",
          "etl.before": "Before · raw.bcb_sgs",
          "etl.after": "After · analytics.inadimplencia_credito_publico",
          "etl.dropped": "* records with a null value are dropped during cleaning.",
          "etl.typed": "* typed (numeric) values and derived columns from Transform.",
          "dash.title": "Dashboard — public-credit default rate",
          "dash.intro":
            "The curated series, ready for analysis — key metrics and the trend over the last 12 months.",
          "dash.latest": "Current default rate",
          "dash.avg": "Moving average (3 months)",
          "dash.change": "Monthly change (p.p.)",
          "dash.chart": "Default rate (% p.a.) · 12 months",
          "edu.label": "Education",
          "edu.title": "Academic background",
          "edu.degree": "Bachelor's in Mechanical Engineering",
          "contact.title": "Let's talk",
          "contact.text": "Open to Analytics Engineer opportunities. Let's connect.",
        },
      };

      const docLang = { pt: "pt-BR", en: "en" };

      function setLanguage(lang) {
        const dict = translations[lang];
        document.querySelectorAll("[data-i18n]").forEach((el) => {
          const key = el.getAttribute("data-i18n");
          if (dict[key]) el.textContent = dict[key];
        });
        document.documentElement.lang = docLang[lang];
        document.querySelectorAll("[data-lang]").forEach((el) => {
          el.classList.toggle("active", el.getAttribute("data-lang") === lang);
        });
        localStorage.setItem("lang", lang);
      }

      const saved = localStorage.getItem("lang") || "pt";
      setLanguage(saved);

      document.getElementById("langToggle").addEventListener("click", () => {
        const current = localStorage.getItem("lang") || "pt";
        setLanguage(current === "pt" ? "en" : "pt");
      });

      document.getElementById("year").textContent = new Date().getFullYear();

      /* ---------- ETL Pipeline showcase ---------- */
      const snippets = [
        {
          fname: "extract.sql",
          lang: "sql",
          code: `-- Extract: serie 13667 - inadimplencia do credito publico (BCB)
SELECT
    data_referencia,
    valor AS inadimplencia_pct
FROM raw.bcb_sgs
WHERE serie_id = 13667
  AND data_referencia >= date_add('year', -3, current_date)
ORDER BY data_referencia;`,
        },
        {
          fname: "transform.py",
          lang: "python",
          code: `# Transform: media movel e variacao mensal da inadimplencia
from pyspark.sql import functions as F
from pyspark.sql import Window

ordem = Window.orderBy("data_referencia")

inadimplencia = (
    spark.table("raw.bcb_sgs")
    .filter(F.col("serie_id") == 13667)
    .withColumn("inadimplencia", F.col("valor").cast("double"))
    .withColumn(
        "media_movel_3m",
        F.avg("inadimplencia").over(ordem.rowsBetween(-2, 0)),
    )
    .withColumn(
        "variacao_pp",
        F.col("inadimplencia") - F.lag("inadimplencia").over(ordem),
    )
)`,
        },
        {
          fname: "load.py",
          lang: "python",
          code: `# Load: grava serie curada em Delta Lake
(inadimplencia.write
    .format("delta")
    .mode("overwrite")
    .saveAsTable("analytics.inadimplencia_credito_publico"))

# Orquestracao mensal com Airflow (BCB publica dados mensais)
with DAG("etl_inadimplencia_bcb",
         schedule="0 6 2 * *",
         catchup=False) as dag:
    extract >> transform >> load`,
        },
      ];

      function escapeHtml(s) {
        return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }

      function highlight(code, lang) {
        const isSql = lang === "sql";
        const comment = isSql ? "--[^\\n]*" : "#[^\\n]*";
        const keywords = isSql
          ? "SELECT|FROM|WHERE|AND|OR|AS|GROUP\\s+BY|ORDER\\s+BY|JOIN|ON|CASE|WHEN|THEN|ELSE|END"
          : "from|import|with|as|def|return|lambda|True|False|None|in|for|if";
        const builtins = isSql
          ? "current_date|SUM|AVG|COUNT|MIN|MAX"
          : "spark|DAG|datetime|F";
        const master = new RegExp(
          "(?<com>" + comment + ")" +
            "|(?<str>'[^']*'|\"[^\"]*\")" +
            "|(?<num>\\b\\d+(?:\\.\\d+)?\\b)" +
            "|(?<kw>\\b(?:" + keywords + ")\\b)" +
            "|(?<fn>\\b(?:" + builtins + ")\\b)",
          "g"
        );
        let out = "",
          last = 0,
          m;
        while ((m = master.exec(code))) {
          out += escapeHtml(code.slice(last, m.index));
          const g = m.groups;
          const cls = g.com
            ? "tok-com"
            : g.str
            ? "tok-str"
            : g.num
            ? "tok-num"
            : g.kw
            ? "tok-kw"
            : "tok-fn";
          out += '<span class="' + cls + '">' + escapeHtml(m[0]) + "</span>";
          last = m.index + m[0].length;
        }
        out += escapeHtml(code.slice(last));
        return out;
      }

      const stages = [...document.querySelectorAll("#pipeline .stage")];
      const codeBody = document.getElementById("codeBody");
      const codeFname = document.getElementById("codeFname");
      const codePre = codeBody.parentElement;
      let activeStage = 0;
      let cycleTimer = null;

      function setStage(i, fromUser) {
        activeStage = i;
        stages.forEach((s, idx) => s.classList.toggle("active", idx === i));
        codePre.classList.add("fade");
        setTimeout(() => {
          codeFname.textContent = snippets[i].fname;
          codeBody.innerHTML = highlight(snippets[i].code, snippets[i].lang);
          codePre.classList.remove("fade");
        }, 200);
        if (fromUser) restartCycle();
      }

      function nextStage() {
        setStage((activeStage + 1) % snippets.length);
      }

      function restartCycle() {
        clearInterval(cycleTimer);
        cycleTimer = setInterval(nextStage, 5000);
      }

      stages.forEach((s, idx) => s.addEventListener("click", () => setStage(idx, true)));

      codeBody.innerHTML = highlight(snippets[0].code, snippets[0].lang);
      restartCycle();

      /* ---------- Before/After data + Dashboard ---------- */
      // Single source of truth: curated monthly series (SGS 13667, example).
      const series = [
        { date: "2025-05-01", v: 1.02 },
        { date: "2025-06-01", v: 1.08 },
        { date: "2025-07-01", v: 1.15 },
        { date: "2025-08-01", v: 1.21 },
        { date: "2025-09-01", v: 1.18 },
        { date: "2025-10-01", v: 1.25 },
        { date: "2025-11-01", v: 1.31 },
        { date: "2025-12-01", v: 1.27 },
        { date: "2026-01-01", v: 1.34 },
        { date: "2026-02-01", v: 1.42 },
        { date: "2026-03-01", v: 1.38 },
        { date: "2026-04-01", v: 1.45 },
      ];

      // Derive the curated columns the Transform step produces.
      const curated = series.map((d, i, a) => {
        const win = a.slice(Math.max(0, i - 2), i + 1).map((x) => x.v);
        const mm3 = win.reduce((s, x) => s + x, 0) / win.length;
        const varpp = i === 0 ? null : d.v - a[i - 1].v;
        return { ...d, mm3, varpp };
      });

      const comma = (n) => n.toFixed(2).replace(".", ",");
      const dot = (n) => n.toFixed(2);
      const brDate = (iso) => {
        const [y, m, d] = iso.split("-");
        return `${d}/${m}/${y}`;
      };
      const signed = (n) => (n >= 0 ? "+" : "−") + Math.abs(n).toFixed(2);
      const signedComma = (n) =>
        (n >= 0 ? "+" : "−") + Math.abs(n).toFixed(2).replace(".", ",");

      // --- Antes (raw) table: messy text, plus a null row that gets dropped ---
      const rawHead =
        "<thead><tr><th>data_referencia</th><th>valor</th></tr></thead>";
      const rawRows = [
        '<tr class="row-null"><td>01/04/2025</td><td class="v-null">null</td></tr>',
        ...curated
          .slice(0, 4)
          .map(
            (d) =>
              `<tr><td>${brDate(d.date)}</td><td class="v-text">"${comma(
                d.v
              )}"</td></tr>`
          ),
        '<tr class="row-more"><td colspan="2">⋮</td></tr>',
      ].join("");
      document.getElementById("rawTable").innerHTML = rawHead + "<tbody>" + rawRows + "</tbody>";

      // --- Depois (curated) table: typed values + derived columns ---
      const cleanHead =
        "<thead><tr><th>data_referencia</th><th>inadimplencia</th>" +
        "<th>media_movel_3m</th><th>variacao_pp</th></tr></thead>";
      const cleanRows = [
        ...curated.slice(0, 4).map((d) => {
          const varCell =
            d.varpp === null
              ? '<td class="v-num">—</td>'
              : `<td class="${d.varpp >= 0 ? "v-pos" : "v-neg"}">${signed(
                  d.varpp
                )}</td>`;
          return `<tr><td>${d.date}</td><td class="v-num">${dot(
            d.v
          )}</td><td class="v-num">${dot(d.mm3)}</td>${varCell}</tr>`;
        }),
        '<tr class="row-more"><td colspan="4">⋮</td></tr>',
      ].join("");
      document.getElementById("cleanTable").innerHTML =
        cleanHead + "<tbody>" + cleanRows + "</tbody>";

      // --- KPI cards ---
      const last = curated[curated.length - 1];
      document.getElementById("kpiLatest").textContent = comma(last.v) + "%";
      document.getElementById("kpiAvg").textContent = comma(last.mm3) + "%";
      const changeEl = document.getElementById("kpiChange");
      changeEl.textContent = signedComma(last.varpp);
      changeEl.classList.add(last.varpp >= 0 ? "up" : "down");

      // --- Line chart (SVG) ---
      (function renderChart() {
        const W = 720,
          H = 240,
          pad = { l: 42, r: 16, t: 16, b: 28 };
        const vals = curated.map((d) => d.v);
        const lo = Math.min(...vals),
          hi = Math.max(...vals);
        const span = hi - lo || 1;
        const min = lo - span * 0.15,
          max = hi + span * 0.15;
        const innerW = W - pad.l - pad.r,
          innerH = H - pad.t - pad.b;
        const x = (i) => pad.l + (i / (curated.length - 1)) * innerW;
        const y = (v) => pad.t + (1 - (v - min) / (max - min)) * innerH;

        const pts = curated.map((d, i) => [x(i), y(d.v)]);
        const line = pts
          .map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1))
          .join(" ");
        const baseY = (H - pad.b).toFixed(1);
        const area =
          line +
          ` L ${x(curated.length - 1).toFixed(1)} ${baseY} L ${pad.l.toFixed(
            1
          )} ${baseY} Z`;

        // y gridlines at min / mid / max of the data range
        const yTicks = [min, (min + max) / 2, max];
        const grid = yTicks
          .map((v) => {
            const gy = y(v).toFixed(1);
            return (
              `<line class="grid" x1="${pad.l}" y1="${gy}" x2="${
                W - pad.r
              }" y2="${gy}"/>` +
              `<text class="label" x="${pad.l - 6}" y="${(
                +gy + 4
              ).toFixed(1)}" text-anchor="end">${comma(v)}</text>`
            );
          })
          .join("");

        // x labels: first and last month (MM/AA)
        const mmYY = (iso) => {
          const [yy, mm] = iso.split("-");
          return `${mm}/${yy.slice(2)}`;
        };
        const xLabels =
          `<text class="label" x="${pad.l}" y="${H - 8}" text-anchor="start">${mmYY(
            curated[0].date
          )}</text>` +
          `<text class="label" x="${W - pad.r}" y="${
            H - 8
          }" text-anchor="end">${mmYY(curated[curated.length - 1].date)}</text>`;

        const dots = pts
          .map(
            (p, i) =>
              `<circle class="${
                i === pts.length - 1 ? "dot-last" : "dot"
              }" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${
                i === pts.length - 1 ? 4 : 2.5
              }"/>`
          )
          .join("");

        document.getElementById("chart").innerHTML =
          `<defs><linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.25"/>` +
          `<stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/>` +
          `</linearGradient></defs>` +
          grid +
          `<path class="area" d="${area}"/>` +
          `<path class="line" pathLength="1" d="${line}"/>` +
          dots +
          xLabels;
      })();

      /* ---------- Scroll reveals + count-up ---------- */
      (function motion() {
        const ptBR = (n) => Math.round(n).toLocaleString("pt-BR");
        const counters = [...document.querySelectorAll("[data-target]")];
        const finalText = (el) => ptBR(+el.dataset.target) + (el.dataset.suffix || "");

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const revealEls = [...document.querySelectorAll(".reveal, .reveal-stagger")];

        if (reduced || !("IntersectionObserver" in window)) {
          revealEls.forEach((el) => el.classList.add("in"));
          counters.forEach((el) => (el.textContent = finalText(el)));
          return;
        }

        // Hide final values until the count-up runs, avoiding a flash.
        counters.forEach((el) => (el.textContent = "0" + (el.dataset.suffix || "")));

        const revealObs = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((e) => {
              if (!e.isIntersecting) return;
              const el = e.target;
              if (el.classList.contains("reveal-stagger")) {
                [...el.children].forEach((c, i) => {
                  c.style.transitionDelay = i * 80 + "ms";
                });
              }
              el.classList.add("in");
              obs.unobserve(el);
            });
          },
          { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
        );
        revealEls.forEach((el) => revealObs.observe(el));

        function countUp(el) {
          const target = +el.dataset.target;
          const suffix = el.dataset.suffix || "";
          const dur = 1200;
          const start = performance.now();
          (function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = ptBR(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          })(start);
        }

        const countObs = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((e) => {
              if (!e.isIntersecting) return;
              countUp(e.target);
              obs.unobserve(e.target);
            });
          },
          { threshold: 0.6 }
        );
        counters.forEach((el) => countObs.observe(el));
      })();
