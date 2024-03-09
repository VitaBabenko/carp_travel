import { ContactsInfo, ContactsForm } from "@/components";

import data from "@/data/common.json";

import styles from "./Contacts.module.css";

export const Contacts = () => {
  const { titleContacts } = data.contacts;

  return (
    <section className={`${styles.bg_section} h-full`}>
      <div className="container mx-auto">
        <h2 className="text-[40px] not-italic uppercase font-thin leading-[1.4] tracking-[-1.6px] text-main-color mb-9">
          {titleContacts.label}
          <span className="font-medium ml-2">{titleContacts.labelSpan}</span>
        </h2>
        <ContactsInfo />
        <ContactsForm />
      </div>
    </section>
  );
};
