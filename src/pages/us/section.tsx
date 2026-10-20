import { useEffect } from "react";
import { history, useParams } from "@umijs/max";
import AboutHub from "./AboutHub";
import { aboutOverviewPath, findAboutSection } from "./sections";

// One About section at its own URL, e.g. /us/council.
export default () => {
  const { section } = useParams<{ section?: string }>();
  const known = Boolean(findAboutSection(section));

  useEffect(() => {
    if (!known) history.replace(aboutOverviewPath);
  }, [known]);

  return <AboutHub sectionKey={section ?? ""} />;
};
