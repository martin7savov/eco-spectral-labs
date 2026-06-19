import { Link } from "@tanstack/react-router";
import { FlaskConical, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-soft text-primary">
              <FlaskConical className="h-5 w-5" />
            </span>
            <span className="text-base font-bold tracking-tight">
              ЕКОЛАБ<span className="text-primary">2018</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Прецизен химичен анализ чрез инфрачервена спектрофотометрия и
            детекция на живак. Идентифицираме неизвестни вещества с научна точност.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Навигация</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Начало</Link></li>
            <li><Link to="/analyses" className="hover:text-foreground">Лабораторни анализи</Link></li>
            <li><Link to="/about" className="hover:text-foreground">За нас</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Контакти</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Контакт</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> ecolab2018@ecopoint.bg</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +359 894 736 769</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> гр. София, ж.к. Младост 1А, бл. 520</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Еколаб2018 ООД. Всички права запазени.
        </div>
      </div>
    </footer>
  );
}
