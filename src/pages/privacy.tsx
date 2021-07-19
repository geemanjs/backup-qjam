import { Container, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import { NextSeo } from "next-seo";
import { StandardLayout } from "../components/Layouts/Standard";

function seoConfig() {
  return {
    title: `Privacy | QJAM`,
    description: `Get the QJAM app to live video chat with your favourite artists and receive digital signings.`,
    openGraph: {
      title: `Privacy | QJAM`,
      description: `Get the QJAM app to live video chat with your favourite artists and receive digital signings.`,
      images: [
        {
          url: "https://res.cloudinary.com/qjam/image/upload/v1575666417/website/SEO/Screenshot_2019-12-06_at_20.55.04.png",
          width: 2504,
          height: 1408,
          alt: `QJAM – Meet your favourite artists.`,
        },
      ],
      site_name: "QJAM",
    },
    twitter: {
      cardType: "summary_large_image",
    },
  };
}

const Privacy = () => (
  <StandardLayout>
    <NextSeo {...seoConfig()} />
    <Container py={8}>
      <Heading pb={2}>Privacy and Cookies Policy</Heading>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        WHO WE ARE{" "}
      </Heading>
      <Text as="p" mb={2}>
        QJAM is a limited company registered in England and Wales.
      </Text>
      <Text as="p" mb={2}>
        This Privacy and Cookies Policy (“Privacy Policy”) sets out how we deal
        with data we collect from you when you are using or accessing the QJAM
        application, service or web site. It also covers our treatment of any
        data that our business partners share with us or that we share with our
        business partners.
      </Text>
      <Text as="p" mb={2}>
        Our website located at http://qjam.com (“Site”), the QJAM app (“App”),
        our “Software” (which includes the software we developed to run our App,
        any related documentation or data distributed to you and any future
        fixes, updates and upgrades), and the various services that we provide
        (“Service”) (we refer to the Site, the App, the Software and the Service
        collectively as “QJAM”).
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        WHAT DATA DO WE COLLECT?{" "}
      </Heading>
      <Text as="p" mb={2}>
        We collect a variety of data, including “personal data” (data that
        identifies you). More information is set out below.
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        WITHIN THE APP{" "}
      </Heading>
      <Text as="p" mb={2}>
        We collect data you expressly provide, for example, any information you
        provide when you create an account as well as any uploads, posts,
        messages, lists, flags and any other information or interaction with or
        involving our Software. We also collect and generate information which
        arises out of your usage of the Software but may not be deliberately
        provided by you; this includes information about how you use our
        Software (for example, how long you spend in a particular section or
        engaged in a particular activity) as well as information derived from
        information you have provided (for example, location of your photos,
        when they were taken, who the other people are in pictures or videos you
        have uploaded).
      </Text>
      <Text as="p" mb={2}>
        We collect information about you generated expressly or otherwise by
        other people, for example messages sent to you, or content uploaded by
        other users which relates to you in some way, for example a picture of
        you.
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        OUTSIDE THE APP{" "}
      </Heading>
      <Text as="p" mb={2}>
        You may also choose to connect to a third party social networking
        service (e.g. Facebook) via QJAM which authorizes us to interact with
        your account including for the purpose of accessing and publishing data
        (e.g. your image) within QJAM as well as on these third party services.
      </Text>
      <Text as="p" mb={2}>
        We may also collect non-personal data. For example, we may track and
        compile data with respect to general Site usage on a non-personally
        identifiable basis. When you visit our Site or use the App we may
        automatically log your IP (internet protocol) address which is a unique
        identifier for your computer or other access device. This will typically
        tell us the date and time of your visit to our Site, your choice of ISP
        (internet service provider) and your geographic location. Other
        non-personal data, such as randomly assigned numeric identifiers, may be
        collected by our partners for statistical purposes. Non-personal data
        relating to application usage such as the kind of mobile devices our
        users use, the operating system on our users’ mobile devices, when the
        App is downloaded and how and how often the App is used may be collected
        by our analytics service providers through receiving and storing users’
        unique device identifiers such as the Apple Advertising Identifier (a
        non-permanent, non-personal device identifier associated with users’
        Apple mobile devices). All of this information is used by us internally
        for the purpose of understanding how QJAM is being used and improving
        the App.
      </Text>
      <Text as="p" mb={2}>
        Some features of QJAM allow you to provide content to QJAM, such as
        photos, videos or written comments. All content submitted by you to the
        QJAM may be retained by us indefinitely, even after you terminate your
        account. We may continue to disclose such content to third parties in a
        manner that does not reveal personal information, as described in this
        Privacy Policy.
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        HOW DO WE USE THE DATA WE COLLECT?{" "}
      </Heading>
      <strong>Personal data</strong>
      <Text as="p" mb={2}>
        Information you post is shared with the public according to the
        preferences accepted or set by you when you join QJAM or updated by you
        at a later time under the Settings options. Your profile is visible to
        others in accordance with your settings.
      </Text>
      <Text as="p" mb={2}>
        If you submit any information to QJAM by way of posting, you should have
        no expectation of privacy with respect to any such submission. Please
        keep in mind that whenever you give out personal information online,
        that information can be collected and used by people you don’t know. We
        cannot guarantee the security of any information you disclose online;
        you make such disclosures at your own risk.
      </Text>
      <Text as="p" mb={2}>
        We may collect other personal data from you so that we can provide QJAM
        to you and enhance your experience of QJAM. For example, we may use your
        posts to recommend other content to you and to make you aware of special
        offers, new products or services or functionality changes relating to
        QJAM. We may personalize your repeat visits to our Site and formulate
        our marketing on our Site so that it is targeted based on your online
        behavior. We may use your personal data to contact you and, if you
        agree, to enable our affiliates / partners / advertisers to contact you.
        For example, we may contact you to give you notices about your QJAM
        account, app updates, new QJAM services and features or to fulfil the
        purpose of a QJAM feature. We may also use your personal data to contact
        you about certain of our partners’ services that may be of interest to
        you. If you do not want us to use your information in this way, please
        adjust your Alert Settings in your account profile or email us at
        info@qjam.com
      </Text>
      <strong>Non-personal data</strong>
      <Text as="p" mb={2}>
        We may use anonymous data collected from QJAM for site administration,
        analytics, advertising and promotional purposes, and we may share such
        information with other entities (such as service providers) for such
        purposes. We may also aggregate data to enable research or analysis so
        that we can better understand and serve you and others. For example, we
        may conduct research on your demographics and usage. Although this
        aggregated data may be based in part on personal data, it does not
        identify you personally. QJAM may share this type of anonymous data with
        others, including service providers, our affiliates, agents and current
        and prospective business partners. We may use your anonymous data
        outside of QJAM to improve third party marketing or use your data in
        combination with third party data to improve your experiences both in
        and outside QJAM. We may retain your IP address and/or other
        device-identifying data in order to help us diagnose problems with our
        servers, to administer QJAM including personalizing content or links
        relevant to your geographic area or device-type, to verify that your
        account is not being used by others, to gather broad anonymous
        demographic data (such as the number of visitors from a geographic
        area), to enforce compliance with our Terms of Use or otherwise in order
        to protect our services, Sites, customers, or other third parties.
      </Text>
      <Text as="p" mb={2}>
        We use analysis tools including Google Analytics Advertising Features,
        Mixpanel and other similar services. These provide us with information
        about how our users use the App. These services use the data they
        collect (such as platform, application version, device identifier,
        device model, manufacture and operating system version, session
        stop/start time, location, time zone and network status (e.g. WiFi)) to
        create reports for us to analyze our user base and improve the app.
      </Text>
      <Text as="p" mb={2}>
        You may opt out of the Google Analytics Advertising Feature at
        https://tools.google.com/dlpage/gaoptout/
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        WHAT CONTROL DO I HAVE OVER QJAM’S USE OF MY PERSONAL DATA?{" "}
      </Heading>
      <Text as="p" mb={2}>
        You may delete your posts at any time – this will remove your posts from
        the Software. We do not guarantee the ability to delete data from
        backend services. If you would like us to delete/correct personally
        identifiable data, let us know and we will action your request as soon
        as practicable. If you would like to dictate what is published and what
        others can see, please update your preferences accordingly. If you would
        like to modify the ways we access and use data we obtain as a result of
        our interaction with third party login services such as Facebook, please
        change your app settings on these third party login services. Make sure
        you keep your account and password secure and that access to your device
        is protected by password. Your account information will be protected by
        a password for your privacy and security. You need to prevent
        unauthorized access to your account and personal information by
        selecting and protecting your password appropriately and limiting access
        to your computer or device and by signing off after you have finished
        accessing your account.
      </Text>
      <Text as="p" mb={2}>
        You can access information associated with your account by logging into
        QJAM.
      </Text>
      <Text as="p" mb={2}>
        California Privacy Rights: Under California Civil Code sections
        1798.83-1798.84, California residents are entitled to ask us for a
        notice identifying the categories of personal customer information which
        we share with our affiliates and/or third parties for marketing
        purposes, and providing contact information for such affiliates and/or
        third parties. If you are a California resident and would like a copy of
        this notice, please submit a written request to QJAM, 90 Long Acre,
        London WC2E 9RA, UK. Email info@qjam.com
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        WILL WE SHARE YOUR DATA WITH THIRD PARTIES?{" "}
      </Heading>
      <Text as="p" mb={2}>
        We may share non-personal data with third parties to, for example (but
        not by way of limitation), improve QJAM and to enable data aggregation
        (as described above).
      </Text>
      <Text as="p" mb={2}>
        With your consent, we may share your personal data with subcontractors
        (only when necessary), our affiliates and/or partners (subject to
        confidentiality obligations to use it only for the purposes for which we
        disclose it to them and pursuant to our instructions) and advertisers.
        For example, our partners may use your email address to contact you in
        relation to your favourite events. We will require our partners to allow
        you to notify them if you want to opt-out from receiving any such emails
        or other promotional materials from them. If you do not want to receive
        such emails from our partners, please contact them directly or use the
        relevant ‘Unsubscribe’ link in our partners’ emails (or our partners’
        opt-out mechanism, as applicable).
      </Text>
      <Text as="p" mb={2}>
        We may also share personal data with interested parties in the event
        that QJAM anticipates a change in control or the acquisition of all or
        part of our business or assets or with interested parties in connection
        with the licensing of our technology.
      </Text>
      <Text as="p" mb={2}>
        If QJAM is sold or makes a sale or transfer, we may, in our sole
        discretion, transfer, sell or assign your personal data to a third party
        as part of or in connection with that transaction. Upon such transfer,
        the Privacy Policy of the acquiring entity may govern the further use of
        your personal data. In all other situations your data will still remain
        protected in accordance with this Privacy Policy (as amended from time
        to time).
      </Text>
      <Text as="p" mb={2}>
        We may share your personal data at any time if required for legal
        reasons or in order to enforce our Terms of Use or this Privacy Policy.
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        HOW DOES QJAM PROTECT CUSTOMER DATA?{" "}
      </Heading>
      <Text as="p" mb={2}>
        QJAM is concerned with keeping your data secure and protecting it from
        inappropriate disclosure. We implement a variety of security measures to
        ensure the security of your personal data on our systems. Any personal
        data collected by us is contained behind secured networks and is only
        accessible by a limited number of employees who have special access
        rights to such systems. Where sensitive data is collected by us it will
        be transmitted and protected via Secure Socket Layer technology and
        HTTPS protocol and encrypted in our databases to be accessed only as
        stated above. If and when we use subcontractors to store your data, we
        will not relinquish control of your personal data or expose it to
        security risks that would not have arisen had the data remained in our
        possession. However, unfortunately, no transmission of data over the
        internet is guaranteed to be completely secure. It may be possible for
        third parties not under the control of QJAM to intercept or access
        transmissions or private communications unlawfully. While we strive to
        protect your personal data, we cannot ensure or warrant the security of
        any personal data you transmit to us. Any such transmission is done at
        your own risk. If you believe that your interaction with us is no longer
        secure, please contact us.
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        COOKIES{" "}
      </Heading>
      <Text as="p" mb={2}>
        Cookies are small files of letters and numbers downloaded onto your
        computer or access device when you access certain websites. The use of
        cookies is standard on the internet and many websites use them to
        improve the user experience. There are different types of cookies
        (described further below). For more information about cookies and how
        they work see allaboutcookies.org
      </Text>
      BY USING QJAM, YOU AGREE THAT WE CAN PLACE THE FOLLOWING TYPES OF COOKIES
      ON YOUR DEVICE :
      <ol type="a">
        <li>
          Strictly necessary cookies – These cookies make our Site work. These
          cookies are essential in order to enable you to move around our Site
          and use our features, such as accessing secure areas. Without these
          cookies, we would not be able to remember your previous actions,
          determine whether you are logged in or not or enable you to see the
          electronic programme guide tailored to your chosen provider/region.
        </li>
        <li>
          Performance cookies – These cookies improve the performance of our
          Site. These cookies collect information about how visitors use our
          Site, for instance which pages visitors go to most often, and if
          visitors get error messages from web pages. These cookies don’t
          identify you personally. All information these cookies collect is
          aggregated and anonymous. These cookies enable us to manage errors and
          the performance and design of the Site, to track ad response rates and
          your visits to our affiliate websites, and to show you which shows are
          most popular.
        </li>
        <li>
          Functionality cookies – These cookies save you time. These cookies
          remember your user name and can also be used to remember settings that
          you can customise. These cookies allow us to remember choices you make
          (e.g. whether you want to share your activity on Facebook) and provide
          enhanced, more personal features. They may also be used to provide
          services you have asked for such as watching a video or commenting.
          Without these cookies, we won’t be able to distinguish you from other
          users and, as a result, save you time.
        </li>
        <li>
          Targeting or advertising cookies – These cookies make the advertising
          you see relevant. These cookies are used to deliver adverts or links
          more relevant to you and your interests. They are also used to limit
          the number of times you see an ad as well as help measure the
          effectiveness of ad campaigns. They may be placed by us, or
          advertising networks with our, or our affiliate’s, permission. Without
          these cookies, you may still receive advertising – the advertising,
          however, will be less relevant to you.
        </li>
        <li>
          Third party cookies – Our Site allows third parties to set cookies on
          your device (e.g. Facebook). This means that when we display content
          from a third party this third party may set their own cookies or
          similar technologies onto your device. We do not control the use of
          such cookies and in many instances have no access to the data
          collected by these third parties. Third party use of cookies is
          subject to their respective privacy policies.
        </li>
      </ol>
      <br />
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        How to manage cookies{" "}
      </Heading>
      You can manage cookies to a certain extent by amending and setting
      controls on your internet browser (e.g. via your “Preferences”). You
      should be able to:
      <ol type="a">
        <li>
          block specific cookies (e.g. from third parties and advertisers) or
          all cookies either across the web or from a particular website; and
        </li>
        <li>receive notifications when cookies are set.</li>
      </ol>
      <Text as="p" mb={2}>
        You may also limit or prevent the placement of cookies by advertising
        networks or by setting your preferences for the major technology
        providers at choice.live.com
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        INDIVIDUALS UNDER 18 YEARS OF AGE{" "}
      </Heading>
      <Text as="p" mb={2}>
        You must not use QJAM unless you are aged 13 or older. If you are aged
        13-18 you should have a parent’s or guardian’s approval to use QJAM and
        review our Terms with a parent or guardian to make sure you and your
        parent/guardian understand them. If you are under 13 and you access QJAM
        by lying about your age, or are otherwise in breach of our Terms and
        this Privacy Policy, you must immediately stop using QJAM and terminate
        your Account. We will block your access to QJAM if we determine that you
        are misrepresenting your age or in breach of these Terms. Please note
        that some of the content and/or advertising on QJAM may be unsuitable
        for minors under the age of 13.
      </Text>
      <Text as="p" mb={2}>
        QJAM is not directed at children under 13. If you become aware that your
        child has been using QJAM without your consent, please contact us at
        info@qjam.com. We do not knowingly collect personal data from children
        under 13. If we become aware that a child has provided us with personal
        data, we will take steps to remove such information and terminate the
        child’s account.
      </Text>
      <Text as="p" mb={2}>
        If you become aware that your child under 13 has provided any of our
        partners with personal data without your consent, you may elect to
        notify such partner directly and request that it remove or destroy any
        personal information in its possession concerning your child. QJAM
        cannot be responsible for ensuring that our partners remove or destroy
        such personal information. However, QJAM requires its partners to agree
        to remove or destroy such personally identifiable information if
        requested to do so.
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        THIRD PARTY LINKS AND CO-BRAND RELATIONSHIPS{" "}
      </Heading>
      <Text as="p" mb={2}>
        In an attempt to enhance users’ experiences of QJAM, we may choose
        various third party websites to link to, and frame within QJAM. We also
        participate in co-branding and other relationships to offer e-commerce
        and other services and features to our users. However, even if the third
        party is affiliated with us, we have no control over these linked sites,
        each of which has separate privacy and data collection practices
        independent of us. Data collected by our co-brand partners or third
        party web sites (even if offered on or through QJAM) is not received by
        us. As such, we have no responsibility or liability for the treatment of
        your data by these sites. These linked sites are for your convenience
        and you access them at your own risk. When you sign into QJAM using a
        third party login service (e.g. Facebook), your use is also subject to
        these third party’s Privacy Policies and in accordance with your account
        settings with these third parties.
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        TRANSFER OF BUSINESS ASSETS{" "}
      </Heading>
      <Text as="p" mb={2}>
        In some cases, we may choose to buy or sell assets. In these types of
        transactions, user information is typically one of the transferred
        business assets. Moreover, if we, or substantially all of our assets,
        were acquired, or if we go out of business or enter bankruptcy, user
        information would be one of the assets that is transferred or acquired
        by a third party. You acknowledge that such transfers may occur, and
        that any acquirer of us or our assets may continue to use your personal
        information as set forth in this Privacy Policy.
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        INTERNATIONAL TRANSFER OF DATA{" "}
      </Heading>
      <Text as="p" mb={2}>
        Your information may be stored and processed in the US or other
        countries or jurisdictions outside the US where QJAM has facilities. We
        are currently storing data in the EU and so, by using QJAM, you are
        permitting and consenting to the transfer of information, including
        personal data, outside of the US.
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        NOTIFICATION OF CHANGES AND ACCEPTANCE OF POLICY{" "}
      </Heading>
      <Text as="p" mb={2}>
        We keep our Privacy Policy under review and will place any updates on
        this webpage. This version is dated May 5, 2016. By using QJAM, you
        consent to the collection and use of data by us as set out in this
        Privacy Policy. Continued access or use of QJAM shall constitute your
        express acceptance of any modifications to this Privacy Policy.
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        INTERPRETATION{" "}
      </Heading>
      <Text as="p" mb={2}>
        All uses of the word “including” mean “including but not limited to” and
        the enumerated examples are not intended to in any way limit the term
        which they serve to illustrate. Any email addresses set put in this
        policy may be used solely for the purpose for which they are stated to
        be provided, and any unrelated correspondence will be ignored. Unless
        otherwise required by law, we reserve the right to not respond to
        emails, even if they relate to a legitimate subject matter for which we
        have provided an email address. As a matter of common sense, you are
        more likely to get a reply if your request or question is polite,
        reasonable and there is no relatively obvious other way to deal with or
        answer your concern or question (e.g. FAQs, other areas of our website
        etc.).
      </Text>
      <Text as="p" mb={2}>
        Our staff are not authorised to contract on behalf of QJAM, waive rights
        or make representations (whether contractual or otherwise). If anything
        contained in an email from a QJAM address contradicts anything in this
        policy, our terms or any official public announcement on our website, or
        is inconsistent with or amounts to a waiver of any QJAM rights, the
        email content shall be read down to grant precedence to the latter. The
        only exception to this is genuine correspondence expressed to be from
        the QJAM legal department.
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        TERMS OF USE{" "}
      </Heading>
      <Text as="p" mb={2}>
        Please also see our Terms of Use which set out the terms, disclaimers,
        and limitations of liability governing your use of QJAM.
      </Text>
      <Heading as="h3" fontSize="md" mt={6} mb={2}>
        HOW TO CONTACT US{" "}
      </Heading>
      <Text as="p" mb={2}>
        If you have a question about this Privacy Policy or a complaint or want
        to know more about how your data may be used by us or would like to
        access or delete your data held by us or correct any inaccuracies,
        please email us at privacy@qjam.com and we will respond as promptly as
        we can, or in the time period prescribed by law, whichever is sooner.
      </Text>
    </Container>
  </StandardLayout>
);

export default Privacy;
