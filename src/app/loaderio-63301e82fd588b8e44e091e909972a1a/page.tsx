import React from 'react';

const LoaderioVerificationPage: React.FC = () => (
    <div>
        <h1>Loader.io Verification</h1>
        <p>
            Please verify your site by adding the following meta tag to your site&apos;s <code>&lt;head&gt;</code> section:
        </p>
        <pre>
            <code>
                {`<meta name="loaderio" content="63301e82fd588b8e44e091e909972a1a" />`}
            </code>
        </pre>
        <p>
            Once you&apos;ve added the meta tag, you can proceed with Loader.io verification.
        </p>
    </div>
);

export default LoaderioVerificationPage;
