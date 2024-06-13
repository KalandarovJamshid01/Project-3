"use client";
import { LuUploadCloud } from "react-icons/lu";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
// import { useRouter } from "next/router";
import MainSectionBanner from "@/components/mainHeader";

const Contact = () => {
  //   const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      return data.result;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleUploadImages = async (body) => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://for-images.kalandarovjamshid01.workers.dev/images",
        data: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={"relative overflow-hidden"}>
      <div className="containerr">
        <main>
          <MainSectionBanner
            title={"청주지붕공사"}
            text={"30년 경력의 지붕장인 청주지붕공사 입니다."}
            desc={"지붕개량/칼라강판/기와/슁글/징크 시공전문"}
            img="/images/mainBanner.png"
          />
        </main>

        <div className={"mt-20 mb-10"}>
          <h1 className={"md:text-2xl text-[22px] font-bold text-center"}>
            문의하기선택됨{" "}
          </h1>
          <p className={"md:text-xl text-[18px] font-normal text-center"}>
            나의 문의/신청 내역
          </p>
        </div>
        <div className="relative h-auto mx-1">
          <form
            className={"flex flex-col px-2"}
            onSubmit={async (e) => {
              e.preventDefault();

              const uploadImage = await handleUpload();

              const formElement = e.target;
              const form = new FormData(formElement);

              const img = {
                img_url: uploadImage?.secure_url,
                file_name: uploadImage?.original_filename,
                width: uploadImage?.width,
                bytes: uploadImage?.bytes,
                height: uploadImage?.height,
                format: uploadImage?.format,
                title: form.get("title"),
                context: form.get("short-description"),
                folder: "contact_image",
              };

              await handleUploadImages(img);

              const data = {
                title: form.get("title"),
                mail: form.get("mail"),
                contact: form.get("contact"),
                short_description: form.get("short-description"),
                long_description: form.get("long-description"),
                img_url: uploadImage?.secure_url,
              };

              const config = {
                method: "post",
                url: "https://project-1-submissions.kalandarovjamshid01.workers.dev",
                data: data,
              };

              axios(config)
                .then((response) => {
                  console.log(JSON.stringify(response.data));
                  //   router.push("/after-construction");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            <label
              htmlFor="title"
              className={"sm:text-sm text-[12px] font-bold mb-2"}
            >
              제목
            </label>
            <input
              className={
                "md:px-8 sm:px-6 px-5 md:py-4 sm:py-3 py-2 w-full md:w-2/3"
              }
              id="title"
              type="text"
              name="title"
            />

            <label
              htmlFor="contact"
              className={"sm:text-sm text-[12px] font-bold mt-6 mb-2"}
            >
              연락처
            </label>
            <input
              id="contact"
              type="text"
              className={
                "md:px-8 sm:px-6 px-5 md:py-4 sm:py-3 py-2 w-full md:w-96"
              }
              name="contact"
            />

            <label
              htmlFor="mail"
              className={"sm:text-sm text-[12px] font-bold mt-6 mb-2"}
            >
              이메일
            </label>
            <input
              id="mail"
              type="text"
              className={
                "md:px-8 sm:px-6 px-5 md:py-4 sm:py-3 py-2 w-full md:w-96"
              }
              name="mail"
            />

            <label
              htmlFor="short-description"
              className={"sm:text-sm text-[12px] font-bold mt-6 mb-2"}
            >
              단문 입력
            </label>
            <input
              id="short-description"
              type="text"
              className={
                "md:px-8 sm:px-6 px-5 md:py-4 sm:py-3 py-2 w-full md:w-2/3"
              }
              name="short-description"
            />

            <label
              htmlFor="long-description"
              className={"sm:text-sm text-[12px] font-bold mt-6 mb-2"}
            >
              장문 입력
            </label>
            <input
              id="long-description"
              type="textarea"
              className={
                "md:px-8 sm:px-6 px-5 md:py-4 sm:py-3 py-2 w-full md:w-2/3"
              }
              name="long-description"
            />

            <div
              className="w-80 h-48 flex flex-col items-center justify-center relative bg-gray-200 cursor-pointer mt-6"
              onClick={() => document.getElementById("fileInput").click()}
            >
              {previewUrl ? (
                <div className="mt-4">
                  <Image
                    src={previewUrl}
                    alt={"previewUrl"}
                    layout="fill"
                    objectFit="cover"
                    className="absolute mt-2 w-64 h-64 object-cover"
                  />
                </div>
              ) : (
                <div className={"flex flex-col items-center justify-center"}>
                  <LuUploadCloud size={32} />
                  <p className="mt-2 text-[12px] sm:text-sm md:text-base text-gray-600">
                    사진등록
                  </p>
                </div>
              )}
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>

            <label
              htmlFor="select-list"
              className={"text-[12px] sm:text-sm font-bold mt-6 mb-2"}
            >
              목록 선택
            </label>
            <select
              className={"sm:px-8 px-6 sm:py-4 py-3 w-full md:w-96"}
              name="select-list"
              id="select-list"
            >
              <option value="lorem">Lorem ipsum</option>
              <option value="lorem1">Lorem ipsum</option>
            </select>

            <label
              htmlFor="short-description"
              className={
                "text-[14px] md:text-base font-bold mt-6 flex items-center gap-2"
              }
            >
              <input
                type="checkbox"
                className={"lg:w-12 md:w-8 w-7 md:h-8 lg:h-12 h-7"}
              />
              개인정보 수집 및 이용에 동의합니다.
            </label>

            <div className={"px-14"}>
              <a
                href="#"
                className={"underline text-[14px] md:text-base font-normal"}
              >
                내용보기
              </a>
            </div>

            <div
              className={
                "w-full flex items-center justify-end mt-6 mb-16 gap-8"
              }
            >
              <button
                type={"button"}
                className={
                  "py-2 px-4 border border-[#0D9488] text-[#0D9488] w-52 rounded"
                }
              >
                취소
              </button>
              <button
                disabled={!selectedFile}
                type={"submit"}
                className={
                  "py-2 px-4 border-none bg-[#0D9488] text-white w-52 rounded"
                }
              >
                등록
              </button>
            </div>
          </form>
        </div>
      </div>
      <svg
        className={"absolute -bottom-96 -z-10"}
        xmlns="http://www.w3.org/2000/svg"
        width="1280"
        height="2219"
        viewBox="0 0 1280 2219"
        fill="none"
      >
        <path
          d="M-947.225 1038.5L394.551 -0.00198519L1736.33 1341.77L-37 2227L-947.225 1038.5Z"
          fill="#FAFAFA"
        />
      </svg>
    </div>
  );
};

export default Contact;
