import { Link } from "react-router-dom";
import "./Footer.css";

const iconSize = 35;

export default function Footer() {
  return (
    <div className="credentials">
      <div>
        <Link to="https://github.com/AlexDuminica" className="socialButton" target="_blank">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={iconSize}
              height={iconSize}
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
              color="#201E1D"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </span>
        </Link>
        <Link
          to="https://www.linkedin.com/in/alexandru-d-011031100/"
          className="socialButton"
          target="_blank"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={iconSize}
              height={iconSize}
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </span>
        </Link>
        <Link
          to="https://app.netlify.com/teams/alexandru-duminica98/sites"
          className="socialButton"
          target="_blank"
        >
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
              <defs>
                <radialGradient
                  id="a"
                  cy="0%"
                  r="100.11%"
                  fx="50%"
                  fy="0%"
                  gradientTransform="matrix(0 .9989 -1.152 0 .5 -.5)"
                >
                  <stop offset="0%" stop-color="#20C6B7" />
                  <stop offset="100%" stop-color="#4D9ABF" />
                </radialGradient>
              </defs>
              <path
                fill="url(#a)"
                d="M28.589 14.135l-.014-.006c-.008-.003-.016-.006-.023-.013a.11.11 0 01-.028-.093l.773-4.726 3.625 3.626-3.77 1.604a.083.083 0 01-.033.006h-.015a.104.104 0 01-.02-.017 1.716 1.716 0 00-.495-.381zm5.258-.288l3.876 3.876c.805.806 1.208 1.208 1.355 1.674.022.069.04.138.054.209l-9.263-3.923a.728.728 0 00-.015-.006c-.037-.015-.08-.032-.08-.07 0-.038.044-.056.081-.071l.012-.005 3.98-1.684zm5.127 7.003c-.2.376-.59.766-1.25 1.427l-4.37 4.369-5.652-1.177-.03-.006c-.05-.008-.103-.017-.103-.062a1.706 1.706 0 00-.655-1.193c-.023-.023-.017-.059-.01-.092 0-.005 0-.01.002-.014l1.063-6.526.004-.022c.006-.05.015-.108.06-.108a1.73 1.73 0 001.16-.665c.009-.01.015-.021.027-.027.032-.015.07 0 .103.014l9.65 4.082zm-6.625 6.801l-7.186 7.186 1.23-7.56.002-.01a.136.136 0 01.006-.029c.01-.024.036-.034.061-.044l.012-.005a1.85 1.85 0 00.695-.517c.024-.028.053-.055.09-.06a.09.09 0 01.029 0l5.06 1.04zm-8.707 8.707l-.81.81-8.955-12.942a.424.424 0 00-.01-.014c-.014-.019-.029-.038-.026-.06.001-.016.011-.03.022-.042l.01-.013c.027-.04.05-.08.075-.123l.02-.035.003-.003c.014-.024.027-.047.051-.06.021-.01.05-.006.073-.001l9.921 2.046a.164.164 0 01.076.033c.013.013.016.027.019.043a1.757 1.757 0 001.028 1.175c.028.014.016.045.003.078a.238.238 0 00-.015.045c-.125.76-1.197 7.298-1.485 9.063zm-1.692 1.691c-.597.591-.949.904-1.347 1.03a2 2 0 01-1.206 0c-.466-.148-.869-.55-1.674-1.356L8.73 28.73l2.349-3.643a.15.15 0 01.04-.047c.025-.018.061-.01.091 0a2.434 2.434 0 001.638-.083c.027-.01.054-.017.075.002a.19.19 0 01.028.032L21.95 38.05zM7.863 27.863L5.8 25.8l4.074-1.738a.084.084 0 01.033-.007c.034 0 .054.034.072.065a2.91 2.91 0 00.13.184l.013.016c.012.017.004.034-.008.05l-2.25 3.493zm-2.976-2.976l-2.61-2.61c-.444-.444-.766-.766-.99-1.043l7.936 1.646a.84.84 0 00.03.005c.049.008.103.017.103.063 0 .05-.059.073-.109.092l-.023.01-4.337 1.837zM.831 19.892a2 2 0 01.09-.495c.148-.466.55-.868 1.356-1.674l3.34-3.34a2175.525 2175.525 0 004.626 6.687c.027.036.057.076.026.106a2.776 2.776 0 00-.395.528.16.16 0 01-.05.062c-.013.008-.027.005-.042.002H9.78L.831 19.891zm5.68-6.403l4.491-4.491c.422.185 1.958.834 3.332 1.414 1.04.44 1.988.84 2.286.97.03.012.057.024.07.054.008.018.004.041 0 .06a2.003 2.003 0 00.523 1.828c.03.03 0 .073-.026.11l-.014.021-4.56 7.063a.138.138 0 01-.043.05c-.024.015-.058.008-.086.001a2.274 2.274 0 00-.543-.074c-.164 0-.342.03-.522.063h-.001c-.02.003-.038.007-.054-.005a.21.21 0 01-.045-.051l-4.808-7.013zm5.398-5.398l5.814-5.814c.805-.805 1.208-1.208 1.674-1.355a2 2 0 011.206 0c.466.147.869.55 1.674 1.355l1.26 1.26-4.135 6.404a.155.155 0 01-.041.048c-.025.017-.06.01-.09 0a2.097 2.097 0 00-1.92.37c-.027.028-.067.012-.101-.003-.54-.235-4.74-2.01-5.341-2.265zm12.506-3.676l3.818 3.818-.92 5.698v.015a.135.135 0 01-.008.038c-.01.02-.03.024-.05.03a1.83 1.83 0 00-.548.273.154.154 0 00-.02.017c-.011.012-.022.023-.04.025a.114.114 0 01-.043-.007l-5.818-2.472-.011-.005c-.037-.015-.081-.033-.081-.071a2.198 2.198 0 00-.31-.915c-.028-.046-.059-.094-.035-.141l4.066-6.303zm-3.932 8.606l5.454 2.31c.03.014.063.027.076.058a.106.106 0 010 .057c-.016.08-.03.171-.03.263v.153c0 .038-.039.054-.075.069l-.011.004c-.864.369-12.13 5.173-12.147 5.173-.017 0-.035 0-.052-.017-.03-.03 0-.072.027-.11a.76.76 0 00.014-.02l4.482-6.94.008-.012c.026-.042.056-.089.104-.089l.045.007c.102.014.192.027.283.027.68 0 1.31-.331 1.69-.897a.16.16 0 01.034-.04c.027-.02.067-.01.098.004zm-6.246 9.185l12.28-5.237s.018 0 .035.017c.067.067.124.112.179.154l.027.017c.025.014.05.03.052.056 0 .01 0 .016-.002.025L25.756 23.7l-.004.026c-.007.05-.014.107-.061.107a1.729 1.729 0 00-1.373.847l-.005.008c-.014.023-.027.045-.05.057-.021.01-.048.006-.07.001l-9.793-2.02c-.01-.002-.152-.519-.163-.52z"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
