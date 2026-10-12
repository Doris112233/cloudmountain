import React, { useEffect, useRef, useState } from "react";
import { Link, history, useIntl, useParams } from "@umijs/max";
import data from "../../../data/archive";
import "./index.less";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PauseOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { ArchiveAudioController } from "./audioController";
import {
  archiveAudioUrls,
  archiveBasePath,
  archivePath,
  findArchiveIndexBySlug,
} from "./utils";
import ProgressiveImage from "../../../components/ProgressiveImage";

const pad = (value: number) => String(value).padStart(2, "0");

// The weight/length messages are shared with inline copy and end in a colon.
const asLabel = (value: string) => value.replace(/[:：]\s*$/, "").trim();

// One gibbon's dossier, at its own URL so QR codes can open it directly.
export default () => {
  const { species: slug } = useParams<{ species?: string }>();
  const intl = useIntl();
  const slugIndex = findArchiveIndexBySlug(slug);
  const selected = Math.max(slugIndex, 0);
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

  // Unknown species fall back to the overview.
  useEffect(() => {
    if (slugIndex < 0) history.replace(archiveBasePath);
  }, [slugIndex]);

  // Each dossier opens with its song; browsers may block this until the
  // visitor has interacted with the page, in which case the button waits.
  useEffect(() => {
    setPhotoIndex(0);
    void audioController.current?.play(selected);
  }, [selected]);

  const total = data.length;
  const species = data[selected];
  const speciesName = (index: number) =>
    intl.formatMessage({ id: data[index].name });
  const currentName = speciesName(selected);
  const siteName = intl.formatMessage({ id: "menu.title" });
  const photo = species.images[photoIndex] ?? species.images[0];

  useEffect(() => {
    const previous = document.title;
    document.title = `${currentName} · ${siteName}`;
    return () => {
      document.title = previous;
    };
  }, [currentName, siteName]);

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
            <Link to={archiveBasePath} className="archive-species-all">
              <ArrowLeftOutlined aria-hidden="true" />
              {intl.formatMessage({ id: "menu.protect.archive.all" })}
            </Link>
            <ul className="archive-species-list">
              {data.map((item, index) => {
                const active = index === selected;
                return (
                  <li key={item.key}>
                    <Link
                      to={archivePath(index)}
                      aria-current={active ? "page" : undefined}
                      className={`archive-species-tab ${active ? "is-active" : ""}`}
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
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <article
            key={selected}
            aria-labelledby="archive-species-name"
            className="archive-species archive-content-transition"
          >
            <header className="archive-species__intro">
              <p className="archive-species__counter">
                <span>{pad(selected + 1)}</span> / {pad(total)}
              </p>
              <h2 id="archive-species-name" className="archive-species__name">
                {currentName}
              </h2>
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
            </header>

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
                  alt={currentName}
                  wrapperClassName="archive-photo__media"
                  objectFit="contain"
                  priority
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

            <div className="archive-species__details">
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
                <Link
                  to={archivePath((selected - 1 + total) % total)}
                  className="archive-pager-button"
                >
                  <ArrowLeftOutlined aria-hidden="true" />
                  <span>
                    <small>
                      {intl.formatMessage({ id: "protect.archive.prev" })}
                    </small>
                    {speciesName((selected - 1 + total) % total)}
                  </span>
                </Link>
                <Link
                  to={archivePath((selected + 1) % total)}
                  className="archive-pager-button archive-pager-button--next"
                >
                  <span>
                    <small>
                      {intl.formatMessage({ id: "protect.archive.next" })}
                    </small>
                    {speciesName((selected + 1) % total)}
                  </span>
                  <ArrowRightOutlined aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
