import type { NextPage } from "next";
import { type CSSProperties } from "react";
import { Property } from "csstype";
import { css } from "@emotion/css";

type FeaturesType = {
  assetImageUrl?: string;
  assetDescription?: string;
  assetManagementInstructio?: string;

  /** Style props */
  propBoxShadow?: CSSProperties["boxShadow"];
};

const Features: NextPage<FeaturesType> = ({
  assetImageUrl,
  assetDescription,
  assetManagementInstructio,
  propBoxShadow,
}) => {
  return (
    <div
      className={css`
        border-radius: var(--card-radius);
        background-color: var(--background-default);
        box-shadow: -40px 40px 80px rgba(145, 158, 171, 0.16);
        width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-4) var(--spacing-4);
        box-sizing: border-box;
        gap: var(--gap-base);
        min-width: 320px;
        text-align: center;
        font-size: var(--desktop-h4-size);
        color: var(--text-primary);
        font-family: var(--desktop-subtitle2);
        @media screen and (max-width: 1050px) {
          flex: 1;
        }
        box-shadow: ${propBoxShadow};
      `}
    >
      <img
        className={css`
          position: relative;
          width: 100px;
          height: 80.6px;
          object-fit: cover;
        `}
        loading="eager"
        alt=""
        src={assetImageUrl}
      />
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-base);
        `}
      >
        <h2
          className={css`
            margin: 0;
            align-self: stretch;
            position: relative;
            font-size: inherit;
            line-height: 36px;
            font-weight: 700;
            font-family: inherit;
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-lgi);
              line-height: 29px;
            }
          `}
        >
          {assetDescription}
        </h2>
        <div
          className={css`
            align-self: stretch;
            position: relative;
            font-size: var(--desktop-body1-size);
            line-height: 24px;
            color: var(--background-default1);
          `}
        >
          {assetManagementInstructio}
        </div>
      </div>
    </div>
  );
};

export default Features;
