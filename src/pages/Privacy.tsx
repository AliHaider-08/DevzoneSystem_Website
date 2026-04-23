import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const Privacy = () => {
    return (
        <Layout>
            <SEO
                title="Privacy Policy"
                description="Privacy policy for DevZone System. Learn how we collect, use, and protect your data."
                url="https://devzonesystem.com/privacy"
            />
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 gradient-glow opacity-30" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-8"
                        >
                            Privacy <span className="text-gradient">Policy</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="prose prose-invert max-w-none space-y-8"
                        >
                            <section>
                                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                                <p className="text-muted-foreground mb-4">
                                    At DevZone System, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you how we look after your personal data when you visit our website, engage with our services (including Web Development, Mobile Apps, Desktop Applications, AI Integration, Blockchain, and Embedded Systems), and tell you about your privacy rights.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                                <p className="text-muted-foreground mb-4">
                                    We collect information that helps us deliver high-quality digital solutions and improve your experience. This includes:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li><strong>Personal Information:</strong> Name, email address, phone number, and company details provided via contact forms or project inquiries.</li>
                                    <li><strong>Project Data:</strong> Information, files, code repositories, or API keys shared with us to execute development services.</li>
                                    <li><strong>Technical Data:</strong> IP address, browser type, device information, and analytics data when you visit our website.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
                                <p className="text-muted-foreground mb-4">
                                    We only use your data for legitimate business purposes, specifically:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                                    <li>To communicate with you regarding project proposals, updates, and support.</li>
                                    <li>To execute and deliver software development, consulting, and IT services.</li>
                                    <li>To improve our website functionality, security, and user experience.</li>
                                    <li>To comply with legal obligations or enforce our Terms & Conditions.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">4. Data Security and Confidentiality</h2>
                                <p className="text-muted-foreground mb-4">
                                    As a technology company, security is our priority. We implement robust encryption, secure coding practices, and strict access controls to protect your personal and project-related data. We regularly sign Non-Disclosure Agreements (NDAs) and do not share your proprietary information with third parties without explicit consent.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
                                <p className="text-muted-foreground mb-4">
                                    We may use third-party tools (such as analytics providers, cloud hosting like AWS/GCP, or communication platforms) to operate our business. These third parties are bound by their own privacy policies and strict data protection agreements.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                                <p className="text-muted-foreground">
                                    If you have any questions about this privacy policy, how we handle your data, or wish to request data deletion, please contact us at: <br/><br/>
                                    <strong>Email:</strong> devzonesystem@gmail.com<br/>
                                    <strong>Phone:</strong> 03250075364
                                </p>
                            </section>

                            <div className="pt-8 border-t border-border text-sm text-muted-foreground text-center">
                                Last updated: February 10, 2024
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Privacy;
