import "./loading.less";

const Loading = () => (
  <div className="route-loading" role="status" aria-live="polite">
    <span className="route-loading__sr-only">页面加载中</span>
    <div className="route-loading__progress" aria-hidden="true" />
    <div className="route-loading__skeleton" aria-hidden="true">
      <div className="route-loading__hero" />
      <div className="route-loading__line route-loading__line--title" />
      <div className="route-loading__line" />
      <div className="route-loading__line route-loading__line--short" />
    </div>
  </div>
);

export default Loading;
