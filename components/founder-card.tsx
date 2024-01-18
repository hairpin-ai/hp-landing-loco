import type { NextPage } from "next";
import { css } from "@emotion/css";
import TeamCard from "./team-card";

const FounderCard: NextPage = () => {
  return (
    <section
      className={css`
        align-self: stretch;
        background-color: var(--background-default);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: var(--spacing-15) var(--spacing-20);
        box-sizing: border-box;
        gap: var(--spacing-5);
        max-width: 100%;
        text-align: center;
        font-size: var(--desktop-h2-size);
        color: var(--text-primary);
        font-family: var(--desktop-subtitle2);
        @media screen and (max-width: 1050px) {
          padding-top: var(--spacing-15);
          padding-bottom: var(--spacing-15);
          box-sizing: border-box;
        }
        @media screen and (max-width: 750px) {
          gap: var(--spacing-5);
          padding-top: var(--spacing-15);
          padding-bottom: var(--spacing-15);
          box-sizing: border-box;
        }
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: var(--spacing-3);
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
        >
          Founders
        </h1>
        <div
          className={css`
            position: relative;
            font-size: var(--desktop-body1-size);
            line-height: 24px;
            color: var(--background-default1);
            white-space: pre-wrap;
          `}
        >{`Bridging Brick & Mortar Expertise with  Digital Tech Innovation`}</div>
      </div>
      <div
        className={css`
          width: 632px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: var(--spacing-2);
          max-width: 100%;
          text-align: left;
          font-size: var(--desktop-body1-size);
          color: var(--background-default1);
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-13xl);
            font-size: var(--desktop-h5-size);
            color: var(--text-primary);
            @media screen and (max-width: 750px) {
              gap: var(--gap-base);
            }
          `}
        >
          <TeamCard
            profileImageUrl="/img-portrait3@2x.png"
            personImageUrl="Allen Meizlish"
            founderRoleImageUrl="FOUNDER / CEO"
          />
          <TeamCard
            profileImageUrl="/img-portrait1@2x.png"
            personImageUrl="Hami Gendron"
            founderRoleImageUrl="FOUNDER / CTO"
            propBoxShadow="0px 4px 8px rgba(145, 158, 171, 0.16)"
          />
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding: 0px 0px 0px var(--padding-base);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              flex: 1;
              position: relative;
              line-height: 24px;
              display: inline-block;
              max-width: 100%;
            `}
          >
            <p
              className={css`
                margin: 0;
              `}
            >
              Allen is a time-tested Commercial Real Estate (CRE) entrepreneur
              who has been involved with 200+ multifamily, restaurant, retail,
              and hospitality projects in all stages of development planning,
              site selection, design, and construction. Throughout his career,
              Allen’s projects have ranged from single retail location
              build-outs up to $800MM multi-phase, multi-year development
              projects.
            </p>
            <p
              className={css`
                margin: 0;
              `}
            >
              &nbsp;
            </p>
            <p
              className={css`
                margin: 0;
              `}
            >
              Allen is the founder and partner in a number of real estate
              related ventures. He is a the co-founder of the Washington, DC
              based real estate development firm HELM Ventures which is
              currently working on millions of dollars of expansion and
              development projects in the region.
            </p>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: none;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding: 0px 0px 0px var(--padding-base);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              flex: 1;
              position: relative;
              line-height: 24px;
              display: inline-block;
              max-width: 100%;
            `}
          >
            <p
              className={css`
                margin: 0;
              `}
            >
              Hami brings a wealth of experience to the field of web and mobile
              app design and development. With over 20 years of running his own
              development company, he has design and developed remarkable
              projects, including: Impactful brand designs and marketing
              materials, SAAS models, web and mobile applications, efficient
              booking systems, commission concierge systems, seamless payment
              gateway and POS system integrations, and innovative loyalty and
              rewards systems.
            </p>
            <p
              className={css`
                margin: 0;
              `}
            >
              &nbsp;
            </p>
            <p
              className={css`
                margin: 0;
              `}
            >
              As an early contributor to the web3 industry, Hami has pioneered
              the creation of the world's first NFT charity, the 30th Crypto
              Collectable collection, and collaborated on multiple decentralized
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderCard;
