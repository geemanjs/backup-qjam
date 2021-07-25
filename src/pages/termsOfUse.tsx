import { Container, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import { NextSeo } from "next-seo";
import { StandardLayout } from "../components/Layouts/Standard";

function seoConfig() {
  return {
    title: `Terms Of Use | QJAM`,
    description: `Get the QJAM app to live video chat with your favourite artists and receive digital signings.`,
    openGraph: {
      title: `Terms Of Use`,
      description: `Get the QJAM app to live video chat with your favourite artists and receive digital signings.`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/v1575666417/website/SEO/Screenshot_2019-12-06_at_20.55.04.png`,
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
    <Container pt={4}>
      <Heading as="h2" fontSize="md" pb={2} mb={2}>
        Terms of Use
      </Heading>
      <Text textAlign="justify">
        <Heading as="h3" fontSize="md" mb={2}>
          APPLICATION OF THESE TERMS
        </Heading>
        <Text as="p" mb={2}>
          Welcome to QJAM!
        </Text>
        <Text as="p" mb={2}>
          These Terms of Use (“Terms”) apply to your use of our website located
          at https://qjam.com (“Site”) and the QJAM application (“App”) and any
          new features or services offered through either (all known as “QJAM”).
        </Text>
        <Text as="p" mb={2}>
          When you sign up to use QJAM you will be asked to confirm that you
          agree with these Terms so please read them carefully. Please note that
          we may change or update these Terms. We will post any changes
          (including the effective date) to our Site so please revisit them
          every so often because we will assume that you agree with them if you
          continue to use QJAM.
        </Text>
        <Heading as="h3" fontSize={2} mb={2}>
          LICENSE TERMS
        </Heading>
        <Text as="p" mb={2}>
          When you access QJAM, we allow you to use our software where
          “software” includes the software we developed to run our App, any
          related documentation or data distributed to you and any future fixes,
          updates and upgrades, solely for you to use QJAM in accordance with
          these Terms.
        </Text>
        <Text as="p" mb={2}>
          This license is non-transferable, for your personal use and for use on
          computers and/or devices that you own or control and is subject to you
          doing / not doing all these things:
        </Text>
        <ol type="a">
          <li>
            complying with the rules set out in the Apple App Store Terms of
            Service (if this is how you downloaded or installed the QJAM app on
            an Apple device) and any other terms that apply to Apps or Sites you
            access via QJAM;
          </li>

          <li>
            not copying our software (other than a single copy for your own
            backup purposes);
          </li>
          <li>
            not removing, modifying or obscuring any copyright, trade mark or
            other proprietary rights notices contained in QJAM;
          </li>
          <li>not reverse engineering, decompiling, or disassembling QJAM;</li>
          <li>
            not granting any rights in QJAM to anyone else without our prior
            written consent;
          </li>
          <li>
            not uploading anything to QJAM that contains any viruses, worms,
            malware, Trojan horses or other harmful or destructive content
            designed to interrupt, destroy or limit the functionality of any
            aspect of QJAM;
          </li>
          <li>
            not exporting or re-exporting the software in violation of US export
            laws;
          </li>
          <li>
            not being located in a country that is subject to a US Government
            embargo, or that has been designated by the US Government as a
            “terrorist supporting” country or being listed on any US Government
            list of prohibited or restricted parties;
          </li>
          <li>
            not using QJAM for any commercial purpose without our prior written
            consent;
          </li>
          <li>
            not accessing, creating or modifying the source code of our software
            in any way;
          </li>
          <li>
            not using QJAM in any way that impedes the normal enjoyment of, or
            performance by, QJAM by another user;
          </li>
          <li>
            not using QJAM to track, monitor or analyse user behaviour in any
            manner;
          </li>
          <li>
            not attempting to compromise any security measures employed by QJAM
            or QJAM’s third party partners, including, but not limited to,
            tampering with such measures;
          </li>
          <li>
            complying with all other terms and warranties of these Terms and
            applicable laws and regulations and
          </li>
          <li>
            not taking any action that imposes or may impose (as determined by
            us in our sole discretion) an unreasonable or disproportionately
            large load on our (or our third party providers’) infrastructure.
          </li>
        </ol>
        <Text as="p" mb={2}>
          If you don’t comply with these conditions, we may terminate your
          access to QJAM and take other action we deem appropriate.
        </Text>
        <Heading as="h3" fontSize="md" mb={2}>
          USER GENERATED CONTENT
        </Heading>
        <Text as="p" mb={2}>
          QJAM is set up to display content generated by users (“User Generated
          Content”). We don’t review, and cannot review, all of the content
          accessible via QJAM, and cannot therefore be responsible for it. We
          don’t endorse any content uploaded, or believe such content to be
          accurate, useful or non-harmful. QJAM may (but hopefully won’t)
          display content that is offensive, indecent, or otherwise
          objectionable, as well as content containing technical inaccuracies,
          typographical mistakes, and other errors. Each user chooses, and is
          responsible for, the content that is uploaded via QJAM, and your
          access of User Generated Content is solely at your own risk.
        </Text>
        <Text as="p" mb={2}>
          If you submit content to or via QJAM, you agree to the following:
        </Text>
        <ol type="a">
          <li>
            you will only upload content that you own or are permitted to upload
            having obtained the necessary license or permission to use it, as
            well as the right to sublicense the content to us, without
            limitation;
          </li>
          <li>
            you grant us a revocable, non-exclusive, royalty-free, worldwide and
            transferable license to use, edit, modify, truncate, aggregate,
            reproduce, distribute, prepare derivative works of, display,
            perform, and otherwise fully exploit the content you upload to QJAM,
            including the right to sub-license use of the content, in any medium
            or method, whether now known or hereafter devised;
          </li>

          <li>
            you will not post or distribute any content which infringes any
            intellectual property (“IP”) rights or any other party’s right to
            privacy, publicity rights or contractual rights;
          </li>
          <li>
            you agree not to assert your “moral rights” (rights of authorship
            and rights not to have your work treated in a derogatory manner) in
            any content uploaded via QJAM;
          </li>
          <li>
            you will not upload another person’s sensitive personal data without
            their consent;
          </li>
          <li>
            you will not upload any content which you know is false, or is
            defamatory, libellous, deceptive, invasive of another’s privacy,
            tortious, pornographic, profane, hateful or racially or ethnically
            objectionable, unlawful, obscene, harmful, offensive, misleading or
            inappropriate, or contains or depicts nudity or sexual activity; and
          </li>
          <li>
            you will not upload any spam (unsolicited advertising material), or
            unwanted commercial content designed to drive traffic to third-party
            sites or boost the search engine rankings of third-party sites.
          </li>
        </ol>
        <Text as="p" mb={2}>
          If we become aware of any breach of these terms, we may modify,
          withdraw or refuse to display the relevant content at any time in our
          discretion and/or withdraw your right to use QJAM.
        </Text>
        <Heading as="h3" fontSize="md" mb={2}>
          CONTENT PROVIDED BY US
        </Heading>
        <Text as="p" mb={2}>
          All IP rights in QJAM are our property, or the property of our
          affiliates or partners. So please don’t take these Terms as giving you
          the right to use any trademarks, images or logos of QJAM or our
          affiliates or partners because none can be reproduced or used without
          written permission.
        </Text>
        <Text as="p" mb={2}>
          When you access QJAM you agree not to do any of the following things
          (nor allow anyone else to do them) in relation to any content provided
          in QJAM where “content” includes any programming (or other IP) owned
          or distributed by us or our partners as well any digital media player
          provided in QJAM, clips, advertisements, graphics and characters:
        </Text>
        <ol>
          <li>
            modifying or using any content otherwise than as allowed under these
            Terms;
          </li>
          <li>
            using, marketing or re-distributing any content through any software
            application other than QJAM;
          </li>
          <li>
            downloading, re-transmitting, reproducing or storing the content on
            any device or media (other than for any brief periods of time
            necessary for streaming of any content); and/or
          </li>
          <li>
            reformatting, optimising or customising the content for display,
            distribution or transmission.
          </li>
        </ol>
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          YOUR ACCOUNT
        </Heading>
        <Text as="p" mb={2}>
          When you download QJAM, you may be asked to create a QJAM account
          (“Account”) by registering with your phone number or email address and
          password. You can also connect to third party social networks
          supported by us (e.g. Facebook) to use certain features, such as
          sharing with friends, etc. Connecting to a third party social network
          service is subject to your compliance with these Terms as well as any
          terms of the third party service provider.
        </Text>
        <Text as="p" mb={2}>
          When you use QJAM we create a profile for you according to your
          preference settings. Your settings may result in your profile being
          public and/or your agreeing to share content you’ve posted with
          friends and/or others, in which case, your name, if provide, and other
          material you post will become visible to others.
        </Text>
        <Text as="p" mb={2}>
          Please only upload data that is true, accurate, complete and
          up-to-date. You are responsible for all activity that occurs under
          your Account so please keep any password confidential and access to
          your computer or access device secure. You must notify us of any known
          or suspected unauthorized use of your Account, or any known or
          suspected breach of security, including loss, theft, or unauthorized
          disclosure of your password or login details.
        </Text>
        <Heading as="h3" fontSize="md" mb={2}>
          PRIVACY
        </Heading>
        Your privacy is very important to us at QJAM. Please read our Privacy
        Policy to learn more about our privacy practices and how we will use any
        data we receive.
        <br />
        <br />
        By using our website, you acknowledge that you have read, understood and
        accepted our Privacy Policy. Further, you acknowledge that our privacy
        and data collection policies are reasonable, and that if QJAM
        substantially complies with these policies, you shall have no claim or
        suit against QJAM for violating your rights of privacy or otherwise
        misusing or misappropriating data which you provide to QJAM when you use
        our web-site.
        <br />
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          MINORS
        </Heading>
        You must not use QJAM unless you are aged 13 or older. If you are aged
        13-18 you should have a parent’s or guardian’s approval to use QJAM and
        review these Terms with a parent or guardian to make sure you and your
        parent/guardian understand them. If you are under 13 and you access QJAM
        by lying about your age, or are otherwise in breach of these Terms and
        our Privacy Policy, you must immediately stop using QJAM and terminate
        your Account. We will block your access to QJAM if we determine that you
        are misrepresenting your age or in breach of these Terms. Please note
        that some of the content and/or advertising on QJAM may be unsuitable
        for people under the age of 18.
        <br />
        <br />
        QJAM is not directed at children under 13. If you become aware that your
        child has been using QJAM without your consent, please contact us at
        info@qjam.com. We do not knowingly collect personal data from children
        under 13. If we become aware that a child has provided us with personal
        data, we will take steps to remove such information and terminate the
        child’s account. If you become aware that your child under 13 has
        provided any of our partners with personal data without your consent,
        you may elect to notify such partner directly and request that it remove
        or destroy any personal information in its possession concerning your
        child. QJAM cannot be responsible for ensuring that our partners remove
        or destroy such personal information. However, QJAM requires its
        partners to agree to remove or destroy such personally identifiable
        information if requested to do so.
        <br />
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          THIRD PARTY SITES AND APPS
        </Heading>
        QJAM will enable you to access other apps and sites. Even though these
        apps and sites are accessible via QJAM, they are not owned or controlled
        by us. As a result, we are not responsible or liable for, and you
        release us from, any loss or damage incurred by you as a result of, with
        regard to such third party apps and sites, what you experience, the
        content you access, what impact that content has on you, or any dealings
        between you and these third parties or the failure of third party apps
        or sites to function properly.
        <br />
        <br />
        Please also note that the inclusion of any link or grant of access does
        not in any way imply or express an affiliation, endorsement or
        sponsorship by QJAM of the site or app and/or its contents. We recommend
        that you be aware when you are accessing a third party app or site and
        that you read the third party’s terms and conditions and privacy policy.
        <br />
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          PRICING AND PRODUCT PURCHASES
        </Heading>
        QJAM endeavors to make all published pricing correct. Occasionally,
        content on QJAM may contain incorrect information, whereby a product is
        listed at an incorrect price, due to typographical errors or error in
        pricing information provided by the merchant.
        <br />
        <br />
        While QJAM enables third parties to list their products, no transactions
        are carried out on the QJAM platform. Accordingly, QJAM is not a party
        to any resulting transactions nor assumes any responsibility for any
        purchases arising out of or in connection with our App or Site. Please
        do not take our listings to imply any kind of endorsement of these
        offerings or of any of these businesses or individuals, or the content
        of their websites.
        <br />
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          ADVERTISING AND COOKIES
        </Heading>
        QJAM may deliver advertising in the form of banners, paid links,
        coupons, promotions, sponsorship graphics or other means to you via our
        App, Site or via other third-party services and websites
        (“Advertising”). We may use “cookies” (as outlined in our Privacy and
        Cookies Policy) to improve our service, to make your experience more
        personalized, and to make advertising more relevant to you. Our
        Advertising may be contextual, that is related to your location, your
        use of the App over time, or based on other information you have
        provided to QJAM or has been provided to us by third parties or is
        ascertainable from your user profile.
        <br />
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          SUPPORT
        </Heading>
        If you experience a problem with QJAM, please report it to us. We may
        occasionally restrict your access to QJAM to carry out repairs,
        maintenance or to introduce new functionality or services, but we will
        try to keep disruption to a minimum.
        <br />
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          NOTIFICATION OF COPYRIGHT INFRINGEMENT
        </Heading>
        QJAM will investigate notices of copyright infringement. If you are a
        copyright holder who believes that any of the products, services or
        content which are directly available via QJAM are infringing copies of
        your work, please let us know. A notice of alleged copyright
        infringement should be emailed to us at info@qjam.com. A notification of
        claimed copyright infringement must include the following: (a) A
        physical or electronic signature of the owner (or person authorized to
        act on behalf of the owner) of the copyright that is allegedly
        infringed; (b) Specific identification of each copyrighted work claimed
        to have been infringed, including if applicable, the Copyright
        Registration Certificate Number; (c) A description of where the material
        believed to be infringed is located on QJAM (please be as detailed as
        possible and provide a URL to help us locate the material you are
        reporting); (d) contact information for the complaining party, such as a
        complete name, address, telephone number, and email address; (e) A
        statement that the complaining party has a good faith belief that use of
        the work(s) in the manner complained of is not authorized by the
        copyright owner, its agent, or the law; and (f) A statement that the
        information in the notification is accurate, and under penalty of
        perjury, that the complaining party is authorized to act on behalf of
        the owner of an exclusive right that is allegedly infringed.
        <br />
        <br />
        Once we receive a notification of infringement, it is our policy to
        remove any infringing content and terminate the accounts of repeat
        infringers. Upon receipt of a written notice containing the information
        and statements specified in the previous paragraph we will promptly (a)
        disable or remove access to the material that is alleged to be
        infringing, (b) forward the written notification to such alleged
        infringer (“Infringement Notification Recipient”), (c) and take
        reasonable steps to notify such Infringement Notification Recipient that
        we have removed or disabled access to the materials, and that such
        Infringement Notification Recipient has the right to file a
        counter-notification.
        <br />
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          COUNTER-NOTIFICATION
        </Heading>
        To be effective, a Counter Notification must be a written communication
        provided by an Infringement Notification Recipient to QJAM by email that
        includes substantially the following:
        <ul>
          <li>
            A physical or electronic signature of the Infringement Notification
            Recipient;
          </li>
          <li>
            Identification of the material that has been removed or to which
            access has been disabled and the location at which the material
            appeared before it was removed or access to it was disabled;
          </li>
          <li>
            {" "}
            A statement under penalty of perjury that the Infringement
            Notification Recipient has a good faith belief that the material was
            removed or disabled as a result of mistake or misidentification of
            the material to be removed or disabled; and
          </li>
          <li>
            The Infringement Notification Recipient’s name, address, and
            telephone number, and a statement that the Infringement Notification
            Recipient consents to the jurisdiction of Federal District Court for
            the judicial district in which the address is located, or if the
            Infringement Notification Recipient ‘s address is outside of the
            United States, for any judicial district in which QJAM may be found,
            and that the Notification Recipient will accept service of process
            from the person who provided notification or an agent of such person
          </li>
        </ul>
        Upon receipt of a Counter Notification containing the information as
        outlined in 1 through 4 above:
        <ul>
          <li>
            QJAM shall promptly provide the complaining party, with a copy of
            the Counter Notification;
          </li>
          <li>
            QJAM shall inform the complaining party that it will replace the
            removed material or cease disabling access to it within ten (10)
            business days;
          </li>
          <li>
            QJAM shall replace the removed material or cease disabling access to
            the material within ten (10) to fourteen (14) business days
            following receipt of the Counter Notification, provided QJAM’s
            Designated Agent has not received notice from you that an action has
            been filed seeking a court order to restrain the Infringement
            Notification Recipient from engaging in infringing activity relating
            to the material on QJAM’s network or system.
          </li>
        </ul>
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          ACCOUNT TERMINATION
        </Heading>
        QJAM reserves the right to terminate the account of, or block access to
        QJAM for, any Infringement Notification Recipient who has been alleged
        to infringe copyrights.
        <br />
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          ADDITIONAL TERMS APPLICABLE TO USERS OF IOS DEVICES
        </Heading>
        If you installed or downloaded our App via Apple, Inc.’s iTunes Store
        (“Apple”):
        <ul>
          (a) you agree that these Terms are concluded between you and us only
          (and not with Apple), that Apple and Apple’s subsidiaries are third
          party beneficiaries of these Terms, and that, upon your acceptance of
          these Terms, Apple will have the right to (and will be deemed to have
          accepted the right) to enforce these Terms against you as a third
          party beneficiary;
          <br />
          (b) you acknowledge and agree that we, and not Apple, are responsible
          for addressing any claims you or any third party may have in relation
          to our App;
          <br />
          (c) you acknowledge and agree that Apple has no obligation whatsoever
          to furnish any maintenance and support services with respect to our
          App;
          <br />
          (d) you agree that in the event of any failure of our App to conform
          to any applicable warranty, you will notify Apple of such failure and
          Apple will refund the purchase price of the App (if any) to you and,
          to the extent permitted by applicable law, Apple will have no other
          warranty obligation whatsoever with respect to our App; and
          <br />
          (e) Apple will not be responsible for any third party claim that our
          App or your possession and use of our App infringes any third party IP
          rights.
        </ul>
        <Heading as="h3" fontSize="md" mb={2}>
          LIABILITY
        </Heading>
        WE WILL DO OUR BEST TO ENSURE QJAM RUNS SMOOTHLY, BUT WE CANNOT GIVE ANY
        GUARANTEES THAT IT ALWAYS WILL (PARTICULARLY GIVEN THAT WE RELY ON THIRD
        PARTIES IN PROVIDING QJAM TO YOU). QJAM IS PROVIDED “AS IS” AND, TO THE
        MAXIMUM EXTENT PERMITTED BY LAW, WE, AND ON BEHALF OF OUR AFFILIATES,
        LICENSORS AND SUPPLIERS, EXPRESSLY DISCLAIM ALL WARRANTIES (EXPRESS OR
        IMPLIED), INCLUDING WITHOUT LIMITATION:
        <ul>
          (A) WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, ANY WARRANTIES IMPLIED BY COURSE OF PERFORMANCE OR USAGE OF
          TRADE, AND NON-INFRINGEMENT;
          <br />
          (B) THAT QJAM WILL BE AVAILABLE, ACCESSIBLE, UNINTERRUPTED, TIMELY,
          SECURE, COMPLETE, VIRUS-FREE OR ERROR-FREE;
          <br />
          (C) THAT CONTENT DISPLAYED OR OBTAINED VIA QJAM WILL BE ACCURATE OR
          RELIABLE OR THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; AND
          <br />
          (D) THAT THE RESULTS OF USING QJAM WILL MEET YOUR REQUIREMENTS.
        </ul>
        IN NO EVENT WILL QJAM, OR ITS LICENSORS, SUPPLIERS OR AFFILIATES, BE
        LIABLE, TO THE EXTENT PERMITTED BY LAW, WITH RESPECT TO ANY SUBJECT
        MATTER OF THESE TERMS UNDER ANY CONTRACT, TORT, NEGLIGENCE, STRICT
        LIABILITY OR OTHER LEGAL OR EQUITABLE THEORY WITH RESPECT TO QJAM FOR:
        <ul>
          (A) ANY SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, COMPENSATORY, OR
          CONSEQUENTIAL DAMAGES;
          <br />
          (B) ANY LOST PROFITS OR THE COST OF PROCUREMENT OF SUBSTITUTE PRODUCTS
          OR SERVICES;
          <br />
          (C) FOR INTERRUPTION OF USE OR LOSS OR CORRUPTION OF DATA;
          <br />
          (D) FOR BUSINESS LOSSES OR LOSSES TO NON-CONSUMERS;
          <br />
          (E) PERSONAL INJURY OR PROPERTY DAMAGE RELATED TO USE OF QJAM;
          <br />
          (F) ANY LOSS OR DAMAGE ARISING FROM USER GENERATED CONTENT (AS SET OUT
          ABOVE) OR ANY ACTIONS OR OMISSIONS THAT YOU TAKE IN RELIANCE UPON IT;
          <br />
          (G) ANY FAILURE OR DELAY DUE TO MATTERS BEYOND OUR REASONABLE CONTROL;
          OR
          <br />
          (H) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE (REGARDLESS OF THE
          SOURCE OF ORIGINATION).
        </ul>
        YOU AGREE THAT YOUR ONLY RIGHT WITH RESPECT TO ANY PROBLEMS OR
        DISSATISFACTION WITH QJAM IS TO DISCONTINUE ANY USE OF OUR SITE AND/OR
        OUR APP.
        <br />
        IF FOR ANY REASON, YOU DO BRING A CLAIM OR CAUSE OF ACTION ARISING OUT
        OF OR RELATED TO YOUR USE OF QJAM, YOU AGREE THAT OUR LIABILITY TO YOU
        SHALL NOT EXCEED $50.
        <br />
        <br />
        YOU AGREE TO INDEMNIFY AND HOLD HARMLESS QJAM, OUR CONTRACTORS, AND OUR
        LICENSORS, SUPPLIERS, AND AFFILIATES, AND ALL RESPECTIVE DIRECTORS,
        OFFICERS, EMPLOYEES AND AGENTS FROM AND AGAINST ANY AND ALL CLAIMS AND
        EXPENSES, INCLUDING ATTORNEYS’ FEES, ARISING OUT OF YOUR USE OF, MISUSE
        OF, OR ACCESS TO QJAM, OR ANY CONTENT THEREIN, INCLUDING BUT NOT LIMITED
        TO OUT OF YOUR (OR ANY THIRD PARTY USING YOUR ACCOUNT OR IDENTITY ON
        QJAM) BREACH OF THESE TERMS OR THE TERMS OF ANY THIRD PARTY LOGIN
        SERVICE. WE RESERVE THE RIGHT TO ASSUME THE EXCLUSIVE DEFENSE AND
        CONTROL OF ANY MATTER OTHERWISE SUBJECT TO INDEMNIFICATION BY YOU, IN
        WHICH EVENT YOU WILL ASSIST AND COOPERATE WITH US IN ASSERTING ANY
        AVAILABLE DEFENSES.
        <br />
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          CHANGES AND TERMINATION
        </Heading>
        We may change, suspend, restrict or terminate any or all features of, or
        your access to, QJAM at any time for whatever reason, or for no reason.
        We will use our best efforts to give you reasonable notice of any such
        changes/termination wherever possible but we will not be liable to you
        or to any third party for any changes, suspension, or restriction to, or
        termination of, QJAM.
        <br />
        <br />
        If we have to terminate your access to QJAM as a result of you having
        breached these Terms or because you have brought a claim against us, you
        will not establish another account with us for a period of not less than
        6 years from the date of termination.
        <br />
        <br />
        You can terminate your access to QJAM at any time by closing down the
        App and deleting it from your computer or access device, or – in the
        case of our Site – logging out and navigating to another site.
        <br />
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          GOVERNING LAW
        </Heading>
        The laws of the United Kingdom apply to these Terms, without regard to
        conflict of law rules. You agree that the courts located in London,
        England shall have exclusive jurisdiction to settle any dispute which
        may arise out of these Terms.
        <br />
        <br />
        <Heading as="h3" fontSize="md" mb={2}>
          ADDITIONAL LEGALS
        </Heading>
        QJAM reserves all rights not expressly granted in these Terms. You may
        not assign any rights granted to you in these Terms. Nothing in these
        Terms shall constitute a partnership, agency relationship, or joint
        venture between you and QJAM. Should any term or provision be deemed
        invalid, void or unenforceable either in part or its entirety, it shall
        be severed and the remainder of these Terms shall remain in full force
        and effect. Our failure at any time to require performance of any term
        shall in no manner affect our right at a later time to enforce the same
        term unless this right is waived by us in writing. These Terms together
        with our Privacy Policy constitute the final, complete and exclusive
        agreement with respect to your use of QJAM. All provisions of these
        Terms which by their nature should survive termination shall survive
        termination, including, without limitation, ownership provisions,
        indemnification and limitation of liability provisions. If you do not
        agree, or cannot comply, with these Terms, you must stop using QJAM and
        terminate your account with us. In the event of any inconsistency
        between terms located on our Site and terms of our App, the terms on our
        Site will prevail to the extent of any inconsistency.
        <br />
        <br />
        We reserve the right to access, read, preserve, and disclose any
        information as we reasonably believe is necessary to (i) satisfy any
        applicable law, regulation, legal process or governmental request, (ii)
        enforce these Terms, including investigation of potential violations
        hereof, (iii) detect, prevent, or otherwise address fraud, security or
        technical issues, (iv) respond to user support requests, or (v) protect
        the rights, property or safety of us, our users and the public.
        <br />
        <br />
        <br />
      </Text>
    </Container>
  </StandardLayout>
);

export default Privacy;
