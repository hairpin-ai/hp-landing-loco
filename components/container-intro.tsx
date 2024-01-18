import type { NextPage } from "next";
import { css } from "@emotion/css";
import Features from "./features";

const ContainerIntro: NextPage = () => {
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
        padding: var(--spacing-15) var(--layout-container-main-);
        box-sizing: border-box;
        gap: var(--spacing-10);
        max-width: 100%;
        text-align: center;
        font-size: var(--desktop-h2-size);
        color: var(--text-primary);
        font-family: var(--desktop-subtitle2);
        @media screen and (max-width: 1200px) {
          gap: var(--spacing-10);
        }
        @media screen and (max-width: 750px) {
          gap: var(--spacing-10);
          padding-top: var(--spacing-15);
          padding-bottom: var(--spacing-15);
          box-sizing: border-box;
        }
      `}
    >
      <div
        className={css`
          width: 1152px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          gap: var(--spacing-151);
          max-width: 100%;
          @media screen and (max-width: 1050px) {
            flex-wrap: wrap;
          }
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
          `}
        >
          <h1
            className={css`
              margin: 0;
              position: relative;
              font-size: inherit;
              line-height: 64px;
              font-weight: 800;
              font-family: inherit;
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
            Your
          </h1>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            color: var(--primary-main);
          `}
        >
          <h1
            className={css`
              margin: 0;
              position: relative;
              font-size: inherit;
              line-height: 64px;
              font-weight: 800;
              font-family: inherit;
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
            Customizable
          </h1>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            max-width: 100%;
          `}
        >
          <h1
            className={css`
              margin: 0;
              position: relative;
              font-size: inherit;
              line-height: 64px;
              font-weight: 800;
              font-family: inherit;
              @media screen and (max-width: 1050px) {
                font-size: var(--font-size-19xl);
                line-height: 51px;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--font-size-10xl);
                line-height: 38px;
              }
            `}
          >{`Asset Ecosystem. `}</h1>
        </div>
      </div>
      <div
        className={css`
          width: 1152px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: var(--gap-xl);
          max-width: 100%;
          font-size: var(--desktop-h4-size);
          @media screen and (max-width: 1050px) {
            flex-wrap: wrap;
            justify-content: center;
          }
        `}
      >
        <Features
          assetImageUrl="/hpcube@2x.png"
          assetDescription="Customizable"
          assetManagementInstructio="Build the asset management system to your specific needs."
          propBoxShadow="-40px 40px 80px rgba(145, 158, 171, 0.16)"
        />
        <Features
          assetImageUrl="/hpcube-1@2x.png"
          assetDescription="Stable"
          assetManagementInstructio="Deploy to the testnet and invite stakeholders to review."
          propBoxShadow="unset"
        />
        <Features
          assetImageUrl="/hpcube-2@2x.png"
          assetDescription="Immutable"
          assetManagementInstructio="Deploy the system onchain with it’s absolute unalterable nature."
          propBoxShadow="-40px 40px 80px rgba(145, 158, 171, 0.16)"
        />
      </div>
    </section>
  );
};

export default ContainerIntro;
