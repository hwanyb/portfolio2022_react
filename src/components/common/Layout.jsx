import React from 'react'
import Header from './Header';
import styled from '@emotion/styled';
import style from './gradient.module.css';





const Base = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    position: absolute;
    background-color:#d5d2ff;
`;

const GradientWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index: 2;
  margin: 0;
`;
const Gradient = styled.div`
  position: absolute;
  filter: blur(100px);
  -webkit-filter: blur(200px);
  /* mix-blend-mode: multiply;  */
  border-radius: 100%;
`;

const Background = () => {
  return (
    <GradientWrapper>
      <Gradient className={style.gradient1} />
      <Gradient className={style.gradient2} />
      <Gradient className={style.gradient3} />
      <Gradient className={style.gradient4} />
      <Gradient className={style.gradient5} />
    </GradientWrapper>
  )
}



const Layout = () => {
  return (
    <Base className={style.Base}>
      <Background />
        <Header />
        <div>안녕</div>
    </Base>
  )
}

export default Layout;