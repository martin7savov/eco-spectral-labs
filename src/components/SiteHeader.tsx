import { Link, NavLink } from "react-router-dom";
import { FlaskConical, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Начало" },
  { to: "/analyses", label: "Лабораторни анализи" },
  { to: "/about", label: "За нас" },
  { to: "/contact", label: "Контакти" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-soft text-primary">
            <FlaskConical className="h-5 w-5" />
          </span>
          <span className="text-base font-bold tracking-tight">
            ЕКОЛАБ<span className="text-primary">2018</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "rounded-full px-4 py-2 text-sm font-semibold bg-primary-soft text-primary"
                  : "rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden md:inline-flex btn-primary">
            Заяви анализ
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Заяви анализ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
