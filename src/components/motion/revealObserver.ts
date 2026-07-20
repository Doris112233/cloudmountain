type RevealCallback = () => void;
type RevealRecord = { callback: RevealCallback; threshold: number };

const callbacks = new Map<Element, RevealRecord>();
const observers = new Map<number, IntersectionObserver>();

const getObserver = (threshold: number) => {
  if (!observers.has(threshold)) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const record = callbacks.get(entry.target);
          if (!record) return;
          record.callback();
          callbacks.delete(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold },
    );
    observers.set(threshold, observer);
  }
  return observers.get(threshold)!;
};

export const observeReveal = (
  element: Element,
  callback: RevealCallback,
  threshold = 0.12,
) => {
  callbacks.set(element, { callback, threshold });
  getObserver(threshold).observe(element);
  return () => {
    const record = callbacks.get(element);
    callbacks.delete(element);
    if (record) observers.get(record.threshold)?.unobserve(element);
  };
};

export const resetRevealObservers = () => {
  observers.forEach((observer) => observer.disconnect());
  observers.clear();
  callbacks.clear();
};
