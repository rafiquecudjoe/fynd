import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEOHead 
        title="Privacy Policy - Fyndae | POPIA Compliant Data Protection"
        description="Read Fyndae's privacy policy and data protection practices. POPIA compliant. Learn how we protect your personal information and handle data securely."
        keywords="Fyndae privacy policy, POPIA compliance, data protection South Africa, personal information protection"
        noindex={false}
      />
      <StructuredData type="WebPage" />
      
      <div className="min-h-screen bg-[#fef9f4]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#117465] to-[#0A463D] rounded-2xl p-8 sm:p-12 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/90 text-lg">Fyndae Data Protection Policy & POPIA Compliance</p>
          <p className="text-white/70 text-sm mt-4">Last Updated: November 23, 2025</p>
        </div>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Clause 1: Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                1.1 For the purposes of this section, Personal Information will be understood in accordance with
                the definition provided in the Protection of Personal Information Act 4 of 2013 ("the Act"). We
                also subscribe to the principles for electronically collecting personal information outlined in the
                Act, and the further legislation referred to therein. We endeavour to ensure the quality, accuracy
                and confidentiality of Personal Information in our possession.
              </p>
              <p>
                1.2 In adopting this Privacy Policy, we wish to balance our legitimate business interests and
                your reasonable expectation of privacy. Accordingly, we will take all reasonable steps to prevent
                unauthorized access to, or disclosure of your Personal Information. However, it is impossible to
                guarantee that your Personal Information shall be 100% secure.
              </p>
              <p>
                1.3 In utilising our website, using our services or otherwise if your information is submitted to us
                through a lead generation services, users may be asked to provide the following information
                (Personal Information):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>1.3.1 Email</li>
                <li>1.3.2 emails are collected only if the user subscribes to the newsletter</li>
              </ul>
              <p>
                1.4 We will attempt to limit the types of Personal Information we process to only that to
                which you consent to (for example, in the context of online registration, newsletters, message
                boards, surveys, polls, professional announcements, SMS, lead generation, MMS and other
                mobile services), but, to the extent necessary, your agreement to these this Privacy Policy
                constitutes your consent as contemplated in section 69 of the Act. Where necessary, we will
                seek to obtain your specific consent in future instances should we deem the same required by
                law and where your consent herein might not be lawfully sufficient.
              </p>
              <p>
                1.5 We will not collect, use or disclose sensitive information (such as information about racial
                or ethnic origins or political or religious beliefs, where relevant) except with your specific consent
                or in the circumstances permitted by law.
              </p>
              <p>
                1.6 By agreeing to the terms contained in this Privacy Policy, you consent to the use of your
                Personal Information in relation to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>1.6.1 The provision of marketing related services to you by us</li>
              </ul>
              <p>
                1.7 Although absolute security cannot be guaranteed on the internet, we have in place
                up-to-date, reasonable technical and organisational security measures to protect your Personal
                Information against accidental or intentional manipulation, loss, misuse, destruction or against
                unauthorised disclosure or access to the information we process online.
              </p>
              <p>
                1.8 While we cannot ensure or warrant the security of any Personal Information you provide us,
                we will continue to maintain and improve these security measures over time in line with legal
                and technological developments.
              </p>
              <p>
                1.9 We store your Personal Information directly, or alternatively, store your Personal Information
                on, and transfer your Personal Information to, a central database.
              </p>
              <p>
                1.10 Your information will not be stored for longer than is necessary for the purposes described
                in this Privacy Policy or as required by applicable legislation.
              </p>
              <p>
                1.11 The Personal Information we collect from users shall only be accessed by our employees,
                representatives and consultants on a need-to-know basis, and subject to reasonable
                confidentiality obligations binding such persons.
              </p>
              <p>
                1.12 We shall have the right, but shall not be obliged, to monitor or examine any information and
                materials including any website link that you publish or submit to us for publishing on the Site.
                You shall be solely responsible for the contents of all material published by yourself.
              </p>
              <p>
                1.13 We constantly review our systems and data to ensure the best possible service to our
                users. We do not accept any users, or representatives of users, under 18 years of age or who
                otherwise does not have the relevant capacity to be bound by this Privacy Policy.
              </p>
              <p>
                1.14 We will not sell, share, or rent your Personal Information to any third party or use your
                e-mail address for unsolicited mail. Any emails sent by us will only be in connection with the
                provision of our services and/or the marketing thereof.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Clause 2: Processing of Personal Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                2.1. By providing your personal information to Fyndae Pty Ltd you acknowledge that it has
                been collected directly from you and consent to its processing by Fyndae Pty Ltd.
              </p>
              <p>
                2.2. Where you submit Personal Information (such as name, address, telephone number
                and email address) via the website (e.g. through completing any online form) the following
                principles are observed in the processing of that information:
              </p>
              <div className="pl-6 space-y-4">
                <p>
                  2.2.1. Fyndae Pty Ltd will only collect personal information for a purpose consistent
                  with the purpose for which it is required. The specific purpose for which information
                  is collected will be apparent from the context in which it is requested.
                </p>
                <p>
                  2.2.2. Fyndae Pty Ltd will only process personal information in a manner that is
                  adequate, relevant and not excessive in the context of the purpose for which it is
                  processed.
                </p>
                <p>
                  2.2.3. Personal information will only be processed for a purpose compatible with that
                  for which it was collected, unless you have agreed to an alternative purpose in
                  writing or Fyndae Pty Ltd is permitted in terms of national legislation of general application
                  dealing primarily with the protection of personal information.
                </p>
                <p>
                  2.2.4. Fyndae Pty Ltd will keep records of all personal Information collected and the
                  specific purpose for which it was collected until such a period where the owner of the
                  account requests that we remove their details from our records.
                </p>
                <p>
                  2.2.5. Fyndae Pty Ltd will not disclose any personal information relating to you to any
                  third party unless your prior written agreement is obtained or Fyndae Pty Ltd is
                  required to do so by law.
                </p>
                <p>
                  2.2.6. If personal information is released with your consent Fyndae Pty Ltd will retain
                  a record of the information released, the third party to which it was released, the
                  reason for the release and the date of release, for a period discussed with the owner
                  from the date on which it was last used.
                </p>
                <p>
                  2.2.7. Fyndae Pty Ltd will destroy or delete any personal information that is no longer
                  needed by Fyndae Pty Ltd for the purpose it was initially collected, or subsequently
                  processed.
                </p>
              </div>
              <p>
                3.3. Note that, as permitted by the Electronic Communications and Transactions Act 25 of
                2002, Fyndae Pty Ltd may use personal information collected to compile profiles for
                statistical purposes. No information contained in the profiles or statistics will be able to be
                linked to any specific user.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Clause 3: Log Files</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                When you visit the website, even if you do not create an account, we may collect information,
                such as your IP address, the name of your ISP (Internet Service Provider), your browser, the
                website from which you visit us, the pages on our website that you visit and in what sequence,
                the date and length of your visit, and other information concerning your computer's operating
                system, language settings, and broad demographic information.
              </p>
              <p>
                This information is aggregated and anonymous data and does not identify you specifically.
                However, you acknowledge that this data may be able to be used to identify you if it is
                aggregated with other Personal Information that you supply to us.
              </p>
              <p>
                This information is not shared with third parties and is used only within the company on a
                need-to-know basis. Any individually identifiable information related to this data will never be
                used in any way different to that stated above, without your explicit permission.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Clause 4: Disclosure of Personal Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We will not provide your personal information to anyone else unless you consent thereto or one
                of the following exceptions applies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You would reasonably expect us to use the information for that purpose.</li>
                <li>It is legally required or authorised, such as by a law, or a court or tribunal order.</li>
                <li>It is reasonably necessary for an enforcement-related activity.</li>
                <li>We reasonably believe that it is necessary to lessen or prevent a serious threat to the life, health, or safety of any individual, or to public health or safety.</li>
                <li>We have reason to suspect that unlawful activity, or misconduct of a serious nature, that relates to our functions or activities has been, is being or may be engaged in and we reasonably believe that it is necessary for us to take appropriate action in relation to the matter;</li>
                <li>It is reasonably necessary for the establishment, exercise, or defence of a legal or equitable claim; or</li>
                <li>The information is used only for historical, statistical or research purposes and is not published in an identifiable form.</li>
              </ul>
              <p>
                When we share your personal information with selected service providers who work on our
                behalf, for specific defined purposes related to public services we provide we will ensure that
                appropriate protections of your personal information are in place with these third parties, in
                accordance with our obligations under the POPIA.
              </p>
              <p>
                We are very careful with special personal information, and where practical, we usually group
                personal information together as aggregated data so that individuals cannot be identified.
                Unless we have your clear informed consent or the law clearly allows us in certain limited
                circumstances, we will not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sell or rent personal information.</li>
                <li>Use your personal information for purposes that are different, unusual, or unexpected in relation to the reason for collecting it in the first place; or</li>
                <li>Share your personal information with third parties in circumstances other than the ones we have referred to above.</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Clause 5: Links from the Website</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                5.1 The services available through the Website, may contain links to other third party websites,
                including (without limitation) social media platforms, payment gateways, appointment scheduling
                and/or live chat platforms ("Third Party Websites"). If you select a link to any Third Party
                Website, you may be subject to such Third Party Website's terms and conditions and/or other
                policies, which are not under our control, nor are we responsible therefore.
              </p>
              <p>
                5.2 Hyperlinks to Third Party Websites are provided "as is", and we do not necessarily agree
                with, edit or sponsor the content on Third Party Websites.
              </p>
              <p>
                5.3 We do not monitor or review the content of any Third Party Website. Opinions expressed or
                material appearing on such websites are not necessarily shared or endorsed by us and we
                should not be regarded as the publisher of such opinions or material. Please be aware that we
                are not responsible for the privacy practices, or content, of other websites, either.
              </p>
              <p>
                5.4 Users should evaluate the security and trustworthiness of any Third Party Website before
                disclosing any personal information to them. We do not accept any responsibility for any loss or
                damage in whatever manner, howsoever caused, resulting from your disclosure to third parties
                of personal information.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Clause 6: Electronic Communications And Transactions Act 25 Of 2002</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                6.1 Data Messages (as defined in the ECT Act) will be deemed to have been received by us if
                and when we respond to the Data Messages.
              </p>
              <p>
                6.2 Data Messages sent by us to a user will be deemed to have been received by such user in
                terms of the provisions specified in section 23(b) of the ECT Act.
              </p>
              <p>
                6.3 Users acknowledge that electronic signatures, encryption and/or authentication are not
                required for valid electronic communications between us and users.
              </p>
              <p>
                6.4 Information to be provided in terms of section 43(1) of the ECT Act:
              </p>
              <div className="pl-6 space-y-2">
                <p>
                  6.4.1 Users warrant that Data Messages sent to us from any electronic device, used by
                  such user, from time to time or owned by such user, were sent and or authorised by such
                  user, personally.
                </p>
                <p>
                  6.4.2 This Website is owned and operated by Fyndae Pty Ltd
                </p>
              </div>
              <p>
                6.5 Address for service of legal documents: 151 King Edward Street, Parow, 7500
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>6.5.1 Contact Number: +27 (0)72 883 0095.</li>
                <li>6.5.2 Website - located at fyndae.com</li>
                <li>6.5.3 Email address: info@fyndae.com</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Clause 7: Lodging of Complaints</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                7.1 We only process your Personal Information in compliance with this Privacy Policy and in
                accordance with the relevant data protection laws. If, however you wish to raise a complaint
                regarding the processing of your Personal Information or are unsatisfied with how we have
                handled your Personal Information, you have the right to lodge a complaint with the Information
                Regulator:
              </p>
              <div className="bg-[#fef1e7] border-l-4 border-[#117465] p-4 rounded-r-lg">
                <p className="font-semibold text-gray-900 mb-2">Information Regulator Contact:</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="text-[#117465]">📞</span>
                    <span>Telephone: +27 (0) 10 023 5207</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#117465]">✉️</span>
                    <span>Email: inforeg@justice.gov.za</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}
