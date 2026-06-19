import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, Droplets, Recycle, Sparkles, Shield, Gauge, Zap, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";
import heroImg from "../assets/hero.png.asset.json";
import chemImg from "../assets/chemical.png.asset.json";
import mercuryImg from "../assets/mercury.png.asset.json";
import wasteImg from "../assets/waste.png.asset.json";
import labImg from "../assets/lab.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Еколаб2018 — Определяме неизвестното" },
      { name: "description", content: "Прецизен химичен анализ чрез инфрачервена спектрофотометрия и детекция на живак. Идентифицираме неизвестни вещества с научна точност." },
      { property: "og:title", content: "Еколаб2018 — Определяме неизвестното" },
      { property: "og:description", content: "Прецизен химичен анализ чрез инфрачервена спектрофотометрия и детекция на живак." },
      { property: "og:image", content: heroImg.url },
    ],
  }),
  component: Index,
});

const stats = [
  { tag: "IR", label: "Спектрофотометрия" },
  { tag: "<3мин", label: "Анализ на живак" },
  { tag: "Hg", label: "Въздух & вода" },
  { tag: "pH/Cl/S", label: "Анализ на отпадъци" },
];

const services = [
  {
    icon: FlaskConical,
    title: "Химичен анализ",
    img: chemImg.url,
    desc: "Определяне на вид и съдържание на химични вещества чрез инфрачервен спектрофотометър. Идентификация на неизвестни, изоставени и бракувани вещества.",
    tags: ["Производствени вещества", "Пестициди", "Хранителна промишленост"],
  },
  {
    icon: Droplets,
    title: "Анализ на живак",
    img: mercuryImg.url,
    desc: "Прецизно измерване на съдържанието на живак във въздух и вода. Цифрови резултати за по-малко от 3 минути чрез специализиран детектор.",
    tags: ["Въздух", "Вода", "< 3 минути"],
  },
  {
    icon: Recycle,
    title: "Анализ на отпадъци",
    img: wasteImg.url,
    desc: "Охарактеризиране на отпадъци за последващо депониране или изгаряне. Анализи за тежки метали, pH, сухо вещество, хлор и сяра.",
    tags: ["Тежки метали", "pH", "Хлор & Сяра"],
  },
];

const techFeatures = [
  { icon: Sparkles, title: "Идентификация", desc: "Определяне на вид и съдържание на неизвестни вещества с висока точност." },
  { icon: Shield, title: "Безопасност", desc: "Анализ на потенциално опасни вещества без обозначение за състав." },
  { icon: Gauge, title: "Прецизност", desc: "Инфрачервена спектрофотометрия за количествено и качествено определяне." },
  { icon: Zap, title: "Скорост", desc: "Цифрови резултати за анализ на живак в рамките на 3 минути." },
];

const milestones = [
  { n: "01", title: "Основаване", desc: "Еколаб2018 ООД е учредено с цел химичен анализ и идентификация на вещества." },
  { n: "02", title: "Лабораторно оборудване", desc: "Оборудване с инфрачервен спектрофотометър и детектор за живак." },
  { n: "03", title: "Лаборатория за отпадъци", desc: "Изграждане на лаборатория за анализ на тежки метали, pH, сухо вещество, хлор и сяра." },
  { n: "04", title: "Акредитация", desc: "Стартиране на процедура за акредитация на специализираната лаборатория." },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage: `radial-gradient(60% 50% at 80% 0%, oklch(0.94 0.08 155 / 0.6), transparent 60%), radial-gradient(50% 40% at 0% 30%, oklch(0.95 0.04 200 / 0.5), transparent 60%)`,
          }}
        />
        <div className="container-page py-20 md:py-28 text-center">
          <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Инфрачервена спектрофотометрия</span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            <span className="text-primary">Определяме</span>
            <br />
            Неизвестното.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Еколаб2018 — прецизен химичен анализ чрез инфрачервена спектрофотометрия
            и детекция на живак. Идентифицираме неизвестни вещества с научна точност.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">Заяви анализ <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/analyses" className="btn-outline">Лабораторни анализи</Link>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card-soft text-left">
                <div className="text-2xl font-bold text-primary">{s.tag}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page mt-12 md:mt-20">
        <div className="text-center">
          <span className="eyebrow">Услуги</span>
          <h2 className="mt-5 text-3xl font-bold md:text-5xl">Къде може да сме полезни?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Големите възможности на нашия апарат могат да бъдат полезни в широк
            спектър от химични анализи.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{t}</span>
                  ))}
                </div>
                <Link to="/analyses" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Научи повече <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TECH */}
      <section className="container-page mt-20 md:mt-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="eyebrow">Технология</span>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">Инфрачервен спектрофотометър</h2>
            <p className="mt-4 text-muted-foreground">
              Дружеството е оборудвано с инфрачервен спектрофотометър, който дава
              състава и количеството на химичните вещества и смеси. Апаратът осигурява
              бърз и прецизен анализ.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {techFeatures.map((f) => (
                <div key={f.title}>
                  <div className="flex items-center gap-2">
                    <f.icon className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">{f.title}</h4>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
              <img src={labImg.url} alt="Инфрачервен спектрофотометър в модерна лаборатория" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-md md:block">
              <div className="text-2xl font-bold text-primary">Hg</div>
              <div className="text-xs text-muted-foreground">Детекция на живак</div>
              <div className="mt-2 text-xs font-medium">Въздух & Вода</div>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="container-page mt-20 md:mt-28">
        <div className="text-center">
          <span className="eyebrow">Развитие</span>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">Път към акредитация</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Изграждаме лаборатория с най-високи стандарти за прецизен химичен анализ.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {milestones.map((m) => (
            <div key={m.n} className="card-soft">
              <div className="text-xs font-semibold tracking-widest text-primary">{m.n}</div>
              <h4 className="mt-3 font-semibold">{m.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/about" className="btn-outline">Научете повече за нас <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page mt-20 md:mt-28">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(40% 50% at 80% 20%, white, transparent 60%), radial-gradient(40% 50% at 10% 80%, white, transparent 60%)" }} />
          <h2 className="relative text-3xl font-bold md:text-5xl">
            Нуждаете се от <span className="opacity-80">химичен анализ?</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl opacity-90">
            Свържете се с нас за консултация и заявяване на лабораторен анализ. Нашият
            екип е готов да ви помогне с идентификацията на всякакви химични вещества и смеси.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:opacity-90">
              <CheckCircle2 className="h-4 w-4" /> Свържете се с нас
            </Link>
            <a href="tel:+359894736769" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Обадете се
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
