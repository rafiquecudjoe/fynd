import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEOHead 
        title="Terms and Conditions - Fyndae | User Agreement & Reward Policy"
        description="Read Fyndae's terms of service, user agreement, and reward policy. Understand your rights and responsibilities when using our lost item recovery platform."
        keywords="Fyndae terms and conditions, user agreement, reward policy, service terms"
        noindex={false}
      />
      <StructuredData type="WebPage" />
      
      <div className="min-h-screen bg-[#fef9f4]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#117465] to-[#0A463D] rounded-2xl p-8 sm:p-12 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/90 text-lg">User Agreement & Platform Terms</p>
          <p className="text-white/70 text-sm mt-4">Last Updated: November 23, 2025</p>
        </div>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Overview</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                This website is operated by Fyndae Pty Ltd. Throughout the site, the terms “we”, “us” and “our” refer to Fyndae Pty
                Ltd. Fyndae Pty Ltd offers this website, including all information, tools and Services available from this site to you, the
                user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
              </p>
              <p>
                By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the
                following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and
                policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site,
                including without limitation users who are browsers, subscribers, customers, merchants, and/ or contributors of
                content.
              </p>
              <p>
                Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part
                of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of
                this agreement, then you may not access the website or use any Services. If these Terms of Service are considered
                an offer, acceptance is expressly limited to these Terms of Service.
              </p>
              <p>
                Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can
                review the most current version of the Terms of Service at any time on this page. We reserve the right to update,
                change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your
                responsibility to check this page periodically for changes.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 1: Online Store Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your province of
                residence, or that you are the age of majority in your state or province of residence and you have given us your
                consent to allow any of your minor dependents to use this site.
              </p>
              <p>
                You may not use our website for any illegal or unauthorized purpose nor may you, in the use of the Service, violate
                any laws in your jurisdiction (including but not limited to copyright laws).
              </p>
              <p>
                You must not transmit any worms or viruses or any code of a destructive nature.
              </p>
              <p>
                A breach or violation of any of the Terms will result in an immediate termination of your Services.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 2: General Conditions</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We reserve the right to refuse service to anyone for any reason at any time.
              </p>
              <p>
                You understand that your content (not including credit card information), may be transferred unencrypted and involve
                (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of
                connecting networks or devices. Credit card information is always encrypted during transfer over networks.
              </p>
              <p>
                You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or
                access to the Service or any contact on the website through which the service is provided, without express written
                permission by us.
              </p>
              <p>
                The headings used in this agreement are included for convenience only and will not limit or otherwise affect these
                Terms.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 3: Accuracy, Completeness and Timeliness of Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We are not responsible if information made available on this site is not accurate, complete or current. The material on
                this site is provided for general information only and should not be relied upon or used as the sole basis for making
                decisions without consulting primary, more accurate, more complete or more timely sources of information. Any
                reliance on the material on this site is at your own risk.
              </p>
              <p>
                This site may contain certain historical information. Historical information, necessarily, is not current and is provided
                for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation
                to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 4: Modifications to the Service and Prices</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at
                any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or
                discontinuance of the Service.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 5: Products or Services</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Certain products or Services may be available exclusively online through the website.
              </p>
              <p>
                We have made every effort to display as accurately as possible the colors and images of our products that appear on
                the website. We cannot guarantee that your computer monitor's display of any color will be accurate.
              </p>
              <p>
                We reserve the right, but are not obligated, to limit the access of our website or Services to any person, geographic
                region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities
                that our Services offer. All descriptions of products or product pricing are subject to change at any time without notice,
                at the sole discretion of us. We reserve the right to discontinue any product/service at any time. Any offer for any
                product or service made on this site is void where prohibited.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 6: Accuracy of Billing and Account Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities
                purchased per person, per household or per order. These restrictions may include orders placed by or under the
                same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the
                event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or
                billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders
                that, in our sole judgment, appear to be placed by dealers, resellers or distributors.
              </p>
              <p>
                You agree to provide current, complete and accurate purchase and account information for all purchases made at our
                store. You agree to promptly update your account and other information, including your email address and credit card
                numbers and expiration dates, so that we can complete your transactions and contact you as needed.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 7: Optional Tools</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.
                You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties,
                representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising
                from or relating to your use of optional third-party tools.
              </p>
              <p>
                Any use by you of the optional tools offered through the site is entirely at your own risk and discretion and you should
                ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party
                provider(s).
              </p>
              <p>
                We may also, in the future, offer new Services and/or features through the website (including, the release of new
                tools and resources). Such new features and/or Services shall also be subject to these Terms of Service.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 8: Third-Party Links</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Certain content, products and Services available via our Service may include materials from third-parties.
                Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not
                responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability
                or responsibility for any third-party materials or websites, or for any other materials, products, or Services of
                third-parties.
              </p>
              <p>
                We are not liable for any harm or damages related to the purchase or use of goods, Services, resources, content, or
                any other transactions made in connection with any third-party websites. Please review carefully the third-party's
                policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims,
                concerns, or questions regarding third-party products should be directed to the third-party.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 9: User Comments, Feedback and Other Submissions</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                If, at our request, you send certain specific submissions (for example contest entries) or without a request from us
                you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail,
                or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish,
                distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be
                under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3)
                to respond to any comments.
              </p>
              <p>
                We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion to be
                unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates
                any party’s intellectual property or these Terms of Service.
              </p>
              <p>
                You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy,
                personality or other personal or proprietary right. You further agree that your comments will not contain libelous or
                otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any
                way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be
                someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are
                solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability
                for any comments posted by you or any third-party.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 10: Personal Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Your submission of personal information through the website is governed by our Privacy Policy. To view our Privacy
                Policy, please see <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 11: Errors, Inaccuracies and Omissions</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or
                omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times
                and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update
                information or cancel orders or reports if any information in the Service or on any related website is inaccurate at any
                time without prior notice (including after you have submitted your order).
              </p>
              <p>
                We undertake no obligation to update, amend or clarify information in the Service or on any related website,
                including without limitation, pricing information, except as required by law. No specified update or refresh date
                applied in the Service or on any related website, should be taken to indicate that all information in the Service or on
                any related website has been modified or updated.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 12: Prohibited Uses</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its
                content:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>(a) for any unlawful purpose;</li>
                <li>(b) to solicit others to perform or participate in any unlawful acts;</li>
                <li>(c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances;</li>
                <li>(d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others;</li>
                <li>(e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;</li>
                <li>(f) to submit false or misleading information;</li>
                <li>(g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet;</li>
                <li>(h) to collect or track the personal information of others;</li>
                <li>(i) to spam, phish, pharm, pretext, spider, crawl, or scrape;</li>
                <li>(j) for any obscene or immoral purpose; or</li>
                <li>(k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 13: Disclaimer of Warranties; Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or
                error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or
                reliable. You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
              </p>
              <p>
                You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and Services delivered to
                you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation,
                warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable
                quality, fitness for a particular purpose, durability, title, and non-infringement.
              </p>
              <p>
                In no case shall Fyndae Pty Ltd, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or
                licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including,
                without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort
                (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for
                any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content,
                or any loss or damage of any kind, incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise
                made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the
                limitation of liability for consequential or incidental damages, in such states or jurisdiction, our liability shall be limited to the maximum extent
                permitted by law.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 14: Indemnification</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                You agree to indemnify, defend and hold harmless Fyndae Pty Ltd and our parent, subsidiaries, affiliates, partners, officers, directors, agents,
                contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including
                reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they
                incorporate by reference, or your violation of any law or the rights of a third-party.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-[#117465] mb-6">Section 15: Severability</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless
                be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms
                of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#fef1e7] to-white rounded-xl p-6 sm:p-8 shadow-md border-2 border-[#117465]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#117465] rounded-full"></div>
              <h2 className="text-2xl font-semibold text-[#117465]">Section 16: Reward Policy</h2>
            </div>
            <div className="space-y-6 text-gray-700">
              <h3 className="text-xl font-semibold text-[#117465]">1. Introduction</h3>
              <p>
                This Reward Policy governs the terms under which Users may offer rewards for assistance in locating lost items and the conditions under which
                Tip Reporters may earn such rewards. By using the Fyndae platform, all Users agree to be bound by this policy and the platform’s Terms and
                Conditions
              </p>

              <h3 className="text-xl font-semibold text-[#117465]">2. Definitions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>“Claimant” refers to the User who reports a lost item and offers a reward.</li>
                <li>“Successful Tip Reporter” refers to any User who submits information that assists in recovering a lost item or solving a problem raised by the Claimant.</li>
                <li>“Reward Amount” refers to the monetary amount set by the Claimant and held by Fyndae until recovery or refund.</li>
                <li>“Recovery” means the successful location and retrieval of the lost item as a result of a verified tip.</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#117465]">3. Payment of Rewards</h3>
              <div className="space-y-2 text-gray-700">
                <p>3.1. When a Claimant reports a lost item, they deposit the Reward Amount with Fyndae, which holds the funds in trust for the potential payout to a Tip Reporter.</p>
                <p>3.2. A Tip Reporter becomes eligible for the reward only after Fyndae verifies that the submitted tip directly assisted in the recovery of the lost item.</p>
                <p>3.3. Upon verification, Fyndae shall release the applicable reward (minus administrative fees) to the Tip Reporter using a secure, lawful payment method.</p>
              </div>

              <h3 className="text-xl font-semibold text-[#117465]">4. Administrative Fees</h3>
              <div className="space-y-2 text-gray-700">
                <p>4.1. Fyndae charges an administrative fee on all reward transactions.</p>
                <p>4.2. This fee is applied as follows:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To the Reporter: 10% is added to the Reward Amount at the time the reward is lodged.</li>
                  <li>To the Successful Tip Reporter: 20% is deducted from the payout amount at the time of disbursement.</li>
                </ul>
                <p>4.3. Administrative fees cover operational costs, platform maintenance, verification processes, fraud checks, and payment processing.</p>
                <p>4.4. All administrative fees are non-refundable, except where otherwise required by the Consumer Protection Act, 2008 (CPA).</p>
                <p>4.5. Fyndae may amend the administrative fee percentage from time to time, with reasonable notice provided to Users.</p>
              </div>

              <h3 className="text-xl font-semibold text-[#117465]">5. Refunds to Claimants</h3>
              <div className="space-y-2 text-gray-700">
                <p>5.1. If the lost item is not recovered within 30 (thirty) days, the Claimant is entitled to a full refund of the Reward Amount minus the administrative fee, which is non-refundable.</p>
                <p>5.2. Refunds shall be processed to the Claimant’s original payment method within a reasonable period, subject to bank processing times.</p>
                <p>5.3. Once a tip results in a successful recovery, the Reward Amount becomes non-refundable.</p>
              </div>

              <h3 className="text-xl font-semibold text-[#117465]">6. Verification of Tips</h3>
              <div className="space-y-2 text-gray-700">
                <p>6.1. All tips undergo verification by Fyndae to confirm their accuracy and legitimacy.</p>
                <p>6.2. Fyndae may request supporting evidence from the Tip Reporter before confirming eligibility for the reward.</p>
                <p>6.3. Fyndae reserves the right to reject any tip that is fraudulent, misleading, malicious, or submitted in bad faith.</p>
              </div>

              <h3 className="text-xl font-semibold text-[#117465]">7. Anonymity and Personal Information</h3>
              <div className="space-y-2 text-gray-700">
                <p>7.1. Tip Reporters may choose to remain anonymous when submitting tips.</p>
                <p>7.2. All personal information collected during the reporting and recovery process is handled in accordance with the Protection of Personal Information Act, 2013 (POPIA).</p>
                <p>7.3. Fyndae uses secure storage and encryption methods to protect the identities and data of all Users.</p>
              </div>

              <h3 className="text-xl font-semibold text-[#117465]">8. Eligibility</h3>
              <div className="space-y-2 text-gray-700">
                <p>8.1. Any individual may submit a tip without payment.</p>
                <p>8.2. A Claimant must pay the Reward Amount (which is subject to the administrative fee) when reporting a lost item.</p>
                <p>8.3. By using the platform, Users confirm that they understand and accept this Reward Policy.</p>
              </div>

              <h3 className="text-xl font-semibold text-[#117465]">9. Limitation of Liability</h3>
              <div className="space-y-2 text-gray-700">
                <p>9.1. Fyndae is not liable for losses arising from unsuccessful recoveries, inaccurate tips, delays in payment processing, or fraudulent submissions made by Users.</p>
                <p>9.2. Fyndae’s total liability is limited exclusively to the holding, refunding, and administering of the Reward Amount in accordance with this Policy.</p>
              </div>

              <h3 className="text-xl font-semibold text-[#117465]">10. Amendments</h3>
              <p>
                Fyndae reserves the right to amend this Reward Policy at any time. Continued use of the platform following an update constitutes acceptance of
                the amended policy.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}
