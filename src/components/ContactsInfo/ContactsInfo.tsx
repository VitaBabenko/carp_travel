import Link from "next/link";
import data from "@/data/common.json";

export const ContactsInfo = () => {
  const { listContacts } = data.contacts;

  return (
    <ul className="flex flex-col mb-[12px] md:flex-row md:gap-[90px] md:mb-14 lg:flex-col lg:mb-0">
      <div>
        <li className="flex gap-[20px] justify-end mb-6 lg:mb-14">
          <ul>
            <li>
              <Link
                href={`tel:${listContacts.phone.firstPhone}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[14px] not-italic font-normal leading-6 text-main-color md:text-[16px] hover focus:outline-error-color"
              >
                {listContacts.phone.firstPhone}
              </Link>
            </li>
            <li>
              <Link
                href={`tel:${listContacts.phone.secondPhone}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[14px] not-italic font-normal leading-6 text-main-color md:text-[16px] hover focus:outline-error-color"
              >
                {listContacts.phone.secondPhone}
              </Link>
            </li>
          </ul>
          <p className="text-[12px] not-italic font-extralight leading-5 text-main-color w-[81px]">
            {listContacts.phone.label}
          </p>
        </li>
        <li className="flex gap-[20px] justify-end mb-[26px] lg:mb-[100px]">
          <Link
            href={`mailto:${listContacts.email.firstEmail}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-[14px] not-italic font-normal leading-6 text-main-color md:text-[16px] hover focus:outline-error-color"
          >
            {listContacts.email.firstEmail}
          </Link>
          <p className="text-[12px] not-italic font-extralight leading-5 text-main-color w-[81px]">
            {listContacts.email.label}
          </p>
        </li>
      </div>
      <li className="flex gap-[20px] justify-end lg:flex-row-reverse lg:justify-start">
        <p className="text-[12px] not-italic font-extralight leading-5 text-main-color lg:w-[81px]">
          {listContacts.socials.label}
        </p>
        <ul className="w-[81px]">
          <li>
            <Link
              href={`https://www.${listContacts.socials.firstSocial}.com`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[14px] not-italic font-normal leading-6 text-main-color md:text-[16px] hover focus:outline-error-color"
            >
              {listContacts.socials.firstSocial}
            </Link>
          </li>
          <li>
            <Link
              href={`https://www.${listContacts.socials.secondSocial}.com`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[14px] not-italic font-normal leading-6 text-main-color md:text-[16px] hover focus:outline-error-color"
            >
              {listContacts.socials.secondSocial}
            </Link>
          </li>
          <li>
            <Link
              href={`https://www.${listContacts.socials.thirdSocial}.com`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[14px] not-italic font-normal leading-6 text-main-color md:text-[16px] hover focus:outline-error-color"
            >
              {listContacts.socials.thirdSocial}
            </Link>
          </li>
          <li>
            <Link
              href={`https://www.${listContacts.socials.forthSocial}.com/`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[14px] not-italic font-normal leading-6 text-main-color md:text-[16px] hover focus:outline-error-color"
            >
              {listContacts.socials.forthSocial}
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
