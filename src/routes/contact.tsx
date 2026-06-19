import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";

export default function Contact() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Контакти — Еколаб2018";
  }, []);

  return (
    <SiteLayout>
      <section className="container-page py-16 md:py-24">
        <span className="eyebrow">Контакти</span>
        <h1 className="mt-5 text-4xl font-bold md:text-6xl">
          <span className="text-primary">Свържете се</span> с нас
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
          Заявете лабораторен анализ или ни изпратете запитване. Ще се свържем с
          вас в рамките на 24 часа.
        </p>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="container-page grid gap-10 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Информация за контакт</h2>
            <div className="mt-6 space-y-4">
              <a href="mailto:ecolab2018@ecopoint.bg" className="card-soft flex items-start gap-4 transition hover:border-primary/40">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><Mail className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Имейл</div>
                  <div className="mt-1 font-medium">ecolab2018@ecopoint.bg</div>
                </div>
              </a>
              <div className="card-soft flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><Phone className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Телефон — инж.-химик Недялко Иванов</div>
                  <div className="mt-1 flex flex-col gap-1">
                    <a href="tel:+359894736769" className="font-medium hover:text-primary">+359 894 736 769</a>
                    <a href="tel:+359878199811" className="font-medium hover:text-primary">+359 878 199 811</a>
                  </div>
                </div>
              </div>
              <div className="card-soft flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><MapPin className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Адрес</div>
                  <div className="mt-1 font-medium">гр. София, ж.к. Младост 1А, бл. 520</div>
                </div>
              </div>
              <div className="card-soft flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><Clock className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Работно време</div>
                  <div className="mt-1 font-medium">Пон — Пет: 09:00 — 18:00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-soft">
            <h2 className="text-2xl font-bold">Изпратете запитване</h2>
            {sent ? (
              <div className="mt-6 rounded-xl bg-primary-soft p-6 text-primary">
                Благодарим Ви! Получихме Вашето запитване и ще се свържем с Вас в рамките на 24 часа.
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Име" required>
                    <input required type="text" placeholder="Вашето име" className="input" />
                  </Field>
                  <Field label="Имейл" required>
                    <input required type="email" placeholder="email@example.com" className="input" />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Телефон">
                    <input type="tel" placeholder="+359 ..." className="input" />
                  </Field>
                  <Field label="Услуга">
                    <select className="input">
                      <option>Изберете услуга</option>
                      <option>Химичен анализ</option>
                      <option>Анализ на живак</option>
                      <option>Анализ на отпадъци</option>
                      <option>Друго</option>
                    </select>
                  </Field>
                </div>
                <Field label="Съобщение" required>
                  <textarea required rows={5} placeholder="Опишете вашите нужди..." className="input resize-none" />
                </Field>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="h-4 w-4" /> Изпрати запитване
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
