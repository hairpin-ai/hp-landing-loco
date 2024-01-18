import type { NextPage } from "next";
import { css } from "@emotion/css";

const BottomFooter: NextPage = () => {
  return (
    <div
      className={css`
        width: 270px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--gap-2xl);
        min-width: 270px;
        text-align: left;
        font-size: var(--desktop-subtitle2-size);
        color: var(--background-default);
        font-family: var(--desktop-subtitle2);
        @media screen and (max-width: 1050px) {
          flex: 1;
        }
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 0px var(--padding-12xs) 0px 0px;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding: 0px 0px 0px 0px;
            gap: var(--gap-xs);
          `}
        >
          <img
            className={css`
              position: relative;
              width: 83.9px;
              height: 84px;
              object-fit: cover;
            `}
            loading="eager"
            alt=""
            src="/logoicon-1@2x.png"
          />
          <img
            className={css`
              position: relative;
              width: 173.5px;
              height: 52.1px;
            `}
            loading="eager"
            alt=""
            src="/hairpin-1.svg"
          />
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          position: relative;
          border-top: 1px solid var(--secondary-dark);
          box-sizing: border-box;
          height: 1px;
        `}
      />
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-lg);
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 22px;
          `}
        >
          Hairpin LLC
        </div>
        <div
          className={css`
            position: relative;
            line-height: 22px;
            color: var(--text-secondary);
          `}
        >
          © 2023. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
