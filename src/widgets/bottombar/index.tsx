import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonBottomBar from "./ui/button-bottom-bar";

const BottomBar = ({ currentPage }: { currentPage: string }) => {
  const [currentTab, setCurrentTab] = useState<string>(currentPage);

  return (
    <section className="fixed bottom-0 bg-white left-0 right-0 z-50 shadow-2xl rounded-t-4xl">
      <ul className="flex w-full items-center justify-evenly p-4">
        <li>
          <Link to="/products">
            <ButtonBottomBar
              value="Home"
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                  clipRule="evenodd"
                />
              </svg>
            </ButtonBottomBar>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <ButtonBottomBar
              value="Cart"
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
                  clip-rule="evenodd"
                />
              </svg>
            </ButtonBottomBar>
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <ButtonBottomBar
              value="Messages"
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 0 1-.522 1.756.75.75 0 0 0 .584 1.143 5.976 5.976 0 0 0 3.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </ButtonBottomBar>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <ButtonBottomBar
              value="Profile"
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-6"
              >
                <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
              </svg>
            </ButtonBottomBar>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default BottomBar;
