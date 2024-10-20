import Link from "next/link";
import React from "react";
import pageStyles from "./page.module.css";

const PrivacyAndPolicy = () => {
	return (
		<>
			<section className=" flex flex-col gap-5 mx-[5%] max-sm:mx-0 2xl:mx-0">
				<h1 className="text-center lg:text-2xl font-bold my-5">
					Posinnove Privacy Policy
				</h1>
				<div className="flex flex-col gap-2">
					<p>
						Posinnove ("we," "us," or "our") respects the privacy of our users
						("you" or "your"). This Privacy Policy describes how we collect,
						use, and disclose your personal information when you use our
						platform, the Posinnove platform (the "Platform") (
						<Link href={"https://www.posinnove.com/"} className="text-blue-600">
							https://www.posinnove.com/
						</Link>
						) , including any websites, mobile applications, or other online
						services or features we offer (collectively, the "Services").
					</p>
					<h1 className={pageStyles.title}>1. Information We Collect</h1>
					<div>
						<h2>
							We collect several types of information when you use the Services:
						</h2>
						<ul className={pageStyles.list}>
							<li>
								Information You Provide:
								<ul>
									<li>
										When you create an account, you may provide us with certain
										personal information, such as your name, email address,
										password, and demographic information.
									</li>
									<li>
										You may also provide us with information when you submit
										content, participate in projects, or communicate with us
										through the Services.
									</li>
								</ul>
							</li>
						</ul>
						<ul className={pageStyles.list}>
							<li>
								Information Collected Automatically:
								<ul>
									<li>
										We may collect certain information automatically when you
										use the Services, such as your IP address, browser type,
										operating system, the URLs of the referring and exit pages,
										and the dates and times of your visits.
									</li>
									<li>
										We may also collect information about your interactions with
										the Services, such as the pages you visit, the features you
										use, and the links you click.
									</li>
								</ul>
							</li>
						</ul>
						<ul className={pageStyles.list}>
							<li>
								Cookies and Other Tracking Technologies:
								<ul>
									<li>
										We may use cookies and other tracking technologies to
										collect information about your activity on the Services.
										Cookies are small files that are downloaded to your device
										when you visit a website. You can instruct your browser to
										refuse all cookies or to indicate when a cookie is being
										sent. However, if you do not accept cookies, you may not be
										able to use some portions of the Services.
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<h1 className={pageStyles.title}>2. Use of Your Information</h1>
					<div>
						<h2>We use your information to:</h2>
						<ul className={pageStyles.secondList}>
							<li>Provide and operate the Services;</li>
							<li>Create and maintain your account;</li>
							<li>Process your transactions;</li>
							<li>
								Send you marketing and promotional communications (with your
								consent);
							</li>
							<li>Respond to your inquiries and requests;</li>
							<li>Improve the Services;</li>
							<li>Analyze how you use the Services;</li>
							<li>Comply with legal and regulatory requirements.</li>
						</ul>
					</div>
					<h1 className={pageStyles.title}>3. Sharing of Your Information</h1>
					<div className="flex flex-col gap-4 ml-4">
						<p>
							We may share your information with third-party service providers
							who help us operate the Services. These service providers are
							contractually obligated to keep your information confidential and
							to use it only for the purposes for which we disclose it to them.
						</p>
						<p>
							We may also share your information with other third parties with
							your consent. For example, we may share your information with
							project partners when you participate in a project on the
							Platform.
						</p>
						<p>
							We may also disclose your information if required to do so by law
							or in the good faith belief that such disclosure is necessary to
							protect our rights or the rights of others.
						</p>
					</div>
					<h1 className={pageStyles.title}>4. Data Retention</h1>
					<div className="flex flex-col gap-4 ml-4">
						<p>
							We will retain your information for as long as your account is
							active or as needed to provide you with the Services. We may also
							retain your information for legal or regulatory reasons.
						</p>
					</div>
					<h1 className={pageStyles.title}>5. Your Choices</h1>
					<div className="flex flex-col gap-4 ml-4">
						<p>
							You can access and update your personal information in your
							account settings.
						</p>
						<p>
							You can also opt out of receiving marketing and promotional
							communications from us by following the unsubscribe instructions
							in those communications.
						</p>
					</div>
					<h1 className={pageStyles.title}>6. Children's Privacy</h1>
					<div className="flex flex-col gap-4 ml-4">
						<p>
							The Services are not directed to children under the age of 13. We
							do not knowingly collect personal information from children under
							13. If you are a parent or guardian and you believe that your
							child has provided us with personal information, please contact
							us. If we learn that we have collected personal information from a
							child under 13, we will delete that information from our systems.
						</p>
					</div>
					<h1 className={pageStyles.title}>7. Security</h1>
					<div className="flex flex-col gap-4 ml-4">
						<p>
							We take reasonable steps to protect your information from
							unauthorized access, disclosure, alteration, or destruction.
							However, no internet transmission or electronic storage is 100%
							secure. Therefore, we cannot guarantee the security of your
							information.
						</p>
					</div>
					<h1 className={pageStyles.title}>8. International Transfers</h1>
					<div className="flex flex-col gap-4 ml-4">
						<p>
							Your information may be transferred to and processed in countries
							other than your own country of residence. These countries may have
							different data protection laws than your own country.
						</p>
					</div>
					<h1 className={pageStyles.title}>
						9. Changes to this Privacy Policy
					</h1>
					<div className="flex flex-col gap-4 ml-4">
						<p>
							We may update this Privacy Policy from time to time. We will post
							any changes to this Privacy Policy on the Platform. You are
							advised to review this Privacy Policy periodically for any
							changes.
						</p>
					</div>
					<h1 className={pageStyles.title}>10. Contact Us</h1>
					<div className="flex flex-col gap-4 ml-4">
						<p>
							If you have any questions about this Privacy Policy, please
							contact us at{" "}
							<Link
								href={"https://posinnove@gmail.com"}
								target="_blank"
								className="text-blue-600"
							>
								posinnove@gmail.com{" "}
							</Link>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default PrivacyAndPolicy;
