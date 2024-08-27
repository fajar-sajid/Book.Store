import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-white bg-white">
      <div className="w-full max-w-4xl p-8 text-white bg-black rounded-lg shadow-lg">
        <h1 className="mb-6 text-4xl font-bold text-center text-yellow-400">Privacy Policy</h1>
        <p className="mb-4 text-xl">
          Your privacy is important to us. This privacy statement explains what personal data we collect from you, how we use it, and how we protect it.
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="mb-2 text-2xl font-semibold text-yellow-400">1. Information We Collect</h2>
            <p>
              We collect personal information such as your name, email address, and any other information you voluntarily provide to us when you use our services or contact us.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-2xl font-semibold text-yellow-400">2. How We Use Your Information</h2>
            <p>
              We use your information to provide, maintain, and improve our services, to communicate with you, and to protect against fraud and abuse.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-2xl font-semibold text-yellow-400">3. How We Protect Your Information</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. This includes encryption and secure servers.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-2xl font-semibold text-yellow-400">4. Your Choices</h2>
            <p>
              You may access, update, or delete your personal information by contacting us directly. You also have the right to opt out of receiving marketing communications.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-2xl font-semibold text-yellow-400">5. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-2xl font-semibold text-yellow-400">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at <a href="mailto:privacy@example.com" className="text-yellow-400 hover:text-yellow-500">privacy@example.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
