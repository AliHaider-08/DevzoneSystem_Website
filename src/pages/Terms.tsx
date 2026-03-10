import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const Terms = () => {
    return (
        <Layout>
            <SEO
                title="Terms of Service"
                description="Terms of service for DevZone System. Please read these terms carefully before using our services."
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
                            Terms of <span className="text-gradient">Service</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="prose prose-invert max-w-none space-y-8"
                        >
                            <section>
                                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                                <p className="text-muted-foreground">
                                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                                <p className="text-muted-foreground">
                                    Permission is granted to temporarily download one copy of the materials (information or software) on DevZone System's website for personal, non-commercial transitory viewing only.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
                                <p className="text-muted-foreground">
                                    The materials on DevZone System's website are provided on an 'as is' basis. DevZone System makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
                                <p className="text-muted-foreground">
                                    In no event shall DevZone System or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DevZone System's website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
                                <p className="text-muted-foreground">
                                    Any claim relating to DevZone System's website shall be governed by the laws of our operating jurisdiction without regard to its conflict of law provisions.
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
