import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Tooltip } from 'antd';
import gibbon from '../../public/images/anchor/gibbon.png';
import tree from '../../public/images/anchor/tree.png';
import './anchor.less';

const BasicAnchor: React.FC = () => {
  const gibbonRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!gibbonRef.current) return;

    const animation = anime({
      targets: gibbonRef.current,
      rotate: [0, 50],
      loop: true,
      direction: 'alternate',
      duration: 2000,
      easing: 'steps(4)',
    });

    return () => {
      anime.remove(gibbonRef.current);
    };
  }, []);

  const styles = {
    tree: {
      position: 'absolute' as const,
      width: '8vh',
      marginLeft: '-3px',
      zIndex: 5,
    },
    gibbon: {
      position: 'absolute' as const,
      width: '4vh',
      transformOrigin: '0% 0%',
      marginLeft: '17px',
      zIndex: 5,
    },
  };

  return (
    <a href="/us/contact">
      <Tooltip placement="right" title="点击关注我们" color={'#8da745'}>
        <div
          style={{
            position: 'fixed',
            bottom: '100px',
            width: '7vh',
            // marginLeft: '-24px',
            zIndex: 5,
          }}
        >
          <img style={styles.tree} src={tree} alt="tree" />
          <img
            ref={gibbonRef}
            style={styles.gibbon}
            src={gibbon}
            alt="gibbon"
          />
        </div>
      </Tooltip>
    </a>
  );
};

export default BasicAnchor;
