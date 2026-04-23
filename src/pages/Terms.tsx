import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const Terms = () => {
    return (
        <Layout>
            <SEO
                title="Terms and Conditions"
                description="Terms and conditions for DevZone System. Please read these terms carefully before using our services."
                url="https://devzonesystem.com/terms"
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
                            Terms & <span className="text-gradient">Conditions</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="prose prose-invert max-w-none space-y-8"
                        >
                            <section>
                                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                                <p className="text-muted-foreground mb-4">
                                    By accessing the DevZone System website and engaging our services, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
                                <p className="text-muted-foreground mb-4">
                                    DevZone System provides digital solutions including but not limited to Web Development, Mobile Applications, Desktop Applications, Artificial Intelligence Integration, Blockchain Development, Embedded Systems, and IT Consulting. The specific scope, timeline, and deliverables of each project will be outlined in a separate Statement of Work (SOW) or contract.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">3. Intellectual Property Rights</h2>
                                <p className="text-muted-foreground mb-4">
                                    Unless otherwise explicitly stated in a signed contract, the codebase, design, and intellectual property (IP) custom-developed for a client will be transferred to the client upon full payment of the project fees. DevZone System retains the right to use non-confidential project summaries and visuals for our portfolio and marketing, unless an NDA prohibits it.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">4. Payment and Billing</h2>
                                <p className="text-muted-foreground mb-4">
                                    Payment terms will be agreed upon before project commencement. We typically work on a milestone-based payment structure or an hourly/retainer model. Failure to make payments on time may result in the suspension of development work or withholding of deliverables until the account is settled.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">5. Warranties and Liability</h2>
                                <p className="text-muted-foreground mb-4">
                                    While we strive for excellence and write secure, high-performance code, DevZone System provides its services on an "as-is" basis. We offer post-launch support and bug fixes as defined in the project contract. In no event shall DevZone System be liable for indirect, incidental, or consequential damages arising out of the use or inability to use the delivered software.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
                                <p className="text-muted-foreground mb-4">
                                    We treat all client communications, ideas, and proprietary data with strict confidentiality. We are open to signing Non-Disclosure Agreements (NDAs) to legally guarantee the protection of your business concepts and sensitive information.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
                                <p className="text-muted-foreground mb-4">
                                    These Terms & Conditions shall be governed by and construed in accordance with the laws of our operating jurisdiction, without regard to its conflict of law provisions.
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

export default Terms;
