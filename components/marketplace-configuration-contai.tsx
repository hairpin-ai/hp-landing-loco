import type { NextPage } from "next";
import { css } from "@emotion/css";

const MarketplaceConfigurationContai: NextPage = () => {
  return (
    <div
      className={css`
        width: 1192px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 0px var(--padding-xl);
        box-sizing: border-box;
        gap: var(--spacing-3);
        max-width: 100%;
        text-align: center;
        font-size: var(--desktop-h3-size);
        color: var(--text-primary);
        font-family: var(--desktop-subtitle2);
      `}
    >
      <div
        className={css`
          width: 358px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: var(--spacing-1);
          max-width: 100%;
          font-size: var(--desktop-body1-size);
          color: var(--text-disabled);
        `}
      >
        <div
          className={css`
            width: 226px;
            display: none;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              flex: 1;
              position: relative;
              line-height: 24px;
            `}
          >
            SYSTEM CREATION PROCESS
          </div>
        </div>
        <div
          className={css`
            width: 219px;
            display: none;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              flex: 1;
              position: relative;
              line-height: 24px;
            `}
          >
            ORGANISATION FORMATION
          </div>
        </div>
        <div
          className={css`
            width: 256px;
            display: none;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              flex: 1;
              position: relative;
              line-height: 24px;
            `}
          >{`ASSETS & FRACTIONS CREATION`}</div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            color: var(--text-primary);
          `}
        >
          <div
            className={css`
              position: relative;
              line-height: 24px;
              font-weight: 600;
            `}
          >
            MARKETPLACE CONFIGURATION
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: center;
            row-gap: 20px;
            font-size: var(--desktop-subtitle2-size);
            color: var(--text-primary);
          `}
        >
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: var(--spacing-2);
              min-width: 89px;
            `}
          >
            <div
              className={css`
                flex: 1;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: var(--gap-6xs);
              `}
            >
              <div
                className={css`
                  position: relative;
                  width: 39.7px;
                  height: 2px;
                `}
              />
              <div
                className={css`
                  position: relative;
                  width: 24px;
                  height: 24px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    height: 33.33%;
                    width: 33.33%;
                    top: 33.33%;
                    right: 33.33%;
                    bottom: 33.33%;
                    left: 33.33%;
                    border-radius: 50%;
                    background-color: var(--primary-main);
                    z-index: 1;
                  `}
                />
              </div>
              <div
                className={css`
                  position: relative;
                  background-color: var(--primary-main);
                  width: 40px;
                  height: 2px;
                  display: none;
                `}
              />
            </div>
            <div
              className={css`
                position: relative;
                line-height: 22px;
                font-weight: 600;
                display: none;
                width: 128px;
                flex-shrink: 0;
              `}
            >
              Step 1
            </div>
          </div>
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: var(--spacing-2);
              min-width: 89px;
            `}
          >
            <div
              className={css`
                flex: 1;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  position: relative;
                  background-color: var(--primary-main);
                  width: 40px;
                  height: 2px;
                  display: none;
                `}
              />
              <div
                className={css`
                  position: relative;
                  width: 24px;
                  height: 24px;
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
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    height: 33.33%;
                    width: 33.33%;
                    top: 33.33%;
                    right: 33.33%;
                    bottom: 33.33%;
                    left: 33.33%;
                    border-radius: 50%;
                    background-color: var(--primary-main);
                    z-index: 1;
                  `}
                />
              </div>
              <div
                className={css`
                  position: relative;
                  background-color: var(--primary-main);
                  width: 40px;
                  height: 2px;
                  display: none;
                `}
              />
            </div>
            <div
              className={css`
                position: relative;
                line-height: 22px;
                font-weight: 600;
                display: none;
                width: 128px;
                flex-shrink: 0;
              `}
            >
              Step 2
            </div>
          </div>
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: var(--spacing-2);
              min-width: 89px;
            `}
          >
            <div
              className={css`
                flex: 1;
                overflow: hidden;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 0px 0px 0px var(--padding-29xl);
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  position: relative;
                  background-color: var(--primary-main);
                  width: 40px;
                  height: 2px;
                  display: none;
                `}
              />
              <div
                className={css`
                  position: relative;
                  width: 24px;
                  height: 24px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 12px);
                    left: calc(50% - 12px);
                    width: 100%;
                    height: 100%;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 4px);
                    left: calc(50% - 4px);
                    border-radius: 50%;
                    border: 1px solid var(--primary-main);
                    box-sizing: border-box;
                    width: 9px;
                    height: 9px;
                    z-index: 1;
                  `}
                />
              </div>
              <div
                className={css`
                  position: relative;
                  width: 39.7px;
                  height: 2px;
                `}
              />
            </div>
            <div
              className={css`
                position: relative;
                line-height: 22px;
                font-weight: 600;
                display: none;
                width: 128px;
                flex-shrink: 0;
              `}
            >
              Step 3
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          max-width: 100%;
          font-size: var(--desktop-h2-size);
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: var(--gap-3xs);
            max-width: 100%;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 64px;
              font-weight: 800;
              @media screen and (max-width: 1050px) {
                font-size: var(--font-size-19xl);
                line-height: 51px;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--font-size-10xl);
                line-height: 38px;
              }
            `}
          >
            System Creation Process
          </div>
          <b
            className={css`
              position: relative;
              font-size: var(--desktop-h5-size);
              line-height: 30px;
              display: inline-block;
              color: var(--background-default1);
              width: 466px;
              max-width: 100%;
              @media screen and (max-width: 450px) {
                font-size: var(--desktop-body1-size);
                line-height: 24px;
              }
            `}
          >{`Every system components are made of pre-build smart contracts for you to easily customize. `}</b>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: var(--gap-3xs);
            max-width: 100%;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 64px;
              font-weight: 800;
              @media screen and (max-width: 1050px) {
                font-size: var(--font-size-19xl);
                line-height: 51px;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--font-size-10xl);
                line-height: 38px;
              }
            `}
          >{`System Tests & Audits`}</div>
          <b
            className={css`
              position: relative;
              font-size: var(--desktop-h5-size);
              line-height: 30px;
              display: inline-block;
              color: var(--background-default1);
              width: 466px;
              max-width: 100%;
              @media screen and (max-width: 450px) {
                font-size: var(--desktop-body1-size);
                line-height: 24px;
              }
            `}
          >{`Every system components are made of pre-build smart contracts for you to easily customize. `}</b>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: var(--gap-3xs);
            max-width: 100%;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 64px;
              font-weight: 800;
              @media screen and (max-width: 1050px) {
                font-size: var(--font-size-19xl);
                line-height: 51px;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--font-size-10xl);
                line-height: 38px;
              }
            `}
          >
            System Deployment
          </div>
          <b
            className={css`
              position: relative;
              font-size: var(--desktop-h5-size);
              line-height: 30px;
              display: inline-block;
              color: var(--background-default1);
              width: 466px;
              max-width: 100%;
              @media screen and (max-width: 450px) {
                font-size: var(--desktop-body1-size);
                line-height: 24px;
              }
            `}
          >{`Every system components are made of pre-build smart contracts for you to easily customize. `}</b>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
        >
          <b
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 48px;
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
            Form an Organisation
          </b>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
        >
          <b
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 48px;
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
            Invite Members
          </b>
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
          <b
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 48px;
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
            Setup a Safe
          </b>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          max-width: 100%;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: none;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 100%;
          `}
        >
          <b
            className={css`
              flex: 1;
              position: relative;
              line-height: 48px;
              display: inline-block;
              max-width: 100%;
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
            Define Assets
          </b>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 100%;
          `}
        >
          <b
            className={css`
              flex: 1;
              position: relative;
              line-height: 48px;
              display: inline-block;
              max-width: 100%;
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
            Fractionalize Assets
          </b>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          max-width: 100%;
        `}
      >
        <div
          className={css`
            display: none;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 100%;
          `}
        >
          <b
            className={css`
              flex: 1;
              position: relative;
              line-height: 48px;
              display: inline-block;
              max-width: 100%;
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
            Configure the Exchange
          </b>
        </div>
        <div
          className={css`
            display: none;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 100%;
          `}
        >
          <b
            className={css`
              flex: 1;
              position: relative;
              line-height: 48px;
              display: inline-block;
              max-width: 100%;
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
            Setup a Reserve
          </b>
        </div>
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 100%;
          `}
        >
          <h1
            className={css`
              margin: 0;
              flex: 1;
              position: relative;
              font-size: inherit;
              line-height: 48px;
              font-weight: 700;
              font-family: inherit;
              display: inline-block;
              max-width: 100%;
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
            Pick a Stable Currency
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceConfigurationContai;
