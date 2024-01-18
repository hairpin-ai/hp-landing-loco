import type { NextPage } from "next";
import { css } from "@emotion/css";

const Footer: NextPage = () => {
  return (
    <div
      className={css`
        width: 564px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0px 0px 0px var(--padding-53xl);
        box-sizing: border-box;
        gap: var(--spacing-3);
        min-width: 564px;
        max-width: 100%;
        text-align: left;
        font-size: var(--desktop-overline-size);
        color: var(--background-default);
        font-family: var(--desktop-subtitle2);
        @media screen and (max-width: 1050px) {
          flex: 1;
        }
        @media screen and (max-width: 750px) {
          flex-wrap: wrap;
          padding-left: var(--padding-17xl);
          box-sizing: border-box;
          min-width: 100%;
        }
      `}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--spacing-3);
          min-width: 112px;
        `}
      >
        <b
          className={css`
            align-self: stretch;
            position: relative;
            line-height: 18px;
            text-transform: uppercase;
          `}
        >
          ABOUT
        </b>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--spacing-25);
            font-size: var(--desktop-subtitle2-size);
            color: var(--primary-main);
          `}
        >
          <div
            className={css`
              position: relative;
              line-height: 22px;
            `}
          >
            Systems
          </div>
          <div
            className={css`
              position: relative;
              line-height: 22px;
            `}
          >
            Team
          </div>
          <div
            className={css`
              position: relative;
              line-height: 22px;
            `}
          >
            FAQ
          </div>
        </div>
      </div>
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--spacing-3);
          min-width: 112px;
        `}
      >
        <b
          className={css`
            align-self: stretch;
            position: relative;
            line-height: 18px;
            text-transform: uppercase;
          `}
        >
          TERMS
        </b>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--spacing-25);
            font-size: var(--desktop-subtitle2-size);
            color: var(--primary-main);
          `}
        >
          <div
            className={css`
              position: relative;
              line-height: 22px;
            `}
          >{`Terms & Condition`}</div>
          <div
            className={css`
              position: relative;
              line-height: 22px;
            `}
          >
            Privacy Policy
          </div>
          <div
            className={css`
              position: relative;
              line-height: 22px;
            `}
          >
            GDPR
          </div>
        </div>
      </div>
      <div
        className={css`
          width: 100px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--spacing-3);
        `}
      >
        <b
          className={css`
            align-self: stretch;
            position: relative;
            line-height: 18px;
            text-transform: uppercase;
          `}
        >
          CONTACT US
        </b>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-3xl);
            font-size: var(--components-button-xsmall-size);
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-5xs);
            `}
          >
            <div
              className={css`
                border-radius: var(--radius-05);
                background-color: var(--other-linkedin);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-6xs);
                box-sizing: border-box;
                gap: var(--gap-8xs);
                min-width: 28px;
                min-height: 28px;
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: var(--button-xsmall-icon);
                  height: var(--button-xsmall-icon);
                  object-fit: cover;
                `}
                loading="eager"
                alt=""
                src="/start-icon@2x.png"
              />
              <b
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 18px;
                  display: none;
                `}
              >
                CONTACT US
              </b>
              <img
                className={css`
                  position: relative;
                  width: var(--button-xsmall-icon);
                  height: var(--button-xsmall-icon);
                  object-fit: cover;
                  display: none;
                  min-height: 14px;
                `}
                alt=""
                src="/end-icon@2x.png"
              />
            </div>
            <div
              className={css`
                flex: 1;
                border-radius: var(--radius-05);
                background-color: var(--color-black);
                border: 1px solid var(--color-black);
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-6xs) var(--padding-7xs);
                gap: var(--gap-3xs);
                min-width: 28px;
                min-height: 28px;
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: var(--button-xsmall-icon);
                  height: var(--button-xsmall-icon);
                `}
                loading="eager"
                alt=""
                src="/start-icon-1.svg"
              />
              <b
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 18px;
                  display: none;
                `}
              >
                xSmall
              </b>
              <img
                className={css`
                  position: relative;
                  width: var(--button-xsmall-icon);
                  height: var(--button-xsmall-icon);
                  object-fit: cover;
                  display: none;
                  min-height: 14px;
                `}
                alt=""
                src="/end-icon-1@2x.png"
              />
            </div>
            <div
              className={css`
                border-radius: var(--radius-05);
                background-color: var(--other-instagram);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-6xs);
                box-sizing: border-box;
                gap: var(--gap-8xs);
                min-width: 28px;
                min-height: 28px;
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: var(--button-xsmall-icon);
                  height: var(--button-xsmall-icon);
                  object-fit: cover;
                `}
                loading="eager"
                alt=""
                src="/start-icon-2@2x.png"
              />
              <b
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 18px;
                  display: none;
                `}
              >
                CONTACT US
              </b>
              <img
                className={css`
                  position: relative;
                  width: var(--button-xsmall-icon);
                  height: var(--button-xsmall-icon);
                  object-fit: cover;
                  display: none;
                  min-height: 14px;
                `}
                alt=""
                src="/end-icon@2x.png"
              />
            </div>
            <div
              className={css`
                align-self: stretch;
                border-radius: var(--radius-05);
                background-color: var(--other-facebook);
                width: 28px;
                display: none;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-8xs);
                box-sizing: border-box;
                gap: var(--gap-8xs);
                min-width: 28px;
                min-height: 28px;
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: var(--button-xsmall-icon);
                  height: var(--button-xsmall-icon);
                `}
                alt=""
                src="/start-icon-3.svg"
              />
              <b
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 18px;
                  display: none;
                `}
              >
                CONTACT US
              </b>
              <img
                className={css`
                  position: relative;
                  width: var(--button-xsmall-icon);
                  height: var(--button-xsmall-icon);
                  object-fit: cover;
                  display: none;
                `}
                alt=""
                src="/end-icon@2x.png"
              />
            </div>
          </div>
          <button
            className={css`
              cursor: pointer;
              border: none;
              padding: var(--padding-8xs) var(--padding-7xs) var(--padding-8xs)
                var(--padding-5xs);
              background-color: var(--primary-main);
              border-radius: var(--radius-05);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              box-sizing: border-box;
              gap: var(--gap-8xs);
              min-width: 28px;
              min-height: 28px;
            `}
          >
            <img
              className={css`
                position: relative;
                width: var(--button-xsmall-icon);
                height: var(--button-xsmall-icon);
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/start-icon-4.svg"
            />
            <b
              className={css`
                position: relative;
                font-size: var(--components-button-xsmall-size);
                line-height: 18px;
                font-family: var(--desktop-subtitle2);
                color: var(--background-default);
                text-align: left;
              `}
            >
              CONTACT US
            </b>
            <img
              className={css`
                position: relative;
                width: var(--button-xsmall-icon);
                height: var(--button-xsmall-icon);
                object-fit: cover;
                display: none;
              `}
              alt=""
              src="/end-icon-1@2x.png"
            />
          </button>
          <div
            className={css`
              align-self: stretch;
              position: relative;
              border-top: 1px solid var(--secondary-dark);
              box-sizing: border-box;
              height: 1px;
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
