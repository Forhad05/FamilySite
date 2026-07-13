import about from '../lib/sabina/about.json'
import qeacCertificateImg from '../assets/QEAC.png'

export default function SectionCredential() {
  return (
    <section className="section section-about">
      <div className="page-width">
        <div className="credential-badge">
          <span className="credential-icon">🎖️</span>
          <div>
            <strong>{about.credential.title}</strong>
            <p>
              {about.credential.issuedBy} · Graduate No. {about.credential.graduateNo} ·
              Issued {about.credential.issuedOn}
            </p>
            <p>{about.credential.note}</p>
          </div>
        </div>
        <div className="credential-certificate">
          <img
            src={qeacCertificateImg}
            alt={`${about.credential.holder}'s ${about.credential.title} certificate, issued by ${about.credential.issuedBy}`}
          />
        </div>
      </div>
    </section>
  )
}
