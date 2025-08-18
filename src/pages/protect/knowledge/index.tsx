import React from 'react';
import './index.less';

// Figma asset URLs (replace with local assets if available)
import data from '../../../data/knowledge';
import { useIntl } from 'umi';

const KnowledgePage = () => {
  const intl = useIntl();
  return (
    <div className="article-container">
      <section className="knowledge-header">
        <div className="knowledge-header-title">
          <h1>{intl.formatMessage({ id: 'protect.knowledge.title' })}</h1>
        </div>
      </section>

      <section className="knowledge-qa">
        <div className="knowledge-qa-row">
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>
                {intl.formatMessage({ id: 'protect.knowledge.subtitle.1' })}
              </h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.1.1' })}
              </p>
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.1.2' })}
              </p>
            </div>
          </div>
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>
                {intl.formatMessage({ id: 'protect.knowledge.subtitle.2' })}
              </h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.2.1' })}
              </p>
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.2.2' })}
              </p>
            </div>
          </div>
        </div>
        <div
          className="knowledge-qa-img knowledge-qa-img-main"
          style={{ backgroundImage: `url('${data.k1}')` }}
        />
        <div className="knowledge-qa-row">
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>
                {intl.formatMessage({ id: 'protect.knowledge.subtitle.3' })}
              </h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.3.1' })}
              </p>
            </div>
          </div>
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>
                {intl.formatMessage({ id: 'protect.knowledge.subtitle.4' })}
              </h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.4.1' })}
              </p>
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.4.2' })}
              </p>
            </div>
          </div>
        </div>
        <div className="knowledge-qa-row">
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>
                {intl.formatMessage({ id: 'protect.knowledge.subtitle.5' })}
              </h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.5.1' })}
              </p>
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.5.2' })}
              </p>
            </div>
          </div>
          <div
            className="knowledge-qa-img knowledge-qa-img-map-cn"
            style={{ backgroundImage: `url('${data.k2}')` }}
          />
        </div>
        <div className="knowledge-qa-row">
          <div
            className="knowledge-qa-img knowledge-qa-img-map-world"
            style={{ backgroundImage: `url('${data.k3}')` }}
          />
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>
                {intl.formatMessage({ id: 'protect.knowledge.subtitle.6' })}
              </h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.6.1' })}
              </p>
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.6.2' })}
              </p>
            </div>
          </div>
        </div>
        <div className="knowledge-qa-row">
          <div
            className="knowledge-qa-img knowledge-qa-img-move"
            style={{ backgroundImage: `url('${data.k4}')` }}
          />
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>
                {intl.formatMessage({ id: 'protect.knowledge.subtitle.7' })}
              </h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.7.1' })}
              </p>
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.7.2' })}
              </p>
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.7.3' })}
              </p>
            </div>
          </div>
        </div>
        <div className="knowledge-qa-row">
          <div
            className="knowledge-qa-img knowledge-qa-img-call"
            style={{ backgroundImage: `url('${data.k5}')` }}
          />
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>
                {intl.formatMessage({ id: 'protect.knowledge.subtitle.8' })}
              </h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.8.1' })}
              </p>
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.8.2' })}
              </p>
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.8.3' })}
              </p>
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.8.4' })}
              </p>
              <p>
                {intl.formatMessage({ id: 'protect.knowledge.content.8.5' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="knowledge-threats-protect">
        <div className="knowledge-threats-card">
          <div className="knowledge-threats-title">
            <h2>
              {intl.formatMessage({ id: 'protect.knowledge.threat.title' })}
            </h2>
          </div>
          <div className="knowledge-threats-content">
            <p>
              1.{' '}
              {intl.formatMessage({ id: 'protect.knowledge.threat.content.1' })}
            </p>
            <p>
              2.{' '}
              {intl.formatMessage({ id: 'protect.knowledge.threat.content.2' })}
            </p>
            <p>
              3.{' '}
              {intl.formatMessage({ id: 'protect.knowledge.threat.content.3' })}
            </p>
            <p>
              4.{' '}
              {intl.formatMessage({ id: 'protect.knowledge.threat.content.4' })}
            </p>
            <p>
              5.{' '}
              {intl.formatMessage({ id: 'protect.knowledge.threat.content.5' })}
            </p>
            <p>
              6.{' '}
              {intl.formatMessage({ id: 'protect.knowledge.threat.content.6' })}
            </p>
          </div>
        </div>
        <div className="knowledge-protect-card">
          <div className="knowledge-protect-title">
            <h2>{intl.formatMessage({ id: 'protect.knowledge.why.title' })}</h2>
          </div>
          <div className="knowledge-protect-content">
            <p>
              1. {intl.formatMessage({ id: 'protect.knowledge.why.content.1' })}
            </p>
            <p>
              2. {intl.formatMessage({ id: 'protect.knowledge.why.content.2' })}
            </p>
            <p>
              3. {intl.formatMessage({ id: 'protect.knowledge.why.content.3' })}
            </p>
            <p>
              4. {intl.formatMessage({ id: 'protect.knowledge.why.content.4' })}
            </p>
          </div>
        </div>
      </section>

      <section className="knowledge-cta">
        <div className="knowledge-cta-title">
          <h2>{intl.formatMessage({ id: 'protect.knowledge.cta.title' })}</h2>
        </div>
        <div className="knowledge-cta-content">
          <p>{intl.formatMessage({ id: 'protect.knowledge.cta.content.1' })}</p>
          <p>{intl.formatMessage({ id: 'protect.knowledge.cta.content.2' })}</p>
          <p>{intl.formatMessage({ id: 'protect.knowledge.cta.content.3' })}</p>
          <p>{intl.formatMessage({ id: 'protect.knowledge.cta.content.4' })}</p>
          <p>{intl.formatMessage({ id: 'protect.knowledge.cta.content.5' })}</p>
        </div>
      </section>
    </div>
  );
};

export default KnowledgePage;
