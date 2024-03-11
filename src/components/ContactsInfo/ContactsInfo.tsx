import Link from "next/link";
import data from "@/data/common.json";

export const ContactsInfo = () => {
  const { listContacts } = data.contacts;

  return (
    <ul className="flex flex-col mb-[12px] md:flex-row md:gap-[90px] md:mb-16">
      <div>
        <li className="flex gap-[20px] justify-end mb-6">
          <ul>
            <li>
              <Link
                href={`tel:${listContacts.phone.firstPhone}`}
                className="text-[14px] not-italic font-normal leading-6 text-main-color hover:underline focus:underline md:text-[16px]"
              >
                {listContacts.phone.firstPhone}
              </Link>
            </li>
            <li>
              <Link
                href={`tel:${listContacts.phone.secondPhone}`}
                className="text-[14px] not-italic font-normal leading-6 text-main-color hover:underline focus:underline md:text-[16px]"
              >
                {listContacts.phone.secondPhone}
              </Link>
            </li>
          </ul>
          <p className="text-[12px] not-italic font-extralight leading-5 text-main-color w-[81px]">
            {listContacts.phone.label}
          </p>
        </li>
        <li className="flex gap-[20px] justify-end mb-[26px]">
          <Link
            href={`mailto:${listContacts.email.firstEmail}`}
            className="text-[14px] not-italic font-normal leading-6 text-main-color hover:underline focus:underline md:text-[16px]"
          >
            {listContacts.email.firstEmail}
          </Link>
          <p className="text-[12px] not-italic font-extralight leading-5 text-main-color w-[81px]">
            {listContacts.email.label}
          </p>
        </li>
      </div>
      <li className="flex gap-[20px] justify-end">
        <p className="text-[12px] not-italic font-extralight leading-5 text-main-color">
          {listContacts.socials.label}
        </p>
        <ul className="w-[81px]">
          <li>
            <Link
              href={`https://www.${listContacts.socials.firstSocial}.com`}
              target="_blank"
              className="text-[14px] not-italic font-normal leading-6 text-main-color hover:underline focus:underline md:text-[16px]"
            >
              {listContacts.socials.firstSocial}
            </Link>
          </li>
          <li>
            <Link
              href={`https://www.${listContacts.socials.secondSocial}.com`}
              target="_blank"
              className="text-[14px] not-italic font-normal leading-6 text-main-color hover:underline focus:underline md:text-[16px]"
            >
              {listContacts.socials.secondSocial}
            </Link>
          </li>
          <li>
            <Link
              href={`https://www.${listContacts.socials.thirdSocial}.com`}
              target="_blank"
              className="text-[14px] not-italic font-normal leading-6 text-main-color hover:underline focus:underline md:text-[16px]"
            >
              {listContacts.socials.thirdSocial}
            </Link>
          </li>
          <li>
            <Link
              href={`https://www.${listContacts.socials.forthSocial}.com/`}
              target="_blank"
              className="text-[14px] not-italic font-normal leading-6 text-main-color hover:underline focus:underline md:text-[16px]"
            >
              {listContacts.socials.forthSocial}
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
