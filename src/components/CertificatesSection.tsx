import CertificateCard, {Certificate, certificates} from "./Certificate.tsx";
import {FC} from "react";

const CertificatesSection: FC = () => {
    return (
        <section id="certificates" className="py-12 bg-black">
            <div className="container mx-auto px-4">
                <p
                    className="
    text-8xl
    w-full
    text-center
    font-extrabold
    mb-10
    text-navy-blue
    bg-black
    py-4
    border-b-4
    border-navy-blue
    tracking-tight
    shadow-lg
  "
                >
                    Certificates
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((certificate: Certificate) => (
                        <CertificateCard key={certificate.id} certificate={certificate}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;