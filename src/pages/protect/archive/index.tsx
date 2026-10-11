import React, { useEffect, useRef, useState } from "react";
import { useIntl, useLocation } from "@umijs/max";
import data from "../../../data/archive";
import dataArchaeo from "../../../data/archaeo";
import "./index.less";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PauseOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { ArchiveAudioController } from "./audioController";
import { archiveAudioUrls, normalizeArchiveId } from "./utils";
import ProgressiveImage from "../../../components/ProgressiveImage";

const pad = (value: number) => String(value).padStart(2, "0");

// The weight/length messages are shared with inline copy and end in a colon.
const asLabel = (value: string) => value.replace(/[:：]\s*$/, "").trim();

export default () => {
  const location = useLocation();
  const queryId = new URLSearchParams(location.search).get("id");
  const intl = useIntl();
  const [selected, setSelected] = useState<number>(
    normalizeArchiveId(queryId, data.length),
  );
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioController = useRef<ArchiveAudioController | null>(null);

  if (!audioController.current) {
    audioController.current = new ArchiveAudioController(
      archiveAudioUrls,
      (src) => new Audio(src),
      setIsPlaying,
    );
  }

  useEffect(() => () => audioController.current?.destroy(), []);

  const total = data.length;
  const species = data[selected];
  const speciesName = (index: number) =>
    intl.formatMessage({ id: data[index].name });
  const photo = species.images[photoIndex] ?? species.images[0];

  const selectSpecies = (index: number, focus = false) => {
    const next = (index + total) % total;
    audioController.current?.stop();
    setSelected(next);
    setPhotoIndex(0);
    if (focus) document.getElementById(`archive-tab-${next}`)?.focus();
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectSpecies(selected + 1, true);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectSpecies(selected - 1, true);
    }
  };

  const playAudio = () => {
    void audioController.current?.toggle(selected);
  };

  const facts = [
    {
      key: "iucn",
      label: "protect.archive.iucn",
      value: intl.formatMessage({ id: species.IUCN }),
      wide: true,
    },
    {
      key: "status",
      label: "protect.archive.status",
      value: intl.formatMessage({ id: species.chineseLevel }),
    },
    {
      key: "number",
      label: "protect.archive.number",
      value: intl.formatMessage({ id: species.amount }),
    },
    {
      key: "weight",
      label: "protect.archive.weight",
      value: `${species.body.weight} kg`,
    },
    {
      key: "length",
      label: "protect.archive.length",
      value: `${species.body.height} cm`,
    },
    {
      key: "range",
      label: "protect.archive.range",
      value: intl.formatMessage({ id: species.distribution }),
      wide: true,
    },
  ];

  return (
    <div className="archive-page">
      <section className="section-archeology">
        <div className="section-archeology-container"></div>
        <div className="section-archeology-header">
          <h1>{intl.formatMessage({ id: "protect.inChina.title" })}</h1>
        </div>
        <div className="section-archeology-content">
          <div className="text-section">
            <p>{intl.formatMessage({ id: "protect.inChina.content.1" })}</p>
            <p>{intl.formatMessage({ id: "protect.inChina.content.2" })}</p>
            <div className="image-row">
              <ProgressiveImage
                src={dataArchaeo.archaeo1}
                alt={intl.formatMessage({ id: "protect.inChina.content.3" })}
              />
              <div className="side-text">
                <p>{intl.formatMessage({ id: "protect.inChina.content.4" })}</p>
              </div>
            </div>
            <p>{intl.formatMessage({ id: "protect.inChina.content.5" })}</p>
          </div>
          <div className="vertical-image">
            <ProgressiveImage src={dataArchaeo.archaeo2} alt="青铜长臂猿" />
          </div>
        </div>
      </section>

      <section
        className="section-archive"
        aria-labelledby="archive-section-title"
      >
        <div className="archive-section-header">
          <h2 id="archive-section-title">
            {intl.formatMessage({ id: "protect.archive.title" })}
          </h2>
        </div>

        <div className="archive-dossier">
          <nav
            className="archive-species-nav"
            aria-label={intl.formatMessage({ id: "protect.archive.navLabel" })}
          >
            <div
              role="tablist"
              aria-orientation="vertical"
              className="archive-species-list"
              onKeyDown={handleTabKeyDown}
            >
              {data.map((item, index) => {
                const active = index === selected;
                return (
                  <button
                    key={item.key}
                    type="button"
                    role="tab"
                    id={`archive-tab-${index}`}
                    aria-selected={active}
                    aria-controls="archive-species-panel"
                    tabIndex={active ? 0 : -1}
                    className={`archive-species-tab ${active ? "is-active" : ""}`}
                    onClick={() => selectSpecies(index)}
                  >
                    <span className="archive-species-tab__index">
                      {pad(index + 1)}
                    </span>
                    <span className="archive-species-tab__name">
                      {intl.formatMessage({ id: item.name })}
                    </span>
                    <span className="archive-species-tab__latin">
                      {item.latin}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          <article
            key={selected}
            id="archive-species-panel"
            role="tabpanel"
            aria-labelledby={`archive-tab-${selected}`}
            className="archive-species archive-content-transition"
          >
            <div className="archive-species__media">
              <figure className="archive-photo">
                <span
                  className="archive-photo__backdrop"
                  style={{ backgroundImage: `url("${photo}")` }}
                  aria-hidden="true"
                />
                <ProgressiveImage
                  key={photo}
                  src={photo}
                  alt={speciesName(selected)}
                  wrapperClassName="archive-photo__media"
                  objectFit="contain"
                />
              </figure>
              {species.images.length > 1 && (
                <div
                  className="archive-photo-thumbs"
                  role="group"
                  aria-label={intl.formatMessage({
                    id: "protect.archive.photos",
                  })}
                >
                  {species.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      className={`archive-photo-thumb ${
                        index === photoIndex ? "is-active" : ""
                      }`}
                      aria-pressed={index === photoIndex}
                      aria-label={`${intl.formatMessage({
                        id: "protect.archive.photos",
                      })} ${index + 1}`}
                      onClick={() => setPhotoIndex(index)}
                    >
                      <ProgressiveImage
                        src={image}
                        alt=""
                        objectFit="cover"
                        aspectRatio="1"
                        wrapperClassName="archive-photo-thumb__media"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="archive-species__body">
              <p className="archive-species__counter">
                <span>{pad(selected + 1)}</span> / {pad(total)}
              </p>
              <h2 className="archive-species__name">{speciesName(selected)}</h2>
              <p className="archive-species__latin">{species.latin}</p>
              <p className="archive-species__taxonomy">
                {intl.formatMessage({ id: species.classification.family })}
                <span aria-hidden="true"> · </span>
                {intl.formatMessage({ id: species.classification.genus })}
              </p>

              <button
                type="button"
                className={`archive-audio-button ${isPlaying ? "is-playing" : ""}`}
                aria-pressed={isPlaying}
                onClick={playAudio}
              >
                <span className="archive-audio-button__icon" aria-hidden="true">
                  {isPlaying ? <PauseOutlined /> : <SoundOutlined />}
                </span>
                <span className="archive-audio-button__label">
                  {intl.formatMessage({
                    id: isPlaying
                      ? "protect.archive.playing"
                      : "protect.archive.listen",
                  })}
                </span>
                <span className="archive-audio-button__bars" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </button>

              <dl className="archive-facts">
                {facts.map((fact) => (
                  <div
                    key={fact.key}
                    className={`archive-fact ${fact.wide ? "archive-fact--wide" : ""}`}
                  >
                    <dt>{asLabel(intl.formatMessage({ id: fact.label }))}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="archive-feature">
                <h3>{intl.formatMessage({ id: "protect.archive.feature" })}</h3>
                <p>{intl.formatMessage({ id: species.feature })}</p>
              </div>

              <div className="archive-species__pager">
                <button
                  type="button"
                  className="archive-pager-button"
                  onClick={() => selectSpecies(selected - 1)}
                >
                  <ArrowLeftOutlined aria-hidden="true" />
                  <span>
                    <small>
                      {intl.formatMessage({ id: "protect.archive.prev" })}
                    </small>
                    {speciesName((selected - 1 + total) % total)}
                  </span>
                </button>
                <button
                  type="button"
                  className="archive-pager-button archive-pager-button--next"
                  onClick={() => selectSpecies(selected + 1)}
                >
                  <span>
                    <small>
                      {intl.formatMessage({ id: "protect.archive.next" })}
                    </small>
                    {speciesName((selected + 1) % total)}
                  </span>
                  <ArrowRightOutlined aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
