import type { NextPage } from "next";
import { css } from "@emotion/css";

const FilteredCardFormContainer: NextPage = () => {
  return (
    <section
      className={css`
        align-self: stretch;
        background-color: var(--background-default);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--padding-101xl) 0px;
        box-sizing: border-box;
        position: relative;
        gap: var(--spacing-10);
        min-height: 1063px;
        max-width: 100%;
        text-align: right;
        font-size: var(--desktop-h5-size);
        color: var(--background-default);
        font-family: var(--desktop-subtitle2);
        @media screen and (max-width: 750px) {
          gap: var(--spacing-10);
          padding-top: var(--padding-59xl);
          padding-bottom: var(--padding-59xl);
          box-sizing: border-box;
        }
        @media screen and (max-width: 450px) {
          gap: var(--spacing-10);
        }
      `}
    >
      <img
        className={css`
          position: absolute;
          margin: 0 !important;
          top: calc(50% - 1135.5px);
          left: calc(50% - 1162px);
          width: 2844px;
          height: 2274px;
          object-fit: cover;
        `}
        alt=""
        src="/group-21@2x.png"
      />
      <div
        className={css`
          width: 611px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0px var(--padding-xl);
          box-sizing: border-box;
          gap: var(--gap-xl);
          max-width: 100%;
          z-index: 1;
          @media screen and (max-width: 750px) {
            flex-wrap: wrap;
          }
        `}
      >
        <div
          className={css`
            height: 276px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;
            min-width: 311px;
            @media screen and (max-width: 750px) {
              flex: 1;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              justify-content: center;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                justify-content: center;
                gap: var(--gap-3xs);
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
                PROPERTIES
              </h3>
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
                ROOMS
              </h3>
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
                TICKETS
              </h3>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                gap: var(--gap-5xs);
                font-size: var(--desktop-h4-size);
                color: var(--secondary-lighter);
              `}
            >
              <h2
                className={css`
                  margin: 0;
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
                YOUR
              </h2>
              <h2
                className={css`
                  margin: 0;
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
                ASSETS
              </h2>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              justify-content: center;
              font-size: var(--desktop-h4-size);
              color: var(--secondary-lighter);
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                gap: var(--gap-5xs);
              `}
            >
              <h2
                className={css`
                  margin: 0;
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
                YOUR
              </h2>
              <h2
                className={css`
                  margin: 0;
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
                CLIENTS
              </h2>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                justify-content: center;
                gap: var(--gap-3xs);
                font-size: var(--desktop-h5-size);
                color: var(--background-default);
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
                TENANTS
              </h3>
              <b
                className={css`
                  align-self: stretch;
                  position: relative;
                  line-height: 30px;
                  display: none;
                  @media screen and (max-width: 450px) {
                    font-size: var(--desktop-body1-size);
                    line-height: 24px;
                  }
                `}
              >
                GUESTS
              </b>
              <b
                className={css`
                  align-self: stretch;
                  position: relative;
                  line-height: 30px;
                  display: none;
                  @media screen and (max-width: 450px) {
                    font-size: var(--desktop-body1-size);
                    line-height: 24px;
                  }
                `}
              >
                SPECTATORS
              </b>
            </div>
          </div>
        </div>
        <div
          className={css`
            width: 205.83px;
            height: 276px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            min-width: 205.8333333333339px;
            text-align: left;
            @media screen and (max-width: 750px) {
              flex: 1;
            }
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: center;
                gap: var(--gap-3xs);
              `}
            >
              <h3
                className={css`
                  margin: 0;
                  flex: 1;
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
                LIMITED PARTNERS
              </h3>
              <b
                className={css`
                  align-self: stretch;
                  position: relative;
                  line-height: 30px;
                  display: none;
                  @media screen and (max-width: 450px) {
                    font-size: var(--desktop-body1-size);
                    line-height: 24px;
                  }
                `}
              >
                BANKS
              </b>
              <b
                className={css`
                  align-self: stretch;
                  position: relative;
                  line-height: 30px;
                  display: none;
                  @media screen and (max-width: 450px) {
                    font-size: var(--desktop-body1-size);
                    line-height: 24px;
                  }
                `}
              >
                GENERAL PARTNERS
              </b>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                font-size: var(--desktop-h4-size);
                color: var(--secondary-lighter);
              `}
            >
              <h2
                className={css`
                  margin: 0;
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
                YOUR
              </h2>
              <h2
                className={css`
                  margin: 0;
                  position: relative;
                  font-size: inherit;
                  line-height: 36px;
                  font-weight: 700;
                  font-family: inherit;
                  margin-top: -6px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-lgi);
                    line-height: 29px;
                  }
                `}
              >
                INVESTORS
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          margin: 0 !important;
          position: absolute;
          top: 120px;
          left: calc(50% - 300px);
          border-radius: var(--br-base);
          filter: var(--shadow-pricing-card);
          width: 600px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          max-width: 100%;
          z-index: 1;
          text-align: left;
          font-size: var(--desktop-body1-size);
          color: var(--secondary-lighter);
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--gap-5xl);
            max-width: 100%;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: var(--spacing-2);
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                border-radius: var(--icon-button-radius);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 0px var(--padding-xl);
              `}
            >
              <div
                className={css`
                  position: relative;
                  width: var(--icon-button-extra-small-icon);
                  height: var(--icon-button-extra-small-icon);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    background-color: var(--info-main);
                    display: none;
                    opacity: 0.32;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 58.21%;
                    width: 29.29%;
                    top: 20.71%;
                    right: 37.5%;
                    bottom: 21.07%;
                    left: 33.21%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  loading="eager"
                  alt=""
                  src="/primaryshape.svg"
                />
              </div>
            </div>
            <div
              className={css`
                position: relative;
                line-height: 24px;
                font-weight: 600;
                padding-left: var(--padding-xl);
                padding-right: var(--padding-xl);
              `}
            >
              YOUR INDUSTRY
            </div>
            <div
              className={css`
                border-radius: var(--icon-button-radius);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 0px var(--padding-xl);
              `}
            >
              <div
                className={css`
                  position: relative;
                  width: var(--icon-button-extra-small-icon);
                  height: var(--icon-button-extra-small-icon);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    background-color: var(--info-main);
                    display: none;
                    opacity: 0.32;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 58.57%;
                    width: 29.29%;
                    top: 20.71%;
                    right: 33.21%;
                    bottom: 20.71%;
                    left: 37.5%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  loading="eager"
                  alt=""
                  src="/primaryshape-1.svg"
                />
              </div>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 0px var(--padding-xl);
              gap: var(--gap-5xl);
              font-size: var(--desktop-h3-size);
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
              REAL ESTATE
            </h1>
            <b
              className={css`
                align-self: stretch;
                position: relative;
                line-height: 48px;
                display: none;
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
              HOSPITALITY
            </b>
            <b
              className={css`
                align-self: stretch;
                position: relative;
                line-height: 48px;
                display: none;
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
              EVENTS
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilteredCardFormContainer;
