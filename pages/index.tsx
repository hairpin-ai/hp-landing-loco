import type { NextPage } from "next";
import Head from "next/head";
import AdaptableSystemContainer from "../components/adaptable-system-container";
import ContainerIntro from "../components/container-intro";
import { css } from "@emotion/css";
import MarketplaceConfigurationContai from "../components/marketplace-configuration-contai";
import FormContainer from "../components/form-container";
import FilteredCardFormContainer from "../components/filtered-card-form-container";
import FounderCard from "../components/founder-card";
import BottomFooter from "../components/bottom-footer";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div
      className={css`
        position: relative;
        background-color: var(--background-default);
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        letter-spacing: normal;
        text-align: left;
        font-size: var(--desktop-subtitle2-size);
        color: var(--text-primary);
        font-family: var(--desktop-subtitle2);
      `}
    >
      <AdaptableSystemContainer />
      <ContainerIntro />
      <section
        className={css`
          align-self: stretch;
          background-color: var(--primary-12);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          max-width: 100%;
        `}
      >
        <img
          className={css`
            position: relative;
            width: 264px;
            height: 352px;
          `}
          loading="eager"
          alt=""
          src="/polygon-1.svg"
        />
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: var(--spacing-12) var(--spacing-12) var(--spacing-12);
            box-sizing: border-box;
            gap: 67px;
            max-width: 100%;
            z-index: 1;
            margin-top: -352px;
            @media screen and (max-width: 1050px) {
              padding-top: var(--spacing-12);
              box-sizing: border-box;
            }
            @media screen and (max-width: 750px) {
              gap: 33px;
            }
            @media screen and (max-width: 450px) {
              gap: 17px;
            }
          `}
        >
          <MarketplaceConfigurationContai />
          <FormContainer />
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              padding: 0px 0px var(--padding-13xl);
              gap: var(--gap-3xs);
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
              src="/iconcolor-3.svg"
            />
          </div>
        </div>
      </section>
      <FilteredCardFormContainer />
      <FounderCard />
      <footer
        className={css`
          align-self: stretch;
          background-color: var(--background-default1);
          border-top: 1px solid var(--components-divider);
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-10);
          max-width: 100%;
          @media screen and (max-width: 1200px) {
            padding-left: var(--spacing-10);
            padding-right: var(--spacing-10);
            box-sizing: border-box;
          }
          @media screen and (max-width: 750px) {
            gap: var(--gap-21xl);
          }
          @media screen and (max-width: 450px) {
            gap: var(--gap-xl);
          }
        `}
      >
        <div
          className={css`
            width: 1152px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: var(--gap-xl);
            max-width: 100%;
            @media screen and (max-width: 1050px) {
              flex-wrap: wrap;
            }
          `}
        >
          <BottomFooter />
          <Footer />
        </div>
      </footer>
      <div
        className={css`
          margin: 0 !important;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          display: none;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-3) var(--spacing-3);
          box-sizing: border-box;
          min-height: 80px;
          gap: var(--gap-xl);
          max-width: 100%;
          z-index: 6;
          @media screen and (max-width: 450px) {
            flex-wrap: wrap;
          }
        `}
      >
        <div
          className={css`
            position: absolute;
            margin: 0 !important;
            height: var(--layout-header-main-height);
            width: 100%;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            z-index: 0;
          `}
        >
          <div
            className={css`
              position: absolute;
              width: calc(100% - 48px);
              right: 24px;
              bottom: 0px;
              left: 24px;
              border-radius: 50%;
              background-color: var(--background-default);
              box-shadow: var(--shadow-z8);
              height: 24px;
              display: none;
              opacity: 0.48;
            `}
          />
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              background-color: var(--background-default);
            `}
          />
        </div>
        <img
          className={css`
            position: relative;
            width: 40px;
            height: 40px;
            object-fit: cover;
            z-index: 1;
          `}
          alt=""
          src="/logoicon-2@2x.png"
        />
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding: var(--padding-xl) 0px;
            gap: var(--spacing-1);
            z-index: 2;
          `}
        >
          <div
            className={css`
              border-radius: var(--icon-button-radius);
              width: var(--icon-button-small-size);
              height: var(--icon-button-small-size);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            `}
          >
            <img
              className={css`
                position: relative;
                width: 20px;
                height: 20px;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/iconsduotoneicsettings.svg"
            />
          </div>
          <div
            className={css`
              position: relative;
              line-height: 22px;
              font-weight: 600;
            `}
          >
            Need help?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
