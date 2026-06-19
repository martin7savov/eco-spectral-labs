import { createFileRoute, Link } from "@tanstack/react-router";
import { Factory, AlertTriangle, Leaf, Utensils, Wind, Droplet, Timer, Filter, ArrowRight } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";
import chemImg from "../assets/chemical.png.asset.json";
import mercuryImg from "../assets/mercury.png.asset.json";
import wasteImg from "../assets/waste.png.asset.json";

export const Route = createFileRoute("/analyses")({
  head: () => ({
    meta: [
      { title: "Лабораторни анализи — Еколаб2018" },
      { name: "description", content: "Пълен спектър от химични анализи — от идентификация на неизвестни вещества до прецизно измерване на живак и характеризиране на отпадъци." },
      { property: "og:title", content: "Лабораторни анализи — Еколаб2018" },
      { property: "og:description", content: "Химичен анализ, детекция на живак и охарактеризиране на отпадъци." },
      { property: "og:image", content: chemImg.url },
    ],
  }),
  component: Analyses,
});

const chemItems = [
  { icon: Factory, title: "Производствени вещества", desc: "Определяне на вид и съдържание на различни производствени химични вещества." },
  { icon: AlertTriangle, title: "Изоставени вещества", desc: "Идентификация на бракувани химични вещества с неизвестно съдържание, потенциално опасни за хората и околната среда." },
  { icon: Leaf, title: "Залежали пестициди", desc: "Установяване на залежали пестициди с неясен състав за последващо обезвреждане." },
  { icon: Utensils, title: "Хранително-вкусова промишленост", desc: "Определяне на влаганите типове суровини и получените готови продукти." },
];

const mercurySteps = [
  { icon: Wind, label: "Засмукване на въздух чрез прецизна помпа" },
  { icon: Filter, label: "Преминаване през специализиран детектор" },
  { icon: Timer, label: "Цифрови резултати за под 3 минути" },
  { icon: Droplet, label: "Анализ на вода чрез специален филтър" },
];

const wasteParams = [
  { name: "Тежки метали", unit: "mg/kg" },
  { name: "pH", unit: "единици" },
  { name: "Сухо вещество", unit: "%" },
  { name: "Хлор (Cl)", unit: "mg/kg" },
  { name: "Сяра (S)", unit: "mg/kg" },
];

function Analyses() {
  return (
    <SiteLayout>
      <section className="container-page py-16 md:py-24">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">
          ЕКОЛАБ<span className="text-foreground/60">2018</span>
        </div>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          <span className="text-primary">Лабораторни</span> анализи
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
          Пълен спектър от химични анализи — от идентификация на неизвестни вещества
          до прецизно измерване на живак и характеризиране на отпадъци.
        </p>
      </section>

      {/* 01 */}
      <section className="border-t border-border bg-muted/30">
        <div className="container-page grid gap-12 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">01 — Спектрофотометрия</div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Анализ на химични вещества и смеси</h2>
            <p className="mt-4 text-muted-foreground">
              Инфрачервеният спектрофотометър определя състава и количеството на
              химичните вещества и смеси с висока точност.
            </p>
            <div className="mt-8 grid gap-3">
              {chemItems.map((it) => (
                <div key={it.title} className="card-soft flex gap-4">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold">{it.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <img src={chemImg.url} alt="Химичен анализ в лаборатория" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* 02 */}
      <section className="container-page grid gap-12 py-20 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1 overflow-hidden rounded-3xl border border-border">
          <img src={mercuryImg.url} alt="Детекция на живак" className="h-full w-full object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <div className="flex items-center gap-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">02 — Детекция на живак</div>
            <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">&lt; 3 мин</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Анализи на въздух и вода за живак</h2>
          <p className="mt-4 text-muted-foreground">
            Все повече разискваните въпроси относно вредата на живака върху околната
            среда и здравето на човека предизвикват изискването за анализ на въздуха
            и водата за неговото наличие.
          </p>
          <ol className="mt-8 space-y-3">
            {mercurySteps.map((s, i) => (
              <li key={s.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <s.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{s.label}</span>
              </li>
            ))}
          </ol>
          <Link to="/contact" className="btn-primary mt-8">Заяви анализ за живак <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* 03 */}
      <section className="border-t border-border bg-muted/30">
        <div className="container-page py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">03 — Отпадъци</div>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">Анализ и охарактеризиране на отпадъци</h2>
              <p className="mt-4 text-muted-foreground">
                Специализираната лаборатория извършва анализи за целите на депониране
                или изгаряне на отпадъци.
              </p>
              <p className="mt-4 text-muted-foreground">
                Фирмата изгражда лаборатория за анализ на отпадъци, като в най-скоро
                време ще започне процедура за акредитация. Анализът се извършва с цел
                охарактеризиране на отпадъците и подходящото им депониране или изгаряне.
              </p>
              <Link to="/contact" className="btn-primary mt-8">Заяви анализ на отпадъци <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div>
              <div className="overflow-hidden rounded-3xl border border-border">
                <img src={wasteImg.url} alt="Лаборатория за анализ на отпадъци" className="h-full w-full object-cover" />
              </div>
              <div className="mt-6 rounded-2xl border border-border bg-card p-6">
                <h4 className="font-semibold">Измервани параметри</h4>
                <ul className="mt-4 divide-y divide-border">
                  {wasteParams.map((p) => (
                    <li key={p.name} className="flex items-center justify-between py-3 text-sm">
                      <span className="font-medium">{p.name}</span>
                      <span className="text-muted-foreground">{p.unit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
