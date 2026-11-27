import { ArrowRight, BookOpen, MessagesSquare, UserRound, UsersRound } from "lucide-react";
import { ProgramJourneyLink } from "./program-journey-link";
import styles from "./service-path-cards.module.css";

const icons = { team: UsersRound, individual: UserRound, catalog: BookOpen, inquiry: MessagesSquare };

export type ServicePath = {
  icon: keyof typeof icons;
  title: string;
  description: string;
  href: string;
  detail?: string;
};

export function ServicePathCards({ paths }: { paths: ServicePath[] }) {
  return (
    <ul className={styles.cards}>
      {paths.map(({ icon, title, description, detail, href }) => {
        const Icon = icons[icon];
        return (
          <li key={icon}>
            <ProgramJourneyLink href={href} className={styles.card}>
              <span className={styles.icon}><Icon size={21} aria-hidden="true" /></span>
              <div className={styles.copy}>
                <h3>{title}</h3>
                <p>{description}</p>
                {detail && <p className={styles.detail}>{detail}</p>}
              </div>
              <ArrowRight className={styles.arrow} size={18} aria-hidden="true" />
            </ProgramJourneyLink>
          </li>
        );
      })}
    </ul>
  );
}
