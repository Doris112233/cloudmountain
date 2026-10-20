import React, { useEffect } from "react";
import { Link, history, useIntl, useLocation } from "@umijs/max";
import data from "../../../data/archive";
import "./index.less";
import { archivePath, normalizeArchiveId } from "./utils";
import ProgressiveImage from "../../../components/ProgressiveImage";

const pad = (value: number) => String(value).padStart(2, "0");

// Overview of every gibbon; each card opens the species' own dossier.
export default () => {
  const location = useLocation();
  const intl = useIntl();
  const queryId = new URLSearchParams(location.search).get("id");
  const title = intl.formatMessage({ id: "protect.archive.title" });
  const siteName = intl.formatMessage({ id: "menu.title" });

  // Legacy ?id= links move to the species' own path.
  useEffect(() => {
    if (queryId) {
      history.replace(archivePath(normalizeArchiveId(queryId, data.length)));
    }
  }, [queryId]);

  useEffect(() => {
    const previous = document.title;
    document.title = `${title} · ${siteName}`;
    return () => {
      document.title = previous;
    };
  }, [title, siteName]);

  return (
    <div className="archive-page">
      <section
        className="section-archive"
        aria-labelledby="archive-section-title"
      >
        <div className="dossier-header">
          <h2 id="archive-section-title">{title}</h2>
        </div>

        <ul className="archive-overview">
          {data.map((item, index) => {
            const name = intl.formatMessage({ id: item.name });
            return (
              <li key={item.key}>
                <Link to={archivePath(index)} className="archive-card">
                  <span className="archive-card__photo">
                    <span
                      className="archive-card__backdrop"
                      style={{ backgroundImage: `url("${item.images[0]}")` }}
                      aria-hidden="true"
                    />
                    <ProgressiveImage
                      src={item.images[0]}
                      alt={name}
                      wrapperClassName="archive-card__media"
                      objectFit="contain"
                    />
                  </span>
                  <span className="archive-card__index">{pad(index + 1)}</span>
                  <span className="archive-card__name">{name}</span>
                  <span className="archive-card__latin">{item.latin}</span>
                  <span className="archive-card__iucn">
                    {intl.formatMessage({ id: item.IUCN })}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
