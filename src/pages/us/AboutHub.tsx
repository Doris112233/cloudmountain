import { useEffect } from "react";
import { Link, useIntl } from "@umijs/max";
import "./about.less";
import { aboutSections, aboutSectionPath, findAboutSection } from "./sections";

const pad = (value: number) => String(value).padStart(2, "0");

interface AboutHubProps {
  sectionKey: string;
  // The overview page carries the introduction above the sections.
  showIntro?: boolean;
}

const AboutHub = ({ sectionKey, showIntro = false }: AboutHubProps) => {
  const intl = useIntl();
  const section = findAboutSection(sectionKey) ?? aboutSections[0];
  const index = aboutSections.indexOf(section);
  const pageTitle = intl.formatMessage({ id: "about.overview.title" });
  const sectionTitle = intl.formatMessage({
    id: section.titleId ?? section.labelId,
  });
  const siteName = intl.formatMessage({ id: "menu.title" });

  useEffect(() => {
    const previous = document.title;
    document.title = `${showIntro ? pageTitle : sectionTitle} · ${siteName}`;
    return () => {
      document.title = previous;
    };
  }, [showIntro, pageTitle, sectionTitle, siteName]);

  return (
    <div className="about-page">
      <section className="section-about" aria-labelledby="about-title">
        <div className="dossier-header">
          <h1 id="about-title">{pageTitle}</h1>
        </div>

        {showIntro && (
          <div className="about-intro">
            <p>{intl.formatMessage({ id: "about.overview.content.1" })}</p>
            <p>{intl.formatMessage({ id: "about.overview.content.2" })}</p>
            <p>{intl.formatMessage({ id: "about.overview.content.3" })}</p>
          </div>
        )}

        <div className="dossier">
          <nav className="dossier-nav" aria-label={pageTitle}>
            <ul className="dossier-list">
              {aboutSections.map((item, itemIndex) => {
                const active = item.key === section.key;
                return (
                  <li key={item.key}>
                    <Link
                      to={aboutSectionPath(item.key)}
                      aria-current={active ? "page" : undefined}
                      className={`dossier-tab ${active ? "is-active" : ""}`}
                    >
                      <span className="dossier-tab__index">
                        {pad(itemIndex + 1)}
                      </span>
                      <span className="dossier-tab__name">
                        {intl.formatMessage({ id: item.labelId })}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <article
            key={section.key}
            className="dossier-panel about-section"
            aria-labelledby="about-section-title"
          >
            <header className="about-section__head">
              <p className="dossier-counter">
                <span>{pad(index + 1)}</span> / {pad(aboutSections.length)}
              </p>
              <h2 id="about-section-title" className="about-section__title">
                {sectionTitle}
              </h2>
            </header>
            {section.render()}
          </article>
        </div>
      </section>
    </div>
  );
};

export default AboutHub;
