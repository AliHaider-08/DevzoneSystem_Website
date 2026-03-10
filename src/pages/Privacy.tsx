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
                                <p className="text-muted-foreground">
                                    At DevZone System, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you how we look after your personal data when you visit our website and tell you about your privacy rights.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">2. The Data We Collect</h2>
                                <p className="text-muted-foreground">
                                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                                    <li>Identity Data includes first name, last name, and title.</li>
                                    <li>Contact Data includes email address and telephone numbers.</li>
                                    <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                                    <li>Usage Data includes information about how you use our website, products and services.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
                                <p className="text-muted-foreground">
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                                    <li>To provide and maintain our Service.</li>
                                    <li>To notify you about changes to our Service.</li>
                                    <li>To provide customer care and support.</li>
                                    <li>To monitor the usage of the Service.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                                <p className="text-muted-foreground">
                                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                                <p className="text-muted-foreground">
                                    If you have any questions about this privacy policy or our privacy practices, please contact us at devzonesystem@gmail.com.
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
