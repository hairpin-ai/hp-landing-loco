import type { NextPage } from "next";
import { type CSSProperties } from "react";
import { Property } from "csstype";
import { css } from "@emotion/css";

type TeamCardType = {
  profileImageUrl?: string;
  personImageUrl?: string;
  founderRoleImageUrl?: string;

  /** Style props */
  propBoxShadow?: CSSProperties["boxShadow"];
};

const TeamCard: NextPage<TeamCardType> = ({
  profileImageUrl,
  personImageUrl,
  founderRoleImageUrl,
  propBoxShadow,
}) => {
  return (
    <div
      className={css`
        flex: 1;
        border-radius: var(--card-radius) var(--card-radius) var(--card-radius)
          var(--card-radius);
        background-color: var(--background-default);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-2);
        box-sizing: border-box;
        min-width: 195px;
        text-align: left;
        font-size: var(--desktop-h5-size);
        color: var(--text-primary);
        font-family: var(--desktop-subtitle2);
        box-shadow: ${propBoxShadow};
      `}
    >
      <div
        className={css`
          align-self: stretch;
          border-radius: var(--radius-15) var(--radius-15) var(--radius-15)
            var(--radius-15);
          background-color: var(--error-lighter);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          position: relative;
        `}
      >
        <img
          className={css`
            width: 268px;
            height: 268px;
            object-fit: contain;
          `}
          alt=""
          src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout@2x.png"
        />
        <img
          className={css`
            position: absolute;
            margin: 0 !important;
            height: 100%;
            width: 100%;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            object-fit: cover;
            z-index: 1;
          `}
          loading="eager"
          alt=""
          src={profileImageUrl}
        />
        <img
          className={css`
            position: absolute;
            margin: 0 !important;
            height: 100%;
            width: 100%;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            display: none;
            z-index: 2;
          `}
          alt=""
          src="/-overlay.svg"
        />
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--padding-5xs) 0px 0px;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: var(--gap-xl);
          `}
        >
          <h3
            className={css`
              margin: 0;
              position: relative;
              font-size: inherit;
              line-height: 30px;
              font-weight: 700;
              font-family: inherit;
              @media screen and (max-width: 450px) {
                font-size: var(--desktop-body1-size);
                line-height: 24px;
              }
            `}
          >
            {personImageUrl}
          </h3>
          <div
            className={css`
              position: relative;
              width: 24px;
              height: 24px;
              overflow: hidden;
              flex-shrink: 0;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: calc(50% - 12px);
                left: calc(50% - 12px);
                background-color: var(--color-steelblue-100);
                width: 100%;
                height: 100%;
              `}
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% - 7px);
                left: calc(50% - 7px);
                width: 14px;
                height: 14px;
                z-index: 1;
              `}
              loading="eager"
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            position: relative;
            font-size: var(--desktop-subtitle2-size);
            line-height: 22px;
            color: var(--background-default1);
          `}
        >
          {founderRoleImageUrl}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
