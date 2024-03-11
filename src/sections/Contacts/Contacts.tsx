import { ContactsInfo, ContactsForm, HeadLineSection } from "@/components";

import data from "@/data/common.json";

import styles from "./Contacts.module.css";

export const Contacts = () => {
  const { titleContacts } = data.contacts;

  return (
    <section id="contacts" className={`${styles.bg_section} h-full`}>
      <div className="container mx-auto">
        <HeadLineSection
          stylesTitle="mb-9"
          label={titleContacts.label}
          labelSpan={titleContacts.labelSpan}
        />
        <ContactsInfo />
        <ContactsForm />
      </div>
    </section>
  );
};
