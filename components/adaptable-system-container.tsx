import type { NextPage } from "next";
import { css } from "@emotion/css";

const AdaptableSystemContainer: NextPage = () => {
  return (
    <section
      className={css`
        align-self: stretch;
        background-color: var(--secondary-dark);
        height: 900px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        max-width: 100%;
        text-align: center;
        font-size: var(--desktop-h3-size);
        color: var(--primary-lighter);
        font-family: var(--desktop-subtitle2);
      `}
    >
      <img
        className={css`
          position: absolute;
          margin: 0 !important;
          top: calc(50% - 1253px);
          left: calc(50% - 1158px);
          width: 2844px;
          height: 2274px;
          opacity: 0.15;
          mix-blend-mode: normal;
        `}
        alt=""
        src="/hairpincube.svg"
      />
      <div
        className={css`
          align-self: stretch;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--padding-101xl) var(--padding-xl) 0px;
          box-sizing: border-box;
          max-width: 100%;
          z-index: 1;
          @media screen and (max-width: 750px) {
            gap: var(--gap-5xl);
            padding-top: var(--padding-59xl);
            box-sizing: border-box;
          }
        `}
      >
        <div
          className={css`
            width: 448px;
            height: 494.1px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--gap-13xl);
            max-width: 100%;
            @media screen and (max-width: 450px) {
              gap: var(--gap-base);
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            `}
          >
            <img
              className={css`
                position: relative;
                width: 200px;
                height: 200px;
                object-fit: cover;
              `}
              loading="eager"
              alt=""
              src="/logoicon@2x.png"
            />
          </div>
          <div
            className={css`
              align-self: stretch;
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            `}
          >
            <img
              className={css`
                align-self: stretch;
                flex: 1;
                position: relative;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              loading="eager"
              alt=""
              src="/hairpin.svg"
            />
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
              `}
            >
              <h1
                className={css`
                  margin: 0;
                  position: relative;
                  font-size: inherit;
                  line-height: 48px;
                  font-weight: 700;
                  font-family: inherit;
                  @media screen and (max-width: 1050px) {
                    font-size: var(--font-size-7xl);
                    line-height: 38px;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-lgi);
                    line-height: 29px;
                  }
                `}
              >
                Adaptable System.
              </h1>
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                color: var(--background-default);
              `}
            >
              <h1
                className={css`
                  margin: 0;
                  position: relative;
                  font-size: inherit;
                  line-height: 48px;
                  font-weight: 700;
                  font-family: inherit;
                  @media screen and (max-width: 1050px) {
                    font-size: var(--font-size-7xl);
                    line-height: 38px;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-lgi);
                    line-height: 29px;
                  }
                `}
              >
                .Immutable Assets
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          margin: 0 !important;
          top: 0px;
          right: 0px;
          width: 720px;
          height: 1024px;
          display: none;
          z-index: 2;
        `}
      >
        <img
          className={css`
            position: absolute;
            height: 345.04%;
            width: 312.26%;
            top: -128.6%;
            right: -154.79%;
            bottom: -116.44%;
            left: -57.47%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            object-fit: contain;
          `}
          alt=""
          src="/stack@2x.png"
        />
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0px 0px var(--padding-13xl);
          gap: var(--gap-3xs);
          z-index: 1;
        `}
      >
        <img
          className={css`
            position: relative;
            width: 26px;
            height: 26px;
          `}
          loading="eager"
          alt=""
          src="/iconcolor.svg"
        />
      </div>
    </section>
  );
};

export default AdaptableSystemContainer;
