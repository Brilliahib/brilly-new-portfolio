import style from "./style.module.scss";

export default function index() {
  return (
    <>
      <div className={style.footer}>
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-12">
          <div className="get-in-touch">
            <h1 className="text-6xl font-semibold text-white leading-normal mb-24">
              Suka kopi, <br />
              mau ngopi bareng? <br />
              Have any project ideas? Ask something?
            </h1>
            <hr
              className="border-gray-200"
              style={{
                border: "0.1px solid rgba(255, 255, 255, 0.1) !important",
              }}
            />
          </div>
          <div className="contact mt-24 flex gap-x-8">
            <div className="contact-img">
              <img
                src="/asset/img/brilly-photo.jpeg"
                alt=""
                width={150}
                className="rounded-full"
              />
            </div>
            <div className="contact-info text-white">
              <h1 className="text-3xl font-medium mb-4">Contact me via</h1>
              <p className="flex gap-x-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
                brilliahib21@gmail.com
              </p>
              <p className="flex gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
                @brilliahib69
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
