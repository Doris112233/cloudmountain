import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { Tooltip } from "antd";
import { Link, useIntl } from "@umijs/max";
import "./anchor.less";

const BasicAnchor: React.FC = () => {
  const intl = useIntl();
  const gibbonRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!gibbonRef.current) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    anime({
      targets: gibbonRef.current,
      rotate: [0, 50],
      loop: true,
      direction: "alternate",
      duration: 2000,
      easing: "steps(4)",
    });

    return () => {
      anime.remove(gibbonRef.current);
    };
  }, []);

  const styles = {
    tree: {
      position: "absolute" as const,
      width: "8vh",
      marginLeft: "-3px",
      zIndex: 5,
    },
    gibbon: {
      position: "absolute" as const,
      width: "4vh",
      transformOrigin: "0% 0%",
      marginLeft: "17px",
      zIndex: 5,
    },
  };

  return (
    <Link to="/us/contact">
      <Tooltip
        placement="right"
        title={intl.formatMessage({ id: "footer.follow" })}
        color={"#89c24b"}
      >
        <div
          className="site-contact-anchor"
          style={{
            position: "fixed",
            bottom: "100px",
            left: 0,
            width: "7vh",
            zIndex: 900,
          }}
        >
          <img
            style={styles.tree}
            src={
              "https://static-1314371099.cos.ap-beijing.myqcloud.com/images/anchor/tree.png"
            }
            alt=""
          />
          <img
            ref={gibbonRef}
            style={styles.gibbon}
            src={
              "https://static-1314371099.cos.ap-beijing.myqcloud.com/images/anchor/gibbon.png"
            }
            alt="gibbon"
          />
        </div>
      </Tooltip>
    </Link>
  );
};

export default BasicAnchor;
