import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Target, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";
import labImg from "../assets/lab.png";

const values = [
  { icon: Target, title: "Прецизност", desc: "Използваме съвременно оборудване за точно определяне на химичен състав." },
  { icon: ShieldCheck, title: "Безопасност", desc: "Помагаме за идентифицирането на потенциално опасни вещества." },
  { icon: Zap, title: "Ефективност", desc: "Бързи и надеждни резултати за нашите клиенти." },
];

export default function About() {
  useEffect(() => {
    document.title = "За нас — Еколаб2018 ООД";
  }, []);

  return (
    <SiteLayout>
      <section className="container-page py-16 md:py-24">
        <span className="eyebrow">За нас</span>
        <h1 className="mt-5 text-4xl font-bold md:text-6xl">
          <span className="text-primary">Еколаб2018</span> ООД
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
          Новооткрито дружество, посветено на прецизния химичен анализ и опазването
          на околната среда.
        </p>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="container-page grid gap-12 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Нашата мисия</div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Разкриваме истината
              <br />
              <span className="text-primary">зад химичния състав</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Еколаб2018 ООД е новооткрито дружество с цел анализирането и
                количествено и качествено определянето на химични вещества и смеси.
              </p>
              <p>
                Химическите вещества и смеси, находящи се в различни учреждения и
                предприятия, в определени случаи са с изтекъл срок на годност или
                без обозначение за наименованието и състава. Това затруднява тяхното
                безопасно използване.
              </p>
              <p>
                Дружеството е оборудвано с инфрачервен спектрофотометър, който
                определя състава и количеството на химичните вещества и смеси, както
                и с детектор за живак за установяване на неговото наличие във въздуха
                и водата.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <img src={labImg} alt="Модерна химическа лаборатория" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="text-center">
          <span className="eyebrow">Ценности</span>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">Какво ни ръководи</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="card-soft">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="container-page py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">В развитие</div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Лаборатория за анализ на отпадъци</h2>
            <p className="mt-5 text-muted-foreground">
              Фирмата оборудва лаборатория за анализ на отпадъци, като в най-скоро
              време ще започне процедура за акредитация. Специализираната лаборатория
              ще извършва анализи за тежки метали, pH, сухо вещество, наличие на хлор и сяра.
            </p>
            <p className="mt-4 text-muted-foreground">
              Анализът се извършва с цел охарактеризиране на отпадъците и подходящото
              им депониране или изгаряне.
            </p>
            <Link to="/contact" className="btn-primary mt-8">Свържете се с нас <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
