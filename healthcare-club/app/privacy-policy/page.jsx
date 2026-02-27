/* eslint-disable react/no-unescaped-entities */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../components/LegalPage.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | Healthcare Club',
    description: 'Privacy Policy for the Healthcare Club mobile app.',
};

export default function PrivacyPolicy() {
    return (
        <main className={styles.container}>
            <Navbar />

            <header className={styles.header}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.date}>Effective October 31, 2023</p>
            </header>

            <div className={styles.contentWrapper}>
                <aside className={styles.sidebar}>
                    <div className={styles.stickySidebar}>
                        <Link href="#interpretation-and-definitions" className={styles.navLink}>Interpretation & Definitions</Link>
                        <Link href="#collecting-and-using" className={styles.navLink}>Collecting & Using your Data</Link>
                        <Link href="#retention" className={styles.navLink}>Retention of your Data</Link>
                        <Link href="#transfer" className={styles.navLink}>Transfer of your Data</Link>
                        <Link href="#disclosure" className={styles.navLink}>Disclosure of your Data</Link>
                        <Link href="#security" className={styles.navLink}>Security of your Data</Link>
                        <Link href="#gdpr" className={styles.navLink}>GDPR Privacy Policy</Link>
                        <Link href="#ccpa" className={styles.navLink}>CCPA Privacy Policy</Link>
                        <Link href="#children" className={styles.navLink}>Children's Privacy</Link>
                        <Link href="#links" className={styles.navLink}>Links to Other Websites</Link>
                        <Link href="#changes" className={styles.navLink}>Changes to this Policy</Link>
                        <Link href="#contact" className={styles.navLink}>Contact Us</Link>
                    </div>
                </aside>

                <article className={styles.mainContent}>
                    <section>
                        <p>Our Privacy Policy was last updated on October 31, 2023.</p>
                        <p>This Privacy Policy outlines the policies and procedures for the collection, use, and disclosure of your information when you use the Healthcare Club mobile app ("the App"). It also informs you about your privacy rights and how the law protects your data. By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
                    </section>

                    <section id="interpretation-and-definitions">
                        <h2>Interpretation and Definitions</h2>
                        <h3>Interpretation</h3>
                        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                        <h3>Definitions</h3>
                        <p>For the purposes of this Privacy Policy:</p>
                        <ul>
                            <li><strong>"Account"</strong> means a unique account created for you to access our Service or parts of our Service.</li>
                            <li><strong>"Business"</strong>, for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers' personal information and determines the purposes and means of the processing of Consumers' personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers' personal information, that does business in the State of California.</li>
                            <li><strong>"Company"</strong> (referred to as either "the Company", "We", "us" or "Our" in this Agreement) refers to H-Vault. For the purpose of the GDPR, the Company is the Data Controller.</li>
                            <li><strong>"Country"</strong> refers to INDIA.</li>
                            <li><strong>"Consumer"</strong>, for the purpose of the CCPA, means a natural person who is a California resident.</li>
                            <li><strong>"Cookies"</strong> are small files that are placed on your computer, mobile device or any other device by a website, containing the details of your browsing history on that website among its many uses.</li>
                            <li><strong>"Data Controller"</strong>, for the purposes of the GDPR, refers to the Company as the legal person which alone or jointly with others determines the purposes and means of the processing of Personal Data.</li>
                            <li><strong>"Device"</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
                            <li><strong>"Do Not Track" (DNT)</strong> is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.</li>
                            <li><strong>"Personal Data"</strong> is any information that relates to an identified or identifiable individual.</li>
                            <li><strong>"Sale"</strong>, for the purpose of the CCPA, means selling, renting... a Consumer's personal information to another business or a third party for monetary or other valuable consideration.</li>
                            <li><strong>"Service"</strong> refers to the Application.</li>
                            <li><strong>"Service Provider"</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
                            <li><strong>"Usage Data"</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
                            <li><strong>"Application"</strong> refers to Healthcare Club, accessible from Google Play Store.</li>
                            <li><strong>"You"</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                        </ul>
                    </section>

                    <section id="collecting-and-using">
                        <h2>Collecting and Using your Personal Data</h2>
                        <h3>Types of Data Collected</h3>
                        <h4>Personal Data</h4>
                        <p>While using Healthcare Club, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This information may include:</p>
                        <ul>
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Phone number</li>
                            <li>Address, State, Province, ZIP/Postal code, City</li>
                            <li>Usage Data</li>
                        </ul>

                        <h4>Usage Data</h4>
                        <p>Usage Data is collected automatically when you use the app. This may include:</p>
                        <ul>
                            <li>Your device's Internet Protocol address (e.g., IP address)</li>
                            <li>Device type and version</li>
                            <li>Pages visited within the app</li>
                            <li>Time and date of app usage</li>
                            <li>Time spent on app pages</li>
                            <li>Unique device identifiers</li>
                            <li>Other diagnostic data</li>
                        </ul>
                        <p>When you access the app through a mobile device, we may collect additional information, including the type of mobile device you use, your mobile device's unique ID, your mobile device's IP address, your mobile operating system, and other diagnostic data.</p>

                        <h3>Use of your Personal Data</h3>
                        <p>Healthcare Club may use your personal data for the following purposes:</p>
                        <ul>
                            <li><strong>Providing and Maintaining the Service:</strong> We use your personal data to provide and maintain our mobile app. This includes monitoring the usage of our app.</li>
                            <li><strong>Managing your Account:</strong> Your personal data is used to manage your registration as a user of the app.</li>
                            <li><strong>Performance of a Contract:</strong> We process your personal data to develop, comply with, and execute the contract for the products, items, or services you've purchased.</li>
                            <li><strong>Contacting you:</strong> We may contact you through email, telephone calls, SMS, or other equivalent electronic communication methods.</li>
                            <li><strong>Providing News, Special Offers:</strong> We use your personal data to provide you with news, special offers, and general information about other goods, services, and events.</li>
                            <li><strong>Managing your Requests:</strong> We use your data to attend to and manage your requests to us.</li>
                            <li><strong>Business Transfers:</strong> In the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, your personal data may be used as part of the assets transferred.</li>
                            <li><strong>Other Purposes:</strong> Your data may be used for other purposes, including data analysis, identifying usage trends, evaluating the effectiveness of our promotional campaigns, and improving our app.</li>
                        </ul>

                        <p>We may share your personal information in the following situations:</p>
                        <ul>
                            <li><strong>With Service Providers:</strong> We may share your personal information with service providers to monitor and analyze the use of our app, for payment processing, and to contact you.</li>
                            <li><strong>For business transfers:</strong> Your personal information may be shared or transferred in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
                            <li><strong>With Affiliates:</strong> We may share your information with our affiliates, subject to their agreement to adhere to this Privacy Policy.</li>
                            <li><strong>With business partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                            <li><strong>With other users:</strong> When you share personal information or interact in public areas with other users within the app, that information may be viewed by all users and may be publicly distributed outside the app.</li>
                            <li><strong>With your consent:</strong> We may disclose your personal information for any other purpose with your explicit consent.</li>
                        </ul>
                    </section>

                    <section id="retention">
                        <h2>Retention of your Personal Data</h2>
                        <p>Healthcare Club will retain your personal data only for as long as it is necessary for the purposes outlined in this Privacy Policy. We will keep and use your personal data as required to comply with our legal obligations, such as retaining your data to adhere to applicable laws, settle disputes, and enforce our legal agreements and policies.</p>
                        <p>We will also retain usage data for internal analysis purposes. Usage data is typically retained for a shorter duration, except when this data is used to enhance security or improve the functionality of our app, or when we are legally obligated to retain this data for longer periods.</p>
                    </section>

                    <section id="transfer">
                        <h2>Transfer of your Personal Data</h2>
                        <p>Your information, including Personal Data, is processed at Healthcare Club's operating offices and other locations where the parties involved in data processing are situated. This means that your information may be transferred to and stored on computers located outside your state, province, country, or other governmental jurisdiction, where data protection laws may differ from those in your jurisdiction.</p>
                        <p>By consenting to this Privacy Policy and providing such information, you agree to the transfer of your data. Healthcare Club will take all reasonable steps to ensure that your data is handled securely and in accordance with this Privacy Policy. We will not transfer your Personal Data to any organization or country without implementing adequate controls to safeguard your data and other personal information.</p>
                    </section>

                    <section id="disclosure">
                        <h2>Disclosure of your Personal Data</h2>
                        <h3>Business Transactions</h3>
                        <p>In the event that Healthcare Club is involved in a merger, acquisition, or asset sale, your Personal Data may be transferred. We will provide you with notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>

                        <h3>Law enforcement</h3>
                        <p>Under certain circumstances, Healthcare Club may be required to disclose your Personal Data if mandated by law or in response to valid requests from public authorities, such as a court or government agency.</p>

                        <h3>Other legal requirements</h3>
                        <p>Healthcare Club may disclose your Personal Data in good faith when such action is deemed necessary to:</p>
                        <ul>
                            <li>Comply with a Legal Obligation.</li>
                            <li>Protect and Defend the Rights or Property of Healthcare Club.</li>
                            <li>Prevent or Investigate Possible Wrongdoing in Connection with the Service.</li>
                            <li>Protect the Personal Safety of Users of the Service or the Public.</li>
                            <li>Protect Against Legal Liability.</li>
                        </ul>
                    </section>

                    <section id="security">
                        <h2>Security of your Personal Data</h2>
                        <p>The security of your Personal Data is a priority for us. It's important to note that while we make every effort to use commercially acceptable methods to protect your Personal Data, no method of transmission over the Internet or electronic storage can be guaranteed to be 100% secure.</p>
                        <p>We will continue to work diligently to safeguard your information, but we cannot ensure its absolute security.</p>
                    </section>

                    <section id="gdpr">
                        <h2>GDPR Privacy Policy</h2>
                        <h3>Legal Basis for Processing Personal Data under GDPR</h3>
                        <p>We may process Personal Data under the following conditions:</p>
                        <ul>
                            <li><strong>Consent:</strong> You have given your consent for processing Personal Data for one or more specific purposes.</li>
                            <li><strong>Performance of a contract:</strong> Provision of Personal Data is necessary for the performance of an agreement with you and/or for any pre-contractual obligations thereof.</li>
                            <li><strong>Legal obligations:</strong> Processing Personal Data is necessary for compliance with a legal obligation to which the Company is subject.</li>
                            <li><strong>Vital interests:</strong> Processing Personal Data is necessary in order to protect your vital interests or of another natural person.</li>
                            <li><strong>Public interests:</strong> Processing Personal Data is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Company.</li>
                            <li><strong>Legitimate interests:</strong> Processing Personal Data is necessary for the purposes of the legitimate interests pursued by the Company.</li>
                        </ul>

                        <h3>Your Rights under the GDPR</h3>
                        <p>The Company undertakes to respect the confidentiality of your Personal Data and to guarantee you can exercise your rights.</p>
                        <p>You have the right under this Privacy Policy, and by law if you are within the EU, to:</p>
                        <ul>
                            <li><strong>Request access to your Personal Data.</strong> The right to access, update or delete the information We have on you.</li>
                            <li><strong>Request correction of the Personal Data that We hold about you.</strong> You have the right to have any incomplete or inaccurate information We hold about you corrected.</li>
                            <li><strong>Object to processing of your Personal Data.</strong> This right exists where We are relying on a legitimate interest as the legal basis for Our processing.</li>
                            <li><strong>Request erasure of your Personal Data.</strong> You have the right to ask us to delete or remove Personal Data when there is no good reason for us to continue processing it.</li>
                            <li><strong>Request the transfer of your Personal Data.</strong> We will provide to you, or to a third-party you have chosen, your Personal Data in a structured, commonly used, machine-readable format.</li>
                            <li><strong>Withdraw your consent.</strong> You have the right to withdraw your consent on using your Personal Data.</li>
                        </ul>
                        <p><strong>Actions Against Misuse or Illegal Activities:</strong> We reserve the right to take appropriate actions against any requestor if we become aware of any illegal activities or misuse of information provided through our platform.</p>
                        <p><strong>Sharing of Location and Contact Information with Requestor:</strong> By expressing interest in a blood donation request through our platform, you agree to our disclaimer and consent to the sharing of your distance location and mobile phone number with the requestor.</p>

                        <h3>Exercising of your GDPR Data Protection Rights</h3>
                        <p>You may exercise your rights of access, rectification, cancellation and opposition by contacting us. Please note that we may ask you to verify your identity before responding to such requests. If you make a request, We will try our best to respond to you as soon as possible.</p>
                        <p>You have the right to complain to a Data Protection Authority about Our collection and use of your Personal Data. For more information, if you are in the European Economic Area (EEA), please contact your local data protection authority in the EEA.</p>
                    </section>

                    <section id="ccpa">
                        <h2>CCPA Privacy Policy</h2>
                        <p>This privacy notice section for California residents supplements the information contained in Our Privacy Policy and it applies solely to all visitors, users, and others who reside in the State of California.</p>

                        <h3>Categories of Personal Information Collected</h3>
                        <p>We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular Consumer or Device. The following is a list of categories of personal information which we may collect or may have been collected from California residents within the last twelve (12) months.</p>
                        <ul>
                            <li><strong>Category A: Identifiers.</strong> (Collected: Yes) Examples: A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, driver's license number, passport number, or other similar identifiers.</li>
                            <li><strong>Category B: Personal information categories listed in the California Customer Records statute.</strong> (Collected: Yes)</li>
                            <li><strong>Category C: Protected classification characteristics under California or federal law.</strong> (Collected: No)</li>
                            <li><strong>Category D: Commercial information.</strong> (Collected: Yes) Examples: Records and history of products or services purchased or considered.</li>
                            <li><strong>Category E: Biometric information.</strong> (Collected: No)</li>
                            <li><strong>Category F: Internet or other similar network activity.</strong> (Collected: Yes) Examples: Interaction with our Service or advertisement.</li>
                            <li><strong>Category G: Geolocation data.</strong> (Collected: Yes) Examples: Approximate physical location.</li>
                            <li><strong>Category H: Sensory data.</strong> (Collected: No)</li>
                            <li><strong>Category I: Professional or employment-related information.</strong> (Collected: No)</li>
                            <li><strong>Category J: Non-public education information.</strong> (Collected: No)</li>
                            <li><strong>Category K: Inferences drawn from other personal information.</strong> (Collected: No)</li>
                        </ul>

                        <p>Under CCPA, personal information does not include:</p>
                        <ul>
                            <li>Publicly available information from government records</li>
                            <li>Deidentified or aggregated consumer information</li>
                            <li>Information excluded from the CCPA's scope, such as Health or medical information covered by HIPAA and CMIA.</li>
                        </ul>

                        <h3>Sources of Personal Information</h3>
                        <p>We obtain the categories of personal information listed above from the following categories of sources:</p>
                        <ul>
                            <li><strong>Directly from you.</strong> For example, from the forms you complete on our app, preferences you express, or from your purchases on our app.</li>
                            <li><strong>Indirectly from you.</strong> For example, from observing your activity on our app.</li>
                            <li><strong>Automatically from you.</strong> For example, through cookies we or our service providers set on your device as you navigate through our app.</li>
                            <li><strong>From Service Providers.</strong> For example, third-party vendors to monitor and analyze the use of our Service, third-party vendors for payment processing, or other third-party vendors that We use to provide the Service to you.</li>
                        </ul>

                        <h3>Use of Personal Information for Business Purposes or Commercial Purposes</h3>
                        <p>We may use or disclose personal information We collect for "business purposes" or "commercial purposes" (as defined under the CCPA), which may include the following examples:</p>
                        <ul>
                            <li>To operate our Service and provide you with our Service.</li>
                            <li>To provide you with support and to respond to your inquiries, including to investigate and address your concerns and monitor and improve our Service.</li>
                            <li>To fulfill or meet the reason you provided the information.</li>
                            <li>To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.</li>
                            <li>As described to you when collecting your personal information or as otherwise set forth in the CCPA.</li>
                            <li>For internal administrative and auditing purposes.</li>
                            <li>To detect security incidents and protect against malicious, deceptive, fraudulent or illegal activity.</li>
                        </ul>

                        <h3>Disclosure of Personal Information for Business Purposes or Commercial Purposes</h3>
                        <p>We may use or disclose and may have used or disclosed in the last twelve (12) months the following categories of personal information for business or commercial purposes:</p>
                        <ul>
                            <li>Category A: Identifiers</li>
                            <li>Category B: Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e))</li>
                            <li>Category D: Commercial information</li>
                            <li>Category F: Internet or other similar network activity</li>
                        </ul>

                        <h3>Share of Personal Information</h3>
                        <p>We may share your personal information identified in the above categories with the following categories of third parties:</p>
                        <ul>
                            <li>Service Providers</li>
                            <li>Payment processors</li>
                            <li>Our affiliates</li>
                            <li>Our business partners</li>
                            <li>Third party vendors to whom you or your agents authorize us to disclose your personal information.</li>
                        </ul>

                        <h3>Sale of Personal Information of Minors Under 16 Years of Age</h3>
                        <p>We do not knowingly collect personal information from minors under the age of 16 through our Service, although certain third-party websites that we link to may do so... We do not sell the personal information of consumers we actually know are less than 16 years of age unless we receive affirmative authorization.</p>

                        <h3>Your Rights under the CCPA</h3>
                        <p>The CCPA provides California residents with specific rights regarding their personal information. If you are a resident of California, you have the following rights:</p>
                        <ul>
                            <li><strong>The right to notice.</strong> You have the right to be notified which categories of Personal Data are being collected and the purposes for which the Personal Data is being used.</li>
                            <li><strong>The right to request.</strong> Under CCPA, you have the right to request that We disclose information to you about Our collection, use, sale, disclosure for business purposes and share of personal information.</li>
                            <li><strong>The right to say no to the sale of Personal Data (opt-out).</strong> You have the right to direct us to not sell your personal information.</li>
                            <li><strong>The right to delete Personal Data.</strong> You have the right to request the deletion of your Personal Data, subject to certain exceptions.</li>
                            <li><strong>The right not to be discriminated against.</strong> You have the right not to be discriminated against for exercising any of your consumer's rights.</li>
                        </ul>

                        <h3>Exercising your CCPA Data Protection Rights</h3>
                        <p>In order to exercise any of your rights under the CCPA, and if you are a California resident, you can contact us:</p>
                        <ul>
                            <li>By visiting this page on our website: <a href="https://healthcareclub.in">https://healthcareclub.in</a></li>
                            <li>By sending us an email: <a href="mailto:info@healthcareclub.in">info@healthcareclub.in</a></li>
                        </ul>
                        <p>We will disclose and deliver the required information free of charge within 45 days of receiving your verifiable request.</p>

                        <h3>Do Not Sell My Personal Information</h3>
                        <p>You have the right to opt-out of the sale of your personal information. Once we receive and confirm a verifiable consumer request from you, we will stop selling your personal information. To exercise your right to opt-out, please contact us.</p>

                        <h3>Website</h3>
                        <p>You can opt out of receiving personalized ads served by our Service Providers by following the instructions presented on the App:</p>
                        <ul>
                            <li>The NAI's opt-out platform: <a href="http://www.networkadvertising.org/choices/">http://www.networkadvertising.org/choices/</a></li>
                            <li>The EDAA's opt-out platform: <a href="http://www.youronlinechoices.com/">http://www.youronlinechoices.com/</a></li>
                            <li>The DAA's opt-out platform: <a href="http://optout.aboutads.info/?c=2&lang=EN">http://optout.aboutads.info/?c=2&lang=EN</a></li>
                        </ul>

                        <h3>Mobile Devices</h3>
                        <p>Your mobile device may give you the ability to opt out of the use of information about the apps you use to serve you ads targeted to your interests:</p>
                        <ul>
                            <li>On Android devices, you can select "Opt out of Interest-Based Ads" or "Opt out of Ads Personalization."</li>
                            <li>On iOS devices, you can enable "Limit Ad Tracking."</li>
                        </ul>

                        <h3>"Do Not Track" Policy as Required by California Online Privacy Protection Act (CalOPPA)</h3>
                        <p>Our App does not respond to Do Not Track signals. However, please note that some third-party websites may track your browsing activities. If you visit such websites, you can set your preferences in your web browser to inform websites that you do not want to be tracked.</p>
                    </section>

                    <section id="children">
                        <h2>Children's Privacy</h2>
                        <p>Our App does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                    </section>

                    <section id="links">
                        <h2>Links to Other Websites</h2>
                        <p>Our Service may contain links to other websites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                    </section>

                    <section id="changes">
                        <h2>Changes to this Privacy Policy</h2>
                        <p>We may update Our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                        <p>We will let you know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
                        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                    </section>

                    <section id="contact">
                        <h2>Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, you can contact us:</p>
                        <ul>
                            <li>By visiting this page on our website: <a href="https://healthcareclub.in">https://healthcareclub.in</a></li>
                            <li>By sending us an email: <a href="mailto:info@healthcareclub.in">info@healthcareclub.in</a></li>
                        </ul>
                    </section>
                </article>
            </div>

            <Footer />
        </main>
    )
}
